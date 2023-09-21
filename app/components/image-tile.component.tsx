import Image, { StaticImageData } from "next/image";

export default function ImageTile(
    { image, title, position = "", value, dialogClick }:
        { image: StaticImageData, title: string, position?: string, value: string, dialogClick: (value: string) => void }
) {

    const tileClick = () => {
        dialogClick(value);
    }

    return (
        <div onClick={() => tileClick()} className="h-[180px] md:h-[250px] lg:h-[300px] 2xl:h-[390px] w-full shadow cursor-pointer">
            <Image
                alt=""
                src={image}
                placeholder="blur"
                quality={100}
                style={{
                    objectFit: 'cover',
                    width: '100%',
                    height: '100%',
                    borderRadius: '5px',
                    objectPosition: position
                }}
            />
            <div className="relative top-[-180px] md:top-[-250px] lg:top-[-300px] 2xl:top-[-390px] w-full h-full bg-gradient-to-t from-[rgba(0,0,0,0.6)] to-transparent rounded-lg">
                <h4 className="display-4 lg:display-3 text-white text-center w-full absolute bottom-4 xl:bottom-6">{title}</h4>
            </div>
        </div>
    )
}