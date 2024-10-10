import Plus from "../../../assets/images/ic_admin_plus2.svg";
import Trash from "../../../assets/images/ic_admin_trash.svg";

type Props = {
  numPlaceholder: string;
  textPlaceholder: string;
  onClickPlusButton?: () => void;
  onClickDeleteButton?: () => void;
};

export default function InputWithYearAndText({
  numPlaceholder,
  textPlaceholder,
  onClickPlusButton,
  onClickDeleteButton,
}: Props) {
  return (
    <div className="admin-number-inputWrap">
      <input
        type="number"
        placeholder={numPlaceholder}
        className="admin-number-input"
      />
      <span>~</span>
      <input
        type="number"
        placeholder={numPlaceholder}
        className="admin-number-input"
      />
      <input
        style={{ margin: "0 10px" }}
        type="text"
        placeholder={textPlaceholder}
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
