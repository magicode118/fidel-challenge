export function ParseFloatDecimal(text) {
  text = text.replace(/[^.\d]/g, '');
  text = parseFloat(text);
  return text;
}