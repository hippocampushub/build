import NextApp from 'next/app'
import React, {useMemo} from 'react'
import {ThemeProvider as StyledThemeProvider} from 'styled-components'
import {ThemeProvider as MaterialThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import {DataStore} from "../dataStore";
import {Provider} from 'mobx-react'
import {LocalStorageHelper} from "../helpers/storageHelper";
import '../style.scss';
import constants from "../constants";

const theme = {
    primary: '#f2f2f2',
    ...createMuiTheme()
}


export default class App extends NextApp {
    private readonly dataStore: DataStore;

    constructor(props) {
        super(props);
        const HHFComm = LocalStorageHelper.get(constants.HHF_COMM) ?? {};
        this.dataStore = new DataStore();
        this.dataStore.hydrate({
            morphology: HHFComm?.morphology ?? null,
            modFiles: HHFComm?.mod_files ?? []
        });
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
                    <Provider dataStore={this.dataStore}>
                        <Component {...pageProps} />
                    </Provider>
                </MaterialThemeProvider>
            </StyledThemeProvider>
        )
    }
}
