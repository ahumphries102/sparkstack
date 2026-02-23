import { serviceData } from "@/app/data/serviceData"
import Link from "next/link"

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
