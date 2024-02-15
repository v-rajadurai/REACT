
import React from "react";
import { Box } from "@mui/material";
export default function Home()
{
    return(
   
        <div>
            <Box
      sx={{
        marginTop: 12,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        '& > :not(style)': {
          m: 1,
          width: 475,
          height: 470,
        },
      }}
      >

            <h1>Welcome To Home Page</h1>
      </Box>
        </div>
      
    );
}