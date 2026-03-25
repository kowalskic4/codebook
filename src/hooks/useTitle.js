import { useEffect } from "react"

export const useTitle = (title) => {
useEffect(() => {
    document.title = `${title} - Coebook`;
}, [title])

  return null
}