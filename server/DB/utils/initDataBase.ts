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
        title: "RINGS",
        description:
          "Experienced software engineer with a passion for developing innovative programs that expedite the efficiency and effectiveness of organizational success.",
        price: 30,
        image: {
          url: "https://tzufa.co.il/cdn/shop/files/2f367d6cb88e447cc3900cddd5b3d9bb.jpg?v=1693866621&width=946",
          alt: "RINGS",
        },
      },
      {
        title: "NECKLACES",
        description:
          "Experienced software engineer with a passion for developing innovative programs that expedite the efficiency and effectiveness of organizational success.",
        price: 30,
        image: {
          url: "https://tzufa.co.il/cdn/shop/collections/7712cb4420724c4e14a597a670a89eac.jpg?v=1623277748&width=2048",
          alt: "NECKLACES",
        },
      },
      {
        title: "EARRINGS",
        description:
          "Experienced software engineer with a passion for developing innovative programs that expedite the efficiency and effectiveness of organizational success.",
        price: 30,
        image: {
          url: "https://cdn.istores.co.il/image/upload/if_ar_gt_2:1/c_mpad,h_662,w_555/c_fill,h_662,w_555/if_else/c_fill,q_100,w_555/if_end/dpr_2/v1694011466/clients/13987/accf4e50f1777810639bd132089b358bbefd1177.jpg",
          alt: "EARRINGS",
        },
      },
      {
        title: "BRACELETS",
        description:
          "Experienced software engineer with a passion for developing innovative programs that expedite the efficiency and effectiveness of organizational success.",
        price: 30,
        image: {
          url: "https://static.wixstatic.com/media/694d73_4dbbad5729d2449db0c92b7526bf686c~mv2.jpg/v1/fill/w_480,h_651,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/694d73_4dbbad5729d2449db0c92b7526bf686c~mv2.jpg",
          alt: "BRACELETS",
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
