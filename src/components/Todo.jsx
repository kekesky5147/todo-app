import React, { useRef } from "react"
import todo1 from "../assets/todo1.png"
import Todoitems from "./Todoitems"

const Todo = () => {
  const inputRef = useRef()

  const add = () => {
    const inputText = inputRef.current.value.trim()
    console.log(inputText)
  }

  return (
    <div className="bg-black place-self-center w-11/12  max-w-md flex flex-col p-7 min-h-[550px] rounded-xl">
      {/* -----Title----- */}

      <div className="flex items-center mt-7 gap-2">
        <img className="w-12" src={todo1} alt="" />
        <h1 className="text-white text-3xl font-"> To-do List today</h1>
      </div>

      {/* -----input box----- */}

      <div className="flex items-center my-7 bg-gray-200 rounded-full">
        <input
          ref={inputRef}
          className="bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600"
          type="text"
          placeholder="Add To-do list"
        />
        <button
          onClick={add}
          className="border-none rounded-full bg-yellow-300 w-20 h-14  text-black text-lg font-medium cursor-pointer "
        >
          ADD+
        </button>
      </div>

      {/* -----To-do list----- */}

      <div>
        <Todoitems text="Learn Cording" />
        <Todoitems text="Learn Cording day2" />
        <Todoitems text="Learn Cording day3" />
      </div>
    </div>
  )
}

export default Todo
