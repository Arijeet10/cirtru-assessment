const Navbar = () => {
  return (
    <>
      <header className="p-[0.2rem] border-b flex items-center justify-between">
        <div className="font-bold text-[calc(1.5rem+0.1vw)]">
          Cars<span className="text-indigo-500">Point</span>
        </div>
        <nav className="flex gap-[3vw] items-center justify-center text-[calc(0.8rem+0.1vw)] font-bold">
          <button className="hover:text-indigo-700 border-b border-transparent hover:border-indigo-700">
            About
          </button>
          <button className="hover:text-indigo-700 border-b border-transparent hover:border-indigo-700">
            Contact
          </button>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
