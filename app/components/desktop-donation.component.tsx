import Link from "next/link";

import ParagraphPicture from "./paragraph-picture.component";
import donation from '../../public/assets/donation.jpg';

export default function DesktopDonation(
    { variant = "primary" }:
        { variant?: "primary" | "secondary" }
) {
    return (
        <div className="hidden lg:block w-full h-[1000px] xl:h-[900px] 2xl:h-[800px] bg-gradient-to-t from-primary-100 from-80% to-white">
            {variant === "primary" ? (
                <div>
                    <div className="w-full lg:w-5/6 max-w-screen-2xl mx-auto pt-[200px]">
                        <ParagraphPicture
                            image={donation}
                            alt="Please donate"
                            imageRight={false}
                        >
                            <h2 className="display-sl text-primary-900 mb-8">Help Fight Hunger in Northeast Ohio!</h2>
                            <p className="body-1s text-neutral-900 mb-4">
                                At the Community for Better Living, we&#39;re dedicated to providing groceries and healthy
                                living education to families in need across Northeast Ohio—completely free of charge.
                                In 2023, we provided 160,047 meals with the 192,056 lbs of food purchased.
                            </p>
                            <p className="body-1s text-neutral-900 mb-4">
                                Every contribution makes a difference. Your financial support allows us to
                                purchase essential groceries and resources. Monetary donations go a long way.
                                Through our partnership with the Greater Cleveland Food Banks, we could purchase
                                food for an average of 6 cents per pound.
                            </p>
                            <p className="body-1b text-neutral-900 mb-4">$100 donated = supplies 105 adults with three meals daily for five days</p>
                            <p className="body-1b text-neutral-900 mb-8">$50 donated = supplies 47 adults with three meals daily for five days.</p>
                            <Link href="/support" >
                                <p className="w-[50%] py-2 text-center rounded bg-primary-900 text-white display-5">Support Us</p>
                            </Link>
                        </ParagraphPicture>
                    </div>
                </div>
            ) : (
                <div>
                    <div className="w-full lg:w-5/6 max-w-screen-2xl mx-auto pt-[200px]">
                        <ParagraphPicture
                            image={donation}
                            alt="Please donate"
                            imageRight={false}
                        >
                            <h2 className="display-sl text-primary-900 mb-8">Help Our Cause</h2>
                            <p className="body-1s text-neutral-900 mb-4">
                                At the Community for Better Living, we&#39;re dedicated to providing groceries and healthy
                                living education to families in need across Northeast Ohio, completely free of charge.
                            </p>
                            <p className="body-1b text-neutral-900 mb-4">How You Can Help:</p>
                            <p className="body-1r text-neutral-900 mb-2">
                                <span className="body-1b">Donate: </span>
                                Every contribution makes a difference. Your financial support allows us to
                                purchase essential groceries and resources.
                            </p>
                            <p className="body-1r text-neutral-900 mb-2">
                                <span className="body-1b">Volunteer: </span>
                                Lend a hand and join our team of passionate volunteers who are making a
                                real impact in our community.
                            </p>
                            <p className="body-1r text-neutral-900 mb-2">
                                <span className="body-1b">Spread the Word: </span>
                                Tell your friends and family about our mission. The more people who
                                know about us, the more families we can help!
                            </p>
                            <p className="body-1r text-neutral-900 mb-8">
                                Together, we can ensure that no family goes hungry in Northeast Ohio.
                                <span className="body-1b"> Donate or
                                    email today and make a difference!</span>
                            </p>
                            <Link href="/support" >
                                <p className="w-[50%] py-2 text-center rounded bg-primary-900 text-white display-5">Support Us</p>
                            </Link>
                        </ParagraphPicture>
                    </div>
                </div>
            )}
        </div>
    );
}