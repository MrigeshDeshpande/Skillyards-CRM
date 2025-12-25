import React, { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, CheckSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import Input from './ui/Input';
import Button from './ui/Button';
import LoginHero from './LoginHero';

const LoginPage = () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="min-h-screen flex bg-[#0f172a]">
            {/* Left Side - Form */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center items-center p-6 lg:p-12 relative overflow-y-auto">
                <div className="w-full max-w-md space-y-8">
                    {/* Logo */}
                    <div className="flex items-center gap-2 mb-10">
                        <div className="w-8 h-8 bg-brand-blue rounded-lg transform rotate-3 flex items-center justify-center">
                            <div className="w-4 h-4 bg-white/20 rounded-sm"></div>
                        </div>
                        <span className="text-xl font-bold tracking-tight text-white">SalesForce One</span>
                    </div>

                    {/* Header */}
                    <div className="space-y-2">
                        <h1 className="text-3xl font-bold text-white">Welcome Back</h1>
                        <p className="text-gray-400">Enter your credentials to access your dashboard.</p>
                    </div>

                    {/* Form */}
                    <form className="space-y-5">
                        <Input
                            label="Email address"
                            placeholder="name@company.com"
                            type="email"
                            leftIcon={Mail}
                        />

                        <div>
                            <Input
                                label="Password"
                                placeholder="••••••••"
                                type={showPassword ? "text" : "password"}
                                leftIcon={Lock}
                                rightIcon={showPassword ? EyeOff : Eye}
                                onRightIconClick={() => setShowPassword(!showPassword)}
                            />
                        </div>


                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    id="remember"
                                    className="w-4 h-4 rounded border-gray-700 bg-gray-800 text-brand-blue focus:ring-brand-blue"
                                />
                                <label htmlFor="remember" className="text-sm text-gray-400">Remember me</label>
                            </div>
                            <a href="#" className="text-sm text-brand-blue font-medium hover:underline">
                                Forgot password?
                            </a>
                        </div>

                        <Button className="w-full shadow-lg shadow-brand-blue/25">
                            Sign in
                        </Button>
                    </form>

                    {/* Divider */}
                    <div className="relative my-6">
                        <div className="absolute inset-0 flex items-center">
                            <span className="w-full border-t border-gray-800" />
                        </div>
                        <div className="relative flex justify-center text-xs text-gray-500">
                            <span className="bg-[#0f172a] px-2">Or continue with</span>
                        </div>
                    </div>

                    {/* Social Auth */}
                    <Button variant="outline" className="w-full justify-center">
                        <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5" />
                        <span className="text-white">Google</span>
                    </Button>

                    {/* Footer */}
                    <div className="text-center text-sm text-gray-400 mt-8">
                        Don't have an account? <Link to="/signup" className="text-brand-blue font-bold hover:underline">Sign up for a trial</Link>
                    </div>

                </div>
            </div>

            {/* Right Side - Hero */}
            <LoginHero />
        </div>
    );
};

export default LoginPage;
