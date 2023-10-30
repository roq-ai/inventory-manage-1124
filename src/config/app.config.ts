interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Inventory Manager'],
  customerRoles: ['Customer'],
  tenantRoles: ['Owner', 'Inventory Manager', 'Sales Representative'],
  tenantName: 'Organization',
  applicationName: 'Inventory Management System',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Read product information',
    'Place an order',
    'View order status',
    'Manage personal user information',
  ],
  ownerAbilities: ['Manage inventory', 'Manage products', 'View orders', 'View order items'],
  getQuoteUrl: 'https://app.roq.ai/proposal/8df6a517-1abb-455d-b453-bec44564e3f2',
};
