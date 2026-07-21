export const Button = ({ children, ...props }) => {
    return (
        <button {...props} className="
        bg-transparent
        border 
        border-neutral-text 
        rounded-3xl 
        py-3 px-6 
        leading-[120%] 
        text-neutral-text
        flex justify-center
        gap-2
        cursor-pointer
        hover:opacity-80">
            {children}
        </button>
    )
}