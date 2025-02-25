import { useAccount, useConnect, useDisconnect } from "wagmi";
import Button from "./components/Button";
import { useState } from "react";

function Wallet() {
  const [connectClicked, setConnectClicked] = useState(false);
  const { isConnected } = useAccount();

  return (
    <>
      {connectClicked
        ? !isConnected && <WalletOptions />
        : !isConnected && (
            <Button onClick={() => setConnectClicked(!connectClicked)}>
              Connect
            </Button>
          )}
      {isConnected && <Account />}
    </>
  );
}

function WalletOptions() {
  const { connectors, connect } = useConnect();
  return connectors.map((connector) => (
    <button key={connector.id} onClick={() => connect({ connector })}>
      {connector.name}
    </button>
  ));
}

function Account() {
  const { address } = useAccount();
  const { disconnect } = useDisconnect();

  return (
    <div>
      <p>{address}</p>
      <Button onClick={disconnect}>X</Button>
    </div>
  );
}

export default Wallet;
