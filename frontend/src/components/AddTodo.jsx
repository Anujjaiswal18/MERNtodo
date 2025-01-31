import React, { useContext } from "react";
import toast from "react-hot-toast";
import { useAuthStore } from "../store/useAuthStore";
import { context } from "../Context";

const AddTodo = () => {
  const { inputValue, setInputValue, edit , todoIndex, setEdit} = useContext(context);
  const { addtask, edittask } = useAuthStore();
  const handleAddTask = (e) => {
    e.preventDefault();
    if (inputValue.trim() === "") return toast.error("Please enter a task");

    addtask({ text: inputValue });
    setInputValue("");
  };

  const handleMainEditFnc = () => {
    if (inputValue.trim() === "") return toast.error("Please enter a task");
    edittask({ text: inputValue, ind: todoIndex });
    setEdit(false)
    setInputValue("");
  }
  return (
    <div className="bg-white p-6 w-full mx-auto rounded-lg shadow-md mt-4">
      <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">
        Add a Task
      </h2>
      <form
        onSubmit={handleAddTask}
        className="w-full md:w-[90%] mx-auto  flex gap-2 items-center justify-center"
      >
        <div className="w-[55%] md:w-[80%] ">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="w-[100%] flex   px-4 py-2 border border-gray-300 rounded-md"
            placeholder="Enter task text"
          />
        </div>
        <div className="">
          {edit ? (
            <button
            type="button"
            onClick={ handleMainEditFnc}
              className="bg-green-500 hover:bg-blue-600 text-white px-2 py-2 md:px-4 md:py-2 rounded-md"
            >
              Edit Task
            </button>
          ) : (
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-2 md:px-4 md:py-2 rounded-md"
            >
              Add Task
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default AddTodo;
