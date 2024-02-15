import React from "react";
import { Box } from "@mui/material";
export default function About()
{
    return(
        <div>
            <Box
      sx={{
        marginTop: 12,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
      }}
    >
            <h1>About Us</h1>
            <ul>
            <h4>raj@gmail.com</h4>
            <h4>pandi@gmail.com</h4>
            <h4>mani@gmail.com</h4>
            </ul>
            </Box>
        </div>
    );
}