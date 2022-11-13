import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import styled from "styled-components";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import Items from "../components/Items";

const Container = styled.div`
  padding: 0px 20px;
`;

const Title = styled.h1`
  font-size: 1.5em;
`;

const fruit = [
  {
    name: "orange",
    image: "http://localhost:3000/image/1668275983154.png",
  },
  {
    name: "test",
    image: "http://localhost:3000/image/1668275983154.png",
  },
];

export default function Main() {
  const [fruitData, setFruitData] = useState([]);
  const [fruitDataFilter, setFruitDataFilter] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3000/All")
      .then((res) => {
        console.log(res.data.data);
        setFruitData(res.data.data);
        setFruitDataFilter(res.data.data);
      })
      .catch((err) => {
        console.log("error", err);
      });
  }, []);

  const handleChange = (event) => {
    const searchTest = event.target.value;

    const fruitFilter = fruitData.filter((item) =>
      item.name.toLowerCase().includes(searchTest.toLowerCase())
    );

    setFruitDataFilter(fruitFilter);
  };

  return (
    <Container>
      <Grid container>
        <Grid xs={11}>
          <Title>ผลไม้</Title>
        </Grid>
        <Grid xs={1} justifyContent="flex-end">
          <Button
            variant="contained"
            color="success"
            style={{ marginTop: 20, marginBottom: 20 }}
            onClick={() => navigate("/insert")}
          >
            เพิ่มผลไม้
          </Button>
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="flex-end"
          alignItems="flex-start"
        >
          <TextField
            id="outlined-basic"
            label="Search Here"
            variant="outlined"
            size="small"
            onChange={handleChange}
            sx={{ width: 300 }}
          />
        </Grid>
      </Grid>
      <h3>ชื่อผลไม้</h3>
      {fruitDataFilter &&
        fruitDataFilter.map(({ name, imgPath }) => {
          return <Items name={name} image={imgPath} />;
        })}
    </Container>
  );
}
