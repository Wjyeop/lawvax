import Plus from "../../../assets/images/ic_admin_plus2.svg";
import Trash from "../../../assets/images/ic_admin_trash.svg";

type Props = {
  index: number;
  numPlaceholder: string;
  textPlaceholder: string;
  handleAddForm: (data: string) => void;
  handleRemoveForm: (index: number, data: string) => void;
  handleInputChange: (
    index: number,
    content: string,
    e: string,
    data: string
  ) => void;
  data: string;
  value?: any;
};

export default function InputWithYearAndText({
  index,
  numPlaceholder,
  textPlaceholder,
  handleAddForm,
  handleRemoveForm,
  handleInputChange,
  data,
  value,
}: Props) {
  return (
    <div className="admin-number-inputWrap">
      <input
        type="number"
        placeholder={numPlaceholder}
        className="admin-number-input"
        onChange={(e) =>
          handleInputChange(index, "startYear", e.target.value, data)
        }
        value={value["startYear"] || ""}
      />
      <span>~</span>
      <input
        type="number"
        placeholder={numPlaceholder}
        className="admin-number-input"
        onChange={(e) =>
          handleInputChange(index, "endYear", e.target.value, data)
        }
        value={value["endYear"] || ""}
      />
      <input
        style={{ margin: "0 10px" }}
        type="text"
        placeholder={textPlaceholder}
        className="admin-text-input"
        onChange={(e) =>
          handleInputChange(index, "content", e.target.value, data)
        }
        value={value["content"] || ""}
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
          onClick={() => handleRemoveForm(index, data)}
          className="admin-news-icon"
        />
      </div>
    </div>
  );
}
