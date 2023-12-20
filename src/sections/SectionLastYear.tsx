// import ImageSlider  from '../components/imageSlider/ImageSlider'
// import slides from '../components/imageSlider/slides.json';

const SectionLastYear = () => {
  return (
    <div
      style={{
        backgroundImage: 'url(/pozadi_galerie.jpg)',
        backgroundSize: 'cover',
      }}
      className="grid grid-cols-1 grid-rows-1"
    >
      <div className="flex flex-col items-center text-white">
        <h2>Minulý ročník</h2>
        <p className="font-normal text-5xl">Dánsko a Bhután</p>
        <h3 className="font-normal ">2023</h3>
      </div>

      {/* <ImageSlider slides={slides}/> */}
    </div>
  )
}

export default SectionLastYear
