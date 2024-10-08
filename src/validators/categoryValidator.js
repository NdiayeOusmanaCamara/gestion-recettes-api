import { check, param, validationResult } from "express-validator";
import { StatusCodes } from "http-status-codes";
import Category from "../models/Category.js";

const addRequestValidator = [
  check("name")
    .not()
    .isEmpty()
    .withMessage("nom ne peut pas être vide!")
    .bail()
    .isLength({ min: 5, max:100 })
    .withMessage("Le nom doit contenir entre 5 et 100 caractères !")
    .bail()
    .custom(async (value) => {
      const result = await Category.getCategoryByTitle(value);
      if (result) {
        throw new Error("Cette nom existe déjà!");
      }
      return true;
    }),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res
        .status(StatusCodes.UNPROCESSABLE_ENTITY)
        .json({ errors: errors.array() });
    next();
  },
];

const deleteRequestValidator = [
  param("id")
    .not()
    .isEmpty()
    .withMessage("Id est obligatoire!")
    .bail()
    .custom(async (value) => {
      const category = await Category.getCategoryById(value);
      if (!category) {
        throw new Error("Cette nom n'existe pas!");
      }
      return true;
    }),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res
        .status(StatusCodes.UNPROCESSABLE_ENTITY)
        .json({ errors: errors.array() });
    next();
  },
];

const getByIdValidator = [
  param("id")
    .not()
    .isEmpty()
    .withMessage("L'ID est obligatoire.")
    .bail()
    .custom(async (value) => {
      const result = await Category.getCategoryById(value);
      if (!result) {
        throw new Error("Cette nom n'existe pas.");
      }
      return true;
    }),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res
        .status(StatusCodes.UNPROCESSABLE_ENTITY)
        .json({ errors: errors.array() });
    }
    next();
  },
];

const updateValidator = [
  param("id")
    .not()
    .isEmpty()
    .withMessage("L'ID est obligatoire.")
    .bail()
    .custom(async (value) => {
      const result = await Category.getCategoryById(value);
      if (!result) {
        throw new Error("Cette nom n'existe pas.");
      }
      return true;
    }),
  check("name")
    .optional()
    .isLength({ min: 5, max:100 })
    .withMessage("Le nom doit contenir entre 5 et 100 caractères !"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res
        .status(StatusCodes.UNPROCESSABLE_ENTITY)
        .json({ errors: errors.array() });
    }
    next();
  },
];

export {
  addRequestValidator,
  deleteRequestValidator,
  updateValidator,
  getByIdValidator,
};
