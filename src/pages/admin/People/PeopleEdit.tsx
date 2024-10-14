import { useState, useMemo, useRef, ChangeEvent, useEffect } from "react";

import { updatePeople, createImage, getPeopleItem } from "../../../api/admin";
import LabelInput from "../../../components/Admin/People/LabelInput";
import Dropdown from "../../../components/Admin/Common/Dropdown";
import InputWithYearAndText from "../../../components/Admin/People/InputWithYearAndText";
import InputWithSelect from "../../../components/Admin/People/InputWithSelect";
import InputWithText from "../../../components/Admin/People/InputWithText";
import CheckBox from "../../../components/Admin/Common/CheckBox";
import {
  MAIN_TASKS_LIST,
  WORK_POSITION_LIST,
  ADD_TASKS_LIST,
} from "../../../const/admin";
import Photo from "../../../assets/images/ic_admin_photo.svg";
import {
  validateEmail,
  validatePhoneNumber,
  validateRequiredValue,
  formatPhoneNumber,
  formatEmptyObject,
  generateFormData,
} from "../../../utils/admin";
import { useNavigate, useParams } from "react-router-dom";

export interface Career {
  startYear: string;
  endYear: string;
  content: string;
}

export interface Education {
  year: string;
  content: string;
}

export interface Licenses {
  content: string;
}

export default function PeopleEdit() {
  const navigate = useNavigate();
  const { id } = useParams();

  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string>("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [isCheck, setIsCheck] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [profile, setProfile] = useState<any>({
    nameKo: "",
    nameCh: "",
    workNumber: "",
    email: "",
    introduction: "",
    position: "",
    mainImg: "",
    firstMainCareer: "",
    secondMainCareer: "",
    isVisible: true,
    workFields: [],
  });
  const [careers, setCareers] = useState<Career[]>([
    {
      startYear: "",
      endYear: "",
      content: "",
    },
    {
      startYear: "",
      endYear: "",
      content: "",
    },
    {
      startYear: "",
      endYear: "",
      content: "",
    },
  ]);
  const [educations, setEducations] = useState<Education[]>([
    { year: "", content: "" },
    { year: "", content: "" },
    { year: "", content: "" },
  ]);
  const [licenses, setLicenses] = useState<Licenses[]>([
    {
      content: "",
    },
    {
      content: "",
    },
    {
      content: "",
    },
  ]);
  const [handleCases, setHandleCases] = useState<Career[]>([
    {
      startYear: "",
      endYear: "",
      content: "",
    },
    {
      startYear: "",
      endYear: "",
      content: "",
    },
    {
      startYear: "",
      endYear: "",
      content: "",
    },
  ]);

  useEffect(() => {
    (async () => {
      const { data } = await getPeopleItem(Number(id));
      console.log(data);
      setIsCheck(data.isVisible);
      setProfile({
        ...profile,
        nameKo: data.nameKo,
        nameCh: data.nameCh,
        position: data.position,
        workFields: data.workFields,
        workNumber: data.workNumber,
        email: data.email,
        introduction: data.introduction,
        firstMainCareer: data.firstMainCareer,
        secondMainCareer: data.secondMainCareer,
      });
      setCareers(data.careers.length > 0 ? data.careers : careers);
      setEducations(data.educations.length > 0 ? data.educations : educations);
      setLicenses(data.licenses.length > 0 ? data.licenses : licenses);
      setHandleCases(
        data.handleCases.length > 0 ? data.handleCases : handleCases
      );
      setPreviewUrl(data.mainImg);
    })();
  }, [id]);

  const handleSingleCheck = () => {
    setIsCheck((prev) => !prev);
  };

  const handleYearChange = (index: number, year: string) => {
    const newEducations = [...educations];
    newEducations[index].year = year;
    return setEducations(newEducations);
  };

  const handleInputChange = (
    index: number,
    field: string,
    value: string,
    data: string
  ) => {
    if (data === "education") {
      const newEducations: any = [...educations];
      newEducations[index][field] = value;
      return setEducations(newEducations);
    }

    if (data === "careers") {
      const newCareers: any = [...careers];
      newCareers[index][field] = value;
      return setCareers(newCareers);
    }

    if (data === "handleCases") {
      const newHandleCases: any = [...handleCases];
      newHandleCases[index][field] = value;
      return setHandleCases(newHandleCases);
    }

    if (data === "licenses") {
      const newLicenses: any = [...licenses];
      newLicenses[index][field] = value;
      return setLicenses(newLicenses);
    }
  };

  const handleAddForm = (data: string) => {
    if (data === "education") {
      return setEducations([...educations, { year: "", content: "" }]);
    }
    if (data === "careers") {
      return setCareers([
        ...careers,
        {
          startYear: "",
          endYear: "",
          content: "",
        },
      ]);
    }
    if (data === "handleCases") {
      return setHandleCases([
        ...handleCases,
        {
          startYear: "",
          endYear: "",
          content: "",
        },
      ]);
    }
    if (data === "licenses") {
      return setLicenses([...licenses, { content: "" }]);
    }
  };

  const handleRemoveForm = (index: number, data: string) => {
    if (data === "education") {
      if (educations.length <= 1) return;
      const newEducations = educations.filter(
        (_: any, i: number) => i !== index
      );
      return setEducations(newEducations);
    }
    if (data === "careers") {
      if (careers.length <= 1) return;
      const newCareers = careers.filter((_: any, i: number) => i !== index);
      return setCareers(newCareers);
    }
    if (data === "handleCases") {
      if (handleCases.length <= 1) return;
      const newHandleCases = handleCases.filter(
        (_: any, i: number) => i !== index
      );
      return setHandleCases(newHandleCases);
    }
    if (data === "licenses") {
      if (licenses.length <= 1) return;
      const newLicenses = licenses.filter((_: any, i: number) => i !== index);
      return setLicenses(newLicenses);
    }
  };

  const handlePosition = (position: string) => {
    setProfile({ ...profile, position });
  };

  const handleWorkFields = (work: string) => {
    const newWorkFields = [...profile.workFields];
    const index = newWorkFields.findIndex((field) => field.workField === work);
    if (index === -1) {
      const temp = { workField: work };
      newWorkFields.push(temp);
    } else {
      newWorkFields.splice(index, 1);
    }

    setProfile({ ...profile, workFields: newWorkFields });
  };

  const dropdownValue = useMemo(() => {
    if (profile.workFields.length < 1) {
      return "선택";
    }

    return profile.workFields.length > 1
      ? `${profile.workFields[0].workField} 외 ${profile.workFields.length}개`
      : profile.workFields[0].workField;
  }, [profile.workFields]);

  const checkedItems = useMemo(() => {
    return profile.workFields.map((field: any) => field.workField);
  }, [profile.workFields]);

  const uploadImage = async (image: File | null) => {
    if (image) {
      const formData = generateFormData(image);
      const { data } = await createImage(formData);

      return data;
    }
  };

  const onClickSaveButton = async () => {
    try {
      setIsLoading(true);
      const url = await uploadImage(imageFile);

      validateRequiredValue(profile);
      validateEmail(profile.email);
      validatePhoneNumber(profile.workNumber);
      const {
        filteredCareers,
        filteredEducations,
        filteredLicenses,
        filteredHandleCases,
      } = formatEmptyObject(careers, educations, licenses, handleCases);
      const combinedData = {
        ...profile,
        careers: filteredCareers,
        educations: filteredEducations,
        licenses: filteredLicenses,
        handleCases: filteredHandleCases,
        isVisible: !isCheck,
        mainImg: url,
      };

      await updatePeople(id, combinedData);
      navigate("/admin/people-management");
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];

      if (file && file.type.match("image.*")) {
        const imageUrl = URL.createObjectURL(file);
        setPreviewUrl(imageUrl);
        setImageFile(file);
        e.target.value = "";
      }
    }
  };

  return (
    <section className="admin-register-container">
      <h2 className="admin-common-title">구성원 등록</h2>
      <div className="admin-people-registerWrap">
        <div className="admin-photo-wrap">
          <img
            onClick={handleClick}
            src={previewUrl || Photo}
            alt="사진 이미지"
            className="admin-photo"
          />
          <span className="admin-photo-text">대표 사진 등록</span>
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            style={{ display: "none" }}
            onChange={handleImageChange}
          />
        </div>
        <div className="admin-register-inputCon">
          <div className="admin-register-half">
            <div className="admin-register-innerInputWrap">
              <LabelInput
                label="이름(한글)"
                placeholder="홍길동"
                type="text"
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setProfile({ ...profile, nameKo: e.target.value })
                }
                value={profile.nameKo}
              />
              <LabelInput
                label="이름(한문)"
                placeholder="洪吉童"
                type="text"
                value={profile.nameCh}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setProfile({ ...profile, nameCh: e.target.value })
                }
              />
            </div>
            <div className="admin-register-innerDropdownWrap">
              <Dropdown
                label="직책"
                value={profile.position}
                isMultiple={false}
                handleCheck={handlePosition}
                list={WORK_POSITION_LIST}
              />
              <Dropdown
                label="주요업무"
                value={dropdownValue}
                isMultiple
                handleCheck={handleWorkFields}
                list={[...MAIN_TASKS_LIST, ...ADD_TASKS_LIST]}
                checkedItems={checkedItems}
              />
            </div>
            <div className="admin-register-innerInputWrap">
              <LabelInput
                label="전화번호"
                placeholder="010-0000-0000"
                value={profile.workNumber}
                type="text"
                maxLength={13}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setProfile({
                    ...profile,
                    workNumber: formatPhoneNumber(e.target.value),
                  })
                }
              />
              <LabelInput
                label="E-mail"
                placeholder="hongildong@lawvax.co.kr"
                type="text"
                value={profile.email}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setProfile({ ...profile, email: e.target.value })
                }
              />
            </div>
            <div className="admin-register-textarea">
              <span>소개</span>
              <textarea
                placeholder="간단한 소개 글을 작성해주세요."
                value={profile.introduction}
                onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                  setProfile({ ...profile, introduction: e.target.value })
                }
              />
            </div>
            <div className="admin-register-innerInputWrap">
              <LabelInput
                label="주요경력"
                placeholder="1순위 입력"
                type="text"
                value={profile.firstMainCareer}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setProfile({ ...profile, firstMainCareer: e.target.value })
                }
              />
              <LabelInput
                placeholder="2순위 입력"
                type="text"
                value={profile.secondMainCareer}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setProfile({ ...profile, secondMainCareer: e.target.value })
                }
              />
            </div>
          </div>
          <div className="admin-register-half">
            <div className="admin-register-education">
              <span>학력</span>
              {educations.map((_, index) => (
                <InputWithSelect
                  key={`educations-${index}`}
                  index={index}
                  value={educations[index]}
                  handleYearChange={handleYearChange}
                  handleInputChange={handleInputChange}
                  handleAddForm={handleAddForm}
                  handleRemoveForm={handleRemoveForm}
                />
              ))}
            </div>
            <div className="admin-register-career">
              <span>경력</span>
              {careers.map((_, index) => (
                <InputWithYearAndText
                  key={`careers-${index}`}
                  index={index}
                  value={careers[index]}
                  numPlaceholder="1990"
                  textPlaceholder="제31회 사법시험 합격"
                  handleAddForm={handleAddForm}
                  handleRemoveForm={handleRemoveForm}
                  handleInputChange={handleInputChange}
                  data="careers"
                />
              ))}
            </div>
            <div className="admin-register-exam">
              <span>주요 처리사례</span>
              {handleCases.map((_, index) => (
                <InputWithYearAndText
                  key={`handleCases-${index}`}
                  index={index}
                  value={handleCases[index]}
                  numPlaceholder="1995"
                  textPlaceholder="OO그룹 감사업무 대행 및 고소·고발 대리"
                  handleAddForm={handleAddForm}
                  handleRemoveForm={handleRemoveForm}
                  handleInputChange={handleInputChange}
                  data="handleCases"
                />
              ))}
            </div>
            <div className="admin-register-exam">
              <span>저서/활동/기타</span>
              {licenses.map((_, index: number) => (
                <InputWithText
                  key={`licenses-${index}`}
                  index={index}
                  value={licenses[index]}
                  handleAddForm={handleAddForm}
                  handleRemoveForm={handleRemoveForm}
                  handleInputChange={handleInputChange}
                />
              ))}
            </div>
          </div>
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
          <CheckBox label="비공개" handleSingleCheck={handleSingleCheck} />
        </div>
      </div>
    </section>
  );
}
