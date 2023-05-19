import { Box, Grid, Paper } from "@mui/material"
import Header from "./components/Header"
import ToolBar from "./components/ToolBar"
import Sidebar from "./components/Sidebar"

function DocMain() {
    return (
        <>
            <Box sx={{ padding: '10px' }}>
                <Header />
                <Grid container xs={12}>
                    <Grid container item xs={11.65} justifyContent='center'>
                        <ToolBar />
                        <Grid container item xs={11.65} justifyContent='center' sx={{
                            backgroundColor: '#F9FBFD',
                            borderRadius: '10px',
                            maxHeight: '80vh',
                            overflowY: 'scroll',
                        }}>
                            <Grid item xs={6}>
                                <Paper sx={{
                                    height: '100vh',
                                    marginTop: '1rem',
                                    border: '1px solid #E0E0E0',
                                }}></Paper>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs>
                        <Sidebar />
                    </Grid>

                </Grid>
            </Box>
        </>
    )
}

export default DocMain
