import { formatTime } from '../functions'

const CurrentWeather = ({ location, current, tempUnit }) => {
  return (
    <div className='left-section'>
      <div className='title'>
        <h2>
          📍 {location.name}, {location.country}
        </h2>
        <span>🕐 {formatTime(location.localtime).toUpperCase()}</span>
      </div>
      <div className='temp'>
        <img
          src={`https:${current.condition.icon}`}
          alt={current.condition.icon}
          style={{ width: '2.5rem', height: '2.5rem' }}
        />
        {tempUnit === 0 ? (
          <span>{current.temp_c}°C</span>
        ) : (
          <span>{current.temp_f}°F</span>
        )}
        <span>({current.condition.text})</span>
      </div>
      <div className='feels'>
        <span>
          Feels Like:{' '}
          {tempUnit === 0 ? (
            <span>{current.feelslike_c}°C</span>
          ) : (
            <span>{current.feelslike_f}°F</span>
          )}
        </span>
        <span>💧 Humidity: {current.humidity}%</span>
        <span>🌬️ {current.wind_kph} Km/h</span>
      </div>
    </div>
  )
}

export default CurrentWeather
