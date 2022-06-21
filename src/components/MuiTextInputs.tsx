import { Button, Stack, TextField } from "@mui/material";
import React, { SyntheticEvent } from "react";

const MuiTextInputs = () => {
  return (
    <div>
      <h1>Text input with form</h1>
      <h3>click Register and check the console</h3>
      <form
        onSubmit={(e: SyntheticEvent) => {
          e.preventDefault();
          const form = e.target as any;
          console.log(
            `email : ${form.email.value} , password : ${form.password.value} , age : ${form.age.value}`
          );
          (form as HTMLFormElement).reset();
        }}
      >
        <Stack spacing={2}>
          <TextField
            required
            name="email"
            type="email"
            label="Email"
            variant="outlined"
          />
          <TextField
            required
            name="password"
            type="password"
            label="Password"
            variant="filled"
          />
          <TextField type="number" name="age" label="Age" variant="standard" />
          <Button type="submit" variant="contained">
            Register
          </Button>
        </Stack>
      </form>
    </div>
  );
};

export default MuiTextInputs;
