import React from 'react';
import styled from 'styled-components';

const Header = styled.header`
  background-color: white;
  color: black;
  text-align: center;
  padding: 24px 0;
`


function cabecalho(){
  return <Header>
  <h1>Ebac Jobs</h1>
</Header>
;
}
export default cabecalho