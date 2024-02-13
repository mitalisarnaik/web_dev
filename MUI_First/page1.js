import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Navbar from './navbar.jsx';
import { Typography } from '@mui/material';
import TourCard2 from './TourCar2.jsx';
import vegas1 from "./vegas1.png";
import vegas2 from "./vegas2.png";
import vegas3 from "./vegas3.png";
import vegas4 from "./vegas4.png"
import niagara1 from "./niagara1.png";
import niagara2 from "./niagara2.png";
import niagara3 from "./niagara3.png";
import niagara4 from "./niagara4.png";

export default function Page1(){

    return(
        <>
        <Navbar/>
        <Typography variant='h5' component='h2' style={{marginTop:"100px", marginLeft:'100px'}}  >
          Niagara Falls
        </Typography>
        
        <Container>
        <Grid container spacing={5}>
        <TourCard2 img={niagara1} rating={4} description="Immerse Into the Falls" number="4 (398 Reviews)" time="3 hours"/>
        <TourCard2 img={niagara2} rating={2.5} description="Helicopter Over the Falls" number="2.5 (99 Reviews)" time="2 hours"/>
        <TourCard2 img={niagara3} rating={3} description="Falls At Night" number="3 (245 Reviews)" time="4 hours"/>
        <TourCard2 img={niagara4} rating={3.5} description="Boat Ride" number="3.5 (160 Reviews)" time="5 hours"/>
        </Grid>
        </Container>
        <Container>
        <Typography variant='h5' component='h2'style={{marginTop:'75px'}}>
          Las Vegas
        </Typography>
        <Grid container spacing={5}>
        <TourCard2 rating={2.5} img={vegas1} description="All Around The World" number="2.5 (462 Reviews)" time="3 hours"/>
        <TourCard2 rating={3} img={vegas2} description="View the Casinos" number=" 3 (300 Reviews)" time="5 hours"/>
        <TourCard2 rating={4.5} img={vegas3} description="Show Me Magic" number="4.5 (453 Reviews)" time="2 hours"/>
        <TourCard2 rating={3} img={vegas4} description="Vegas At Night" number=" 3 (321 Reviews)" time="4 hours"/>
        </Grid>
        </Container>
        </>
    );

}





