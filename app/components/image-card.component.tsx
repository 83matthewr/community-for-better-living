import Image, { StaticImageData } from "next/image";
import { ReactElement, ReactNode } from "react";

export default function ImageCard({ image, height, alt, children }: {image: StaticImageData, height: string, alt: string, children: ReactNode}) {
    return (
        <div className="w-full bg-secondary-100 rounded-md shadow-md">
            <div className="w-full">
                <Image
                    alt={alt}
                    src={image}
                    sizes="100vw"
                    quality={40}
                    style={{
                        width: '100%',
                        height: height,
                        borderRadius: '0.375rem 0.375rem 0 0',
                        objectFit: 'cover'
                    }}
                />
            </div>
            <div className="p-4">
                {children}
            </div>
        </div>
    );
}