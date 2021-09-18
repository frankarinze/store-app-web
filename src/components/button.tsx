import React from "react";

type ButtonProps = {
    name?: string;
    // btnType?:string;
    onClick?: any;
    className?: string;
    children?: React.FC;
}
const Button = ({
    name,
    onClick,
    className,
    children,
}: ButtonProps): JSX.Element => {
    return (
        <React.Fragment>
            <div>
                <button
                    onClick={onClick}
                    className={className}>
                    {name}
                </button>
                {children}
            </div>
        </React.Fragment>
    )
}
export default Button;