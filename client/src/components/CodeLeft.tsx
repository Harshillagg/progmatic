import { useState, useRef, useEffect } from 'react';
import Editor, { loader } from '@monaco-editor/react';

function CodeLeft() {
  const [language, setLanguage] = useState("java");
  const editorRef = useRef<any>(null);

  const handleEditorDidMount = (editor: any) => {
    editorRef.current = editor;
  };

  useEffect(() => {
    loader.init()
      // .then(monaco => {
        // console.log('Monaco instance:', monaco);
      // });
  }, [])

  const runCode = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getValue());
    }
  };

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
      <Editor
        height="80vh"
        language={language}
        defaultValue="// Type some code here..."
        theme='vs-dark'
        onMount={handleEditorDidMount}
      />
    </div>
  );
}

export default CodeLeft;
