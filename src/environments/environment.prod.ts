export const environment = {
  production: true,
  apiUrl: 'https://api.yourdomain.com',
  
  // Module Federation URLs
  customerManagementUrl: 'https://customer.yourdomain.com',
  productCatalogUrl: 'https://products.yourdomain.com',
  orderManagementUrl: 'https://orders.yourdomain.com',
  dashboardUrl: 'https://dashboard.yourdomain.com',
  
  // Authentication
  keycloak: {
    url: 'https://auth.yourdomain.com',
    realm: 'ecommerce',
    clientId: 'ecommerce-frontend'
  },
  
  // Feature flags
  features: {
    enableNotifications: true,
    enableAnalytics: true,
    enableExperimentalFeatures: false
  }
};
