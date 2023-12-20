import type { ReactNode } from "react"
import Header from "./Header"
import SectionTopicHeader from "../../sections/SectionTopicHeader"

type Props = {
  children: ReactNode
}

export const HeroSection = ({children}: Props) => {
  const backgroundStyle = {
    backgroundImage: "url('../../public/pozadi_.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    width: '100%', 
    height: '100%'
  };
  return (
    <div style={backgroundStyle}>
      <Header />
      {children}
    </div>
  )
}