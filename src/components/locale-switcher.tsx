'use client';

import { useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { routing, usePathname } from '@/i18n/routing';

/**
 * A component that allows the user to switch between locales.
 * @returns The locale switcher component.
 */
export const LocaleSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  // Handle the change event of the select element.
  const handleChange = (value: string): void => {
    router.push(`/${value}${pathname}`);
    router.refresh();
  };

  return (
    <Select value={locale} onValueChange={handleChange}>
      <SelectTrigger aria-label='lang-switcher' className='w-fit'>
        <SelectValue>{locale.toUpperCase()}</SelectValue>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Locales</SelectLabel>
          {routing.locales.map(locale => (
            <SelectItem key={locale} value={locale}>
              {locale.toUpperCase()}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
