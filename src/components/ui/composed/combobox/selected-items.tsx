import Chip from '../chip'
import { Option } from './types'

type SelectedItemsProps = {
  selectedItems: Option[]
  onItemRemove: (itemValue: string) => void
}

export const SelectedItems = ({ selectedItems, onItemRemove }: SelectedItemsProps) => {
  if (selectedItems.length === 0) return null

  return (
    <div className="flex flex-nowrap gap-1 overflow-hidden">
      {selectedItems.length <= 2 ? (
        // Show all items if 2 or fewer
        selectedItems.map((item) => (
          <Chip
            key={item.value}
            variant="default"
            className="flex max-w-[200px] items-center gap-1 px-0.5"
            dismissible
            onDismiss={(e) => {
              e.stopPropagation()
              onItemRemove(item.value)
            }}
          >
            <span className="truncate">{item.label}</span>
          </Chip>
        ))
      ) : (
        // Show first 2 items + count badge for the rest
        <>
          {selectedItems.slice(0, 2).map((item) => (
            <Chip
              dismissible
              onDismiss={(e) => {
                e.stopPropagation()
                onItemRemove(item.value)
              }}
              key={item.value}
              variant="default"
              className="flex max-w-[200px] items-center gap-1 px-0.5"
            >
              <span className="truncate">{item.label}</span>
            </Chip>
          ))}
          <Chip variant="default" className="flex items-center px-1">
            +{selectedItems.length - 2}
          </Chip>
        </>
      )}
    </div>
  )
}
