import chalk from "chalk";
import { userService } from "../../service/user.service";
import { Card } from "../model/product.model";
import { User } from "../model/user.model";

export const initDatabase = async () => {
  try {
    const usersData = [
      {
        name: "Admin",
        email: "admin@example.com",
        password: "Ab1234Ab!",
        isAdmin: true,
      },
      {
        name: "Regular",
        email: "Regular@example.com",
        password: "Ab1234Ab!",
      },
      {
        name: "noy",
        email: "noy@example.com",
        password: "Ab1234Ab!",
      },
    ];

    const cardData = [
      {
        title: "Ring Set",
        description:
          "Experienced software engineer with a passion for developing innovative programs that expedite the efficiency and effectiveness of organizational success.",
        price: 9990,
        image: {
          url: "https://tzufa.co.il/cdn/shop/files/2f367d6cb88e447cc3900cddd5b3d9bb.jpg?v=1693866621&width=946",
          alt: "RINGS",
        },
      },
      {
        title: "Set of necklaces",
        description:
          "Experienced software engineer with a passion for developing innovative programs that expedite the efficiency and effectiveness of organizational success.",
        price: 300,
        image: {
          url: "https://tzufa.co.il/cdn/shop/collections/7712cb4420724c4e14a597a670a89eac.jpg?v=1623277748&width=2048",
          alt: "NECKLACES",
        },
      },
      {
        title: "Earring set",
        description:
          "Experienced software engineer with a passion for developing innovative programs that expedite the efficiency and effectiveness of organizational success.",
        price: 2260,
        image: {
          url: "https://cdn.istores.co.il/image/upload/if_ar_gt_2:1/c_mpad,h_662,w_555/c_fill,h_662,w_555/if_else/c_fill,q_100,w_555/if_end/dpr_2/v1694011466/clients/13987/accf4e50f1777810639bd132089b358bbefd1177.jpg",
          alt: "EARRINGS",
        },
      },
      {
        title: "BRACELETS",
        description:
          "This eye-catching tennis bracelet embellishes the wrist with 10 carats of shimmering diamonds individually set in lustrous white gold links.",
        price: 1480,
        image: {
          url: "https://static.wixstatic.com/media/694d73_4dbbad5729d2449db0c92b7526bf686c~mv2.jpg/v1/fill/w_480,h_651,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/694d73_4dbbad5729d2449db0c92b7526bf686c~mv2.jpg",
          alt: "BRACELETS",
        },
      },
      {
        title: "Diamond Tennis Bracelet",
        description:
          "Every girl dreams of someday getting a beautiful diamond bracelet from her man. This is your chance to wow her with 5 carats of brilliant sparkling diamonds!",
        price: 2499,
        image: {
          url: "https://cdn11.bigcommerce.com/s-jnlnq3j8vo/images/stencil/1280x1280/products/9278/20849/b-170-148__89320.1649704677.jpg?c=1",
          alt: "Bracelet",
        },
      },
      {
        title: "Diamond Earrings",
        description:
          "Beautiful Diamond Stud Earrings, Halo Style. 0.7 Carat Total Weight.",
        price: 280,
        image: {
          url: "https://bestbrilliance.com/cdn/shop/products/J99971W_00000_a4efd8f0-01ab-4c5e-b8ae-927fc95091c5.jpg?v=1685971088&width=2500",
          alt: "Earrings",
        },
      },
      {
        title: "Diamond Ring",
        description: "14K Whit Gold",
        price: 2720,
        image: {
          url: "https://www.jared.com/productimages/processed/V-993088400_3_800.jpg?pristine=true",
          alt: "RING",
        },
      },
      {
        title: "Diamond Necklace",
        description:
          "Illusion set four claw tennis necklace with tapering round brilliant cut diamonds set across the front of the necklace. Please note diamond carat weights are approximate. ",
        price: 990,
        image: {
          url: "https://www.graff.com/dw/image/v2/BFNT_PRD/on/demandware.static/-/Sites-master-catalog/default/dw36a31bfc/RGN469_RGN469_GN8550_Hero_1.jpg?sw=800&sh=800",
          alt: "necklace",
        },
      },
      {
        title: "Gold Earrings",
        description:
          "Lorraine earrings are hanging gold earrings, classic earrings with a touch, full of chic and yet temporary A fun, comfortable and everyday earring that you don't take off the ear, the earring hangs on the ear The earring comes in a brushed matte finish There is a very similar earring, slightly smaller and close to the earring, here Each piece of jewelry is custom made to order",
        price: 800,
        image: {
          url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToIq4QobdDLmjIKaKx-gXJOKxy5w3MFeuWjm5K9iaxzA&s",
          alt: "Earrings",
        },
      },
      {
        title: "Diamond Necklace",
        description:
          "Diamonds are forever, so is a diamond necklace set. Here are 75 diamond necklace designs to fit into every style and preference.",
        price: 5590,
        image: {
          url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeY4u9ewwhpzkwjiC6voUVbDHO8iP79q_jkVtR9yoOaw&s",
          alt: "necklace",
        },
      },
      {
        title: "Diamond Necklace",
        description:
          "Mesmerising in its elegant and delicate design, this Classic Graff platinum and white gold necklace features an enchanting array of emerald cut and round diamonds. The diamonds are embraced in minimal metal settings, creating a delicately scintillating statement.",
        price: 580,
        image: {
          url: "https://media2.bulgari.com/f_auto,q_auto,c_pad,h_520,w_520/production/dw184111c7/images/images/1448222.png",
          alt: "necklace",
        },
      },
      {
        title: "Gold Earrings",
        description: "Gold hoop earrings for women - diameter 23 mm",
        price: 345,
        image: {
          url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm6PCjJHGRvfgAtfWZBvw2gZ7-P1VRc5cmqladN69Izg&s",
          alt: "Earrings",
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
