import { useState } from 'react'
import Slider from '@/components/Slider'
import styles from '@/styles/Landing.module.scss'


const Landing = () => {

    const [rescuer, setRescuer] = useState(true)

    const handleRescuer = () => {
        setRescuer(true)

    }

    const handleAdopter = () => {
        setRescuer(false)

    }

    return (
        <>
            <header className={`hero  d-flex justify-content-center align-items-center text-center ${styles.hero}`}  >
                <div className={`gradient ${styles.gradient}`}>
                    <div className='m-5'>

                        <img src='logo-yali.svg' alt='logo-yali' width='200' className='mb-3' />

                        <h1 className={`m-5 header_title display-1 ${styles.header_title}`}> ¡Llena tu vida de <span style={{ color: '#FB7043' }}>alegría!</span></h1>
                        <p className={`m-5 header_p ${styles.header_p}`}> Mascotas adoptadas:</p>
                        <button className={`header_btn ${styles.header_btn}`}> 000,000 </button>

                    </div>

                </div>


            </header>

            <main className={`bg-white-1 main ${styles.main}`}>
                <div className='d-flex justify-content-center m-5 row main-btns '>
                    <button type='button' className={`btn_orange btn-lg m-3  ${styles.btn} col-sm-12 col-lg-3 ${styles.btn_orange}`}><img src='pet_paw.svg' alt='pet-paw' className='me-2' width={30}></img>¡Adopta una mascota!</button>

                    <button type='button' className={`btn_outline btn-lg m-3  ${styles.btn} col-sm-12 col-lg-3 ${styles.btn_outline}`}><img src='pet_biscuit.svg' alt='pet-biscuit' className='me-2' width={30}></img>¡Dar en adopción!</button>

                </div>



                <section >
                    <div className='d-flex justify-content-between align-items-end row'>
                        <img src='cat-main.png' alt='cat-main' className='cat-img  col-3  col-lg-2' />
                        <h1 className={`section_title col-6 display-3 mb-5 ${styles.section_title}`}>¿Cómo funciona Yali?</h1>
                        <img src='dog-main.png' alt='dog-main' className='dog-img col-3  col-lg-2' />
                    </div>

                    <ul className={`nav nav-underline ${styles.nav_underline}`} >
                        <li className='nav-item'>
                            <button className={`nav-link ${styles.nav_link} `} onClick={handleRescuer} ><img src='biscuit-icon.svg' alt='biscuit-icon' width={30} className='mx-3'></img>Soy rescatista</button>
                        </li>
                        <li className='nav-item'>
                            <button className={`nav-link ${styles.nav_link} `} onClick={handleAdopter}><img src='paw-icon.svg' alt='paw-icon' width={30} className='mx-3'></img>¡Quiero adoptar!</button>
                        </li>

                    </ul>

                    <div>
                        {rescuer &&
                            <div className={`rescuer ${styles.rescuer}`}></div>

                        }
                        {!rescuer &&
                            <div className={`adopter ${styles.adopter}`}></div>
                        }


                    </div>

                </section>


                <section className='mt-5 bg-white-1 '>

                    <h1 className={`section_title text-center display-5 ${styles.section_title}`} ><img src='paws.png' className='me-2' width={50}></img>¡Encuentra tu compañero perfecto!</h1>
                    <h3 className={`section_subtitle text-center  ${styles.section_subitle}`}>Da amor incondicional ¡Adopta una mascota!</h3>


                   


                </section>

                    <Slider />
            

            </main>

        </>
    )
}

export default Landing