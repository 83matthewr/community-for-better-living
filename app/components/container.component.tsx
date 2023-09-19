import { ReactNode } from "react";

export default function Main({ children }: { children: ReactNode }) {
    return (
        <div className="w-full md:w-5/6 max-w-screen-2xl mx-auto">
            {children}
        </div>
    )
}