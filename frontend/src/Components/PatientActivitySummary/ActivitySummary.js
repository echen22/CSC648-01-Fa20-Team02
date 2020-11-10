import React from 'react'
import axios from "axios";
import List from "@material-ui/core/List";
import {Divider, ListItem, ListItemText, ListSubheader} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        //   border: '2px solid #000',a
        outline: 'none',
    },
    sticky: {
        backgroundColor: 'white'
    }
}));

const ActivitySummary = ({selectedPatient, setSelectedPatient}) => {
    const classes = useStyles();
    const [activity, setActivity] = React.useState([]);

    const fetchSummaryInfo = () => {
        axios.get('http://localhost:8080/api/pt/summary', {
            params: {
                patient: selectedPatient,
                pt: 1
            }
        }).then((response) => {

            setActivity(response.data.map((a) => {
                console.log(response.data)
                return a;
            }))
        })
            .catch(console.log)
    }

    React.useEffect(() => {
        //will load patients activities when the page loads
        if (selectedPatient != '')
            fetchSummaryInfo();
    }, [selectedPatient]);


    return (
        <List className={classes.paper} aria-label="activity-list"
              style={{maxHeight: 300}}>
            <ListItem className={classes.modal}><u><b>Activity : Minutes</b></u></ListItem>
            {activity.map((a) => (
                <div>
                    <ListItem>{a.type_activity + " : " + a.duration}</ListItem>
                </div>
            ))}
        </List>
    )
}

export default ActivitySummary