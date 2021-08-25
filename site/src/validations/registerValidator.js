const { body, check } = require('express-validator');
const { usuarios } = require('../data/users.json');

module.exports = [
  body('email')
    .notEmpty()
    .withMessage('El e-mail es obligatorio')
    .bail()
    .isEmail()
    .withMessage('Debe ingresar un e-mail válido'),

  body('nombre')
    .notEmpty()
    .withMessage('El nombre el obligatorio')
    .isLength({
    min: 2,
    max: 50,
    }).withMessage('El nombre debe tener como mínimo dos caracteres'),

  body('apellido')
    .notEmpty()
    .withMessage('El apellido es obligatorio')
    .isLength({
      min: 2,
      max: 50,
      }).withMessage('El apellido debe tener como mínimo dos caracteres'),

  body('nickName')
  .isLength({
    min: 2,
    max: 20,
    }).withMessage('El máximo es de 20 caracteres'),

  body('password')
    .notEmpty()
    .withMessage('La contraseña es obligatoria')
    .isLength({
    min: 6,
    max: 12,
    })
    .withMessage('La contraseña debe tener entre 6 y 12 caracteres'),

  body('confirmarContrasenia')
  .custom((value,{req}) => {
    if(value !== req.body.password){
        return false
    }
    return true
  }).withMessage('Las contraseñas no coinciden'),

  check('politicas')
  .isString('off').withMessage('Debes aceptar los términos y condiciones')
];

