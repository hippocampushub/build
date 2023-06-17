import NextApp from 'next/app'
import React, {useMemo} from 'react'
import {connect, Provider} from 'react-redux';
import {ThemeProvider as StyledThemeProvider} from 'styled-components'
import {ThemeProvider as MaterialThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import store from '../store';
import '../style.scss';

const theme = {
    primary: '#f2f2f2',
    ...createMuiTheme()
}


export default class App extends NextApp {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const jssStyles = document.querySelector('#jss-server-side')
        if (jssStyles && jssStyles.parentNode) {
            jssStyles.parentNode.removeChild(jssStyles);
        }
    }



    render() {
        const {Component, pageProps} = this.props
        return (
            <StyledThemeProvider theme={theme}>
                <MaterialThemeProvider theme={theme}>
                    <Provider store={store}>
                        <Component {...pageProps} />
                    </Provider>
                </MaterialThemeProvider>
            </StyledThemeProvider>
        )
    }
}

