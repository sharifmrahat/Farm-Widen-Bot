import "./globals.css";

export const metadata = {
  title: "Farm Widen AI Assistant",
  description: "Your Farming Assistant"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
