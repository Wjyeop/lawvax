import Prev from "../../assets/images/ic_admin_prev.svg";
import Next from "../../assets/images/ic_admin_next.svg";

type Props = {
  currentPage: number;
  totalPages: number;
  onClickPrevButton: () => void;
  onClickNextButton: () => void;
  handlePage: (page: number) => void;
};

export default function Pagination({
  currentPage,
  totalPages,
  onClickPrevButton,
  onClickNextButton,
  handlePage,
}: Props) {
  const PageLengthList = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <ul className="admin-page-warp">
      <img
        src={Prev}
        alt="이전 버튼 아이콘"
        onClick={onClickPrevButton}
        className="admin-prev"
      />
      {PageLengthList.map((num, index) => (
        <li key={num} className="admin-page-item">
          <span
            onClick={() => handlePage(num)}
            className={
              currentPage === num ? "admin-page-activeItem" : "admin-page-num"
            }
          >
            {num}
          </span>
          {index < PageLengthList.length - 1 && (
            <div className="admin-page-divide" />
          )}
        </li>
      ))}
      <img
        src={Next}
        alt="다음 버튼 아이콘"
        onClick={onClickNextButton}
        className="admin-next"
      />
    </ul>
  );
}
