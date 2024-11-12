import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Tabs";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { analyticsData } from '@/data/Analytics';

const Analytics: React.FC = () => {
  return (
    <Card className="col-span-4">
      <CardHeader>
        <CardTitle>Analytics Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="clients">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="clients">Clients</TabsTrigger>
            <TabsTrigger value="revenue">Revenue</TabsTrigger>
            <TabsTrigger value="engagement">Engagement</TabsTrigger>
          </TabsList>
          <TabsContent value="clients" className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={analyticsData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="clients" stroke="#8884d8" fill="#8884d8" fillOpacity={0.3} />
              </AreaChart>
            </ResponsiveContainer>
          </TabsContent>
          <TabsContent value="revenue" className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={analyticsData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="revenue" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.3} />
              </AreaChart>
            </ResponsiveContainer>
          </TabsContent>
          <TabsContent value="engagement" className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={analyticsData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="engagement" stroke="#ffc658" fill="#ffc658" fillOpacity={0.3} />
              </AreaChart>
            </ResponsiveContainer>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default Analytics;
