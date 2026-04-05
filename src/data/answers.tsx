export const ANSWERS: Record<string, any> = {
  '1': Array.from({ length: 100 }, (_, i) => i + 1),
  '2': 'ymedacAved',
  '3': 150
};

export const checkAnswer = (problemId: string, userOutput: any): boolean => {
  const expected = ANSWERS[problemId];
  if (Array.isArray(expected) && Array.isArray(userOutput)) {
    return JSON.stringify(expected) === JSON.stringify(userOutput);
  }
  return expected === userOutput;
};
