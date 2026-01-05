import './ProgressBar.css';
import { Text } from "./Text";

export const ProgressBar = ({ value, color }) => (
  <div className="progress-bar">
    <Text className="progress-bar__value">{value}</Text>
    <div style={{
      width: '100%',
      height: '4px',
      backgroundColor: '#E5E7EB',
      borderRadius: '4px',
      overflow: 'hidden',
    }}>
      <div style={{
        width: `${value / 2}%`,
        height: '100%',
        backgroundColor: color,
        transition: 'width 0.3s ease',
      }} />
    </div>
  </div>
)
