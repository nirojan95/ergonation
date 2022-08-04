import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import AppBar from '../AppBar'
import Footer from '../Footer'
import ListItem from '@mui/material/ListItem';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Quiz from './Quiz'


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
            Quiz #YYYY/MM/DD
          </h2>
        </Box>
        <p className={styles.description}>
          Good Luck Participating in this Event{' '}
        </p>
        <Box sx={{width:{ xs: 300, md: 650 }, mt:3}}>
          <Quiz/>
        </Box>
      </main>
      <Footer/>
    </div>
  )
}
