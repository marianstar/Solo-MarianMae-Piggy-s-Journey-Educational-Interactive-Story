import { Wallet } from "@/types/game";

interface WalletProps {
  wallet: Wallet;
}

export default function WalletCard({
  wallet,
}: WalletProps) {
  return (
    <div className="border rounded-xl p-5 shadow-md space-y-3">

      <h2 className="text-2xl font-bold">
        ⭐ Wallet
      </h2>

      <p>
        <strong>Balance:</strong>{" "}
        {wallet.balance} XLM
      </p>

      <p>
        <strong>Goal:</strong>{" "}
        {wallet.goal} XLM
      </p>

      <hr />

      <h3 className="font-semibold">
        Transactions
      </h3>

      <ul className="space-y-1 text-sm">

        {wallet.transactions.map((item, index) => (

          <li key={index}>
            {item}
          </li>

        ))}

      </ul>

    </div>
  );
}