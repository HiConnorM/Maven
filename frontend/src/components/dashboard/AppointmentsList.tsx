import React from "react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Calendar as CalendarIcon, Clock } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface Appointment {
  id: number;
  client: string;
  time: string;
  type: "Video Call" | "In-Person" | "Phone Call";
}

interface AppointmentsListProps {
  appointments: Appointment[];
}

const AppointmentsList: React.FC<AppointmentsListProps> = ({ appointments }) => {
  return (
    <div className="space-y-4">
      {appointments.map((appointment) => (
        <div key={appointment.id} className="flex items-center justify-between p-2 bg-muted rounded-lg">
          <div className="flex items-center space-x-4">
            <Avatar>
              <AvatarFallback>{appointment.client[0]}</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-medium">{appointment.client}</p>
              <p className="text-sm text-muted-foreground">{appointment.time}</p>
            </div>
          </div>
          <Badge variant={
            appointment.type === "Video Call" ? "default" :
            appointment.type === "In-Person" ? "secondary" :
            "outline"
          }>
            {appointment.type}
          </Badge>
        </div>
      ))}
      <Button className="w-full mt-4">
        <CalendarIcon className="mr-2 h-4 w-4" /> View All Appointments
      </Button>
    </div>
  );
};

export default AppointmentsList;
