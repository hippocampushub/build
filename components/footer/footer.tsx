import footerStyle from './footer.module.scss';
import {Typography} from "@material-ui/core";
import {getImageUrl} from "../../helpers/imageHelper";
import constants from "../../constants";
import {SanitizedHtml} from "../sanitizedHtml";
import menuStyle from "../menu/menu.module.scss";

export default function Footer({footer}: {
    footer: any;
    canLoadAnalytics?: boolean;
}) {
    return (<footer className={footerStyle['footer']}>
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <Typography variant='h5' className={footerStyle['footer-header']}>
                            {!!footer?.logo ?
                                <div className={footerStyle['footer-logo-container']}>
                                    <img src={getImageUrl(footer?.logo)}
                                         className={footerStyle['footer-logo']}/>
                                </div> : null
                            } <SanitizedHtml content={footer?.header ?? ''}/>
                        </Typography>
                    </div>
                </div>
                {footer?.rows?.map((row) => <div className={'row'} style={{marginTop: 20}}>
                    {row?.columns.map((column) =>
                        <SanitizedHtml content={column?.content ?? ''}
                                       className={`col ${footerStyle['footer-column']}`}/>
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
        </footer>
    );
}
