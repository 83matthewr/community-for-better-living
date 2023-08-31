import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/cfbl-logo.svg";

const menuLinks = [
    {
        text: 'About Us',
        path: '/about'
    },
    {
        text: 'Food Bank',
        path: '/foodbank'
    },
    {
        text: 'Events',
        path: '/events'
    },
    {
        text: 'Worship',
        path: '/worship'
    },
    {
        text: 'Other Services',
        path: '/other'
    },
    {
        text: 'Support Us',
        path: '/support'
    },
    {
        text: 'Contact Us',
        path: '/contact'
    },
    {
        text: 'Facebook',
        path: '/facebook'
    },
    {
        text: 'Privacy Policy',
        path: '/privacy_policy'
    }
];

export default function Footer() {
    return (
        <div className="relative w-full h-[270px] px-8 pt-4 pb-8 bg-secondary-100 justify-between items-start inline-flex">
            <div className="flex-col justify-start items-start gap-2 inline-flex">
                <Image src={Logo} alt="CBL Logo" height={32} width={70} className="mb-1" />
                <div className="text-neutral-700 font-body text-xs font-semibold leading-[18px]">The Community for Better Living</div>
                <div className="text-neutral-700 font-body text-xs font-normal leading-[18px]">7074 Columbia Rd</div>
                <div className="text-neutral-700 font-body text-xs font-normal leading-[18px]">Olmsted Twnshp, OH 44138</div>
                <div className="text-neutral-700 font-body text-xs font-normal leading-[18px]">(440) 541-7829</div>
                <div className="text-neutral-700 font-body text-xs font-normal leading-[18px]">info@communityforbetterliving.org</div>
            </div>
            <div className="flex-col justify-start items-end gap-1 inline-flex">
                {menuLinks.map((link) => {
                    return (
                        <Link href={link.path}>
                            <p className="text-neutral-700 font-body text-sm font-semibold leading-[21px]">
                                {link.text}
                            </p>
                        </Link>
                    )
                })}
            </div>
        </div>
    );
}