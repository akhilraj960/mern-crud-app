import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const ViewBooks = () => {
  var [books, setBooks] = useState();

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

  useEffect(() => {
    axios.get("http://localhost:8080/api/books").then((data) => {
      setBooks(data.data);
    });
  }, []);

  const deleteBook = (id) => {
    axios.delete(`http://localhost:8080/api/book/${id}`).then(() => {
      toast.success("Delete Successfully", toastOptions);
      setInterval(() => {
        window.location.reload(false);
      }, 5000);
    });
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <TableCell
              style={{ fontSize: "1.2rem", fontWeight: "600" }}
              align="center"
            >
              No
            </TableCell>
            <TableCell
              style={{ fontSize: "1.2rem", fontWeight: "600" }}
              align="center"
            >
              Title
            </TableCell>
            <TableCell
              style={{ fontSize: "1.2rem", fontWeight: "600" }}
              align="center"
            >
              Author
            </TableCell>
            <TableCell
              style={{ fontSize: "1.2rem", fontWeight: "600" }}
              align="center"
            >
              Published Date
            </TableCell>
            <TableCell
              style={{ fontSize: "1.2rem", fontWeight: "600" }}
              align="center"
            >
              Publisher
            </TableCell>
            <TableCell
              style={{ fontSize: "1.2rem", fontWeight: "600" }}
              align="center"
            >
              Language
            </TableCell>
            <TableCell
              style={{ fontSize: "1.2rem", fontWeight: "600" }}
              align="center"
            ></TableCell>
            <TableCell
              style={{ fontSize: "1.2rem", fontWeight: "600" }}
              align="center"
            ></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {books?.map((value, index) => {
            return (
              <TableRow key={index}>
                <TableCell align="center">{index + 1}</TableCell>
                <TableCell align="center">{value.title}</TableCell>
                <TableCell align="center">{value.author}</TableCell>
                <TableCell align="center">{value.publicationDate}</TableCell>
                <TableCell align="center">{value.publisher}</TableCell>
                <TableCell align="center">{value.language}</TableCell>
                <TableCell align="right">
                  <Button style={{ color: "white", backgroundColor: "green" }}>
                    <Link
                      style={{ color: "white", textDecoration: "none" }}
                      to="/updatebook"
                      state={value}
                    >
                      Edit
                    </Link>
                  </Button>
                </TableCell>
                <TableCell align="left">
                  <Button
                    style={{ color: "white", backgroundColor: "red" }}
                    onClick={() => {
                      deleteBook(value._id);
                    }}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      <ToastContainer />
    </TableContainer>
  );
};

export default ViewBooks;
