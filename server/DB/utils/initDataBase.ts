import chalk from "chalk";
import { userService } from "../../service/user.service";
import { Card } from "../model/product.model";
import { User } from "../model/user.model";

export const initDatabase = async () => {
  try {
    const usersData = [
      {
        name: "admin",
        email: "admin@example.com",
        password: "Ab1234Ab!",
        isAdmin: true,
      },
      {
        name: "noy",
        email: "Regularr@example.com",
        password: "Ab1234Ab!",
      },
      {
        name: "noy",
        email: "Regular@example.com",
        password: "Ab1234Ab!",
      },
    ];

    const cardData = [
      {
        title: "Third Card",
        description:
          "Experienced software engineer with a passion for developing innovative programs that expedite the efficiency and effectiveness of organizational success.",
        price: 30,
        image: {
          url: "https://picsum.photos/200",
          alt: "John Doe",
        },
      },
      {
        title: "Third Card",
        description:
          "Experienced software engineer with a passion for developing innovative programs that expedite the efficiency and effectiveness of organizational success.",
        price: 30,
        image: {
          url: "https://picsum.photos/200",
          alt: "John Doe",
        },
      },
      {
        title: "Third Card",
        description:
          "Experienced software engineer with a passion for developing innovative programs that expedite the efficiency and effectiveness of organizational success.",
        price: 30,
        image: {
          url: "https://picsum.photos/200",
          alt: "John Doe",
        },
      },
    ];

    // Check if users data exists
    const usersCount = await User.countDocuments({});
    if (usersCount === 0) {
      // Users data not found, create and save to the database
      for (const userData of usersData) {
        await userService.saveUser(userData);
      }

      console.log(chalk.greenBright("Users data created and saved."));
    } else {
      console.log(chalk.redBright("Users data already exists, not saving."));
    }

    const firstUser = await User.findOne({});
    if (firstUser) {
      const userId = firstUser._id;

      // Check if cards for the user with userId exist
      const cardsCount = await Card.countDocuments({ user_id: userId });

      if (cardsCount === 0) {
        // Cards for the user with userId not found, create and save to the database
        const cardsWithUserId = cardData.map((card) => ({
          ...card,
          user_id: userId,
        }));

        await Card.insertMany(cardsWithUserId);
        console.log(
          chalk.greenBright(
            "Card data for the user with userId created and saved."
          )
        );
      } else {
        console.log(
          chalk.redBright(
            "Card data for the user with userId already exists, not saving."
          )
        );
      }
    }
  } catch (error) {
    console.error("Error initializing the database:", error);
  }
};
