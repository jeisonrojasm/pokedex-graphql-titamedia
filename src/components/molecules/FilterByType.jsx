import { Image } from '../atoms/Image'
import { Input } from '../atoms/Input'
import { Text } from '../atoms/Text'

import icon_sort from '../../assets/icons/icon-sort.svg'
import icon_tag from '../../assets/icons/icon-tag.svg'

import './FilterByType.css'

export const FilterByType = ({
  value,
  search,
  onChange,
  onSearchChange,
}) => {
  return (
    <div className="filter-by-type">
      <Input
        placeholder="Search"
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
      />

      <div>
        <div className="filter-by-type__button">
          <Image
            className="filter-by-type__button--img"
            src={value === 'name' ? icon_sort : icon_tag}
            alt="Icono de filtro"
          />
        </div>

        <div className="filter-by-type__pop-up">
          <Text as="label">Sort by:</Text>

          <select value={value} onChange={(e) => onChange(e.target.value)}>
            <option value="id">Number</option>
            <option value="name">Name</option>
          </select>
        </div>
      </div>
    </div>
  )
}
