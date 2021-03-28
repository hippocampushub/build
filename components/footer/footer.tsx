import footerStyle from './footer.module.scss';
import {Typography} from "@material-ui/core";
import {getImageUrl} from "../../helpers/imageHelper";
import constants from "../../constants";
import {SanitizedHtml} from "../sanitizedHtml";

export default function Footer({footer, canLoadAnalytics}: {
    footer: any;
    canLoadAnalytics?: boolean;
}) {
    return (<footer className={footerStyle.footer}>
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <Typography variant='h5' className={footerStyle['footer-header']}>
                            <SanitizedHtml content={footer?.header ?? ''}/>
                        </Typography>
                    </div>
                </div>
                {footer?.rows.map((row) => <div className={'row'} style={{marginTop: 20}}>
                    {row?.columns.map((column) =>
                        <SanitizedHtml content={column?.content ?? ''} className={`col ${footerStyle['footer-column']}`}/>
                    )}
                </div>)}
                <div className='row' style={{marginTop: 20}}>
                    <div className='col-12'>
                        <Typography variant='h5' className={footerStyle['footer-copyright']}>
                            {footer?.copyright ?? ''}
                        </Typography>
                    </div>
                </div>
            </div>
            {canLoadAnalytics ?
                <div>
                    <script async src="https://www.googletagmanager.com/gtag/js?id=G-SGZ83Y6E8H"></script>
                    <script async src={`${constants.BASE_URL}/assets/js/analytics.js`}></script>
                </div> : null
            }
        </footer>
    );
}
