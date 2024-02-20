import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ColorsService {
  getDarkColors(n = 20): string[] {
    return this.generateDarkColors(n);
  }

  getDarkColor(): string {
    return this.generateDarkColors(1)[0];
  }

  getBrightColor() {
    return this.generateBrightColors(1)[0];
  }

  randomColor(): string {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
  }

  darkenColor(color: string, factor = 0.5): string {
    let [r, g, b] = color.match(/\d+/g)!.map(Number);
    r = Math.floor(r * factor);
    g = Math.floor(g * factor);
    b = Math.floor(b * factor);
    return `rgb(${r}, ${g}, ${b})`;
  }

  rgbToHex(color: string): string {
    const [r, g, b] = color.match(/\d+/g)!.map(Number);
    return `#${r.toString(16).padStart(2, '0')}${g
      .toString(16)
      .padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
  }

  generateDarkColors(n: number): string[] {
    const colors: string[] = [];
    for (let i = 0; i < n; i++) {
      const color = this.randomColor();
      const darkColor = this.darkenColor(color);
      const hexColor = this.rgbToHex(darkColor);
      colors.push(hexColor);
    }
    return colors;
  }

  brightenColor(color: string, factor = 0.5): string {
    let [r, g, b] = color.match(/\d+/g)!.map(Number);
    r = Math.min(255, r + Math.floor(255 * factor));
    g = Math.min(255, g + Math.floor(255 * factor));
    b = Math.min(255, b + Math.floor(255 * factor));
    return `rgb(${r}, ${g}, ${b})`;
  }

  generateBrightColors(n: number): string[] {
    const colors: string[] = [];
    for (let i = 0; i < n; i++) {
      const color = this.randomColor();
      const brightColor = this.brightenColor(color);
      const hexColor = this.rgbToHex(brightColor);
      colors.push(hexColor);
    }
    return colors;
  }
}
