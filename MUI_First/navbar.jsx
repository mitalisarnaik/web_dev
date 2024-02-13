import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";

const useStyles1 = makeStyles({
  root: {
    color:"white"
  }
});



export default function Navbar(){
  const classes = useStyles1();
return(
    <AppBar>
    <Toolbar>
      <IconButton  className={classes.root}>
        <MenuIcon />
      </IconButton>
      <Typography>Tours And Travels</Typography>
      <SearchIcon style={{marginLeft:'1050px'}}/>
    </Toolbar>
  </AppBar>
);



}