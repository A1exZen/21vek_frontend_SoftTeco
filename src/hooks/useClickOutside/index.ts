import { RefObject, useEffect } from 'react'

const useClickOutside = (
  condition: boolean,
  ref: RefObject<HTMLDivElement | null>,
  action: () => void,
  excludeRefs?: RefObject<HTMLDivElement | HTMLButtonElement | null>[]
) => {
  const handleClickOutside = (e: Event) => {
    if (!condition) return;
    const target = e.target as HTMLDivElement;
    if (ref.current?.contains(target)) return;
    if (excludeRefs?.some(excludeRef => excludeRef.current?.contains(target))) return;
    action();
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [condition])
}

export default useClickOutside