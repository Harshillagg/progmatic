import { useSharedState } from './SharedStateContext';
import Split from '@uiw/react-split';
const CodeRight: React.FC = () => {
  const { programOutput } = useSharedState();
  const {programInput} = useSharedState();

// <div className="pt-20 text-black bg-white	">
//    Output: <pre>{programOutput}</pre>
// </div>
// </div>

  return (
    <div style={{width:'100%', height:'100%'}} className="pt-20 text-black">
      <Split mode='vertical'>
      <div style={{height:'50%'}} >
        <textarea
          className="w-full p-2"
          style={{height: '100%', resize: 'none'}}
          placeholder="Enter input here"
          onChange={(e) => programInput.current = e.target.value}
        />
      </div>
      <div style={{height:'50%'}} className="pl-2 bg-white">
        Output: <pre>{programOutput}</pre>
      </div>
      </Split>
    </div>
  );
};

export default CodeRight;
