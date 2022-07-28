import { Trash,ThumbsUp } from 'phosphor-react'
import styles from './Comment.module.css'

export function Comment() {
    return (
        <div className={styles.Comment}>
         <img src="https://github.com/derikwillamis.png" alt=""/>

         <div className={styles.commentBox}>
            <div className={styles.commentContent}>
                <header>
                    <div className={styles.autherAndTime}>
                        <strong>Derik Willmais</strong>
                        <time title="11 de Maio as 08:13h" dataTime="2022-05-11 08:13:30">Cerca de 1h atras</time>
                    </div>

                    <button title="Deletar comentario">
                        <Trash size={20}/>
                    </button>
                </header>
              
                <p>Muito bom Devon, parabéns!! 👏👏</p>
            </div>

            <footer>
              <button>
                <ThumbsUp />
                Aplaudir <span>20</span>
              </button>
            </footer>
         </div>
        </div>
    )
}