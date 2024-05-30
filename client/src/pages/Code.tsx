import React from 'react';
import CodeLeft from '../components/CodeLeft';
import CodeRight from '../components/CodeRight';
import { SharedStateProvider } from '../components/SharedStateContext';
import Split from '@uiw/react-split';

const Code: React.FC = () => {
    return (
        <SharedStateProvider>
            <Split style={{ height: '100%', width: '100%', border: '1px solid #d5d5d5', borderRadius: 3 }}>
            <div style={{width:'50%'}}>
                <CodeLeft />
            </div>
            <div style={{width:'50%'}}>
                <CodeRight />
            </div>
            </Split>
        </SharedStateProvider>
    );
};

export default Code;
