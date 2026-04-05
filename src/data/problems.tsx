export interface Problem {
  id: string;
  title: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  description: string;
  starterCode: { javascript: string; python: string; };
}

export const PROBLEMS: Problem[] = [
  {
    id: '1',
    title: 'Print Numbers 1 to 100',
    difficulty: 'Beginner',
    description: 'Write a function that returns an array of numbers from 1 to 100.',
    starterCode: {
      javascript: 'function solve() {\n  const result = [];\n  // Write your code here\n  return result;\n}',
      python: 'def solve():\n  result = []\n  # Write your code here\n  return result'
    }
  },
  {
    id: '2',
    title: 'Reverse a String',
    difficulty: 'Intermediate',
    description: 'Write a function that takes a string "DevAcademy" and returns it reversed.',
    starterCode: {
      javascript: 'function solve(str) {\n  // Write your code here\n}',
      python: 'def solve(s):\n  # Write your code here'
    }
  },
  {
    id: '3',
    title: 'Sum of Array',
    difficulty: 'Beginner',
    description: 'Write a function that takes an array [10, 20, 30, 40, 50] and returns the sum of its elements.',
    starterCode: {
      javascript: 'function solve(arr) {\n  // Write your code here\n}',
      python: 'def solve(arr):\n  # Write your code here'
    }
  }
];
