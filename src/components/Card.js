import React from "react";
import {FcLike} from 'react-icons/fc'; 
import { FcLikePlaceholder } from "react-icons/fc";   
import { useState } from "react";    

function Card({course,l1,likeRemoved}){

    const info = `${course.description.substring(0, 100)}...`;

    const [liked, setLiked] = useState(false);
    const toggleLike = () => {
        setLiked(!liked);
        {liked? likeRemoved():l1()};
    };

    return(
        <div className="flex flex-col w-[300px] bg-[#22223a] m-4 rounded-md ">
            <div className="relative">
                <img className="courseImg rounded-t-md" src={course.image.url} alt={course.image.alt}></img>
                <button 
                    className="absolute bottom-0 right-4 w-[35px] h-[35px] bg-white rounded-full flex items-center justify-center" 
                    onClick={toggleLike}
                >
                    {liked ? <FcLike className="text-[1.75rem]" /> : <FcLikePlaceholder className="text-[1.75rem]" />}
                </button>

            </div>
            <div className="p-3">
                <p className="text-[18px] font-semibold text-white">{course.title}</p>
                <p className="text-white">{info}</p>
            </div>
            
        </div>
    )
}

export default Card;