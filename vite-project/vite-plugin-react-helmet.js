import { Helmet } from 'react-helmet';

const vitePluginReactHelmet = () => {
  return {
    name: 'vite-plugin-react-helmet',
    transformIndexHtml: (html) => {
      const helmet = Helmet.renderStatic();
      return html.replace(
        '</head>',
        `
          ${helmet.title.toComponent()}
          ${helmet.meta.toComponent()}
          ${helmet.link.toComponent()}
        </head>
        `
      );
    },
  };
};

export default vitePluginReactHelmet;