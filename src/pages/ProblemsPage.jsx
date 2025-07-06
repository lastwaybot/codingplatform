import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, Clock, Trophy, ChevronRight } from 'lucide-react';
import Navigation from '../components/Navigation';

const ProblemsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const problems = [
    {
      id: 1,
      title: 'Two Sum',
      difficulty: 'Easy',
      category: 'Arrays',
      acceptance: '47.3%',
      likes: 1247,
      solved: true,
      description: 'Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.'
    },
    {
      id: 2,
      title: 'Add Two Numbers',
      difficulty: 'Medium',
      category: 'Linked List',
      acceptance: '34.2%',
      likes: 892,
      solved: false,
      description: 'You are given two non-empty linked lists representing two non-negative integers.'
    },
    {
      id: 3,
      title: 'Longest Substring Without Repeating Characters',
      difficulty: 'Medium',
      category: 'Strings',
      acceptance: '31.1%',
      likes: 1156,
      solved: true,
      description: 'Given a string s, find the length of the longest substring without repeating characters.'
    },
    {
      id: 4,
      title: 'Median of Two Sorted Arrays',
      difficulty: 'Hard',
      category: 'Binary Search',
      acceptance: '28.5%',
      likes: 743,
      solved: false,
      description: 'Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.'
    },
    {
      id: 5,
      title: 'Longest Palindromic Substring',
      difficulty: 'Medium',
      category: 'Strings',
      acceptance: '29.4%',
      likes: 967,
      solved: false,
      description: 'Given a string s, return the longest palindromic substring in s.'
    },
    {
      id: 6,
      title: 'ZigZag Conversion',
      difficulty: 'Medium',
      category: 'Strings',
      acceptance: '37.8%',
      likes: 456,
      solved: true,
      description: 'The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows.'
    },
    {
      id: 7,
      title: 'Reverse Integer',
      difficulty: 'Easy',
      category: 'Math',
      acceptance: '25.6%',
      likes: 634,
      solved: false,
      description: 'Given a signed 32-bit integer x, return x with its digits reversed.'
    },
    {
      id: 8,
      title: 'String to Integer (atoi)',
      difficulty: 'Medium',
      category: 'Strings',
      acceptance: '15.9%',
      likes: 289,
      solved: false,
      description: 'Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer.'
    }
  ];

  const filteredProblems = problems.filter(problem => {
    const matchesSearch = problem.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         problem.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDifficulty = selectedDifficulty === 'All' || problem.difficulty === selectedDifficulty;
    const matchesCategory = selectedCategory === 'All' || problem.category === selectedCategory;
    
    return matchesSearch && matchesDifficulty && matchesCategory;
  });

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Easy': return 'bg-green-100 text-green-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'Hard': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Problems</h1>
          <p className="text-gray-600">Practice coding problems and improve your skills</p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search problems..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Difficulty Filter */}
            <select
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="All">All Difficulties</option>
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
            </select>

            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="All">All Categories</option>
              <option value="Arrays">Arrays</option>
              <option value="Strings">Strings</option>
              <option value="Linked List">Linked List</option>
              <option value="Binary Search">Binary Search</option>
              <option value="Math">Math</option>
            </select>
          </div>
        </div>

        {/* Problems List */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-xl font-bold text-gray-900">
              {filteredProblems.length} Problems
            </h2>
          </div>

          <div className="divide-y divide-gray-200">
            {filteredProblems.map((problem) => (
              <Link
                key={problem.id}
                to={`/problem/${problem.id}`}
                className="block px-6 py-4 hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      {problem.solved && (
                        <Trophy className="w-5 h-5 text-green-500" />
                      )}
                      <span className="font-medium text-gray-900">{problem.id}.</span>
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-1">{problem.title}</h3>
                      <p className="text-sm text-gray-600 mb-2">{problem.description}</p>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <span>{problem.category}</span>
                        <span>•</span>
                        <span>{problem.acceptance} acceptance</span>
                        <span>•</span>
                        <span>{problem.likes} likes</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(problem.difficulty)}`}>
                      {problem.difficulty}
                    </span>
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Empty State */}
        {filteredProblems.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search className="w-12 h-12 mx-auto" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No problems found</h3>
            <p className="text-gray-600">Try adjusting your search or filters</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProblemsPage;