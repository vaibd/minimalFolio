import { ReactNode } from "react";
import { ThemeProvider } from "./theme-provider";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

interface ProvidersProps {
  children: ReactNode;
}

export function RootProviders({ children }: ProvidersProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <Analytics />
      {children}
      <SpeedInsights />
    </ThemeProvider>
  );
}
