import React from 'react';
import { BarChart2, Star } from 'lucide-react';

const SignupHero = () => {
    return (
        <div className="hidden lg:flex lg:w-1/2 bg-[#020617] relative flex-col justify-center items-center p-12 text-center overflow-hidden">
            {/* Abstract Waves Background */}
            <div className="absolute inset-0 overflow-hidden opacity-30 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/5 to-transparent"></div>
            </div>

            <div className="relative z-10 max-w-lg space-y-8">
                {/* Floater Icon */}
                <div className="w-20 h-20 bg-brand-blue rounded-3xl mx-auto flex items-center justify-center shadow-2xl shadow-brand-blue/40 transform rotate-[-5deg] mb-8">
                    <BarChart2 className="text-white w-10 h-10" />
                </div>

                <h2 className="text-5xl font-extrabold text-white tracking-tight leading-tight">
                    Track revenue.<br />
                    Close more deals.
                </h2>

                <p className="text-lg text-gray-400 mx-auto max-w-md">
                    Join over 10,000 sales professionals who use Skillyards CRM to organize leads, track pipelines, and crush their quotas.
                </p>

                {/* Testimonial Card */}
                <div className="mt-12 bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 text-left shadow-2xl mx-auto max-w-md transform transition-all hover:scale-[1.02]">
                    <div className="flex gap-1 text-yellow-400 mb-4">
                        {[1, 2, 3, 4, 5].map(i => <Star key={i} size={16} fill="currentColor" />)}
                    </div>
                    <p className="text-gray-200 mb-6 italic">
                        "Skillyards CRM transformed how our team operates. The insights are incredible and the interface is blazing fast."
                    </p>
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-gray-600 overflow-hidden">
                            <img src="https://i.pravatar.cc/150?u=a042581f4e29026024d" alt="User" />
                        </div>
                        <div>
                            <div className="text-white font-semibold">Marcus Chen</div>
                            <div className="text-xs text-gray-400">VP of Sales, TechCorp</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignupHero;
