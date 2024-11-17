import React from 'react';
import { Link } from 'react-router-dom';
const Register = () => {
    return (
<div className="flex justify-center flex-col items-end mt-6">
    <div className='border mx-auto w-[630px] rounded bg-base-100 py-8 px-6'>
        <div>
            <h2 className='text-center font-semibold text-xl'>Login to your account</h2>
            
        </div>
        <form className='px-6 space-y-3'>
            <div className="border-b-2 pt-12 mb-6"></div>
            <div class="form-control space-y-2">
            <label class="label">
                <span class="label-text font-semibold text-gray-600">Your Name</span>
            </label>
            <input type="name" placeholder="Enter your name" class="input input-bordered text-sm bg-[#f3f3f3]" required />
            </div>

            <div class="form-control space-y-1">
            <label class="label">
                <span class="label-text font-semibold text-gray-600">Photo URL</span>
            </label>
            <input type="url" placeholder="Enter your photo URL" class="input input-bordered text-sm bg-[#f3f3f3]" required />
            </div>

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

            <div class="form-control">
                <label class="label cursor-pointer  justify-start gap-2">
                <input type="checkbox" class="checkbox w-5 h-5 rounded" />
                <span class="text-gray-700 label-text">Accept <Link className='font-medium'>Terms & Conditions</Link> </span>
                </label>
            </div>


            <div class="form-control pt-1">
            <button class="btn bg-gray-600 text-white">Register</button>
            </div>
            <h2 className='text-center'>Already have an account?<Link className='text-red-600' to='/auth/login'> Login</Link></h2>
        </form>
                
        </div>
</div>
    );
};

export default Register;