import {Box, Typography} from "@material-ui/core";

export function TabPanel({children, value, index, ...other}) {

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
           {children}
        </div>
    );
}
