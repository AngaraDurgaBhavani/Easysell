

import { getCanonicalUrl } from '@/app/utils';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Quick Sell - Upload',
  description: 'Upload your files easily using Easy Sell',
  alternates: {
    canonical: `${getCanonicalUrl()}/products/upload`,
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (

    <>{children}</>
  );
}