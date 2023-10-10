import Link from "next/link";
import Image from "next/image";

import SectionHeading from "./section-heading.component";
import donation from '../../public/assets/donation.jpg';

export default function MobileDonation() {
    return (
        <div className="lg:hidden px-8 pb-8">
            <SectionHeading>Help Our Cause</SectionHeading>
            <div className="w-full bg-primary-100 rounded-md shadow-md">
                <div className="w-full">
                    <Image
                        alt="Mountains"
                        src={donation}
                        sizes="100vw"
                        // Make the image display full width
                        quality={40}
                        style={{
                            width: '100%',
                            height: 'auto',
                            borderRadius: '0.375rem 0.375rem 0 0'
                        }}
                    />
                </div>
                <div className="p-4">
                    <p className="body-3r text-neutral-900 mb-4">
                        If you can, please help us as we provide groceries and healthy living education free of charge to families
                        in need across Northeast Ohio. Since the COVID-19 pandemic began in the spring of 2020, we have provided
                        food to over 1000 families and continue to increase those numbers with your support.
                    </p>
                    <Link href="/support" >
                        <p className="w-full py-2 text-center rounded bg-primary-900 text-white display-5">Support Us</p>
                    </Link>
                </div>
            </div>
        </div>
    );
}