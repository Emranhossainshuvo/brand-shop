
import { useLoaderData } from "react-router-dom";
import Banner from "../../components/banner/Banner";
import Footer from "../shared/footer/Footer";
import Navbar from "../shared/navbar/Navbar";
import ProductCard from "../../components/productCard/ProductCard";
import HappyMeet from "../../components/happyMeet/HappyMeet";
import { Helmet } from "react-helmet-async";


const Home = () => {

    const products = useLoaderData();

    return (
        <div>
            <Helmet>
                <title>Filmic | Home</title>
            </Helmet>
            <Navbar></Navbar>
            <Banner></Banner>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mt-10">
                {
                    products.map(product => <ProductCard
                        key={product._id}
                        product={product}
                    ></ProductCard>)
                }
            </div>
            <HappyMeet></HappyMeet>
            <Footer></Footer>
        </div>
    );
};

export default Home;