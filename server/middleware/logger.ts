// import { RequestHandler } from "express";

import morgan from "morgan";
//import { format } from "path";

// const logger: RequestHandler = (req, res, next) => {
//   console.log(req.method, req.url);

//   next();
// };

// export default logger;

//LOGGER WITH MORGAN LIBARY:
//const format =

export const logger = morgan("common");
