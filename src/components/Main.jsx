
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Banner from './Banner';
import Footer from './Footer';

const Main = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Navbar></Navbar>
            <Banner></Banner>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;