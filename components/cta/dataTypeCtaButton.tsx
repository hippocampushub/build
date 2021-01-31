import {Card, CardContent, makeStyles, Typography} from "@material-ui/core";
import {ChevronRight as ArrowRight} from "@material-ui/icons";
import * as React from "react";

const useDataTypeButtonStyles = makeStyles((theme) => ({
    root: {
        borderRadius: 5,
        background: '#333',
        boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.15)',
        cursor: 'pointer'
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        padding: '0 !important',
        minHeight: 100
    },
    mainContent: {
        paddingLeft: 16,
        paddingRight: 16,
        flexGrow: 1
    },
    title: {
        color: '#fff',
        fontFamily: 'Metropolis, sans-serif',
        fontSize: '24px',
        textTransform: 'uppercase',
    },
    arrowBox: {
        background: '#222',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    }
}));


const DataTypeCtaButton = ({type, action}: {type: string, action: (type: string) => void}) => {
    const classes = useDataTypeButtonStyles();

    const _goToDataTypePage = async () => {
        if (!!action) {
            action(type);
        }
    }

    return (<Card onClick={() => _goToDataTypePage()} className={classes.root}>
        <CardContent className={classes.content}>
            <div className={`row ${classes.mainContent}`}>
                <div className='col-10'>
                    <Typography variant='subtitle1' className={classes.title}>
                        {type}
                    </Typography>
                </div>
                <div className={`col-2 ${classes.arrowBox}`}>
                    <ArrowRight htmlColor={'#fff'} fontSize='large'/>
                </div>
            </div>
        </CardContent>
    </Card>);
}

export default DataTypeCtaButton;