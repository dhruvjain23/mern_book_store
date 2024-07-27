import React, { useEffect, useState } from 'react'
import "./Book.css"
import axios from 'axios';
import Book from './Book';
const URL = 'http://localhost:5000/books';

const fetchHandler = async()=>{
    return await axios.get(URL).then((res)=> res.data);
};

const Books = () => {
  const [books, setBooks]= useState(); 
  const [deleting, setDeleting]= useState(false); 
  useEffect(()=> {
        fetchHandler().then((data) => setBooks(data.books));
        
    },[deleting]);
console.log(books);
  return (
    <div>
      <ul>
            {books &&
             books.map((book, i)=>(
                <div id='poi'  key={i}>
                    <Book book ={book} setDeleting={setDeleting} deleting={deleting}/>
                </div>
            ))}
      </ul>
    </div>
  )
}

export default Books
