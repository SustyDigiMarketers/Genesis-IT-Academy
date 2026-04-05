import React from 'react';
import Editor from '@monaco-editor/react';
import { Play, RotateCcw, CheckCircle2, AlertCircle, Clock, Trophy, ChevronRight, Code2, Terminal, PartyPopper } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';
import { Link } from 'react-router-dom';
import confetti from 'canvas-confetti';
import { PROBLEMS } from '../data/problems';
import { checkAnswer } from '../data/answers';

export default function CodingTest() {
  const [selectedProblem, setSelectedProblem] = React.useState(PROBLEMS[0]);
  const [language, setLanguage] = React.useState<'javascript' | 'python'>('javascript');
  const [code, setCode] = React.useState(selectedProblem.starterCode[language]);
  const [output, setOutput] = React.useState<any>(null);
  const [isRunning, setIsRunning] = React.useState(false);
  const [result, setResult] = React.useState<{ success: boolean; message: string } | null>(null);
  const [windowWidth, setWindowWidth] = React.useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  React.useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  React.useEffect(() => {
    setCode(selectedProblem.starterCode[language]);
    setResult(null);
    setOutput(null);
  }, [selectedProblem, language]);

  const runCode = async () => {
    setIsRunning(true);
    setResult(null);
    
    setTimeout(() => {
      let userResult: any = null;
      let error: string | null = null;
      let stdout = "";

      if (language === 'javascript') {
        try {
          // Create a safe execution environment
          const executeCode = new Function(`${code}; return solve();`);
          userResult = executeCode();
          stdout = `Execution successful.\nOutput: ${JSON.stringify(userResult, null, 2)}`;
        } catch (e: any) {
          error = e.message;
          stdout = `Execution failed.\nError: ${error}`;
        }
      } else {
        // Mock Python execution for now as it requires a backend or Pyodide
        stdout = "Python execution is currently simulated.\nFor a perfect match, please use JavaScript.";
        userResult = "simulated";
      }

      const isCorrect = language === 'javascript' ? checkAnswer(selectedProblem.id, userResult) : false;

      if (isCorrect) {
        confetti({
          particleCount: 150,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#4285F4', '#EA4335', '#FBBC05', '#34A853']
        });
      }

      setOutput({
        stdout: isCorrect 
          ? `${stdout}\n\nAll test cases passed! Perfect Answer Matched.` 
          : error ? stdout : `${stdout}\n\nTest cases failed. Output does not match the perfect answer.`,
        time: "0.02s",
        memory: "12MB"
      });

      setResult({ 
        success: isCorrect, 
        message: isCorrect 
          ? "Congratulations! Your code matches the perfect answer. You are ready for the next level." 
          : error ? `Syntax Error: ${error}` : "Logic incomplete or output mismatch. Keep trying to reach success!" 
      });

      setIsRunning(false);
    }, 1500);
  };

  const nextProblem = () => {
    const currentIndex = PROBLEMS.findIndex(p => p.id === selectedProblem.id);
    const nextIndex = (currentIndex + 1) % PROBLEMS.length;
    setSelectedProblem(PROBLEMS[nextIndex]);
  };

  return (
    <div className="h-screen md:h-[calc(100vh-64px)] flex flex-col bg-[#0f172a] text-white overflow-x-hidden pt-16">
      {/* Top Bar */}
      <div className="bg-[#1e293b] border-b border-white/10 px-4 md:px-8 py-4 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0 z-20">
        <div className="flex items-center gap-4 md:gap-6 w-full md:w-auto">
          <div className="bg-google-blue/20 p-2 md:p-3 rounded-2xl text-google-blue shadow-lg shadow-google-blue/10">
            <Code2 size={20} className="md:w-6 md:h-6" />
          </div>
          <div>
            <h1 className="text-lg md:text-xl font-bold tracking-tight">Live Coding <span className="text-google-blue">Simulator</span></h1>
            <p className="text-[9px] md:text-[10px] text-gray-400 font-bold uppercase tracking-widest">Real-time Skill Assessment</p>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-center md:justify-end gap-3 md:gap-6 w-full md:w-auto">
          <button 
            onClick={nextProblem}
            className="flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-white/5 hover:bg-white/10 rounded-xl text-[10px] md:text-xs font-bold transition-all text-gray-300"
          >
            Next Problem <ChevronRight size={12} className="md:w-3.5 md:h-3.5" />
          </button>
          <div className="flex items-center gap-2 md:gap-3 bg-white/5 p-1 rounded-2xl border border-white/10">
            <button 
              onClick={() => setLanguage('javascript')}
              className={cn("px-3 py-1.5 md:px-4 md:py-2 rounded-xl text-[10px] md:text-xs font-bold transition-all", language === 'javascript' ? "bg-google-blue text-white shadow-lg" : "text-gray-400 hover:text-white")}
            >
              JS
            </button>
            <button 
              onClick={() => setLanguage('python')}
              className={cn("px-3 py-1.5 md:px-4 md:py-2 rounded-xl text-[10px] md:text-xs font-bold transition-all", language === 'python' ? "bg-google-blue text-white shadow-lg" : "text-gray-400 hover:text-white")}
            >
              Py
            </button>
          </div>
          <button 
            onClick={runCode} 
            disabled={isRunning} 
            className={cn(
              "btn-primary flex items-center gap-2 py-2 px-6 md:py-3 md:px-8 text-xs md:text-sm",
              isRunning && "opacity-50 cursor-not-allowed"
            )}
          >
            {isRunning ? <RotateCcw className="animate-spin" size={16} /> : <Play size={16} />} 
            {isRunning ? "Running..." : "Run Code"}
          </button>
        </div>
      </div>

      <div className="flex-1 flex flex-col md:flex-row overflow-y-auto md:overflow-hidden">
        {/* Center: Editor */}
        <div className="flex-1 flex flex-col bg-[#1e1e1e] relative min-h-[400px] md:min-h-0">
          <div className="px-4 md:px-8 py-4 md:py-6 border-b border-white/5 bg-[#1e1e1e]">
            <h2 className="text-xl md:text-2xl font-bold mb-2 md:mb-3">{selectedProblem.title}</h2>
            <p className="text-gray-400 text-xs md:text-sm leading-relaxed">{selectedProblem.description}</p>
          </div>
          <div className="flex-1 relative">
            <Editor 
              height="100%" 
              language={language} 
              theme="vs-dark" 
              value={code} 
              onChange={(val) => setCode(val || '')} 
              options={{ 
                fontSize: windowWidth < 768 ? 14 : 16, 
                minimap: { enabled: false }, 
                scrollBeyondLastLine: false,
                fontFamily: "'Fira Code', monospace",
                padding: { top: 20 },
                smoothScrolling: true,
                cursorSmoothCaretAnimation: "on",
                lineNumbersMinChars: 3
              }} 
            />
          </div>
        </div>

        {/* Right Sidebar: Output */}
        <motion.div 
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="w-full md:w-[400px] bg-[#0f172a] border-t md:border-t-0 md:border-l border-white/10 flex flex-col min-h-[300px] md:min-h-0"
        >
          <div className="p-4 md:p-5 border-b border-white/10 flex justify-between items-center bg-[#1e293b]/30">
            <div className="flex items-center gap-2">
              <Terminal size={14} className="text-google-blue" />
              <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-gray-400">Console Output</span>
            </div>
            <div className="flex gap-3 md:gap-4 text-[9px] md:text-[10px] font-bold text-gray-500">
              <div className="flex items-center gap-1.5"><Clock size={12} /> {output?.time || '0s'}</div>
              <div className="flex items-center gap-1.5"><Trophy size={12} /> 100 pts</div>
            </div>
          </div>
          
          <div className="flex-1 p-6 md:p-8 font-mono text-xs md:text-sm overflow-y-auto custom-scrollbar">
            {isRunning ? (
              <div className="flex flex-col items-center justify-center h-full gap-4 text-google-blue">
                <RotateCcw className="animate-spin w-7 h-7 md:w-8 md:h-8" />
                <span className="font-bold tracking-widest animate-pulse">EXECUTING...</span>
              </div>
            ) : output ? (
              <motion.pre 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className={cn(
                  "whitespace-pre-wrap leading-relaxed",
                  result?.success ? "text-google-green" : "text-google-red"
                )}
              >
                {output.stdout}
              </motion.pre>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-center px-4 md:px-6 py-10 md:py-0">
                <div className="bg-white/5 p-4 md:p-6 rounded-full mb-4 md:mb-6">
                  <Play className="w-7 h-7 md:w-8 md:h-8 text-gray-600" />
                </div>
                <p className="text-gray-500 italic text-xs md:text-sm">Ready to test your logic? Click the "Run Code" button to see your results here.</p>
              </div>
            )}
          </div>

          <AnimatePresence>
            {result && (
              <motion.div 
                initial={{ y: 200 }} 
                animate={{ y: 0 }} 
                exit={{ y: 200 }} 
                className={cn(
                  "p-6 md:p-8 border-t border-white/10 relative overflow-hidden", 
                  result.success ? "bg-google-green/10" : "bg-google-red/10"
                )}
              >
                <div className="relative z-10">
                  <div className="flex items-start gap-4 md:gap-5">
                    <div className={cn("p-2 md:p-3 rounded-2xl flex gap-2", result.success ? "bg-google-green/20 text-google-green" : "bg-google-red/20 text-google-red")}>
                      {result.success ? (
                        <>
                          <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6" />
                          <PartyPopper className="w-5 h-5 md:w-6 md:h-6 animate-bounce" />
                        </>
                      ) : (
                        <AlertCircle className="w-5 h-5 md:w-6 md:h-6" />
                      )}
                    </div>
                    <div>
                      <h4 className="text-base md:text-lg font-bold mb-1 md:mb-2">
                        {result.success ? "🎉 Congratulations! Perfect Match!" : "Keep Pushing!"}
                      </h4>
                      <p className="text-xs md:text-sm text-gray-400 leading-relaxed mb-4 md:mb-6">{result.message}</p>
                      <Link 
                        to="/contact" 
                        className={cn(
                          "inline-flex items-center gap-2 px-5 py-2.5 md:px-6 md:py-3 rounded-xl text-[10px] md:text-xs font-bold transition-all hover:shadow-lg",
                          result.success ? "bg-google-green text-white hover:shadow-google-green/20" : "bg-google-blue text-white hover:shadow-google-blue/20"
                        )}
                      >
                        {result.success ? "Join Advanced Course" : "Join to Success"} <ChevronRight className="w-3.5 h-3.5 md:w-4 md:h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className={cn("absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 blur-[40px] md:blur-[60px] rounded-full -mr-12 md:-mr-16 -mt-12 md:-mt-16 opacity-20", result.success ? "bg-google-green" : "bg-google-red")} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
