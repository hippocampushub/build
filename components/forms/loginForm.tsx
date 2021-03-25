import * as React from "react";
import {TextField} from "@material-ui/core";
import {CustomButton} from "../buttons/buttons";

import * as loginStyle from './login.module.scss';
import {getImageUrl} from "../../helpers/imageHelper";
import {makeStyles} from "@material-ui/styles";

const useTextFieldStyles = makeStyles((theme) => ({
    root: {
        color: '#fff'
    },
    label: {
        color: '#fff'
    },
    input: {
        color: '#fff'
    }
}))

export function LoginForm({login, logo}: {
    login?: (username: string, password: string) => void;
    logo?: string | null;
}) {

    const [username, setUsername] = React.useState<any>('');
    const [password, setPassword] = React.useState<any>('');

    const classes = useTextFieldStyles();

    const _doLogin = () => {

    }


    return (<div className={loginStyle['login-form-container']}>
        <form className={'form'}>
            {logo ?
                <img src={getImageUrl(logo)}/> : null
            }
            <div className='row'>
                <div className='col-12'>
                    <div className='input-group'>
                        <TextField
                            InputLabelProps={{
                                className: classes.label,
                                classes: {
                                    focused: classes.label
                                }
                            }}
                            InputProps={{
                                className: classes.input,
                                classes: {
                                    focused: classes.label
                                }
                            }}
                            fullWidth={true}
                            variant={'outlined'}
                            label={'Username'}
                            name={'username'}
                            value={username}
                            onChange={(event) => setUsername(event.target.value)}>

                        </TextField>
                    </div>
                </div>
            </div>
            <div className='row' style={{marginTop: 20}}>
                <div className='col-12'>
                    <div className='input-group'>
                        <TextField
                            InputLabelProps={{
                                className: classes.label,
                                classes: {
                                    focused: classes.label
                                }
                            }}
                            InputProps={{
                                className: classes.input,
                                classes: {
                                    focused: classes.label
                                }
                            }}
                            fullWidth={true}
                            variant={'outlined'}
                            label={'Password'}
                            name={'password'}
                            value={password}
                            onChange={(event) => setPassword(event.target.value) }>

                        </TextField>
                    </div>
                </div>
            </div>
            <div className='row' style={{position: 'absolute', bottom: 20, left: 0, right: 0}}>
                <div className={'col-12'} onClick={() => _doLogin()}>
                    <CustomButton style={{margin: '0 auto'}}>
                        Login
                    </CustomButton>
                </div>
            </div>
        </form>
    </div>);
}