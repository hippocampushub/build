import {AppBar, Toolbar, Link, List, ListItem, makeStyles} from "@material-ui/core";
import {getPageUrl} from "../../helpers/postHelper";
import {useRouter} from "next/router";

import menuStyle from './menu.module.scss';
import {useEffect, useState} from "react";
import {MenuItemType} from "../../data";
import {getImageUrl} from "../../helpers/imageHelper";
import {sortedArray} from "../../helpers/arrayHelper";

const getBackgroundColor = () => {
    return window?.pageYOffset > 60 ? '#393745' : 'transparent';
}

const useToolbarStyles = makeStyles((theme) => ({
    root: {
        background: 'transparent'
    }
}));

const useFixedToolbarStyles = makeStyles((theme) => ({
    root: {
        background: '#393745'
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
            borderBottom: '2px solid #ffc90c'
        },
        '&.active': {
            borderBottom: '2px solid #ffc90c'
        },
        [theme.breakpoints.down('sm')]: {
            marginRight: 0,
            paddingLeft: 0,
            paddingRight: 0,
            height: 'auto',
            display: 'block'
        }
    }
}))

const useSubMenuListItemStyles = makeStyles((theme) => ({
    root: {
        width: 'auto',
        padding: '10px 10px',
        borderBottom: '1px solid #ddd',
        '&:last-child': {
            borderBottom: 'none'
        },
        [theme.breakpoints.down('sm')]: {
            padding: '10px 0'
        }
    }
}))

const useLinkStyles = makeStyles((theme) => ({
    root: {
        color: '#fff',
        fontFamily: 'Montserrat, san-serif',
        fontWeight: 600,
        '&:hover': {
            color: '#fff',
            textDecoration: 'none'
        }
    }
}));

const useSubMenuLinkStyles = makeStyles((theme) => ({
    root: {
        display: 'block',
        color: '#fff',
        '&:hover': {
            color: '#fff',
            textDecoration: 'underline'
        }
    }
}));

const MenuItem = ({item, isSubMenuItem=false}) => {
    const router = useRouter();

    const listItemClasses = useListItemStyles();
    const linkClasses = useLinkStyles();
    const subMenuListItemClasses = useSubMenuListItemStyles();
    const subMenuLinkClasses = useSubMenuLinkStyles();

    const [expanded, setExpanded] = useState(false);


    const buildSubMenu = (item, expanded) => (
        <div className={`dropdown-menu ${menuStyle['custom-dropdown-menu']} ${expanded ? 'show' : ''}`}
             aria-labelledby="navbarDropdownMenuLink" key={`sub-menu-dropdown-${item.id}`}>
            <ul style={{padding: 0}}>
                {sortedArray(item.menuitems, 'title')?.map((subItem) => <MenuItem key={`sub-menu-item-${subItem.id}`}
                                                                                  item={subItem}
                                                                                  isSubMenuItem={true}/>)}
            </ul>
        </div>);

    const showDropDown = () => {
        setExpanded(true);
    }

    const hideDropDown = () => {
        setExpanded(false);
    }

    const toggleDropDown = () => {
        setExpanded(!expanded);
    }

    const linkUrl = getPageUrl(item);
    const isActiveLink = router.pathname === linkUrl;
    const isDropDown = item.type === MenuItemType.section && (item.menuitems?.length ?? 0) > 0;
    return (<ListItem onMouseEnter={isDropDown ? () => showDropDown() : null}
                      onMouseLeave={isDropDown ? () => hideDropDown() : null}
                      className={`${isActiveLink ? 'active' : ''} ${isDropDown ? 'dropdown' : ''}`}
                      classes={isSubMenuItem ? subMenuListItemClasses : listItemClasses}>
        <Link classes={isSubMenuItem ? subMenuLinkClasses : linkClasses} href={linkUrl}>
            {item.title}
        </Link>
        {isDropDown ?
            buildSubMenu(item, expanded) : null
        }
    </ListItem>);
}


const Menu = ({logo, menuItems, isSubMenuItem = false, fixed = false, transparent = false}) => {
    const router = useRouter();

    const [scrolled, setScrolled] = useState(false);
    const [menuExpanded, setMenuExpanded] = useState(false);

    const toolbarClasses = !fixed || scrolled ? useFixedToolbarStyles() : useToolbarStyles();
    const navClasses = useNavStyles();
    const listClasses = useListStyles();
    const listItemClasses = useListItemStyles();
    const linkClasses = useLinkStyles();

    const buildMenuItem = (item) => (<MenuItem item={item} key={`menu-item-${item.id}`}/>)

    const toggleMenu = () => {
        setMenuExpanded(!menuExpanded);
    }

    const _listenForScroll = () => {
        if (!!window) {
            window.addEventListener('scroll', _onScrollTrigger);
        }
    }

    const _onScrollTrigger = () => {
        setScrolled((window?.pageYOffset ?? 0) > 60);
    }

    useEffect(() => {
        _listenForScroll();
        return () => {
            window.removeEventListener('scroll', _onScrollTrigger);
        }
    }, []);

    const appBarClasses = `${fixed ? menuStyle['fixed-header'] : menuStyle['default-header']} ${fixed && transparent && !scrolled ? menuStyle['transparent'] : ''}`;

    return (
        <AppBar position="relative" className={appBarClasses}>
            <Toolbar>
                <nav className={`navbar navbar-dark navbar-expand-lg ${menuStyle['menu-navbar']}`}>
                    <div className='container'>
                        {logo ?
                            <Link className={`navbar-brand ${menuStyle['custom-navbar-brand']}`} href='/'>
                                <img src={getImageUrl(logo)}/>
                            </Link> : null
                        }
                        <button className={`navbar-toggler ${menuStyle['custom-navbar-toggler']}`} type="button"
                                data-toggle="collapse" data-target="#navbarNav"
                                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" onClick={() => toggleMenu()}></span>
                        </button>
                        <div className={`collapse navbar-collapse ${menuExpanded ? 'show' : ''}`} id="navbarNav">
                            <List className="navbar-nav ml-auto" classes={listClasses}>
                                {sortedArray(menuItems, 'order')?.map((item) => buildMenuItem(item))}
                            </List>
                        </div>
                    </div>
                </nav>
            </Toolbar>
        </AppBar>
    );
};

export default Menu;
