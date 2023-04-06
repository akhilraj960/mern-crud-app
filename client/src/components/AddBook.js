import React, { useState } from "react";
import { Button, TextField, Typography } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios'

const AddBook = () => {
  const [books, setBooks] = useState();

  const toastOptions = {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  };
  const inputHandler = (event) => {
    setBooks({ ...books, [event.target.name]: event.target.value });
  }; 

  const inputValidation = () => {
    const { title, author, publisher } = books;

    if (!title.length > 3) {
      toast.error("Title should by more 3 characters", toastOptions);
      return false;
    } else if (!author.length > 3) {
      toast.error("Title should by more 3 characters", toastOptions);
      return false;
    } else if (!publisher.length > 3) {
      toast.error("Title should by more 3 characters", toastOptions);
      return false;
    } else {
      return true;
    }
  };

  const formSubmit = () => {
    if (inputValidation()) {
      axios.post('http://localhost:8080/api/book',books).then(()=>{
        toast.success("Book Added Successfully", toastOptions);
      }).catch((err)=>{
        console.log('error'+err)
      })
    }
  };

  return (
    <>
      <Typography mb={2} variant="h4">
        Add Book
      </Typography>

      <TextField
        label="Title"
        variant="outlined"
        name="title"
        onChange={inputHandler}
      />
      <br />
      <br />
      <TextField
        label="Author"
        variant="outlined"
        name="author"
        onChange={inputHandler}
      />
      <br />
      <br />
      <TextField
        label="Published Date"
        variant="outlined"
        name="publicationDate"
        onChange={inputHandler}
      />
      <br />
      <br />
      <TextField
        label="Publisher"
        variant="outlined"
        name="publisher"
        onChange={inputHandler}
      />
      <br />
      <br />
      <TextField
        label="Language"
        variant="outlined"
        name="language"
        onChange={inputHandler}
      />
      <br />
      <br />
      <Button
        style={{ backgroundColor: "green", color: "white" }}
        onClick={formSubmit}
      >
        Submit
      </Button>
      <ToastContainer />
    </>
  );
};

export default AddBook;
