import {DialogContainer} from "./dialogContainer";
import {SanitizedHtml} from "../sanitizedHtml";

export function ImageCreditsDialog({
    open,
    content,
    onClose
}: {
    open?: boolean;
    content?: string;
    onClose: () => void;
}) {

    return (<DialogContainer
                open={open}
                maxWidth={'lg'}
                title={'Credits'}
                onClose={onClose}>
        {!!content ?
            <SanitizedHtml content={content} style={{paddingBottom: 20}}/> : null
        }
    </DialogContainer>);
}