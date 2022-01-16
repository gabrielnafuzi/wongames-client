import { Home } from '@/templates'

const Index = (props) => {
  return <Home {...props} />
}

export const getStaticProps = () => {
  return {
    props: {
      heading: 'Olha eu aqui'
    }
  }
}

export default Index
