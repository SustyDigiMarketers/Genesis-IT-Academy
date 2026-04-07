export const ANSWERS: Record<string, any> = {
  '1': Array.from({ length: 100 }, (_, i) => i + 1),
  '2': 'ymedacATIsiseneG',
  '3': 150,
  '4': [1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'FizzBuzz', 16, 17, 'Fizz', 19, 'Buzz'],
  '5': 7,
  '6': true,
  '7': 99,
  '8': [0, 1, 1, 2, 3, 5, 8, 13, 21, 34],
};

export const checkAnswer = (problemId: string, userOutput: any): boolean => {
  const expected = ANSWERS[problemId];
  if (Array.isArray(expected) && Array.isArray(userOutput)) {
    return JSON.stringify(expected) === JSON.stringify(userOutput);
  }
  return expected === userOutput;
};
