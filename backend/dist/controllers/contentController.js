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
exports.approveContentSchedule = exports.createContentSchedule = void 0;
const ContentSchedule_1 = __importDefault(require("../models/ContentSchedule"));
const createContentSchedule = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { content, platform, scheduledDate } = req.body;
    try {
        // Assert that req.user is defined
        const contentSchedule = yield ContentSchedule_1.default.create({
            userId: req.user.id, // Assert that `user` is always defined here
            content,
            platform,
            scheduledDate,
        });
        res.status(201).json(contentSchedule);
    }
    catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
});
exports.createContentSchedule = createContentSchedule;
const approveContentSchedule = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const { id } = req.params;
    try {
        const contentSchedule = yield ContentSchedule_1.default.findByPk(id);
        if (!contentSchedule) {
            res.status(404).json({ msg: 'Content schedule not found' });
            return;
        }
        if (contentSchedule.userId !== ((_a = req.user) === null || _a === void 0 ? void 0 : _a.id)) {
            res.status(403).json({ msg: 'Unauthorized to approve this content schedule' });
            return;
        }
        contentSchedule.approvalStatus = 'Approved';
        yield contentSchedule.save();
        res.json(contentSchedule);
    }
    catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
});
exports.approveContentSchedule = approveContentSchedule;
