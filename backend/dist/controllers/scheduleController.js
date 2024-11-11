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
exports.updateAppointment = exports.createAppointment = void 0;
const Appointment_1 = __importDefault(require("../models/Appointment"));
const createAppointment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { appointmentDate, notes } = req.body;
    try {
        const appointment = yield Appointment_1.default.create({
            userId: req.user.id,
            appointmentDate,
            notes,
        });
        res.status(201).json(appointment);
    }
    catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
});
exports.createAppointment = createAppointment;
const updateAppointment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { appointmentDate, notes } = req.body;
    try {
        const appointment = yield Appointment_1.default.findByPk(id);
        if (!appointment) {
            return res.status(404).json({ msg: 'Appointment not found' });
        }
        if (appointment.userId !== req.user.id) {
            return res.status(403).json({ msg: 'Unauthorized to update this appointment' });
        }
        appointment.appointmentDate = appointmentDate;
        appointment.notes = notes;
        yield appointment.save();
        res.json(appointment);
    }
    catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
});
exports.updateAppointment = updateAppointment;
