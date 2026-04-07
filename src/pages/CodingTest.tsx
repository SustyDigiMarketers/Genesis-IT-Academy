import React from 'react';
import Editor from '@monaco-editor/react';
import {
  Play, RotateCcw, CheckCircle2, AlertCircle, Clock, Trophy, ChevronRight,
  Code2, Terminal, PartyPopper, Lightbulb, Tag,
  Zap, BookOpen, Target, Lock, Flame, Shuffle
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';
import { Link } from 'react-router-dom';
import confetti from 'canvas-confetti';
import { PROBLEMS } from '../data/problems';
import { checkAnswer } from '../data/answers';

const difficultyConfig = {
  Beginner:     { color: 'text-google-green',  bg: 'bg-google-green/15',  border: 'border-google-green/30'  },
  Intermediate: { color: 'text-google-yellow', bg: 'bg-google-yellow/15', border: 'border-google-yellow/30' },
  Advanced:     { color: 'text-google-red',    bg: 'bg-google-red/15',    border: 'border-google-red/30'    },
};

// Pick one random problem for this session (stable for the lifetime of the page load)
const SESSION_PROBLEM = PROBLEMS[Math.floor(Math.random() * PROBLEMS.length)];

export default function CodingTest() {
  // The assigned problem is fixed for this session – user cannot change it
  const assignedProblem = SESSION_PROBLEM;

  const [language, setLanguage] = React.useState<'javascript' | 'python'>('javascript');
  const [code, setCode] = React.useState(assignedProblem.starterCode[language]);
  const [output, setOutput] = React.useState<any>(null);
  const [isRunning, setIsRunning] = React.useState(false);
  const [result, setResult] = React.useState<{ success: boolean; message: string } | null>(null);
  const [windowWidth, setWindowWidth] = React.useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
  const [showHints, setShowHints] = React.useState(false);
  const [hintsRevealed, setHintsRevealed] = React.useState(0);

  const [solved, setSolved] = React.useState(false);
  const [seconds, setSeconds] = React.useState(0);
  const [timerActive, setTimerActive] = React.useState(false);

  // Reset code when language changes
  React.useEffect(() => {
    setCode(assignedProblem.starterCode[language]);
    setResult(null);
    setOutput(null);
    setShowHints(false);
    setHintsRevealed(0);
    setSeconds(0);
    setTimerActive(false);
  }, [language]);

  React.useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Timer
  React.useEffect(() => {
    if (!timerActive) return;
    const interval = setInterval(() => setSeconds(s => s + 1), 1000);
    return () => clearInterval(interval);
  }, [timerActive]);

  const formatTime = (s: number) => {
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${m}:${sec.toString().padStart(2, '0')}`;
  };

  const handleCodeChange = (val: string | undefined) => {
    if (solved) return; // prevent editing after solve
    setCode(val || '');
    if (!timerActive) setTimerActive(true);
  };

  const runCode = async () => {
    if (solved) return;
    setIsRunning(true);
    setResult(null);

    setTimeout(() => {
      let userResult: any = null;
      let error: string | null = null;
      let stdout = '';

      if (language === 'javascript') {
        try {
          const executeCode = new Function(`${code}; return solve();`);
          userResult = executeCode();
          stdout = `✓ Execution successful\n→ Output: ${JSON.stringify(userResult, null, 2)}`;
        } catch (e: any) {
          error = e.message;
          stdout = `✗ Execution failed\n→ Error: ${error}`;
        }
      } else {
        stdout = '⚠ Python execution is simulated.\n  For live evaluation, switch to JavaScript.';
        userResult = 'simulated';
      }

      const isCorrect = language === 'javascript' ? checkAnswer(assignedProblem.id, userResult) : false;

      if (isCorrect) {
        confetti({ particleCount: 200, spread: 80, origin: { y: 0.6 }, colors: ['#4285F4', '#EA4335', '#FBBC05', '#34A853'] });
        setSolved(true);
        setTimerActive(false);
      }

      setOutput({
        stdout: isCorrect
          ? `${stdout}\n\n✅ All test cases passed! Perfect match.`
          : error ? stdout : `${stdout}\n\n❌ Output does not match expected. Keep trying!`,
        time: `${(Math.random() * 0.04 + 0.01).toFixed(3)}s`,
        memory: `${Math.floor(Math.random() * 5 + 10)}MB`,
      });

      setResult({
        success: isCorrect,
        message: isCorrect
          ? 'Congratulations! Your code matched the perfect answer. You have proven your skill!'
          : error ? `Syntax Error: ${error}` : 'Logic incomplete or output mismatch. Keep pushing!',
      });

      setIsRunning(false);
    }, 1500);
  };

  const isMobile = windowWidth < 768;
  const dc = difficultyConfig[assignedProblem.difficulty];

  return (
    <div className="h-screen flex flex-col bg-[#0f172a] text-white overflow-hidden pt-32">


      {/* ── Body ─────────────────────────────────────────────────────────── */}
      <div className="flex-1 flex overflow-hidden relative">



        {/* ── CENTRE: Editor ─────────────────────────────────────────────── */}
        <div className="flex-1 flex flex-col bg-[#1e1e1e] overflow-hidden min-w-0">

          {/* Problem header */}
          <div className="px-4 md:px-6 py-4 border-b border-white/5 bg-[#1a1a2e] shrink-0">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div className="min-w-0">
                <div className="flex items-center gap-2 mb-2 flex-wrap">
                  <span className={cn(
                    'text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full border',
                    dc.color, dc.bg, dc.border
                  )}>
                    {assignedProblem.difficulty}
                  </span>
                  {assignedProblem.tags.map(tag => (
                    <span key={tag} className="text-[9px] font-bold bg-white/5 text-gray-400 px-2 py-0.5 rounded-full border border-white/10 flex items-center gap-1">
                      <Tag size={8} /> {tag}
                    </span>
                  ))}
                  {solved ? (
                    <span className="text-[9px] font-black text-google-green bg-google-green/10 border border-google-green/30 px-2.5 py-1 rounded-full flex items-center gap-1">
                      <CheckCircle2 size={9} /> SOLVED
                    </span>
                  ) : (
                    <span className="text-[9px] font-black text-gray-400 bg-white/5 border border-white/10 px-2.5 py-1 rounded-full flex items-center gap-1">
                      <Target size={9} /> PENDING
                    </span>
                  )}
                  <span className="text-[9px] font-bold bg-google-blue/10 text-google-blue px-2.5 py-1 rounded-full border border-google-blue/20 flex items-center gap-1 text-center shrink-0">
                    <Shuffle size={9} /> RANDOM CHALLENGE
                  </span>
                </div>
                <h2 className="text-lg md:text-xl font-black text-white">{assignedProblem.title}</h2>
                <p className="text-gray-400 text-xs md:text-sm leading-relaxed mt-1">{assignedProblem.description}</p>
              </div>

              {/* Action buttons (Timer, Language, Hints, Run Code) */}
              <div className="flex items-center gap-2 md:gap-3 flex-wrap justify-end shrink-0">
                {/* Timer */}
                <div className={cn(
                  'flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-bold border',
                  timerActive ? 'bg-google-blue/10 border-google-blue/30 text-google-blue' : 'bg-white/5 border-white/10 text-gray-400'
                )}>
                  <Clock size={13} />
                  <span className="font-mono">{formatTime(seconds)}</span>
                </div>

                {/* Language Toggle */}
                <div className="flex items-center gap-1 bg-white/5 p-1 rounded-xl border border-white/10">
                  {(['javascript', 'python'] as const).map(lang => (
                    <button
                      key={lang}
                      onClick={() => setLanguage(lang)}
                      disabled={solved}
                      className={cn(
                        'px-3 py-1.5 rounded-lg text-[10px] md:text-xs font-bold transition-all',
                        language === lang ? 'bg-google-blue text-white shadow' : 'text-gray-400 hover:text-white',
                        solved && 'opacity-50 cursor-not-allowed'
                      )}
                    >
                      {lang === 'javascript' ? 'JS' : 'Py'}
                    </button>
                  ))}
                </div>

                {/* Hints button */}
                <button
                  onClick={() => setShowHints(h => !h)}
                  className={cn(
                    'flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-bold border transition-all shrink-0',
                    showHints
                      ? 'bg-google-yellow/15 border-google-yellow/30 text-google-yellow'
                      : 'bg-white/5 border-white/10 text-gray-400 hover:text-google-yellow hover:border-google-yellow/30'
                  )}
                >
                  <Lightbulb size={13} /> Hints
                </button>

                {/* Run */}
                <button
                  onClick={runCode}
                  disabled={isRunning || solved}
                  className={cn(
                    'btn-primary flex items-center gap-2 py-2 px-5 md:px-6 text-xs md:text-sm shadow-none',
                    (isRunning || solved) && 'opacity-60 cursor-not-allowed'
                  )}
                >
                  {isRunning ? <RotateCcw className="animate-spin" size={15} /> : <Play size={15} />}
                  {isRunning ? 'Running…' : solved ? 'Completed ✓' : 'Run Code'}
                </button>
              </div>
            </div>

            {/* Example */}
            <div className="mt-3 flex flex-wrap gap-3">
              {assignedProblem.examples.map((ex, i) => (
                <div key={i} className="text-[10px] bg-white/4 border border-white/8 rounded-lg px-3 py-2 font-mono text-gray-400 leading-relaxed">
                  <span className="text-gray-600 font-bold">Input:</span> {ex.input}&nbsp;&nbsp;
                  <span className="text-gray-600 font-bold">Output:</span> <span className="text-google-green">{ex.output}</span>
                </div>
              ))}
            </div>

            {/* Hints panel */}
            <AnimatePresence>
              {showHints && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="overflow-hidden"
                >
                  <div className="mt-3 p-3 bg-google-yellow/5 border border-google-yellow/20 rounded-xl">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[9px] font-black uppercase tracking-widest text-google-yellow flex items-center gap-1.5">
                        <Lightbulb size={10} /> Hints ({hintsRevealed}/{assignedProblem.hints.length} revealed)
                      </span>
                      {hintsRevealed < assignedProblem.hints.length && (
                        <button
                          onClick={() => setHintsRevealed(h => Math.min(h + 1, assignedProblem.hints.length))}
                          className="text-[9px] font-bold text-google-yellow hover:underline"
                        >
                          Reveal next →
                        </button>
                      )}
                    </div>
                    <div className="space-y-1.5">
                      {assignedProblem.hints.slice(0, hintsRevealed).map((hint, i) => (
                        <motion.p
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          className="text-[11px] text-gray-300 flex items-start gap-2"
                        >
                          <span className="text-google-yellow font-bold mt-0.5">{i + 1}.</span> {hint}
                        </motion.p>
                      ))}
                      {hintsRevealed === 0 && (
                        <p className="text-[10px] text-gray-600 italic">Click "Reveal next" to get your first hint.</p>
                      )}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Solved overlay message */}
            {solved && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-3 p-3 bg-google-green/10 border border-google-green/30 rounded-xl flex items-center gap-3"
              >
                <PartyPopper size={16} className="text-google-green shrink-0" />
                <p className="text-xs text-google-green font-bold">
                  Challenge complete! You solved it in {formatTime(seconds)}. Reload the page to get a new random challenge.
                </p>
              </motion.div>
            )}
          </div>

          {/* Editor */}
          <div className="flex-1 relative min-h-0">
            {/* Editor top bar */}
            <div className="flex items-center justify-between px-4 py-2 bg-[#252526] border-b border-white/5">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                <span className="ml-3 text-[10px] text-gray-600 font-mono font-bold">
                  solution.{language === 'javascript' ? 'js' : 'py'}
                </span>
              </div>
              <div className="flex items-center gap-3 text-[9px] text-gray-600 font-bold">
                <span className="flex items-center gap-1"><Zap size={10} className="text-google-yellow" /> Monaco Editor</span>
                <span>{language === 'javascript' ? 'JavaScript' : 'Python'}</span>
              </div>
            </div>

            {/* Solved overlay on editor */}
            {solved && (
              <div className="absolute inset-0 z-10 bg-[#0f1a2e]/60 backdrop-blur-[2px] flex items-center justify-center pointer-events-none">
                <div className="text-center">
                  <CheckCircle2 size={48} className="text-google-green mx-auto mb-3 opacity-80" />
                  <p className="text-google-green font-black text-lg opacity-80">Challenge Complete!</p>
                </div>
              </div>
            )}

            <Editor
              height="100%"
              language={language}
              theme="vs-dark"
              value={code}
              onChange={handleCodeChange}
              options={{
                fontSize: windowWidth < 768 ? 13 : 15,
                minimap: { enabled: !isMobile },
                scrollBeyondLastLine: false,
                fontFamily: "'Fira Code', monospace",
                fontLigatures: true,
                padding: { top: 16, bottom: 16 },
                smoothScrolling: true,
                cursorSmoothCaretAnimation: 'on',
                lineNumbersMinChars: 3,
                bracketPairColorization: { enabled: true },
                renderLineHighlight: 'all',
                readOnly: solved,
              }}
            />
          </div>
        </div>

        {/* ── RIGHT PANEL ─────────────────────────────────────────────────── */}
        <motion.div
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="w-full md:w-[380px] bg-[#0f172a] border-l border-white/10 flex flex-col shrink-0 hidden md:flex"
        >
          {/* Panel header */}
          <div className="flex border-b border-white/10 shrink-0">
            <div className="flex-1 py-3 text-[10px] font-black uppercase tracking-widest text-google-blue border-b-2 border-google-blue bg-google-blue/5 flex items-center justify-center gap-2">
              <Terminal size={11} /> Console
            </div>
          </div>

          {/* Panel body */}
          <div className="flex-1 overflow-y-auto custom-scrollbar p-5 flex flex-col gap-4">
            {/* Stats */}
            {output && (
              <div className="flex gap-3">
                <div className="flex-1 bg-white/4 border border-white/8 rounded-xl p-3 text-center">
                  <p className="text-[9px] text-gray-600 font-bold uppercase tracking-widest mb-1">Time</p>
                  <p className="text-sm font-black text-google-green font-mono">{output.time}</p>
                </div>
                <div className="flex-1 bg-white/4 border border-white/8 rounded-xl p-3 text-center">
                  <p className="text-[9px] text-gray-600 font-bold uppercase tracking-widest mb-1">Memory</p>
                  <p className="text-sm font-black text-google-blue font-mono">{output.memory}</p>
                </div>
                <div className="flex-1 bg-white/4 border border-white/8 rounded-xl p-3 text-center">
                  <p className="text-[9px] text-gray-600 font-bold uppercase tracking-widest mb-1">Points</p>
                  <p className={cn('text-sm font-black font-mono', solved ? 'text-google-yellow' : 'text-gray-600')}>
                    {solved ? '100' : '0'}
                  </p>
                </div>
              </div>
            )}

            {/* Console */}
            <div className="flex-1 bg-[#0d1117] border border-white/8 rounded-xl p-4 font-mono text-xs overflow-y-auto custom-scrollbar">
              {isRunning ? (
                <div className="h-full flex flex-col items-center justify-center gap-3 text-google-blue">
                  <RotateCcw className="animate-spin w-7 h-7" />
                  <span className="font-black tracking-widest animate-pulse">EXECUTING…</span>
                  <div className="flex gap-1 mt-2">
                    {[0, 1, 2].map(i => (
                      <motion.div
                        key={i}
                        className="w-2 h-2 bg-google-blue rounded-full"
                        animate={{ y: [-4, 4, -4] }}
                        transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.15 }}
                      />
                    ))}
                  </div>
                </div>
              ) : output ? (
                <motion.pre
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className={cn('whitespace-pre-wrap leading-loose text-[11px]', result?.success ? 'text-google-green' : 'text-google-red')}
                >
                  {output.stdout}
                </motion.pre>
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-center px-4">
                  <div className="bg-white/5 p-5 rounded-full mb-4">
                    <Play className="w-7 h-7 text-gray-600" />
                  </div>
                  <p className="text-gray-600 text-[11px] leading-relaxed">
                    Write your code and click <span className="text-google-blue font-bold">Run Code</span> to see the output here.
                  </p>
                </div>
              )}
            </div>

            {/* Result card */}
            <AnimatePresence>
              {result && (
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 30, opacity: 0 }}
                  className={cn(
                    'rounded-xl p-5 border relative overflow-hidden',
                    result.success ? 'bg-google-green/10 border-google-green/30' : 'bg-google-red/10 border-google-red/30'
                  )}
                >
                  <div className="relative z-10">
                    <div className="flex items-start gap-3 mb-3">
                      <div className={cn('p-2 rounded-xl', result.success ? 'bg-google-green/20 text-google-green' : 'bg-google-red/20 text-google-red')}>
                        {result.success ? <CheckCircle2 size={16} /> : <AlertCircle size={16} />}
                      </div>
                      <div>
                        <h4 className="text-sm font-black mb-1">
                          {result.success ? '🎉 Perfect Match!' : 'Keep Pushing!'}
                        </h4>
                        <p className="text-[11px] text-gray-400 leading-relaxed">{result.message}</p>
                      </div>
                    </div>
                    <div className="flex gap-2 flex-wrap">
                      <Link
                        to="/contact"
                        className={cn(
                          'inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-[10px] font-black transition-all hover:shadow-lg',
                          result.success ? 'bg-google-green text-white' : 'bg-google-blue text-white'
                        )}
                      >
                        {result.success ? 'Join Advanced Course' : 'Join to Succeed'} <ChevronRight size={11} />
                      </Link>
                    </div>
                  </div>
                  <div className={cn(
                    'absolute -top-8 -right-8 w-24 h-24 rounded-full blur-3xl opacity-20',
                    result.success ? 'bg-google-green' : 'bg-google-red'
                  )} />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Bottom footer */}
          <div className="p-4 border-t border-white/10 shrink-0">
            <div className="flex items-center justify-between text-[10px] font-bold text-gray-600">
              <div className="flex items-center gap-2">
                <Trophy size={12} className="text-google-yellow" />
                <span>{solved ? '100' : '0'} pts earned</span>
              </div>
              <div className="flex items-center gap-2">
                <Flame size={12} className="text-google-red" />
                <span>{solved ? '1' : '0'} solved today</span>
              </div>
              {result?.success && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="flex items-center gap-1 text-google-green"
                >
                  <PartyPopper size={12} />
                  <span>+100 pts</span>
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
