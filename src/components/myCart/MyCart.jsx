import { Helmet } from "react-helmet-async";
import Navbar from "../../pages/shared/navbar/Navbar";


const MyCart = () => {
    return (
        <div>
            <Helmet>
                <title>Filmic | My cart</title>
            </Helmet>
            <Navbar></Navbar>
            <h3 className="text-4xl">My cart</h3>            
        </div>
    );
};

export default MyCart;