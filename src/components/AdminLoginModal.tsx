import React, { useState } from 'react';
import { Lock, X, LogIn, AlertCircle } from 'lucide-react';

interface AdminLoginModalProps {
  onClose: () => void;
  onLoginSuccess: () => void;
}

export const AdminLoginModal: React.FC<AdminLoginModalProps> = ({ onClose, onLoginSuccess }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === 'admin' && password === 'admin123') {
      onLoginSuccess();
    } else {
      setError('Username atau password salah.');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white dark:bg-gray-900 w-full max-w-md rounded-2xl shadow-2xl border border-gray-100 dark:border-gray-800 overflow-hidden slide-in-from-bottom-4 animate-in duration-300">
        <div className="px-6 py-4 border-b border-gray-100 dark:border-gray-800 flex justify-between items-center bg-gray-50 dark:bg-gray-800/50">
          <div className="flex items-center gap-2">
            <Lock className="w-5 h-5 text-[#CE2029]" />
            <h3 className="font-bold text-gray-900 dark:text-gray-100">Login Administrator</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="p-6">
          <form onSubmit={handleLogin} className="space-y-4">
            {error && (
              <div className="flex items-center gap-2 p-3 bg-red-50 text-red-700 dark:bg-red-900/30 dark:text-red-400 rounded-xl text-sm border border-red-100 dark:border-red-800">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{error}</span>
              </div>
            )}
            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">Username</label>
              <input
                type="text"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-[#CE2029]"
                placeholder="Masukkan username"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">Password</label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-[#CE2029]"
                placeholder="Masukkan password"
              />
            </div>
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-[#CE2029] hover:bg-red-700 text-white font-bold py-2.5 rounded-xl transition shadow-md shadow-red-900/20 mt-2"
            >
              <LogIn className="w-4 h-4" />
              <span>Login</span>
            </button>
          </form>
          <div className="mt-6 text-center text-xs text-gray-500">
            Gunakan username: <strong>admin</strong> dan password: <strong>admin123</strong>
          </div>
        </div>
      </div>
    </div>
  );
};
