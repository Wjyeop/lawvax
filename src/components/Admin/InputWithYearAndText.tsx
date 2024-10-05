import Plus from "../../assets/images/ic_admin_plus2.svg";
import Trash from "../../assets/images/ic_admin_trash.svg";

type Props = { onClickPlusButton: () => void; onClickDeleteButton: () => void };

export default function InputWithYearAndText({
  onClickPlusButton,
  onClickDeleteButton,
}: Props) {
  return (
    <div style={{ marginTop: "10px" }} className="admin-number-inputWrap">
      <input type="number" placeholder="1995" className="admin-number-input" />
      <span>~</span>
      <input type="number" placeholder="1995" className="admin-number-input" />
      <input
        style={{ margin: "0 10px" }}
        type="text"
        placeholder="OO그룹 감사업무 대행 및 고소·고발 대리"
        className="admin-text-input"
      />
      <div className="admin-news-iconWrap">
        <img
          src={Plus}
          alt="더하기 아이콘"
          onClick={onClickPlusButton}
          className="admin-news-icon"
        />
        <img
          src={Trash}
          alt="휴지통 아이콘"
          onClick={onClickDeleteButton}
          className="admin-news-icon"
        />
      </div>
    </div>
  );
}
