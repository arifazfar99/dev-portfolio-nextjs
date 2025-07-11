import React from "react";
import { cn } from "@/lib/utils";

function MaxWidthWrapper({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn("mx-auto w-full max-w-screen-xl px-6 md:px-20", className)}
    >
      {children}
    </div>
  );
}

export default MaxWidthWrapper;
