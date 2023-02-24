import React from "react"
export default function CustomInput (props){
  return(
    <div>
      <input  onChange={props.onChange} value={props.value} className={props.className} required={props.required}
      placeholder={props.placeholder}
      type={props.type}
      />
    </div>
  )
}