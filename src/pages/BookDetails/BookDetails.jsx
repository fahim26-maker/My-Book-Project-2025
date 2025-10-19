import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToStoredDB } from '../../utility/addToDb';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)


const BookDetails = () => {
    const { id } = useParams();
    const bookId = parseInt(id);
    const data = useLoaderData();
    const singleBook = data.find(book => book.bookId === bookId);
    const { bookName, image,author,publisher,rating,yearOfPublishing,review,tags,totalPages,category } = singleBook || {};
    const handleMarkAsRead = id => {
        MySwal.fire({
             title: "Good job!",
  text: "You clicked the button!",
  icon: "success"
})
        addToStoredDB(id)
}


    return (
        <section className='relative'>
        <div className='bg-base-300 h-[550px] w-[550px] my-10 ml-20 place-content-center place-items-center'>
            <img className='h-[400px]' src={image} alt="" srcset="" />
        </div>
        <div className='px-80 ml-100 absolute top-8 space-y-2 '>
        <p className='text-2xl font-bold'>{bookName}</p>
        <p><span className=' font-semibold'>Author: </span>{author}</p>
        <p><span className='font-semibold'>Category: </span>{category}</p>
        <p className=' text-sm text-gray-500'><span className='font-semibold text-black'>Review:</span>{review}</p>
        <p><span className='font-semibold'>Tag: </span>{tags}</p>
        <p><span  className='font-semibold'>Number of Pages: </span>{totalPages}</p>
        <p>Publisher: {publisher}</p>
        <p>Year of Publishing: {yearOfPublishing}</p>
        <p>Rating:{rating}</p>
        <div className=''>
        <button onClick={()=>handleMarkAsRead(id)} class="btn mr-4">Mark as Read</button>
        <button class="btn btn-accent text-white">Add to Wishlist</button>
        </div>
        </div>
        </section>
    );
};

export default BookDetails;