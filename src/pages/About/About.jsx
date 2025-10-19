import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBook } from '../../utility/addToDb';
import Book from '../Book/Book';

const About = () => {
    const [readList,setReadList]=useState([])
    const [sort, setSort] = useState("");
    const data = useLoaderData();
    console.log(data)

    useEffect(() => {
        const storedBookData = getStoredBook();
        const ConvertedStoredBooks = storedBookData.map(id => parseInt(id))
        const myReadList = data.filter(book => ConvertedStoredBooks.includes(book.bookId));
        setReadList(myReadList)
    },[])

    const handleSort = (type) => {
      setSort(type)
      if (type === "ratings") {
        const sortedByRatings = [...readList].sort((a,b) => a.rating - b.rating);
        setReadList(sortedByRatings)
      }
      if (type === "Year of publishing") {
        const sortedByRatings = [...readList].sort((a,b) => a.yearOfPublishing - b.yearOfPublishing);
        setReadList(sortedByRatings)
      }

    }
    return (
        // react tab installed***
        <div className='w-11/12 mx-auto p-5'>
          <div class="dropdown">
  <div tabindex="0" role="button" class="btn m-1 btn btn-outline btn-accent">Sort BY : {sort?sort:""}</div>
  <ul tabindex="-1" class="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><a onClick={()=>handleSort("Year of publishing")}>Year of publishing</a></li>
    <li><a onClick={()=>handleSort("ratings")}>ratings</a></li>
  </ul>
</div>
             <Tabs>
    <TabList>
      <Tab>Read Books</Tab>
      <Tab>Wishlist Books</Tab>
    </TabList>
    <TabPanel>
      <h2>Book I Read {readList.length}</h2>
      {
        readList.map(b=><Book key={b.bookId} singleBook={b}></Book>)
      }
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
  </Tabs>
        </div>
    );
};

export default About;