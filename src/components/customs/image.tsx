import { Image } from '@imagekit/react';

export function ImageKit({
  src,
  alt,
  className,
  w,
  h,
}: {
  src: string;
  alt: string;
  className?: string;
  w?: number;
  h?: number;
}) {
  return (
    <Image
      urlEndpoint={import.meta.env.VITE_IMAGEKIT_URL_ENPOINT}
      src={src}
      loading='lazy'
      width={w}
      height={h}
      alt={alt}
      className={className}
      transformation={[
        {
          width: w,
          height: h,
        },
      ]}
    />
  );
}
