import {AppBar, Toolbar, Link, List, ListItem, makeStyles} from "@material-ui/core";
import {getPostUrl} from "../../helpers/postHelper";
import {useRouter} from "next/router";

import menuStyle from './menu.module.scss';
import {useState} from "react";

const useToolbarStyles = makeStyles((theme) => ({
    root: {
        background: '#333'
    }
}));

const useNavStyles = makeStyles((theme) => ({
    root: {
        padding: '0 1rem'
    }
}));

const useListStyles = makeStyles((theme) => ({
    root: {
        padding: 0
    }
}));

const useListItemStyles = makeStyles((theme) => ({
    root: {
        width: 'auto',
        height: 64,
        marginRight: 5,
        '&:hover': {
            borderBottom: '2px solid #fff'
        },
        '&.active': {
            borderBottom: '2px solid #fff'
        },
        [theme.breakpoints.down('sm')]: {
            marginRight: 0,
            paddingLeft: 0,
            paddingRight: 0
        }
    }
}))

const useLinkStyles = makeStyles((theme) => ({
    root: {
        color: '#fff',
        '&:hover': {
            color: '#fff',
            textDecoration: 'none'
        }
    }
}));


const Menu = ({menuItems}) => {

    const router = useRouter();

    const [menuExpanded, setMenuExpanded] = useState(false);

    const toolbarClasses = useToolbarStyles();
    const navClasses = useNavStyles();
    const listClasses = useListStyles();
    const listItemClasses = useListItemStyles();
    const linkClasses = useLinkStyles();

    const buildMenuItem = (item) => {
        const linkUrl = getPostUrl(item);
        const isActiveLink = router.pathname === linkUrl;
        return (<ListItem key={`menu-item-${item.id}`} className={isActiveLink ? 'active': ''} classes={listItemClasses}>
            <Link classes={linkClasses} href={linkUrl}>
                {item.title}
            </Link>
        </ListItem>);
    };

    const toggleMenu = () => {
        setMenuExpanded(!menuExpanded);
    }

    return (
        <AppBar position="relative">
            <Toolbar classes={toolbarClasses}>
                <nav className={`navbar navbar-dark navbar-expand-lg ${menuStyle['menu-navbar']}`}>
                    <button className={`navbar-toggler ${menuStyle['custom-navbar-toggler']}`} type="button" data-toggle="collapse" data-target="#navbarNav"
                            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" onClick={() => toggleMenu()}></span>
                    </button>
                    <div className={`collapse navbar-collapse ${menuExpanded ? 'show' : ''}`} id="navbarNav">
                        <List className="navbar-nav" classes={listClasses}>
                            {menuItems.map((item) => buildMenuItem(item))}
                        </List>
                    </div>
                </nav>
            </Toolbar>
        </AppBar>
    );
};

export default Menu;
