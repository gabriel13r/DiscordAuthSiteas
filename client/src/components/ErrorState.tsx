import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";

interface ErrorStateProps {
  message: string;
  onRetry: () => void;
}

export default function ErrorState({ message, onRetry }: ErrorStateProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh]">
      <Card className="bg-[hsl(var(--discord-background-secondary))] max-w-md w-full border-none shadow-lg">
        <CardContent className="p-8">
          <div className="flex justify-center mb-6">
            <AlertCircle className="h-16 w-16 text-[hsl(var(--discord-red))]" />
          </div>
          <h2 className="text-2xl font-bold text-center mb-4">Authentication Error</h2>
          <p className="text-[hsl(var(--discord-text-muted))] mb-6 text-center">
            {message}
          </p>
          <Button 
            className="w-full bg-[hsl(var(--discord-blurple))] hover:bg-[hsl(var(--discord-blurple-dark))]"
            onClick={onRetry}
          >
            Try Again
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
