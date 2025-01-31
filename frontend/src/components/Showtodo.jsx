import React, { useContext } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { FaEdit } from "react-icons/fa";
import { context } from "../Context";

const Showtodo = (todos) => {
  const todoData = todos.todos;
  const { deletetask } = useAuthStore();
  const onDelete = (index) => {
    deletetask({ ind: index });
  };

  const { setInputValue, setEdit, setTodoIndex } = useContext(context);

  const handleEditInput = (todo, index) => {
    setInputValue(todo);
    setTodoIndex(index);
    setEdit(true);
  };

  return (
    <div className="bg-white p-2  md:p-6 rounded-lg shadow-md mt-4">
      <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">
        Your To-Do List
      </h2>
      {todoData?.length === 0 ? (
        <p className="text-center text-gray-500">
          No tasks to show. Add a task!
        </p>
      ) : (
        <ul className="space-y-4 w-full md:w-[80%] mx-auto px-1 md:px-3">
          {todoData?.map((todo, index) => (
            <li
              key={index}
              className="flex justify-between py-2 px-3 rounded-md bg-gray-200 items-center"
            >
              <div className="flex items-center space-x-4">
                {/* Task Text */}
                <span className={`text-lg text-gray-800'}`}>{todo}</span>
              </div>
              <div className="flex flex-row gap-2">
                <FaEdit
                  onClick={() => handleEditInput(todo, index)}
                  className="mt-1 md:mt-0"
                />
                {/* Delete Button */}
                <button
                  onClick={() => onDelete(index)}
                  className="text-white  py-1 bg-red-600 px-3 rounded-md hover:text-black focus:outline-none"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Showtodo;
