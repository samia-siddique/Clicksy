import React from 'react'
import Camera from '../../components/Camera/Camera'

const Capture = ({ capturedImage, setCapturedImage }) => {
  return (
    <div>
      <h3>Strike a Pose</h3>
       <Camera
        capturedImage={capturedImage}
        setCapturedImage={setCapturedImage}
      />
    </div>
  )
}

export default Capture
