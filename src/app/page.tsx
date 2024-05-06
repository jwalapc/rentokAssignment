// Code for the page component that will be rendered on the client side
//src/app/page.tsx
'use client';

import styled from 'styled-components';
import { LoadCustomizations } from '../../utils/customizations';

interface PageProps {
  params: {
    subdomain: string;
  };
}

const PageWrapper = styled.div<{ subdomain: string }>`
  background-color: ${({ subdomain }) => LoadCustomizations(subdomain).backgroundColor};
  color: ${({ subdomain }) => LoadCustomizations(subdomain).textColor};
  font-family: ${({ subdomain }) => LoadCustomizations(subdomain).fontFamily};
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
`;

export default function Page({ params }: PageProps) {
  const { subdomain } = params;
  const customizations = LoadCustomizations(subdomain);

  return (
    <PageWrapper subdomain={subdomain}>
      <h1>{customizations.content.title}</h1>
      <p>{customizations.content.description}</p>
      <Image src={customizations.image} alt="Subdomain Image" />
    </PageWrapper>
  );
}