import React from "react";
import AppCard from "./AppCard"

import {Grid, Paper, Box} from "@material-ui/core";
import {AppData} from "../App"

export type CardGridProps = {
    cards : AppData[]
}

export default ({cards} : CardGridProps) => 
    <Box px={4} py={1}>
        <Grid container spacing={2}>
            {cards.map((i:AppData)=>{
                return(
                    <Grid item xs={12} sm={12} md={6} lg={4}>
                        <AppCard card={i}/>    
                    </Grid>
                )
            })}
        </Grid>
    </Box>