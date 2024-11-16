import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
const LatestNews = () => {
    return (
        <div className="w-11/12 mx-auto flex items-center gap-2 bg-base-200 p-2 rounded-sm">
        <span className="bg-red-500 text-white px-4 py-1 ">Latest</span>
        <Marquee pauseOnHover className="space-x-8  text-gray-700 p-2">
            <Link to='/news'>
            Lorem ipsum dolor sit amet consectetur ipsum dolor, sit amet consectetur adipisicing.
            </Link>

            <Link to='/news'>
            Perspiciatis, ipsam?Lorem ipsum dolor, sit amet consectetur adipisicing.
            </Link>
        </Marquee>
        </div>
    );
};

export default LatestNews;