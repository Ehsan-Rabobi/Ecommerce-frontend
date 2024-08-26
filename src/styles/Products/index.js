import { styled } from "@mui/system";
import { Colors } from "../theme";
import { IconButton } from "@mui/material";


export const Product = styled(Box)(({theme})=>({
    display:"flex" ,
    justifyContent:"center",
    alignItems:"center",
    flexDirection:"column",
    [theme.breakpoints.up('md')]:{
        position:"relative"
    }
}))

export const ProductImage = styled('img')(({src,theme})=>({
    src:`url(${src})`,
    width:"100%",
    background:Colors.light_gray,
    padding:"10px",
    [theme.breakpoints.down('md')]:{
        width:"80%",
        padding:"24px"
    }
}))

export const ProductActionButton = styled(IconButton)(()=>({
    background:Colors.white,
    margin:4
}))


export const ProductFavButton = styled(ProductActionButton)(({isfav , theme})=>({
    color:isfav ? Colors.primary : Colors.light,
    [theme.breakpoints.up('md')]:{
        position:"absolute",
        right:0,
        top:0
    }
}))