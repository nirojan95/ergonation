import styles from '../styles/Home.module.css'
import Image from 'next/image'
import Typography from '@mui/material/Typography';
import TwitterIcon from '@mui/icons-material/Twitter';
import IconButton from '@mui/material/IconButton';
import TelegramIcon from '@mui/icons-material/Telegram';
import RedditIcon from '@mui/icons-material/Reddit';

export default function Footer() {
	return(
      	<footer className={styles.footer}>
			{/*       <IconButton
			      size="large"
			      aria-label="account of current user"
			      aria-controls="menu-appbar"
			      aria-haspopup="true"
			      color="inherit"
			    >
			  <TwitterIcon/>
			</IconButton>*/}
			 <IconButton
			      size="large"
			      aria-label="account of current user"
			      aria-controls="menu-appbar"
			      aria-haspopup="true"
			      color="inherit"
			    >
			  <a href="https://t.me/+iwWTrzMcfq0zZDcy" target="_blank" rel="noopener noreferrer">
			    <TelegramIcon/>
			  </a>
			</IconButton>
			{/*        <IconButton
			      size="large"
			      aria-label="account of current user"
			      aria-controls="menu-appbar"
			      aria-haspopup="true"
			      color="inherit"
			    >
			    <RedditIcon/>
			  </IconButton>*/}
			<IconButton
			      size="large"
			      aria-label="account of current user"
			      aria-controls="menu-appbar"
			      aria-haspopup="true"
			      color="inherit"
			    >
			  <a href="https://discord.gg/DNqyq6C3rH" target="_blank" rel="noopener noreferrer">
			    <Image src="/Discord-Logo-Black.svg" alt="Discord Logo" width={24} height={24} />
			  </a>
			</IconButton>
		</footer>
		)
}