import styles from '@/styles/Footer.module.scss'

const Footer = () => {
  return (
    <footer className={`mt-4 footer mb-4  ${styles.footer}`}>

      <div className=' ms-5 d-flex '>
        <p className='ms-5'>Síguenos</p>
        <img src='twitter-icon.svg' height={20} className='mx-2'></img>
        <img src='facebook-icon.svg' height={20} className='mx-2'></img>
        <img src='insta-icon.svg' height={20} className='mx-2'></img>
      </div>


      <hr className={styles.hr}></hr>


      <div className='justify-content-between px-5  d-flex'>
        <img className={`${styles.logo} ms-5`} src='logo-yali.svg' alt='logo-yali' width={100}></img>
       
        <ul className={`${styles.list}   me-5 d-flex`}>
          <li><a className={`${styles.a} a`} href='#'>Inicio</a></li>
          <li><a className={`${styles.a} mx-4  a`} href='#'>Adopta</a></li>
          <li><a className={`${styles.a} a`} href='#'>Dar en adopción</a></li>
        </ul>
        
        
      </div>


      <hr className={styles.hr}></hr>

        <div className=' d-flex justify-content-around'>

        <small className='cols-sm-12 col-6 '>Copyright © Yali 2023. Todos los derechos reservados</small>
        <small><a className={`${styles.a} a me-3 col-sm-12 col-lg-3 `} href='#'>Aviso de Privacidad</a></small>
        <small><a className={`${styles.a} a col-sm-12 col-lg-3`} href='#'> Términos y Condiciones</a></small>

        </div>
      

    </footer>
  )
}

export default Footer