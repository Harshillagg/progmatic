import { useState, useRef, useEffect, useMemo } from 'react';
import Editor, { loader } from '@monaco-editor/react';
import axios from 'axios';
import { useSharedState } from './SharedStateContext';

interface LanguageMapping {
  [key: string]: number;
}

const languageMapping: LanguageMapping = {
  "java": 62,
  "cpp": 54,
  "python": 71,
  "javascript": 63
};
const handleResult = (resultData: any) => {
  if (resultData.status.id != 3) {
    return `There is an error in code. \n${atob(resultData.compile_output)}`;
  }
  return resultData.stdout ? atob(resultData.stdout) : "There is no output.";
}
const CodeLeft: React.FC = () => {
  const [language, setLanguage] = useState("cpp");
  const editorRef = useRef<any>(null);
  const apikey = import.meta.env.VITE_JUDGE0_API_KEY;
  const {setProgramOutput, programInput} = useSharedState();

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
      setProgramOutput("Submitting Code...")
      try {
        const { data } = await axios.post('https://judge0-ce.p.rapidapi.com/submissions', {
          source_code: btoa(sourceCode),
          language_id: languageId,
          stdin: btoa(programInput.current),
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

        // Check the status of the code execution every 2 seconds if the status is 2.

        let { data: resultData } = await axios.get(`https://judge0-ce.p.rapidapi.com/submissions/${data.token}`, {
          headers: {
            'X-RapidAPI-Key': apikey,
            'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com'
          },
          params: { base64_encoded: 'true' }
        });

        setProgramOutput("Running code...");
        while(resultData.status.id === 2) {
          await new Promise(resolve => setTimeout(resolve, 2000));
          const { data: tempData } = await axios.get(`https://judge0-ce.p.rapidapi.com/submissions/${data.token}`, {
            headers: {
              'X-RapidAPI-Key': apikey,
              'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com'
            },
            params: { base64_encoded: 'true' }
          });
          resultData = tempData;
        }
        setProgramOutput(handleResult(resultData));
      } catch (error) {
        console.error('Failed to execute code:', error);
        setProgramOutput("Failed to execute code.");
      }
    }
  };

  // In future we can store the code in the format questionId_language, for now it is just stored with language as key.
  const storeCode = () => {
    if (editorRef.current) {
      localStorage.setItem(language, editorRef.current.getValue());
    }
  }

  const editorComponent = useMemo(() => (
    <Editor
      height="80vh"
      language={language}
      value= {localStorage.getItem(language) || ""}
      theme='vs-dark'
      onMount={handleEditorDidMount}
      onChange={storeCode}
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
