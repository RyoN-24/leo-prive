# Visual Design Upgrade - Image Assets Guide

## Product Images Created

I've generated high-quality product bottle images in the style of luxury perfume photography:

### ✅ Generated & Ready

1. **odyssey.png** - Citrus perfume with orange/gold tones
2. **khamrah**.png** - Oriental gourmand with deep red & gold ornate design
3. **yara.png** - Feminine floral with pink & gold detailing
4. **eclaire.png** - Sweet gourmand with white & gold elegant design
5. **hero-product.png** - Main hero section bottle (champagne gold)

### 📍 Still Needed (Placeholders Active)

Due to image generation capacity limits, please add these manually:

- **khamrah-qahwa.png** - Coffee-themed brown & gold
- **badee.png** - Oud bottle with black & gold design

## Where Images Are Located

```text
public/
  images/
    hero-product.png        ← Hero section floating product
    products/
      odyssey.png          ← Product cards & modal
      khamrah.png
      yara.png
      eclaire.png
      khamrah-qahwa.png    ← ADD THIS
      badee.png            ← ADD THIS
```

## How To Replace Placeholders

1. **Prepare your images:**
   - Format: PNG with transparency (preferred) or JPG
   - Size: 800×1000px minimum (high resolution for product zoom)
   - Style: Clean product photography, centered bottle
   - Background: Transparent or white (will be composited)

2. **Add missing bottles:**
   - Save as `khamrah-qahwa.png` and `badee.png`
   - Place in `public/images/products/`
   - Restart dev server (`npm run dev`)

3. **Update Hero Product (optional):**
   - Replace `/images/hero-product.png` with your signature bottle
   - Dimension: 800×1200px (taller for floating effect)

## Current Implementation

All components are configured to:

- Load images from `/images/products/{product-id}.png`
- Fall back gracefully to placeholder gradient if image missing
- Use Next.js Image component for automatic optimization
- Support hover zoom and product glow effects

No code changes needed—just drop in the images!
