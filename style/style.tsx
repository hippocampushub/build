import {makeStyles} from "@material-ui/core";

const useIconButtonStyles = makeStyles((theme) => ({
    root: {
        outline: 'none',
        '&:hover, &:focus': {
            outline: 'none'
        }
    }
}));

export {
    useIconButtonStyles
}
