import { BaseLayout } from "@/app/_components";

export default function BaseRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <BaseLayout>{children}</BaseLayout>
    </main>
  );
}
