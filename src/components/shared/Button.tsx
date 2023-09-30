import { PropsWithChildren } from "react";


const Button = ({ children, type, className }: PropsWithChildren & {
    type?: "button" | "submit" | "reset",
    className?: string
}) => (
    <button 
        type={type || "button"} 
        className={"!bg-crimson text-blaque font-playfair font-bold tracking-wider leading-7 text-base py-2 px-6 rounded-sm border-none outline-none cursor-pointer " + className}
    >
        {children}
    </button>
)

export default Button;
