import { useEffect, useState } from "react";
import Image from "next/image";

interface OfferImageProps {
  src: string;
  alt: string;
}

// eslint-disable-next-line max-len
const FALLBACK_SVG = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjU2IiBoZWlnaHQ9IjI1NiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0xMjggODBMMTc2IDEyOEgxMjhIMTI4VjgwWiIgZmlsbD0iIzlDQTNBRiIvPgo8L3N2Zz4K";

const OfferImage = ({ src, alt }: OfferImageProps) => {
  const [imgSrc, setImgSrc] = useState(src);

  useEffect(() => {
    setImgSrc(src);
  }, [src]);

  return (
    <Image
      src={imgSrc}
      alt={alt}
      width={256}
      height={256}
      className="w-64 h-64 object-cover rounded-lg shadow-xl"
      onError={() => setImgSrc(FALLBACK_SVG)}
    />
  );
};

export default OfferImage;
