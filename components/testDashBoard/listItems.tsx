import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { Chat } from '@mui/icons-material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
import ArticleIcon from '@mui/icons-material/Article';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import SettingsIcon from '@mui/icons-material/Settings';

export const mainListItems = (
  <React.Fragment>
    <ListItemButton>
      <ListItemIcon>
        < RecordVoiceOverIcon/>
      </ListItemIcon>
      <ListItemText primary="募集" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <ArticleIcon />
      </ListItemIcon>
      <ListItemText primary="投稿" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AccountBoxIcon />
      </ListItemIcon>
      <ListItemText primary="プロフィール" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <SettingsIcon />
      </ListItemIcon>
      <ListItemText primary="設定" />
    </ListItemButton>
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      メッセージ
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        < AccountCircleIcon/>
      </ListItemIcon>
      <ListItemText primary="hello this is Jon ..." />
    </ListItemButton> 
    {/*
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItemButton> */}
  </React.Fragment>
);
