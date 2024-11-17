import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
<div className="flex justify-center flex-col items-end mt-6">
    <div className='border mx-auto w-[630px] rounded bg-base-100 py-8 px-6'>
        <div>
            <h2 className='text-center font-semibold text-xl'>Login to your account</h2>
            
        </div>
        <form className='px-6 space-y-3'>
            <div className="border-b-2 pt-12 mb-6"></div>
            <div class="form-control space-y-1">
            <label class="label">
                <span class="label-text font-semibold text-gray-600">Email address</span>
            </label>
            <input type="email" placeholder="Enter your email address" class="input input-bordered text-sm bg-[#f3f3f3]" required />
            </div>
            <div class="form-control space-y-1">
            <label class="label">
                <span class="label-text font-semibold text-gray-600">Password</span>
            </label>
            <input type="password" placeholder="Enter your password" class="input input-bordered text-sm bg-[#f3f3f3]" required />
            </div>
            <div class="form-control pt-3">
            <button class="btn bg-gray-600 text-white">Login</button>
            </div>
            <h2 className='text-center'>Didn't have an account?<Link className='text-red-600' to='/auth/register'> Register</Link></h2>
        </form>
                
        </div>
</div>
    );
};

export default Login;