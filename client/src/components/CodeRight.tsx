const CodeRight: React.FC<{ output: string }> = ({ output }) => {
  return (
      <div className="pt-20 text-black">
          Output: <pre>{output}</pre>
      </div>
  );
};

export default CodeRight;
