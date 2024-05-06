//src/app/data/subdomainConfig.ts
interface SubdomainConfig {
  backgroundColor: string;
  textColor: string;
  fontFamily: string;
  content: {
    title: string;
    description: string;
  };
  image: string;
}

const subdomainConfig: { [key: string]: SubdomainConfig } = {
  default: {
    backgroundColor: '#ffffff',
    textColor: '#000000',
    fontFamily: 'Arial, sans-serif',
    content: {
      title: 'Default Title',
      description: 'This is the default content.',
    },
    image: '/default-image.png',
  },
  example: {
    backgroundColor: '#ff0000',
    textColor: '#ffffff',
    fontFamily: 'Roboto, sans-serif',
    content: {
      title: 'Example Subdomain',
      description: 'This is the content for the example subdomain.',
    },
    image: '/example-image.png',
  },
  // Add more subdomain configurations here
};

export default subdomainConfig;