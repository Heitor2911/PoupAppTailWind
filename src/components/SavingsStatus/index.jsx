import { IconSavings } from "../icons"
import { ProgressBar } from "../ProgressBar"

export const SavingsStatus = () => {
    return (
        <div className="flex flex-col gap-10">
            <p className="text-secondary-income text-xl leading-[125%] flex items-center gap-2 justify-center">
                <IconSavings /> Economizar
            </p>
            <ProgressBar percent={90} />
        </div>
    )
}