import Joi = require('joi')

export default Joi.object({
    userName: Joi.string().min(3).max(50).required(),
    password: Joi.string().min(8).max(40).pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).*$/).required()
})