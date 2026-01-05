import { Text } from '../atoms/Text'

import './Warn.css'

export const Warn = ({ as = 'p', text }) => {
  return (
    <Text className="warn" as={as}>{text}</Text>
  )
}
