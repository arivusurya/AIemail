"use client";

import { ConvexProvider, ConvexReactClient } from "convex/react";
import { ReactNode, useEffect } from "react";
import { GoogleOAuthProvider } from '@react-oauth/google';
import { UserProvider } from "@/context/UserContext";
import { ScreenProvider } from "@/context/ScreenContext";
import { DragDropLayoutProvider } from "@/context/DragDrapLayoutContext";

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

export function ConvexClientProvider({ children }: { children: ReactNode }) {


  return <ConvexProvider client={convex}>
    <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_CLIENT_ID!}>
      <UserProvider>
        <ScreenProvider>
          <DragDropLayoutProvider>
        {children}
        </DragDropLayoutProvider>
        </ScreenProvider>
    </UserProvider>
    </GoogleOAuthProvider>
    </ConvexProvider>;
}