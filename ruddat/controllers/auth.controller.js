import { ResponseError } from "../error/ResponseError.js";
import { registerUserValidation } from "../validations/user-validation.js";
import { prismaClient } from "../application/database.js";
import bcrypt from "bcrypt";
import {
  generateAccessToken,
  generateRefreshToken,
  verifyRefreshToken,
} from "../services/jwt.service.js";
import { loginValidation } from "../validations/login.validation.js";

export const register = async (req, res, next) => {
  try {
    const data = await registerUserValidation.validateAsync(req.body);
    const checkEmail = await prismaClient.user.findUnique({
      where: { email: data.email },
    });

    const checkUsername = await prismaClient.user.findUnique({
      where: { username: data.username },
    });
    if (checkEmail) {
      throw new ResponseError(422, "Email already exists");
    } else if (checkUsername) {
      throw new ResponseError(422, "Username already exists");
    }

    const salt = await bcrypt.genSalt(13);
    const hashedPassword = await bcrypt.hash(data.password, salt);
    data.password = hashedPassword;
    data.email = data.email.toLowerCase();
    data.username = data.username.toLowerCase();
    data.profilePic = "todo";

    const user = await prismaClient.user.create({ data });

    const accessToken = await generateAccessToken(user.id);
    const refreshToken = await generateRefreshToken(user.id);
    return res.status(201).json({
      status: 201,
      message: "User created successfully",
      accessToken,
      refreshToken,
    });
  } catch (err) {
    if (err.isJoi === true) {
      err.status = 422;
    }
    next(err);
  }
};

export const login = async (req, res, next) => {
  try {
    const data = await loginValidation.validateAsync(req.body);
    const user = await prismaClient.user.findUnique({
      where: { email: data.email },
    });
    if (!user) {
      throw new ResponseError(401, "Email or password is incorrect");
    }
    const checkPassword = await bcrypt.compare(data.password, user.password);
    if (!checkPassword) {
      throw new ResponseError(401, "Email or password is incorrect");
    }

    const accessToken = await generateAccessToken(user.id);
    const refreshToken = await generateRefreshToken(user.id);
    return res.status(201).json({
      status: 201,
      message: "User created successfully",
      accessToken,
      refreshToken,
    });
  } catch (err) {
    if (err.isJoi === true) err.status = 422;
    next(err);
  }
};

export const refreshToken = async (req, res, next) => {
  if (req.body.refreshToken === null) {
    return new ResponseError(400, "Resfresh Token is Required");
  }
  try {
    const refreshTokenBody = req.body.refreshToken;
    const userId = await verifyRefreshToken(refreshTokenBody);
    const accessToken = await generateAccessToken(userId);
    const refreshToken = await generateRefreshToken(userId);

    return res.status(201).json({
      status: 201,
      message: "Token Successfully Refreshed",
      accessToken,
      refreshToken,
    });
  } catch (err) {
    next(err);
  }
};
