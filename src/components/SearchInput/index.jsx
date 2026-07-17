import { IconSearch } from "../icons"

export const SearchInput = (props) => {
    return (
        <div className="flex items-center bg-neutral-header gap-4 px-4 py-3 rounded-lg">
            <IconSearch />
            <input type="text" {...props} placeholder="Procure seu dinheiro..." className="w-full text-neutral-text text-[20px] leading-[125%]"/>
        </div>
    )
}