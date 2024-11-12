import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { campaigns } from '@/data/Campaigns'; // Assuming you have a data file for campaigns
import { Megaphone } from 'lucide-react';

const Campaigns: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Marketing Campaigns</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {campaigns.map((campaign, index) => (
            <div key={index} className="flex items-center justify-between mb-1">
              <p className="font-medium">{campaign.name}</p>
              <Button variant="outline">
                {campaign.status === 'Active' ? 'Pause' : 'Activate'}
              </Button>
            </div>
          ))}
          <Button className="w-full mt-4">
            <Megaphone className="mr-2 h-4 w-4" />
            Create New Campaign
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default Campaigns;
