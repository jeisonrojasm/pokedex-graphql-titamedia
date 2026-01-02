import { Image } from './Image'
import icon_search from '../../assets/icons/icon-search.svg'
import icon_close from '../../assets/icons/icon-close.svg'

export const Input = ({ value, onChange, placeholder }) => {
  return (
    <div>
      <Image src={icon_search} alt="Icono de búsqueda" />
      <input
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
      <Image src={icon_close} alt="Icono de cierre" />
    </div>
  )
}
