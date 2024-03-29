import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { Container, Grid, Paper, InputLabel } from "@mui/material";
import Input from "@mui/material/Input";

import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./styles.css";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";


const options = [
  { label: "Maharashtra", value: 1 },
  { label: "Gujarat", value: 2 },
  { label: "Goa", value: 3 },
  { label: "Assam", value: 4 },
  { label: "Punjab", value: 5 },
];

export default function MyAutocomplete() {
  const [selectedOption, setSelectedOption] = useState(null);
  const navigate = useNavigate();

  const handleclick = (data) => {
    console.log(data);
    navigate("/page2");
  };

  const schema = yup.object().shape({
    fname: yup.string().required(),
    age: yup
      .number()
      .typeError("Age must be a number")
      .required("Age is required")
      .positive("Age must be positive")
      .integer("Age must be an integer"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    control
  } = useForm({
    resolver: yupResolver(schema),
  });

  console.log(errors);



  return (
    <Container>
      <form onSubmit={handleSubmit(handleclick)}>
        <Grid container>
          <h1 className="heading">Fill in the Details</h1>
          <Grid item xs={12} className="grid_container">
            <Paper elevation={10} className="paper_container">
              <Grid container spacing={2} alignItems="center" marginTop="30px">
                <Grid item xs={3}>
                  <InputLabel htmlFor="firstName">First Name</InputLabel>
                </Grid>
                <Grid item xs={9}>
                  <Input
                    {...register("fname")}
                    id="firstName"
                    placeholder="Enter your First Name"
                  />
                  {errors.fname && (
                    <span className="error">This field is required </span>
                  )}
                </Grid>
              </Grid>
              <Grid container spacing={2} alignItems="center" marginTop="10px">
                <Grid item xs={3}>
                  <InputLabel htmlFor="lastName">Last Name</InputLabel>
                </Grid>
                <Grid item xs={9}>
                  <Input
                    {...register("lastName")}
                    id="lastName"
                    placeholder="Enter your Last Name"
                  />
                </Grid>
              </Grid>
              <Grid container spacing={2} alignItems="center" marginTop="10px">
                <Grid item xs={3}>
                  <InputLabel htmlFor="age">Age</InputLabel>
                </Grid>
                <Grid item xs={9}>
                  <TextField
                    {...register("age")}
                    type="number"
                    id="age"
                    placeholder="Enter your Age"
                    InputProps={{
                      inputProps: {
                        min: 0, // Optional: Set minimum value
                      },
                    }}
                  />
                  {errors.age && (
                    <span className="error">{errors.age.message}</span>
                  )}
                </Grid>
              </Grid>
              <Grid container spacing={2} alignItems="center" marginTop="10px">
                <Grid item xs={3}>
                  <InputLabel htmlFor="placeOfBirth">Place of Birth</InputLabel>
                </Grid>
                <Grid item xs={8} justifyContent="center">
                <Autocomplete
  id="placeOfBirth"
  value={selectedOption}
  onChange={(event, newValue) => {
    setSelectedOption(newValue);
 
    register("placeOfBirth", { value: newValue?.value }); 
  }}
  options={options}
  getOptionLabel={(option) => option.label}
  renderInput={(params) => <TextField {...params} />}
/>

                </Grid>
              </Grid>
              <Grid
                container
                spacing={2}
                alignItems="center"
                marginTop="30px"
                justifyContent="center"
              >
                <Button
                  className="submit_button"
                  variant="contained"
                  type="submit"
                >
                  Submit
                </Button>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}
