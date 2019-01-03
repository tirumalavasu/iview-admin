export default {
    /**
     * @description configures the title displayed in the browser tab
     */
    title: 'iView-admin',
    /**
     * @description token The number of days stored in the cookie, default 1 day
     */
    cookieExpires: 1,
    /**
     * @description Whether to use internationalization, the default is false
     * If not used, you need to set the meta in the route to the route that needs to be displayed in the menu: {title: 'xxx'}
     * used to display text in the menu
     */
    useI18n: true,
    /**
     * @description api request base path
     */
    baseUrl: {
      Dev: 'https://www.easy-mock.com/mock/5add9213ce4d0e69998a6f51/iview-admin/',
      Pro: 'https://produce.com'
    },
    /**
     * @description The name of the route name of the home page opened by default. The default is home.
     */
    homeName: 'home',
    /**
     * @description Plugins that need to be loaded
     */
    plugin: {
      'error-store': {
        showInHeader: true, // will not display the error log logo at the top when set to false
        developmentOff: true // set to true after the development environment does not collect error information, to facilitate troubleshooting during development
      }
    }
  }