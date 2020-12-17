import {getConfig, getPost} from "../../helpers/apiHelper";
import {Typography} from "@material-ui/core";
import Page from "../../components/page/page";
import {getGlobalInitialProps} from "../../helpers/propsHelper";

function Post({menuItems, config,  post}) {
    return (
        <Page
            config={config}
            menuItems={menuItems}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <Typography variant="h3">
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
        </Page>);
}

async function getServerSideProps({params}) {
    const {slug} = params;
    const globalConfig = await getGlobalInitialProps();
    const post = await getPost(slug);
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
