import PageContainer from "../page/pageContainer";
import {Typography} from "@material-ui/core";
import {getGlobalInitialProps} from "../../helpers/propsHelper";
import {getPage, getPost} from "../../helpers/dataHelper";

function PostContent({config, menuItems, post}) {
    return (<PageContainer
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

async function getStaticProps({params}) {
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

export default PostContent;
