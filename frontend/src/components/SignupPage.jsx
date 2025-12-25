import React from 'react';
import { ShieldCheck, Mail, User, EyeOff, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Input from './ui/Input';
import Button from './ui/Button';
import SignupHero from './SignupHero';

const SignupPage = () => {
    return (
        <div className="min-h-screen flex bg-[#0f172a]">
            {/* Left Side - Form */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center items-center p-6 lg:p-12 relative overflow-y-auto">
                <div className="w-full max-w-md space-y-8">
                    {/* Logo */}
                    <div className="flex items-center gap-2 mb-8">
                        <div className="w-8 h-8 bg-brand-blue rounded-lg transform rotate-3 flex items-center justify-center">
                            <div className="w-4 h-4 bg-white/20 rounded-sm"></div>
                        </div>
                        <span className="text-xl font-bold tracking-tight text-white">Skillyards CRM</span>
                    </div>

                    {/* Header */}
                    <div className="space-y-2">
                        <h1 className="text-3xl font-bold text-white">Create your account</h1>
                        <p className="text-gray-400">Start your 14-day free trial. No credit card required.</p>
                    </div>

                    {/* Social Auth */}
                    <Button variant="outline" className="w-full justify-center">
                        <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5" />
                        <span className="text-white">Sign up with Google</span>
                    </Button>

                    {/* Divider */}
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <span className="w-full border-t border-gray-800" />
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                            <span className="bg-[#0f172a] px-2 text-gray-500">Or sign up with email</span>
                        </div>
                    </div>

                    {/* Form */}
                    <form className="space-y-5">
                        <Input
                            label="Full Name"
                            placeholder="e.g. John Doe"
                            leftIcon={User}
                        />
                        <Input
                            label="Work Email"
                            placeholder="name@company.com"
                            type="email"
                            leftIcon={Mail}
                        />
                        <Input
                            label="Password"
                            placeholder="At least 8 characters"
                            type="password"
                            leftIcon={EyeOff}
                        />
                        <Input
                            label="Confirm Password"
                            placeholder="Repeat your password"
                            type="password"
                        />

                        <div className="flex items-center gap-2">
                            <input type="checkbox" id="terms" className="w-4 h-4 rounded border-gray-700 bg-gray-800 text-brand-blue focus:ring-brand-blue" />
                            <label htmlFor="terms" className="text-sm text-gray-400">
                                I agree to the <a href="#" className="text-brand-blue hover:underline">Terms of Service</a> and <a href="#" className="text-brand-blue hover:underline">Privacy Policy</a>.
                            </label>
                        </div>

                        <Button className="w-full group">
                            Create Account
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </form>

                    {/* Footer */}
                    <div className="text-center text-sm text-gray-400">
                        Already have an account? <Link to="/login" className="text-brand-blue font-medium hover:underline">Log In</Link>
                    </div>

                    <div className="pt-8 border-t border-gray-800/50 flex justify-center items-center gap-2 text-xs text-gray-500 tracking-wider font-semibold">
                        <ShieldCheck size={14} className="text-brand-blue" />
                        SECURE & ENCRYPTED
                    </div>
                </div>
            </div>

            {/* Right Side - Hero */}
            <SignupHero />
        </div>
    );
};

export default SignupPage;
