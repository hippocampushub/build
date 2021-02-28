const downloadFile = (url) => {
    const link = document.createElement('a');
    link.href = url;
    link.target = '_blank';
    link.download = '';
    link.click();
    link.remove();
}

export {
    downloadFile
}