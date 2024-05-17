import { useSharedState } from './SharedStateContext';

const CodeRight: React.FC = () => {
  const { programOutput } = useSharedState();

  return (
      <div className="pt-20 text-black">
          Output: <pre>{programOutput}</pre>
      </div>
  );
};

export default CodeRight;
