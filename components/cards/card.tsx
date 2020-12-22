import * as React from 'react';
import {Card, CardHeader, CardContent, Typography, makeStyles} from '@material-ui/core';
import {DefaultComponentProps} from "@material-ui/core/OverridableComponent";

interface ICardContainerProps extends DefaultComponentProps<any> {
    title: string;
    onClick: () => void;
}

const useCardContainerStyles = makeStyles((theme) => ({
    cardContainer: {
        marginTop: 20
    }
}));

const useCardContentStyles = makeStyles((theme) => ({
    root: {
        maxHeight: 70,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        '&:before': {
            content: '...',
            position: 'absolute',
            bottom: 0,
            right: 0,
        }
    }
}));

export function CardContainer({title, onClick, children}: ICardContainerProps) {
    const cardContainerStyles = useCardContainerStyles();

    const cardContentStyles = useCardContentStyles();

    console.log('@@@@@title', title);

    return (<div className={cardContainerStyles.cardContainer}>
        <Card onClick={onClick}>
            <CardHeader title={title}/>
            <CardContent classes={cardContentStyles}>
                {children}
            </CardContent>
        </Card>
    </div>);
}
