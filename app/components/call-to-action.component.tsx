import Link from "next/link";
import { ReactNode } from "react";

export default function CallToAction({ text }: { text: string }) {
    return (
        <div className="px-8 pt-8 pb-12 lg:pt-16 lg:pb-32">
            <h3 className="display-3 lg:display-2 text-primary-900 text-center mb-4 lg:mb-8">
                {text}
            </h3>
            <p className="display-5 lg:display-3 text-neutral-900 text-center mb-6 lg:mb-10">Reach out to see how you can get involved</p>
            <div className="flex flex-col lg:flex-row gap-2 lg:gap-6 justify-center">
                <Link
                    href="mailto:info@communityforbetterliving.org"
                    className="py-2 lg:py-4 rounded bg-primary-900 text-white body-2b lg:body-1b text-center lg:w-[350px]"
                >
                    info@communityforbetterliving.org
                </Link>
                <Link
                    href="tel:+14405417829"
                    className="py-2 lg:py-4 rounded bg-primary-900 text-white body-2b lg:body-1b text-center lg:w-[350px]"
                >
                    (440) 541-7829
                </Link>
            </div>
        </div>
    )
}