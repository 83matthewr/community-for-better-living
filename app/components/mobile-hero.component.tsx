import Image, { StaticImageData } from "next/image";

export default function MobileHero({ image }: { image: StaticImageData }) {
    return (
        <div className="relative w-full h-screen">
            <Image
                alt="Brown Bags"
                src={image}
                placeholder="blur"
                quality={100}
                fill
                sizes="100vw"
                style={{
                  objectFit: 'cover'
                }}
            />
            <div className="relative w-full h-screen bg-gradient-to-t from-[rgba(0,0,0,0.6)] from-20% to-transparent">
                <h1 className="display-1 text-white absolute bottom-0 px-8 pb-12">Community for Better Living</h1>
            </div>
        </div>
    );
}