import { CardModel } from "../DB/model/card.model";
import { Card } from "../DB/types/db";
import { ApplicationError } from "../error/application-error";

const getCards = async () => {
  try {
    const cards = await CardModel.find();
    return cards;
  } catch (err) {
    throw new ApplicationError(400, "thers is no cards");
  }
};

export const saveCard = async (cardData: Card) => {
  const card = new CardModel(cardData);
  const save = await card.save();
  return save;
};
export const cardService = { getCards, saveCard };
