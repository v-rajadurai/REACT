import React, { useState } from 'react'
import { connect } from 'react-redux'
import {Box} from '@mui/material'
import { addItem, removeItem } from './Redux'
import {
  TextField,
  Button,
  Typography,
  Card,
  CardContent,
  IconButton,
  Badge
} from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const Cart = ({ items, addItem, removeItem }) => {
  const [newItem, setNewItem] = useState('')
  const [count, setCount] = useState(0);

  const handleInputChange = (event) => {
    setNewItem(event.target.value)
  }

  const handleAddItem = () => {
    addItem(newItem)
    setNewItem('')
    setCount(count+1);
  }

  const handleRemove = (index) => {
    removeItem(index)
    setCount(count-1)
  }

  return (
    <div>
      <Box
          sx={{
            marginTop: 25,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            fontFamily:'',
          }}>
      <Typography variant="h2">
        CART{'  '}
        <Badge badgeContent={count} color="success" sx={{}}>
          <ShoppingCartIcon />
        </Badge>
      </Typography>
      <TextField
        type="text"
        value={newItem}
        onChange={handleInputChange}
        placeholder="Enter an item name"
      />
      <br />
      <br />
      <Button variant="contained" onClick={handleAddItem} sx={{backgroundColor:"green"}}>
        
        Add 
      </Button>
      {/* <hr /> */}
      <br />
      <Typography variant="h1">stored Item :</Typography>
      {items.map((item, index) => (
        <Card key={index}>
          <CardContent sx={{ display: 'flex' }}>
            <Typography variant="h5">{item}</Typography>
            <IconButton
              onClick={() => handleRemove(index)}
              sx={{ marginLeft: '10px' }}
            >
              <DeleteOutlineIcon />
            </IconButton>
          </CardContent>
        </Card>
      ))}
      </Box>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    items: state.items,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addItem: (item) => dispatch(addItem(item)),
    removeItem: (index) => dispatch(removeItem(index)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
