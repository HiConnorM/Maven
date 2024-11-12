import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { PlusCircle, Calendar, MessageSquare, Users } from 'lucide-react';

const QuickActions: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <Button className="w-full flex items-center justify-start" variant="outline">
            <PlusCircle className="mr-2 h-4 w-4" />
            New Appointment
          </Button>
          <Button className="w-full flex items-center justify-start" variant="outline">
            <Calendar className="mr-2 h-4 w-4" />
            Schedule Session
          </Button>
          <Button className="w-full flex items-center justify-start" variant="outline">
            <MessageSquare className="mr-2 h-4 w-4" />
            Send Message
          </Button>
          <Button className="w-full flex items-center justify-start" variant="outline">
            <Users className="mr-2 h-4 w-4" />
            Add Client
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default QuickActions;
