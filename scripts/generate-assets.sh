#!/usr/bin/env bash
set -e

echo "Generating favicons and exported assets from public/logo.png and SVG templates..."

mkdir -p public/favicons

if command -v convert >/dev/null 2>&1; then
  convert public/logo.png -resize 16x16 public/favicons/favicon-16x16.png
  convert public/logo.png -resize 32x32 public/favicons/favicon-32x32.png
  convert public/logo.png -resize 48x48 public/favicons/favicon-48x48.png
  convert public/logo.png -resize 180x180 public/favicons/apple-touch-icon.png
  convert public/favicons/favicon-16x16.png public/favicons/favicon-32x32.png public/favicons/favicon-48x48.png public/favicon.ico
  echo "Favicons generated in public/favicons and public/favicon.ico"
else
  echo "ImageMagick 'convert' not found. Install ImageMagick to auto-generate PNG/ICO files, or export manually from the SVG templates."
fi

if command -v rsvg-convert >/dev/null 2>&1; then
  rsvg-convert -w 1200 -h 630 public/social-banner-1200x630.svg -o public/social-banner-1200x630.png
  rsvg-convert -w 1500 -h 500 public/social-banner-1500x500.svg -o public/social-banner-1500x500.png
  echo "Exported social banners to PNG."
elif command -v convert >/dev/null 2>&1; then
  convert -background none public/social-banner-1200x630.svg public/social-banner-1200x630.png
  convert -background none public/social-banner-1500x500.svg public/social-banner-1500x500.png
  echo "Exported social banners to PNG (via ImageMagick)."
else
  echo "SVG export tool not found. Open the SVG files in a browser or vector editor and export PNGs manually."
fi

echo "Done."
