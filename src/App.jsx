import { Header } from "./components/header"
import {Post} from "./components/Post"
import { Sidebar } from "./components/sidebar"

import './global.css'

import styles from './app.module.css'


export function App() {

  return (
    <div>
      <Header/>

   <div className={styles.wrapper}>
    <Sidebar />
    <main>
       <Post 
        author="derik" 
        content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. In hic praesentium minus magnam ad reprehenderit quo ipsa animi dolorem, numquam vero. Ea, ducimus illo quia id reprehenderit laborum tempora libero!"
       />
       <Post
        author="carlos"
        content="um novo post"
       /> 
    </main>
   </div>
  </div>
  )
}
