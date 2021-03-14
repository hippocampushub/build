import {Typography} from "@material-ui/core";
import PageContainer from "../../components/page/pageContainer";
import ContactForm from "../../components/forms/contactForm";

function PageContact({page = {}}: {page: any}) {
    return (
        <PageContainer>
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <div className='row'>
                            <div className='col-12'>
                                <Typography variant="h3">
                                    {page.title}
                                </Typography>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                {page.content}
                            </div>
                        </div>
                    </div>
                    <div className='col-6'>
                        <ContactForm/>
                    </div>
                </div>
            </div>
        </PageContainer>);
}
export default PageContact;
