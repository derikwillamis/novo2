import styles from './Post.module.css'

export function Post () {
    return (
        <article className={styles.Post}>
          <header>
            <div className={styles.author}>
              <img className={styles.avatar} src="https://github.com/derikwillamis.png"/>
              <div className={styles.authorInfo}>
                 <strong>Derik Willamis</strong>
                 <span>Dev Developer</span>
              </div>
            </div>

            <time title="11 de Maio as 08:13h" dataTime="2022-05-11 08:13:30">Publicado Ha 1h</time>
          </header>

          <div className={styles.content}>
            <p>Fala galeraa 👋</p>
            <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
            <p><a href="">jane.design/doctorcare</a></p>
             <p>
             <a href="">#novoprojeto</a>{' '}
              <a>#nlw</a>{' '}
             <a>#rocketseat</a>{' '}
            </p>
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
        </article>
        )
     }