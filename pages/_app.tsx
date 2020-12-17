import NextApp from 'next/app'
import React, {useMemo} from 'react'
import {ThemeProvider as StyledThemeProvider} from 'styled-components'
import {ThemeProvider as MaterialThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import {initializeApollo} from "../helpers/graphqlHelper";
import {ApolloProvider} from "@apollo/client";

const theme = {
    primary: '#f2f2f2',
    ...createMuiTheme()
}


export default class App extends NextApp {

    componentDidMount() {
        const jssStyles = document.querySelector('#jss-server-side')
        if (jssStyles && jssStyles.parentNode)
            jssStyles.parentNode.removeChild(jssStyles)
    }

    render() {
        const {Component, pageProps} = this.props
        return (
            <StyledThemeProvider theme={theme}>
                <MaterialThemeProvider theme={theme}>
                    <Component {...pageProps} />
                </MaterialThemeProvider>
            </StyledThemeProvider>
        )
    }
}
