import { useState } from "react";

import { NEWS_LETTER_LIST_CONTENTS } from "./constants";
import { calculateMaxPageNum } from "../../utils/admin";
import Plus from "../../assets/images/ic_plus.svg";
import Search from "../../assets/images/ic_admin_search.svg";
import Edit from "../../assets/images/ic_admin_edit.svg";
import Trash from "../../assets/images/ic_admin_trash.svg";
import Pagination from "./Pagination";

const DEFAULT_PAGE = 1;

export default function NewsLetterContents() {
  const [currentPage, setCurrentPage] = useState(DEFAULT_PAGE);

  const { totalCount, newsletterList } = NEWS_LETTER_LIST_CONTENTS;
  const totalPages = calculateMaxPageNum(totalCount, 9);

  const handlePage = (num: number) => {
    setCurrentPage(num);
  };

  const onClickPrevButton = () => {
    if (currentPage === 1) {
      return;
    }

    return setCurrentPage((prev) => prev - 1);
  };

  const onClickNextButton = () => {
    if (currentPage === totalPages) {
      return;
    }

    return setCurrentPage((prev) => prev + 1);
  };

  return (
    <div className="admin-news-contents">
      <div className="admin-news-btnwrap">
        <button className="admin-control-btn">
          <img src={Plus} alt="플러스 아이콘" />
          <span>글쓰기</span>
        </button>
        <div className="admin-people-searchwrap">
          <img src={Search} alt="돋보기 아이콘" />
          <input
            type="text"
            placeholder="Search"
            className="admin-people-searchbox"
          />
        </div>
      </div>
      <ul className="admin-news-itemWrap">
        {newsletterList.map(({ id, creator, title, category, createdAt }) => (
          <li key={id} className="admin-news-item">
            <span className="admin-creator">{creator}</span>
            <span className="admin-title">{title}</span>
            <span className="admin-category">{category}</span>
            <span className="admin-date">
              {new Date(createdAt).toLocaleDateString()}
            </span>
            <div className="admin-news-iconWrap">
              <img src={Edit} alt="설정 아이콘" className="admin-news-icon" />
              <img
                src={Trash}
                alt="휴지통 아이콘"
                className="admin-news-icon"
              />
            </div>
          </li>
        ))}
      </ul>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onClickPrevButton={onClickPrevButton}
        onClickNextButton={onClickNextButton}
        handlePage={handlePage}
      />
    </div>
  );
}
