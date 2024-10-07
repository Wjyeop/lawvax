// src/utils/pdfUtils.ts

import { jsPDF } from "jspdf"; // 이로써 모듈로 인식됩니다.
import { _fonts } from "./font";
import img from "../assets/images/img";

export const generateMemberProfilePdf = (lawyerData: MemberItem) => {
  const doc = new jsPDF("p", "mm", "a4");
  // const imageUrl = lawyerData.mainImg;
  const imageUrl = img.lawyer4; // 임시 이미지
  const imageWidth = 60;
  const imageHeight = 90;
  const pageHeight = doc.internal.pageSize.height;
  const pageWidth = doc.internal.pageSize.width;

  doc.addFileToVFS("malgun.ttf", _fonts);
  doc.addFont("malgun.ttf", "malgun", "normal");
  doc.setFont("malgun");

  doc.setFontSize(20);
  doc.setFont("malgun");

  // 변호사 이름

  doc.text(lawyerData.nameKo, 20, 30);

  // 직책
  doc.setTextColor(126, 126, 126);
  doc.setFontSize(12);
  doc.text(lawyerData.position, 50, 30);
  doc.setTextColor(0, 0, 0);

  // 주요 경력 타이틀과 파란색 바
  doc.setFontSize(12);
  doc.text("주요 경력", 20, 50); // "주요 경력" 텍스트
  doc.setDrawColor(0, 102, 204); // 파란색으로 설정
  doc.setLineWidth(1);
  doc.line(18, 45, 18, 52); // 파란색 바 (세로선)
  doc.setFontSize(9);
  doc.text(lawyerData.firstMainCareer, 20, 58); // "주요 경력" 텍스트
  doc.text(lawyerData.secondMainCareer, 20, 62); // "주요 경력" 텍스트

  // 업무분야와 파란색 바
  doc.setFontSize(12);
  doc.text("업무 분야", 20, 80); // "주요 경력" 텍스트
  doc.setDrawColor(0, 102, 204); // 파란색으로 설정
  doc.setLineWidth(1);
  doc.line(18, 75, 18, 82); // 파란색 바 (세로선)
  doc.setFontSize(9);
  doc.text(lawyerData.workFields[0].workField, 20, 88); // "주요 경력" 텍스트
  doc.text(lawyerData.secondMainCareer, 20, 92); // "주요 경력" 텍스트

  // 프로필 이미지
  if (imageUrl) {
    doc.addImage(imageUrl, "jpeg", 110, 20, imageWidth, imageHeight);
  }

  // 가로줄
  doc.setLineWidth(1);
  doc.setDrawColor(126, 126, 126);
  doc.line(20, 110, pageWidth - 20, 110); // 가로선

  // 설명 텍스트 추가 (introduction)
  doc.setFontSize(11);
  doc.text(lawyerData.introduction, 20, 120, { maxWidth: 170 });

  // 가로줄
  doc.setLineWidth(1);
  doc.setDrawColor(126, 126, 126);
  doc.line(20, 155, pageWidth - 20, 155); // 가로선

  // 주요 처리 사례
  doc.setFontSize(12);
  doc.text("주요 처리 사례", 20, 165);
  doc.setDrawColor(0, 102, 204);
  doc.setLineWidth(1);
  doc.line(18, 160, 18, 167);
  doc.setFontSize(9);
  lawyerData.handleCases.slice(0, 3).forEach((handleCase, index) => {
    // 최대 3개까지만 표시
    doc.text(handleCase.content, 25, 171.5 + index * 5); // 간격을 7에서 5로 줄임
  });

  // 학력
  doc.setFontSize(12);
  doc.text("학력", 20, 190); // Y 좌표를 200에서 190으로 수정
  doc.setDrawColor(0, 102, 204);
  doc.setLineWidth(1);
  doc.line(18, 185, 18, 192); // Y 좌표를 195에서 185로 수정
  doc.setFontSize(9);
  lawyerData.educations.slice(0, 3).forEach((education, index) => {
    // 최대 3개까지만 표시
    doc.text(`${education.year} - ${education.content}`, 25, 196.5 + index * 5); // Y 좌표를 210에서 195로 수정
  });

  // 경력
  doc.setFontSize(12);
  doc.text("경력", 20, 215); // Y 좌표를 220에서 215로 수정
  doc.setDrawColor(0, 102, 204);
  doc.setLineWidth(1);
  doc.line(18, 210, 18, 217); // Y 좌표를 215에서 210으로 수정
  doc.setFontSize(9);
  lawyerData.careers.slice(0, 3).forEach((career, index) => {
    // 최대 3개까지만 표시
    doc.text(
      `${career.startYear} - ${career.endYear} ${career.content}`,
      25,
      221.5 + index * 5 // Y 좌표를 225에서 220으로 수정
    );
  });

  // 저서 활동 기타
  doc.setFontSize(12);
  doc.text("저서 활동 기타", 20, 240); // Y 좌표를 245에서 240으로 수정
  doc.setDrawColor(0, 102, 204);
  doc.setLineWidth(1);
  doc.line(18, 235, 18, 242); // Y 좌표를 240에서 235로 수정
  doc.setFontSize(9);
  lawyerData.licenses.slice(0, 3).forEach((license, index) => {
    // 최대 3개까지만 표시
    doc.text(`${license.content}`, 25, 246.5 + index * 5); // Y 좌표를 250에서 245로 수정
  });

  // 연락처 정보 추가
  doc.setFontSize(10);
  doc.text(`전화: ${lawyerData.workNumber}`, 20, pageHeight - 20);
  doc.text(`이메일: ${lawyerData.email}`, 20, pageHeight - 15);

  // PDF 저장
  doc.save(`${lawyerData.nameKo}_profile.pdf`);
};

interface Career {
  startYear: string;
  endYear: string;
  content: string;
}

interface Education {
  year: string;
  content: string;
}

interface HandleCase {
  startYear: string;
  endYear: string;
  content: string;
}

interface License {
  content: string;
}

interface WorkField {
  workField: string;
}

interface MemberItem {
  id: number;
  nameKo: string;
  nameEn: string;
  nameCh: string;
  position: string;
  email: string;
  mainImg: string;
  firstMainCareer: string;
  secondMainCareer: string;
  workNumber: string;
  faxNumber: string;
  introduction: string;
  language: string;
  careers: Career[];
  educations: Education[];
  handleCases: HandleCase[];
  licenses: License[];
  workFields: WorkField[];
}
