import * as React from 'react'
import {CloudDownload as IconDownload} from "@material-ui/icons";

export function FileLink({file}) {
    return (<div className='file-link' onClick={() => window.open(file.url)}>
        <span><IconDownload/> {file.value}</span>
    </div>)
}
