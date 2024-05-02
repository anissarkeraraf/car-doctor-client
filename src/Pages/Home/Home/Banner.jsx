import image1 from '../../../assets/images/banner/1.jpg'
import image2 from '../../../assets/images/banner/2.jpg'
import image3 from '../../../assets/images/banner/3.jpg'
import image4 from '../../../assets/images/banner/4.jpg'

const Banner = () => {
    return (
        <div className="carousel w-full mt-10">
            <div id="slide1" className="carousel-item relative w-full  h-[570px]">
                <img src={image1} className="w-full rounded-lg" />
                <div className=" absolute flex items-center h-full rounded-lg bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] bottom-0">
                    <div className='text-white w-1/2 space-y-5 pl-12'>
                        <h2 className='text-6xl font-bold'>Affordable Price for Car Servicing</h2>
                        <p>There are many variations of passages of available, but the majority have suffered alteration in some form </p>
                        <div>
                            <button className="btn btn-secondary mr-5">DISCOVER MORE</button>
                            <button className="btn btn-outline btn-warning">LATEST PROJECT</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full h-[570px]">
                <img src={image2} className="w-full rounded-lg" />
                <div className=" absolute flex items-center rounded-lg h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] bottom-0">
                    <div className='text-white w-1/2 space-y-5 pl-12'>
                        <h2 className='text-6xl font-bold'>Affordable Price for Car Servicing</h2>
                        <p>There are many variations of passages of available, but the majority have suffered alteration in some form </p>
                        <div>
                            <button className="btn btn-secondary mr-5">DISCOVER MORE</button>
                            <button className="btn btn-outline btn-warning">LATEST PROJECT</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full h-[570px]">
                <img src={image3} className="w-full rounded-lg" />
                <div className=" absolute flex items-center rounded-lg h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] bottom-0">
                    <div className='text-white w-1/2 space-y-5 pl-12'>
                        <h2 className='text-6xl font-bold'>Affordable Price for Car Servicing</h2>
                        <p>There are many variations of passages of available, but the majority have suffered alteration in some form </p>
                        <div>
                            <button className="btn btn-secondary mr-5">DISCOVER MORE</button>
                            <button className="btn btn-outline btn-warning">LATEST PROJECT</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full h-[570px]">
                <img src={image4} className="w-full rounded-lg" />
                <div className=" absolute flex items-center rounded-lg h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] bottom-0">
                    <div className='text-white w-1/2 space-y-5 pl-12'>
                        <h2 className='text-6xl font-bold'>Affordable Price for Car Servicing</h2>
                        <p>There are many variations of passages of available, but the majority have suffered alteration in some form </p>
                        <div>
                            <button className="btn btn-secondary mr-5">DISCOVER MORE</button>
                            <button className="btn btn-outline btn-warning">LATEST PROJECT</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;