import React, { Suspense, useEffect, useState } from 'react';
import Book from '../Book/Book';


const Books = ({data}) => {
    const [allBooks, setAllBooks] = useState([]);
    // useEffect(() => {
    //     fetch("https://raw.githubusercontent.com/ProgrammingHero1/boi-poka-Book-Vibe-Resources/refs/heads/main/data/booksData.json")
    // .then(res => res.json())
    // .then(data => {
    //     setAllBooks(data)
    // })
    // },[])
    return (
        <div>
            <h1 className='text-4xl font-bold text-center p-6'>Books</h1>
            <Suspense fallback={<span>Loading...</span>}>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-9/12 mx-auto gap-5 mb-10'>
            {
             data.map((singleBook)=><Book key={singleBook.bookId} singleBook={singleBook}></Book>)
            }
            </div>
             </Suspense>
        </div>
    );
};

export default Books;