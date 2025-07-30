import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Bell, Award, Droplets, Clock, PlayCircle, CheckCircle2, Flame } from "lucide-react";
import heroImage from "@/assets/healthcare-hero.jpg";
import dentalIcon from "@/assets/dental-icon.jpg";

const dailyTips = [
  "Brush your teeth for at least 2 minutes twice daily",
  "Use fluoride toothpaste to strengthen enamel",
  "Floss daily to remove plaque between teeth",
  "Limit sugary and acidic foods and drinks",
  "Visit your dentist every 6 months for checkups"
];

const challenges = [
  { id: 1, title: "7-Day Brush Challenge", progress: 5, total: 7, icon: CheckCircle2 },
  { id: 2, title: "Hydration Hero", progress: 6, total: 8, icon: Droplets },
  { id: 3, title: "Floss Master", progress: 3, total: 7, icon: Flame },
];

export const Home = () => {
  const [currentTip, setCurrentTip] = useState(0);

  return (
    <div className="p-4 space-y-6">
      {/* Hero Section */}
      <div className="relative rounded-2xl overflow-hidden bg-gradient-hero shadow-card">
        <img 
          src={heroImage} 
          alt="Healthcare Hero" 
          className="w-full h-48 object-cover opacity-20"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6">
          <h1 className="text-2xl font-bold text-white mb-2">Your Health Companion</h1>
          <p className="text-white/90 text-sm mb-4">AI-powered dental care and health monitoring</p>
          <Badge variant="secondary" className="bg-white/20 text-white">
            <Bell className="w-3 h-3 mr-1" />
            2 reminders today
          </Badge>
        </div>
      </div>

      {/* Daily Challenges */}
      <Card className="shadow-card bg-gradient-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <Award className="w-5 h-5 text-secondary" />
            Daily Challenges
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {challenges.map((challenge) => (
            <div key={challenge.id} className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <challenge.icon className="w-4 h-4 text-primary" />
                  <span className="font-medium text-sm">{challenge.title}</span>
                </div>
                <Badge variant="outline" className="text-xs">
                  {challenge.progress}/{challenge.total}
                </Badge>
              </div>
              <Progress 
                value={(challenge.progress / challenge.total) * 100} 
                className="h-2"
              />
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Daily Tips */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <img src={dentalIcon} alt="Dental" className="w-5 h-5 rounded" />
            Daily Dental Tip
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-4">
            {dailyTips[currentTip]}
          </p>
          <div className="flex gap-2">
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => setCurrentTip((prev) => (prev + 1) % dailyTips.length)}
            >
              Next Tip
            </Button>
            <Button variant="secondary" size="sm" className="flex items-center gap-1">
              <PlayCircle className="w-3 h-3" />
              Watch Video
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 gap-3">
        <Card className="shadow-soft hover:shadow-card transition-shadow cursor-pointer">
          <CardContent className="p-4 text-center">
            <Clock className="w-8 h-8 text-primary mx-auto mb-2" />
            <h3 className="font-medium text-sm">Set Reminder</h3>
            <p className="text-xs text-muted-foreground">Brushing & flossing</p>
          </CardContent>
        </Card>
        <Card className="shadow-soft hover:shadow-card transition-shadow cursor-pointer">
          <CardContent className="p-4 text-center">
            <Droplets className="w-8 h-8 text-secondary mx-auto mb-2" />
            <h3 className="font-medium text-sm">Water Tracker</h3>
            <p className="text-xs text-muted-foreground">Stay hydrated</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};