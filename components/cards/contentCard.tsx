import * as React from "react";
import {Card, CardContent, makeStyles, Typography} from "@material-ui/core";
import * as contentCard from './contentCard.module.scss';
import {useRouter} from "next/router";
import {SanitizedHtml} from "../sanitizedHtml";
import {CustomButton} from "../buttons/buttons";

const useContentCardStyles = makeStyles((theme) => ({
    root: {
        borderRadius: 5,
        boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.15)'
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '0 20px'
    },
    mainContent: {
        flexGrow: 1
    },
    title: {
        color: '#fff',
        fontFamily: 'Titillium Web, sans-serif',
        fontSize: '24px',
        textTransform: 'uppercase',
    }
}));


const ContentCard = ({title, content, actions, variant = 'dark'}: {
    title: string;
    content: string;
    actions?: any[];
    variant?: 'dark' | 'light';
}) => {
    const classes = useContentCardStyles();
    const router = useRouter();

    const textColor = variant === 'dark' ? '#fff' : '#333';

    const _goToLink = (action: any) => {
        const url = action?.url ?? null;
        if (!!url && url?.trim()?.length > 0) {
            const target = action?.target ?? null;
            if (!!target && target?.trim()?.length > 0 && target === '_blank') {
                window.open(url);
            } else {
                router?.push(url);
            }
        }
    }

    return (<Card
        className={`${classes.root} ${contentCard['content-card-button']} ${contentCard[variant]}`}>
        <CardContent className={classes.content}>
            <div className='row'>
                <div className='col-9'>
                    <div className='row'>
                        <div className='col-12'>
                            <Typography style={{color: textColor, fontSize: 24, fontFamily: 'Titillium Web'}}>
                                {title}
                            </Typography>
                        </div>
                    </div>
                    <div className='row' style={{marginTop: 10}}>
                        <div className='col-12'>
                            <SanitizedHtml content={content}
                                           style={{color: textColor, fontSize: 16, fontFamily: 'Titillium Web'}}/>
                        </div>
                    </div>
                </div>
                <div className='col-3'>
                    {(actions ?? []).map((item) => <div className='row' style={{marginTop: 10}}>
                        <div className='col-12'>
                            <CustomButton style={{fontSize: 14}} onClick={() => _goToLink(item)}>
                                {item?.label}
                            </CustomButton>
                        </div>
                    </div>)}
                </div>
            </div>
        </CardContent>
    </Card>);
}

export {
    ContentCard
};