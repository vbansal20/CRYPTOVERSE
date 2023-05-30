import {makeStyles} from 'tss-react/mui';
import "@fontsource/plus-jakarta-sans";
import { borders } from '@mui/system';

export const contentStyle = makeStyles()((theme) => ({
    // mainApp:{
    //     display: 'flex',
    //     flexDirection: "column",
    //     borderRadius: 3,
    //     backgroundColor: "#F9F9F9",
    //     padding: "10px",
    //     [theme.breakpoints.down('xs')]: {
    //         flexDirection: 'column-reverse !important',
    //     },
    //     fontFamily: "Verdana",
    // },
    boldHeading: {
        color: "#000000",
        fontFamily: "Plus Jakarta Sans",
        fontWeight: 800,
    },
    flexDisplay:{
        justifyContent: "space-between",
        display: "flex",
    },
    padding20:{
        padding:"20px",
    },
    linkStyles:{
        color: "#000000",
        textDecoration: "none",
    },
    coinNameText:{
        fontWeight: 600,
        fontFamily: "Plus Jakarta Sans",
        fontSize: "15px",
    },
    appbarColor: {
        color: "#0061C2",
        background: "#FFFFFF",
        borderBottom: '2px solid #EAEEF2',
    },
    fontOnly:{
        fontFamily: "Plus Jakarta Sans",
        fontWeight: 600,
    },
    // '& .MuiTypography-root' : {
    //     color: "#000000",
    // },
}));