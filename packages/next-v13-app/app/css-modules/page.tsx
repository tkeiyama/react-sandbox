import { C } from './c'
import styles from './css-modules.module.scss'

export default function Page() {
  return <div className={styles.base}>
    <h1>TITLE</h1>
    <C />
  </div>
}