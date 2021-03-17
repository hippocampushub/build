import sanitizeHtml from 'sanitize-html';
import {DefaultComponentProps} from "@material-ui/core/OverridableComponent";

interface SanitizedHtmlProps extends DefaultComponentProps<any> {
    content?: string;
}

export function SanitizedHtml({content, style}: SanitizedHtmlProps) {
    return (<div style={style ?? {}} dangerouslySetInnerHTML={{__html: sanitizeHtml(content ?? '')}}>
    </div>);
}