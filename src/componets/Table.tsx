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

interface Points {
    firstPoint: number,
    endPoint: number
}

const Table = () => {
    const [blue, setBlue] = useState(false)
    const [arrayGame, setArrayGame] = useState<Obj[]>([])
    const [endPoint, setEndPoint] = useState<number>(0)
    const [points, setPoints] = useState<Points>({firstPoint: 0, endPoint: 79})
    const getInitialArray:any = () => {
        const res = []
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
        if (arrayGame.length) return
        const initArray = getInitialArray()
        setArrayGame(initArray)
    }, [])

    const handleClick = (id: number) => {
        const test = arrayGame.map((item, index, arr) => {
            if (!blue && id >= 70 && id === item.i) {
                if (points.firstPoint === 0) {
                    points.firstPoint = id
                }
                if (points.firstPoint < id) {
                    points.endPoint = id
                }

                setEndPoint(id)
                item.isEarth = true
            }
            if (id === item.i && arr[id + 10]?.isEarth) {
                if (id <= points.firstPoint) {
                    points.firstPoint = id
                }
                if (id > points.firstPoint) {
                    points.endPoint = id
                }
                    item.isEarth = true
            }
            return item
        })
        setArrayGame(test)
    }

    const runRain = ():void  => {
        const newArray: Obj[] = []
        arrayGame.map((item, id,arr) => {
            newArray.push(item)
               if (id === points.endPoint) {
                   return
               }

           if (id >= points.firstPoint && id <= points.endPoint) {
               if (!item.isEarth) {
                       if (arr[id + 10]) {
                           item.isWater = true
                           arr[id + 10].isWater = true
                           return item
                       }
                   }
               }
        })
       setArrayGame(newArray)
    }

    const resetGame = () => {
        const initArray = getInitialArray()
        setArrayGame(initArray)
    }

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

