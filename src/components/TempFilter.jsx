const TempFilter = ({ tempUnit, setTempUnit }) => {
  return (
    <div className='temp-filter'>
      <span
        onClick={() => setTempUnit(0)}
        className={tempUnit === 0 ? 'active' : ''}
      >
        °C
      </span>
      <span>|</span>
      <span
        onClick={() => setTempUnit(1)}
        className={tempUnit === 1 ? 'active' : ''}
      >
        °F
      </span>
    </div>
  )
}

export default TempFilter
