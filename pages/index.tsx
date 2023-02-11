import styles from '@/styles/Home.module.css'
import Todo from '@/components/todo/Todo'
import Loader from '@/components/todo/Loader'

export default function Home() {
  return(
    <div>
      <Todo />
      {/* <Loader /> */}
    </div>
  )
}
