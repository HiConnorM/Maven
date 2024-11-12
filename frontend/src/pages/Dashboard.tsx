// src/pages/dashboard.tsx
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { Avatar, AvatarFallback } from "@/components/ui/Avatar";
import Badge from "@/components/ui/Badge";
import { Progress } from "@/components/ui/Progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Tabs";
import { 
  Home,
  Calendar,
  Users,
  FileText,
  BarChart2,
  Settings,
  HelpCircle,
  LogOut,
  Bell,
  Search,
} from "lucide-react";
import DashboardLayout from '@/layouts/DashboardLayout';
import { appointments } from '@/data/Appointments';
import { contentItems } from '@/data/contentItems';
import { dashboardMetrics } from '@/data/Metrics';
import { Sidebar } from '@/components/sidebar/Sidebar';

const appointmentsData = [
  { initial: 'S', name: 'Sarah Johnson', time: '10:00 AM', type: 'Video Call', badge: 'Video Call' },
  { initial: 'M', name: 'Michael Brown', time: '1:00 PM', type: 'In-Person', badge: 'In-Person' },
  { initial: 'E', name: 'Emily Davis', time: '3:00 PM', type: 'Phone Call', badge: 'Phone Call' }
];

export default function Dashboard() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <DashboardLayout>
      <div className="flex min-h-screen bg-gray-50">
        <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
        <div className="flex-1">
          <header className="flex h-16 items-center gap-4 border-b bg-white px-6">
            <div className="flex flex-1 items-center gap-2">
              <h1 className="text-2xl font-semibold">Dashboard</h1>
            </div>
            <div className="flex flex-1 items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
              <form className="ml-auto flex-1 sm:flex-initial">
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                  <Input type="search" placeholder="Search..." className="w-full bg-white pl-8 lg:w-[300px] rounded-full" />
                </div>
              </form>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Bell className="h-5 w-5" />
                <span className="sr-only">Notifications</span>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Avatar className="h-8 w-8">
                  <AvatarFallback>DS</AvatarFallback>
                </Avatar>
              </Button>
            </div>
          </header>
          <main className="p-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {dashboardMetrics.map((metric) => (
                <Card key={metric.id}>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">{metric.title}</CardTitle>
                    <metric.icon className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">
                      {metric.id === 'revenue' ? `$${metric.value}` : metric.value}
                    </div>
                    <p className="text-xs text-muted-foreground">
                      <span className={`${metric.trend === 'up' ? 'text-green-500' : 'text-red-500'} inline-flex items-center`}>
                        <ArrowUpRight className={`w-3 h-3 mr-1 ${metric.trend === 'down' ? 'rotate-90' : ''}`} />
                        {metric.change}%
                      </span>{" "}
                      vs last month
                    </p>
                    <Progress value={metric.progress} className="mt-2" />
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-7">
              <Card className="md:col-span-4">
                <CardHeader>
                  <CardTitle>Upcoming Appointments</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {appointmentsData.map((appointment, index) => (
                      <div key={index} className="flex items-center gap-4">
                        <Avatar className="h-10 w-10">
                          <AvatarFallback>{appointment.initial}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <p className="font-medium">{appointment.name}</p>
                          <p className="text-sm text-gray-500">{appointment.time} - {appointment.type}</p>
                        </div>
                        <Badge>{appointment.badge}</Badge>
                      </div>
                    ))}
                    <Button className="w-full mt-4" variant="outline">
                      View All Appointments
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader>
                  <CardTitle>Content Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {contentItems.map((item, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">{item.title}</p>
                          <p className="text-sm text-gray-500">{item.type}</p>
                        </div>
                        <div className="flex items-center">
                          <Badge variant={item.status === 'Published' ? 'success' : 'warning'}>
                            {item.status}
                          </Badge>
                          <span className="text-sm text-gray-500 ml-2">{item.engagement}% engagement</span>
                        </div>
                      </div>
                    ))}
                    <Button className="w-full mt-4" variant="outline">
                      Create New Content
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader>
                  <CardTitle>Marketing Campaigns</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {/* Add your marketing campaigns here */}
                    <div className="flex items-center justify-between">
                      <p className="font-medium">Summer Wellness</p>
                      <Badge variant="active">Active</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="font-medium">Mental Health Awareness</p>
                      <Badge variant="planned">Planned</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="font-medium">New Client Promo</p>
                      <Badge variant="completed">Completed</Badge>
                    </div>
                    <Button className="w-full mt-4" variant="outline">
                      Create New Campaign
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader>
                  <CardTitle>Social Media Overview</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <p className="font-medium">Instagram</p>
                      <p className="text-sm text-gray-500">2.5k followers</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="font-medium">Facebook</p>
                      <p className="text-sm text-gray-500">5.2k likes</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="font-medium">Twitter</p>
                      <p className="text-sm text-gray-500">1.8k followers</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="font-medium">LinkedIn</p>
                      <p className="text-sm text-gray-500">3.1k connections</p>
                    </div>
                    <Button className="w-full mt-4" variant="outline">
                      Share New Post
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </main>
        </div>
      </div>
    </DashboardLayout>
  );
}
