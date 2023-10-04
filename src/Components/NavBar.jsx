import React from "react";
import {AppBar , Toolbar ,Typography , Button} from "@mui/material";

const NavBar = ()=>{
    return(

    <AppBar>
        <Toolbar sx={{ backgroundColor:"white"}}>
        <Typography variant="h5" color="primary" sx={{flexGrow:1}}>Crypto App</Typography>
        </Toolbar>
    </AppBar>

)
}

export default NavBar;