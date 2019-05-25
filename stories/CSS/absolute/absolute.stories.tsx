import React from "react";
import { storiesOf } from "@storyRoot/utils"
import styled from "styled-components";


const Container = styled.div`
    width:200px;
    height:100px;
    border:1px solid red;
`

storiesOf('CSS|absolute', module).add("view", () => (
    <Container>
        <div style={{
            width: '100px',
            height: '100px',
            margin: 'auto',
            border: '1px solid blue'
        }}></div>
    </Container>
));
