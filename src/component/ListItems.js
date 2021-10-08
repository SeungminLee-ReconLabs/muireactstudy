import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import AssignmentIcon from '@mui/icons-material/Assignment';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import { AllInbox, Dashboard, DeliveryDining, ManageSearch, Pageview, PrecisionManufacturing, Public, VideoCameraBack } from '@mui/icons-material';

export function NestedList() {
  const [open, setOpen] = React.useState(true);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      
      <ListItemButton>
        <ListItemIcon><Dashboard /></ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItemButton>
      
      <ListItemButton onClick={handleClick}>
        <ListItemIcon><ManageSearch /></ListItemIcon>
        <ListItemText primary="Product management" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      
      {/* 하위에있는건 이런식인가? */}
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon><AllInbox /></ListItemIcon>
            <ListItemText primary="All produts" />
          </ListItemButton>

          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon><VideoCameraBack /></ListItemIcon>
            <ListItemText primary="Videos" />
          </ListItemButton>

          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon><PrecisionManufacturing /></ListItemIcon>
            <ListItemText primary="Modeling" />
          </ListItemButton>

          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon><svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M18 4L14 8H17C17 11.31 14.31 14 11 14C9.99 14 9.03 13.75 8.2 13.3L6.74 14.76C7.97 15.54 9.43 16 11 16C15.42 16 19 12.42 19 8H22L18 4ZM5 8C5 4.69 7.69 2 11 2C12.01 2 12.97 2.25 13.8 2.7L15.26 1.24C14.03 0.46 12.57 0 11 0C6.58 0 3 3.58 3 8H0L4 12L8 8H5Z" fill="black" fill-opacity="0.87"/></svg></ListItemIcon>
            <ListItemText primary="Post processing" />
          </ListItemButton>

          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon><Pageview /></ListItemIcon>
            <ListItemText primary="Under review" />
          </ListItemButton>

          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon><DeliveryDining /></ListItemIcon>
            <ListItemText primary="Delivered" />
          </ListItemButton>

          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon><Public /></ListItemIcon>
            <ListItemText primary="Published" />
          </ListItemButton>


          
        </List>
      </Collapse>
    </List>
  );
}


export const secondaryListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Notices" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Users" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Company" />
    </ListItem>
  </div>
);