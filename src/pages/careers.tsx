import { Inter } from "next/font/google";

import styles from "~/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Careers() {
  return (
    <main className={`${styles.main} ${inter.className}`}>
      <h1>Careers here</h1>
    </main>
  );
}
