import "./globals.css";

export const metadata = {
  title: "Kashvi Creation | Exclusive Sarees",
  description: "Discover timeless elegance with Kashvi Creation's designer sarees.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
