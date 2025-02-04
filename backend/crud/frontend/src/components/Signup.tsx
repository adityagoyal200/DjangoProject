import { useState, ChangeEvent, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { Eye, EyeOff, Mail, Lock, User } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  password: string;
}

const SignUp: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center py-10">
      <div className="bg-zinc-900 text-white p-8 rounded-xl shadow-xl w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-6">Create Account</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium">Name</label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-400" size={20} />
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name}
                onChange={handleChange}
                required 
                className="w-full p-3 pl-10 rounded-md bg-zinc-800 text-white focus:ring-2 focus:ring-zinc-500"
              />
            </div>
          </div>
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
            Sign Up
          </button>
        </form>
        <div className="mt-6 text-center">
          <p className="text-sm">
            Already have an account? 
            <Link to="/login" className="text-zinc-400 hover:text-zinc-300"> Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
