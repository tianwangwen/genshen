import Head from 'next/head'
import { versions } from '../data'
import styles from './index.module.scss'

console.log('versions ->', versions)

export default function Versions() {
  return (
    <>
      <Head>
        <title>4星角色复刻表</title>
      </Head>
      <main className={styles.main}>
        <div>
          {
            versions.map((item) => (
              <div key={item.version} className={styles.item}>
                <div>{item.title} <span>{item.version}</span></div>
                <div>{item.startTime} - {item.endTime}</div>
              </div>
            ))
          }
        </div>
      </main>
    </>
  )
}
