import Wallet from "./Wallet";

function Header() {
  return (
    <header className="header">
      <div className="flex justify-between items-center">
        <p className="font-bold uppercase">Swap</p>
        <div className="flex items-center gap-4">
          <Wallet />
        </div>
      </div>
    </header>
  );
}

export default Header;
