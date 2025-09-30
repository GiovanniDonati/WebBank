import Card from "./Card";
import Header from "./Header";

const Layout = () => {
  return (
    <>
      <Header />
      <div className="flex items-center justify-around h-5/6 bg-white">
        <Card id={123} paragraph="Conta:" details="Giovanni Donati" />
        <Card id={123} paragraph="Saldo:" details="R$ 500" />
      </div>
    </>
  );
};

export default Layout;
