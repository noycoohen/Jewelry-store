import { model } from "mongoose";
import { cardSchema } from "../schema/card.schema";

const CardModel = model("Card", cardSchema);

export { CardModel };
