import React from 'react';
import { TrendingUp, Quote } from 'lucide-react';

const LoginHero = () => {
    return (
        <div className="hidden lg:flex lg:w-1/2 bg-[#020617] relative flex-col justify-center items-center p-12 text-center overflow-hidden">
            {/* Abstract Waves Background */}
            <div className="absolute inset-0 overflow-hidden opacity-30 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-bl from-brand-blue/5 to-transparent"></div>
            </div>

            {/* Chart Graphic Simulation */}
            <div className="relative z-10 w-full max-w-md mb-12 transform preserve-3d rotate-y-12 rotate-x-6 hover:rotate-y-0 transition-all duration-700 ease-out">
                <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl">
                    <div className="absolute -top-6 -right-6 w-16 h-16 bg-brand-blue rounded-2xl flex items-center justify-center shadow-lg shadow-brand-blue/30 animate-bounce-slow">
                        <TrendingUp className="text-white w-8 h-8" />
                    </div>

                    {/* Fake Chart Bars */}
                    <div className="flex items-end justify-between h-48 gap-4 px-4 pt-8">
                        {[40, 65, 45, 80, 55, 90, 75].map((height, i) => (
                            <div key={i} className="w-full bg-gradient-to-t from-brand-blue/40 to-brand-blue rounded-t-sm relative group">
                                <div
                                    className="w-full absolute bottom-0 bg-brand-blue/80 rounded-t-sm transition-all duration-1000 ease-out group-hover:bg-brand-blue"
                                    style={{ height: `${height}%` }}
                                ></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>


            <div className="relative z-10 max-w-md text-left space-y-6">
                <div className="w-12 h-12 rounded-full bg-brand-blue/20 flex items-center justify-center mb-6">
                    <Quote className="text-brand-blue w-6 h-6 fill-brand-blue" />
                </div>

                <h2 className="text-3xl font-bold text-white leading-relaxed">
                    "SalesForce One transformed how our team tracks revenue. The interface is simply the fastest on the market."
                </h2>

                <div className="flex items-center gap-4 pt-4">
                    <div className="w-12 h-12 rounded-full bg-gray-700 overflow-hidden border-2 border-brand-blue/30">
                        <img src="https://i.pravatar.cc/150?u=a042581f4e29026704d" alt="Alex Morgan" className="w-full h-full object-cover" />
                    </div>
                    <div>
                        <div className="text-white font-semibold">Alex Morgan</div>
                        <div className="text-sm text-gray-400">VP of Sales, TechCorp</div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default LoginHero;
