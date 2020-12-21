import {CardContainer} from "./card";

export function DataSetCard({dataSet}) {

    const _onClick = () => {

    }

    return (<CardContainer title={dataSet.title} onClick={_onClick}>
        {dataSet.description}
    </CardContainer>);
}
