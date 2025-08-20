import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from '@/components/ui/navigation-menu'
import { navigationMenuTriggerStyle } from '@/components/ui/navigation-menu'
import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  { label: 'Play', path: '/play' },
  { label: 'Leaderboard', path: '/leaderboard' },
  { label: 'Settings', path: '/settings' },
  { label: 'Instructions', path: '/instructions' },
  { label: 'About', path: '/about' }
]

export function Navigation() {
  const location = useLocation()
  return (
    <nav className="w-full bg-white border-b border-muted shadow-sm sticky top-0 z-20 px-0">
      <div className="flex flex-row items-center justify-between max-w-6xl mx-auto px-3 py-2">
        <Link to="/" className="flex items-center gap-2">
          <img src={require('/branding/assets/logo-0.png')} className="h-12 w-12 rounded-none mr-1" />
          <span className="font-orbitron font-bold text-2xl text-primary tracking-wider hidden sm:inline">BlockBlitz</span>
        </Link>
        <NavigationMenu>
          <NavigationMenuList>
            {navLinks.map(({label, path}) => (
              <NavigationMenuItem key={path}>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle() + (location.pathname === path ? ' bg-primary text-white' : '')}>
                  <Link to={path} id={`nav-link-${label.toLowerCase()}`}>{label}</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  )
}
