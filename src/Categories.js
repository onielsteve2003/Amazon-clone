import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@mui/material';
import Drawer from '@mui/material';
import { Button } from '@mui/material';
import List from '@mui/material';
import Divider from '@mui/material';
import ListItem from '@mui/material';
import ListItemIcon from '@mui/material';
import ListItemText from '@mui/material';
// import InboxIcon from '@material-ui/icons/MoveToInbox';
// import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import "./Categories.css"

// import { useStateValue } from '../context_api/StateProvider';
import { AccountCircle } from '@mui/icons-material';

const useStyles = makeStyles({
  list: {
    width: 300,
  },
  fullList: {
    width: 'auto',
  },
});

const categories = [
  'Electronics',
  "Computers",
  "Art & Crafts",
  "Baby",
  "Toiletries",
  "Personal Care",
  "Men's Fashion",
  "Women's Fashion",
  "Sports",
  "Health"
]


// Temporary Drawer
export default function Categories({user}) {
  // console.log(user)
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  
  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}>

      <div className="category-head">
           <AccountCircle className="user-icon"/> 
          <ListItemText primary={"Hi "+ (user ? user.email: "Guest") } />
      </div>
      
      <List>
          <ListItem>
            <ListItemText primary="Shop By Category"  className="grey-text"/>
          </ListItem>

        {['Amazon Music', 'Kindle E-readers & Books', 'App Store for Android'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
            {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
            <ListItemIcon> <ChevronRightIcon/> </ListItemIcon>
          </ListItem>
        ))}

      </List>

      <Divider />

      <List>
        {categories.map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
            {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
            <ListItemIcon> <ChevronRightIcon/> </ListItemIcon>
          </ListItem>
        ))}
      </List>

    </div>
  );

  return (
    <div className="menu__div">
      {/* {['left', 'right', 'top', 'bottom'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))} */}
      
        <React.Fragment key={"left"}>
          <Button onClick={toggleDrawer("left", true)}><MenuIcon htmlColor="white"  className="header__menuIcon"/> </Button>
          <Drawer anchor={"left"} open={state["left"]} onClose={toggleDrawer("left", false)}>
            {list("left")}
          </Drawer>
        </React.Fragment>
        
    </div>
  );
}
