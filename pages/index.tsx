import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import AppBar from './AppBar'
import ListItem from '@mui/material/ListItem';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TwitterIcon from '@mui/icons-material/Twitter';
import IconButton from '@mui/material/IconButton';
import TelegramIcon from '@mui/icons-material/Telegram';
import RedditIcon from '@mui/icons-material/Reddit';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>ErgoNation</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <AppBar isHome = {true}/>
        <div className={styles.ergonationlogo}>
          <Image src="/ergonation.svg" className ={styles.filtergreen} alt="Ergonation Logo" width={1000} height={400}/>
        </div>
        <Box sx={{display:{ xs: 'none', md: 'flex' }}}>
          <h2 className={styles.title}>
            Proof of <a>Humanity</a>
          </h2>
        </Box>
        <Box sx={{display:{ xs: 'flex', md: 'none' }}}>
          <h3 className={styles.titleSmall}>
            Proof of <a>Humanity</a>
          </h3>
        </Box>
        <p className={styles.description}>
          Get started by joining our next event{' '}
        </p>

        <div className={styles.numberlist}>
          <h3>Create ID</h3>
            <div className ={styles.listItems}>
              <ListItem sx={{ display: 'list-item' }}>
                Create a new <a href="https://docs.ergoplatform.com/dev/wallet/" target="_blank" rel="noopener noreferrer"> Ergo wallet</a> address. This address is your anonymous ID. Do not reveal it to anyone.
              </ListItem>
              <ListItem sx={{ display: 'list-item' }}>
                Use <a href="https://github.com/ergoMixer/ergoMixBack/releases" target="_blank" rel="noopener noreferrer">ErgoMixer</a> to send a minimum of 1 ERG into it. The mixing process may take some time. Start it right away to be ready for the verification event.
              </ListItem>
              <ListItem sx={{ display: 'list-item' }}>
                All funds going in and out of the ID address must go through the mixer to preserve anonymity.            
              </ListItem>
            </div>
          <h3>Verify ID </h3>
            <div className ={styles.listItems}>
              <ListItem sx={{ display: 'list-item' }}>
                Join the first monthly ID verification event on June 7th 2022 at 20.00 UTC for instructions. The event itself will start 20.15 UTC, and end 20.30 UTC.
              </ListItem>
              <ListItem sx={{ display: 'list-item' }}>
                Participants will play a short game. If successful, they will be able to verify the ID on-chain.
              </ListItem>
            </div>
          <h3>Use ID </h3>
            <div className ={styles.listItems}>
              <ListItem sx={{ display: 'list-item' }}>
                Ergo projects can engage the ID holders in governance, testing, whitelist, rewards, tasks, etc.
              </ListItem>
              <ListItem sx={{ display: 'list-item' }}>
                The IDs will gather reputation through actions in the ecosystem. We encourage projects to engage those IDs that actively support decentralization, anonymity and the spirit of Ergo (see Ergo Manifesto).
              </ListItem>
            </div>
        </div>
      </main>

      <footer className={styles.footer}>
       <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
            >
          <TwitterIcon/>
        </IconButton>
         <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
            >
          <TelegramIcon/>
        </IconButton>
        <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
            >
            <RedditIcon/>
          </IconButton>
        <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
            >
            <Image src="/Discord-Logo-Black.svg" alt="Discord Logo" width={24} height={24} />
          </IconButton>
      </footer>
    </div>
  )
}
