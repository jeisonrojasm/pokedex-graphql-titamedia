import { Image } from './Image'
import icon_search from '../../assets/icons/icon-search.svg'
import icon_close from '../../assets/icons/icon-close.svg'

import './Input.css'

export const Input = ({ value, onChange, placeholder }) => {
  return (
    <div className="input">
      <Image className="input__img" src={icon_search} alt="Icono de búsqueda" />
      <input
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="input__input-element"
      />
      <Image className="input__img" src={icon_close} alt="Icono de cierre" />
    </div>
  )
}
