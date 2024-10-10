import { useState, useRef } from "react";

import DropdownSrc from "../../../assets/images/ic_admin_dropdowArr.svg";
import Divider from "./Divider";

type Props = {
  label?: string;
  value: string;
  isMultiple: boolean;
  handleCheck: (position: string) => void;
  list: string[];
};

export default function Dropdown({
  label,
  value,
  isMultiple,
  handleCheck,
  list,
}: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const onClick = (contents: string) => {
    handleCheck(contents);
    if (!isMultiple) {
      setIsOpen((prev) => !prev);
    }
  };

  return (
    <section ref={dropdownRef} className="admin-register-dropdownWrap">
      <p className="admin-register-label">{label}</p>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="admin-register-dropbtn"
      >
        <p className={!value || value === "선택" ? "admin-year-btnBas" : ""}>
          {value === "" ? "선택" : value}
        </p>
        <img src={DropdownSrc} alt="드롭다운 아이콘" />
      </button>
      <div>
        {isOpen && (
          <ul className="admin-dropList">
            {list.map((position) => (
              <>
                {position === "기업 감사/내부통제 센터" && <Divider />}
                <li key={`work-${position}`} className="admin-dropItem">
                  <label className="admin-custom-checkbox">
                    <input type="checkbox" onClick={() => onClick(position)} />
                    <span className="admin-checkmark"></span>
                    {position}
                  </label>
                </li>
              </>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
