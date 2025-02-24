import { DashboardTopLayout } from "@/app/_components";

export default function DashboardEntryRootLayout({
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
