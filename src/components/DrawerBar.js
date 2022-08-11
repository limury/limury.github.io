import React from 'react';
import { AppBar, Grid, Box, Divider, List, ListItem, ListItemButton, Typography, ListItemText, IconButton, Button, Drawer, Toolbar } from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CV from '../img/Lorenzo_Bernasconi_08-08-2022_Resume.pdf';

export default function DrawerBar(props) {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const navItems = [ 'CV', 'Experience', 'Contact' ]
  const drawerWidth = 240;

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Lorenzo Bernasconi
      </Typography>
      <Divider />
      <List>
          {/* Experience button */}
          <Link to='/extended-cv' style={{textDecoration: 'inherit', color:'inherit'}}>
            <ListItem disablePadding>
              <ListItemButton sx={{ textAlign: 'center' }}>
                <ListItemText primary={'Extended CV'} />
              </ListItemButton>
            </ListItem>
          </Link>
          {/* CV button */}
          <Link to={CV} target="_blank" download style={{textDecoration: 'inherit', color:'inherit'}}>
            <ListItem disablePadding>
              <ListItemButton sx={{ textAlign: 'center' }}>
                <ListItemText primary={'CV'} />
              </ListItemButton>
            </ListItem>
          </Link>
          {/* Contact button */}
          <Link to='/contact' style={{textDecoration: 'inherit', color:'inherit'}}>
            <ListItem disablePadding>
              <ListItemButton sx={{ textAlign: 'center' }}>
                <ListItemText primary={'Contact'} />
              </ListItemButton>
            </ListItem>
          </Link>
      </List>
    </Box>
  );
  // const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          
          <Box sx={{flexDirection:'row', flexGrow: 1, display: { xs: 'none', sm: 'flex' }, alignItems:'center', justifyContent: 'center' }}>
            <Grid container sx={{flexGrow: 1}}>
              <Grid item xs={3}>
                <Typography
                  variant="h6"
                  component="div"
                  sx={{display: { xs: 'none', sm: 'block' } }}
                >
                  Lorenzo Bernasconi
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Box sx={{ display: { xs: 'none', sm: 'flex' }, flexDirection: 'row', justifyContent:'center' }}>
                    <Link to='/extended-cv' style={{textDecoration: 'inherit', color:'inherit'}}>
                      <Button sx={{ color: 'text.primary' }}>
                        Extended CV
                      </Button>
                    </Link>
                    <Link to={CV} target="_blank" download style={{textDecoration: 'inherit', color:'inherit'}}>
                      <Button sx={{ color: 'text.primary' }}>
                        CV
                      </Button>
                    </Link>
                    <Link to='/contact' style={{textDecoration: 'inherit', color:'inherit'}}>
                      <Button sx={{ color: 'text.primary' }}>
                        Contact
                      </Button>
                    </Link>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}