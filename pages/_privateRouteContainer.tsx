import * as React from 'react';
import {useEffect} from "react";
import {connect} from 'react-redux';
import {getAuthToken} from "../helpers/authHelper";
import {login, verifyToken} from "../actions/auth.actions";
import {DefaultComponentProps} from "@material-ui/core/OverridableComponent";
import {LoginForm} from "../components/forms/loginForm";
import {getConfig} from "../helpers/dataHelper";

interface IPrivateRouteContainer extends DefaultComponentProps<any> {
    login: (username, password) => void;
    verifyToken: (token) => void;
}

const _PrivateRouteContainer = ({children, isLogged, login, verifyToken}: IPrivateRouteContainer) => {

    const [config, setConfig] = React.useState<any>();

    const _setup = async () => {
        try {
            const _config = await getConfig();
            setConfig(_config);
        } catch (error) {

        }
    }

    const _login = (username: string, password: string) => {
        if (!!username && !!password) {
            login(username, password);
        }
    }

    const _verifyToken = () => {
        const _authToken = getAuthToken();
        if (!!_authToken && _authToken.trim().length > 0) {
            verifyToken(_authToken);
        }
    }

    useEffect(() => {
        _setup()
        _verifyToken();
    }, []);

    return (<div>
        {isLogged ?
            {children} : <LoginForm login={_login} logo={config?.logo ?? null}/>
        }
    </div>)

}

const mapStateToProps = (state, props) => ({
    isLogged: state.auth.isLogged ?? false
});

const mapDispatchToProps = (dispatch: any) => ({
    login: async (username: string, password: string) => await dispatch(login(username, password)),
    verifyToken: async (token: string) => await dispatch(verifyToken(token))
});

export default connect(mapStateToProps, mapDispatchToProps)(_PrivateRouteContainer);