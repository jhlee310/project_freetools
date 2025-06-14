import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

interface PricingCardProps {
  name: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  buttonText: string;
  popular?: boolean;
}

export function PricingCard({
  name,
  price,
  period,
  description,
  features,
  buttonText,
  popular = false,
}: PricingCardProps) {
  return (
    <Card className={`h-full ${popular ? 'border-blue-500' : ''}`}>
      <CardHeader>
        {popular && (
          <div className="absolute top-0 right-0 -mt-4 mr-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-500 text-white">
              Popular
            </span>
          </div>
        )}
        <CardTitle className="text-2xl">{name}</CardTitle>
        <div className="mt-4 flex items-baseline">
          <span className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
            {price}
          </span>
          {period && (
            <span className="ml-1 text-xl text-gray-500 dark:text-gray-400">
              {period}
            </span>
          )}
        </div>
        <CardDescription className="mt-4">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3">
          {features.map((feature) => (
            <li key={feature} className="flex items-center">
              <Check className="h-5 w-5 text-green-500 mr-2" />
              <span className="text-gray-600 dark:text-gray-300">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button
          className="w-full"
          variant={popular ? "default" : "outline"}
        >
          {buttonText}
        </Button>
      </CardFooter>
    </Card>
  );
} 