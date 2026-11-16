
"use client"
import Header from "@/Header/Header";
 import "./global.css";





export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body>
        <Header />

        {children}

        
      </body>
    </html>
  );
}
