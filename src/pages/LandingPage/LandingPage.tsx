import HiredLawyerSection from "./HiredLawyerSection";
import MainSection from "./MainSection";
import NewsLetterSection from "./NewsLetterSection";
import NewsSection from "./NewsSection";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <MainSection />
      <NewsSection />
      <NewsLetterSection />
      <HiredLawyerSection />
    </div>
  );
};

export default LandingPage;
