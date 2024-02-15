import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { useBookContext } from "./context";

const BookList = () => {
  const { searchQuery, setSearchQuery } = useBookContext();
  const [books, setBooks] = React.useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
        setBooks(response.data);
      } catch (error) {
        console.error("Error fetching data:" + error);
      }
    };

    fetchData();
  }, []);

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          sx={{ color: "red", display: "flex", justifyContent: "center" }}
        >
          Book Search
        </Typography>
        <TextField
          label="Search Books"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          variant="outlined"
          fullWidth
        />
        <List>
          {filteredBooks.map((book) => (
            <ListItem key={book.id}>
              <ListItemText primary={book.title} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Container>
  );
};

export default BookList;
