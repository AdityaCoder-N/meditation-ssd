import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localfont from "next/font/local"
import "./globals.css";
import { Navbar } from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });
const bremenb = localfont({
  src:"../public/fonts/BREMENB.ttf",
  variable:"--font-bremenb"
})
const khand = localfont({
  src:[
    {
      path:"../public/fonts/khand/khand-light.ttf",
      weight:"300"
    },
    {
      path:"../public/fonts/khand/khand-regular.ttf",
      weight:"400"
    },
    {
      path:"../public/fonts/khand/khand-medium.ttf",
      weight:"500"
    },
    {
      path:"../public/fonts/khand/khand-semibold.ttf",
      weight:"600"
    },
    {
      path:"../public/fonts/khand/khand-bold.ttf",
      weight:"700"
    },
  ],
  variable:"--font-khand"
})
export const metadata: Metadata = {
  title: "Sarva Siddhi Peedam",
  description: "Welcome to Sarva Siddhi Peedam, a sacred space dedicated to the profound teachings of Swami Sarvanandhar and Swami Ayya. Immerse yourself in the divine experience of eternal wealth through the Four Steps to Divinity.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${bremenb.variable} ${khand.variable}`}>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
