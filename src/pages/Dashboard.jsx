import React from 'react';
import { Link } from 'react-router-dom';
import { Trophy, Target, Clock, Code, BookOpen, TrendingUp, Calendar, Award } from 'lucide-react';
import Navigation from '../components/Navigation';
import { useAuth } from '../contexts/AuthContext';

const Dashboard = () => {
  const { user } = useAuth();

  const categories = [
    { name: 'Arrays', problems: 150, icon: '📊', color: 'bg-blue-500' },
    { name: 'Strings', problems: 89, icon: '🔤', color: 'bg-green-500' },
    { name: 'Dynamic Programming', problems: 76, icon: '🧠', color: 'bg-purple-500' },
    { name: 'Trees', problems: 112, icon: '🌳', color: 'bg-orange-500' },
    { name: 'Graphs', problems: 67, icon: '🕸️', color: 'bg-red-500' },
    { name: 'Sorting', problems: 45, icon: '🔄', color: 'bg-yellow-500' },
  ];

  const recentSubmissions = [
    { problem: 'Two Sum', status: 'Accepted', time: '2 hours ago', difficulty: 'Easy' },
    { problem: 'Longest Substring', status: 'Accepted', time: '1 day ago', difficulty: 'Medium' },
    { problem: 'Binary Tree Inorder', status: 'Wrong Answer', time: '2 days ago', difficulty: 'Medium' },
    { problem: 'Valid Parentheses', status: 'Accepted', time: '3 days ago', difficulty: 'Easy' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome back, {user?.name}! 👋
          </h1>
          <p className="text-gray-600">Ready to solve some problems today?</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Problems Solved</p>
                <p className="text-3xl font-bold text-gray-900">{user?.problemsSolved}</p>
              </div>
              <div className="p-3 bg-blue-100 rounded-full">
                <Trophy className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Current Streak</p>
                <p className="text-3xl font-bold text-gray-900">{user?.streak}</p>
              </div>
              <div className="p-3 bg-orange-100 rounded-full">
                <Target className="w-6 h-6 text-orange-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Current Level</p>
                <p className="text-3xl font-bold text-gray-900">{user?.level}</p>
              </div>
              <div className="p-3 bg-green-100 rounded-full">
                <Award className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">This Week</p>
                <p className="text-3xl font-bold text-gray-900">8</p>
              </div>
              <div className="p-3 bg-purple-100 rounded-full">
                <TrendingUp className="w-6 h-6 text-purple-600" />
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Problem Categories */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Problem Categories</h2>
                <Link
                  to="/problems"
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  View All
                </Link>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {categories.map((category, index) => (
                  <Link
                    key={index}
                    to={`/problems?category=${category.name.toLowerCase()}`}
                    className="block p-4 rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all"
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded-lg ${category.color}`}>
                        <span className="text-white text-lg">{category.icon}</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{category.name}</h3>
                        <p className="text-sm text-gray-600">{category.problems} problems</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="space-y-6">
            {/* Recent Submissions */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Recent Submissions</h2>
              <div className="space-y-4">
                {recentSubmissions.map((submission, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium text-gray-900">{submission.problem}</p>
                      <p className="text-sm text-gray-600">{submission.time}</p>
                    </div>
                    <div className="text-right">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        submission.status === 'Accepted' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {submission.status}
                      </span>
                      <p className="text-sm text-gray-500 mt-1">{submission.difficulty}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Daily Goal */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Daily Goal</h2>
              <div className="text-center">
                <div className="relative w-24 h-24 mx-auto mb-4">
                  <svg className="w-24 h-24 transform -rotate-90">
                    <circle
                      cx="48"
                      cy="48"
                      r="40"
                      stroke="currentColor"
                      strokeWidth="8"
                      fill="transparent"
                      className="text-gray-200"
                    />
                    <circle
                      cx="48"
                      cy="48"
                      r="40"
                      stroke="currentColor"
                      strokeWidth="8"
                      fill="transparent"
                      strokeDasharray={`${2 * Math.PI * 40}`}
                      strokeDashoffset={`${2 * Math.PI * 40 * (1 - 0.6)}`}
                      className="text-blue-600"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-bold text-gray-900">60%</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">3 of 5 problems solved today</p>
                <Link
                  to="/problems"
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center space-x-2"
                >
                  <Code className="w-4 h-4" />
                  <span>Solve More</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;