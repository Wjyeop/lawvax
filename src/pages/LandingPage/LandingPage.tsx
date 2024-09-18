import MainSection from "./MainSection";
import NewsSection from "./NewsSection";
import NewsLetterSection from "./NewsLetterSection";
import HiredLawyerSection from "./HiredLawyerSection";
import LawvaxMap from "./LawvaxMap";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <MainSection />
      <NewsSection />
      <NewsLetterSection />
      <HiredLawyerSection />
      <LawvaxMap />
    </div>
  );
};

export default LandingPage;
