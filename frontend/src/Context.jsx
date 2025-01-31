import { createContext, useState } from "react";


export const context = createContext();

const ContextFnc = ({children}) =>{
    const [inputValue, setInputValue] = useState("");
    const [edit,setEdit] = useState(false)
    const [todoIndex, setTodoIndex] = useState(null);
    const data = {
        inputValue,
        setInputValue,
        edit,
        setEdit,
        todoIndex,
        setTodoIndex
    }
    return <context.Provider value={data}>{children}</context.Provider>
}

export default ContextFnc