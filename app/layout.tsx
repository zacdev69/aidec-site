export const metadata = {
  title: "AIDEC™ — AI Decision Architecture & Execution Core",
  description: "A decision-grade system for executives and operators."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ background: "#020617", color: "#e5e7eb", margin: 0 }}>
        {children}
      </body>
    </html>
  );
}
