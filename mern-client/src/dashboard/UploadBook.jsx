import React, { useState } from 'react'
import { Button, Checkbox, Label, Select, TextInput , Textarea } from "flowbite-react";

export const UploadBook = () => {
  const bookCategories = [ 
    "Fiction",
    "Non-Fiction",
    "History",
    "Romance",
    "Comic",
    "Horrer"
  ]
  const [selectedCategories, setSelectedCategories] = useState(bookCategories[0]);

  const handleChangeSelectedValues = (event) => {
    console.log(event.target.value);
    setSelectedCategories(event.target.value);
    

  }
  // handle book submission
  const handleBookSubmit = (event) => {
      event.preventDefault();
      const form = event.target;

      const bookTitle = form.bookTitle.value;
      const authorname = form.authorname.value;
      const imageURL = form.imageURL.value;
      const category = form.categoryName.value;
      const bookDescription = form.bookDescription.value;
      const bookPDFURL = form.bookPDFURL.value;
      

      const bookObj = 
      {
        bookTitle,
        authorname,
        imageURL,
        category,
        bookDescription,
        bookPDFURL
      }
      console.log(bookObj);

      // send data tp database

      fetch('http://localhost:5000/upload-book', {

        method: 'POST',
        headers: { 'Content-type': 'application/json',

         },
         body: JSON.stringify(bookObj)
        

      }).then(res => res.json()).then(data => { 
        
        
      

        // console.log(data)
        alert('book uploaded successfully')
        form.reset();


      });
    
      
      

  };
  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>Upload a Book</h2>

      <form onSubmit={handleBookSubmit} className="flex lg:w-[1000px] flex-col flex-wrap gap-4"> 
        {/* first row */}
      <div className='flex gap-8'>
      <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="bookTitle" value="Book Title">Book Title</Label>
        </div>
        <TextInput id="bookTitle" name='bookTitle' type="text" placeholder="Book Name" required />
      </div>
      {/* author name */}
      <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="authorname" value="Author name">Author Name</Label>
        </div>
        <TextInput id="authorname" name='authorname' type="text" placeholder="Author Name" required />
      </div>
      </div>
      {/* 2nd row */}
      <div className='flex gap-8'>
      <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="imageURL" value="Book Image URL">Book Image URL</Label>
        </div>
        <TextInput id="imageURL" name='imageURL' type="text" placeholder="Book Image URL" required />
      </div>
      {/*  category */}
      <div className='lg:w-1/2'>
      <div className="mb-2 block">
          <Label htmlFor="inputState" value="Book Category">Book Category</Label>
        </div>

        <Select id='inputState' name='categoryName' className='w-full rounded' value={selectedCategories} onChange={handleChangeSelectedValues}>
          {
            bookCategories.map((option) => <option key={option} value={option}>{option}</option>)
          }

        </Select>
        
       
      </div>    
      </div>

      {/* bookDescription */}
      <div>
        <div className="mb-2 block">
          <Label htmlFor="bookDescription">Book Description</Label>
        </div>
        <Textarea id="bookDescription" name='bookDescription' placeholder="Write Your Book Description..." required className='w-full' rows={6} />
       
      </div>

      {/* book pdf link */}
      <div>
        <div className="mb-2 block">
          <Label htmlFor="bookPDFURL" value="Book PDF URL">Book PDF URL</Label>
        </div>
        <TextInput id="bookPDFURL" name='bookPDFURL' type="text" placeholder="book pdf url" required />
      </div>

     <div>
     <Button type="submit" className='mt-5 bg-blue-700'>Upload Book</Button>
     </div>
     
    </form>

    </div>
  )
}
 