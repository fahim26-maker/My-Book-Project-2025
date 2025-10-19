import React from 'react';
import { Link } from 'react-router';

const Navbar = () => {
    const links = <>
    
    </>
    return (
        <section className='justify-between flex px-20 py-7'>
            <div>
                <p className='text-2xl font-bold'>Book Vibe</p>
            </div>
            <div className=''>
                <Link to='/'><a href="http://"><button class="btn btn-outline btn-accent mr-4">Home</button></a></Link>
                <Link to='/about'><a href="http://" className='mr-4 text-sm text-gray-400 hover:btn btn'>Listed Books</a></Link>
                <Link to='/PagesToRead'><a href="http://" className=' text-sm text-gray-400 hover:btn btn'>Pages to Read</a></Link>
            </div>
            <div className=''> 
                <button class="btn btn-accent mr-2 text-white">Sign In</button>
                <button class="btn btn-info text-white">Sign Up</button>
            </div>
        </section>
    );
};

export default Navbar;