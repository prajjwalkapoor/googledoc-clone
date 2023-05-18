import { Link, Menu, MenuItem } from '@mui/material'
import styles from './styles.module.scss'
import { useState } from 'react'


const menuItems = [
    {
        name: 'File',
        items: [
            'New',
            'Open',
            'Save',
            'Save as',
            'Print',
        ]
    },
    {
        name: 'Edit',
        items: [
            'Undo',
            'Redo',
            'Cut',
            'Copy',
            'Paste',
            'Delete',
        ]
    },
    {
        name: 'View',
        items: [
            'Zoom in',
            'Zoom out',
            'Full screen',
        ]
    },
    {
        name: 'Insert',
        items: [
            'Image',
            'Table',
            'Link',
            'Comment',
        ]
    },
    {
        name: 'Format',
        items: [
            'Bold',
            'Italic',
            'Underline',
            'Strikethrough',
            'Superscript',
            'Subscript',
        ]
    },
    {
        name: 'Tools',
        items: [
            'Spelling and grammar',
            'Word count',
        ]
    },
    {
        name: 'Help',
        items: [
            'Help',
            'About',
        ]
    },
]


const NavBar = () => {
    const [activeMenu, setActiveMenu] = useState('')
    return (
        <nav className={styles.nav}>
            {
                menuItems.map((item, index) => (
                    <>
                        <Link key={index + item.name} href="#" className={styles.navItem} id={item.name}
                            onClick={() => setActiveMenu(activeMenu === item.name ? '' : item.name)}
                        >{item.name}</Link>
                        <Menu
                            id={item.name}
                            anchorEl={document.getElementById(item.name)}
                            open={activeMenu === item.name}
                            onClose={() => setActiveMenu('')}
                            MenuListProps={{
                                'aria-labelledby': item.name,
                            }}
                            sx={{
                                '& .MuiMenu-paper': {
                                    minWidth: '8rem',
                                }
                            }}

                        >
                            {
                                item.items.map((subItem, subIndex) => (
                                    <MenuItem key={subIndex + subItem} onClick={() => setActiveMenu('')}>{subItem}</MenuItem>
                                ))
                            }

                        </Menu>
                    </>
                ))
            }
        </nav>

    )
}

export default NavBar