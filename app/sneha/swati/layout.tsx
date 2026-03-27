export default function SwatiLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section>
      <h3>Swati Layout</h3>
      <div>{children}</div>
    </section>
  );
}