import { BsArrowLeft } from 'react-icons/bs';
import { BsArrowRight } from 'react-icons/bs';

const Banner = () => {
    return (

        <>


            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/1vbdNRN/5633004-2974475.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle"><BsArrowLeft/></a>
                        <a href="#slide2" className="btn btn-circle"><BsArrowRight/></a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/qjY6FnY/5632882-2974426.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle"><BsArrowLeft/></a>
                        <a href="#slide3" className="btn btn-circle"><BsArrowRight/></a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/bRJNq2j/34766744-text-effect-169.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle"><BsArrowLeft/></a>
                        <a href="#slide4" className="btn btn-circle"><BsArrowRight/></a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/0jFky7P/34766725-text-effect-165.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle"><BsArrowLeft/></a>
                        <a href="#slide1" className="btn btn-circle"><BsArrowRight/></a>
                    </div>
                </div>
            </div>


        </>
    );
};

export default Banner;