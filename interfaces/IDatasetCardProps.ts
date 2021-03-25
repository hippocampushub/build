import {PropsWithChildren} from "react";

export interface IDataSetCardProps extends PropsWithChildren<any> {
    dataSet: any;
    selectedForDownload: boolean;
    openImageLightbox: (url: string) => void;
    closeImageLightbox: () => void;
    toggleSelectedForDownload: (id: string, value: boolean) => void;
    onClick: () => void;
    openMorphologyViewer: ({modelName, modelUrl}: {
        modelName: string;
        modelUrl: string;
    }) => void;
    askForDownload?: ({url: string}) => void;
}
