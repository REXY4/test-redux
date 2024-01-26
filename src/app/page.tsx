'use client'
import styles from "./page.module.css";
import SettingUseCase from "@/use-case/settingUseCase";

export default function Home() {
  const {angka, setIncrement} =SettingUseCase();
  return (
    <main className={styles.main}>
      <div>
        <p>{angka == null ? 0 : angka}</p>
        <button onClick={()=>setIncrement(12)}>
          tambah
        </button>
      </div>
    </main>
  );
}
