import { useMemo } from 'react';
import { rgbToHex, rgbToHsv, rgbToHsl } from '../utils/colorUtils';

export default function useColorModel(currentRgb) {
  return useMemo(() => {
    const hex = rgbToHex(currentRgb.r, currentRgb.g, currentRgb.b);
    const hsv = rgbToHsv(currentRgb.r, currentRgb.g, currentRgb.b);
    const hsl = rgbToHsl(currentRgb.r, currentRgb.g, currentRgb.b);
    return { hex, hsv, hsl, rgb: currentRgb };
  }, [currentRgb]);
}


