# Ahmed Bedsheets & Quilt Center — Website Guide

Welcome! This simple guide explains how to change any **product card description, price, title, or image** across the entire website.

---

## 🌟 The Simplest Way to Change Anything on the Website

**You only need to edit ONE file:**
👉 `src/data/products.ts`

Every photo, card description, headline, and price on the whole website is managed inside this single file!

---

## 📁 1. Where to Place Your Local Images

Place your photos inside the `/public/images/` folder based on their category:

| Section / Category | Folder Location | Example File Name |
| :--- | :--- | :--- |
| **Home Hero Sliders** | `public/images/home/slider/` | `slide-1.jpg`, `slide-2.jpg` |
| **Home Banners** | `public/images/home/banners/` | `bedding-banner.jpg`, `towels-banner.jpg` |
| **Bedsheets** | `public/images/bedsheets/` | `cotton-bedsheet.jpg`, `bridal-set.jpg` |
| **Quilts & Razai** | `public/images/quilt/` | `winter-razai.jpg`, `comforter.jpg` |
| **Quilt Covers** | `public/images/quilt-cover/` | `quilt-cover-1.jpg` |
| **Curtains** | `public/images/curtains/` | `blackout-curtains.jpg` |
| **Towels** | `public/images/towels/` | `bath-towel.jpg` |
| **Pillows** | `public/images/pillow/` | `ball-fiber-pillow.jpg` |
| **Pillowcases** | `public/images/pillowcase/` | `pillowcase-set.jpg` |
| **Mattress & Toshak** | `public/images/mattress/` | `foam-mattress.jpg` |
| **Mosquito Nets** | `public/images/mosquito-nets/` | `popup-mosquito-net.jpg` |
| **Kitchen Aprons** | `public/images/apron/` | `canvas-apron.jpg` |
| **Sleeping Bags** | `public/images/sleeping-bag/` | `thermal-sleeping-bag.jpg` |
| **Winter Socks** | `public/images/socks/` | `wool-socks.jpg` |
| **About Page Photos** | `public/images/about/` | `showroom.jpg`, `heritage.jpg` |
| **Contact / Custom Orders** | `public/images/contact/` | `custom-razai.jpg`, `custom-curtains.jpg` |

> 💡 **Path Rule in Vite**: Any file placed in `public/images/...` is written as `'/images/...'` in your code!
> For example: `public/images/bedsheets/cotton.jpg` ➡️ `'/images/bedsheets/cotton.jpg'`

---

## 🛠️ 2. How to Change Product Page Cards

Open `src/data/products.ts` and locate the `ALL_PRODUCTS` list:

```ts
{
  id: 'bedsheets',
  name: 'Bedsheets',                            // 1. English Product Name
  urduName: 'بیڈ شیٹس',                         // 2. Urdu Sub-Name
  category: 'Bedsheets',                        // 3. Category Filter
  shortDescription: '100% pure cotton sets...', // 4. Card Description
  startingPrice: 1450,                          // 5. Price in PKR (numbers only)
  unit: 'per set',                              // 6. Unit (e.g. per set, per piece)
  imageUrl: '/images/bedsheets/my-photo.jpg',   // 7. Your Photo Path!
}
```

- **To change the image**: replace `imageUrl` with `'/images/bedsheets/my-photo.jpg'` (or paste an image link).
- **To change the card description**: edit the `shortDescription` text.
- **To change the price**: edit the `startingPrice` number.

---

## 🖼️ 3. How to Change Home Slider Images & Text

In `src/data/products.ts`, scroll to the `HERO_SLIDES` list:

```ts
{
  id: 0,
  headline: 'Bed in Full Bloom.',               // Main Slider Headline
  subhead: 'Export-quality combed cotton...',   // Slider Subhead
  ctaText: 'Explore Bedsheets',                 // Button Text
  imageUrl: '/images/home/slider/slide-1.jpg',  // Slider Image Path!
}
```

---

## 🏢 4. How to Change About Page Photos

In `src/data/products.ts`, scroll to `ABOUT_PAGE_DATA`:

```ts
export const ABOUT_PAGE_DATA = {
  showroomImage: '/images/about/showroom.jpg',
  craftsmanshipImage: '/images/about/heritage.jpg'
};
```

---

## 📞 5. How to Change Contact & Custom Orders Photos

In `src/data/products.ts`, scroll to `CUSTOMIZED_PRODUCTS`:

```ts
{
  id: 'custom-razai',
  title: 'Bespoke Winter Razai',
  description: 'Custom winter razai crafted with your preferred filling weight...',
  imageUrl: '/images/contact/bespoke-razai.jpg',
  whatsappText: 'Assalam-o-Alaikum! I want to order a custom-weight winter razai / quilt.'
}
```

---

## 📱 6. How to Change Phone Numbers & Address

At the very top of `src/data/products.ts`:

```ts
export const SHOP_INFO = {
  name: 'Ahmed Bedsheets & Quilt Center',
  phone: '+923196590379',
  phoneDisplay: '+92 319 6590379',
  whatsappNumber: '923196590379',
  address: 'Shop No 20, New Stadium Market, Okara Cantt',
  ...
};
```

Whenever you save `src/data/products.ts`, the changes take effect across the entire website immediately!
