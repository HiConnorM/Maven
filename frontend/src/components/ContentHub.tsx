import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { contentItems } from '@/data/contentItems'; // Assuming you have a data file for content items
import { PenTool } from 'lucide-react';

const ContentHub: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Content Hub</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {contentItems.map((item, index) => (
            <div key={index} className="flex items-center justify-between">
              <div>
                <p className="font-medium">{item.title}</p>
                <p className="text-sm text-gray-500">{item.type}</p>
              </div>
              <div className="text-right">
                <Button variant="outline">
                  Edit
                </Button>
              </div>
            </div>
          ))}
          <Button className="w-full mt-4">
            <PenTool className="mr-2 h-4 w-4" />
            Create New Content
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ContentHub;
