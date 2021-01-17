import * as React from "react";
import Baloon from "./baloon";
import {makeStyles} from "@material-ui/core";

const useBaloonLabelStyles = makeStyles((theme) => ({
    label: {
        fontFamily: 'Montserrat, sans-serif',
        fontSize: 12,
        fontWeight: 600,
        marginRight: 5
    }
}));

export function ItemsCountBaloon({label, count}) {
    const baloonStyles = useBaloonLabelStyles();

    return (<div>
        <span className={baloonStyles.label}>{label}</span>
        <Baloon>
            {count}
        </Baloon>
    </div>);
}