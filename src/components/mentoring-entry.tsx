import type { MentoringEntry } from "@/data/mentoring";

interface MentoringEntryProps {
    mentoring: MentoringEntry;
}

export function MentoringEntry({ mentoring }: MentoringEntryProps) {
    return (
        <div className="text-sm text-zinc-700">
            <span className="font-medium">{mentoring.name}</span>
            {mentoring.currentPosition && mentoring.currentPosition !== "" && (
                <span className="ml-2 text-zinc-500">({mentoring.currentPosition})</span>
            )}
            <span className="mx-2">•</span>
            <span>{mentoring.institution}</span>
        </div>
    );
}