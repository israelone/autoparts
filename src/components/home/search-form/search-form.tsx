import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Button, TextField } from "@mui/material";

const FormContainer = {
  width: "100%",
  display: "flex",
  justifyContent: "center",
};

export default function SearchForm() {
  const [inputField, setInputField] = React.useState({
    year: "",
    makeAndModel: "",
    part: "",
    country: "",
  });

  const [submitDisabled, setSubmitDisabled] = React.useState(true);

  //! TODO button is not being enabled after filling all the inputs
  const handleChange = (event: SelectChangeEvent) => {
    event.preventDefault();
    setInputField((previousState) => {
      return { ...previousState, [event.target.name]: event.target.value };
    });
  };

  useEffect(() => {
    if (
      inputField.year &&
      inputField.country &&
      inputField.makeAndModel &&
      inputField.part
    ) {
      setSubmitDisabled(false);
    } else {
      setSubmitDisabled(true);
    }
  }, [inputField]);
  return (
    <Box sx={FormContainer}>
      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "500px",
          gap: "20px",
        }}
      >
        <h2>Search</h2>
        <FormControl fullWidth>
          <InputLabel id="year">Year</InputLabel>
          <Select
            labelId="year"
            id="year-select"
            value={inputField.year}
            label="year"
            onChange={handleChange}
            name="year"
          >
            <MenuItem value={"10"}>Ten</MenuItem>
            <MenuItem value={"20"}>Twenty</MenuItem>
            <MenuItem value={"30"}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel id="makeAndModel">Make/Model</InputLabel>
          <Select
            labelId="makeAndModel"
            id="make-model-select"
            value={inputField.makeAndModel}
            label="makeAndModel"
            onChange={handleChange}
            name="makeAndModel"
          >
            <MenuItem value={"10"}>Ten</MenuItem>
            <MenuItem value={"20"}>Twenty</MenuItem>
            <MenuItem value={"30"}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Part</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={inputField.part}
            label="part"
            onChange={handleChange}
            name="part"
          >
            <MenuItem value={"10"}>Ten</MenuItem>
            <MenuItem value={"20"}>Twenty</MenuItem>
            <MenuItem value={"30"}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Country</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={inputField.country}
            label="country"
            onChange={handleChange}
            name="country"
          >
            <MenuItem value={"10"}>Ten</MenuItem>
            <MenuItem value={"20"}>Twenty</MenuItem>
            <MenuItem value={"30"}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <Button disabled={submitDisabled} variant="contained" size="medium">
          Search
        </Button>
      </Box>
    </Box>
  );
}
