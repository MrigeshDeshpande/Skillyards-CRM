import React from 'react';

const Button = ({ children, variant = 'primary', icon: Icon, className, ...props }) => {
    const baseStyles = "w-full flex items-center justify-center gap-2 rounded-lg py-3 px-4 font-medium transition-all duration-200 active:scale-[0.98] cursor-pointer";

    const variants = {
        primary: "bg-brand-blue hover:bg-sky-400 text-white shadow-lg shadow-brand-blue/20",
        outline: "bg-[#1e293b] hover:bg-[#2a3850] text-gray-200 border border-gray-700/50",
        ghost: "text-brand-blue hover:text-sky-300 bg-transparent"
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${className}`}
            {...props}
        >
            {Icon && <Icon size={18} />}
            {children}
        </button>
    );
};

export default Button;
