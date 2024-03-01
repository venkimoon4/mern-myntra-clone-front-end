import React from 'react'

const Alert = ({msg}) => {
  return (
    <div style={{marginTop:"20px"}}>
      <div className="alert alert-danger" role="alert">
    {msg}
</div>
    </div>
  )
}

export default Alert
