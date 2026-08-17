export function isValidHttpUrl(input) {
  try {
    const normalized =
      input.startsWith("http://") || input.startsWith("https://")
        ? input
        : "https://" + input;
    const url = new URL(normalized);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
}
