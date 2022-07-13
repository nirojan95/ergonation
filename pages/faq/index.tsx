import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import AppBar from '../AppBar'
import Footer from '../Footer'
import ListItem from '@mui/material/ListItem';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';


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
        <Box sx={{display:{ xs: 'none', md: 'flex' }}}>
          <h2 className={styles.title}>
            Frequently Asked Questions
          </h2>
        </Box>
        <Box sx={{display:{ xs: 'flex', md: 'none' }, m:{xs:'10rem 0 1rem 0'}}}>
          <h3 className={styles.titleSmall}>
            Unique <a>Identities</a>
          </h3>
        </Box>
        <p className={styles.description}>
          Join Ergo Nation by participating in our next event{' '}
        </p>
        <Box sx={{m:{xs:'1rem 0 10rem 0', md:'0 0 2rem 0'}}} className={styles.downloadButton}>
          <a href='/anonymous_list.csv' download>
            <Button
              key="Download"
              sx={{
                ":hover": {
                  background:'none',
                  color:'#018749'
                },
                my: 2,
                mx: 1, 
                color: 'Black', 
                display: 'block', 
                fontSize: '1rem',
                border: '1px solid'
              }}
              className="navbutton"
            >
              Click here to download (.csv)
            </Button>
          </a>
        </Box>
        <Box sx={{display:{ xs: 'none', md: 'flex' }}}> 
        some words
        </Box>
      </main>
      <Footer/>
    </div>
  )
}
