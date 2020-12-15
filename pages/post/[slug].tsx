import {getMenuItemsProps} from "../../helpers/propsHelper";
import {getPost} from "../../helpers/apiHelper";
import {Typography} from "@material-ui/core";
import Page from "../../components/page/page";

function Post({menuItems, post}) {
    return (
        <Page menuItems={menuItems}>
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
    const menuItems = await getMenuItemsProps();
    const post = await getPost(slug);
    return {
        props: {
            post,
            menuItems
        }
    }
}


export {
    getServerSideProps
}

export default Post;
