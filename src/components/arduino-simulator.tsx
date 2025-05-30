
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

interface ArduinoSimulatorProps {
  title: string;
  description: string;
  wokwiId?: string;
  fallbackImage: string;
}

export function ArduinoSimulator({ title, description, wokwiId, fallbackImage }: ArduinoSimulatorProps) {
  const [isLoading, setIsLoading] = useState(true);
  
  // Handler for when the iframe is loaded
  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  return (
    <Card className="overflow-hidden">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="simulation">
          <TabsList className="mb-4">
            <TabsTrigger value="simulation">Simulation</TabsTrigger>
            <TabsTrigger value="schematic">Schematic</TabsTrigger>
          </TabsList>
          
          <TabsContent value="simulation" className="min-h-[400px] relative">
            {wokwiId ? (
              <>
                {isLoading && (
                  <div className="absolute inset-0 flex items-center justify-center bg-secondary/30">
                    <div className="text-center">
                      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mb-4 mx-auto"></div>
                      <p className="text-muted-foreground">Loading simulation...</p>
                    </div>
                  </div>
                )}
                <iframe 
                  src={`https://wokwi.com/projects/${wokwiId}?embed=1`}
                  title={`${title} Arduino Simulation`}
                  className="w-full h-[400px] border-0"
                  onLoad={handleIframeLoad}
                />
              </>
            ) : (
              <div className="flex flex-col items-center justify-center h-full">
                <img 
                  src={fallbackImage} 
                  alt={`${title} Simulation`} 
                  className="max-h-[350px] object-contain mb-4"
                />
                <p className="text-center text-muted-foreground">
                  Interactive simulation will be available soon. <br />
                  This is a placeholder image of the project.
                </p>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="schematic" className="min-h-[400px]">
            <div className="flex flex-col items-center justify-center h-full">
              <img 
                src={fallbackImage} 
                alt={`${title} Schematic`} 
                className="max-h-[350px] object-contain mb-4"
              />
              <p className="text-center text-muted-foreground">
                Circuit schematic diagram for the project.
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
