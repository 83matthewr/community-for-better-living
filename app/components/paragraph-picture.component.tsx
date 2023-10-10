import Image, { StaticImageData } from "next/image";
import { ReactNode } from "react";



export default function ParagraphPicture(
    { image, alt, position = "", imageRight = true, children }:
    { image: StaticImageData, alt: string, position?: string, imageRight?: boolean, children: ReactNode }
) {
    return (
        <div className="w-full inline-flex justify-between items-center p-8 lg:py-16">
            <div className={`${imageRight ? "lg:pr-16" : "order-last lg:pl-16"} lg:w-[50vw] lg:max-w-[650px]`}>
                {children}
            </div>
            <div className="hidden lg:block w-full max-w-[40vw] 2xl:max-w-[650px]">
                <Image
                    alt={alt}
                    src={image}
                    placeholder="blur"
                    quality={40}
                    sizes="100vw"
                    style={{
                        width: '100%',
                        height: 'auto',
                        objectFit: 'cover',
                        objectPosition: position,
                        borderRadius: '0.75rem'
                    }}
                />
            </div>
        </div>
    );
}