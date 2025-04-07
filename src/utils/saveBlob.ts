export const saveBlob = (string: string, filename: string, type: string) => {
  const blob = new Blob([string], { type });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}
