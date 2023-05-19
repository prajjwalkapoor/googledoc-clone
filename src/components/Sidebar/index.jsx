import { UndoOutlined } from "@mui/icons-material";
import { Box, Grid, IconButton } from "@mui/material";
import GoogleCalender from "../../assets/calendar.png"
import GoogleKeep from "../../assets/keep.png"
import GoogleTasks from "../../assets/tasks.png"
import GoogleContacts from "../../assets/contacts.png"
import GoogleMaps from "../../assets/maps.png"



export default function Sidebar() {
    return <Box alignItems='flex-end' sx={{
        marginTop: '1rem',
    }}>
        <Grid container item xs={0.5} direction='column' alignItems='center' justifyContent='center' spacing={3}>
            <Grid item xs={1}>
                <img src={GoogleCalender} />
            </Grid>
            <Grid item xs={1}>
                <img src={GoogleKeep} />
            </Grid>
            <Grid item xs={1}>
                <img src={GoogleTasks} />
            </Grid>
            <Grid item xs={1}>
                <img src={GoogleContacts} />
            </Grid>
            <Grid item xs={1}>
                <img src={GoogleMaps} />
            </Grid>
        </Grid>

    </Box>
}