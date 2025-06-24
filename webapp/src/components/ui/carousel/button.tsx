export default ({
  onClick,
  children,
}: {
  onClick: () => void;
  children: React.ReactElement;
}) => (
  <button
    className="bg-white/50 hover:bg-white p-2 rounded-full shadow-md z-10 cursor-pointer"
    onClick={onClick}
  >
    {children}
  </button>
);
