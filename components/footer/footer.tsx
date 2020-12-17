import footerStyle from './footer.module.scss';
import {Typography} from "@material-ui/core";
import {getImageUrl} from "../../helpers/imageHelper";

export default function Footer({footer}) {
    return (<footer className={footerStyle.footer}>
        <div className='container'>
            <div className='row'>
                <div className='col-12'>
                    {!!footer?.logo ?
                        <img className={footerStyle['footer-image']} src={getImageUrl(footer.logo)}/> : null
                    }
                    <Typography variant='h5' className={footerStyle['footer-header']}>
                        {footer.header}
                    </Typography>
                </div>
            </div>
        </div>
    </footer>
);
}
