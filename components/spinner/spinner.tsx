import {CircularProgress, makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    container: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        zIndex: 10
    },
    spinnerContainer: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
    },
    spinner: {
        color: '#333',
    }
}));

const Spinner = () => {

    const styles = useStyles();

    return (<div className={styles.container}>
        <div className={styles.spinnerContainer}>
            <CircularProgress className={styles.spinner}/>
        </div>
    </div>)
}

export default Spinner;
