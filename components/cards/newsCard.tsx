import {Card, CardContent, makeStyles, Typography} from "@material-ui/core";
import * as React from "react";
import {CardContainer} from "./card";

const useNewsStyles = makeStyles((theme) => ({
    cardStyle: {
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        fontFamily: 'Nunito, sans-family',
        fontWeight: 600
    },
    content: {
        paddingLeft: 16,
        paddingRight: 16
    }

}));

export function NewsCard({news}) {
    const newsClasses = useNewsStyles();
    return (<CardContainer title={news.title}>
        <div className={newsClasses.content}>
            <div className='row'>
                <div className='col-12'>
                    {news?.content ?? ''}
                </div>
            </div>
        </div>
    </CardContainer>);
}
