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
