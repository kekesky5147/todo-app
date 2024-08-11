import React from "react"
import tick1 from "../assets/tick1.png"
// import not_tick from "../assets/not_tick.png"
import delete1 from "../assets/delete1.png"

const Todoitems = ({ text }) => {
  return (
    <div className="flex item-center my-3 gap-2 text-white ">
      <div className="flex flex-1 items-center cursor-pointer">
        <img className="size-10" src={tick1} alt="" />
        <p className="text-slate-300 ml-3">{text}</p>
      </div>

      <img className=" size-4 items-end cursor-pointer" src={delete1} alt="" />
    </div>
  )
}

export default Todoitems
