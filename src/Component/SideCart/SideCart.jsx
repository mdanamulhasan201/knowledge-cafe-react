import React, { useEffect, useState } from 'react';
import Description from '../Description/Description';
import './SideCart.css'

const SideCart = ({ cart,watchTime }) => {

    const [time, setTime] = useState(watchTime);

    useEffect(()=>{
            const getRedTime = localStorage.getItem('watchTime');
            setTime(getRedTime)
    },[watchTime])

    let total = 0  ;
    let description = [];

    for(const course of cart){
        total = total + course.cart;
        description.push(course)
    }
    return (
        <>
            <div>
                <h1 className='bg-warning spent-time font-bold'>Spent time on read: {time} MIN</h1>
                {/* <input type="text"className='bg-warning spent-time font-bold' value={watchTime}/> */}
            </div>

            <div className="mt-5 w-auto bg-accent  rounded-md mb-5">
                
                    <h2 className='font-bold mb-4 p-4  text-xl'>Bookmarked Blogs : {cart.length}</h2>

                    {
                        description.map(course => <Description  key={course.id} course={course}></Description>)
                    }
               
            </div>

        </>
    );
};

export default SideCart;