import Image from "next/image";
import Logo from "../../public/cfbl-logo.svg";

export default function Footer() {
    return (
        <div className="w-full h-[270px] px-8 pt-4 pb-8 bg-secondary-100 justify-between items-start inline-flex">
            <div className="flex-col justify-start items-start gap-2 inline-flex">
                <Image src={Logo} alt="CBL Logo" height={32} width={70} className="mb-1" />
                <div className="text-neutral-700 font-body text-xs font-semibold leading-[18px]">The Community for Better Living</div>
                <div className="text-neutral-700 font-body text-xs font-normal leading-[18px]">7074 Columbia Rd</div>
                <div className="text-neutral-700 font-body text-xs font-normal leading-[18px]">Olmsted Twnshp, OH 44138</div>
                <div className="text-neutral-700 font-body text-xs font-normal leading-[18px]">(440) 541-7829</div>
                <div className="text-neutral-700 font-body text-xs font-normal leading-[18px]">info@communityforbetterliving.org</div>
            </div>
            <div className="flex-col justify-start items-end gap-1 inline-flex">
                <div className="text-neutral-700 font-body text-sm font-semibold leading-[21px]">About Us</div>
                <div className="text-neutral-700 font-body text-sm font-semibold leading-[21px]">Events</div>
                <div className="text-neutral-700 font-body text-sm font-semibold leading-[21px]">Food Bank</div>
                <div className="text-neutral-700 font-body text-sm font-semibold leading-[21px]">Worship</div>
                <div className="text-neutral-700 font-body text-sm font-semibold leading-[21px]">Support Us</div>
                <div className="text-neutral-700 font-body text-sm font-semibold leading-[21px]">Contact</div>
                <div className="text-neutral-700 font-body text-sm font-semibold leading-[21px]">Facebook</div>
                <div className="text-neutral-700 font-body text-sm font-semibold leading-[21px]">Privacy Policy</div>
            </div>
        </div>
    );
}