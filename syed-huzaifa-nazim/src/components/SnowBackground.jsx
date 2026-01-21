import { useTheme } from '../context/ThemeContext'
import Snowfall from 'react-snowfall'

const SnowBackground = () => {
  const { theme } = useTheme()

  return (
    <div className="fixed inset-0 z-[1] pointer-events-none">
      <Snowfall
        // Indigo color for light mode, White for dark mode
        color={theme === 'dark' ? '#ffffff' : '#6366f1'}
        style={{
          position: 'fixed',
          width: '100vw',
          height: '100vh',
        }}
        snowflakeCount={100}
        radius={[0.5, 3.0]} // Random radius between 0.5 and 3.0
        speed={[0.5, 2.5]} // Random speed
        wind={[-0.5, 2.0]} // Slight wind effect
        opacity={theme === 'dark' ? 0.3 : 0.5}
      />
    </div>
  )
}

export default SnowBackground