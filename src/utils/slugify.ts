export const slugify = (text: string) => {
  return text
    .toString()
    .normalize('NFD') // Decomposes combined characters into base characters and diacritic marks
    .replace(/[\u0300-\u036f]/g, '') // Remove diacritic marks
    .toLowerCase() // Convert to lowercase
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/[^\w-]+/g, '') // Remove all non-word characters except hyphens
    .replace(/--+/g, '-') // Replace multiple hyphens with a single one
    .replace(/^-+|-+$/g, ''); // Trim leading and trailing hyphens
};
