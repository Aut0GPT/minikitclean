'use client';

import { TabItem, Tabs } from '@worldcoin/mini-apps-ui-kit-react';
import { Home, Page, User } from 'iconoir-react';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

/**
 * This component uses the UI Kit to navigate between pages
 * Bottom navigation is the most common navigation pattern in Mini Apps
 * We require mobile first design patterns for mini apps
 * Read More: https://docs.world.org/mini-apps/design/app-guidelines#mobile-first
 */

export const Navigation = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [value, setValue] = useState('home');

  // Update the active tab based on the current route
  useEffect(() => {
    if (pathname === '/home') {
      setValue('home');
    } else if (pathname === '/page2') {
      setValue('page2');
    } else if (pathname === '/page3') {
      setValue('page3');
    }
  }, [pathname]);

  const handleValueChange = (newValue: string) => {
    setValue(newValue);
    // Navigate to the corresponding page
    if (newValue === 'home') {
      router.push('/home');
    } else if (newValue === 'page2') {
      router.push('/page2');
    } else if (newValue === 'page3') {
      router.push('/page3');
    }
  };

  return (
    <Tabs value={value} onValueChange={handleValueChange}>
      <TabItem value="home" icon={<Home />} label="Home" />
      <TabItem value="page2" icon={<Page />} label="Page 2" />
      <TabItem value="page3" icon={<User />} label="Page 3" />
    </Tabs>
  );
};
