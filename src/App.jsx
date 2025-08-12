import { useState } from 'react'
import SearchInput from './components/SearchInput'
import Button from './components/Button'
import DayCard from './components/DayCard'
import CurrentWeather from './components/CurrentWeather'
import Astro from './components/Astro'
import Graph from './components/Graph'
import TempFilter from './components/TempFilter'

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY

const App = () => {
  const [search, setSearch] = useState('')
  const [weather, setWeather] = useState({})
  const [presentDay, setPresentDay] = useState(0)
  const [tempUnit, setTempUnit] = useState(0)

  const handleSubmit = async e => {
    e.preventDefault()

    if (search.length > 1) {
      const res = await fetch(
        `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${search}&days=3`
      )
      const data = await res.json()
      setWeather(data)
    }
  }

  return (
    <>
      <div className='top-bar'>
        <h1>☁️ Weather Dash</h1>
        <TempFilter tempUnit={tempUnit} setTempUnit={setTempUnit} />
      </div>

      {/* Top Controls */}
      <form onSubmit={handleSubmit}>
        <div className='top-controls'>
          <SearchInput search={search} setSearch={setSearch} />
          <Button type='submit' className='btn'>
            Search
          </Button>
        </div>
      </form>

      {/* Weather Container */}
      {Object.keys(weather).length !== 0 && (
        <div className='container'>
          <CurrentWeather
            location={weather.location}
            current={weather.current}
            tempUnit={tempUnit}
          />

          <div className='middle-section'>
            {weather.forecast.forecastday.map((day, index) => (
              <DayCard
                key={day.date_epoch}
                day={day}
                index={index}
                presentDay={presentDay}
                onClick={() => setPresentDay(index)}
                tempUnit={tempUnit}
              />
            ))}
          </div>

          <div className='right-section'>
            <Astro astro={weather.forecast.forecastday[presentDay].astro} />
            <Graph
              hours={weather.forecast.forecastday[presentDay].hour}
              tempUnit={tempUnit}
            />
          </div>
        </div>
      )}
    </>
  )
}

export default App
