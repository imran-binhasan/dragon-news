import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftAside = () => {
    const [categories,setCategories] = useState([]);
    useEffect(()=>{
        fetch('https://openapi.programming-hero.com/api/news/categories')
        .then(res => res.json())
        .then(data => setCategories(data.data.news_category))
    },[])
    return (
        <aside className="border col-span-3 space-y-2">
            <h3 className="py-2 font-medium">All Categories ({categories.length})</h3>
            <div className="flex flex-col gap-2 ">
        {
        categories.map(category => 
            <NavLink to={`/category/${category.category_id}`} className='btn bg-base-100' key={category.category_id} >
            {category.category_name}
            </NavLink>    
        )
        }
            </div>
        </aside>
    );
};

export default LeftAside;