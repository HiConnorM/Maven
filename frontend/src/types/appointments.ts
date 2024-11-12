export interface Appointment {
  id: number;
  client: string;
  time: string;
  type: 'Video Call' | 'In-Person' | 'Phone Call';
  status?: 'scheduled' | 'completed' | 'cancelled';
  duration?: number;
  notes?: string;
}
