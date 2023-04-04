import Image from 'next/image';
import styles from '@/styles/Home.module.css'
import Link from 'next/link';
const Imagenav = () =>{
    return (
        <a class="navbar-brand" href="#">
        <Image src={'/assets/img/AERROWDEVLOGO.PNG'} className={styles.Image} width={175} height={175} alt="LOGO"/>
      </a>
    );
}

export default Imagenav;