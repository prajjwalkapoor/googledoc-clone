import { createContext, useState } from "react";
const initialState = {
    quill: null,
    quillRef: null,
}
export const QuillContext = createContext(initialState);

export default function QuillContextProvider({ children }) {
    const [quill, setQuill] = useState(null);
    return (
        <QuillContext.Provider value={{ quill, setQuill }}>
            {children}
        </QuillContext.Provider>
    )
}