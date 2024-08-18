import { Box } from "@mui/system";
import { styled } from "@mui/material/styles";
import { Colors } from "../theme";

export const BannerContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  width: "100%",
  height: "100%",
  padding: "0px 0px",
  background: Colors.light_gray,
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "center",
  },
}));

export const BannerContent = styled(Box)(() => ({
    display: "flex",
    justifyContent: "center",
    flexDirection:"column",
    maxWidth:420,
    padding:"30px"
}))

export const BannerTitle = styled(Typography)(()=>({
  lineHeight:1.5,
  fontSize:"72px",
  marginBottom:"20px"
}))