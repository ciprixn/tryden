import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Upload, Camera, FileImage, AlertTriangle, CheckCircle, Info } from "lucide-react";
import aiScanImage from "@/assets/ai-scan.jpg";

const mockAnalysisResults = {
  cavities: { confidence: 15, status: "low" },
  gingivitis: { confidence: 8, status: "very_low" },
  tartar: { confidence: 32, status: "moderate" },
  overall: "good"
};

export const AIScan = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setShowResults(false);
    }
  };

  const handleAnalyze = () => {
    if (!selectedFile) return;
    
    setIsAnalyzing(true);
    // Simulate AI analysis
    setTimeout(() => {
      setIsAnalyzing(false);
      setShowResults(true);
    }, 3000);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "very_low":
      case "low":
        return "text-secondary";
      case "moderate":
        return "text-yellow-600";
      case "high":
        return "text-destructive";
      default:
        return "text-muted-foreground";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "very_low":
      case "low":
        return <CheckCircle className="w-4 h-4" />;
      case "moderate":
        return <Info className="w-4 h-4" />;
      case "high":
        return <AlertTriangle className="w-4 h-4" />;
      default:
        return <Info className="w-4 h-4" />;
    }
  };

  return (
    <div className="p-4 space-y-6">
      {/* Header */}
      <div className="text-center space-y-2">
        <h1 className="text-2xl font-bold">AI Dental Analysis</h1>
        <p className="text-muted-foreground text-sm">
          Upload your dental X-ray for AI-powered analysis
        </p>
      </div>

      {/* Disclaimer */}
      <Alert>
        <AlertTriangle className="h-4 w-4" />
        <AlertDescription className="text-xs">
          This tool is for educational purposes only and does not replace professional medical diagnosis. 
          Always consult your dentist for proper evaluation.
        </AlertDescription>
      </Alert>

      {/* Upload Section */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileImage className="w-5 h-5 text-primary" />
            Upload X-ray Image
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {!selectedFile ? (
            <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
              <div className="space-y-4">
                <img src={aiScanImage} alt="AI Scan" className="w-20 h-20 mx-auto rounded-lg" />
                <div>
                  <p className="text-sm font-medium">Choose your X-ray image</p>
                  <p className="text-xs text-muted-foreground">JPG, PNG, or DICOM format</p>
                </div>
                <div className="flex flex-col gap-2">
                  <input
                    type="file"
                    accept=".jpg,.jpeg,.png,.dcm"
                    onChange={handleFileSelect}
                    className="hidden"
                    id="file-upload"
                  />
                  <label htmlFor="file-upload">
                    <Button variant="default" className="cursor-pointer" asChild>
                      <span>
                        <Upload className="w-4 h-4 mr-2" />
                        Choose File
                      </span>
                    </Button>
                  </label>
                  <Button variant="outline" size="sm">
                    <Camera className="w-4 h-4 mr-2" />
                    Take Photo
                  </Button>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="bg-accent rounded-lg p-4">
                <p className="font-medium text-sm">Selected file:</p>
                <p className="text-xs text-muted-foreground">{selectedFile.name}</p>
              </div>
              <Button 
                onClick={handleAnalyze} 
                disabled={isAnalyzing}
                className="w-full bg-gradient-scan"
              >
                {isAnalyzing ? "Analyzing..." : "Start AI Analysis"}
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Analysis Progress */}
      {isAnalyzing && (
        <Card className="shadow-card">
          <CardContent className="p-6 text-center space-y-4">
            <div className="animate-pulse">
              <div className="w-12 h-12 bg-primary/20 rounded-full mx-auto flex items-center justify-center">
                <FileImage className="w-6 h-6 text-primary" />
              </div>
            </div>
            <div>
              <p className="font-medium">AI Analysis in Progress</p>
              <p className="text-sm text-muted-foreground">Processing your dental X-ray...</p>
            </div>
            <Progress value={65} className="h-2" />
          </CardContent>
        </Card>
      )}

      {/* Results */}
      {showResults && (
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-secondary" />
              Analysis Results
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-3">
              {Object.entries(mockAnalysisResults).map(([key, value]) => {
                if (key === "overall" || typeof value === "string") return null;
                
                return (
                  <div key={key} className="flex items-center justify-between p-3 bg-accent rounded-lg">
                    <div className="flex items-center gap-2">
                      <span className={getStatusColor(value.status)}>
                        {getStatusIcon(value.status)}
                      </span>
                      <span className="font-medium text-sm capitalize">
                        {key.replace("_", " ")}
                      </span>
                    </div>
                    <div className="text-right">
                      <Badge 
                        variant="outline" 
                        className={`${getStatusColor(value.status)} border-current`}
                      >
                        {value.confidence}% risk
                      </Badge>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="bg-secondary-light p-4 rounded-lg">
              <h4 className="font-medium text-sm mb-2">Overall Assessment: Good</h4>
              <p className="text-xs text-muted-foreground">
                Your dental health appears to be in good condition. Continue with regular oral hygiene 
                and schedule a checkup with your dentist for professional evaluation.
              </p>
            </div>

            <Button variant="outline" className="w-full">
              Schedule Dentist Appointment
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
};