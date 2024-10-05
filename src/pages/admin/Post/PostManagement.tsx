import { useState } from "react";

import CategoryTab from "../../../components/Admin/CategoryTab";
import {
  POST_TAB_CONTENT,
  POST_LIST_CONTENT,
} from "../../../components/Admin/constants";
import PostContents from "../../../components/Admin/PostContents";

const DEFAULT = "전체보기";

export default function PostManagement() {
  const [newsTab, setNewsTab] = useState(POST_TAB_CONTENT);
  const [selectCategory, setSelectCategory] = useState(
    Object.keys(newsTab)[0] || DEFAULT
  );

  const handlePosition = (category: string) => {
    setSelectCategory(category);
  };

  const filteredList =
    selectCategory === DEFAULT
      ? POST_LIST_CONTENT.newsList
      : POST_LIST_CONTENT.newsList.filter(
          (item) => item.category === selectCategory
        );

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
          totalCount={POST_LIST_CONTENT.totalCount}
          list={filteredList}
        />
      </div>
    </section>
  );
}
