import {getConfig, getPage} from "../../helpers/dataHelper";
import {Typography} from "@material-ui/core";
import PageContainer from "../../components/page/pageContainer";
import {getGlobalInitialProps} from "../../helpers/propsHelper";
import {useEffect, useState} from "react";

function Post({props}) {

    const [post, setPost] = useState<any>();

    const setup = () => {

    };

    useEffect(() => {

    }, []);

    return (
        <PageContainer>
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
    return {
        props: {params}
    }
}


export {
    getServerSideProps
}

export default Post;
