import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';
import Image from 'next/image'

function AppBar({isHome}) {
  let logo = <a></a>;
  if (!isHome){  
    logo = <div className={styles.ergonationlogoNav}>
      <Link href="/">
        <a>
          <Image src="/ergonation.svg" alt="Ergonation Logo" width={100} height={50}/>   
        </a>
      </Link>
    </div>;
  } 

  return (
    <Box sx={{flexGrow: 0 , display:'flex', width:'100%', position: 'relative', alignItems:'center', height:'4rem'}}>
        {logo}
      <Box sx={{flexGrow: 1 , display:'flex', borderBottom: '1px solid #eaeaea', width:'100%', justifyContent:{xs:'right', md:'center'}, position: 'absolute'}}>
        <Link href="/docs">
          <Button
              key="Documentation"
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
              }}
              className="navbutton"
            >
              Docs
          </Button>
        </Link>
        <Link href="/id-list">
          <Button
              key="ΣID List"
              sx={{
                ":hover": {
                  background:'none',
                  color:'#018749'
                },
                my: 2,
                mx: 1, 
                color: 'Black', 
                display: 'block', 
                fontSize: '1rem'
              }}
              className="navbutton"
            >
              ΣID List
          </Button>
        </Link>
      </Box>
   </Box>
  );
}

AppBar.propTypes = {
  isHome: PropTypes.bool,
};

export default AppBar;