# Eco-Eco — Smart & Sustainable Consumption

A responsive, interactive web application designed to help Indonesian consumers make financially smart and environmentally responsible purchasing decisions, while enabling businesses to evaluate and communicate their sustainability performance transparently.

## 🌿 Overview

Eco-Eco bridges the **economic–environmental paradox**:
- **For Consumers:** Proves that living sustainably is financially viable by calculating **Cost per Use** (biaya per pemakaian) and lifetime durability rather than just initial purchase cost.
- **For Businesses:** Provides the **Eco-Eco Verified** 5-pillar claim evaluation framework to distinguish documented evidence from unsupported greenwashing claims.

---

## ✨ Features

### 1. Landing Page & Dual Mode
- Editorial serif + clean sans-serif typography (Fraunces & Plus Jakarta Sans).
- Prominent mode selection: **Personal** vs **Business**.
- Language switcher: **Bahasa Indonesia (default)** & **English**.
- Persistent simulation transparency disclaimer banner.

### 2. Personal Mode (Consumer Experience)
- **Ringkasan (Personal Dashboard):** Personalized greeting, AI-generated insight card, consumption stats (CO₂e avoided, plastic prevented, annual savings), quick access actions.
- **Katalog & Pindai (Product Catalog):** 12 realistic everyday products across 6 Indonesian household categories (Drinking water, Cleaning, Personal care, Food & beverage, Reusable bags, Household). Detailed modal with AI synthesis, strengths, limitations, financial value, and environmental trade-offs.
- **Bandingkan Produk (Side-by-Side Comparison):** Compare 2–4 products with full matrix (price, cost per use, lifespan, durability, score, carbon footprint, plastic waste, certifications) and AI trade-off summary.
- **Rekomendasi Cerdas (AI Smart Recommendations):** Preference toggles (Hemat Pengeluaran, Kurangi Plastik, Produk Awet, Kurangi Karbon, Prioritaskan Bukti Klaim) with confidence indicators.
- **Dampak Saya (My Cumulative Impact):** Metrics for avoided CO₂e, plastic diverted, water conserved, and logged purchases with LCA methodology notes. Interactive modal to log new purchases.
- **Struk Belanja Hijau (Eco Receipt):** Formatted digital purchase receipt with receipt number, certifications, copy-to-clipboard, and impact summary.
- **Komunitas Lestari (Community):** Positive social feed, like/appreciation interaction, and 3 sustainable consumption challenges (7-Day Zero Bottle, Artisan Bar Soap, 30-Day Canvas Bag).
- **Pelacak Keuangan (Financial Tracker):** Secondary tool for spending breakdown, sustainable spend ratio, and manual spending entry.

### 3. Business Mode (Brand & ESG Portal)
- **Portofolio Bisnis (Portfolio Dashboard):** 12 SKU overview, average sustainability score, claim verification status, and circularity hotspot identification.
- **Analisis Produk (Product Sustainability Analysis):** Structured audit form distinguishing verified lab documents from unverified marketing claims.
- **Eco-Eco Verified (Claim Assessment Framework):** 5-pillar weighted methodology:
  1. Environmental Impact (30%)
  2. Materials & Circularity (20%)
  3. Supply Chain & Production (20%)
  4. Evidence & Certifications (20%)
  5. Transparency & Disclosure (10%)
- **Wawasan Konsumen (Simulated Consumer Insights):** Indonesian consumer patterns in price sensitivity (68%), durability demand (82%), low-waste packaging (74%), and third-party certification trust (89%).

---

## 🚀 How to Run

### Direct Browser Opening
Simply open `index.html` or the standalone artifact `ecoeco_app.html` in any web browser.

### Local Dev Server
```bash
npx serve .
# or
python -m http.server 3000
```
Open [http://localhost:3000](http://localhost:3000) in your browser.
