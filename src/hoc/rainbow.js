import React from "react";
const Rainbow =(Comp)=>{
  return(props)=>{
    return(
      <div className="red-text">
      < Comp {...props} />
      </div>

    )
  }
}

export default Rainbow
