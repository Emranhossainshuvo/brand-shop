
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Banner from './Banner';

const Main = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Navbar></Navbar>
            <Banner></Banner>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;