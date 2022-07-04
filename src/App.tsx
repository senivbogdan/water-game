import React from "react";
import Table from "./componets/Table";
import "./App.css";
import styled from "styled-components";

const WrapperDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const AppDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

function App() {
  return (
          <WrapperDiv>
              <AppDiv>
                  <Table/>
              </AppDiv>
          </WrapperDiv>
  );
}

export default App;
