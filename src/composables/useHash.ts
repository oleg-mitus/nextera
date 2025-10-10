'use client'
import { useState, useEffect, useCallback } from 'react'
import { usePathname } from 'next/navigation'

export function useHash() {
  const [hash, setHash] = useState('')
  const pathname = usePathname()

  const updateHash = useCallback(() => {
    setHash(window.location.hash)
  }, [])

  useEffect(() => {
    // Set initial hash
    updateHash()

    // Listen for hash changes
    window.addEventListener('hashchange', updateHash)
    
    // Also listen for popstate (browser back/forward)
    window.addEventListener('popstate', updateHash)

    return () => {
      window.removeEventListener('hashchange', updateHash)
      window.removeEventListener('popstate', updateHash)
    }
  }, [updateHash])

  const setNewHash = useCallback((newHash: string) => {
    if (newHash !== hash) {
      window.location.hash = newHash
    }
  }, [hash, pathname])

  return [hash, setNewHash]
}