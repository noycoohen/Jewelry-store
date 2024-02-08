import { cardService } from "./../service/card.service";
import { Router } from "express";
import { validateCard } from "../middleware/validate-schema";
import { Card } from "../DB/types/db";
import { CardModel } from "../DB/model/card.model";
import { verifyUserOrAdmin } from "../middleware/verify-user-admin";
import { any } from "joi";
import { verifyToken } from "../middleware/verify-token";

const router = Router();

router.get("/", async (req, res, next) => {
  try {
    const cards = await cardService.getCards();
    res.status(200).json({ cards });
  } catch (err) {
    next(err);
  }
});

router.get("/my-cards", verifyToken, async (req, res, next) => {
  try {
    const id = req.user?.id;
    const getCards = await CardModel.findById(id);
    return res.json({ getCards });
  } catch (err) {
    next(err);
  }
});

router.post("/", validateCard, verifyToken, async (req, res) => {
  const card = req.body as Card;
  card.user_id = req.user?.id;
  const saveCard = await cardService.saveCard(card);

  res.status(200).json({ saveCard });
});

export default router;
