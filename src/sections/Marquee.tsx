import './Marquee.css'

const Marquee = () => {
  const text = ['KUBA', 'MAROKO']
  const marqueeText = Array(10).fill(text).flat()

  const content = marqueeText.map((word, index) => (
    <span key={index} className={`${word.toLowerCase()}`}>
      {word}
    </span>
  ))

  return (
    <div
      style={{
        backgroundImage: "url('./ripped_paper.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      className="marquee-container flex items-center "
    >
      <div className="marquee ">
        {[...Array(10)].map((_, index) => (
          <div key={index} className="text">
            <span className="kuba font-bold">KUBA&nbsp;</span>
            <span className="maroko font-bold">MAROKO&nbsp;</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Marquee
