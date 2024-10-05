import { useState } from "react";

import CategoryTab from "../../../components/Admin/CategoryTab";
import { WORK_CATEGORY_CONTENT } from "../../../components/Admin/constants";
import Photo from "../../../assets/images/ic_admin_photo.svg";
import InputWithYearAndText from "../../../components/Admin/InputWithYearAndText";
import InputWithText from "../../../components/Admin/InputWithText";

const DEFAULT_INPUT_COUNT = 3;
const DEFAULT_EXAM_INPUT_COUNT = 1;

export default function WorkCategoryManagement() {
  const [newsTab, setNewsTab] = useState(WORK_CATEGORY_CONTENT);
  const [selectCategory, setSelectCategory] = useState(
    WORK_CATEGORY_CONTENT[0] || ""
  );
  const [inputCount, setInputCount] = useState(DEFAULT_INPUT_COUNT);
  const [examInputCount, setExamInputCount] = useState(
    DEFAULT_EXAM_INPUT_COUNT
  );

  const handlePosition = (category: string) => {
    setSelectCategory(category);
  };

  const onClickPlusButton = () => {
    setInputCount((prev) => prev + 1);
  };

  const onClickDeleteButton = () => {
    setInputCount((prev) => prev - 1);
  };

  const onExamClickPlusButton = () => {
    setExamInputCount((prev) => prev + 1);
  };

  const onExamClickDeleteButton = () => {
    setExamInputCount((prev) => prev - 1);
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
        <div className="admin-work-contents">
          <div className="admin-photo-wrap">
            <img src={Photo} alt="사진 이미지" className="admin-photo" />
            <span className="admin-photo-text">대표 사진 등록</span>
          </div>
          <div className="admin-word-textarea">
            <span>설명</span>
            <textarea placeholder="간단한 설명 글을 작성해주세요." />
          </div>
          <div className="admin-work-inputWrap">
            <span>대표사례</span>
            {[...Array(inputCount)].map(() => (
              <InputWithYearAndText
                onClickPlusButton={onClickPlusButton}
                onClickDeleteButton={onClickDeleteButton}
              />
            ))}
          </div>
          <div className="admin-word-exam">
            <span>추가사례</span>
            {[...Array(examInputCount)].map(() => (
              <InputWithText
                onClickPlusButton={onExamClickPlusButton}
                onClickDeleteButton={onExamClickDeleteButton}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
