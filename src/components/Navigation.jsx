import React from 'react';
import { Link } from 'react-router-dom';
import { Code, User, LogOut, Trophy, BookOpen } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const Navigation = () => {
  const { user, logout, isAuthenticated } = useAuth();

  return (
    <nav className="bg-white shadow-lg border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Code className="w-8 h-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-900">CodeForge</span>
            </Link>
          </div>

          {isAuthenticated ? (
            <div className="flex items-center space-x-6">
              <Link
                to="/dashboard"
                className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors"
              >
                <Trophy className="w-5 h-5" />
                <span>Dashboard</span>
              </Link>
              <Link
                to="/problems"
                className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors"
              >
                <BookOpen className="w-5 h-5" />
                <span>Problems</span>
              </Link>
              <Link
                to="/profile"
                className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors"
              >
                <User className="w-5 h-5" />
                <span>{user?.name}</span>
              </Link>
              <button
                onClick={logout}
                className="flex items-center space-x-1 text-gray-700 hover:text-red-600 transition-colors"
              >
                <LogOut className="w-5 h-5" />
                <span>Logout</span>
              </button>
            </div>
          ) : (
            <div className="flex items-center space-x-4">
              <Link
                to="/trial"
                className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
              >
                Try Free
              </Link>
              <Link
                to="/login"
                className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Sign Up
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;