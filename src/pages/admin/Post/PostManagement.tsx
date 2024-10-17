import { useState, useEffect } from "react";

import CategoryTab from "../../../components/Admin/Common/CategoryTab";
import { POST_TAB_CONTENT } from "../../../const/admin";
import PostContents from "../../../components/Admin/Post/PostContents";
import { getPostCount, getPostList, deletePost } from "../../../api/admin";

const DEFAULT = "전체보기";
const DEFAULT_PAGE = 1;

export default function PostManagement() {
  const [newsTab, setNewsTab] = useState(POST_TAB_CONTENT);
  const [newsTotalCount, setNewsTotalCount] = useState(0);
  const [newsList, setnewsList] = useState([]);
  const [currentPage, setCurrentPage] = useState(DEFAULT_PAGE);
  const [selectCategory, setSelectCategory] = useState(
    Object.keys(newsTab)[0] || DEFAULT
  );
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    (async () => {
      const {
        data: { totalCount, newsList },
      } = await getPostList(currentPage, selectCategory, searchValue);
      const { data } = await getPostCount();

      setNewsTab(data);
      setNewsTotalCount(totalCount);
      setnewsList(newsList);
    })();
  }, [selectCategory, currentPage]);

  const handlePosition = (category: string) => {
    setSelectCategory(category);
  };

  const handleSearch = async (e: any) => {
    if (e.key === "Enter") {
      setCurrentPage(DEFAULT_PAGE);
      const {
        data: { totalCount, newsList },
      } = await getPostList(currentPage, selectCategory, searchValue);

      setNewsTotalCount(totalCount);
      setnewsList(newsList);
    }
  };

  const onClickDeleteButton = async (id: number) => {
    if (window.confirm("삭제하시겠습니까?")) {
      await deletePost(id);
      const {
        data: { totalCount, newsList },
      } = await getPostList(currentPage, selectCategory, searchValue);
      const { data } = await getPostCount();

      setNewsTab(data);
      setNewsTotalCount(totalCount);
      setnewsList(newsList);
    }
  };

  return (
    <section className="admin-common-container">
      <h2 className="admin-common-title">게시글 관리</h2>
      <div className="admin-writing-wrapper">
        <CategoryTab
          list={newsTab}
          onClick={handlePosition}
          selectCategory={selectCategory}
        />
        <PostContents
          totalCount={newsTotalCount}
          list={newsList}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
          handleSearch={handleSearch}
          setSearchValue={setSearchValue}
          onClickDeleteButton={onClickDeleteButton}
        />
      </div>
    </section>
  );
}
