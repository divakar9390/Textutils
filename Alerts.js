import React from 'react'

export default function Alerts(props) {
  return (
   
    props.alerts && <div className={`alert alert-${props.alerts.type} `}role="alert">
          <strong>{props.alerts.type}</strong>
        
       </div>
   
  )
}
