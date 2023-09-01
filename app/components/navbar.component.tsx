'use client'

import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../public/cfbl-logo.svg';
import CloseButton from '../../public/closeButton.svg';

const menuLinks = [
    {
        text: 'Home',
        path: '/'
    },
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
];

export default function Navbar() {

    const slideIn = () => {
        const sideMenu = document.getElementById("side_menu");
        if (sideMenu) {
            sideMenu.style.visibility = "visible";
            sideMenu.style.right = "0px";
        }
    }

    const slideOut = () => {
        const sideMenu = document.getElementById("side_menu");
        if (sideMenu) {
            sideMenu.style.right = "-256px";
            sideMenu.style.visibility = "hidden";
        }
    }

    return (
        <div className="z-10 fixed top-0 w-full h-[72px] bg-white">
            <div className="w-full h-[72px] pt-4 pb-4 px-8 shadow-lg justify-between items-start inline-flex content-center">
                <div className="inline-flex">
                    <Link href="/" className='pt-1'>
                        <Image src={Logo} alt="Logo" height={32} width={70} />
                    </Link>
                    <div className="hidden lg:inline-flex pt-[10px] ml-8">
                        {menuLinks.map((link) => {
                            if (link.path !== '/support' && link.path !== '/') {
                                return (
                                    <Link key={link.path} href={link.path}>
                                        <p className="display-4 text-neutral-900 pr-4">{link.text}</p>
                                    </Link>
                                )
                            }
                        })}
                    </div>
                </div>

                <Link href="/support" className='hidden lg:inline-flex bg-primary-300 text-primary-900 display-4 py-2 px-4 rounded hover:shadow-md'>
                    Support Us
                </Link>

                <div className="lg:hidden w-8 h-8 mt-[12px] flex-col cursor-pointer" onClick={() => slideIn()}>
                    <div className="w-[32px] h-[4px] mb-1 rounded bg-neutral-900"></div>
                    <div className="w-[32px] h-[4px] mb-1 rounded bg-neutral-900"></div>
                    <div className="w-[32px] h-[4px] mb-1 rounded bg-neutral-900"></div>
                </div>
            </div>
            <div
                id="side_menu"
                className='fixed w-80 z-20 min-h-screen bg-secondary-100 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] invisible right-[-256px] top-0 duration-300'
            >
                <Image src={CloseButton} alt="Close" height={28} width={27} className="relative right-[-260px] top-9 cursor-pointer" onClick={() => slideOut()} />
                <div className="text-right mt-12 py-4 px-8 display-2 text-neutral-900">
                    {menuLinks.map((link) => {
                        return (
                            <Link key={link.path} href={link.path} onClick={() => slideOut()}>
                                <p className="mb-4">{link.text}</p>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}