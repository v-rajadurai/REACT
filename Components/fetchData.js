import { useState, useEffect } from 'react';
import axios from 'axios';

export default function FetchData() {
    const [post, setPost] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3001/Books")
            .then((response) => {
                setPost(response.data);
            })
            .catch((error) => {
                console.error(error);
            });

    }, []);

    return (
        <div>
         <ul>
                {post.map((item) => (
                    <li key={item.id}>{item.id},{item.title},{item.author}</li>
                    
                   
                ))}
            </ul> 
            </div>
    );
}
