import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

import "./TourCard.css";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { AccessTime } from "@mui/icons-material";
import Rating from "@mui/material/Rating";


export default function TourCard2(props) {
  return (
    <>
    
      
      <Grid item xs={3} style={{marginTop:'45px', marginBottom:'20px'}}>
        <Paper elevation={10} style={{height:"250"}}>
          <img className="img" src={props.img} alt="extra" height="200px" />
          <Box padding={1}>
            <Typography variant="subtitle1" component="h2">
              {props.description}
            </Typography>
          </Box>
          <Box
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: "0px",
            }}
            padding={1}
          >
            <AccessTime style={{ width: 12.5 }} />

            <Typography variant="body2" component="p" marginLeft={0.5}>
              {props.time}
            </Typography>
          </Box>
          <Box>
            <Rating
              name="read-only"
              value={props.rating}
              precision={0.5}
              readOnly
              size="small"
              style={{marginLeft:"5px"}}
            />
            <Typography style={{marginLeft:"5px"}}> {props.number}</Typography>
          </Box>
        </Paper>
      </Grid>

      
    </>
  );
}
