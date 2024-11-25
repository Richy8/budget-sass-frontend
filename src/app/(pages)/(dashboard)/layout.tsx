import { DashboardTopLayout } from "@/app/_components";

export default function AuthEntryRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <DashboardTopLayout>{children}</DashboardTopLayout>
    </main>
  );
}
