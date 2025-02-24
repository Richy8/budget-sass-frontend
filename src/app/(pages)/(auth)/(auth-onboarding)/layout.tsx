import { AuthOnboardingLayout } from "@/app/_components";

export default function AuthOnboardingRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <AuthOnboardingLayout>{children}</AuthOnboardingLayout>
    </main>
  );
}
