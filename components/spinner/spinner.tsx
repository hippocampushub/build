import {CircularProgress, makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    container: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
    }
}));

const Spinner = () => {

    const styles = useStyles();

    return (<div className={styles.container}>
        <CircularProgress/>
    </div>)
}

export default Spinner;
