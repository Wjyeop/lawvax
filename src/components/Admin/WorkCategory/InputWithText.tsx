import Plus from "../../../assets/images/ic_admin_plus2.svg";
import Trash from "../../../assets/images/ic_admin_trash.svg";

type Props = {
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

export default function InputWithText({
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
        style={{ marginRight: "10px" }}
        type="text"
        value={value.content || ""}
        onChange={(e) =>
          handleInputChange(idx, "content", e.target.value, "sub")
        }
        placeholder="OO그룹 감사업무 대행 및 고소·고발 대리"
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
