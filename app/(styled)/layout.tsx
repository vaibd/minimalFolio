export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // (styled) group contains all the routes with this particular style
  return <section className="pt-[8rem] max-sm:pt-[5rem]">{children}</section>;
}
