import { Service } from "@/data/service";

export function ServiceEntry({ service }: { service: Service }) {
    return (
        <div className="flex flex-row gap-1">
            <div className="flex flex-col flex-1 p-0.5">
                <p
                    className="text-sm text-zinc-600 mb-1 [&_a]:no-underline [&_a]:text-[#E36C2D] [&_a:hover]:text-[#E36C2D] [&_a]:transition-colors"
                    dangerouslySetInnerHTML={{ __html: service.description }}
                />
            </div>
        </div>
    );
}
