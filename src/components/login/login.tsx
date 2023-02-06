import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import React, { ChangeEventHandler, useEffect } from "react";

const FormContainer = {
  width: "100%",
  display: "flex",
  justifyContent: "center",
};

export default function Login() {
  const [inputField, setInputField] = React.useState({
    username: "",
    password: "",
  });

  const [submitDisabled, setSubmitDisabled] = React.useState(true);

  //! TODO button is not being enabled after filling all the inputs
  const handleChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    console.log(e);
    // setInputField((previousState) => {
    //   return { ...previousState, [event.target]: event.target.value };
    // });
  };

  useEffect(() => {
    if (inputField.username && inputField.password) {
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
        <h2>Log In</h2>
        <FormControl fullWidth>
          <TextField
            id="username-select"
            value={inputField.username}
            label="Username"
            onChange={handleChange}
            name="username"
          ></TextField>
        </FormControl>
        <FormControl fullWidth>
          <TextField
            id="make-model-select"
            value={inputField.password}
            label="Password"
            onChange={handleChange}
            name="password"
          ></TextField>
        </FormControl>
        <Button disabled={submitDisabled} variant="contained" size="medium">
          Log in
        </Button>
      </Box>
    </Box>
  );
}
