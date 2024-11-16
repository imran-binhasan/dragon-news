import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const Section = () => {
    const params = useParams();   
    const data = useLoaderData();
    console.log(data)

    return (
        <section className=''>
            <p>{data.data.length}</p>
        </section>
    );
};

export default Section;