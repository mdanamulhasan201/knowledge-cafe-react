import React, { useState } from 'react';
import './Card.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBookmark} from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';


const Card = (props) => {
   
    const {tag, authorName, description, image, author_image, watchTime, time } = props.course;

    const handleWatchTime =props.handleWatchTime
    // console.log(handleWatchTime)
    const handleAddToSpent =props.handleAddToSpent;

    // const [course, setCourse] = useState([])


    const [bookmarks, setBookmarks] = useState([])


    const handleToast = (id, description) => {
        if(!bookmarks.includes(description)){
            const newBookmark  = [...bookmarks, description]
            setBookmarks(newBookmark);
           
        }
      else{
        const newBookmark  = [...bookmarks, description]
            setBookmarks(newBookmark);
            toast('This is already bookmarked')
      }
    };
    

  
    return (
        <div>
            <div className="card card-compact  mt-10  bg-base-100 shadow-xl ">
                <figure><img src={image} /></figure>
                <div className="card-body">

                    <div className='flex'>
                        <img className='rounded-full h-12 w-12 mr-2' src={author_image} alt="" />
                        <div>
                            <h4 className=" author font-bold">{authorName}</h4>
                            <p className='text-time text-slate-400'>{time}</p>
                        </div>
                        <div>
                            <p onClick={handleToast} className='mt-5 watch-time bookmark  text-slate-400'>{watchTime}min read <FontAwesomeIcon  onClick={() => handleAddToSpent(props.course)} className='text-xl cursor-pointer' icon={faBookmark} /> </p>

                        </div>
                    </div>
                    
                    <p className='font-bold text-lg'>{description}</p>
                    <p className='text-slate-400'>{tag}</p>

                        {/* button */}
                    <p><a onClick={() => handleWatchTime(watchTime)} className='underline text-success font-bold cursor-pointer'>Mark as read</a></p>
                </div>
            </div>






        
        </div>
    );
};

export default Card;