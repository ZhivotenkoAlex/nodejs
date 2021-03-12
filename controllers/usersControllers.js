const jwt = require('jsonwebtoken')
const Users = require('../model/users')
const { HttpCode } = require('../helpers/constants')
require('dotenv').config()
const SECRET_KEY=process.env.JWT_SECRET

const reg= async (req, res, next) => {
    try {
       
        const { email }=req.body
        const user = await Users.findByEmail(email)
        if (user) {
            return res.status(HttpCode.CONFLICT).json({
                status:'error',
                code: HttpCode.CONFLICT,
                data: 'Conflict',
                message:"This email is already in use"
            })
        }
    const newUser = await Users.create(req.body)
    return res.status(HttpCode.CREATED).json({
      status: 'success',
      code: HttpCode.CREATED,
        data: {
            user: {
                email: newUser.email,
                subscription: newUser.subscription,
            },
        }
    })
  } catch (e) { 
    next(e)
  }
}

const login = async (req, res, next) => {
    try {
        const { email,password }=req.body
        const user = await Users.findByEmail(email)
        if ( !user || !user.validPassword(password)) {
            return res.status(HttpCode.UNAUTHORIZED).json({
                status:'error',
                code: HttpCode.UNAUTHORIZED,
                data: 'Unauthorizes',
                message:"Invalid crudentials"
            })
        }
        const id = user._id
        const payload = { id }
        const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '2h' })
        await Users.updateToken(id,token)
    return res.status(HttpCode.OK).json({
      status: 'success',
      code: HttpCode.OK,
        data: {
           token,
        }
    })
  } catch (e) { 
    next(e)
  }
}

const logout = async (req, res, _next) => {
  const id = req.users.id;
  await Users.updateToken(id, null);
  return res.status(HttpCode.NO_CONTENT).json({message:'none'});
};

const current = async (req, res, next) => { }

module.exports = {
    reg,
    login,
    logout,
    current
}