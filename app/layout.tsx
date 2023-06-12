import Sidebar from "@/components/Sidebar";
import "./globals.css";
import { Figtree } from "next/font/google";
import SupabaseProvider from "@/providers/SupabaseProvider";
import UserProvider from "@/providers/UserProvider";
import ModalProvider from "@/providers/ModalProvider";
import ToasterProvider from "@/providers/ToasterProvider";
import getProjects from "@/actions/getProjects";
import getTechnologies from "@/actions/getTechnologies";

const font = Figtree({ subsets: ["latin"] });

export const metadata = {
  title: "Simão Amaral",
  description: "Portfolio of Simão Amaral",
};

export const revalidate = 0;

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const projects = await getProjects();
  const technologies = await getTechnologies();

  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider />
        <SupabaseProvider>
          <UserProvider>
            <ModalProvider technologies={technologies} />
            <Sidebar projects={projects}>{children}</Sidebar>
          </UserProvider>
        </SupabaseProvider>
      </body>
    </html>
  );
}
