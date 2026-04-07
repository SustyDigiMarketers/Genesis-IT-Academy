export interface Problem {
  id: string;
  title: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  description: string;
  hints: string[];
  tags: string[];
  starterCode: { javascript: string; python: string; };
  examples: { input: string; output: string; }[];
}

export const PROBLEMS: Problem[] = [
  {
    id: '1',
    title: 'Print Numbers 1 to 100',
    difficulty: 'Beginner',
    description: 'Write a function that returns an array of numbers from 1 to 100.',
    hints: [
      'Use a for loop from 1 to 100.',
      'Push each number into an array and return it.',
      'Array.from({ length: 100 }, ...) can do it in one line.',
    ],
    tags: ['Arrays', 'Loops'],
    examples: [
      { input: 'solve()', output: '[1, 2, 3, ..., 100]' }
    ],
    starterCode: {
      javascript: 'function solve() {\n  const result = [];\n  // Write your code here\n  return result;\n}',
      python: 'def solve():\n  result = []\n  # Write your code here\n  return result'
    }
  },
  {
    id: '2',
    title: 'Reverse a String',
    difficulty: 'Intermediate',
    description: 'Write a function that takes the string "GenesisITAcademy" and returns it reversed.',
    hints: [
      'Strings in JS are iterable — try using split("") first.',
      'Array has a .reverse() method.',
      'Chain split → reverse → join to get the final string.',
    ],
    tags: ['Strings', 'Arrays'],
    examples: [
      { input: 'solve()', output: '"ymedacATIsiseneG"' }
    ],
    starterCode: {
      javascript: 'function solve() {\n  const str = "GenesisITAcademy";\n  // Write your code here\n}',
      python: 'def solve():\n  s = "GenesisITAcademy"\n  # Write your code here'
    }
  },
  {
    id: '3',
    title: 'Sum of Array',
    difficulty: 'Beginner',
    description: 'Write a function that takes an array [10, 20, 30, 40, 50] and returns the sum of its elements.',
    hints: [
      'Use a for loop to add each element to a running total.',
      'Array.reduce() is a concise solution.',
      'The expected sum is 150.',
    ],
    tags: ['Arrays', 'Math'],
    examples: [
      { input: 'solve([10, 20, 30, 40, 50])', output: '150' }
    ],
    starterCode: {
      javascript: 'function solve(arr) {\n  // Write your code here\n}',
      python: 'def solve(arr):\n  # Write your code here'
    }
  },
  {
    id: '4',
    title: 'FizzBuzz',
    difficulty: 'Beginner',
    description: 'Write a function that returns an array from 1 to 20. For multiples of 3, use "Fizz"; multiples of 5, use "Buzz"; both, use "FizzBuzz".',
    hints: [
      'Check divisibility using the modulo operator %.',
      'Order matters: check both (FizzBuzz) before checking each individually.',
      'Build an array and push the right value per iteration.',
    ],
    tags: ['Loops', 'Logic'],
    examples: [
      { input: 'solve()', output: '[1, 2, "Fizz", 4, "Buzz", ...]' }
    ],
    starterCode: {
      javascript: 'function solve() {\n  const result = [];\n  // Write your code here\n  return result;\n}',
      python: 'def solve():\n  result = []\n  # Write your code here\n  return result'
    }
  },
  {
    id: '5',
    title: 'Count Vowels',
    difficulty: 'Intermediate',
    description: 'Write a function that counts the number of vowels (a, e, i, o, u) in the string "GenesisITAcademy". Return the count as a number.',
    hints: [
      'Convert the string to lowercase before checking.',
      'Iterate over each character and check if it is in "aeiou".',
      'The expected count is 7.',
    ],
    tags: ['Strings', 'Logic'],
    examples: [
      { input: 'solve()', output: '7' }
    ],
    starterCode: {
      javascript: 'function solve() {\n  const str = "GenesisITAcademy";\n  // Write your code here\n}',
      python: 'def solve():\n  s = "GenesisITAcademy"\n  # Write your code here'
    }
  },
  {
    id: '6',
    title: 'Palindrome Check',
    difficulty: 'Intermediate',
    description: 'Write a function that checks if the string "racecar" is a palindrome. Return true if it is, false otherwise.',
    hints: [
      'A palindrome reads the same forwards and backwards.',
      'You can reverse the string and compare it to the original.',
      '"racecar" reversed is still "racecar" → true.',
    ],
    tags: ['Strings', 'Logic'],
    examples: [
      { input: 'solve()', output: 'true' }
    ],
    starterCode: {
      javascript: 'function solve() {\n  const str = "racecar";\n  // Write your code here\n}',
      python: 'def solve():\n  s = "racecar"\n  # Write your code here'
    }
  },
  {
    id: '7',
    title: 'Find the Maximum',
    difficulty: 'Beginner',
    description: 'Write a function that returns the largest number in the array [42, 7, 99, 3, 56, 17].',
    hints: [
      'You can use Math.max(...arr) in JavaScript.',
      'Or loop through and track the current maximum.',
      'The expected answer is 99.',
    ],
    tags: ['Arrays', 'Math'],
    examples: [
      { input: 'solve([42, 7, 99, 3, 56, 17])', output: '99' }
    ],
    starterCode: {
      javascript: 'function solve(arr) {\n  // Write your code here\n}',
      python: 'def solve(arr):\n  # Write your code here'
    }
  },
  {
    id: '8',
    title: 'Fibonacci Sequence',
    difficulty: 'Advanced',
    description: 'Write a function that returns the first 10 numbers of the Fibonacci sequence as an array.',
    hints: [
      'Start with [0, 1] and each next number is the sum of the two before it.',
      'Use a loop that runs until you have 10 elements.',
      'Expected: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]',
    ],
    tags: ['Arrays', 'Math', 'Recursion'],
    examples: [
      { input: 'solve()', output: '[0, 1, 1, 2, 3, 5, 8, 13, 21, 34]' }
    ],
    starterCode: {
      javascript: 'function solve() {\n  // Write your code here\n}',
      python: 'def solve():\n  # Write your code here'
    }
  }
];
