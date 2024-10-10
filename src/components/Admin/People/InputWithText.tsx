import Plus from "../../../assets/images/ic_admin_plus2.svg";
import Trash from "../../../assets/images/ic_admin_trash.svg";

type Props = {
  index: number;
  handleAddForm: (data: string) => void;
  handleRemoveForm: (index: number, data: string) => void;
  handleInputChange: (
    index: number,
    content: string,
    e: string,
    data: string
  ) => void;
};

export default function InputWithText({
  index,
  handleAddForm,
  handleRemoveForm,
  handleInputChange,
}: Props) {
  return (
    <div className="admin-number-inputWrap">
      <input
        style={{ marginRight: "10px" }}
        type="text"
        placeholder="OO그룹 감사업무 대행 및 고소·고발 대리"
        className="admin-text-input"
        onChange={(e) =>
          handleInputChange(index, "content", e.target.value, "licenses")
        }
      />
      <div className="admin-news-iconWrap">
        <img
          src={Plus}
          alt="더하기 아이콘"
          onClick={() => handleAddForm("licenses")}
          className="admin-news-icon"
        />
        <img
          src={Trash}
          alt="휴지통 아이콘"
          onClick={() => handleRemoveForm(index, "licenses")}
          className="admin-news-icon"
        />
      </div>
    </div>
  );
}
