import { useState } from 'react'
import Editor from '@monaco-editor/react';

function Code() {
  const [language, setLanguage] = useState("javascript");

  return (
    <div>
      <select style={{backgroundColor: 'black'}} onChange={(e) => setLanguage(e.target.value)} value={language}>
        <option value="javascript">JavaScript</option>
        <option value="python">Python</option>
        <option value="java">Java</option>
        <option value="cpp">C++</option>
      </select>
      <Editor
        height="90vh"
        language={language}
        defaultValue="//Some Code"
        theme='vs-dark'
      />
    </div>
  );
}

export default Code;