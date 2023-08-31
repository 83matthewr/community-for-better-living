import Image, { StaticImageData } from "next/image";

export default function ImageTile({ image }: { image: StaticImageData }) {
    return (
        <Image
            alt=""
            src={image}
            placeholder="blur"
            quality={100}
            style={{
                objectFit: 'cover',
                width: '100%',
                height: '100%'
            }}
        />
    )
}