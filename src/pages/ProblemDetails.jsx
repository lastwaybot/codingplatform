import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Play, CheckCircle, ThumbsUp, MessageSquare, Share } from 'lucide-react';
import Navigation from '../components/Navigation';
import CodeEditor from '../components/CodeEditor';

const ProblemDetails = () => {
  const { id } = useParams();
  const [code, setCode] = useState('');
  const [language, setLanguage] = useState('javascript');
  const [activeTab, setActiveTab] = useState('description');

  // Mock problem data
  const problem = {
    id: id,
    title: 'Two Sum',
    difficulty: 'Easy',
    category: 'Arrays',
    acceptance: '47.3%',
    likes: 1247,
    dislikes: 89,
    solved: false,
    description: 'Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.',
    detailedDescription: `
      You may assume that each input would have exactly one solution, and you may not use the same element twice.
      
      You can return the answer in any order.
    `,
    examples: [
      {
        input: 'nums = [2,7,11,15], target = 9',
        output: '[0,1]',
        explanation: 'Because nums[0] + nums[1] == 9, we return [0, 1].'
      },
      {
        input: 'nums = [3,2,4], target = 6',
        output: '[1,2]',
        explanation: 'Because nums[1] + nums[2] == 6, we return [1, 2].'
      }
    ],
    constraints: [
      '2 <= nums.length <= 10⁴',
      '-10⁹ <= nums[i] <= 10⁹',
      '-10⁹ <= target <= 10⁹',
      'Only one valid answer exists.'
    ],
    hints: [
      'A really brute force way would be to search for all possible pairs of numbers but that would be too slow.',
      'Again, the best way to maintain a mapping of each element in the array to its index is a hash table.'
    ],
    initialCode: {
      javascript: `/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // Write your solution here
    
};`,
      python: `class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        # Write your solution here
        pass`,
      java: `class Solution {
    public int[] twoSum(int[] nums, int target) {
        // Write your solution here
        
    }
}`,
      cpp: `class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        // Write your solution here
        
    }
};`
    }
  };

  const handleRunCode = () => {
    console.log('Running code:', code);
    // Simulate code execution
    alert('Code executed successfully! ✓');
  };

  const handleSubmit = () => {
    console.log('Submitting code:', code);
    // Simulate submission
    alert('Code submitted successfully! ✓');
  };

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
        <div className="mb-6">
          <Link
            to="/problems"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Problems
          </Link>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h1 className="text-3xl font-bold text-gray-900">
                {problem.id}. {problem.title}
              </h1>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(problem.difficulty)}`}>
                {problem.difficulty}
              </span>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <ThumbsUp className="w-5 h-5 text-green-500" />
                <span className="text-sm text-gray-600">{problem.likes}</span>
              </div>
              <button className="p-2 text-gray-500 hover:text-gray-700">
                <Share className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Problem Description */}
          <div className="bg-white rounded-xl shadow-lg">
            {/* Tabs */}
            <div className="border-b border-gray-200">
              <div className="flex space-x-6 px-6">
                <button
                  onClick={() => setActiveTab('description')}
                  className={`py-4 px-2 border-b-2 font-medium text-sm ${
                    activeTab === 'description'
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Description
                </button>
                <button
                  onClick={() => setActiveTab('editorial')}
                  className={`py-4 px-2 border-b-2 font-medium text-sm ${
                    activeTab === 'editorial'
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Editorial
                </button>
                <button
                  onClick={() => setActiveTab('discussions')}
                  className={`py-4 px-2 border-b-2 font-medium text-sm ${
                    activeTab === 'discussions'
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Discussions
                </button>
              </div>
            </div>

            <div className="p-6">
              {activeTab === 'description' && (
                <div className="space-y-6">
                  <div>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      {problem.description}
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      {problem.detailedDescription}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Examples</h3>
                    {problem.examples.map((example, index) => (
                      <div key={index} className="bg-gray-50 rounded-lg p-4 mb-4">
                        <h4 className="font-medium text-gray-900 mb-2">Example {index + 1}:</h4>
                        <div className="space-y-2 text-sm">
                          <div>
                            <strong className="text-gray-700">Input:</strong>
                            <code className="ml-2 bg-gray-200 px-2 py-1 rounded">{example.input}</code>
                          </div>
                          <div>
                            <strong className="text-gray-700">Output:</strong>
                            <code className="ml-2 bg-gray-200 px-2 py-1 rounded">{example.output}</code>
                          </div>
                          <div>
                            <strong className="text-gray-700">Explanation:</strong>
                            <span className="ml-2 text-gray-600">{example.explanation}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Constraints</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                      {problem.constraints.map((constraint, index) => (
                        <li key={index} className="text-sm">{constraint}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Hints</h3>
                    <div className="space-y-2">
                      {problem.hints.map((hint, index) => (
                        <details key={index} className="bg-blue-50 rounded-lg p-4">
                          <summary className="cursor-pointer font-medium text-blue-900">
                            Hint {index + 1}
                          </summary>
                          <p className="mt-2 text-sm text-blue-800">{hint}</p>
                        </details>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'editorial' && (
                <div className="text-center py-8">
                  <div className="text-gray-400 mb-4">
                    <MessageSquare className="w-12 h-12 mx-auto" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Editorial Coming Soon</h3>
                  <p className="text-gray-600">We're working on creating detailed editorial content for this problem.</p>
                </div>
              )}

              {activeTab === 'discussions' && (
                <div className="text-center py-8">
                  <div className="text-gray-400 mb-4">
                    <MessageSquare className="w-12 h-12 mx-auto" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Join the Discussion</h3>
                  <p className="text-gray-600">Share your thoughts and solutions with the community.</p>
                </div>
              )}
            </div>
          </div>

          {/* Code Editor */}
          <div className="bg-white rounded-xl shadow-lg">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-gray-900">Code Editor</h2>
                <select
                  value={language}
                  onChange={(e) => {
                    setLanguage(e.target.value);
                    setCode(problem.initialCode[e.target.value] || '');
                  }}
                  className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="javascript">JavaScript</option>
                  <option value="python">Python</option>
                  <option value="java">Java</option>
                  <option value="cpp">C++</option>
                </select>
              </div>
              
              <CodeEditor
                value={code || problem.initialCode[language]}
                onChange={setCode}
                language={language}
              />
            </div>

            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <button
                    onClick={handleRunCode}
                    className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors flex items-center space-x-2"
                  >
                    <Play className="w-4 h-4" />
                    <span>Run</span>
                  </button>
                  <button
                    onClick={handleSubmit}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
                  >
                    <CheckCircle className="w-4 h-4" />
                    <span>Submit</span>
                  </button>
                </div>
                
                <div className="text-sm text-gray-500">
                  {problem.acceptance} acceptance rate
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Console Output</h3>
                <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm min-h-[100px]">
                  $ Ready to run your code...
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProblemDetails;