import top from "../assets/images/icons/top.png";

const Topbutton = () => {
  return (
    <button
      className="top-btn"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <img src={top} alt="Top" />
    </button>
  );
};

export default Topbutton;
