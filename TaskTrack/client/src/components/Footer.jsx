// Footer.js

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MailIcon from '@mui/icons-material/Mail';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const useStyles = makeStyles((theme) => ({
    footer: {
        backgroundColor: '#333',
        color: '#fff',
        padding: theme.spacing(4),
        marginTop: 'auto',
        width: "100%",
    },
    icon: {
        marginRight: theme.spacing(1),
    },
    }));

    const Footer = () => {
    const classes = useStyles();

    return (
        <footer className={classes.footer}>
        <div className="container mx-auto flex flex-col md:flex-row md:justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0 md:mr-10">
            <h2 className="text-2xl font-bold">TaskTrack</h2>
            <p className="mt-2"> The premier platform for task managers and teams to seamlessly connect, collaborate, and elevate productivity.</p>
            </div>

            <div className="flex flex-col md:flex-row items-center">
            <div className="flex items-center mb-2 md:mb-0 md:mr-4">
                <MailIcon className={classes.icon} />
                <span>info@tasktrack.com</span>
            </div>
            <div className="flex items-center mb-2 md:mb-0 md:mr-4">
                <PhoneIcon className={classes.icon} />
                <span>(123) 456-7890</span>
            </div>
            <div className="flex items-center">
                <LocationOnIcon className={classes.icon} />
                <span>Melbourne, Australia</span>
            </div>
            </div>
        </div>
        </footer>
    );
    };

    export default Footer;