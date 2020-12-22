import {Block} from "../../data/data";
import {Icon} from '@material-ui/core';
import {ArrowRight} from "@material-ui/icons";

import blockStyle from './block.module.scss';

interface IBlockContainerProps<T extends Block> {
    block: T
}

export function BlockContainer<T extends Block>({block}: IBlockContainerProps<T>) {
    return (<div className={blockStyle['block']}>
        <div className='row'>
            <div className='col-10'>
                <span className={blockStyle['block-title']}>{block.title}</span>
            </div>
            <div className={`col-2 ${blockStyle['block-arrow-container']}`}>
                <Icon>
                    <ArrowRight className='fontSizeLarge'/>
                </Icon>
            </div>
        </div>
    </div>);
}
