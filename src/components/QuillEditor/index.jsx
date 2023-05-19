import { Paper } from "@mui/material";
import { useQuill } from 'react-quilljs-vite-fix';
import 'quill/dist/quill.snow.css'; // Add css for snow theme
import { useContext, useEffect } from "react";
import { QuillContext } from "../../context/quillContext";


export default function QuillEditor() {
    const { setQuill } = useContext(QuillContext);
    const { quill, quillRef } = useQuill({
        formats: ['bold', 'italic', 'underline', 'strike', 'list', 'bullet', 'link', 'size', 'font', 'align'],
        debug: 'warn',
        modules: {
            toolbar: false,
            history: {
                userOnly: true,
            }
        },


    });
    // update content in local storage on change
    quill?.on('text-change', (delta, oldDelta, source) => {
        if (source === 'user') {
            const content = JSON.stringify(quill.getContents());
            localStorage.setItem('content', content);
            console.log('A user action triggered this change.');
        }
    });

    useEffect(() => {
        // if local storage has content, load it
        const content = localStorage.getItem('content');
        if (quill && content) {
            quill.setContents(JSON.parse(content));
        }
    }, [quill])


    useEffect(() => {
        if (quill) {
            setQuill(quill);
        }
    }, [quill, setQuill]);
    return (
        <Paper
            sx={{
                height: '100vh',
                marginTop: '1rem',
                border: '1px solid #E0E0E0',
            }}>
            <div ref={quillRef} />
        </Paper>
    )
}
