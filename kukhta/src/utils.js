export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const folderPaths = {
  gallery: require.context(
    "./assets/images/gallery",
    false,
    /\.(png|jpe?g|svg)$/,
  ),
  // Add more mappings as needed
};

export function importImagePathsFromFolder(folderName) {
  const context = folderPaths[folderName];
  if (!context) {
    throw new Error(`Folder path for "${folderName}" not found.`);
  }
  return context.keys().map(context);
}

export const getPathByLang = (lang) => {
  const currentPath = window.location.pathname.split("/").slice(2).join("/");
  return `/${lang}/${currentPath}`;
};

export const getLangFromUrl = () =>
  window.location.pathname.split("/").filter((e) => e)[0];

export const getComponentFromUrl = () =>
  window.location.pathname.split("/").filter((e) => e)[1];
