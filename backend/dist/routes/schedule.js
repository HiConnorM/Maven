"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_1 = __importDefault(require("../middlewares/auth"));
const ContentSchedule_1 = __importDefault(require("../models/ContentSchedule"));
const router = express_1.default.Router();
// Approve content by ID
router.put('/approve/:id', auth_1.default, (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        if (!req.user) {
            res.status(401).json({ msg: 'Authorization denied' });
            return;
        }
        // Find the content by ID
        const content = yield ContentSchedule_1.default.findByPk(id);
        if (!content) {
            res.status(404).json({ msg: 'Content not found' });
            return;
        }
        // Check if the logged-in user has permission to approve this content
        if (content.userId !== parseInt(req.user.id, 10)) {
            res.status(403).json({ msg: 'Unauthorized to approve this content' });
            return;
        }
        // Update the content's approval status
        yield content.update({ approvalStatus: 'Approved' });
        res.json(content);
    }
    catch (error) {
        console.error(error);
        next(error);
    }
}));
exports.default = router;
