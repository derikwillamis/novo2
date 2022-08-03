import { PencilLine } from 'phosphor-react'
import { Avatar } from './Avatar'

import styles from './sidebar.module.css'

export function Sidebar() {
    return (
      <aside className={styles.sidebar}>
        <img 
        className={styles.cover}
        src="https://i.pinimg.com/474x/f6/45/58/f64558c4529c9ec5024450c33c5a6c5d.jpg" 
        />

        <div className={styles.profile}>
          <Avatar src="https://github.com/derikwillamis.png"/>
            <strong>Derik Willamis</strong>
            <span>web developer</span>
        </div>

        <footer>
            <a href="#">
              <PencilLine size={20} />
               Editar seu perfil
            </a>
        </footer>
      </aside>
    )
}