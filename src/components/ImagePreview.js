import Image from "next/image";
import Link from "next/link";
export default function ImagePreview({ thumbnailUrl, nasaId }) {
  return (
    <div>
      <Link as={`/photo/${nasaId}`} href="/photo/[id]">
        <a href='/photo/[id]'>
          <Image width={250} height={125} src={thumbnailUrl} />
          <div className="nasaId">Nasa ID: {nasaId}</div>
        </a>
      </Link>
    </div>
  );
}