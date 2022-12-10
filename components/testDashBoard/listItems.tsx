import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import RecordVoiceOverIcon from "@mui/icons-material/RecordVoiceOver";
import ArticleIcon from "@mui/icons-material/Article";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import { useRouter } from "next/router";
import axios from "axios";
import { NEXT_URL } from "../../config";
import { toast } from "react-toastify";

export const ListItems: React.FC = () => {
  const router = useRouter();
  // const {isLoggedIn, setIsLoogedIn} = React.useState(false) 

  const logout = async () => {
    console.log("pushed");
    const res = await axios.post(`${NEXT_URL}/api/logout`);
    if (res.status === 200) router.push("/");
  };

  return (
    <>
      <ListItemButton>
        <ListItemIcon>
          <RecordVoiceOverIcon />
        </ListItemIcon>
        <ListItemText primary="募集" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <ArticleIcon />
        </ListItemIcon>
        <ListItemText primary="投稿" />
      </ListItemButton>
      <ListItemButton onClick={() => router.push("/users/mypage")}>
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
      <ListItemButton onClick={() => logout()}>
        <ListItemIcon>
          <LogoutIcon />
        </ListItemIcon>
        <ListItemText primary="ログアウト" />
      </ListItemButton>
    </>
  );
};

// export const secondaryListItems = (
//   <React.Fragment>
//     <ListSubheader component="div" inset>
//       メッセージ
//     </ListSubheader>
//     <ListItemButton>
//       <ListItemIcon>
//         < AccountCircleIcon/>
//       </ListItemIcon>
//       <ListItemText primary="hello this is Jon ..." />
//     </ListItemButton>
//   </React.Fragment>
// );
