import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Code, Play, CheckCircle, ArrowRight } from 'lucide-react';
import CodeEditor from '../components/CodeEditor';

const TrialPage = () => {
  const [currentProblem, setCurrentProblem] = useState(0);
  const [code, setCode] = useState('');

  const sampleProblems = [
    {
      id: 1,
      title: "Two Sum",
      difficulty: "Easy",
      description: "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
      examples: [
        {
          input: "nums = [2,7,11,15], target = 9",
          output: "[0,1]",
          explanation: "Because nums[0] + nums[1] == 9, we return [0, 1]."
        }
      ],
      initialCode: `function twoSum(nums, target) {
    // Write your solution here
    
}`,
      solution: `function twoSum(nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }
    return [];
}`
    },
    {
      id: 2,
      title: "Reverse String",
      difficulty: "Easy",
      description: "Write a function that reverses a string. The input string is given as an array of characters s.",
      examples: [
        {
          input: 's = ["h","e","l","l","o"]',
          output: '["o","l","l","e","h"]'
        }
      ],
      initialCode: `function reverseString(s) {
    // Write your solution here
    
}`,
      solution: `function reverseString(s) {
    let left = 0;
    let right = s.length - 1;
    while (left < right) {
        [s[left], s[right]] = [s[right], s[left]];
        left++;
        right--;
    }
    return s;
}`
    }
  ];

  const handleRunCode = () => {
    try {
      // Simple code execution simulation
      console.log('Running code:', code);
      alert('Code executed successfully! ✓');
    } catch (error) {
      alert('Error in code execution');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
              <Code className="w-8 h-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-900">CodeForge</span>
            </Link>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">🔥 Free Trial Mode</span>
              <Link
                to="/signup"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Get Full Access
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Trial Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center space-x-2">
            <Play className="w-5 h-5" />
            <span className="font-medium">Try CodeForge for Free - No Registration Required</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Problem Description */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-2xl font-bold text-gray-900">
                {sampleProblems[currentProblem].title}
              </h1>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                sampleProblems[currentProblem].difficulty === 'Easy' 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-yellow-100 text-yellow-800'
              }`}>
                {sampleProblems[currentProblem].difficulty}
              </span>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Description</h3>
                <p className="text-gray-700 leading-relaxed">
                  {sampleProblems[currentProblem].description}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Examples</h3>
                {sampleProblems[currentProblem].examples.map((example, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-4 mb-3">
                    <div className="mb-2">
                      <strong className="text-gray-700">Input:</strong>
                      <code className="ml-2 text-sm bg-gray-200 px-2 py-1 rounded">
                        {example.input}
                      </code>
                    </div>
                    <div className="mb-2">
                      <strong className="text-gray-700">Output:</strong>
                      <code className="ml-2 text-sm bg-gray-200 px-2 py-1 rounded">
                        {example.output}
                      </code>
                    </div>
                    {example.explanation && (
                      <div>
                        <strong className="text-gray-700">Explanation:</strong>
                        <span className="ml-2 text-sm text-gray-600">{example.explanation}</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="flex space-x-4">
                {sampleProblems.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentProblem(index);
                      setCode(sampleProblems[index].initialCode);
                    }}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      currentProblem === index
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    Problem {index + 1}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Code Editor */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-gray-900">Code Editor</h2>
              <div className="flex items-center space-x-2">
                <select className="px-3 py-2 border border-gray-300 rounded-lg text-sm">
                  <option>JavaScript</option>
                  <option>Python</option>
                  <option>Java</option>
                  <option>C++</option>
                </select>
                <button
                  onClick={handleRunCode}
                  className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center space-x-2"
                >
                  <Play className="w-4 h-4" />
                  <span>Run</span>
                </button>
              </div>
            </div>

            <CodeEditor
              value={code || sampleProblems[currentProblem].initialCode}
              onChange={setCode}
              language="javascript"
            />

            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Console Output</h3>
              <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm min-h-[100px]">
                $ Ready to run your code...
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to unlock your full potential?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join thousands of developers who chose CodeForge to advance their careers
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center justify-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-gray-700">10,000+ Problems</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-gray-700">50+ Languages</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-gray-700">Interview Prep</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/signup"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors flex items-center justify-center"
              >
                Get Started Free <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/login"
                className="bg-gray-200 text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-300 transition-colors"
              >
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrialPage;