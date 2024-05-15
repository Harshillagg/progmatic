import { useState, useRef, useEffect, useMemo } from 'react';
import Editor, { loader } from '@monaco-editor/react';
import axios from 'axios';

interface LanguageMapping {
  [key: string]: number;
}

interface CodeLeftProps {
  onRun: (output: string) => void;
}

const languageMapping: LanguageMapping = {
  "java": 62,
  "cpp": 54,
  "python": 71,
  "javascript": 63
};

const CodeLeft: React.FC<CodeLeftProps> = ({ onRun }) => {
  const [language, setLanguage] = useState("java");
  const editorRef = useRef<any>(null);
  const apikey = import.meta.env.VITE_JUDGE0_API_KEY;

  const handleEditorDidMount = (editor: any) => {
    editorRef.current = editor;
  };

  useEffect(() => {
    loader.init()
    // .then(monaco => {
    // console.log('Monaco instance:', monaco);
    // });
  }, [])

  const runCode = async () => {
    if (editorRef.current) {
      const sourceCode = editorRef.current.getValue();
      const languageId = languageMapping[language];
      try {
        const { data } = await axios.post('https://judge0-ce.p.rapidapi.com/submissions', {
          source_code: btoa(sourceCode),
          language_id: languageId,
          stdin: "",
        }, {
          headers: {
            'Content-Type': 'application/json',
            'X-RapidAPI-Key': apikey,
            'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com'
          },
          params: {
            base64_encoded: 'true',
            fields: '*'
          }
        });

        const { data: resultData } = await axios.get(`https://judge0-ce.p.rapidapi.com/submissions/${data.token}`, {
          headers: {
            'X-RapidAPI-Key': apikey,
            'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com'
          },
          params: { base64_encoded: 'true' }
        });

        onRun(resultData.stdout ? atob(resultData.stdout) : "There is an error in code.");
      } catch (error) {
        console.error('Failed to execute code:', error);
        onRun("Error: Unable to execute code.");
      }
    }
  };

  const editorComponent = useMemo(() => (
    <Editor
      height="80vh"
      language={language}
      defaultValue="// Type some code here..."
      theme='vs-dark'
      onMount={handleEditorDidMount}
    />
  ), [language, handleEditorDidMount]);

  return (
    <div className="pt-20">
      <div className='flex justify-between'>
        <select
          className="bg-black text-white rounded hover:bg-zinc-900 py-2 px-4 m-1 cursor-pointer"
          onChange={(e) => setLanguage(e.target.value)}
          value={language}
        >
          <option value="java">Java</option>
          <option value="cpp">C++</option>
          <option value="python">Python</option>
          <option value="javascript">JavaScript</option>
        </select>
        <button
          className="bg-black hover:bg-zinc-900 m-1 text-white font-bold py-2 px-4 rounded"
          onClick={runCode}
        >
          Run
        </button>
      </div>
      {editorComponent}
    </div>
  );
}

export default CodeLeft;
