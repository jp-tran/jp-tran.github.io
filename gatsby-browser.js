/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

export const onInitialClientRender = () => {
  setTimeout(function () {
    document.getElementById('___loader').style.display = 'none';
  }, 2000);
};
