import Text from './Text'
import Arrow from './Arrow'
import CTA from './CTA'

const style = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  alignItems: 'center',
  width: '650px'
}

function SeeMyWork({language}) {
  return (
    <div style={style}>
      <Text language={language}/>
      <Arrow />
      <CTA language={language}/>
    </div> 
  )
}

export default SeeMyWork