import { useState, useEffect } from 'react';
import axios from 'axios';
import {Grid,Card, CardContent} from '@mui/material';
export default function Method() {
    const [post, setPost] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3001/products")
            .then((response) => {
                setPost(response.data);
            })
            .catch((error) => {
                console.error(error);
            });

    }, []);

    return (
        <div>
            <Grid container direcction={'row'} rowSpacing={3} columnSpacing={3}>
                    
                
                {post.map((item) => (
                    <Grid item key={item.id} xs={12} sm={6} md={4} lg={4}>
                        <Card sx={{backgroundColor:'grey' ,Width:"100%",height:'100%'}}>

                        <CardContent>
                            <h2>Id:{item.id}</h2>
                            <h2>Name:{item.name}</h2>
                            <h2>Productdescription:{item.Productdescription}</h2>
                            <h2>price:{item.price}</h2>
                        </CardContent>
                    </Card>
                    </Grid>
                ))}
    
                </Grid> 
            
        </div>
    );
}
