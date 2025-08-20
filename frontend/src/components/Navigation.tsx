import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from '@/components/ui/navigation-menu'
import { navigationMenuTriggerStyle } from '@/components/ui/navigation-menu'
import { Trophy, Gamepad2, Settings, HelpCircle, Info, Home } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  {
    to: '/play',
    label: 'Play',
    icon: Gamepad2,
    id: 'nav-play',
  },
  {
    to: '/leaderboard',
    label: 'Leaderboard',
    icon: Trophy,
    id: 'nav-leaderboard',
  },
  {
    to: '/settings',
    label: 'Settings',
    icon: Settings,
    id: 'nav-settings',
  },
  {
    to: '/instructions',
    label: 'How to Play',
    icon: HelpCircle,
    id: 'nav-instructions',
  },
  {
    to: '/about',
    label: 'About',
    icon: Info,
    id: 'nav-about',
  },
]

export function Navigation() {
  const { pathname } = useLocation()
  return (
    <nav className="w-full bg-white/90 shadow-sm">
      <div className="container mx-auto flex items-center justify-between py-2 px-3">
        <Link to="/" className="flex items-center space-x-2 group" id="nav-home">
          <img src={"/branding/assets/logo-0.png"} className="h-10 w-10 group-hover:scale-105 transition-transform duration-150" />
          <span className="font-orbitron text-2xl font-bold text-indigo-700 tracking-wide hidden sm:inline">Tetris Titan</span>
        </Link>
        <NavigationMenu>
          <NavigationMenuList>
            {navLinks.map(({ to, label, icon: Icon, id }) => (
              <NavigationMenuItem key={to}>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle() +
                  (pathname === to ? ' bg-indigo-100 text-indigo-700' : '')
                }>
                  <Link to={to} className="flex items-center space-x-1 px-3" id={id}>
                    <Icon size={18} className="mr-1" />
                    <span>{label}</span>
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  )
}
