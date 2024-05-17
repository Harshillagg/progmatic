interface CodeRightProps {
  output: string;
}

const CodeRight: React.FC<CodeRightProps> = ({ output }) => {

  return (
      <div className="pt-20 text-black">
          Output: <pre>{output}</pre>
      </div>
  );
};

export default CodeRight;
