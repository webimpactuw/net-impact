'use client'
 
import { usePathname } from 'next/navigation'
 
// This a client component, still prerendered
export function Pathname({ children }: Readonly<{
    children: React.ReactNode;
  }>) {

  const pathname = usePathname();

  return (
    <div>
      <p>Path: {pathname}</p>
      {children}
    </div>
  )
}