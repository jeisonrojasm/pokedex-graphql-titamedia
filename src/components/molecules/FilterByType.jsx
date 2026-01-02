import { Image } from '../atoms/Image'
import { Input } from '../atoms/Input'
import { Text } from '../atoms/Text'

import icon_sort from '../../assets/icons/icon-sort.svg'
import icon_tag from '../../assets/icons/icon-tag.svg'

export const FilterByType = ({
  value,
  search,
  onChange,
  onSearchChange,
}) => {
  return (
    <div>
      <Input
        placeholder="Search"
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
      />

      <div>
        <Image
          src={value === 'name' ? icon_sort : icon_tag}
          alt="Icono de filtro"
        />

        <Text as="label">Sort by:</Text>

        <select value={value} onChange={(e) => onChange(e.target.value)}>
          <option value="id">Number</option>
          <option value="name">Name</option>
        </select>
      </div>
    </div>
  )
}
