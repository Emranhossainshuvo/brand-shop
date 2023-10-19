
import Banner from "../../components/banner/Banner";
import Footer from "../shared/footer/Footer";
import Navbar from "../shared/navbar/Navbar";


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <h2>This is home</h2>
            <Footer></Footer>
        </div>
    );
};

export default Home;