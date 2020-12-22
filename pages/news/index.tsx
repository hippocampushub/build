import * as React from "react";
import PageContainer from "../../components/page/pageContainer";
import {defaultProps, getGlobalInitialProps} from "../../helpers/propsHelper";
import {getNewsList} from "../../helpers/dataHelper";
import {NewsCard} from "../../components/cards/newsCard";

const NewsList = () => {
    const [newsList, setNewsList] = React.useState<any[]>([]);

    const setup = async () => {
        try {
            const news = await getNewsList();
            setNewsList(news);
        } catch (error) {

        }
    }

    React.useEffect(() => {
        setup();
    }, []);

    return (<PageContainer>
            <div className='container'>
                {(newsList ?? []).map((news) => (
                    <div className='row' key={`news-${news.id}`}>
                        <div className='col-12'>
                            <NewsCard news={news}/>
                        </div>
                    </div>))}
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
export default NewsList;
