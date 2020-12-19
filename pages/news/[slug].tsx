import {getConfig, getPage} from "../../helpers/dataHelper";
import {Typography} from "@material-ui/core";
import PageContainer from "../../components/page/pageContainer";
import {getGlobalInitialProps} from "../../helpers/propsHelper";

function Post({menuItems, config,  post}) {
    return (
        <PageContainer
            config={config}
            menuItems={menuItems}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <Typography variant="h4">
                            {post.title}
                        </Typography>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        {post.content}
                    </div>
                </div>
            </div>
        </PageContainer>);
}

async function getServerSideProps({params}) {
    const {slug} = params;
    const globalConfig = await getGlobalInitialProps();
    const post = await getPage(slug);
    return {
        props: {
            post,
            menuItems: globalConfig?.menuItems ?? [],
            config: globalConfig?.config ?? {}
        }
    }
}


export {
    getServerSideProps
}

export default Post;
