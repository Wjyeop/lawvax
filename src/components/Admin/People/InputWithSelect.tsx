import { useState } from "react";

import Plus from "../../../assets/images/ic_admin_plus2.svg";
import Trash from "../../../assets/images/ic_admin_trash.svg";
import DropdownSrc from "../../../assets/images/ic_admin_dropdowArr.svg";

type Props = {
  index: number;
  value: any;
  handleYearChange: (index: number, year: number) => void;
  handleInputChange: (
    index: number,
    content: string,
    e: string,
    data: string
  ) => void;
  handleAddForm: (data: string) => void;
  handleRemoveForm: (index: number, data: string) => void;
};

export default function InputWithSelect({
  index,
  value,
  handleYearChange,
  handleInputChange,
  handleAddForm,
  handleRemoveForm,
}: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 40 }, (_, i) => currentYear - i);

  const onChange = (index: number, year: number) => {
    handleYearChange(index, year);
    setIsOpen(!isOpen);
  };

  return (
    <div className="admin-number-inputWrap">
      <section className="admin-year-btnWrap">
        <button
          className="admin-year-btn"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
        >
          <p className={!value ? "admin-year-btnBas" : ""}>
            {!value ? "선택" : value}
          </p>
          <img src={DropdownSrc} alt="드롭다운 아이콘" />
        </button>
        <div>
          {isOpen && (
            <ul className="admin-year-list">
              {years.map((year) => (
                <>
                  <li
                    key={`work-${year}`}
                    onClick={() => onChange(index, year)}
                  >
                    {year}
                  </li>
                </>
              ))}
            </ul>
          )}
        </div>
      </section>
      <input
        style={{ margin: "0 10px" }}
        type="text"
        placeholder="OO대학교 졸업"
        className="admin-text-input"
        onChange={(e) =>
          handleInputChange(index, "content", e.target.value, "education")
        }
      />
      <div className="admin-news-iconWrap">
        <img
          src={Plus}
          alt="더하기 아이콘"
          onClick={() => handleAddForm("education")}
          className="admin-news-icon"
        />
        <img
          src={Trash}
          alt="휴지통 아이콘"
          onClick={() => handleRemoveForm(index, "education")}
          className="admin-news-icon"
        />
      </div>
    </div>
  );
}
