import Image from 'next/image';
import Logo from '../../public/cfbl-logo.svg';

import HamburgerMenu from './hamburger.component';

export default function Navbar() {
    return (
        <div className="w-full h-[72px] pt-6 pb-4 px-8 shadow justify-between items-start inline-flex">
            <Image src={Logo} alt="Logo" height={32} width={70} />
            <HamburgerMenu/>
        </div>
    );
}