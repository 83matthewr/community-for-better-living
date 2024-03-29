import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/cfbl-logo.svg";
import partnerLogo from "../../public/assets/partner_logo.png";

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
        text: 'Support Us',
        path: '/support'
    },
    {
        text: 'Contact Us',
        path: '/contact'
    },
    {
        text: 'Facebook',
        path: 'https://www.facebook.com/BetterLivingCLE'
    }
];

export default function Footer() {
    return (
        <div className="relative w-full h-fit px-8 md:px-14 pt-4 md:pt-8 pb-12 bg-secondary-100 justify-between items-start inline-flex shadow-[0_-4px_15px_0px_rgba(0,0,0,0.1)]">
            <div className="flex-col xs:flex-row inline-flex justify-between w-full md:max-w-[464px]">
                <div className="flex-col justify-start items-start gap-2 inline-flex">
                    <Image src={Logo} alt="CBL Logo" height={32} width={70} quality={60} className="mb-1" />
                    <div className="text-neutral-700 body-3b md:body-1b">The Community for Better Living</div>
                    <div className="text-neutral-700 body-3r md:body-1r">7074 Columbia Rd</div>
                    <div className="text-neutral-700 body-3r md:body-1r">Olmsted Twnshp, OH 44138</div>
                    <div className="text-neutral-700 body-3r md:body-1r">(440) 541-7829</div>
                    <div className="text-neutral-700 body-3r md:body-1r">info@communityforbetterliving.org</div>
                    <div className="md:hidden mt-8">
                        <Image
                            src={partnerLogo}
                            alt="Greater Cleveland Food Bank Logo" height={60} width={192} quality={60} className="mb-1" />
                    </div>
                </div>
                <div className="flex-col justify-start pt-4 xs:pt-0 xs:items-end md:items-start inline-flex">
                    {menuLinks.map((link) => {
                        if (link.path === '/support' || link.path === '/contact') {
                            return (
                                <Link key={link.path} href={link.path}>
                                    <p className="md:hidden mb-1 text-neutral-700 body-2b md:body-1b">
                                        {link.text}
                                    </p>
                                </Link>
                            )
                        }
                        return (
                            <Link key={link.path} href={link.path}>
                                <p className="mb-1 text-neutral-700 body-2b md:body-1b">
                                    {link.text}
                                </p>
                            </Link>
                        )
                    })}
                </div>
            </div>
            <div className="hidden md:inline-flex flex-col gap-4">
                <Link href="/support">
                    <p className="py-2 px-4 rounded bg-primary-900 text-primary-100 body-1b">Support Us</p>
                </Link>
                <Link href="/contact">
                    <p className="mb-8 py-2 px-4 rounded bg-white text-primary-900 border-2 border-primary-900 body-1b">Contact Us</p>
                </Link>
                <Image
                    src={partnerLogo}
                    alt="Greater Cleveland Food Bank Logo" height={60} width={192} quality={60} className="mb-1" />
            </div>
        </div>
    );
}