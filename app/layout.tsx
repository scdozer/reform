import localFont from "next/font/local";
import "@/app/globals.css";

export const metadata = {
  title: "Reform Collective",
  description: "Take home tester",
};

const soehne = localFont({
  src: "../public/fonts/soehne-buch.woff2",
  variable: "--font-soehne-buch",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={soehne.variable}>{children}</body>
    </html>
  );
}
