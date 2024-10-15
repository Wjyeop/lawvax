import { useState, useEffect } from "react";

import CategoryTab from "../../../components/Admin/Common/CategoryTab";
import { NEWS_LETTER_TAB_CONTENTS } from "../../../const/admin";
import NewsLetterContents from "../../../components/Admin/NewsLetter/NewsLetterContents";
import {
  getNewsLetterList,
  getNewsLetterCount,
  deleteNewsLetter,
} from "../../../api/admin";

const DEFAULT = "전체보기";
const DEFAULT_PAGE = 1;

export default function NewsLetterManagement() {
  const [newsLetterTab, setNewsLetterTab] = useState(NEWS_LETTER_TAB_CONTENTS);
  const [newsLetterTotalCount, setNewsLetterTotalCount] = useState(0);
  const [newsLetterList, setnewsLetterList] = useState([]);
  const [currentPage, setCurrentPage] = useState(DEFAULT_PAGE);
  const [selectCategory, setSelectCategory] = useState(
    Object.keys(newsLetterTab)[0] || DEFAULT
  );
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    (async () => {
      const {
        data: { totalCount, newsletterList },
      } = await getNewsLetterList(currentPage, selectCategory, searchValue);

      const { data } = await getNewsLetterCount();

      setNewsLetterTab(data);
      setNewsLetterTotalCount(totalCount);
      setnewsLetterList(newsletterList);
    })();
  }, [selectCategory, currentPage]);

  const handlePosition = (category: string) => {
    setSelectCategory(category);
  };

  const handleSearch = async (e: any) => {
    if (e.key === "Enter") {
      setCurrentPage(DEFAULT_PAGE);
      const {
        data: { totalCount, newsletterList },
      } = await getNewsLetterList(currentPage, selectCategory, searchValue);

      setNewsLetterTotalCount(totalCount);
      setnewsLetterList(newsletterList);
    }
  };

  const onClickDeleteButton = async (id: number) => {
    if (window.confirm("삭제하시겠습니까?")) {
      await deleteNewsLetter(id);
      const {
        data: { totalCount, newsletterList },
      } = await getNewsLetterList(currentPage, selectCategory, searchValue);
      const { data } = await getNewsLetterCount();

      setNewsLetterTab(data);
      setNewsLetterTotalCount(totalCount);
      setnewsLetterList(newsletterList);
    }
  };

  return (
    <section className="admin-common-container">
      <h2 className="admin-common-title">뉴스레터 관리</h2>
      <div className="admin-writing-wrapper">
        <CategoryTab
          list={newsLetterTab}
          onClick={handlePosition}
          selectCategory={selectCategory}
        />
        <NewsLetterContents
          totalCount={newsLetterTotalCount}
          list={newsLetterList}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
          setSearchValue={setSearchValue}
          handleSearch={handleSearch}
          onClickDeleteButton={onClickDeleteButton}
        />
      </div>
    </section>
  );
}
