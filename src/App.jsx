import { Header } from "./components/header"
import {Post} from "./components/Post"
import { Sidebar } from "./components/sidebar"

import './global.css'

import styles from './app.module.css'


const posts = [
  {
    id:1,
    author: {
      avatarUrl:'https://github.com/derikwillamis.png',
      name:'derik willamis',
      role:'CTO @ rocketeat'
    },
    content: [
      {type:'paragragh', content:'Fala galeraa 👋',},
      {type:'paragragh', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type:'link', content:'jane.design/doctorcare</a>'},
    ],
    publishedAt:new Date ('2022-05-03 20:00:00')
  },
  {
    id:2,
    author: {
      avatarUrl:'https://github.com/derikwillamis.png',
      name:'carlos eduardo',
      role:'Educador @ rocketeat'
    },
    content: [
      {type:'paragragh', content:'Fala galeraa 👋',},
      {type:'paragragh', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type:'link', content:'jane.design/doctorcare</a>'},
    ],
    publishedAt:new Date ('2022-05-05 20:00:00')
  }
];


export function App() {

  return (
    <div>
      <Header/>

   <div className={styles.wrapper}>
    <Sidebar />
    <main>
      {posts.map(post => {
       return (
       <Post 
          author={post.author}
          content={post.content}
          publishedAt={post.publishedAt}
        />
       )
      })}
    </main>
   </div>
  </div>
  )
}
