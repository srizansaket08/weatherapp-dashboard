const Layout = ({ children }) => (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-indigo-700 dark:from-gray-900 dark:to-black text-white dark:text-gray-200 transition-colors duration-300 px-4 py-10 flex flex-col items-center">
      {children}
    </div>
  );
  
  export default Layout;
  