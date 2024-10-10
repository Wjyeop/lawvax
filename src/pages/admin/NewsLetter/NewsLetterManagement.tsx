import { useState } from "react";

import CategoryTab from "../../../components/Admin/Common/CategoryTab";
import {
  NEWS_LETTER_TAB_CONTENTS,
  NEWS_LETTER_LIST_CONTENTS,
} from "../../../const/admin";
import NewsLetterContents from "../../../components/Admin/NewsLetter/NewsLetterContents";

const DEFAULT = "전체보기";

export default function NewsLetterManagement() {
  const [newsTab, setNewsTab] = useState(NEWS_LETTER_TAB_CONTENTS);
  const [selectCategory, setSelectCategory] = useState(
    Object.keys(newsTab)[0] || DEFAULT
  );

  const handlePosition = (category: string) => {
    setSelectCategory(category);
  };

  const filteredList =
    selectCategory === DEFAULT
      ? NEWS_LETTER_LIST_CONTENTS.newsletterList
      : NEWS_LETTER_LIST_CONTENTS.newsletterList.filter(
          (item) => item.category === selectCategory
        );

  return (
    <section className="admin-common-container">
      <h2 className="admin-common-title">뉴스레터 관리</h2>
      <div className="admin-writing-wrapper">
        <CategoryTab
          list={newsTab}
          onClick={handlePosition}
          selectCategory={selectCategory}
        />
        <NewsLetterContents
          totalCount={NEWS_LETTER_LIST_CONTENTS.totalCount}
          list={filteredList}
        />
      </div>
    </section>
  );
}
