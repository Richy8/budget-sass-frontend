import { BudgetEntryLayout } from "@/app/_components";

export default function BudgetEntryRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <BudgetEntryLayout>{children}</BudgetEntryLayout>
    </main>
  );
}
