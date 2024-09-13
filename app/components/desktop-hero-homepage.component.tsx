import Image, { StaticImageData } from "next/image";
import partnerLogo from "../../public/assets/partner_logo.png";

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
                <div className="w-fit mt-[50px] mb-6 mx-auto text-center">
                    <h1 className="display-1 text-primary-900 mb-4">{title}</h1>
                    <p className="display-s text-neutral-900 max-w-[600px] text-center mx-auto mb-6">{subtitle}</p>
                    <div className="w-full flex flex-row justify-center">
                        <Image
                            src={partnerLogo}
                            alt="Greater Cleveland Food Bank Logo" height={48} width={155} quality={60} />
                    </div>
                </div>
                <div className="relative w-5/6 lg:w-[60vw] max-w-screen-xl mx-auto rounded">
                    <Image
                        alt={alt}
                        src={image}
                        placeholder="blur"
                        quality={50}
                        sizes="100vw"
                        style={{
                            width: '100%',
                            height: '65vh',
                            objectFit: 'cover',
                            objectPosition: position,
                            borderRadius: '0.75rem'
                        }}
                        priority
                    />
                </div>
            </div>
            <div className="hidden md:block relative w-full h-[100px] bg-gradient-to-b from-primary-100 to-white"></div>
        </div>
    );
}