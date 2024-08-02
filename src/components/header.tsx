import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Link, Drawer, List, ListItem, ListItemText, Container } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

interface MenuItem {
  text: string;
  link: string;
}

const Header: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const menuItems: MenuItem[] = [
    { text: 'Applications', link: '#' },
    { text: 'Innovation', link: '#' },
    { text: 'Company', link: '#' },
    { text: 'Careers', link: '#' },
  ];

  const drawer = (
    <div>
      <IconButton onClick={handleDrawerToggle} className="flex justify-end">
        <CloseIcon />
      </IconButton>
      <List>
        {menuItems.map((item, index) => (
          <ListItem button key={index} component="a" href={item.link}>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <AppBar position="static" className="!bg-white shadow-none !text-black">
      <Container maxWidth="lg">
        <Toolbar className="justify-between">
          <div className="flex items-center space-x-4">
            <img src="/log.png" alt="Logo" className="h-8" />
          </div>
          <div className="hidden md:flex space-x-8">
            {menuItems.map((item, index) => (
              <Link key={index} href={item.link} color="inherit" underline="none" className="font-bold">
                {item.text}
              </Link>
            ))}
          </div>
          <div onClick={handleDrawerToggle} className="block md:hidden cursor-pointer">
            <MenuIcon />
          </div>
        </Toolbar>
      </Container>
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={handleDrawerToggle}
        classes={{ paper: 'w-64' }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
};

export default Header;
