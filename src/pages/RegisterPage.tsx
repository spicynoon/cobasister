import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { useAuth } from '../context/AuthContext';

const Register = () => {
    const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
        // const response = await fetch('https://equilibrium-backend-lqag4dnu5a-et.a.run.app/api/user/register', {
      const response = await fetch('http://localhost:5000/api/user/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          email,
          password,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        login(data.token);
        navigate('/dashboard', { replace: true });
      } else {
        const errorData = await response.json();
        alert(`Registration failed: ${errorData.message}`);
      }
    } catch (error) {
      console.error('Error registering:', error);
      alert('Registration failed. Please try again.');
    }
  };

    return (
        <div className="flex flex-col min-h-screen justify-center mx-auto items-center bg-auth-bg">
            <div className="py-6  bg-ash max-w-[550px] rounded-xl px-5 md:px-20 md:mx-0 mx-7">
                <div className=" text-white">
                    <div className="flex flex-col justify-center items-center ">
                        <h1 className="text-2xl md:text-4xl font-bold md:pb-1">Equilibrium</h1>
                        <p className="text-xs">Tempat berbagi pengetahuan</p>
                    </div>
                    <div>
                        <form onSubmit={handleRegister} className="flex flex-col gap-y-2">
                            <p className="text-sm mt-2">Daftar</p>
                            <Input
                                className="rounded-full bg-white border-2 h-[45px] text-black ps-4"
                                type="text"
                                placeholder="Username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                            <Input
                                className="rounded-full bg-white border-2 h-[45px] text-black ps-4"
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <Input
                                className="rounded-full bg-white border-2 h-[45px] text-black ps-4"
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />                        
                            <div className="text-xs flex flex-col gap-y-2">
                                <p>Sudah punya akun? <span><Link className="text-equ-blue" to="/login">Masuk</Link></span></p>
                            </div>
                            <div className="flex flex-col justify-center text-xs items-center ">
                                <p className="text-center mb-4 text-gray-400">Dengan melanjutkan, Anda menunjukkan bahwa Anda menyetujui Persyaratan Layanan dan Kebijakan Privasi Equilibrium.</p>
                                <Button type="submit" className="px-16 py-6 rounded-full bg-blue-700 hover:bg-blue-600 max-w-[100px] font-bold">Daftar</Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
