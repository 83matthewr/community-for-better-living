export default function BeliefStatement({ title, text }: { title: string, text: string }) {
    return (
        <div className="lg:w-[45%]">
            <h4 className="display-s lg:display-sl text-neutral-900 mb-4">{title}</h4>
            <p className="body-2r lg:body-1r">{text}</p>
        </div>
    )
}