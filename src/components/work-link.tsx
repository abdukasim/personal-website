import React from "react";
import { Button } from "./ui/button";

interface WorkLinkProps {
  title: string;
  description: string;
  logo: React.ReactNode;
}

export default function WorkLink({ title, description, logo }: WorkLinkProps) {
  return (
    <div className="flex items-center justify-between p-4 bg-stone-900 rounded-lg shadow-sm">
      <div className="flex items-center">
        <div className="w-12 h-12 mr-4 flex-shrink-0">{logo}</div>
        <div>
          <h3 className="text-base font-semibold text-white">{title}</h3>
          <p className="text-sm text-muted-foreground dark:text-muted-foreground-dark">
            {description}
          </p>
        </div>
      </div>
      <Button variant={"outline"}>Learn More</Button>
    </div>
  );
}
