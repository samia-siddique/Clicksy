import React from 'react'
import "./Capture.css"
import Camera from '../../components/Camera/Camera'

const Capture = ({ capturedImage, setCapturedImage }) => {
  return (
    <div className='capture'>
      <h3>Strike a Pose <span>!</span> </h3>
       <Camera
        capturedImage={capturedImage}
        setCapturedImage={setCapturedImage}
      />
    </div>
  )
}

export default Capture
