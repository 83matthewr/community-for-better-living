import Link from "next/link";
import Image from "next/image";

import SectionHeading from "./section-heading.component";
import donation from '../../public/assets/donation.jpg';

export default function MobileDonation(
    { variant = "primary" }:
        { variant?: "primary" | "secondary" }
) {
    return (
        <div className="lg:hidden px-8 pb-8">
            {variant === "primary" ? (
                <div>
                    <SectionHeading>Help Fight Hunger in Northeast Ohio!</SectionHeading>
                    <div className="w-full bg-primary-100 rounded-md shadow-md">
                        <div className="w-full">
                            <Image
                                alt="Donation"
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
                            <p className="body-3r text-neutral-900 mb-2">
                                At the Community for Better Living, we&#39;re dedicated to providing groceries and healthy
                                living education to families in need across Northeast Ohio—completely free of charge.
                                In 2023, we provided 160,047 meals with the 192,056 lbs of food purchased.
                            </p>
                            <p className="body-3r text-neutral-900 mb-2">
                                Every contribution makes a difference. Your financial support allows us to
                                purchase essential groceries and resources. Monetary donations go a long way.
                                Through our partnership with the Greater Cleveland Food Banks, we could purchase
                                food for an average of 6 cents per pound.
                            </p>
                            <p className="body-3b text-neutral-900 mb-2">$100 donated = supplies 105 adults with three meals daily for five days</p>
                            <p className="body-3b text-neutral-900 mb-8">$50 donated = supplies 47 adults with three meals daily for five days.</p>
                            <Link href="/support" >
                                <p className="w-full py-2 text-center rounded bg-primary-900 text-white display-5">Support Us</p>
                            </Link>
                        </div>
                    </div>
                </div>
            ) : (
                <div>
                    <SectionHeading>Help Our Cause</SectionHeading>
                    <div className="w-full bg-primary-100 rounded-md shadow-md">
                        <div className="w-full">
                            <Image
                                alt="Donation"
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
                            <p className="body-3r text-neutral-900 mb-2">
                                At the Community for Better Living, we&#39;re dedicated to providing groceries and healthy
                                living education to families in need across Northeast Ohio, completely free of charge.
                            </p>
                            <p className="body-3b text-neutral-900 mb-2">How You Can Help:</p>
                            <p className="body-3r text-neutral-900 mb-2">
                                <span className="body-3b">Donate: </span>
                                Every contribution makes a difference. Your financial support allows us to
                                purchase essential groceries and resources.
                            </p>
                            <p className="body-3r text-neutral-900 mb-2">
                                <span className="body-3b">Volunteer: </span>
                                Lend a hand and join our team of passionate volunteers who are making a
                                real impact in our community.
                            </p>
                            <p className="body-3r text-neutral-900 mb-2">
                                <span className="body-3b">Spread the Word: </span>
                                Tell your friends and family about our mission. The more people who
                                know about us, the more families we can help!
                            </p>
                            <p className="body-3r text-neutral-900 mb-8">
                                Together, we can ensure that no family goes hungry in Northeast Ohio.
                                <span className="body-3b">Donate or
                                    email today and make a difference!</span>
                            </p>
                            <Link href="/support" >
                                <p className="w-full py-2 text-center rounded bg-primary-900 text-white display-5">Support Us</p>
                            </Link>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
}