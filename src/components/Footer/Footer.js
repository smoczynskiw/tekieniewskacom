import Contact from './Contact'
import Text from './Text'
import SocialLinks from './SocialLinks'

const style = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '90vw',
  borderTop: '1px solid black',
  marginTop: '75px',
  padding: '40px 0',
  height: '5%',
}

const lineStyle = {
  width: '15vw',
  height: '1px',
  backgroundColor: '#191919',
  border: 'none',
}

function Footer() {
  return (
    <div style={style}>
      <Contact />
      <hr style={lineStyle} />
      <Text text={'© 2022 Gosia Tekieniewska. All rights reserved'} />
      <hr style={lineStyle} />
      <SocialLinks />
    </div>
  )
}

export default Footer