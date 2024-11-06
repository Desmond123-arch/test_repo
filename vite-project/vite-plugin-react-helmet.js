import { Helmet } from 'react-helmet-async';

const vitePluginReactHelmet = () => {
  return {
    name: 'vite-plugin-react-helmet',
    transformIndexHtml: (html) => {
      const helmet = Helmet.renderStatic();
      return html.replace(
        '</head>',
        `
          ${helmet.title.toString()}
          ${helmet.meta.toString()}
          ${helmet.link.toString()}
        </head>
        `
      );
    },
  };
};

export default vitePluginReactHelmet;