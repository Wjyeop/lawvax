import { useState, useEffect, ChangeEvent } from "react";

import { getWorkCategory, updateWorkCategory } from "../../../api/admin";
import CategoryTab from "../../../components/Admin/Common/CategoryTab";
import { WORK_CATEGORY_CONTENT } from "../../../const/admin";
import Photo from "../../../assets/images/ic_admin_photo.svg";
import InputWithYearAndText from "../../../components/Admin/WorkCategory/InputWithYearAndText";
import InputWithText from "../../../components/Admin/WorkCategory/InputWithText";

const DEFAULT_TAB = "형사";

interface MainCases {
  start_year: string;
  end_year: string;
  content: string;
}

interface SubCases {
  content: string;
}

export default function WorkCategoryManagement() {
  const [isLoading, setIsLoading] = useState(false);
  const [selectCategory, setSelectCategory] = useState(DEFAULT_TAB || "");
  const [workCategoryInfo, setWorkCategoryInfo] = useState<any>();
  const [mainCases, setMainCases] = useState<MainCases[]>([]);
  const [subCases, setSubCases] = useState<SubCases[]>([]);

  useEffect(() => {
    (async () => {
      const { data } = await getWorkCategory(selectCategory);

      setWorkCategoryInfo(data);
      setMainCases(data.mainCases);
      setSubCases(data.subCases);
    })();
  }, [selectCategory]);

  const handlePosition = (category: string) => {
    setSelectCategory(category);
  };

  const handleInputChange = (
    index: number,
    field: string,
    value: string,
    data: string
  ) => {
    if (data === "main") {
      const newMainCases: any = [...mainCases];
      newMainCases[index][field] = value;
      return setMainCases(newMainCases);
    }
    if (data === "sub") {
      const newSubCases: any = [...subCases];
      newSubCases[index][field] = value;
      return setSubCases(newSubCases);
    }
  };

  const handleAddForm = (data: string) => {
    if (data === "main") {
      return setMainCases([
        ...mainCases,
        {
          start_year: "",
          end_year: "",
          content: "",
        },
      ]);
    }
    if (data === "sub") {
      return setSubCases([
        ...subCases,
        {
          content: "",
        },
      ]);
    }
  };

  const handleRemoveForm = (index: number, data: string) => {
    if (data === "main") {
      if (mainCases.length <= 1) return;
      const newMainCases = mainCases.filter((_: any, i: number) => i !== index);
      return setMainCases(newMainCases);
    }

    if (data === "sub") {
      if (subCases.length <= 1) return;
      const newSubCases = subCases.filter((_: any, i: number) => i !== index);
      return setSubCases(newSubCases);
    }
  };

  const onClickSaveButton = async () => {
    if (!workCategoryInfo) return;

    setIsLoading(true);

    const dataToSend = {
      introduction: workCategoryInfo.introduction,
      mainImg: workCategoryInfo.mainImg,
      mainCases: mainCases.map((caseItem) => ({
        start_year: caseItem.start_year,
        end_year: caseItem.end_year,
        content: caseItem.content,
      })),
      subCases: subCases.map((caseItem) => ({
        content: caseItem.content,
      })),
    };

    try {
      await updateWorkCategory(selectCategory, dataToSend);
      alert("저장이 완료되었습니다.");
    } catch (error) {
      console.error("저장 중 오류 발생:", error);
      alert("저장에 실패했습니다. 다시 시도해주세요.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="admin-common-container">
      <h2 className="admin-common-title">게시글 관리</h2>
      <div className="admin-writing-wrapper">
        <CategoryTab
          list={WORK_CATEGORY_CONTENT}
          onClick={handlePosition}
          selectCategory={selectCategory}
        />
        <div className="admin-work-contents">
          <div className="admin-photo-wrap">
            <img
              src={workCategoryInfo?.mainImg || Photo}
              alt="사진 이미지"
              className="admin-photo"
            />
            <span className="admin-photo-text">대표 사진 등록</span>
          </div>
          <div className="admin-word-textarea">
            <span>설명</span>
            <textarea
              placeholder="간단한 설명 글을 작성해주세요."
              value={workCategoryInfo?.introduction || ""}
              onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                setWorkCategoryInfo({
                  ...workCategoryInfo,
                  introduction: e.target.value,
                })
              }
            />
          </div>
          <div className="admin-work-inputWrap">
            <span>대표사례</span>
            {(mainCases.length > 0 ? mainCases : [{}]).map((value, idx) => (
              <InputWithYearAndText
                key={`work-field-primary-${idx}`}
                numPlaceholder="1995"
                textPlaceholder="OO그룹 감사업무 대행 및 고소·고발 대리"
                handleInputChange={handleInputChange}
                handleAddForm={handleAddForm}
                handleRemoveForm={handleRemoveForm}
                data="main"
                idx={idx}
                value={value}
              />
            ))}
          </div>
          <div className="admin-word-exam">
            <span>추가사례</span>
            {(subCases.length > 0 ? subCases : [{}]).map((value, idx) => (
              <InputWithText
                key={`work-field-extra-${idx}`}
                handleInputChange={handleInputChange}
                handleAddForm={handleAddForm}
                handleRemoveForm={handleRemoveForm}
                data="sub"
                idx={idx}
                value={value}
              />
            ))}
          </div>
          <div className="admin-register-btnWrap">
            <button
              type="button"
              disabled={isLoading}
              onClick={onClickSaveButton}
              className="admin-register-savebtn"
            >
              저장
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
