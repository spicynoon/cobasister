import { Link } from 'react-router-dom';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';

const Login = () => {
  return (
    <div className="flex flex-col min-h-screen justify-center mx-auto items-center bg-auth-bg">
      <div className="py-6  bg-ash max-w-[550px] rounded-xl px-20">
        <div className=" text-white">
          <div className="flex flex-col justify-center items-center ">
            <h1 className="text-4xl font-bold pb-1">Equilibrium</h1>
            <p className="text-xs">Tempat berbagi pengetahuan</p>
          </div>
          <div>
            <form action="" className="flex flex-col gap-y-2">
              <p className="text-sm mt-2">Masuk</p>
              <Input
                className="rounded-full bg-white border-2 h-[45px] text-black ps-6"
                type="email"
                placeholder="Email"
              />
              <Input
                className="rounded-full bg-white border-2 h-[45px] text-black ps-6"
                type="password"
                placeholder="Password"
              />
            </form>
            <div className="text-xs flex flex-col gap-y-2 py-3">
              <a href="/" className="text-equ-blue">
                Lupa Password?
              </a>
              <p>
                Baru di Equitor?{' '}
                <span>
                  <Link className="text-equ-blue" to="/register">
                    Buat akun
                  </Link>
                </span>
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center text-xs mb-4 items-center ">
            <p className="text-center mb-4 text-gray-400">
              Dengan melanjutkan, Anda menunjukkan bahwa Anda menyetujui
              Persyaratan Layanan dan Kebijakan Privasi Equilibrium.
            </p>
            <Button className="px-16 py-6 rounded-full bg-blue-700 hover:bg-blue-600 max-w-[100px] font-bold">
              Masuk{' '}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
