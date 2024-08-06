import { useState } from "react";
import { lawyerList } from "../../const/lawyerList";
import { Link } from "react-router-dom";

const SearchListSection = () => {
  const itemsPerPage = 8; // 페이지당 변호사 수
  const [currentPage, setCurrentPage] = useState(1);

  const handleClick = (page: number) => {
    setCurrentPage(page);
  };

  const totalPages = Math.ceil(lawyerList.length / itemsPerPage);
  const currentItems = lawyerList.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <section className="search-list-section">
      <div className="search-list">
        {currentItems.map((lawyer, index) => (
          <div key={index} className="lawyer">
            <div className="content">
              <div className="img-wrap">
                <Link to="/profile">
                  <img src={lawyer.img} alt="" />
                </Link>
              </div>
              <div className="text-wrap">
                <p className="name">
                  {lawyer.name}
                  <span>{lawyer.name2}</span>
                </p>
                <p className="job">{lawyer.title}</p>
                <p className="phone">
                  <span>T</span> {lawyer.phone}
                </p>
                <p className="email">
                  <span>E</span> {lawyer.email}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <span key={index}>
            <span
              className={`page-number ${currentPage === index + 1 ? "active" : ""}`}
              onClick={() => handleClick(index + 1)}
            >
              {index + 1}
            </span>
            {index < totalPages - 1 && <span className="separator">|</span>}
          </span>
        ))}
      </div>
    </section>
  );
};

export default SearchListSection;
