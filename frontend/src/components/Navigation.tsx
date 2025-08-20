import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from '@/components/ui/navigation-menu';
import { navigationMenuTriggerStyle } from '@/components/ui/navigation-menu';
import { Link, useLocation } from 'react-router-dom';

// Use logo-0 as the nav logo
const LOGO = '/branding/assets/logo-0.png';

export function Navigation() {
  const location = useLocation();
  return (
    <nav className="w-full bg-white shadow-md sticky top-0 z-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between h-20">
        <NavigationMenu>
          <NavigationMenuList className="flex gap-2 items-center">
            <NavigationMenuItem>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle() + ' p-0 rounded-full bg-transparent hover:bg-gray-100 transition-all h-14 w-14 flex items-center justify-center'}>
                <Link to="/">
                  <img src={LOGO} className="h-10 w-10 object-contain" />
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle() + (location.pathname === '/' ? ' bg-violet-100 text-primary' : '')}>
                <Link to="/">Home</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle() + (location.pathname === '/instructions' ? ' bg-violet-100 text-primary' : '')}>
                <Link to="/instructions">Instructions</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle() + (location.pathname === '/about' ? ' bg-violet-100 text-primary' : '')}>
                <Link to="/about">About</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  );
}
