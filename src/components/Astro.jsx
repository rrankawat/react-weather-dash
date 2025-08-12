const Astro = ({ astro }) => {
  return (
    <div className='astro'>
      <h4>Sunrise and Sunset</h4>
      <span>🌅 Sunrise {astro.sunrise}</span>
      <span>🌄 Sunset {astro.sunset}</span>
    </div>
  )
}

export default Astro
