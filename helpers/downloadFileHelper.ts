import * as JSZip from 'jszip';

const convertFileToBlob = (fileContent: string, type: string) => {
    const textFileAsBlob = new Blob([fileContent], {type});
    return textFileAsBlob;
}

const blobToBase64: any = (blob: Blob) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = function () {
            const dataUrl = reader.result;
            if (!!dataUrl && typeof dataUrl === 'string') {
                const base64 = dataUrl.split(',')[1];
                resolve(base64);
            }
        };
        reader.readAsDataURL(blob);
    });
}

const downloadFile = (fileContent: string|Blob, fileName: string, convert = true, type?: string) => {
    const content = convert && !!type && typeof fileContent === 'string' ? convertFileToBlob(fileContent, type) : fileContent;
    const splittedFileName = fileName.split('.');
    const ext = splittedFileName.length === 2 ? splittedFileName[splittedFileName.length - 1] : '';
    const newFileName = splittedFileName.length > 1 ? `${splittedFileName[splittedFileName.length - 2]}_mod.${ext}` : fileName;
    const downloadLink = document.createElement("a");
    downloadLink.download = newFileName;
    downloadLink.innerHTML = "Download File";
    if (window.webkitURL != null) {
        // Chrome allows the link to be clicked
        // without actually adding it to the DOM.
        downloadLink.href = window.webkitURL.createObjectURL(content);
    } else {
        // Firefox requires the link to be added to the DOM
        // before it can be clicked.
        downloadLink.href = window.URL.createObjectURL(content);
        downloadLink.onclick = (event) => {
            //document.body.removeChild(event.target.current);
            document.body.removeChild<any>(event.target)
        };
        downloadLink.style.display = "none";
        document.body.appendChild(downloadLink);
    }

    downloadLink.click();
}


const downloadAll = async (allFiles: any[]) => new Promise<void>(async (resolve, reject) => {
    try {
        const zip = new JSZip();
        for (const file of allFiles) {
            const base64File = await blobToBase64(file.data);
            zip.file(file.name, base64File, {base64: true});
        }
        zip.generateAsync({type: "blob"}).then((content: Blob) => {
            downloadFile(content, 'archive.zip', false);
            resolve();
        });
    } catch (error) {
        console.log('@@@@@@@@error on download');
        console.log(error);
    }
});

export {
    convertFileToBlob,
    downloadFile,
    downloadAll
}
