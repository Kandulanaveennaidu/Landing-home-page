import React from "react";
import { Box, Button, Stack, TextField } from "@mui/material";
import Title from "./Title";
import Paragraph from "./Paragraph";

const Details = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const formData = {
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      email: data.get("email"),
      phone: data.get("phone"),
      company: data.get("company"),
      state: data.get("state"),
      description: data.get("description"),
      distributor: data.get("distributor"),
      additionalInfo: data.get("additionalInfo"),
    };
    alert(JSON.stringify(formData, null, 2));
    alert("Thank you for your submission!");
  };

  return (
    <Stack
      component="section"
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{
        py: 10,
        px: 2,
      }}
    >
      <Title text={"Interesting to buy property"} textAlign={"center"} />
      <Paragraph
        text={
          "If you are interested to buy the property, contact us and we will call you shortly to fulfill your requirements and provide property details."
        }
        maxWidth={"sm"}
        mx={0}
        textAlign={"center"}
      />

      <Box
        component="form"
        noValidate
        onSubmit={handleSubmit}
        sx={{
          mt: 11,
          py: 21,
        }}
      >
        <TextField
          margin="normal"
          required
          fullWidth
          id="firstName"
          label="First Name"
          name="firstName"
          autoComplete="given-name"
          autoFocus
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="lastName"
          label="Last Name"
          name="lastName"
          autoComplete="family-name"
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="phone"
          label="Phone Number"
          type="tel"
          id="phone"
          autoComplete="tel"
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="company"
          label="Company"
          name="company"
          autoComplete="organization"
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="state"
          label="State"
          name="state"
          autoComplete="address-level1"
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="description"
          label="How would you describe yourself?"
          name="description"
          multiline
          rows={4}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="distributor"
          label="Preferred Distributor"
          name="distributor"
        />
        <TextField
          margin="normal"
          fullWidth
          id="additionalInfo"
          label="Additional Information"
          name="additionalInfo"
          multiline
          rows={4}
        />
        <Button
          variant="contained"
          fullWidth
          type="submit"
          size="medium"
          sx={{
            fontSize: "0.9rem",
            textTransform: "capitalize",
            py: 2,
            mt: 3,
            mb: 2,
            borderRadius: 0,
            backgroundColor: "#14192d",
            "&:hover": {
              backgroundColor: "#1e2a5a",
            },
          }}
        >
          send
        </Button>
      </Box>
    </Stack>
  );
};

export default Details;
