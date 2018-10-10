import React from 'react'
import { Link } from 'gatsby'
import background from '../images/Background_header.png'
import anton from '../images/Anton_Filiptsov.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as heartRegular } from '@fortawesome/free-regular-svg-icons'
import { faFile } from '@fortawesome/free-solid-svg-icons'
import './header.scss'
import {
  faLinkedin,
  faGithub,
  faInstagram,
  faFacebook,
  faYoutube,
} from '@fortawesome/fontawesome-free-brands'

import reactSvg from '../images/icons/react.svg'
import css3 from '../images/icons/react.svg'
import git from '../images/icons/git.svg'
import github from '../images/icons/github-2.svg'
import html5 from '../images/icons/html5.svg'
import javascript from '../images/icons/javascript.svg'
import mobx from '../images/icons/mobx.svg'
import nodejs from '../images/icons/nodejs-1.svg'

const iconStyle = {
  color: 'white',
  fontSize: '2rem',
  margin: '10px',
}
const Header = ({ siteTitle }) => (
  <div
    style={{
      height: '75vh',
      backgroundImage: '../images/Background_header.png',
    }}
  >
    <img
      src={background}
      alt=""
      style={{ position: 'absolute', height: '75%' }}
    />
    <div
      style={{
        position: 'relative',
        top: '10%',
        margin: '0 auto',
        width: '60%',
      }}
    >
      <div
        style={{
          position: 'absolute',
          position: 'relative',
          width: '150px',
          margin: '0 auto',
          height: '150px',
          borderRadius: '50%',
          border: '2px solid grey',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
          backgroundImage:
            'url("https://media.licdn.com/dms/image/C5603AQFuXctXoDtWEg/profile-displayphoto-shrink_200_200/0?e=1544054400&v=beta&t=37_DeALhbrC8lFiYZ5CYwv8-RchuT0xbISeLpJVIgPM")',
        }}
      />
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          color: 'white',
        }}
      >
        <FontAwesomeIcon icon={faLinkedin} style={iconStyle} />
        <FontAwesomeIcon icon={faGithub} style={iconStyle} />
        <FontAwesomeIcon icon={faInstagram} style={iconStyle} />
        <FontAwesomeIcon icon={faFacebook} style={iconStyle} />
        <FontAwesomeIcon icon={faYoutube} style={iconStyle} />
        <FontAwesomeIcon icon={faFile} style={iconStyle} />
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <div
          style={{
            width: '40%',
            textAlign: 'center',
            borderBottom: '3px solid #ffbe58',
            backgroundColor: '#ffffff0a',
            width: '250px',
            height: '70px',
          }}
        >
          <h5 style={{ color: 'white', marginTop: '20px' }}>
            FullStack Developer
          </h5>
        </div>
        <div
          style={{
            width: '40%',
            textAlign: 'center',
            borderBottom: '3px solid #ffbe58',
            backgroundColor: '#ffffff0a',
            width: '250px',
            height: '70px',
          }}
        >
          <h5 style={{ color: 'white', marginTop: '20px' }}>
            QA Automation Engineer
          </h5>
        </div>
      </div>
    </div>
    <div />
    <h1 style={{ margin: 0 }}>
      <Link
        to="/"
        style={{
          color: 'white',
          textDecoration: 'none',
        }}
      >
        <div>
          <img src={reactSvg} alt="" />
        </div>
        <br />
        {siteTitle}
      </Link>
    </h1>
  </div>
)

export default Header
