import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from './NewsCard';

const NewsList = () => {
    const params = useParams();   
    const data = useLoaderData();
    console.log(data.data)

    return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {data.data.map((eachData) => (
    <NewsCard key={eachData._id} eachData={eachData} />
      ))}
    </div>
    );
};

export default NewsList;





