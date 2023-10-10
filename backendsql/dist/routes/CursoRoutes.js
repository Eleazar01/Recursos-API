"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const CursoController_1 = require("../controllers/CursoController");
const validate_token_1 = __importDefault(require("../services/validate-token"));
const router = (0, express_1.Router)();
router.get('/', validate_token_1.default, CursoController_1.getCursos);
router.get('/:id', validate_token_1.default, CursoController_1.getCurso);
router.delete('/:id', validate_token_1.default, CursoController_1.deleteCurso);
router.post('/', validate_token_1.default, CursoController_1.postCurso);
router.put('/:id', validate_token_1.default, CursoController_1.updateCurso);
exports.default = router;
