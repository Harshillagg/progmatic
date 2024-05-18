import { useSharedState } from './SharedStateContext';

const CodeRight: React.FC = () => {
  const { programOutput } = useSharedState();
  const {programInput} = useSharedState();

  return (
    <>
      <div className="pt-20 text-black">
        {/* Input text box */}
        <textarea
          className="w-full h-32 p-2"
          placeholder="Enter input here"
          onChange={(e) => programInput.current = e.target.value}
        />
      </div>
      <div className="pt-20 text-black">
          Output: <pre>{programOutput}</pre>
      </div>
    </>
  );
};

export default CodeRight;
