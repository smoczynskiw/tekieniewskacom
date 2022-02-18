import Text from './Text'

const style = {
  display: 'flex',
  justifyContent: 'space-between',
  minWidth: '20%'
}

function Contact() {
  return (
    <div style={style}>
      <Text text='tekieniewska@gmail.com' />
      <Text text='+48 889 331 839' />
    </div>
  )
}

export default Contact