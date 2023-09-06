import Image, { StaticImageData } from "next/image";

export default function DesktopHeroSingle(
    { image, alt, title, subtitle, position = "" }:
        {
            image: StaticImageData,
            alt: string,
            title: string,
            subtitle: string,
            position?: string
        }) {
    return (
        <div>
            <div className="hidden md:block relative w-full h-screen bg-primary-100 py-16">
                <div className="w-fit mt-[72px] mb-10 mx-auto text-center">
                    <h1 className="display-1 text-primary-900 mb-4">{title}</h1>
                    <p className="display-s text-neutral-900">{subtitle}</p>
                </div>
                <div className="relative w-5/6 lg:w-[60vw] max-w-screen-xl mx-auto">
                    <Image
                        alt={alt}
                        src={image}
                        placeholder="blur"
                        quality={100}
                        sizes="100vw"
                        style={{
                            width: '100%',
                            height: '65vh',
                            objectFit: 'cover',
                            objectPosition: position,
                            borderRadius: '0.75rem'
                        }}
                    />
                </div>
            </div>
            <div className="hidden md:block relative w-full h-[100px] bg-gradient-to-b from-primary-100 to-white"></div>
        </div>
    );
}