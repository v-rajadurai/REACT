import React from "react";
import {Card, CardContent, Typography,Box,CardMedia} from '@mui/material'
import { blue } from "@mui/material/colors";
export default function UiCard()
{
    return(
        <Box sx={{ height:'10px',width:'10px'}}>
            <Card sx={{ minWidth: 275 ,backgroundColor:'grey'}}>
        
            <CardContent>
                <h1>Skcet</h1>
                <Typography>Skcet is one of best Engineerin college in Coimbatore</Typography>
            </CardContent>
        </Card>
  </Box>
    )
}