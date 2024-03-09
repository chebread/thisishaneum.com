import NextImage from 'next/image';

export default function MDXImage({
  src,
  alt,
}: React.DetailedHTMLProps<
  React.ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
> & {
  src: string;
  alt: string;
}) {
  let widthFromSrc: number, heightFromSrc: number;
  const url = new URL(src, 'https://thisishaneum.com');
  const widthParam = url.searchParams.get('w') || url.searchParams.get('width');
  const heightParam =
    url.searchParams.get('h') || url.searchParams.get('height');
  if (widthParam) {
    widthFromSrc = parseInt(widthParam);
  }
  if (heightParam) {
    heightFromSrc = parseInt(heightParam);
  }

  const imageProps = {
    src,
    alt,
    height: 0,
    width: 0,
  };

  return (
    <NextImage
      priority
      {...imageProps}
      sizes="100vw"
      // className="post-image"
      style={{
        width: widthFromSrc ? widthFromSrc : heightFromSrc ? 'auto' : '100%', // width 설정시 설정된 값이 들어가며, height 만 설정시 auto로 값이 설정됨, 아무 것도 설정되지 않으면 img tag와 똑같이 동작함
        height: heightFromSrc ? heightFromSrc : 'auto', // height 설정시 설정된 값이 들어가며, 아무 것도 설정되지 않으면 img tag와 똑같이 동작함
        borderRadius: '1rem',
      }}
    />
  );
}
