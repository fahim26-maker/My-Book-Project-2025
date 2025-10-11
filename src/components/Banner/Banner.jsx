import React from 'react';
import bookImg from "../../assets/pngwing 1.png"
const Banner = () => {
    return (
   <section className='bg-base-300 w-10/12 mx-auto flex justify-between h-[400px] mb-10'>
    <div className='py-30 px-10'>
        <h1 className='text-6xl mb-4 font-bold'>Books to freshen up your bookshelf</h1>
        <button class="btn btn-success text-white">View The List</button>
    </div>
    <div>
        <img className='w-[300px] h-[350px] mr-20' src={bookImg} alt="" srcset="" />
    </div>
   </section>
    );
};

export default Banner;