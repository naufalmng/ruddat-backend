import jwt from "jsonwebtoken";
import { prismaClient } from "../application/database.js";
import { ResponseError } from "../error/ResponseError.js";

export const authenticate = async (req, res, next) => {
  try {
    const accessTokenHeader = req.headers["authorization"];
    if (!accessTokenHeader) throw new ResponseError(401, "Unauthorized");

    const accessToken = accessTokenHeader && accessTokenHeader.split(" ")[1];

    const user = await new Promise((resolve, reject) => {
      jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) {
          if (err.name === "TokenExpiredError") {
            reject(new ResponseError(401, "Refresh Token Expired"));
          }
          reject(new ResponseError(401, "Unauthorized"));
        }
        resolve(user);
      });
    });

    const authenticatedUser = await prismaClient.user.findUnique({
      where: { id: user.aud },
    });
    delete authenticatedUser.password;
    req.user = authenticatedUser;

    next();
  } catch (err) {
    next(err);
  }
};
