import { ReactNode } from "react";

export default function BeliefContainer({ children }: { children: ReactNode }) {
    return (
        <div className="flex flex-col lg:flex-row gap-8 justify-between lg:gap-16 md:px-8">
            {children}
        </div>
    )
}