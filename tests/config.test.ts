// config.test.ts
import config from '../docusaurus.config';

function isValidUrl(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch (_) {
    return false;
  }
}

test('Docusaurus config URL should be valid', () => {
  expect(isValidUrl(config.url)).toBe(true);
});