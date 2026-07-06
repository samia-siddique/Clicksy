import React from 'react'
import { useNavigate } from "react-router-dom";

const SelectPhoto = () => {
    const navigate  = useNavigate()

  return (
    <div>
      <h1>Clicksy</h1>
      <button onClick={()=> navigate("/capture")}>Take Photo</button>
      <button>Select Photo</button>
    </div>
  )
}

export default SelectPhoto
