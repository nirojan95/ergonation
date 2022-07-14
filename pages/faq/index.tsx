import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import AppBar from '../AppBar'
import Footer from '../Footer'
import ListItem from '@mui/material/ListItem';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Accordian from './FAQaccordian'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>ErgoNation</title>
        <meta name="description" content="Frequently Asked Questions" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <AppBar isHome={false}/>
        <Box>
          <h2 className={styles.title}>
            Frequently Asked Questions
          </h2>
        </Box>
        <p className={styles.description}>
          For more in-depth information check out the DOCS{' '}
        </p>
        <Box sx={{width:{ xs: 300, md: 650 }, mt:3}}>
          <Accordian/>
        </Box>
      </main>
      <Footer/>
    </div>
  )
}
