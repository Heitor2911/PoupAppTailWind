export const ListItem = ({ children, className, ...props }) => {
    return(
        <li className={`
        mb-4 pb-4 border-b border-neutral-header last:border-none 
        last:pb-0 
        last:mb-0>   ${className || ""}`} {...props}>
            {children}
        </li>
    )
}