import Divider from "./Divider";

type Props = {
  list: any;
  onClick: (category: string) => void;
  selectCategory: string;
};

export default function CategoryTab({ list, onClick, selectCategory }: Props) {
  return (
    <div className="admin-writing-tab">
      <h3>게시글</h3>
      <ul className="admin-news-category">
        {Object.entries(list).map(([key, count]: any) => (
          <div key={key}>
            {key === "비공개" && <Divider />}
            <li
              onClick={() => onClick(key)}
              className={
                selectCategory === key
                  ? "admin-category-activeItem"
                  : "admin-category-item"
              }
            >
              <span>{key}</span>
              <span>{count}</span>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
}
