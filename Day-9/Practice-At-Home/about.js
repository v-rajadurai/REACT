import React from "react";
import { Box } from "@mui/material";
export default function Contact()
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
            <h1>Contact Us</h1>
            <ul>
            <h4>7423437757</h4>
            <h4>9923434637</h4>
            <h4>9623437787</h4>
            </ul>
            </Box>
        </div>
    );
}