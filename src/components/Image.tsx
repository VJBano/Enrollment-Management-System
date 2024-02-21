import { Avatar } from "@mui/material";

type ImageProps = {
  image: string;
  width: number;
  height: number;
};
const Image = ({ image, width, height }: ImageProps) => {
  return (

    <Avatar alt="Remy Sharp" src={image} sx={{width:width, height:height}} />
    
  );
};

export default Image;
