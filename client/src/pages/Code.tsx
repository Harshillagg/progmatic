import React from 'react';
import ResizablePanels from '../components/ResizablePanels';
import CodeLeft from '../components/CodeLeft';
import CodeRight from '../components/CodeRight';
import { SharedStateProvider } from '../components/SharedStateContext';

const Code: React.FC = () => {
    return (
        <SharedStateProvider>
        <div className="h-screen">
            <ResizablePanels
                leftComponent={() => <CodeLeft />}
                rightComponent={() => <CodeRight />}
            />
        </div>
        </SharedStateProvider>
    );
};

export default Code;
