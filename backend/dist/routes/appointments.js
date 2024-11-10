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
const Appointment_1 = __importDefault(require("../models/Appointment"));
const router = express_1.default.Router();
router.put('/update/:id', auth_1.default, (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!req.user) {
            res.status(401).json({ msg: 'Authorization denied' });
            return;
        }
        const { date, time, type } = req.body;
        const { id } = req.params;
        // Convert the id from the params (which is a string) to a number for comparison
        const appointmentId = parseInt(id, 10);
        if (isNaN(appointmentId)) {
            res.status(400).json({ msg: 'Invalid appointment ID' });
            return;
        }
        const appointment = yield Appointment_1.default.findByPk(appointmentId);
        if (!appointment) {
            res.status(404).json({ msg: 'Appointment not found' });
            return;
        }
        // Convert req.user.id to number to match appointment.userId type
        const userId = parseInt(req.user.id, 10);
        if (isNaN(userId)) {
            res.status(400).json({ msg: 'Invalid user ID' });
            return;
        }
        // Now both appointment.userId and userId are numbers
        if (appointment.userId !== userId) {
            res.status(403).json({ msg: 'Unauthorized to update this appointment' });
            return;
        }
        yield appointment.update({ date, time, type });
        res.json(appointment);
    }
    catch (err) {
        console.error(err);
        next(err);
    }
}));
exports.default = router;
