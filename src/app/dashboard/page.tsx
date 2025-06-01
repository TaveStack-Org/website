"use client";

import React, { useState } from 'react';
import { useTheme } from "next-themes";
import Image from "next/image";
import { 
  Calendar, 
  Clock, 
  Users, 
  FileText, 
  BarChart3, 
  Settings, 
  Bell, 
  Search, 
  Plus, 
  Play, 
  Pause, 
  Square, 
  Mic, 
  Video, 
  Download, 
  Share2, 
  Filter,
  CheckCircle,
  AlertCircle,
  TrendingUp,
  MessageSquare,
  Zap,
  Globe,
  Shield,
  Brain,
  Moon,
  Sun
} from 'lucide-react';
import { ModeToggle } from '@/components/ui/theme-toggle';

const TavestackDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isRecording, setIsRecording] = useState(false);

  const stats = [
    { title: 'Total Meetings', value: '124', change: '+12%', icon: Users, color: 'text-blue-600' },
    { title: 'Hours Saved', value: '156h', change: '+45%', icon: Clock, color: 'text-green-600' },
    { title: 'Tasks Generated', value: '342', change: '+28%', icon: CheckCircle, color: 'text-purple-600' },
    { title: 'Active Projects', value: '28', change: '+8%', icon: FileText, color: 'text-orange-600' }
  ];

  const recentMeetings = [
    { id: 1, title: 'Product Strategy Review', date: '2024-05-30', duration: '45 min', participants: 8, status: 'completed', tasks: 5 },
    { id: 2, title: 'Client Onboarding Session', date: '2024-05-29', duration: '30 min', participants: 4, status: 'completed', tasks: 3 },
    { id: 3, title: 'Team Standup', date: '2024-05-29', duration: '15 min', participants: 12, status: 'completed', tasks: 2 },
    { id: 4, title: 'Budget Planning Meeting', date: '2024-05-28', duration: '60 min', participants: 6, status: 'processing', tasks: 0 }
  ];

  const upcomingMeetings = [
    { id: 1, title: 'Quarterly Review', time: '10:00 AM', participants: 15, type: 'video' },
    { id: 2, title: 'Client Presentation', time: '2:00 PM', participants: 6, type: 'hybrid' },
    { id: 3, title: 'Team Retrospective', time: '4:30 PM', participants: 8, type: 'virtual' }
  ];

  const activeIntegrations = [
    { name: 'Microsoft Teams', status: 'connected', icon: '🟢' },
    { name: 'Google Meet', status: 'connected', icon: '🟢' },
    { name: 'Zoom', status: 'connected', icon: '🟢' },
    { name: 'Slack', status: 'pending', icon: '🟡' }
  ];

  const TaskList = () => (
    <div className="space-y-3">
      {[
        { task: 'Review Q3 marketing budget', priority: 'high', dueDate: 'Today', assigned: 'Marketing Team' },
        { task: 'Prepare client presentation slides', priority: 'medium', dueDate: 'Tomorrow', assigned: 'John Doe' },
        { task: 'Update project timeline', priority: 'low', dueDate: 'This Week', assigned: 'Project Manager' },
        { task: 'Schedule follow-up meeting', priority: 'medium', dueDate: 'Jun 2', assigned: 'Sarah Wilson' }
      ].map((item, index) => (
        <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
          <div className="flex items-center space-x-3">
            <CheckCircle className="h-5 w-5 text-gray-400 hover:text-green-500 cursor-pointer" />
            <div>
              <p className="font-medium text-gray-900 dark:text-white">{item.task}</p>
              <p className="text-sm text-gray-500 dark:text-gray-300">Assigned to: {item.assigned}</p>
            </div>
          </div>
          <div className="text-right">
            <span className={`inline-flex px-2 py-1 text-xs rounded-full ${
              item.priority === 'high' ? 'bg-red-100 text-red-800' :
              item.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' :
              'bg-green-100 text-green-800'
            }`}>
              {item.priority}
            </span>
            <p className="text-xs text-gray-500 mt-1">{item.dueDate}</p>
          </div>
        </div>
      ))}
    </div>
  );

  const RecordingControls = () => (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border dark:border-gray-700 p-6">
      <h3 className="text-lg font-semibold mb-4 flex items-center dark:text-white">
        <Mic className="h-5 w-5 mr-2 text-red-500" />
        Live Recording
      </h3>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setIsRecording(!isRecording)}
            className={`flex items-center px-4 py-2 rounded-lg font-medium ${
              isRecording 
                ? 'bg-red-100 text-red-700 hover:bg-red-200' 
                : 'bg-green-100 text-green-700 hover:bg-green-200'
            }`}
          >
            {isRecording ? <Square className="h-4 w-4 mr-2" /> : <Play className="h-4 w-4 mr-2" />}
            {isRecording ? 'Stop Recording' : 'Start Recording'}
          </button>
          {isRecording && (
            <div className="flex items-center text-red-600">
              <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse mr-2"></div>
              <span className="font-mono">02:34</span>
            </div>
          )}
        </div>
        <div className="flex items-center space-x-2">
          <Video className="h-5 w-5 text-gray-400" />
          <span className="text-sm text-gray-600 dark:text-gray-300">Video: Auto-detect</span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 dark:text-gray-100">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-sm border-b dark:border-gray-700">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Image src="/images/temp/TaveStack Word Mark (Black no BG).png" alt="Tavestack Logo" className="h-8 w-auto" width={100} height={100} />
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search meetings, tasks, or ask AI..."
                className="pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent w-80 bg-white dark:bg-gray-700 dark:text-white"
              />
            </div>
            <button className="relative p-2 text-gray-400 hover:text-gray-600">
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">3</span>
            </button>
            <button className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
              <Settings className="h-5 w-5" />
            </button>
            <ModeToggle />
            <div className="h-8 w-8 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-medium">JD</span>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white dark:bg-gray-800 shadow-sm h-screen sticky top-0">
          <nav className="p-4 space-y-2">
            {[
              { id: 'overview', label: 'Overview', icon: BarChart3 },
              { id: 'meetings', label: 'Meetings', icon: Users },
              { id: 'tasks', label: 'Tasks', icon: CheckCircle },
              { id: 'transcripts', label: 'Transcripts', icon: FileText },
              { id: 'calendar', label: 'Calendar', icon: Calendar },
              { id: 'integrations', label: 'Integrations', icon: Zap },
              { id: 'analytics', label: 'Analytics', icon: TrendingUp },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center px-3 py-2 text-left rounded-lg transition-colors ${
                  activeTab === item.id
                    ? 'bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-100'
                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                <item.icon className="h-5 w-5 mr-3" />
                {item.label}
              </button>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border dark:border-gray-700">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600">{stat.title}</p>
                        <p className="text-lg font-semibold text-gray-900 dark:text-white">{stat.value}</p>
                        <p className="text-sm text-green-600">{stat.change}</p>
                      </div>
                      <stat.icon className={`h-8 w-8 ${stat.color}`} />
                    </div>
                  </div>
                ))}
              </div>

              {/* Recording Controls */}
              <RecordingControls />

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Recent Meetings */}
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border dark:border-gray-700">
                  <div className="p-6 border-b">
                    <div className="flex items-center justify-between">
                      <h2 className="text-lg font-semibold mb-4 dark:text-white">Recent Meetings</h2>
                      <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">View All</button>
                    </div>
                  </div>
                  <div className="space-y-3">
                    {recentMeetings.map((meeting, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                        <div>
                          <h3 className="font-medium text-gray-900 dark:text-white">{meeting.title}</h3>
                          <p className="text-sm text-gray-500 dark:text-gray-300">{meeting.date} • {meeting.duration} • {meeting.participants} participants</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className={`px-2 py-1 text-xs rounded-full ${
                            meeting.status === 'completed' ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100' : 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-100'
                          }`}>
                            {meeting.status}
                          </span>
                          <span className="text-sm text-gray-500 dark:text-gray-300">{meeting.tasks} tasks</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Today's Schedule */}
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border dark:border-gray-700">
                  <div className="p-6 border-b">
                    <h2 className="text-lg font-semibold mb-4 dark:text-white">Today's Schedule</h2>
                  </div>
                  <div className="p-6 space-y-4">
                    {upcomingMeetings.map((meeting, index) => (
                      <div key={index} className="flex items-center justify-between p-3 border-l-4 border-purple-500 bg-purple-50 dark:bg-purple-900/30 rounded-r-lg">
                        <div>
                          <p className="font-medium text-gray-900 dark:text-white">{meeting.title}</p>
                          <p className="text-sm text-gray-500 dark:text-gray-300">At {meeting.time}</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className={`px-2 py-1 text-xs rounded-full ${
                            meeting.type === 'video' ? 'bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-100' :
                            meeting.type === 'hybrid' ? 'bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-100' :
                            'bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-100'
                          }`}>
                            {meeting.type}
                          </span>
                          <button className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300">
                            <Play className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Quick Actions */}
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border dark:border-gray-700">
                  <div className="p-6 border-b">
                    <h2 className="text-lg font-semibold dark:text-white">Quick Actions</h2>
                  </div>
                  <div className="p-6 space-y-3">
                    <button className="w-full flex items-center justify-center px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                      <Plus className="h-4 w-4 mr-2" />
                      Schedule Meeting
                    </button>
                    <button className="w-full flex items-center justify-center px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50">
                      <Mic className="h-4 w-4 mr-2" />
                      Quick Record
                    </button>
                    <button className="w-full flex items-center justify-center px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50">
                      <MessageSquare className="h-4 w-4 mr-2" />
                      AI Assistant
                    </button>
                  </div>
                </div>

                {/* Active Tasks */}
                <div className="bg-white rounded-lg shadow-sm border">
                  <div className="p-6 border-b">
                    <div className="flex items-center justify-between">
                      <h2 className="text-lg font-semibold dark:text-white">Active Tasks</h2>
                      <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">4 pending</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <TaskList />
                  </div>
                </div>

                {/* Integrations Status */}
                <div className="bg-white rounded-lg shadow-sm border">
                  <div className="p-6 border-b">
                    <h2 className="text-lg font-semibold dark:text-white">Integrations</h2>
                  </div>
                  <div className="p-6 space-y-4">
                    {activeIntegrations.map((integration, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <span className="text-lg">{integration.icon}</span>
                          <span className="font-medium text-gray-900 dark:text-white">{integration.name}</span>
                        </div>
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          integration.status === 'connected' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {integration.status}
                        </span>
                      </div>
                    ))}
                    <button className="w-full mt-4 px-4 py-2 border-2 border-dashed border-gray-300 text-gray-600 rounded-lg hover:border-blue-500 hover:text-blue-600">
                      <Plus className="h-4 w-4 mx-auto" />
                      <span className="block text-sm mt-1">Add Integration</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'meetings' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Meetings</h1>
                <div className="flex items-center space-x-3">
                  <button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                    <Filter className="h-4 w-4 mr-2" />
                    Filter
                  </button>
                  <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                    <Plus className="h-4 w-4 mr-2" />
                    New Meeting
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm border">
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 divide-y divide-gray-200 dark:divide-gray-700">
                    <thead className="bg-gray-50 dark:bg-gray-800">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Meeting</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Duration</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Participants</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                      {recentMeetings.map((meeting) => (
                        <tr key={meeting.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="font-medium text-gray-900 dark:text-white">{meeting.title}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">{meeting.date}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">{meeting.duration}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">{meeting.participants}</td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`px-2 py-1 text-xs rounded-full ${
                              meeting.status === 'completed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                            }`}>
                              {meeting.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            <div className="flex items-center space-x-2">
                              <button className="text-blue-600 hover:text-blue-900">View</button>
                              <button className="text-gray-400 hover:text-gray-600">
                                <Download className="h-4 w-4" />
                              </button>
                              <button className="text-gray-400 hover:text-gray-600">
                                <Share2 className="h-4 w-4" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'tasks' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Tasks</h1>
                <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Task
                </button>
              </div>
              
              <div className="w-full bg-white dark:bg-gray-800 rounded-lg shadow-sm border dark:border-gray-700 p-6">
                <TaskList />
              </div>
            </div>
          )}

          {/* Other tab contents would go here */}
        </main>
      </div>
    </div>
  );
};

export default TavestackDashboard;