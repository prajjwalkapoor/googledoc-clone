
import { TextField, styled } from "@mui/material";

const CustomInput = styled(TextField)({
    "&": {
        padding: "0",
    },
    "& .MuiOutlinedInput-root": {
        fontSize: "1.5rem",
        marginBottom: "6px",
        borderRadius: "5px",
        "& input": {
            padding: "5px",
        },
        "& fieldset": {
            // padding: "5px 10px",
            borderColor: 'transparent',
        },
        "&:hover fieldset": {
            borderColor: '#3399FF',
        },
        "&.Mui-focused fieldset": {
            borderColor: '#3399FF',
        },
    },
});

export default CustomInput;