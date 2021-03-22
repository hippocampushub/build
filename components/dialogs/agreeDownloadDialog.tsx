import {DialogContainer} from "./dialogContainer";
import * as agreeDownloadDialogStyle from './agreeDownloadDialog.module.scss';

export function AgreeDownloadDialog({open, pageUrl, acceptDownloadCallback, cancelDownloadCallback}) {

    const actions = [{
        label: 'Cancel',
        onClick: cancelDownloadCallback
    }, {
        label: 'Agree',
        onClick: acceptDownloadCallback
    }]

    return (<DialogContainer
                className={agreeDownloadDialogStyle['agree-download-dialog']}
                open={open}
                actions={actions}
                maxWidth={'lg'}
                onClose={cancelDownloadCallback}>
        {!!pageUrl ?
            <iframe src={pageUrl} className={agreeDownloadDialogStyle['content_iframe']}/> : null
        }
    </DialogContainer>);
}