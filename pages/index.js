import Head from 'next/head'
import Image from 'next/image'
import Footer from '../comps/Footer'
import Navbar from '../comps/Navbar'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas"/>
      </Head>
      <div>
        <h2 className={styles.title}>HomePage</h2>
        <p className={styles.text}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore illum quis quam corrupti ratione voluptatibus harum pariatur exercitationem commodi rerum?</p>
        <p className={styles.text}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore illum quis quam corrupti ratione voluptatibus harum pariatur exercitationem commodi rerum?</p>
        <Link href="/ninjas"><a className={styles.btn}>See Ninja Listing</a></Link>
      </div>
    </>
   
  )
}
