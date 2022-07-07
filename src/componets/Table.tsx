import {useEffect, useState} from "react";
import styled, {css} from "styled-components";

export const DivGame = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: row;
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
  ${({isWater}) => isWater && css`
    background-color: #1aacda;
  `}
  ${({isEarth}) => isEarth && css`
    background-color: black;
  `};
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
export const DivTable = styled.div`
  display: flex;
  flex-direction: column;
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
    const [points, setPoints] = useState<Points>({firstPoint: 0, endPoint: 79})
    const getInitialArray: any = () => {
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

        if (points.endPoint === points.firstPoint) {
            let array: any = [...test]
            for (let i = points.firstPoint; i < array.length; i++) {
                let newFirstPoint = test.indexOf(array.find((item: any) => item.isEarth))
                let sliceArr = array.slice(newFirstPoint)
                // points.firstPoint = sliceArr.find((item: any) => item.isEarth).i
                let kek = array.slice(points.firstPoint + 1)
                // points.endPoint = kek.find((item: any) => item.isEarth).i
                console.log("asd")
            }
        }
        if (points.endPoint - points.firstPoint === 10) {
            console.log("dura")
            let array: any = [...test]
            let newFirstPoint = arrayGame.indexOf(array.find((item: any) => item.isEarth))
            points.firstPoint = points.endPoint - 10
            // points.endPoint = newFirstPoint
            console.log("endPointasdsadasdasdasd", points.endPoint)
            console.log("points.firstPoint", points.endPoint)
        }



        // if (points.endPoint === points.firstPoint) {
        //     let array: any = [...test]
        //     for (let i = points.firstPoint; i < array.length; i++) {
        //         let newFirstPoint = arrayGame.indexOf(array.find((item: any) => item.isEarth))
        //         let sliceArr = array.slice(newFirstPoint + 1)
        //         points.firstPoint = sliceArr.find((item: any) => item.isEarth).i
        //         let kek = array.slice(points.firstPoint + 1)
        //         points.endPoint = kek.find((item: any) => item.isEarth).i
        //     }
        // }
        // console.log("FFFirstPoint", points.firstPoint)
        // console.log("EEEndPoint", points.endPoint)
        setArrayGame(test)
    }

    const runRain = (num: number = 0): void => {
        const newArray: Obj[] = []
        arrayGame.map((item, id, arr) => {
            newArray.push(item)
            if (id === points.endPoint) return
                if (id >= points.firstPoint && id <= points.endPoint) {
                    if (item.isEarth) {
                        item.isWater = false
                    }
                    if (Math.floor(points.firstPoint / 10) !== Math.floor(points.endPoint / 10)) {
                        let newArr: any[] = arr.slice(points.firstPoint + 1, points.endPoint)
                        let newFirstpoint = newArr.indexOf(newArr.find((item: any) => item.isEarth))
                        console.log("newArr", newArr)
                        console.log("newFirstpoint", newFirstpoint)
                        points.firstPoint = newArr[newFirstpoint].i
                    }


                    if (points.endPoint === points.firstPoint) {
                        let array: any = [...newArray]
                        for (let i = points.firstPoint; i < array.length; i++) {
                            let newFirstPoint = newArray.indexOf(array.find((item: any) => item.isEarth))
                            let sliceArr = array.slice(newFirstPoint)
                            points.firstPoint = sliceArr.find((item: any) => item.isEarth).i
                            let kek = array.slice(points.firstPoint + 1)
                            points.endPoint = kek.find((item: any) => item.isEarth).i
                            console.log("asd")
                        }
                    }
                    if (!item.isEarth) {
                        let i: number = num
                        while (i <= 70) {
                            console.log("FFFirstPoint", points.firstPoint)
                            console.log("EEEndPoint", points.endPoint)
                            if (Math.floor(points.firstPoint / 10) !== Math.floor(points.endPoint / 10)) {
                                let newArr: any[] = arr.slice(points.firstPoint, points.endPoint + 1)
                                let newFirstpoint = newArr.indexOf(newArr.find((item: any) => item.isEarth))
                                points.firstPoint = newArr[newFirstpoint]?.i
                            }
                            if (arr[id + i]) {
                                arr[id + i].isWater = true
                                item.isWater = true
                            }
                            i = i + 10
                        }
                    }
                }
        })
        setArrayGame(newArray)
    }

    const resetGame = () => {
        const initArray = getInitialArray()
        setArrayGame(initArray)
        points.endPoint = 79
        points.firstPoint = 0
    }



    return (
        <DivTable>
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
        </DivTable>
    )
}

export default Table