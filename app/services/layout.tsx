export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <section className="p-5">
      {children}
    </section>
  )
}
