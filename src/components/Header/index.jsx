import { Grid, Box, styled, Paper, Input, OutlinedInput, Link, Button, Avatar, IconButton } from '@mui/material'
import HistoryIcon from '@mui/icons-material/HistoryOutlined';
import CommentIcon from '@mui/icons-material/InsertCommentOutlined';
import VideoCallIcon from '@mui/icons-material/VideocamOutlined';
import LockIcon from '@mui/icons-material/LockOutlined';
import DocSvg from '../../assets/doc.svg'
import styles from './styles.module.scss'
import CustomInput from '../../CustomMUIComponents/CustomInput';
import NavBar from '../NavBar';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));




function Header() {
    return (
        <>
            <Box sx={{ flexGrow: 1, padding: '20px' }}>
                <Grid container direction="row" justifyContent="space-between" spacing={1} >
                    <Grid container item xs={8} spacing={1}>
                        <Grid item sx>
                            <img src={DocSvg} alt="DocSvg" width={60} height={70} style={{ paddingTop: '5px' }} />
                        </Grid>
                        <Grid container item xs={9} direction="column" justifyContent="center">
                            <CustomInput defaultValue='Untitled Doument' sx={{
                                outline: 'none',
                                width: 'fit-content',
                                padding: '5px 10px'
                            }} />
                            <NavBar />
                        </Grid>
                    </Grid>
                    <Grid container item xs={4} direction="row" alignItems="center" justifyContent='flex-end' spacing={1}>
                        <Grid item>
                            <IconButton aria-label="history" size='large'>
                                <HistoryIcon fontSize='large' />
                            </IconButton>
                        </Grid>
                        <Grid item>
                            <IconButton aria-label="comment" size='large'>
                                <CommentIcon fontSize='large' />
                            </IconButton>
                        </Grid>
                        <Grid item>
                            <IconButton aria-label="video" size='large'>
                                <VideoCallIcon fontSize='large' />
                            </IconButton>
                        </Grid>
                        <Grid item>
                            <Button variant="contained" startIcon={<LockIcon />} sx={
                                {
                                    borderRadius: '40px',
                                    fontSize: '1.2rem',
                                    padding: '10px 25px',
                                    marginRight: '10px',
                                }
                            } >
                                Share
                            </Button>
                        </Grid>
                        <Grid item>
                            <Avatar alt="Remy Sharp" src="" />
                        </Grid>
                    </Grid>
                </Grid>
            </Box >

        </>
    )
}

export default Header
