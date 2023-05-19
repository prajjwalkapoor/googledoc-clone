import { Grid, IconButton, MenuItem, Select } from "@mui/material";
import {
    UndoOutlined, RedoOutlined, PrintOutlined, SpellcheckOutlined, FormatPaintOutlined,
    FormatBoldOutlined, FormatItalicOutlined, FormatUnderlinedOutlined,
    FormatColorTextOutlined, ColorizeOutlined,
    LinkOutlined, AddCommentOutlined, PhotoOutlined, FormatListBulletedOutlined, FormatListNumberedOutlined,
    FormatAlignLeftOutlined, FormatAlignCenterOutlined, FormatAlignRightOutlined, FormatAlignJustifyOutlined

} from "@mui/icons-material";
import { useContext, useEffect, useState } from "react";
import { QuillContext } from "../../context/quillContext";


export default function ToolBar() {
    const { quill } = useContext(QuillContext);
    const [textStyle, setTextStyle] = useState('normal');
    const [textSize, setTextSize] = useState(15);
    const [font, setFont] = useState('Arial');
    const [zoomed, setZoomed] = useState(100);
    const [alignment, setAlignment] = useState('left');
    const handleFormat = (format) => {
        if (quill) {
            if (format == 'ordered') { quill.format('list', 'ordered'); return };
            quill.format(format, !quill.getFormat()[format]);

        }
    };
    useEffect(() => {
        handleTextStyling();
    }, [textStyle])
    useEffect(() => {
        if (quill) {
            // clear previous size
            quill.format('size', false);
            // add new size
            quill.format('size', textSize);
            if (quill.getSelection()) {
                quill.formatText(quill.getSelection(), 'size', textSize);
            }
        }
    }, [textSize])
    const handleTextStyling = () => {
        console.log(textStyle, "called");
        if (quill) {
            switch (textStyle) {
                case 'normal':
                    setTextSize('normal');
                    return
                case 'heading':
                    setTextSize('huge');
                    return
                case 'subheading':
                    setTextSize('large');
                    return
                default:
                    return
            }
        }
    }

    return (
        <Grid container xs={11.9} spacing={1} direction='row' alignContent='center' sx={{
            backgroundColor: '#edf2fa',
            margin: '1rem 0',
            borderRadius: '25px'
        }}>
            <Grid container item xs={10} >
                <IconButton aria-label="undo" size='medium' onClick={() => quill.history.undo()}>
                    <UndoOutlined size='medium' />
                </IconButton>

                <IconButton aria-label="redo" size='medium' onClick={() => quill.history.redo()}>
                    <RedoOutlined size='medium' />
                </IconButton>
                <IconButton aria-label="print" size='medium' onClick={() => window.print()}>
                    <PrintOutlined size='medium' />
                </IconButton>
                <IconButton aria-label="spellcheck" size='medium' disabled>
                    <SpellcheckOutlined size='medium' />
                </IconButton>
                <IconButton aria-label="paint" size='medium' disabled>
                    <FormatPaintOutlined size='medium' />
                </IconButton>
                <Select
                    value={zoomed}
                    defaultValue="100%"
                    onChange={(e) => setZoomed(e.target.value)}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                    sx={selectStyles}
                >
                    <MenuItem value="Fit">Fit</MenuItem>
                    <MenuItem value={50}>50%</MenuItem>
                    <MenuItem value={75}>75%</MenuItem>
                    <MenuItem value={100} selected>100%</MenuItem>
                    <MenuItem value={125}>125%</MenuItem>
                </Select>
                <Select
                    value={textStyle}
                    defaultValue="Normal Text"
                    onChange={(e) => {
                        setTextStyle(e.target.value)

                    }}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                    sx={selectStyles}
                >
                    <MenuItem value="normal" selected>Normal Text</MenuItem>
                    <MenuItem value="heading">Title</MenuItem>
                    <MenuItem value="subheading">Subtitle</MenuItem>

                </Select>
                <Select
                    value={font}
                    defaultValue="Arial"
                    onChange={(e) => {
                        setFont(e.target.value)
                        quill.format('font', e.target.value);
                    }}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                    sx={selectStyles}
                >
                    <MenuItem value="Arial" selected>Arial</MenuItem>
                    <MenuItem value="Times New Roman">Times New Roman</MenuItem>
                    <MenuItem value="Courier New">Courier New</MenuItem>
                    <MenuItem value="Verdana">Verdana</MenuItem>
                    <MenuItem value="Georgia">Georgia</MenuItem>
                    <MenuItem value="Palatino">Palatino</MenuItem>
                    <MenuItem value="Garamond">Garamond</MenuItem>
                    <MenuItem value="Bookman">Bookman</MenuItem>
                    <MenuItem value="Comic Sans MS">Comic Sans MS</MenuItem>
                    <MenuItem value="Trebuchet MS">Trebuchet MS</MenuItem>
                    <MenuItem value="Arial Black">Arial Black</MenuItem>
                    <MenuItem value="Impact">Impact</MenuItem>
                    <MenuItem value="Lucida Sans Unicode">Lucida Sans Unicode</MenuItem>
                    <MenuItem value="Tahoma">Tahoma</MenuItem>
                    <MenuItem value="Courier New">Courier New</MenuItem>
                    <MenuItem value="Lucida Console">Lucida Console</MenuItem>

                </Select>
                <IconButton aria-label="bold" size='medium' onClick={() => handleFormat('bold')}>
                    <FormatBoldOutlined size='medium' />
                </IconButton>
                <IconButton aria-label="italic" size='medium' onClick={() => handleFormat('italic')}>
                    <FormatItalicOutlined size='medium' />
                </IconButton>
                <IconButton aria-label="underline" size='medium' onClick={() => handleFormat('underline')}>
                    <FormatUnderlinedOutlined size='medium' />
                </IconButton>
                <IconButton aria-label="textcolor" size='medium' disabled>
                    <FormatColorTextOutlined size='medium' />
                </IconButton>
                <IconButton aria-label="colorize" size='medium' disabled>
                    <ColorizeOutlined size='medium' />
                </IconButton>
                <IconButton aria-label="link" size='medium' onClick={() => {
                    const range = quill.getSelection();
                    if (range && range.length > 0) {
                        const selectedText = quill.getText(range.index, range.length);
                        quill.format('link', selectedText, 'user');
                    }
                }}>
                    <LinkOutlined size='medium' />
                </IconButton>
                <IconButton aria-label="comment" size='medium' disabled>
                    <AddCommentOutlined size='medium' />
                </IconButton>
                <IconButton aria-label="photo" size='medium' onClick={() => {
                    quill.format('image', true);
                }}>
                    <PhotoOutlined size='medium' />
                </IconButton>
                <IconButton aria-label="bullets" size='medium' onClick={() => handleFormat('list')}>
                    <FormatListBulletedOutlined size='medium' />
                </IconButton>
                <IconButton aria-label="numbers" size='medium' onClick={() => handleFormat('ordered')}>
                    <FormatListNumberedOutlined size='medium' />
                </IconButton>
                <Select
                    value={alignment}
                    onChange={(e) => {
                        setAlignment(e.target.value)
                        quill.format('align', false);
                        quill.format('align', e.target.value);
                    }
                    }
                    size="medium"
                    sx={selectStyles}
                    displayEmpty
                    inputProps={{ 'aria-label': 'alignment' }}
                >
                    <MenuItem value="left">
                        <IconButton aria-label="left" size="medium">
                            <FormatAlignLeftOutlined />
                        </IconButton>
                    </MenuItem>
                    <MenuItem value="center">
                        <IconButton aria-label="center" size="medium">
                            <FormatAlignCenterOutlined />
                        </IconButton>
                    </MenuItem>
                    <MenuItem value="right">
                        <IconButton aria-label="right" size="medium">
                            <FormatAlignRightOutlined />
                        </IconButton>
                    </MenuItem>
                    <MenuItem value="justify">
                        <IconButton aria-label="justify" size="medium">
                            <FormatAlignJustifyOutlined />
                        </IconButton>
                    </MenuItem>
                </Select>
            </Grid>
        </Grid>
    )
}

const selectStyles = {
    "& .MuiSelect-select": {
        padding: '2px 10px',
    },
    "& fieldset": {
        borderColor: 'transparent',
        padding: '0',
    },
}