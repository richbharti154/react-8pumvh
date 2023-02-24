import React from "react"
export default function Custombutton (props){
  return(
    <div>
     <button onClick={props.onClick} className={props.className}>{props.txt}</button>
    </div>
  )
}