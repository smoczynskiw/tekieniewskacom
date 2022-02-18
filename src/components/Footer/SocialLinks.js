import Link from './Link'

const style = {
  display: 'flex',
  justifyContent: 'space-between',
  minWidth: '20%'
}

function SocialLinks() {
  return (
    <div style={style}>
      <Link text='Behance' link={'https://www.behance.net/tekieniewska'}/>
      <Link text='Instagram' link={'https://instagram.com/gosiatek'}/>
      <Link text='Facebook' link={'https://www.facebook.com/gosia.tekieniewska/'}/>
    </div>
  )
}

export default SocialLinks