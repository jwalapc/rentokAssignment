//src/app/layout.tsx

import { LoadCustomizations } from '../../utils/customizations';

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { subdomain?: string };
}) {
  const subdomain = params?.subdomain || 'default';
  const customizations = LoadCustomizations(subdomain);

  return (
    <html lang="en">
      <head>
        <title>{customizations.title}</title>
      </head>
      <body style={{ color: customizations.colorScheme }}>{children}</body>
    </html>
  );
}