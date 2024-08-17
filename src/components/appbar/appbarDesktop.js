import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import {
  ActionIconsContainerDesktop,
  ActionIconsContainerMobile,
  AppbarContainer,
  AppbarHeader,
  MyList,
} from "../../styles/appbar";
import { Search } from "@mui/icons-material";
import Actions from "./action";

export default function AppbarDesktop({ matches }) {


  return (
    <>
        <AppbarContainer>
          <AppbarHeader>My Bags</AppbarHeader>
          <MyList type="row">
            <ListItemText primary="Home" />
            <ListItemText primary="Categories" />
            <ListItemText primary="Products" />
            <ListItemText primary="Contact Us" />
            <ListItemButton>
              <ListItemIcon>
                <Search />
              </ListItemIcon>
            </ListItemButton>
          </MyList>
          <Actions matches={matches}/>
        </AppbarContainer>
    </>
  );
}
