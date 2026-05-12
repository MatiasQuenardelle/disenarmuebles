#!/bin/bash
# Optimize product images for web deployment.
# Resizes to max 1600px on longest edge and compresses JPEG to 82% quality.
# Converts PNGs over 500KB to JPEG.
#
# Usage:
#   ./scripts/optimize-images.sh                          # process all public/products/
#   ./scripts/optimize-images.sh public/products/my-new-product/  # process one folder

set -euo pipefail

TARGET="${1:-public/products}"

if [ ! -d "$TARGET" ]; then
  echo "Error: directory '$TARGET' not found"
  exit 1
fi

echo "Processing images in: $TARGET"

# Resize & compress JPEGs
count=0
while IFS= read -r -d '' f; do
  w=$(sips -g pixelWidth "$f" 2>/dev/null | awk '/pixelWidth/{print $2}')
  h=$(sips -g pixelHeight "$f" 2>/dev/null | awk '/pixelHeight/{print $2}')
  if [ "$w" -gt 1600 ] || [ "$h" -gt 1600 ]; then
    sips --resampleHeightWidthMax 1600 "$f" --out "$f" >/dev/null 2>&1
  fi
  sips --setProperty formatOptions 82 "$f" --out "$f" >/dev/null 2>&1
  count=$((count + 1))
done < <(find "$TARGET" -type f \( -name "*.jpeg" -o -name "*.jpg" \) -print0)

echo "Compressed $count JPEG files"

# Convert large PNGs to JPEG
png_count=0
while IFS= read -r -d '' f; do
  sips -s format jpeg -s formatOptions 85 "$f" --out "${f%.png}.jpeg" >/dev/null 2>&1
  rm "$f"
  png_count=$((png_count + 1))
  echo "  Converted: $(basename "$f") -> $(basename "${f%.png}.jpeg")"
done < <(find "$TARGET" -type f -name "*.png" -size +500k -print0)

echo "Converted $png_count large PNGs to JPEG"
echo "Done. Remember to update .png references in src/data/products.ts if you converted PNGs."
