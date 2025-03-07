import { useTranslations } from 'next-intl';

import { LocaleSwitcher } from '@/components/locale-switcher';
import { ThemeToggle } from '@/components/theme-toggle';

const HomePage = () => {
  const t = useTranslations('HomePage');

  return (
    <div className='flex min-h-svh flex-col items-center justify-center gap-8 text-4xl'>
      <h1>{t('welcome')}</h1>
      <div className='flex items-center gap-4'>
        <LocaleSwitcher />
        <ThemeToggle />
      </div>
    </div>
  );
};

export default HomePage;
