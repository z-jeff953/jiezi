import { useEffect } from 'react'

const Home = () => {
  useEffect(() => {
    window.location.replace('/questionary')
  }, [])
  return <div>跳转中...</div>
}

export default Home
