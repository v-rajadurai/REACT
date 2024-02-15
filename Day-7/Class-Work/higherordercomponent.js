import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Fetch() {
    
    const [post, setPost] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3001/datas")
            .then((response) => {
                setPost(response.data);
            })
            .catch((error) => {
                console.error(error);
            });

    }, []);

    return (
        <div>
            
            <h4>{JSON.stringify(post,null,2)}</h4>
            
        </div>
    );
}
