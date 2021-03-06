import React from 'react';
import clsx from "clsx";
import {makeStyles, useTheme} from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import { useHistory } from "react-router-dom";
import {Link} from 'react-router-dom';


// Material UI styles
const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  appBar: {
    transition: theme.transitions.create([
        "margin", "width"
      ], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      })
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme
      .transitions
      .create([
        "margin", "width"
      ], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen
      })
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-end"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme
      .transitions
      .create("margin", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
    marginLeft: -drawerWidth
  },
  contentShift: {
    transition: theme
      .transitions
      .create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen
      }),
    marginLeft: 0
  },
  toolbarHead:{
      textTransform: "capitalize"
  },
  link: {
    display: 'block',
    width: '100%',
    height: '100%'
  }
}));

const Navbar = props => {
  const classes = useStyles();
  const theme = useTheme();
  const [open,setOpen] = React.useState(false);
    const history = useHistory();
// open drawer
  const handleDrawerOpen = () => {
    setOpen(true);
  };
// close drawer
  const handleDrawerClose = () => {
    setOpen(false);
  };

  return ( <> <AppBar className={clsx(classes.appBar, {
    [classes.appBarShift]: open
  })}>
    <Toolbar>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={handleDrawerOpen}
        edge="start"
        className={clsx(classes.menuButton, open && classes.hide)}>
        < MenuIcon/>
      </IconButton>
      <Typography className={classes.toolbarHead} variant="h6" noWrap>
        {history.location.pathname.split('/')[1]}
      </Typography>

    </Toolbar>
  </AppBar>

  <Drawer
    className={classes.drawer}
    variant="persistent"
    anchor="left"
    open={open}
    classes={{
    paper: classes.drawerPaper
  }}>
    <div className={classes.drawerHeader}>
      <IconButton onClick={handleDrawerClose}>
        {theme.direction === "ltr"
          ? (<ChevronLeftIcon/>)
          : (<ChevronRightIcon/>)}
      </IconButton>
    </div>
    <Divider/>
    <List>
        <ListItem button>
        <Link className={classes.link} to="/people">People</Link>
        </ListItem>
        <ListItem button>
        <Link className={classes.link} to="/favourites">Favourties</Link>
        </ListItem>
    </List>
  </Drawer>

</>);

}

export default Navbar;