//@desc Get all freedata
//@route GET /api/freedata
//@access public
const  {user}  = require("../dataBase/freedata")
console.log('=>',user)
const getFreeData = (req, res) => {
  res.status(200).json(user)
}

//@desc Get all freedata by ID
//@route GET /api/freedata/id/${id}
//@access public

const getFreeDataById = (req, res) => {
  res.status(200).json(user.find(ele => ele.id == req.params.id) || { message: 'Not Found' })
}

module.exports = { getFreeData, getFreeDataById }