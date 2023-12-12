import Banner from "../components/Banner";
import LoginSection from "../components/LoginSection";
import Newslatter from "../components/Newslatter";
import RecentBlogs from "../components/RecentBlogs";
import ServicesSection from "../components/ServicesSection";

const Home = () => {
  
    return (
        <div>
          <Banner></Banner>
          <div className="px-5">
          <RecentBlogs></RecentBlogs>
          <Newslatter></Newslatter>
          <ServicesSection></ServicesSection>
          <LoginSection></LoginSection>
          </div>
        </div>
    );
};

export default Home;