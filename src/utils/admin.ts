import {
  Career,
  Education,
  Licenses,
} from "../pages/admin/People/PeopleRegister";

export const calculateMaxPageNum = (
  totalCount: number,
  itemsPerPage: number
) => {
  return Math.ceil(totalCount / itemsPerPage);
};

export const validateEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    throw new Error("이메일 양식을 확인해주세요.");
  }
};

export const validatePhoneNumber = (phoneNumber: string) => {
  if (phoneNumber.length !== 13) {
    throw new Error("전화번호 양식을 확인해주세요.");
  }
};

export const validateImage = (image: File | null) => {
  if (!image) {
    throw new Error("이미지를 등록해주세요.");
  }
};

export const validateRequiredValue = (profile: any) => {
  const {
    nameKo,
    workNumber,
    email,
    introduction,
    position,
    firstMainCareer,
    workFields,
  } = profile;
  if (
    !nameKo ||
    !workNumber ||
    !email ||
    !introduction ||
    !position ||
    !firstMainCareer ||
    workFields.length === 0
  ) {
    throw new Error("필수 값이 비어 있습니다. 모든 필수 값을 입력해주세요.");
  }
};

export const formatPhoneNumber = (value: string) => {
  const cleaned = value.replace(/\D/g, "");

  const match = cleaned.match(/^(\d{0,3})(\d{0,4})(\d{0,4})$/);

  if (match) {
    const formatted = `${match[1]}${match[2] ? `-${match[2]}` : ""}${match[3] ? `-${match[3]}` : ""}`;

    return formatted;
  }
  return value;
};

export const formatEmptyObject = (
  careers: Career[],
  educations: Education[],
  licenses: Licenses[],
  handleCases: Career[]
) => {
  const filteredCareers = careers.filter((career) => career.content);
  const filteredEducations = educations.filter((edu) => edu.content);
  const filteredLicenses = licenses.filter((license) => license.content);
  const filteredHandleCases = handleCases.filter(
    (handleCase) => handleCase.content
  );

  return {
    filteredCareers,
    filteredEducations,
    filteredLicenses,
    filteredHandleCases,
  };
};

export const generateFormData = (image: string | File) => {
  const formData = new FormData();
  formData.append("file", image);

  return formData;
};

export const filterStringForParameter = (string: string) => {
  return string.replace("&", "");
};
