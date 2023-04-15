import Image from "next/image"

type ImageProps = {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    onClick?: React.MouseEventHandler<HTMLImageElement>;
  };
  
export  const IconNavbar: React.FC<ImageProps> = ({ src, alt, width = 40, height =40, onClick}) => {
    return (
      <Image
        src={src}
        loader={() => src}
        unoptimized={true}
        alt={alt}
        className="w-9 my-auto px-2 cursor-pointer"
        width={width}
        height={height}
        onClick={(e) => onClick?.(e)}
      />
    );
  };
  
