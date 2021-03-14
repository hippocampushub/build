import * as React from 'react';
import {Card, CardHeader, CardContent, Typography, makeStyles} from '@material-ui/core';
import {forwardRef, PropsWithChildren, Ref} from "react";

interface ICardContainerProps extends PropsWithChildren<any> {
    title?: string;
    onClick?: () => void;
}

const useCardContainerStyles = makeStyles((theme) => ({
    cardContainer: {
        marginTop: 20
    }
}));

const useCardStyles = makeStyles((theme) => ({
    root: {
        boxShadow: '0 0 10px #33333333',
        paddingTop: 0,
        paddingBottom: 0,
        borderRadius: 5
    }
}));

const useCardContentStyles = makeStyles((theme) => ({
    root: {
        paddingLeft: 0,
        paddingRight: 0,
        paddingTop: '0px !important',
        paddingBottom: '0px !important'
    }
}));

function _CardContainer(props: ICardContainerProps, ref?: Ref<any>) {
    const cardStyles = useCardStyles();
    const cardContainerStyles = useCardContainerStyles();
    const cardContentStyles = useCardContentStyles();

    const {title, onClick, children} = props;

    const hasTitle = title && title.trim().length > 0;

    return (<div className={cardContainerStyles.cardContainer}>
            <Card classes={cardStyles} onClick={onClick}>
                {hasTitle ?
                    <CardHeader style={{paddingTop: 0}} title={title}/> : null
                }
                <CardContent classes={cardContentStyles}>
                    {children}
                </CardContent>
            </Card>
        </div>
    );
}

const CardContainer = forwardRef((props:ICardContainerProps, ref) => _CardContainer(props, ref));

export {
    CardContainer
}
