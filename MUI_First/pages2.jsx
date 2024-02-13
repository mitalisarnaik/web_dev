import { Typography } from "@mui/material";
import Container from "@mui/material/Container";
import Navbar from "./navbar";
import Box from "@mui/material/Box";
import tour1 from "./tour1.png";
import QuiltedImageList from "./imagecollage";
import {styled,createTheme, ThemeProvider} from '@mui/material/styles'


const customTheme = createTheme({
  palette: {
    primary: {
      main: '#ECECEC',
      contrastText: 'black',
      width:"900px",
      mtop:"30px"
    },
  },
});

const MyThemeComponent = styled('div')(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  backgroundColor: theme.palette.primary.main,
  padding: theme.spacing(1),
  width:theme.palette.primary.width,
  marginTop:theme.palette.primary.mtop
 
}));

export default function Tour() {
  return (
    <>
      <Navbar />
      <Container style={{ width: "1000px" }}>
        <Typography style={{ marginTop: "100px" }} variant="h3" component="h1">
          Explore The World in Vegas
        </Typography>
        <Box style={{ display: "flex" }}>
          <img
            src={tour1}
            alt="nevada1"
            style={{ height: "325px", marginTop: "40px", width: "580px" }}
          />
          <QuiltedImageList />
        </Box>

<ThemeProvider theme={customTheme}>
      <MyThemeComponent>
      <Typography variant="h6" component="h4">
          About This Ticket
        </Typography>

        <Typography variant="paragraph" component="p" marginTop="15px">
          The city bills itself as the Entertainment Capital of the World, and
          is famous for its luxurious and extremely large casino-hotels. With
          over 2.9 million visitors as of 2019, Las Vegas is the sixth-most
          visited city in the U.S., after New York City, Miami, Los Angeles,
          Orlando, and San Francisco.
        </Typography>
      </MyThemeComponent>
    </ThemeProvider>
       
      </Container>
    </>
  );
}
