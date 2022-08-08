import { Avatar } from './Avatar'
import { Comment } from './comment'
import styles from './Post.module.css'

export function Post ({author, placeholder}) {
   const publishedDateFormtted = new intl.DataTimeFormat('pt-BR',{
    day:'2-digit',
    month:'long',
    hour:'2-digit',
    minute:'2-digit'
   }).format(placeholder)

    return (
        <article className={styles.Post}>
          <header>
            <div className={styles.author}>
              <Avatar  src={author.avatarUrl}/>
              <div className={styles.authorInfo}>
                 <strong>{author.name}</strong>
                 <span>{author.role}</span>
              </div>
            </div>

            <time title="11 de Maio as 08:13h" dataTime="2022-05-11 08:13:30">Publicado Ha 1h
              {publishedDateFormtted}
            </time>
          </header>

          <div className={styles.content}>
            
          </div>

          <form className={styles.commentForm}>
            <strong>Deixe seu feedback</strong>

            <textarea
            placeholder="Deixe um comentario"
            />

           <footer>
           <button type="submit">Publicar</button>
           </footer>
          </form>

          <div className={styles.commentList}>
            <Comment/>
            <Comment/>
            <Comment/>
          </div>
        </article>
        )
     }