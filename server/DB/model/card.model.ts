import { model } from "mongoose";
import { cardSchema } from "../schema/card.schema";

const Card = model("Products", cardSchema);

export { Card };
