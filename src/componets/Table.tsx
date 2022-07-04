import {useEffect, useState} from "react";
import styled, { css } from "styled-components";

export const DivGame = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  background: grey;
  width: 1020px;
`

interface Props {
    isEarth: boolean,
    isWater: boolean
}

export const MappedDiv = styled.div<Props>`
  height: 100px;
  width: 100px;
  background: white;
  margin: 1px;
  ${({isEarth}) => isEarth && css`
    background-color: black;
  `};
  ${({isWater}) => isWater && css`
    background-color: #1aacda;
  `}
  
  
`
export const DivButt = styled.div`
  margin: 5px 0 0 0;
  display: flex;
  width: 1020px;
  justify-content: space-between;
`
export const ButtonReset = styled.button`
  border-radius: 7px;
  font-size: 34px;
  border: 1px solid #61dafb;
  background: white;
  color: #61dafb;
  cursor: pointer;
  
  :active {
    font-size: 32px;
  }
`
export const ButtonRun = styled.button`
  border-radius: 7px;
  font-size: 34px;
  border: 1px solid #1ee022;
  background: #1ee022;
  color: white;
  cursor: pointer;
  
  :active {
    font-size: 32px;
  }
`

interface Obj {
    i: number,
    isEarth: boolean
    isWater: boolean
}

const Table = () => {
    const [blue, setBlue] = useState(false)
    const [arrayGame, setArrayGame] = useState<Obj[]>([])
    const [checkArr, setArray] = useState<Obj[]>([])

    const getInitialArray:any = () => {
        const res = [];
        for (let i: number = 0; i < 80; i++) {
            res.push({
                i: i,
                isEarth: false,
                isWater: false
            })
        }
        return res
    }

    useEffect(() => {
        if (arrayGame.length) return;
        const initArray = getInitialArray()
        setArrayGame(initArray)
    }, [])

    // const arrayGame: Obj[] = []


    const handleClick = (id: number) => {
        const test = arrayGame.map((item, index, arr) => {
            console.log(item)
            if (!blue && id >= 70 && id === item.i) {
                item.isEarth = true
            }
            if (id === item.i && arr[id + 10]?.isEarth) {
                item.isEarth = true
            }
            return item
        });
        console.log("test", test)
        setArrayGame(test)
    }
// Напистаь интерфейс

    let arrayCheck: any;
    const runRain = ():void => {
            const rer = arrayGame.map((item, id,arr) => {
            if (item.isEarth) {
                for (let i = arrayGame.findIndex(i => i.isEarth); i < arrayGame.length; i++) {

                    if (!arrayGame[i].isEarth) {
                        return arrayGame[i].isWater = true
                    }
                    if (i === arrayGame.lastIndexOf(item) + 1) {
                        console.log(arrayGame.lastIndexOf(item) + 1)
                        break
                    }
                }
                // arrayCheck = arr.slice(arrayGame.findIndex(i => i.isEarth), arrayGame.lastIndexOf(item) + 1)
                // .filter((item: any): any => {
                //         return item.isEarth === false
                //     }).forEach((item: any, index: number, array: any) => {
                //         if (!item.isEarth) {
                //         return item.isWater = true
                //         }
                //     })
            }
        })
        console.log("arrayGame", arrayGame)
    }

    const resetGame = () => {
        const initArray = getInitialArray()
        setArrayGame(initArray)
    };


    // console.log('arrayGame', arrayGame)

    return (
        <>
            <DivGame>
                {arrayGame && arrayGame.map((item: any, id: any) => {
                    return <MappedDiv
                        id={id}
                        onClick={() => handleClick(id)}
                        key={id}
                        isEarth={item.isEarth}
                        isWater={item.isWater}
                    />
                })}
            </DivGame>
            <DivButt>
                <ButtonReset onClick={() => resetGame()}>Reset</ButtonReset>
                <ButtonRun onClick={() => runRain()}>Run</ButtonRun>
            </DivButt>
        </>
    )
}

export default Table

