import Header from "./Header";

interface ILayout {
  children: React.ReactNode;
}

const Layout = ({ children }: ILayout) => {
  return (
    <div className="flex flex-col w-full h-screen bg-gradient-to-tr from-gray-500 to-gray-800">
      <Header />
      <div className="flex flex-1 justify-center items-center w-full">
        {children}
      </div>
    </div>
  );
};

export default Layout;
