import React from 'react'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import {makeStyles} from '@material-ui/core/styles';
import {ListItem, ListItemText, Typography} from '@material-ui/core';
import PatientVideo from "../../Components/PatientVideos/PatientVideo";

import SearchReport from "../../Components/SearchReport/SearchReport";
import PatientInfo from "../../Components/PatientInfo/PatientInfo";
import ActivitySummary from "../../Components/PatientActivitySummary/ActivitySummary";
import CurrentWorkout from "../../Components/PatientWorkout/CurrentWorkout";


const useStyles = makeStyles((theme) => ({
    profileRoot: {
        minHeight: "95vw",
        flexGrow: 1,
        paddingTop: 100,
        background: theme.palette.background.default,
        overflow: "hidden"
    },
    paperInfo: {
        padding: theme.spacing(),
        textAlign: 'center',
        color: theme.palette.secondary.main,
        height: 600,
        width: 350,
        marginLeft: 10
    },
    paperVideos: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.secondary.main,
        height: 750,
        width: 350,
        marginBottom: 139
    },
    paperProgress: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.secondary.main,
        height: 630,
        width: 400
    },
    paperSummary: {
        padding: 5,
        marginTop: 10,
        marginLeft: 10,
        width: 355,
        height: 200
    },
    paperWorkout: {
      padding: 5,
      marginBottom: 10,
      width: 420,
      height: 100
    },
}));

const Profile = () => {
    const classes = useStyles();
    //TODO change to reflect desired patient
    const [selectedPatient, setSelectedPatient] = React.useState(1);

    return (
        <div className={classes.profileRoot}>
            <Grid container spacing={3} direction="row">
                <Grid item md={3}>
                    <Paper className={classes.paperInfo} elevation={5}>
                        <Typography>Patient Info</Typography>
                        <PatientInfo selectedPatient={selectedPatient} setSelectedPatient={setSelectedPatient}/>
                    </Paper>
                    <Paper className={classes.paperSummary} elevation={5}>
                        <ActivitySummary selectedPatient={selectedPatient} setSelectedPatient={setSelectedPatient}/>
                    </Paper>
                </Grid>
                <Grid item md={3}>
                    <Paper className={classes.paperVideos} elevation={5}>
                        <Typography>Patient Videos</Typography>
                        <PatientVideo selectedPatient={selectedPatient} setSelectedPatient={setSelectedPatient}/>
                    </Paper>
                </Grid>
                <Grid item md={3}>
                    <Paper className={classes.paperWorkout} elevation={5}>
                        <CurrentWorkout selectedPatient={selectedPatient} setSelectedPatient={setSelectedPatient}/>
                    </Paper>
                    <Paper className={classes.paperProgress} elevation={5}>
                        <Typography>Progress Log</Typography>
                        <SearchReport selectedPatient={selectedPatient} setSelectedPatient={setSelectedPatient}/>
                    </Paper>
                </Grid>

            </Grid>

        </div>
    )
}

export default Profile
