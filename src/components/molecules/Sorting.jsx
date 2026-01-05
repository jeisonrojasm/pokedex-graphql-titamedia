import { useEffect, useRef, useState } from 'react'
import { Image } from '../atoms/Image'
import { Input } from '../atoms/Input'
import { Text } from '../atoms/Text'

import icon_sort from '../../assets/icons/icon-sort.svg'
import icon_tag from '../../assets/icons/icon-tag.svg'

import { FilterByType } from './FilterByType'
import './Sorting.css'

export const Sorting = ({
  value,
  search,
  onChange,
  onSearchChange,
  filter,
  setFilter
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const containerRef = useRef(null)

  const togglePopup = () => {
    setIsOpen(prev => !prev)
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  return (
    <div className="filter-by-type">
      <Input
        placeholder="Search"
        value={search}
        onChange={(e) => onSearchChange(e.target.value.trimStart())}
        onCloseClick={() => onSearchChange('')}
      />

      <div
        ref={containerRef}
        className="filter-by-type__filters"
      >
        <div
          className="filter-by-type__button"
          onClick={togglePopup}
          role="button"
          tabIndex={0}
        >
          <Image
            className="filter-by-type__button--img"
            src={value === 'name' ? icon_sort : icon_tag}
            alt="Icono de filtro"
          />
        </div>

        {isOpen && (
          <div className="filter-by-type__pop-up">
            <Text
              className="filter-by-type__pop-up--title"
              as="label"
            >
              Sort by:
            </Text>

            <div className="filter-by-type__options">
              <label className="filter-by-type__option">
                <input
                  type="radio"
                  name="sortBy"
                  value="id"
                  checked={value === 'id'}
                  onChange={(e) => onChange(e.target.value)}
                />
                Number
              </label>

              <label className="filter-by-type__option">
                <input
                  type="radio"
                  name="sortBy"
                  value="name"
                  checked={value === 'name'}
                  onChange={(e) => onChange(e.target.value)}
                />
                Name
              </label>
            </div>

            <Text
              className="filter-by-type__pop-up--title"
              as="label"
            >
              Filter by:
            </Text>
            <FilterByType filter={filter} onChange={setFilter} />
          </div>
        )}
      </div>
    </div>
  )
}
