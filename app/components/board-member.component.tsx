import Image, { StaticImageData } from "next/image";

export default function BoardMember({ name, position, image }: { name: string, position?: string, image: StaticImageData }) {
    return (
        <div className="flex flex-row w-full gap-4 bg-primary-300 rounded p-2 shadow">
            <div className="w-[60px] h-[60px] rounded-full">
                <Image
                    alt="Board Member Profile Image"
                    src={image}
                    placeholder="blur"
                    quality={100}
                    style={{
                        objectFit: 'cover',
                        width: '100%',
                        height: '100%',
                        borderRadius: '999px'
                    }}
                />
            </div>
            {position ?
                (
                    <div>
                        <h4 className="display-4 text-primary-900 pt-1 mb-1">{name}</h4>
                        <p className="body-1r">{position}</p>
                    </div>
                )
                :
                (
                    <div>
                        <h4 className="display-4 text-primary-900 pt-[18px] mb-1">{name}</h4>
                    </div>
                )
            }
        </div>
    )
}