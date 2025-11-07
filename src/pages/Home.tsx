import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Plus, BarChart3, Download, ShieldCheck } from "lucide-react";

const Home = () => {
  return (
    <div className="mx-auto max-w-4xl space-y-8">
      <div className="text-center space-y-4 pt-8">
        <div className="inline-flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10">
          <ShieldCheck className="h-8 w-8 text-primary" />
        </div>
        <h1 className="text-4xl font-semibold tracking-tight">OSHA Logbook</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Compliance-focused incident logging for safety officers. Track, manage, and export OSHA-compliant incident reports with confidence.
        </p>
      </div>

      <div className="flex justify-center pt-4">
        <Link to="/incidents/new">
          <Button size="lg" className="gap-2">
            <Plus className="h-5 w-5" />
            Create New Incident
          </Button>
        </Link>
      </div>

      <div className="grid gap-6 md:grid-cols-3 pt-8">
        <Card className="transition-smooth hover:shadow-md">
          <CardHeader>
            <FileText className="h-8 w-8 text-primary mb-2" />
            <CardTitle>Log Incidents</CardTitle>
            <CardDescription>
              Enter OSHA Form 300/301 data with structured validation and inline guidance
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Link to="/incidents/new">
              <Button variant="outline" className="w-full">Get Started</Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="transition-smooth hover:shadow-md">
          <CardHeader>
            <BarChart3 className="h-8 w-8 text-primary mb-2" />
            <CardTitle>View Dashboard</CardTitle>
            <CardDescription>
              Track total incidents, lost workdays, and injury classifications
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Link to="/dashboard">
              <Button variant="outline" className="w-full">Open Dashboard</Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="transition-smooth hover:shadow-md">
          <CardHeader>
            <Download className="h-8 w-8 text-primary mb-2" />
            <CardTitle>Export Reports</CardTitle>
            <CardDescription>
              Generate OSHA-compliant CSVs that match official submission formats
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Link to="/export">
              <Button variant="outline" className="w-full">Export Data</Button>
            </Link>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-muted/50">
        <CardHeader>
          <CardTitle className="text-lg">OSHA Form References</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-sm">
          <div className="flex items-center justify-between p-3 bg-card rounded-md">
            <span className="font-medium">Form 300 - Log of Work-Related Injuries and Illnesses</span>
            <a 
              href="https://www.osha.gov/recordkeeping/forms" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              View Guide
            </a>
          </div>
          <div className="flex items-center justify-between p-3 bg-card rounded-md">
            <span className="font-medium">Form 301 - Injury and Illness Incident Report</span>
            <a 
              href="https://www.osha.gov/recordkeeping/forms" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              View Guide
            </a>
          </div>
          <div className="flex items-center justify-between p-3 bg-card rounded-md">
            <span className="font-medium">Form 300A - Summary of Work-Related Injuries and Illnesses</span>
            <a 
              href="https://www.osha.gov/recordkeeping/forms" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              View Guide
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Home;
