import React from "react";
import styled from "styled-components";

function Hero() {
  return (
    <Form>
      <Container>
        <Herotitle>
          As melhores vagas para tecnologia, design e artes visuais.
        </Herotitle>
      </Container>
    </Form>
  );
}

const Form = styled.form`
  height: 360px;
  width: 100%;
  background-image: url("https://cdn.pixabay.com/photo/2018/08/10/15/45/woman-3597101_1280.jpg");
  background-size: cover;
  position: relative;
  display: flex;
  align-items: center;
`

const Container = styled.div`
  position: relative;
  color: #eee;
`

const Herotitle = styled.h1`
  font-family: Gloock, serif;
  font-size: 48px;
`
export default Hero;
