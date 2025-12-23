import React from 'react';

const Input = ({ label, icon: Icon, type = 'text', className, ...props }) => {
    return (
        <div className="space-y-1.5 w-full">
            {label && (
                <label className="text-sm text-gray-300 font-medium block">
                    {label}
                </label>
            )}
            <div className="relative group">
                <input
                    type={type}
                    className={`
            w-full bg-[#1e293b] text-white rounded-lg px-4 py-3 outline-none border border-transparent
            placeholder:text-gray-500
            focus:border-brand-blue focus:ring-1 focus:ring-brand-blue
            transition-all duration-200
            ${Icon ? 'pr-10' : ''}
            ${className || ''}
          `}
                    {...props}
                />
                {Icon && (
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
                        <Icon size={20} />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Input;
