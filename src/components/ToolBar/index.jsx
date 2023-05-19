import { Grid, IconButton, MenuItem, Select } from "@mui/material";
// import AddCommentOutlinedIcon from "@mui/icons-material/AddCommentOutlined";
import {
    UndoOutlined, RedoOutlined, PrintOutlined, SpellcheckOutlined, FormatPaintOutlined,
    FormatBoldOutlined, FormatItalicOutlined, FormatUnderlinedOutlined,
    FormatColorTextOutlined, ColorizeOutlined,
    LinkOutlined, AddCommentOutlined, PhotoOutlined, FormatListBulletedOutlined, FormatListNumberedOutlined,
    FormatAlignLeftOutlined, FormatAlignCenterOutlined, FormatAlignRightOutlined, FormatAlignJustifyOutlined

} from "@mui/icons-material";
import { useState } from "react";


export default function ToolBar() {
    const [textSize, setTextSize] = useState('Normal Text');
    const [font, setFont] = useState('Arial');
    const [zoomed, setZoomed] = useState(100);
    const [alignment, setAlignment] = useState('left');
    return (
        <Grid container xs={11.9} spacing={1} direction='row' alignContent='center' sx={{
            backgroundColor: '#edf2fa',
            margin: '1rem 0',
            borderRadius: '25px'
        }}>
            <Grid container item xs={10} >
                <IconButton aria-label="undo" size='medium'>
                    <UndoOutlined size='medium' />
                </IconButton>

                <IconButton aria-label="redo" size='medium'>
                    <RedoOutlined size='medium' />
                </IconButton>
                <IconButton aria-label="print" size='medium'>
                    <PrintOutlined size='medium' />
                </IconButton>
                <IconButton aria-label="spellcheck" size='medium'>
                    <SpellcheckOutlined size='medium' />
                </IconButton>
                <IconButton aria-label="paint" size='medium'>
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
                    value={textSize}
                    defaultValue="Normal Text"
                    onChange={(e) => setTextSize(e.target.value)}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                    sx={selectStyles}
                >
                    <MenuItem value="Normal Text" selected>Normal Text</MenuItem>
                    <MenuItem value="Title">Title</MenuItem>
                    <MenuItem value="Subtitle">Subtitle</MenuItem>
                    <MenuItem value="Heading 1">Heading 1</MenuItem>
                    <MenuItem value="Heading 2">Heading 2</MenuItem>
                    <MenuItem value="Heading 3">Heading 3</MenuItem>
                    <MenuItem value="Options">Options</MenuItem>

                </Select>
                <Select
                    value={font}
                    defaultValue="Arial"
                    onChange={(e) => setFont(e.target.value)}
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
                <IconButton aria-label="bold" size='medium'>
                    <FormatBoldOutlined size='medium' />
                </IconButton>
                <IconButton aria-label="italic" size='medium'>
                    <FormatItalicOutlined size='medium' />
                </IconButton>
                <IconButton aria-label="underline" size='medium'>
                    <FormatUnderlinedOutlined size='medium' />
                </IconButton>
                <IconButton aria-label="textcolor" size='medium'>
                    <FormatColorTextOutlined size='medium' />
                </IconButton>
                <IconButton aria-label="colorize" size='medium'>
                    <ColorizeOutlined size='medium' />
                </IconButton>
                <IconButton aria-label="link" size='medium'>
                    <LinkOutlined size='medium' />
                </IconButton>
                <IconButton aria-label="comment" size='medium'>
                    <AddCommentOutlined size='medium' />
                </IconButton>
                <IconButton aria-label="photo" size='medium'>
                    <PhotoOutlined size='medium' />
                </IconButton>
                <IconButton aria-label="bullets" size='medium'>
                    <FormatListBulletedOutlined size='medium' />
                </IconButton>
                <IconButton aria-label="numbers" size='medium'>
                    <FormatListNumberedOutlined size='medium' />
                </IconButton>
                <Select
                    value={alignment}
                    onChange={(e) => setAlignment(e.target.value)}
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