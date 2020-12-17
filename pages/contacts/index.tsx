import {getConfig, getPage, sendMessage} from "../../helpers/apiHelper";
import {Button, makeStyles, TextField, Typography} from "@material-ui/core";
import {Alert} from "@material-ui/lab";
import PageContainer from "../../components/page/pageContainer";
import {getGlobalInitialProps} from "../../helpers/propsHelper";
import {useEffect, useState} from "react";
import {checkIfEmailValid, checkIfNotEmpty} from "../../helpers/dataHelper";
import Spinner from "../../components/spinner/spinner";

const useFormStyles = makeStyles((theme) => ({
    header: {
        fontFamily: 'Nunito, sans-serif',
        fontSize: 24,
        fontWeight: 600
    }
}));

const useFormRowStyles = makeStyles((theme) => ({
    row: {
        marginBottom: 20
    }
}));

const useSubmitButtonStyles = makeStyles((theme) => ({
    root: {
        width: '100%'
    }
}));

const useAlertStyles = makeStyles((theme) => ({
    root: {
        width: '100%'
    }
}));

function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const [error, setError] = useState<any>({
       name: true,
       email: true,
       message: true
    });
    const [actionDisabled, setActionDisabled] = useState(true);

    const _sendMessage = async () => {
        setLoading(true);
        try {
            await sendMessage(name, email, message);
            setSuccess(true);
        } catch (error) {

        }
        setLoading(false);
    }

    const _validateData = () => {
        let _actionDisabled = false;
        let isValidName = checkIfNotEmpty(name);
        let isValidEmail = checkIfEmailValid(email);
        let isValidMessage = checkIfNotEmpty(message);

        const _error = {...error};
        _error.name = !isValidName;
        _error.email = !isValidEmail;
        _error.message = !isValidMessage;
        _actionDisabled = !(isValidName && isValidEmail && isValidMessage);
        setError(_error);
        setActionDisabled(_actionDisabled);
    }

    const formClasses = useFormStyles();
    const formRowClasses = useFormRowStyles();
    const submitButtonClasses = useSubmitButtonStyles();
    const alertClasses = useAlertStyles();

    useEffect(() => {
        _validateData();
    }, [name, email, message]);

    return (<div style={{position: 'relative'}}>
        <form className='form'>
            <Typography className={formClasses.header} gutterBottom>
                Contattaci
            </Typography>
            <div className={`input-group ${formRowClasses.row}`}>
                <TextField
                    name='name'
                    fullWidth={true}
                    label={'Il tuo nome'}
                    variant={'outlined'}
                    defaultValue={name}
                    onChange={(event) => setName(event.target.value)}
                    helperText={'Campo richiesto'}
                />
            </div>
            <div className={`input-group ${formRowClasses.row}`}>
                <TextField
                    name='email'
                    fullWidth={true}
                    label={'La tua email'}
                    variant={'outlined'}
                    onChange={(event) => setEmail(event.target.value)}
                    helperText={'Inserisci un indirizzo email valido'}
                />
            </div>
            <div className={`input-group ${formRowClasses.row}`}>
                <TextField
                    name='message'
                    fullWidth={true}
                    label={'Il tuo messaggio'}
                    variant={'outlined'}
                    helperText={'Campo richiesto'}
                    multiline={true}
                    rowsMax={4}
                    onChange={(event) => setMessage(event.target.value)}
                />
            </div>
            <div className={`input-group ${formRowClasses.row}`}>
                <Button classes={submitButtonClasses}
                    variant="outlined"
                    disabled={actionDisabled}
                    onClick={() => _sendMessage()}>
                    INVIA
                </Button>
            </div>
            <div className={`input-group ${formRowClasses.row}`}>
                {success ?
                    <Alert classes={alertClasses} severity="success">Il messaggio è stato inviato correttamente</Alert> : null
                }
            </div>
        </form>
        {loading ?
            <Spinner/> : null
        }
    </div>);
}

function PageContact({menuItems, config, post}) {
    return (
        <PageContainer
            config={config}
            menuItems={menuItems}>
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <div className='row'>
                            <div className='col-12'>
                                <Typography variant="h3">
                                    {post.title}
                                </Typography>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                {post.content}
                            </div>
                        </div>
                    </div>
                    <div className='col-6'>
                        <ContactForm/>
                    </div>
                </div>
            </div>
        </PageContainer>);
}

async function getServerSideProps({params}) {
    const slug = 'contacts';
    const globalConfig = await getGlobalInitialProps();
    const post = await getPage(slug);
    return {
        props: {
            post,
            menuItems: globalConfig?.menuItems ?? [],
            config: globalConfig?.config ?? {}
        }
    }
}


export {
    getServerSideProps
}

export default PageContact;
