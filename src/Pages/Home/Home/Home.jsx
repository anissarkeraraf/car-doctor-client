import About from "../About/About";
import OurServices from "../service/OurServices";
import Banner from "./Banner";


const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <About></About>
           <OurServices></OurServices>
        </div>
    );
};

export default Home;