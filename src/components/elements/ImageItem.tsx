type ImageItemProps = {
  src: string;
  alt?: string;
  width?: string | number;
  height?: string | number;
};
const ImageItem = ({
  src,
  alt,
  width = "auto",
  height = "auto",
}: ImageItemProps) => {
  return <img src={src} alt={alt} width={width} height={height} />;
};

export default ImageItem;
