import React from "react";
import Grid from "@mui/material/Grid";
import styled from "styled-components";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  padding: 0px 20px;
`;

const Title = styled.h1`
  font-size: 1.5em;
`;

export default function InsertPage() {
  const { register, handleSubmit, error } = useForm();

  const navigate = useNavigate();

  const onSubmit = (data) => {
    axios
      .post(
        "http://localhost:3000/upload",
        {
          Name: data.Name,
          File: data.File[0],
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((res) => {
        console.log("ok", res);
        navigate("/");
      })
      .catch((err) => {
        console.log("error", err);
      });
  };

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Title>Create</Title>
        <Grid container>
          <Grid container xs={12} justifyContent="center">
            <div style={{ display: "flex" }}>
              <Title>Name: </Title>
              <TextField
                id="outlined-basic"
                label="Name"
                variant="outlined"
                size="small"
                name="Name"
                {...register("Name", { required: true })}
                //   onChange={handleChange}
                sx={{ width: 300, marginTop: 2, marginLeft: 2 }}
              />
            </div>
          </Grid>
          <Grid container xs={12} justifyContent="center">
            <div style={{ display: "flex" }}>
              <Title>Photo: </Title>
              <TextField
                id="outlined-basic"
                variant="outlined"
                size="small"
                type="file"
                name="file"
                {...register("File", { required: true })}
                // ref={register({ required: "file is required." })}
                //   onChange={handleChange}
                sx={{ width: 300, marginTop: 2, marginLeft: 2 }}
              />
            </div>
          </Grid>
          <Grid
            container
            xs={12}
            justifyContent="center"
            style={{ paddingRight: 75, paddingTop: 10 }}
          >
            <Button
              variant="contained"
              color="success"
              size="small"
              type="submit"
            >
              Save
            </Button>
            <Button
              variant="outlined"
              sx={{
                backgroundColor: "#d7d7d9",
                border: 0,
                color: "#000",
                marginLeft: 1,
              }}
              size="small"
              onClick={() => navigate("/")}
            >
              Cancel
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}
