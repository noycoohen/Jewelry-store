import { Router } from "express";
import { Card } from "../db/model/card.model";
import { verifyToken } from "../middleware/verify-token";
import { validateCard } from "../middleware/validate-schema";
import { verifyIsBusiness } from "../middleware/verify-is-business";

import { verifyCardUser } from "../middleware/verify-card-user";
import { ApplicationError } from "../error/application-error";
import { User } from "../db/model/user.model";
import { verifyAdmin } from "../middleware/verify-admin";

const router = Router();

//Get all products
router.get("/", async (req, res, next) => {
  try {
    const cards = await Card.find();
    res.json(cards);
  } catch (e) {
    next(e);
  }
});

//Get products that user add
router.get("/my-cart", verifyToken, async (req, res, next) => {
  try {
    const userId = req.user?.id;

    const cards = await Card.find({ user_id: userId });
    if (cards.length === 0) {
      return res.status(404).json({ message: `Cards not found` });
    }
    res.json(cards);
  } catch (e) {
    next(e);
  }
});

//Get product by id
router.get("/:id", async (req, res, next) => {
  try {
    const id = req.params.id;

    const card = await Card.findById(id);
    if (!card) {
      return res.status(404).json({ message: `card with id: ${id} Not found` });
    }
    res.json(card);
  } catch (e) {
    next(e);
  }
});

//Post a product
router.post("/", verifyAdmin, validateCard, async (req, res, next) => {
  try {
    const userId = req.user?.id;
    const card = await Card.create({ ...req.body, user_id: userId });
    res.status(201).json(card);
  } catch (e) {
    next(e);
  }
});

//Edit product by id
router.put("/:id", verifyAdmin, validateCard, async (req, res, next) => {
  try {
    const card = req.body;
    const cardId = req.params.id;
    const userId = req.user?.id;

    const existingCard = await Card.findById(cardId);

    if (!existingCard) {
      return res
        .status(404)
        .json({ message: `Card with id: ${cardId} not found` });
    }
    console.log(existingCard.user_id);
    console.log(userId);

    const updatedCard = await Card.findByIdAndUpdate(cardId, card, {
      new: true,
    });

    if (!updatedCard) {
      return res
        .status(404)
        .json({ message: `card with id: ${cardId} Not found` });
    }
    res.json(updatedCard);
  } catch (e) {
    next(e);
  }
});

//Like products
router.patch("/:id", verifyToken, async (req, res, next) => {
  const cardId = req.params.id;
  const user = req.user;
  const userId = req.user?.id;

  try {
    const existingUser = await User.findById(userId);
    if (!existingUser) {
      return res.status(404).json({ message: "User not found" });
    }

    const card = await Card.findById(cardId);
    if (card && user) {
      const index = card.likes.indexOf(user.id);
      if (index != -1) {
        card.likes.splice(index, 1);
      } else {
        card.likes.push(user.id);
      }

      const saveCard = await card.save();
      return res.status(200).json(saveCard);
    }
  } catch (e) {
    return res.status(400).json(e);
  }
});

//Delete products
router.delete("/:id", verifyAdmin, async (req, res, next) => {
  try {
    const cardId = req.params.id;
    const deleteCard = await Card.findByIdAndDelete(cardId);
    if (!deleteCard) {
      return res
        .status(404)
        .json({ message: `card with id: ${cardId} Not found` });
    }
    res.json({ message: "delete success", deleteCard });
  } catch (e) {
    next(e);
  }
});

export default router;
