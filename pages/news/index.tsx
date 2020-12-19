import * as React from "react";
import PageContainer from "../../components/page/pageContainer";
import {Card, CardContent, makeStyles, Typography} from "@material-ui/core";
import {defaultProps, getGlobalInitialProps} from "../../helpers/propsHelper";
import {getNewsList} from "../../helpers/dataHelper";

const useNewsStyles = makeStyles((theme) => ({
    cardStyle: {
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        fontFamily: 'Nunito, sans-family',
        fontWeight: 600
    }
}));

const News = ({news}) => {
    const newsClasses = useNewsStyles();
    return (<div className='row' key={`news-${news.id}`}>
        <div className='col-12'>
            <Card className={newsClasses.cardStyle}>
                <CardContent>
                    <Typography className={newsClasses.title} gutterBottom>
                        {news?.title ?? ''}
                    </Typography>
                    <div className='row'>
                        <div className='col-12'>
                            {news?.content ?? ''}
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    </div>);
}


const NewsList = ({menuItems, config,  newsList}) => {
    return (<PageContainer
            config={config}
            menuItems={menuItems}>
            <div className='container'>
                {(newsList ?? []).map((news) => <News news={news}/>)}
            </div>
        </PageContainer>
    );
}

async function getServerSideProps() {
    try {
        const globalConfig = await getGlobalInitialProps();
        const newsList = await getNewsList();
        return {
            props: {
                config: globalConfig?.config ?? {},
                menuItems: globalConfig?.menuItems ?? {},
                newsList: newsList ?? []
            }
        }
    } catch (error) {
        return {
            props: {...defaultProps}
        }
    }

}

export {
    getServerSideProps
}

export default NewsList;
