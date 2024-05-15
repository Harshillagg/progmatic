import React, { useState } from 'react';
import ResizablePanels from '../components/ResizablePanels';
import CodeLeft from '../components/CodeLeft';
import CodeRight from '../components/CodeRight';

const Code: React.FC = () => {
    const [output, setOutput] = useState("");

    const handleOutput = (newOutput: string) => {
        setOutput(newOutput);
    };

    return (
        <div className="h-screen">
            <ResizablePanels
                leftComponent={() => <CodeLeft onRun={handleOutput} />}
                rightComponent={() => <CodeRight output={output} />}
            />
        </div>
    );
};

export default Code;
