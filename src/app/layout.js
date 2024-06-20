import { Inter } from "next/font/google";
import "./globals.css";
import Provider from "./Provider"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Crown Code Camp",
  description: "Crown Code Camp /HRS is coding website created for coders from coder",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider> {children} </Provider>
      </body>
    </html>
  );
}
