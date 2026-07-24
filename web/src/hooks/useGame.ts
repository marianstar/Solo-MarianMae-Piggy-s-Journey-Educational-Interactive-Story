"use client";

import { useState } from "react";
import { Wallet } from "@/types/game";
import { story } from "@/data/story";

export default function useGame() {
  const [day, setDay] = useState(0);

  const [wallet, setWallet] = useState<Wallet>({
    balance: 20,
    goal: 120,
    transactions: ["⭐ Received 20 XLM (Allowance)"]
  });

  const [lesson, setLesson] = useState("");

  const [finished, setFinished] = useState(false);
  const [gameResult, setGameResult] = useState<"win" | "lose" | null>(null);

  function choose(choiceIndex: number) {
    const current = story[day];
    const choice = current.choices[choiceIndex];

    const newBalance = wallet.balance + choice.walletChange;

    setWallet((prev) => ({
      ...prev,
      balance: newBalance,
      transactions: [
        ...prev.transactions,
        `${choice.walletChange >= 0 ? "+" : ""}${choice.walletChange} XLM`
      ]
    }));

    setLesson(choice.lesson);

    // WIN
    if (newBalance >= wallet.goal) {
      setGameResult("win");
      setFinished(true);
      return;
    }

    // LOSE
    if (newBalance <= 0) {
      setGameResult("lose");
      setFinished(true);
      return;
    }

    // NEXT STORY
    if (day < story.length - 1) {
      setDay(day + 1);
    } else {
      setFinished(true);
    }
  }

  return {
    story,
    day,
    wallet,
    lesson,
    choose,
    finished,
    gameResult
  };
}