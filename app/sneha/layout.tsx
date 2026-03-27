export default function SnehaLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section>
      <h2>Sneha Layout</h2>
      <div>{children}</div>
    </section>
  );
}