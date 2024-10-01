import InputComponent from '@/components/InputComponent';
import React, { useState } from 'react';
import Link from 'next/link';
import Layout from '@/layout/Layout';
import CustomButton from '@/components/Buttons/CustomButton';
import { useTheme } from '@/components/Theme/ThemeContext'; 
import { RiEyeCloseLine, RiEyeLine } from "react-icons/ri";
import GoogleSignInButton from '@/components/Buttons/GoogleSignInButton';
import { TfiApple } from "react-icons/tfi";

const Login = () => {
  const { theme } = useTheme();
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false); 
  const [email, setEmail] = useState(''); // اضافه کردن state برای ایمیل
  const [password, setPassword] = useState(''); // اضافه کردن state برای رمز عبور

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value); // به‌روزرسانی وضعیت ایمیل
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value); // به‌روزرسانی وضعیت رمز عبور
  };

  const backgroundImage = theme === 'dark' ? '/MainLogo1.jpg' : '/MainLogo.jpg';
  const backgroundImageMobile = theme === 'dark' ? '/MainLogoMob1.jpg' : '/MainLogoMob2.jpg';

  const textColor = theme === 'dark' ? 'text-black' : 'text-white'; 
  const signatures = theme === 'dark' ? 'text-primary1' : 'text-primary3'; 

  return (
    <Layout>
      <div className="relative min-h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-center min-h-screen bg-cover bg-no-repeat"
          style={{ 
            backgroundImage: `url(${backgroundImage})`, 
            backgroundSize: '150%',
            backgroundRepeat: 'no-repeat', 
            backgroundPosition: 'center' 
          }}
        ></div>
        <div 
          className="absolute inset-0 bg-center min-h-screen bg-cover bg-no-repeat sm:hidden"
          style={{ 
            backgroundImage: `url(${backgroundImageMobile})`,
            backgroundSize: '150%',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center'
          }} 
        ></div>
        <div className="absolute inset-0 bg-black opacity-5"></div>
        <div className={`relative w-full max-w-[350px] md:py-5 mx-3 my-5 bg-black sm:px-5 shadow-smallShadow bg-opacity-10 backdrop-filter backdrop-blur-[14px] rounded-md flex flex-col p-3 space-y-4`}>
          <div className="flex justify-between items-center w-[100%]">
            <h2 className={`text-center text-[25px] font-bold ${textColor}`}>Login</h2>
            <img src="/YadeamLogo.png" alt="Yadeam Logo" className="w-[50px] bg-transparent sm:w-[60px] opacity-80"/>
          </div>
          <InputComponent 
            type="email" 
            placeholder="Enter your email" 
            label="Email" 
            className="w-full max-w-[400px]" 
            value={email} 
            onChange={handleEmailChange} // اتصال به تابع به‌روزرسانی
          />

          <div className='relative w-full h-[60px] flex items-center'>
            <InputComponent 
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              label="Password"
              className="w-full max-w-[400px]" 
              value={password} 
              onChange={handlePasswordChange} // اتصال به تابع به‌روزرسانی
            />
            <button 
              type="button" 
              onClick={togglePasswordVisibility}
              className={`absolute right-2 bottom-[1px] transform -translate-y-1/2 ${textColor}`}
            >
              {showPassword ? <RiEyeLine /> : <RiEyeCloseLine />}
            </button>
          </div>

          <div className="w-full text-right mt-2">
            <Link href="/forgot-password" className={`${signatures} hover:underline inline-block mb-10 text-[15px]`}>
              Forgot Password?
            </Link>
          </div>

          <div className="flex items-center mb-4">
            <input 
              type="checkbox" 
              id="rememberMe" 
              checked={rememberMe}
              onChange={handleRememberMeChange}
              className="mr-2" 
            />
            <label htmlFor="rememberMe" className={`${textColor} text-sm`}>Remember Me</label>
          </div>

          <div className='flex justify-center'>
            <CustomButton 
              onClick={() => console.log('Logging in...')} 
              text="Login" 
              theme={theme} 
              className="text-black w-full bg-blue-500 hover:bg-blue-600 transform hover:scale-105 transition-transform duration-200" 
            />
          </div>

          <div className="mt-auto flex justify-center">
            <GoogleSignInButton onClick={() => console.log('Signing up with Google...')} txt={'Sign in with Google'} />
          </div>

          <div className='flex justify-center mt-4'>
            <button
              onClick={() => console.log('Signing up with Apple...')}
              className="bg-black border border-white text-white w-full flex items-center justify-center space-x-2 transform hover:scale-105 transition-transform duration-200 py-2 rounded-[40px]"
            >
              <TfiApple className="text-white" />
              <span>Sign In with Apple</span>
            </button>
          </div>

          <div className={`mt-3 text-center ${textColor}`}>
            <span className='text-[13px]'>
              Don't have an account?{' '}
              <Link href="/signup" className={`${signatures} hover:underline font-bold`}>
                Create a new account
              </Link>
            </span>
          </div>

          <Link href="/" className={`${signatures} duration-500 border border-transparent text-center hover:border hover:border-primary3 rounded-[40px] p-1`}>
            Back
          </Link>
        </div>
      </div>
    </Layout>
  );
}

export default Login;
