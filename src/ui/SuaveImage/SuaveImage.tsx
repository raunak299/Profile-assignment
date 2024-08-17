import Image, { ImageProps } from "next/image";
import { useEffect, useState } from "react";
import styles from "./SuaveImage.module.css";

export type SuaveImageProps = ImageProps & {
  shimmerEffect?: boolean;
};

export default function SuaveImage(props: SuaveImageProps) {
  const { src, alt, className, shimmerEffect = false } = props;
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  const imgClassName = `${styles.image} ${
    !isLoaded && shimmerEffect ? styles.shimmerEffect : ""
  } ${className || ""}`;

  return (
    <Image
      {...props}
      src={src}
      alt={alt}
      className={imgClassName}
      onLoad={() => setIsLoaded(true)}
    />
  );
}
