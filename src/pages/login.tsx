import React, { useState } from 'react';
import InputComponent from '@/components/InputComponent';
import Link from 'next/link';
import Layout from '@/layout/Layout';
import CustomButton from '@/components/Buttons/CustomButton';
import { useTheme } from '@/components/Theme/ThemeContext';
import GoogleSignInButton from '@/components/Buttons/GoogleSignInButton';
import AppleButton from '@/components/Buttons/Applebutton';

const Login = () => {
  const { theme } = useTheme();
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const backgroundImageRight = theme === 'dark' ? '/Yadeam1.jpg' : '/Yadeam2.jpg';
  const backgroundImageLeft = theme === 'dark' ? '/MainLogo1-2.png' : '/MainLogo2-1.png';

  const textColor = theme === 'dark' ? 'text-black' : 'text-white';
  const signatures = theme === 'dark' ? 'text-primary1' : 'text-primary3';

  return (
    <Layout>
      <div className="relative min-h-screen flex flex-col sm:flex-row">
        
        <div
          className="w-full sm:w-1/2 min-h-screen bg-center bg-cover"
          style={{ backgroundImage: `url(${backgroundImageLeft})` }}
        ></div>
        
        <div
          className="hidden sm:block w-1/2 min-h-screen bg-center bg-cover"
          style={{ backgroundImage: `url(${backgroundImageRight})` }}
        ></div>

        <div className="absolute w-full sm:w-1/2 sm:left-0 min-h-screen flex items-center justify-center p-5">
          <div className={`relative w-full max-w-[450px] bg-black bg-opacity-10 shadow-smallShadow backdrop-filter backdrop-blur-[14px] rounded-md flex flex-col p-6 space-y-4`}>
            
            <div className="flex flex-col w-[100%]">
              <h2 className={`text-left text-[32px] font-bold ${textColor}`}>Welcome Back!</h2>
              <p className={`text-left text-[16px] mt-2 ${textColor}`}>Please enter your details.</p>
            </div>

            <InputComponent
              type="email"
              placeholder="Enter your email"
              label="Email"
              className="w-full max-w-[400px]"
              value={email}
              onChange={handleEmailChange}
            />

            <div className='relative w-full h-[60px] flex items-center'>
              <InputComponent
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                label="Password"
                className="w-full max-w-[400px]"
                value={password}
                onChange={handlePasswordChange}
              />
            </div>

           
            <div className="w-full flex items-center justify-between mt-2">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="rememberMe"
                  checked={rememberMe}
                  onChange={handleRememberMeChange}
                  className="mr-2"
                />
                <label htmlFor="rememberMe" className={`${textColor} text-sm`}>Remember Me</label>
              </div>
              <Link href="/forgot-password" className={`${signatures} hover:underline text-[15px]`}>
                Forgot Password?
              </Link>
            </div>

            <div className='flex justify-center'>
              <CustomButton
                onClick={() => console.log('Logging in...')}
                text="Login"
                theme={theme}
                className="text-black w-full bg-primary1 hover:bg-primary3 transform hover:scale-105 transition-transform duration-200"
              />
            </div>

            <div className="mt-auto flex justify-center">
              <GoogleSignInButton 
                onClick={() => console.log('Signing in with Google...')} 
                txt={'Sign in with Google'} 
                theme={theme} 
              />
            </div>

            <div className='flex justify-center mt-4'>
            <AppleButton 
              onClick={() => console.log('Signing in with Apple...')} 
              theme={theme} 
            />
            </div>

            
            <div className="flex justify-center mt-6">
              <p className={`${textColor} text-sm`}>
                Don't have an account?{" "}
                <Link href={'/signup'} className="text-blue-500 hover:underline">
                  Sign Up
                </Link>
              </p>
            </div>

            <Link href="/" className={`${signatures} duration-500 border border-transparent text-center hover:border hover:border-primary3 rounded-[40px] p-1`}>
              Back
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
