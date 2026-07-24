import { StoryEvent } from "@/types/game";

export const story: StoryEvent[] = [
  {
    id: 1,
    day: 1,
    title: "🍬 Bubble Tea Temptation",
    description:
      "🐷 Mom gives you 20 XLM before school.\n\nAfter class, your friends invite you to buy bubble tea for 10 XLM.\n\nWhat will you do?",
    choices: [
      {
        text: "🧋 Buy Bubble Tea",
        walletChange: -10,
        lesson:
          "Treating yourself is okay sometimes—but remember to save for bigger goals too!"
      },
      {
        text: "💰 Save My Money",
        walletChange: 0,
        lesson:
          "Great job! Small savings today become big dreams tomorrow."
      }
    ]
  },

  {
    id: 2,
    day: 2,
    title: "📚 School Supplies",
    description:
      "Your notebook is almost full.\n\nA new notebook costs 15 XLM.",
    choices: [
      {
        text: "📖 Buy Notebook",
        walletChange: -15,
        lesson:
          "School supplies are NEEDS. Spending on needs is smart!"
      },
      {
        text: "❌ Don't Buy",
        walletChange: 0,
        lesson:
          "Sometimes delaying important purchases can cause bigger problems."
      }
    ]
  },

  {
    id: 3,
    day: 3,
    title: "🍦 Ice Cream Truck",
    description:
      "The ice cream truck parks outside your school after class. It costs 15 XLM!",
    choices: [
      {
        text: "🍦 Buy Ice Cream",
        walletChange: -15,
        lesson:
          "Buying treats every day can slow down your savings."
      },
      {
        text: "💧 Drink the Water You Brought",
        walletChange: 5,
        lesson:
          "Bringing your own snacks or drinks helps you save money."
      }
    ]
  },

  {
    id: 4,
    day: 4,
    title: "🎂 Birthday Surprise",
    description:
      "Today is your birthday! Your aunt gives you 40 XLM.",
    choices: [
      {
        text: "🐷 Save It",
        walletChange: 40,
        lesson:
          "Unexpected money is a great opportunity to grow your savings."
      },
      {
        text: "🎮 Buy a New Game",
        walletChange: 5,
        lesson:
          "It's okay to enjoy your money, but don't forget your savings goal."
      }
    ]
  },

  {
    id: 5,
    day: 5,
    title: "🧃 School Canteen",
    description:
      "Your friends buy lots of snacks during recess.",
    choices: [
      {
        text: "🍪 Buy Snacks (Costs 20 XLM)",
        walletChange: -20,
        lesson:
          "Small purchases can add up quickly."
      },
      {
        text: "🍎 Eat Food From Home",
        walletChange: 10,
        lesson:
          "Planning ahead helps you spend less."
      }
    ]
  },

  {
    id: 6,
    day: 6,
    title: "💡 Save Electricity",
    description:
      "You notice the lights are still on even though nobody is using the room.",
    choices: [
      {
        text: "💡 Turn Them Off",
        walletChange: 10,
        lesson:
          "Saving electricity helps your family save money too."
      },
      {
        text: "😴 Ignore It",
        walletChange: 0,
        lesson:
          "Small habits can make a big difference."
      }
    ]
  },

  {
    id: 7,
    day: 7,
    title: "🎡 School Fair",
    description:
      "The school fair is full of games, food, and prizes.",
    choices: [
      {
        text: "🎯 Spend Within Your Budget (Costs 20 XLM)",
        walletChange: -20,
        lesson:
          "Budgeting lets you have fun without overspending."
      },
      {
        text: "🎢 Spend on Everything (Costs 60 XLM)",
        walletChange: -60,
        lesson:
          "Without a budget, money disappears faster than you think."
      }
    ]
  },

  {
    id: 8,
    day: 8,
    title: "💰 Lucky Find",
    description:
      "You find 15 XLM on the sidewalk. No one nearby seems to have dropped it.",
    choices: [
      {
        text: "🐷 Save It",
        walletChange: 15,
        lesson:
          "Every little bit helps you reach your savings goal."
      },
      {
        text: "🍬 Buy Candy (Costs 5 XLM)",
        walletChange: -5,
        lesson:
          "Impulse purchases can stop you from reaching bigger goals."
      }
    ]
  },

  {
    id: 9,
    day: 9,
    title: "👵 Grandma Visits",
    description:
      "Grandma comes over with homemade cookies. She also gives you 20 XLM!",
    choices: [
      {
        text: "😊 Thank Grandma and Save It",
        walletChange: 20,
        lesson:
          "Saving gifts can help you reach your goals faster."
      },
      {
        text: "🍪 Buy Snacks for Grandma (Costs 10 XLM)",
        walletChange: -10,
        lesson:
          "Sharing with family is kind, but remember to spend responsibly."
      }
    ]
  },

  {
    id: 10,
    day: 10,
    title: "🎒 Dream Backpack",
    description:
      "You've been saving for days! The backpack you've always wanted is having a sale.",
    choices: [
      {
        text: "🎒 Buy the Backpack (Costs 50 XLM)",
        walletChange: -50,
        lesson:
          "Congratulations! Saving patiently helped you buy something important."
      },
      {
        text: "💰 Keep Saving for a Bigger Goal",
        walletChange: 20,
        lesson:
          "Sometimes reaching one goal inspires an even bigger dream."
      }
    ]
  }
];
