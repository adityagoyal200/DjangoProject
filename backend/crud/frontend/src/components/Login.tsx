import { useState, ChangeEvent, FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios,{AxiosError} from 'axios';
import { Eye, EyeOff, Mail, Lock } from 'lucide-react';

interface FormData {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate(); // For redirection

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setError(null);

  try {
    const response = await axios.post('http://127.0.0.1:8000/accounts/login/', formData, {
      headers: {
          'Content-Type': 'application/json',
      },
  });

    if (response.status === 200) {
      console.log(response.data)
      navigate('/home'); 
    }
  } catch (err: unknown) {
    if (err instanceof AxiosError) {
      console.error(err.response?.data || err.message); 
    } else if (err instanceof Error) {
      console.error(err.message); 
    }
    setError('Invalid email or password. Please try again.');
  }
};


  return (
    <div className="min-h-screen bg-black flex items-center justify-center py-10">
      <div className="bg-zinc-900 text-white p-8 rounded-xl shadow-xl w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium">Email</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-400" size={20} />
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email}
                onChange={handleChange}
                required 
                className="w-full p-3 pl-10 rounded-md bg-zinc-800 text-white focus:ring-2 focus:ring-zinc-500"
              />
            </div>
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium">Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-400" size={20} />
              <input 
                type={showPassword ? 'text' : 'password'}
                id="password" 
                name="password" 
                value={formData.password}
                onChange={handleChange}
                required 
                className="w-full p-3 pl-10 pr-10 rounded-md bg-zinc-800 text-white focus:ring-2 focus:ring-zinc-500"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-zinc-400 focus:outline-none"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>
          <button type="submit" className="w-full py-3 mt-4 rounded-md bg-zinc-600 hover:bg-zinc-500 text-white font-semibold focus:outline-none focus:ring-2 focus:ring-zinc-500">
            Login
          </button>
        </form>
        <div className="mt-6 text-center">
          <p className="text-sm">
            Don't have an account? 
            <Link to="/signup" className="text-zinc-400 hover:text-zinc-300"> Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
