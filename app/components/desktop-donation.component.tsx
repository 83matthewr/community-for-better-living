import Link from "next/link";

import ParagraphPicture from "./paragraph-picture.component";
import donation from '../../public/assets/donation.jpg';

export default function DesktopDonation() {
    return (
        <div className="hidden lg:block w-full h-[800px] bg-gradient-to-t from-primary-100 from-80% to-white">
            <div className="w-full md:w-5/6 max-w-screen-2xl mx-auto pt-[200px]">
                <ParagraphPicture
                    image={donation}
                    alt="Please donate"
                    imageRight={false}
                >
                    <h2 className="display-sl text-primary-900 mb-8">Help Our Cause</h2>
                    <p className="body-1s text-neutral-900 mb-8">
                        If you can, please help us as we provide groceries and healthy living education free of charge to families
                        in need across Northeast Ohio. Since the COVID-19 pandemic began in the spring of 2020, we have provided
                        food to over 1000 families and continue to increase those numbers with your support.
                    </p>
                    <Link href="/support" >
                        <p className="w-[50%] py-2 text-center rounded bg-primary-900 text-white display-5">Support Us</p>
                    </Link>
                </ParagraphPicture>
            </div>
        </div>
    );
}