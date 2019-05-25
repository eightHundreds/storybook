import React from "react";
import styled, { css } from "styled-components";
import { select } from "@storybook/addon-knobs";
import { storiesOf } from "@storyRoot/utils";
import BasicMd from "./basic.md";
import "./flex.scss";

interface ContainerProps {
  border?: boolean;
}
const Container = styled.div<ContainerProps>`
  display: ${props => props.className || "flex"};
  width: 800px;
  ${props =>
    props.border
      ? css`
          border: 1px solid;
        `
      : null}
  .box {
    width: 50px;
    border: 1px solid;
  }
`;

storiesOf("CSS|flex", module, {
  useKnobs: true
})
  .add(
    "basic",
    () => (
      <Container>
        <div className="box">1</div>
        <div className="box">2</div>
        <div className="box">3</div>
      </Container>
    ),
    {
      notes: {
        markdown: BasicMd
      }
    }
  )
  .add("flex-direction", () => {
    const option = { column: "column", row: "row", rowReverse: "row-reverse", columnReverse: "column-reverse" };
    const Wrapper = styled(Container)`
      flex-direction: ${select("flex-direction", option, "column")};
    `;
    return (
      <Wrapper border>
        <div className="box">1</div>
        <div className="box">2</div>
        <div className="box">3</div>
      </Wrapper>
    );
  })
  .add("justify-content", () => {
    const Wrapper = styled(Container)`
      justify-content: center;
    `;
    return (
      <Wrapper border>
        <div className="box">1</div>
        <div className="box">2</div>
        <div className="box">3</div>
      </Wrapper>
    );
  })
  .add("align-items", () => {
    const Wrapper = styled(Container)`
      align-items: center;
      height: 200px;
    `;
    return (
      <Wrapper border>
        <div className="box">1</div>
        <div className="box">2</div>
        <div className="box">3</div>
      </Wrapper>
    );
  })
  .add('margin of flex item no collapse', () => {
    const Box = styled.div`
      display:flex;
      margin:0 10px;
    `
    return <Container border>
      <Box className="box">1</Box>
      <Box className="box">2</Box>
      <Box className="box">3</Box>
    </Container>
  },{
    notes:'flex item 间的margin不坍缩'
  })
  .add("children flex item out of flow", () => {
    return (
      <Container
        style={{
          height: "200px"
        }}
        border
      >
        <div className="box">1</div>
        <div
          style={{
            position: "absolute",
            border: "1px solid red"
          }}
          className="box"
        >
          2
        </div>
        <div className="box">3</div>
      </Container>
    );
  }, {
      notes: {
        markdown: "绝对定位的flex-item,不参与flex计算,所处位置是`静态位置`,该位置受`just-content`影响,就像flex-container只有它一个元素"
      }
    });
