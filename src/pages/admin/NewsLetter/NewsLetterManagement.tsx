import { useState } from "react";

import CategoryTab from "../../../components/Admin/CategoryTab";
import { NEWS_LETTER_TAB_CONTENTS } from "../../../components/Admin/constants";
import NewsLetterContents from "../../../components/Admin/NewsLetterContents";

const DEFAULT = "전체보기";

export default function NewsLetterManagement() {
  const [newsTab, setNewsTab] = useState(NEWS_LETTER_TAB_CONTENTS);
  const [selectCategory, setSelectCategory] = useState(
    Object.keys(newsTab)[0] || DEFAULT
  );

  const handlePosition = (category: string) => {
    setSelectCategory(category);
  };

  return (
    <section className="admin-common-container">
      <h2 className="admin-common-title">뉴스레터 관리</h2>
      <div className="admin-writing-wrapper">
        <CategoryTab
          list={newsTab}
          onClick={handlePosition}
          selectCategory={selectCategory}
        />
        <NewsLetterContents />
      </div>
    </section>
  );
}
