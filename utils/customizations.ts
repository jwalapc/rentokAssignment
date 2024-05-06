//utils/customizations.ts
interface Customizations {
    colorScheme: string;
    title: string;
    content: {
      title: string;
      description: string;
    };
    image: string;
    backgroundColor: string;
    textColor: string;
    fontFamily: string;
  }
  
  const customizations: { [key: string]: Customizations } = {
    default: {
      colorScheme: '#000000',
      title: 'Default Title',
      content: {
        title: 'Default Title',
        description: 'This is the default content.',
      },
      image: '/default-image.png',
      backgroundColor: '#ffffff',
      textColor: '#000000',
      fontFamily: 'Arial, sans-serif',
    },
    example: {
      colorScheme: '#ff0000',
      title: 'Example Subdomain',
      content: {
        title: 'Example Subdomain',
        description: 'This is the content for the example subdomain.',
      },
      image: '/example-image.png',
      backgroundColor: '#ff0000',
      textColor: '#ffffff',
      fontFamily: 'Roboto, sans-serif',
    },
    // Add more subdomain customizations here
  };
  
  export const LoadCustomizations = (subdomain: string): Customizations => {
    return customizations[subdomain] || customizations.default;
  };