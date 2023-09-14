import { ReactNode } from "react";

export default function SectionHeading({ children }: { children: ReactNode }) {
    return <h2 className="display-s xl:display-sl text-primary-900 mb-4 md:mb-8">{children}</h2>
}