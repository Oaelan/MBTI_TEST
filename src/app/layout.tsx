import "./globals.css";
import MotionProvider from "@/providers/MotionProvider";
import Container from "@/components/Container";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="kr">
      <body className="w-screen h-screen center">
        <MotionProvider>
          <Container>{children}</Container>
        </MotionProvider>
      </body>
    </html>
  );
}
