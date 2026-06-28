
import "./globals.css";

export const metadata = {
  title: "Portillo AI",
  description: "The AI Operating System for Entrepreneurs",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
