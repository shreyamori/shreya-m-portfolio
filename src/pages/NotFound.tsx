import { Link, useLocation } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <div className="container mx-auto px-6">
          <PageHeader
            label="Error"
            title="404"
            description="The page you're looking for doesn't exist or has been moved."
          />
          
          <div className="max-w-md mx-auto text-center pb-16">
            <p className="text-muted-foreground mb-8">
              You tried to access: <code className="text-sm bg-sage-light px-2 py-1 rounded">{location.pathname}</code>
            </p>
            <Button asChild>
              <Link to="/">
                <Home className="mr-2 h-4 w-4" />
                Return to Home
              </Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
