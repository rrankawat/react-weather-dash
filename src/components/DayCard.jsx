const DayCard = ({ day, index, presentDay, onClick, tempUnit }) => {
  return (
    <div
      className={`day-card ${presentDay === index ? 'active' : ''}`}
      onClick={onClick}
    >
      <span>{day.date}</span>
      <div className='wrap'>
        <div>
          <span className='icon'>
            <img
              src={`https:${day.day.condition.icon}`}
              alt={day.day.condition.icon}
              style={{ width: '1.5rem', height: '1.5rem' }}
            />{' '}
            <span>{day.day.condition.text}</span>
          </span>
          <span>💧 {day.day.avghumidity}%</span>
        </div>
        <div>
          <span>
            Max:{' '}
            {tempUnit === 0 ? (
              <span>{day.day.maxtemp_c}°C</span>
            ) : (
              <span>{day.day.maxtemp_f}°F</span>
            )}
          </span>
          <span>
            Min:{' '}
            {tempUnit === 0 ? (
              <span>{day.day.mintemp_c}°C</span>
            ) : (
              <span>{day.day.mintemp_f}°F</span>
            )}
          </span>
        </div>
      </div>
    </div>
  )
}

export default DayCard
