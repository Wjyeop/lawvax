import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { calculateMaxPageNum } from "../../../utils/admin";
import Plus from "../../../assets/images/ic_plus.svg";
import Search from "../../../assets/images/ic_admin_search.svg";
import Edit from "../../../assets/images/ic_admin_edit.svg";
import Trash from "../../../assets/images/ic_admin_trash.svg";
import Pagination from "../Common/Pagination";

type Props = {
  totalCount: number;
  list: any;
  setCurrentPage: (page: number) => void;
  currentPage: number;
  setSearchValue: (value: string) => void;
  handleSearch: (e: any) => void;
  onClickDeleteButton: (id: number) => void;
};

export default function NewsLetterContents({
  totalCount,
  list,
  setCurrentPage,
  currentPage,
  setSearchValue,
  handleSearch,
  onClickDeleteButton,
}: Props) {
  const navigation = useNavigate();
  const [currentPageGroup, setCurrentPageGroup] = useState(1);

  const totalPages = calculateMaxPageNum(totalCount, 9);

  const pagesPerGroup = 5;
  const startPage = (currentPageGroup - 1) * pagesPerGroup + 1;
  const endPage = Math.min(currentPageGroup * pagesPerGroup, totalPages);
  const pages = Array.from(
    { length: endPage - startPage + 1 },
    (_, i) => startPage + i
  );

  const handlePage = (num: number) => {
    setCurrentPage(num);
  };

  const onClickNextButton = () => {
    if (endPage < totalPages) {
      setCurrentPageGroup((prev) => prev + 1);
    }
  };

  const onClickPrevButton = () => {
    if (currentPageGroup > 1) {
      setCurrentPageGroup((prev) => prev - 1);
    }
  };

  const onClickEditButton = (id: number) => {
    navigation("/admin/post-register", { state: { id } });
  };

  return (
    <div className="admin-news-contents">
      <div className="admin-news-btnwrap">
        <Link to="/admin/news-letter-register">
          <button className="admin-control-btn">
            <img src={Plus} alt="플러스 아이콘" />
            <span>글쓰기</span>
          </button>
        </Link>
        <div className="admin-people-searchwrap">
          <img src={Search} alt="돋보기 아이콘" />
          <input
            type="text"
            placeholder="Search"
            className="admin-people-searchbox"
            onChange={(e) => setSearchValue(e.target.value)}
            onKeyDown={handleSearch}
          />
        </div>
      </div>
      <ul className="admin-news-itemWrap">
        {list.map(({ id, creator, title, category, createdAt }: any) => (
          <li key={id} className="admin-news-item">
            <span className="admin-creator">{creator}</span>
            <span className="admin-title">{title}</span>
            <span className="admin-category">{category}</span>
            <span className="admin-date">
              {new Date(createdAt).toLocaleDateString()}
            </span>
            <div className="admin-news-iconWrap">
              <img
                src={Edit}
                alt="설정 아이콘"
                onClick={() => onClickEditButton(id)}
                className="admin-news-icon"
              />
              <img
                src={Trash}
                alt="휴지통 아이콘"
                onClick={() => onClickDeleteButton(id)}
                className="admin-news-icon"
              />
            </div>
          </li>
        ))}
      </ul>
      {list.length > 0 && (
        <Pagination
          currentPage={currentPage}
          pages={pages}
          onClickPrevButton={onClickPrevButton}
          onClickNextButton={onClickNextButton}
          handlePage={handlePage}
        />
      )}
    </div>
  );
}
