import subRuddatService from "../services/sub-ruddat-service.js"

// handle create sub ruddat
const create = async (req, res, next) => {
  try {
    const user = req.user
    const request = req.body
    const result = await subRuddatService.create(user, request)
    res.status(200).json({
        code: 200,
        data: result
    })
  } catch (err) {
    next(err)
  }
}

export default { create }
