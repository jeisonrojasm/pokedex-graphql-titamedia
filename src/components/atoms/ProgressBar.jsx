export const ProgressBar = ({ value, color }) => (
  <div style={{
    width: '100%',
    height: '8px',
    backgroundColor: '#E5E7EB',
    borderRadius: '4px',
    overflow: 'hidden',
  }}>
    <div style={{
      width: `${value}%`,
      height: '100%',
      backgroundColor: color,
      transition: 'width 0.3s ease',
    }} />
  </div>
)
