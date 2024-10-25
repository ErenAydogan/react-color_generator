import { useState } from "react";
import Button from "./components/button";


function App() {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000")

  const randomColorUtility = (length) =>
  {
    return Math.floor(Math.random()*length);
  }

  const handleClickRandomHexColor = () =>
  {
    setTypeOfColor('hex')
    const hex = [0,1,2,3,4,5,6,7,8,9,"A", "B", "C", "D", "E", "F"];
    let hexColor = "#"

    for (let i=0; i<6; i++)
    {
      hexColor += hex[randomColorUtility(hex.length)]
    }

    setColor(hexColor)
  }

  const handleClickRandomRgbColor = () =>
  {
    setTypeOfColor('rgb')
    let rgbColor = `rgb(${randomColorUtility(256)}, ${randomColorUtility(256)}, ${randomColorUtility(256)})`
    setColor(rgbColor)
  }

  const handleClick = (type) =>
  {
      if (type === 'random')
      {
        let colorTypes = ['hex', 'rgb'];
        let colorType = colorTypes[randomColorUtility(colorTypes.length)];
        if (colorType === 'hex')
        {
          handleClickRandomHexColor();
        }
        else
        {
          handleClickRandomRgbColor();
        }
      }
      else if (type === 'hex')
      {
        handleClickRandomHexColor();
      }
      else
      {
        handleClickRandomRgbColor();
      }
  }  

  return (
    <>
    <div className="container w-screen h-screen flex justify-between m-auto relative" style={{ background: color }}>
      <Button onClick={ () => handleClick('hex') }>Create HEX Color</Button>
      <Button onClick={ () => handleClick('rgb') }>Create RGB Color</Button>
      <Button onClick={ () => handleClick('random') }>Create Random Color</Button>
      <div className="fixed top-2/4 left-2/4 bg-white text-black">
        <h2 >TYPE: {typeOfColor}</h2>
        <h2>Color: {color}</h2>
      </div>
    </div>
    </>
  )
}

export default App
