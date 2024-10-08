// src/utils/pdfUtils.ts

import { jsPDF } from "jspdf"; // 이로써 모듈로 인식됩니다.
import { _fonts } from "./font";
import img from "../assets/images/img";

export const generateMemberProfilePdf = (lawyerData: MemberItem) => {
  const doc = new jsPDF("p", "mm", "a4");
  const imageUrl = lawyerData.mainImg ? lawyerData.mainImg : img.lawyer4;
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
  doc.text("주요 경력", 20, 50);
  doc.setDrawColor(0, 102, 204);
  doc.setLineWidth(1);
  doc.line(18, 45, 18, 52);
  doc.setFontSize(9);
  doc.text(lawyerData.firstMainCareer, 20, 58);
  doc.text(lawyerData.secondMainCareer, 20, 62);

  // 업무분야와 파란색 바
  doc.setFontSize(12);
  doc.text("업무 분야", 20, 80);
  doc.setDrawColor(0, 102, 204);
  doc.setLineWidth(1);
  doc.line(18, 75, 18, 82);
  doc.setFontSize(9);
  doc.text(lawyerData.workFields[0].workField, 20, 88);
  doc.text(lawyerData.secondMainCareer, 20, 92);

  // 프로필 이미지
  if (imageUrl) {
    doc.addImage(imageUrl, "jpeg", 110, 20, imageWidth, imageHeight);
  }

  // 가로줄
  doc.setLineWidth(1);
  doc.setDrawColor(126, 126, 126);
  doc.line(20, 110, pageWidth - 20, 110);

  // 설명 텍스트 추가 (introduction)
  doc.setFontSize(11);
  doc.text(lawyerData.introduction, 20, 120, { maxWidth: 170 });

  // 가로줄
  doc.setLineWidth(1);
  doc.setDrawColor(126, 126, 126);
  doc.line(20, 155, pageWidth - 20, 155);

  // 주요 처리 사례
  doc.setFontSize(12);
  doc.text("주요 처리 사례", 20, 165);
  doc.setDrawColor(0, 102, 204);
  doc.setLineWidth(1);
  doc.line(18, 160, 18, 167);
  doc.setFontSize(9);
  lawyerData.handleCases.slice(0, 3).forEach((handleCase, index) => {
    doc.text(handleCase.content, 25, 171.5 + index * 5);
  });

  // 학력
  doc.setFontSize(12);
  doc.text("학력", 20, 190);
  doc.setDrawColor(0, 102, 204);
  doc.setLineWidth(1);
  doc.line(18, 185, 18, 192);
  doc.setFontSize(9);
  lawyerData.educations.slice(0, 3).forEach((education, index) => {
    doc.text(`${education.year} - ${education.content}`, 25, 196.5 + index * 5); // Y 좌표를 210에서 195로 수정
  });

  // 경력
  doc.setFontSize(12);
  doc.text("경력", 20, 215);
  doc.setDrawColor(0, 102, 204);
  doc.setLineWidth(1);
  doc.line(18, 210, 18, 217);
  doc.setFontSize(9);
  lawyerData.careers.slice(0, 3).forEach((career, index) => {
    doc.text(
      `${career.startYear} - ${career.endYear} ${career.content}`,
      25,
      221.5 + index * 5
    );
  });

  // 저서 활동 기타
  doc.setFontSize(12);
  doc.text("저서 활동 기타", 20, 240);
  doc.setDrawColor(0, 102, 204);
  doc.setLineWidth(1);
  doc.line(18, 235, 18, 242);
  doc.setFontSize(9);
  lawyerData.licenses.slice(0, 3).forEach((license, index) => {
    doc.text(`${license.content}`, 25, 246.5 + index * 5);
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
