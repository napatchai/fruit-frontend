import React from 'react'
import Grid from "@mui/material/Grid";
import styled from "styled-components";

const Container = styled.div`
border-top: 1px solid #000;
padding: 10px 0;
`;

const Header = styled.h4`
  
  padding-top: 5px;
`;

export default function Items(props) {
    const {name, image} = props ?? {};

    return (
        <Container>
            <Grid container>
            <Grid xs={6}>
                <Header>{name}</Header>
            </Grid>
            <Grid xs={6} alignItems="center">
                <img src={'http://localhost:3000/image/' + image} style={{width: 'auto', height: 150}} alt="" />
            </Grid>
            </Grid>
        </Container>
    )
}
