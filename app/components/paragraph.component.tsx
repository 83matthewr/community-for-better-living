import { ReactNode } from "react";

export default function Paragraph({ attrs = "", children }: { attrs?: string, children: ReactNode }) {
    return (<p className={`body-2s xl:body-1s text-neutral-900 ${attrs}`}>{children}</p>)
}