//@desc Get all freedata
//@route GET /api/freedata
//@access public
const { json } = require("express")
const { user } = require("../dataBase/freedata")
console.log('=>', user)
const getFreeData = (req, res) => {
  res.status(200).json(user)
}

//@desc Get all freedata by ID
//@route GET /api/freedata/id/${id}
//@access public

const getFreeDataById = (req, res) => {
  res.status(200).json(user.find(ele => ele.id == req.params.id) || { message: 'Not Found' })
}

////@desc Get all freedata by ID
//@route GET /api/freedata/add
//@access public
const deleteData = (req, res) => {
  const { password } = req.body
  if (password == '0024') {
    user = []
    res.status(200).json({ message: 'all the data is deleted' })
  }
  else {
    res.status(400).json({ message: 'bad request' })

  }
}
const postFreeData = (req, res) => {
  const { name, email, age, city } = req.body;
  if (!name || !email || !age || !city) {
    res.status(400).json({ message: "all filleds are mendetary" })
  }
  else {
    user.push({
      id: user.length + 1,
      name: req.body.name,
      email: req.body.email,
      age: req.body.age,
      city: req.body.city
    })
    res.status(201).json({ message: "user added successfully" })
  }
}
module.exports = { getFreeData, getFreeDataById, postFreeData, deleteData }