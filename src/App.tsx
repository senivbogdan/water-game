import React, {useState} from "react";
import Table from "./componets/Table";
import "./App.css";
import styled from "styled-components";
import Rain from "./componets/Rain";

const WrapperDiv = styled.div`
  display: flex;
  background: url("https://img.freepik.com/free-vector/a-nature-raining-scene_1308-22369.jpg?w=2000");
  background-size: unset;
  background-position: bottom;
  justify-content: center;
  margin: 0;
  padding: 0;
  overflow: hidden;
  position: absolute;
  width: 100%;
`

const AppDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  z-index: 3;
`

interface Props {
    key: any,
    id: number,
    style: any

}
interface Snow {
    snow: any
}
function App() {
    const snow = () => {
        let animationDelay = '0s';
        let fontSize = '100px';
        let arr = Array.from('Snowflakes are awesome!!! They are like little pieces of magic!!! Love snowflakes!!! Snowflakes are awesome!!! They are like little pieces of magic!!! Love snowflakes!!! Snowflakes are awesome!!! They are like little pieces of magic!!! Love snowflakes!!!')
        return arr.map((el, i) => {
            animationDelay = `${(Math.random()*16).toFixed(2)}s`;
            fontSize = `${(Math.floor(Math.random()*10) + 10)}px`;
            let style = {
                animationDelay,
                fontSize
            }
            console.log(arr.length, "asd");
            
            return (<Rain data-testid="rain-div" key={i} id={i} style={style}/>)
        })
    }
  return (
          <WrapperDiv>
              <AppDiv>
                  <Table/>
              </AppDiv>
              <div className={"app"}>
                  {snow()}
              </div>
          </WrapperDiv>
  );
}

export default App;
