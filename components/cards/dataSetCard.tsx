import {CardContainer} from "./card";

export function DataSetCard({dataSet, onClick}) {

    const _onClick = () => {
        if (!!onClick) {
            onClick();
        }
    }

    return (<CardContainer title={dataSet.title} onClick={_onClick}>
        {dataSet.description}
    </CardContainer>);
}
