import React from 'react';
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { Link } from 'react-router';
const Book = ({singleBook}) => {
    // console.log(singleBook)
    const {bookName,author,image,publisher,rating,yearOfPublishing,bookId } = singleBook

    return (
      <Link to={`/bookDetails/${bookId}`}>
        <div class="card bg-base-100 w-96 shadow-sm p-4 border border-base-300">
  <figure className='bg-base-300 '>
    <img className='h-[166px]' src={image} />
  </figure>
  <div class="p-4">
    <div className='flex'>
    <h2 className='card-title'>{bookName}</h2><div className='ml-10 badge badge-secondary font-semibold flex'>{yearOfPublishing}</div>
    </div>
    <p>Author: {author}</p>
    <div className='flex justify-between'>
        <p>By: {publisher}</p>
        <p className='flex'><FaRegStarHalfStroke className='mr-1'/>{rating}</p>
    </div>
  </div>
</div>
      </Link>
    );
};

export default Book;