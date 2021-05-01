import {PropsWithChildren} from "react";

export interface IDataSetCardProps extends PropsWithChildren<any> {
    dataSet: any;
    selectedForDownload: boolean;
    openImageLightbox: (url: string) => void;
    closeImageLightbox: () => void;
    toggleSelectedForDownload: (id: string, value: boolean) => void;
    onClick: () => void;
    openMorphologyViewer: ({modelName, modelUrl, detailPage}: {
        modelName: string;
        modelUrl: string;
        detailPage?: string;
    }) => void;
    askForDownload?: ({url: string}) => void;
}
