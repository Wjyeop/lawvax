import Plus from "../../../assets/images/ic_admin_plus2.svg";
import Trash from "../../../assets/images/ic_admin_trash.svg";

type Props = {
  numPlaceholder: string;
  textPlaceholder: string;
  handleInputChange: (
    index: number,
    content: string,
    e: string,
    data: string
  ) => void;
  handleAddForm: (data: string) => void;
  handleRemoveForm: (idx: number, data: string) => void;
  data: string;
  idx: number;
  value: any;
};

export default function InputWithYearAndText({
  numPlaceholder,
  textPlaceholder,
  handleInputChange,
  handleAddForm,
  handleRemoveForm,
  data,
  idx,
  value,
}: Props) {
  return (
    <div className="admin-number-inputWrap">
      <input
        type="number"
        value={value?.start_year || ""}
        placeholder={numPlaceholder}
        onChange={(e) =>
          handleInputChange(idx, "start_year", e.target.value, "main")
        }
        className="admin-number-input"
      />
      <span>~</span>
      <input
        type="number"
        value={value?.end_year || ""}
        placeholder={numPlaceholder}
        onChange={(e) =>
          handleInputChange(idx, "end_year", e.target.value, "main")
        }
        className="admin-number-input"
      />
      <input
        style={{ margin: "0 10px" }}
        type="text"
        value={value?.content || ""}
        placeholder={textPlaceholder}
        onChange={(e) =>
          handleInputChange(idx, "content", e.target.value, "main")
        }
        className="admin-text-input"
      />
      <div className="admin-news-iconWrap">
        <img
          src={Plus}
          alt="더하기 아이콘"
          onClick={() => handleAddForm(data)}
          className="admin-news-icon"
        />
        <img
          src={Trash}
          alt="휴지통 아이콘"
          onClick={() => handleRemoveForm(idx, data)}
          className="admin-news-icon"
        />
      </div>
    </div>
  );
}
