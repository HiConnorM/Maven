import React from 'react';

interface Appointment {
  id: number;
  client: string;
  time: string;
  type: string;
}

interface AppointmentsListProps {
  appointments: Appointment[];
}

const AppointmentsList: React.FC<AppointmentsListProps> = ({ appointments }) => (
  <ul className="space-y-2">
    {appointments.map((appointment) => (
      <li key={appointment.id} className="p-4 border rounded-md bg-gray-50">
        <div className="font-medium">{appointment.client}</div>
        <div className="text-sm text-gray-500">
          {appointment.time} ({appointment.type})
        </div>
      </li>
    ))}
  </ul>
);

export default AppointmentsList;
