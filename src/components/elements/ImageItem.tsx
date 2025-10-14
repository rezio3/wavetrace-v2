type ImageItemProps = {
  src: string;
  alt?: string;
};
const ImageItem = ({ src, alt }: ImageItemProps) => {
  return <img src={src} alt={alt} />;
};

export default ImageItem;
