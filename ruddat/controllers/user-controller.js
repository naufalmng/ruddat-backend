import userService from "../services/user-service.js";

const register = async (req, res, next) => {
  try {
    const result = await userService.register(req.body);
    res.status(200).json({
      code: 200,
      token: result.token,
    });
  } catch (err) {
    next(err);
  }
};

export default { register };
