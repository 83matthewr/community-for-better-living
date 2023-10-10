import Image, { StaticImageData } from "next/image";

export default function MobileHero(
    { image, alt, title }:
        {
            image: StaticImageData,
            alt: string,
            title: string
        }) {
    return (
        <div className="relative w-full h-screen md:hidden">
            <Image
                alt={alt}
                src={image}
                placeholder="blur"
                quality={50}
                fill
                sizes="100vw"
                style={{
                    objectFit: 'cover'
                }}
                priority
            />
            <div className="relative w-full h-screen bg-gradient-to-t from-[rgba(0,0,0,0.6)] from-20% to-transparent">
                <h1 className="display-1 text-white absolute bottom-0 px-8 pb-12">{title}</h1>
            </div>
        </div>
    );
}