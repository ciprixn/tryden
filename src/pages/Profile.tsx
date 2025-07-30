import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { 
  User, 
  Settings, 
  Bell, 
  Shield, 
  Heart, 
  Calendar, 
  Award, 
  Moon,
  Globe,
  LogOut,
  ChevronRight
} from "lucide-react";

const healthStats = [
  { label: "Brushing Streak", value: "12 days", icon: Award },
  { label: "Last Checkup", value: "3 months ago", icon: Calendar },
  { label: "Health Score", value: "85/100", icon: Heart },
];

const menuItems = [
  { icon: Bell, label: "Notifications", hasSwitch: true },
  { icon: Moon, label: "Dark Mode", hasSwitch: true },
  { icon: Globe, label: "Language", value: "English", hasChevron: true },
  { icon: Shield, label: "Privacy & Security", hasChevron: true },
  { icon: Settings, label: "App Settings", hasChevron: true },
];

export const Profile = () => {
  return (
    <div className="p-4 space-y-6">
      {/* Profile Header */}
      <Card className="shadow-card bg-gradient-card">
        <CardContent className="p-6 text-center">
          <Avatar className="w-20 h-20 mx-auto mb-4">
            <AvatarImage src="" />
            <AvatarFallback className="text-lg bg-primary text-primary-foreground">
              <User className="w-8 h-8" />
            </AvatarFallback>
          </Avatar>
          <h2 className="font-bold text-lg mb-1">Welcome Back!</h2>
          <p className="text-muted-foreground text-sm mb-4">
            Continue your journey to better health
          </p>
          <Button variant="outline" size="sm">
            Complete Profile
          </Button>
        </CardContent>
      </Card>

      {/* Health Stats */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <Heart className="w-5 h-5 text-secondary" />
            Your Health Overview
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-4">
            {healthStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-accent rounded-lg p-3 mb-2">
                  <stat.icon className="w-5 h-5 text-primary mx-auto" />
                </div>
                <p className="font-semibold text-sm">{stat.value}</p>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Achievements */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <Award className="w-5 h-5 text-secondary" />
            Recent Achievements
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-secondary/20 rounded-full flex items-center justify-center">
                <Award className="w-5 h-5 text-secondary" />
              </div>
              <div className="flex-1">
                <p className="font-medium text-sm">Consistency Champion</p>
                <p className="text-xs text-muted-foreground">Brushed teeth 7 days in a row</p>
              </div>
              <Badge variant="secondary" className="text-xs">New</Badge>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                <Calendar className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1">
                <p className="font-medium text-sm">Health Explorer</p>
                <p className="text-xs text-muted-foreground">Completed first AI scan</p>
              </div>
              <Badge variant="outline" className="text-xs">1 day ago</Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Settings Menu */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <Settings className="w-5 h-5 text-primary" />
            Settings
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {menuItems.map((item, index) => (
            <div key={index} className="flex items-center justify-between p-3 hover:bg-accent rounded-lg transition-colors cursor-pointer">
              <div className="flex items-center gap-3">
                <item.icon className="w-4 h-4 text-muted-foreground" />
                <span className="font-medium text-sm">{item.label}</span>
              </div>
              <div className="flex items-center gap-2">
                {item.value && (
                  <span className="text-xs text-muted-foreground">{item.value}</span>
                )}
                {item.hasSwitch && <Switch />}
                {item.hasChevron && <ChevronRight className="w-4 h-4 text-muted-foreground" />}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Authentication Notice */}
      <Card className="shadow-card border-primary/20">
        <CardContent className="p-4">
          <div className="flex items-center gap-3 mb-3">
            <Shield className="w-5 h-5 text-primary" />
            <h3 className="font-medium text-sm">Secure Your Data</h3>
          </div>
          <p className="text-xs text-muted-foreground mb-3">
            Create an account to sync your health data across devices and access advanced features.
          </p>
          <div className="flex gap-2">
            <Button size="sm" className="flex-1">Sign Up</Button>
            <Button variant="outline" size="sm" className="flex-1">Sign In</Button>
          </div>
        </CardContent>
      </Card>

      {/* Logout */}
      <Button variant="destructive" className="w-full" disabled>
        <LogOut className="w-4 h-4 mr-2" />
        Sign Out
      </Button>
    </div>
  );
};