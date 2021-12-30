import Head from "next/head"
import Navbar from "@/components/Navbar"

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Layouts Example</title>
      </Head>
      <Navbar />
      <main>{children}</main>
    </>
  )
}
