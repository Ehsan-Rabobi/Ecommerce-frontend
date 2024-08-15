import { Divider, ListItemButton, ListItemIcon } from "@mui/material";
import { MyList } from "../../styles/appbar";
import { Favorite, Person, ShoppingCart } from "@mui/icons-material";

export default function Actions() {
  return (
    <MyList type="row">
      <ListItemButton
        sx={{
          justifyContent: "center",
        }}
      >
        <ListItemIcon
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <ShoppingCart />
        </ListItemIcon>
      </ListItemButton>
      <Divider orientation="vertical" flexItem />
      <ListItemButton
        sx={{
          justifyContent: "center",
        }}
      >
        <ListItemIcon
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Favorite />
        </ListItemIcon>
      </ListItemButton>
      <Divider orientation="vertical" flexItem />

      <ListItemButton
        sx={{
          justifyContent: "center",
        }}
      >
        <ListItemIcon
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Person />
        </ListItemIcon>
      </ListItemButton>
      <Divider orientation="vertical" flexItem />
    </MyList>
  );
}
