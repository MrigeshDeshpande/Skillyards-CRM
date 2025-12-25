import React from 'react';

const Input = ({ label, leftIcon: LeftIcon, rightIcon: RightIcon, onRightIconClick, type = 'text', className, ...props }) => {
    return (
        <div className="space-y-1.5 w-full">
            {label && (
                <label className="text-sm text-gray-300 font-medium block">
                    {label}
                </label>
            )}
            <div className="relative group">
                {LeftIcon && (
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none">
                        <LeftIcon size={20} />
                    </div>
                )}
                <input
                    type={type}
                    className={`
            w-full bg-[#1e293b] text-white rounded-lg py-3 outline-none border border-transparent
            placeholder:text-gray-500
            focus:border-brand-blue focus:ring-1 focus:ring-brand-blue
            transition-all duration-200
            ${LeftIcon ? 'pl-10' : 'pl-4'}
            ${RightIcon ? 'pr-10' : 'pr-4'}
            ${className || ''}
          `}
                    {...props}
                />
                {RightIcon && (
                    <div
                        className={`absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 ${onRightIconClick ? 'cursor-pointer hover:text-gray-300' : 'pointer-events-none'}`}
                        onClick={onRightIconClick}
                    >
                        <RightIcon size={20} />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Input;
