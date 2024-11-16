
import { Link } from 'react-router-dom';
import { FaStar, FaEye } from 'react-icons/fa';
import moment from 'moment';
const NewsCard = ({ eachData }) => {
  const { title, details, rating, total_view, author,image_url } = eachData;

  return (
    <div className="card w-full col-span-3 bg-base-100 shadow-xl rounded-lg overflow-hidden">
      {/* Author Info */}
      <div className="flex items-center p-4">
        <img src={author.img} alt={author.name} className="w-10 h-10 rounded-full" />
        <div className="ml-4">
          <h2 className="font-semibold text-gray-800">{author.name}</h2>
          <p className="text-sm text-gray-500">{author.published_date}</p>
        </div>
        <button className="ml-auto text-gray-500">
          <i className="fa fa-share-alt" />
        </button>
      </div>

      {/* eachData Image */}
      <img src={image_url} alt={title} className="w-full h-64 object-cover" />

      {/* eachData Content */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-sm text-gray-600 mt-2 line-clamp-3">{details}</p>
        <Link to={`/eachData/${eachData._id}`} className="text-blue-500 mt-2 inline-block">Read More</Link>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between p-4 border-t border-gray-200">
        {/* Rating */}
        <div className="flex items-center text-yellow-500">
          <FaStar />
          <span className="ml-1 font-semibold text-gray-800">{rating.number}</span>
        </div>

        {/* Views */}
        <div className="flex items-center text-gray-500">
          <FaEye />
          <span className="ml-1">{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
