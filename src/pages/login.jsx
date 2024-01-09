import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    // const [username, setUsername] = useState('');
    // const [password, setPassword] = useState('');
    // const navigate = useNavigate();
    
    // const handleLogin = async () => {
    //     localStorage.setItem('isLoggedIn', 'true')
    //     console.log(username);
    //     try {
    //         const response = await axios.post('http://localhost:5000/api/login', {
    //             username: username,
    //             password: password,
    //         });

    //         if (response.data.message === 'Login successful') {
    //             localStorage.setItem('isLoggedIn', 'true')
    //             alert('Login berhasil!');
    //             navigate('/'); // Redirect ke halaman home setelah login berhasil
    //         } else {
    //             alert('Login gagal!');
    //         }
    //     } catch (error) {
    //         console.error('Error during login:', error);
    //     }
    // };

    return (
        <div className='bg-gray-50 login-container-parent container flex flex-col items-center justify-center h-screen'>
            <h1 className='text-5xl font-bold mb-8'>TRASH2CASH</h1>
            <div className='login-container-child flex justify-center items-center flex-col w-4/12 bg-white rounded-lg shadow'>
                <h1 className='text-3xl font-bold mt-4'>Login</h1>
                <br />
                {/* FORM */}
                <div className='w-11/12'>
                    <div>
                        <label htmlFor="username" className="block mb-2 text-base font-medium text-gray-900">Username</label>
                        <input type="text" id="username" className="focus:border-blue-600 focus:ring-blue-600 bg-gray-50 border border-gray-300 text-gray-900 block w-full p-2.5" placeholder="Username" onChange={(e) => setUsername(e.target.value)} required="" />
                    </div>
                    <div className='mt-4'>
                        <label htmlFor="password" className="block mb-2 text-base font-medium text-gray-900 ">Password</label>
                        <input type="password" id="password" className="focus:border-blue-600 focus:ring-blue-600 bg-gray-50 border border-gray-300 text-gray-900 block w-full p-2.5" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required="" />
                    </div>

                    {/* Login button */}
                    <button className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-6 mb-6">LOGIN</button>
                </div>
            </div>
        </div>
    );
};

export default Login;