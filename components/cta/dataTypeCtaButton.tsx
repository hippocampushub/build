import * as React from "react";
import {Card, CardContent, makeStyles, Typography} from "@material-ui/core";
import {ChevronRight as ArrowRight} from "@material-ui/icons";
import * as dataTypeCtaButtonStyle from './dataTypeCtaButton.module.scss';

const useDataTypeButtonStyles = makeStyles((theme) => ({
    root: {
        borderRadius: 5,
        boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.15)',
        cursor: 'pointer'
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        padding: '0 !important',
        justifyContent: 'center'
    },
    mainContent: {
        flexGrow: 1
    },
    title: {
        color: '#fff',
        fontFamily: 'Titillium Web, sans-serif',
        fontSize: '24px',
        textTransform: 'uppercase',
    }
}));


const DataTypeCtaButton = ({type, action}: {type: string, action: (type: string) => void}) => {
    const classes = useDataTypeButtonStyles();

    const _goToDataTypePage = async () => {
        if (!!action) {
            action(type);
        }
    }

    return (<Card onClick={() => _goToDataTypePage()} className={`${classes.root} ${dataTypeCtaButtonStyle['datatype-cta-button']} ${dataTypeCtaButtonStyle['button-primary']}`}>
        <CardContent className={classes.content}>
            <div className={`${classes.mainContent}`}>
                <div className={`${dataTypeCtaButtonStyle['children-container']} ${dataTypeCtaButtonStyle['cta-container']}`}>
                    <Typography variant='subtitle1' className={classes.title}>
                        {type}
                    </Typography>
                </div>
                <div className={`${dataTypeCtaButtonStyle['arrow-container']}`}>
                    <ArrowRight htmlColor={'#fff'} fontSize='large'/>
                </div>
            </div>
        </CardContent>
    </Card>);
}

export {
    DataTypeCtaButton
};