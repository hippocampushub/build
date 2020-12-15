import * as React from 'react';
import Menu from "../menu/menu";

function Header({menuItems}) {
    return (
        <div className='row'>
            <div className='col-12'>
                <div className='container'>
                    <Menu menuItems={menuItems}/>
                </div>
            </div>
        </div>
    )
}

export default Header;
