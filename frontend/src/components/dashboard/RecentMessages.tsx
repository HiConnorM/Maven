import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import  Avatar  from "@/components/ui/Avatar";
import  Badge  from "@/components/ui/Badge";
import { MessageCircle, Mail, Instagram } from 'lucide-react';

interface Message {
  id: number;
  sender: string;
  content: string;
  time: string;
  type: 'client' | 'email' | 'social';
  read: boolean;
  avatar?: string;
}

const messages: Message[] = [
  {
    id: 1,
    sender: "Sarah Johnson",
    content: "Looking forward to our next session!",
    time: "10 min ago",
    type: "client",
    read: false
  },
  {
    id: 2,
    sender: "Marketing Team",
    content: "New campaign results available",
    time: "1 hour ago",
    type: "email",
    read: true
  },
  {
    id: 3,
    sender: "@wellness_coach",
    content: "Mentioned you in a story",
    time: "2 hours ago",
    type: "social",
    read: false
  }
];

const RecentMessages: React.FC = () => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Recent Messages</CardTitle>
        <Badge>{messages.filter(m => !m.read).length} new</Badge>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {messages.map((message) => (
            <div key={message.id} className="flex items-start space-x-4 p-2 hover:bg-gray-50 rounded-lg">
              <Avatar
                fallback={message.sender[0]}
                alt={`${message.sender}'s avatar`}
                src={message.avatar}
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <p className="font-medium text-sm truncate">{message.sender}</p>
                  <span className="text-xs text-gray-500">{message.time}</span>
                </div>
                <p className="text-sm text-gray-600 truncate">{message.content}</p>
              </div>
              {!message.read && (
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentMessages;
