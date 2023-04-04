import Image from 'next/image';
import styles from '@/styles/Home.module.css'
import Link from 'next/link';
const Footer = () =>{
    return (
    <footer className="footer">
       <div class="footer__bg">
        <p class="footer-text text-center  text-white"> &#169; 2023 AerrowDev. All Right Reserved</p>
       </div>
    </footer>
    );
}

export default Footer;