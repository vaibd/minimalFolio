export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className='pt-[8rem]'>{children}</div>;
}
