import { Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { BannerContainer, BannerContent, BannerDescription, BannerImage, BannerTitle } from "../../styles/banner";

export default function Banner() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      <BannerContainer>
        <BannerImage src="/images/banner/banner.png"/>
        <BannerContent>
          <Typography variant="h6">Huge Collection</Typography>
          <BannerTitle variant="h2">
            New Bags
          </BannerTitle>
        <BannerDescription variant="subtitle">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam a tempore
        expedita provident omnis animi odio reprehenderit dolor eius aliquam.
        </BannerDescription>
        </BannerContent>
      </BannerContainer>
    </>
  );
}
