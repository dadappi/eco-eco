// ==========================================================================
// Eco-Eco Application Logic: State, Views & Creative Interactions
// ==========================================================================

import { productsData, categoriesData, preferenceData } from './data.js';

class EcoEcoApp {
  constructor() {
    this.state = {
      lang: 'id',
      mode: 'landing',
      personalTab: 'dashboard',
      businessTab: 'dashboard',
      wishlist: ['prod-bottle-reusable', 'prod-dishwash-refill'],
      compareList: ['prod-bottle-reusable', 'prod-bottle-disposable'],
      selectedPreferences: ['save_money', 'reduce_plastic', 'durable_products'],
      dismissedRecs: [],
      purchases: [
        {
          id: 'purch-1',
          productId: 'prod-bottle-reusable',
          productName: 'Tumbler Stainless Steel Insulated 750ml',
          brand: 'Lestari Ware',
          price: 185000,
          date: '2026-02-14',
          category: 'water_bottle',
          co2eAvoidedKg: 9.4,
          plasticAvoidedGrams: 2400,
          waterAvoidedLiters: 180,
          notes: 'Dihitung dari 120 kali penggantian botol PET 600ml selama 4 bulan pemakaian teratur.'
        },
        {
          id: 'purch-2',
          productId: 'prod-dishwash-refill',
          productName: 'Sabun Cuci Piring Konsentrat Isi Ulang 500ml',
          brand: 'BumiBersih Organik',
          price: 46000,
          date: '2026-03-02',
          category: 'cleaning',
          co2eAvoidedKg: 1.8,
          plasticAvoidedGrams: 128,
          waterAvoidedLiters: 36,
          notes: 'Pengurangan 4 kemasan pouch plastik multilayer dan substitusi surfaktan ramah hayati.'
        }
      ],
      receipts: [
        {
          id: 'rcpt-101',
          receiptNumber: 'ECO-2026-0214-098',
          date: '14 Feb 2026',
          storeName: 'Mitra Belanja Lestari Dharmawangsa',
          productName: 'Tumbler Stainless Steel Insulated 750ml',
          brand: 'Lestari Ware',
          category: 'water_bottle',
          price: 185000,
          sustainabilityScore: 92,
          carbonSavedKg: 9.4,
          plasticSavedGrams: 2400,
          certifications: ['Food Grade SNI', 'BPA Free Certified']
        }
      ],
      communityPosts: [
        {
          id: 'post-1',
          authorRole: 'Komunitas Refill Bandung',
          authorCity: 'Bandung',
          timestamp: '2 jam yang lalu',
          content: 'Sudah 4 bulan beralih pakai tumbler stainless steel untuk commute harian di Dago. Selain air tetap dingin seharian, catatan di Eco-Eco menunjukkan penghematan sekitar Rp 480.000 dan mencegah 120 botol PET!',
          tags: ['#GayaHidupLestari', '#TumblerLife', '#HematCerdas'],
          likesCount: 38,
          hasLiked: false
        },
        {
          id: 'post-2',
          authorRole: 'Pencinta Zero Waste Surabaya',
          authorCity: 'Surabaya',
          timestamp: 'Kemarin',
          content: 'Mencoba stasiun isi ulang sabun cuci piring BumiBersih di daerah Gubeng. Membawa botol kaca lama sendiri ternyata sangat menyenangkan dan biayanya 30% lebih terjangkau daripada beli botol baru terus.',
          tags: ['#RefillMovement', '#ZeroWasteID', '#EcoReceipt'],
          likesCount: 52,
          hasLiked: true
        },
        {
          id: 'post-3',
          authorRole: 'Pegiat Kompos Yogyakarta',
          authorCity: 'Yogyakarta',
          timestamp: '2 hari lalu',
          content: 'Ikut challenge 7 Hari Bebas Botol Plastik! Komunitas di Eco-Eco sangat suportif tanpa bikin merasa bersalah kalau sesekali lupa. Kuncinya adalah konsistensi bertahap.',
          tags: ['#TantanganHijau', '#EcoEcoCommunity'],
          likesCount: 29,
          hasLiked: false
        }
      ],
      challenges: [
        {
          id: 'chal-tumbler-7d',
          title: '7 Hari Bebas Botol Plastik Sekali Pakai',
          desc: 'Komitmen membawa tumbler sendiri ke kantor, kampus, atau saat bepergian selama seminggu penuh.',
          days: 7,
          participants: 1420,
          carbonKg: 2.1,
          isJoined: true
        },
        {
          id: 'chal-bar-soap',
          title: 'Eksplorasi Sabun Batang Alami Tanpa Kemasan Plastik',
          desc: 'Ganti 1 botol sabun mandi pump Anda dengan sabun batang nabati berbahan alami khas nusantara.',
          days: 14,
          participants: 890,
          carbonKg: 1.8,
          isJoined: false
        },
        {
          id: 'chal-canvas-bag',
          title: '30 Hari Bawa Tas Belanja Sendiri',
          desc: 'Tolak kantong kresek setiap berbelanja kebutuhan pokok di pasar swalayan maupun tradisional.',
          days: 30,
          participants: 2150,
          carbonKg: 4.5,
          isJoined: false
        }
      ],
      spendings: [
        { id: 'sp-1', date: '2026-01-05', category: 'water_bottle', amount: 48000, notes: 'Air botol kemasan mini saat di jalan', isSustainable: false },
        { id: 'sp-2', date: '2026-01-18', category: 'cleaning', amount: 33000, notes: 'Deterjen pouch biasa', isSustainable: false },
        { id: 'sp-3', date: '2026-02-14', category: 'water_bottle', amount: 185000, notes: 'Investasi tumbler stainless', isSustainable: true },
        { id: 'sp-4', date: '2026-02-22', category: 'personal_care', amount: 32000, notes: 'Sabun batang alami Zaitun', isSustainable: true },
        { id: 'sp-5', date: '2026-03-02', category: 'cleaning', amount: 46000, notes: 'Refill sabun cuci piring botol kaca', isSustainable: true },
        { id: 'sp-6', date: '2026-03-15', category: 'food_beverage', amount: 78000, notes: 'Kopi Arabika kompos', isSustainable: true }
      ],
      searchQuery: '',
      selectedCategory: 'all',
      sortBy: 'default',
      filterTag: 'all'
    };

    this.loadState();
    this.init();
  }

  loadState() {
    try {
      const saved = localStorage.getItem('ecoeco_modular_v1');
      if (saved) {
        this.state = { ...this.state, ...JSON.parse(saved) };
      }
    } catch (e) {
      console.warn('Storage read failed:', e);
    }
  }

  saveState() {
    try {
      localStorage.setItem('ecoeco_modular_v1', JSON.stringify({
        lang: this.state.lang,
        wishlist: this.state.wishlist,
        compareList: this.state.compareList,
        selectedPreferences: this.state.selectedPreferences,
        dismissedRecs: this.state.dismissedRecs,
        purchases: this.state.purchases,
        receipts: this.state.receipts,
        communityPosts: this.state.communityPosts,
        challenges: this.state.challenges,
        spendings: this.state.spendings
      }));
    } catch (e) {
      console.warn('Storage write failed:', e);
    }
    this.updateBadges();
  }

  resetDemoData() {
    if (confirm(this.state.lang === 'id' ? 'Reset semua data simulasi ke awal?' : 'Reset all simulation demo data?')) {
      localStorage.removeItem('ecoeco_modular_v1');
      window.location.reload();
    }
  }

  showToast(msg) {
    const toast = document.getElementById('toast');
    const msgElem = document.getElementById('toast-message');
    if (!toast || !msgElem) return;
    msgElem.innerText = msg;
    toast.classList.remove('translate-y-20', 'opacity-0');
    setTimeout(() => {
      toast.classList.add('translate-y-20', 'opacity-0');
    }, 2500);
  }

  formatRupiah(num) {
    return 'Rp ' + Number(num).toLocaleString('id-ID');
  }

  toggleLanguage() {
    this.state.lang = this.state.lang === 'id' ? 'en' : 'id';
    const langInd = document.getElementById('lang-indicator');
    const discText = document.getElementById('disclaimer-text');
    if (langInd) langInd.innerText = this.state.lang.toUpperCase();
    if (discText) {
      discText.innerText = this.state.lang === 'id' 
        ? 'SIMULASI — Data dalam prototipe ini bersifat ilustratif dan belum mewakili hasil pengukuran atau verifikasi independen.'
        : 'SIMULATION — Data in this prototype is illustrative and does not represent independent verification.';
    }
    this.saveState();
    this.render();
  }

  setMode(mode) {
    this.state.mode = mode;
    this.render();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  setPersonalTab(tab) {
    this.state.mode = 'personal';
    this.state.personalTab = tab;
    this.render();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  setBusinessTab(tab) {
    this.state.mode = 'business';
    this.state.businessTab = tab;
    this.render();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  toggleWishlist(id) {
    if (this.state.wishlist.includes(id)) {
      this.state.wishlist = this.state.wishlist.filter(x => x !== id);
      this.showToast(this.state.lang === 'id' ? 'Dihapus dari daftar simpan' : 'Removed from wishlist');
    } else {
      this.state.wishlist.push(id);
      this.showToast(this.state.lang === 'id' ? 'Disimpan ke daftar produk' : 'Saved to wishlist');
    }
    this.saveState();
    this.render();
  }

  toggleCompare(id) {
    if (this.state.compareList.includes(id)) {
      this.state.compareList = this.state.compareList.filter(x => x !== id);
      this.showToast(this.state.lang === 'id' ? 'Dikeluarkan dari perbandingan' : 'Removed from comparison');
    } else {
      if (this.state.compareList.length >= 4) {
        this.showToast(this.state.lang === 'id' ? 'Maksimal 4 produk dapat dibandingkan' : 'Maximum 4 products allowed');
        return;
      }
      this.state.compareList.push(id);
      this.showToast(this.state.lang === 'id' ? 'Ditambahkan ke perbandingan' : 'Added to comparison');
    }
    this.saveState();
    this.render();
  }

  toggleChallenge(id) {
    this.state.challenges = this.state.challenges.map(c => c.id === id ? { ...c, isJoined: !c.isJoined } : c);
    this.saveState();
    this.render();
    this.showToast(this.state.lang === 'id' ? 'Status tantangan diperbarui' : 'Challenge status updated');
  }

  toggleLike(id) {
    this.state.communityPosts = this.state.communityPosts.map(p => {
      if (p.id === id) {
        return {
          ...p,
          hasLiked: !p.hasLiked,
          likesCount: p.hasLiked ? p.likesCount - 1 : p.likesCount + 1
        };
      }
      return p;
    });
    this.saveState();
    this.render();
  }

  updateBadges() {
    const badge = document.getElementById('compare-counter-badge');
    if (badge) badge.innerText = this.state.compareList.length;

    const compLabel = document.getElementById('compare-counter-label');
    if (compLabel) compLabel.innerText = this.state.lang === 'id' ? 'Bandingkan' : 'Compare';

    ['landing', 'personal', 'business'].forEach(m => {
      const btn = document.getElementById('btn-mode-' + m);
      if (btn) {
        if (this.state.mode === m) {
          btn.className = 'px-3.5 py-1.5 text-xs font-semibold rounded-full bg-[#18392B] text-white shadow-sm';
        } else {
          btn.className = 'px-3.5 py-1.5 text-xs font-medium rounded-full text-[#5C6360] hover:text-[#18392B]';
        }
      }
    });

    const subPersonal = document.getElementById('subnav-personal');
    const subBusiness = document.getElementById('subnav-business');

    if (this.state.mode === 'personal') {
      subPersonal?.classList.remove('hidden');
      subBusiness?.classList.add('hidden');
      document.querySelectorAll('.subnav-btn').forEach(btn => {
        if (btn.getAttribute('data-tab') === this.state.personalTab) {
          btn.className = 'subnav-btn px-3 py-1.5 rounded-lg font-semibold whitespace-nowrap bg-[#18392B] text-white shadow-sm';
        } else {
          btn.className = 'subnav-btn px-3 py-1.5 rounded-lg font-medium whitespace-nowrap text-[#484F4C] hover:bg-[#EAE7E1]';
        }
      });
    } else if (this.state.mode === 'business') {
      subPersonal?.classList.add('hidden');
      subBusiness?.classList.remove('hidden');
      document.querySelectorAll('.subnav-bbtn').forEach(btn => {
        if (btn.getAttribute('data-btab') === this.state.businessTab) {
          btn.className = 'subnav-bbtn px-3 py-1.5 rounded-lg font-semibold whitespace-nowrap bg-[#18392B] text-white shadow-sm';
        } else {
          btn.className = 'subnav-bbtn px-3 py-1.5 rounded-lg font-medium whitespace-nowrap text-[#484F4C] hover:bg-[#EAE7E1]';
        }
      });
    } else {
      subPersonal?.classList.add('hidden');
      subBusiness?.classList.add('hidden');
    }
  }

  openModal(html) {
    const container = document.getElementById('modal-container');
    if (!container) return;
    container.innerHTML = `
      <div class="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
        <div class="relative bg-[#FAF8F5] rounded-3xl max-w-2xl w-full border border-[#E8E3D8] shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto custom-scrollbar">
          <button onclick="window.ecoApp.closeModal()" class="absolute top-5 right-5 p-2 text-[#5C6360] hover:text-[#18392B] rounded-full hover:bg-[#EFECE6] transition-colors">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>
          ${html}
        </div>
      </div>
    `;
  }

  closeModal() {
    const container = document.getElementById('modal-container');
    if (container) container.innerHTML = '';
  }

  updateDetailCalc(prodPrice, prodCostPerUse, usesPerWeek) {
    const annualUses = usesPerWeek * 52;
    const annualCost = annualUses * prodCostPerUse;
    const baselineAnnualCost = annualUses * 3000;
    const annualSavings = Math.max(0, baselineAnnualCost - annualCost);
    const bottlesSaved = Math.round(annualUses * 1.2);
    
    const resElem = document.getElementById('detail-calc-savings');
    const bottleElem = document.getElementById('detail-calc-bottles');
    const usesElem = document.getElementById('detail-calc-uses-label');
    
    if (resElem) resElem.innerText = this.formatRupiah(annualSavings) + ' / thn';
    if (bottleElem) bottleElem.innerText = bottlesSaved + ' item sekali pakai tercegah';
    if (usesElem) usesElem.innerText = usesPerWeek + 'x / minggu (' + annualUses + 'x per tahun)';
  }

  showProductDetail(id) {
    const p = productsData.find(x => x.id === id);
    if (!p) return;
    const isId = this.state.lang === 'id';
    const provBadge = p.provenance === 'verified' 
      ? '<span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#E2EDE5] text-[#18392B] border border-[#C5DDD0]">' + (isId ? 'Terverifikasi SNI & Lab' : 'Verified Lab Data') + '</span>'
      : p.provenance === 'estimated'
      ? '<span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#FEF3C7] text-[#92400E] border border-[#FDE68A]">' + (isId ? 'Estimasi Siklus Hidup' : 'Lifecycle Estimate') + '</span>'
      : '<span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#E5E7EB] text-[#374151] border border-[#D1D5DB]">' + (isId ? 'Simulasi' : 'Simulated') + '</span>';

    const html = `
      <div class="space-y-6">
        <div class="relative w-full h-56 sm:h-64 rounded-2xl overflow-hidden bg-[#EFECE6] border border-[#DFD9CE]">
          <img src="${p.imageUrl}" alt="${p.name}" class="w-full h-full object-cover">
          <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-5">
            <div class="text-white">
              <span class="text-[11px] font-mono uppercase tracking-wider text-[#A3B899] font-bold">${p.brand}</span>
              <h3 class="font-serif text-xl sm:text-2xl font-bold leading-tight mt-0.5">${p.name}</h3>
            </div>
          </div>
          <div class="absolute top-4 right-4">
            ${provBadge}
          </div>
        </div>

        <div class="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-white rounded-2xl border border-[#DFD9CE] gap-4">
          <div>
            <div class="text-xs text-[#5C6360]">${isId ? 'Harga Beli Awal' : 'Initial Price'}</div>
            <div class="font-serif text-2xl font-bold text-[#18392B] font-mono">${this.formatRupiah(p.price)}</div>
          </div>
          <div class="sm:text-right border-t sm:border-t-0 sm:border-l border-[#EFECE6] sm:pl-6 pt-2 sm:pt-0">
            <div class="text-xs text-[#5C6360]">${isId ? 'Biaya per Pemakaian (Cost-per-Use)' : 'Cost per Use'}</div>
            <div class="font-serif text-2xl font-bold text-[#5F8569] font-mono">${this.formatRupiah(p.costPerUse)} <span class="text-xs font-sans text-[#5C6360]">/${isId ? 'pakai' : 'use'}</span></div>
          </div>
          <div class="sm:text-right border-t sm:border-t-0 sm:border-l border-[#EFECE6] sm:pl-6 pt-2 sm:pt-0">
            <div class="text-xs text-[#5C6360]">${isId ? 'Periode Balik Modal' : 'Payback Period'}</div>
            <div class="font-serif text-xl font-bold text-[#C08552]">${p.paybackMonths}</div>
          </div>
        </div>

        <p class="text-xs text-[#484F4C] leading-relaxed">${p.description}</p>

        <div class="p-4 bg-[#F4F1EA] rounded-2xl border border-[#E8E3D8] space-y-2 text-xs">
          <div class="text-[10px] font-mono uppercase font-bold text-[#5F8569] tracking-wider">${isId ? 'ANALOGI DAMPAK DUNIA NYATA' : 'REAL WORLD EQUIVALENCE'}</div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[#18392B]">
            <div class="flex items-start gap-2">
              <span class="text-base shrink-0">🗑️</span>
              <span class="leading-relaxed"><strong>${isId ? 'Sampah:' : 'Waste:'}</strong> ${p.wasteAnalogy}</span>
            </div>
            <div class="flex items-start gap-2">
              <span class="text-base shrink-0">🌱</span>
              <span class="leading-relaxed"><strong>${isId ? 'Karbon:' : 'Carbon:'}</strong> ${p.carbonAnalogy}</span>
            </div>
          </div>
        </div>

        <div class="p-5 bg-white rounded-2xl border border-[#DFD9CE] space-y-3 text-xs">
          <h4 class="font-bold text-[#18392B] uppercase text-[11px] tracking-wider">${isId ? 'Komposisi Material & Sirkularitas' : 'Material Composition'}</h4>
          <div class="space-y-2">
            ${p.materialsBreakdown.map(m => `
              <div>
                <div class="flex justify-between text-[11px] mb-1 text-[#484F4C]">
                  <span>${m.name}</span>
                  <span class="font-mono font-bold text-[#18392B]">${m.pct}%</span>
                </div>
                <div class="w-full bg-[#EFECE6] h-2 rounded-full overflow-hidden">
                  <div class="bg-[#18392B] h-full rounded-full" style="width: ${m.pct}%"></div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>

        <div class="p-5 bg-[#FAF8F5] rounded-2xl border border-[#DFD9CE] space-y-3 text-xs">
          <div class="flex items-center justify-between">
            <span class="font-bold text-[#18392B] text-xs">${isId ? 'Kalkulator Penghematan Interaktif:' : 'Interactive Savings Calculator:'}</span>
            <span id="detail-calc-uses-label" class="font-mono text-[#5F8569] font-bold text-[11px]">7x / minggu (364x per tahun)</span>
          </div>
          <input type="range" min="1" max="14" value="7" oninput="window.ecoApp.updateDetailCalc(${p.price}, ${p.costPerUse}, this.value)">
          <div class="flex justify-between items-center pt-2 border-t border-[#E8E3D8]">
            <div>
              <span class="text-[10px] text-[#5C6360] block">${isId ? 'Estimasi Hemat Kas per Tahun:' : 'Estimated Annual Cash Savings:'}</span>
              <span id="detail-calc-savings" class="font-serif text-xl font-bold text-[#18392B]">${this.formatRupiah(Math.max(0, 364 * 3000 - 364 * p.costPerUse))} / thn</span>
            </div>
            <div class="text-right">
              <span class="text-[10px] text-[#5C6360] block">${isId ? 'Dampak Timbulan Sampah:' : 'Waste Impact:'}</span>
              <span id="detail-calc-bottles" class="font-mono text-xs font-bold text-[#5F8569]">437 item sekali pakai tercegah</span>
            </div>
          </div>
        </div>

        <div class="flex items-center justify-end gap-3 pt-4 border-t border-[#E8E3D8]">
          <button onclick="window.ecoApp.toggleCompare('${p.id}'); window.ecoApp.closeModal();" class="px-4 py-2.5 rounded-xl border border-[#18392B] text-[#18392B] text-xs font-semibold hover:bg-[#EFECE6] transition-colors">
            ${this.state.compareList.includes(p.id) ? (isId ? 'Hapus dari Bandingkan' : 'Remove from Compare') : (isId ? '+ Tambah ke Bandingkan' : '+ Add to Compare')}
          </button>
          <button onclick="window.ecoApp.toggleWishlist('${p.id}'); window.ecoApp.closeModal();" class="px-5 py-2.5 rounded-xl bg-[#18392B] text-white text-xs font-semibold hover:bg-[#254F3D] transition-colors shadow-sm">
            ${this.state.wishlist.includes(p.id) ? (isId ? 'Tersimpan di Favorit' : 'Saved in Wishlist') : (isId ? 'Simpan Produk' : 'Save Product')}
          </button>
        </div>
      </div>
    `;
    this.openModal(html);
  }

  copyReceiptText() {
    const r = this.state.receipts[0];
    const text = `=== ECO-ECO RECEIPT ===\nNo: ${r.receiptNumber}\nTanggal: ${r.date}\nProduk: ${r.productName}\nHarga: ${this.formatRupiah(r.price)}\nSkor: ${r.sustainabilityScore}/100\nCO2e Tercegah: ${r.carbonSavedKg} kg\nPlastik Tercegah: ${r.plasticSavedGrams} g\nMetode: Model LCA Kemen LHK (Simulasi)`;
    navigator.clipboard.writeText(text).then(() => {
      this.showToast(this.state.lang === 'id' ? 'Teks struk berhasil disalin!' : 'Receipt copied to clipboard!');
    }).catch(() => {
      this.showToast('Gagal menyalin');
    });
  }

  init() {
    window.ecoApp = this;
    this.render();
  }

  render() {
    this.updateBadges();
    const root = document.getElementById('app-root');
    if (!root) return;

    if (this.state.mode === 'landing') {
      root.innerHTML = this.renderLanding();
    } else if (this.state.mode === 'personal') {
      root.innerHTML = this.renderPersonal();
    } else if (this.state.mode === 'business') {
      root.innerHTML = this.renderBusiness();
    }
  }

  renderLanding() {
    const isId = this.state.lang === 'id';
    return `
      <div class="space-y-20 py-6">
        <div class="text-center max-w-3xl mx-auto space-y-6">
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E2EDE5] text-[#18392B] text-xs font-semibold border border-[#C5DDD0]">
            <span class="w-2 h-2 rounded-full bg-[#18392B]"></span>
            <span>${isId ? 'Menjembatani Paradoks Ekonomi & Lingkungan' : 'Bridging Economic & Environmental Needs'}</span>
          </div>
          <h1 class="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#18392B] leading-tight tracking-tight">
            Better choices. Better value. Better future.
          </h1>
          <p class="text-base sm:text-lg text-[#5C6360] leading-relaxed max-w-2xl mx-auto">
            ${isId ? 'Make everyday purchases work better for your finances and the planet. Platform cerdas yang menghubungkan efisiensi anggaran belanja dengan dampak nyata perlindungan bumi.' : 'Make everyday purchases work better for your finances and the planet. Connect cost efficiency with tangible environmental impact.'}
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div class="eco-card p-8 sm:p-10 flex flex-col justify-between group">
            <div class="space-y-5">
              <div class="w-14 h-14 rounded-2xl bg-[#E2EDE5] text-[#18392B] flex items-center justify-center font-serif text-2xl font-bold group-hover:scale-105 transition-transform">
                P
              </div>
              <div>
                <span class="text-xs font-mono font-bold uppercase tracking-wider text-[#5F8569]">Mode 01</span>
                <h3 class="font-serif text-3xl font-bold text-[#18392B] mt-1">Personal</h3>
              </div>
              <p class="text-sm text-[#5C6360] leading-relaxed">
                ${isId ? 'Untuk konsumen individu yang ingin membandingkan produk, menghemat anggaran belanja melalui biaya per pemakaian, menemukan alternatif ramah lingkungan, dan memahami dampak nyata dari setiap rupiah yang dikeluarkan.' : 'For individual consumers looking to compare products, save money through cost-per-use insights, and measure environmental impacts.'}
              </p>
            </div>
            <div class="pt-8">
              <button onclick="window.ecoApp.setMode('personal')" class="w-full py-4 px-6 rounded-2xl bg-[#18392B] text-white text-sm font-semibold hover:bg-[#254F3D] transition-colors flex items-center justify-center gap-2 shadow-sm">
                <span>Explore Personal</span>
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
              </button>
            </div>
          </div>

          <div class="eco-card p-8 sm:p-10 flex flex-col justify-between group">
            <div class="space-y-5">
              <div class="w-14 h-14 rounded-2xl bg-[#FAF1E4] text-[#C08552] flex items-center justify-center font-serif text-2xl font-bold group-hover:scale-105 transition-transform">
                B
              </div>
              <div>
                <span class="text-xs font-mono font-bold uppercase tracking-wider text-[#C08552]">Mode 02</span>
                <h3 class="font-serif text-3xl font-bold text-[#18392B] mt-1">${isId ? 'Bisnis & Merek' : 'Business & Brands'}</h3>
              </div>
              <p class="text-sm text-[#5C6360] leading-relaxed">
                ${isId ? 'Untuk pelaku usaha dan pemilik merek yang ingin menganalisis keberlanjutan produk, mengevaluasi bukti klaim lingkungan secara transparan, memahami preferensi konsumen, serta menghindari risiko greenwashing.' : 'For businesses seeking to evaluate product sustainability, provide evidence for claims transparently, and understand market trends.'}
              </p>
            </div>
            <div class="pt-8">
              <button onclick="window.ecoApp.setMode('business')" class="w-full py-4 px-6 rounded-2xl bg-[#FAF8F5] border border-[#18392B] text-[#18392B] text-sm font-semibold hover:bg-[#EFECE6] transition-colors flex items-center justify-center gap-2 shadow-sm">
                <span>Explore Business</span>
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  renderPersonal() {
    switch (this.state.personalTab) {
      case 'dashboard': return this.renderPersonalDashboard();
      case 'scan': return this.renderPersonalScan();
      case 'compare': return this.renderPersonalCompare();
      case 'recommendations': return this.renderPersonalRecommendations();
      case 'impact': return this.renderPersonalImpact();
      case 'receipt': return this.renderPersonalReceipt();
      case 'community': return this.renderPersonalCommunity();
      case 'financial': return this.renderPersonalFinancial();
      default: return this.renderPersonalDashboard();
    }
  }

  renderPersonalDashboard() {
    const isId = this.state.lang === 'id';
    const totalCo2 = this.state.purchases.reduce((acc, x) => acc + (x.co2eAvoidedKg || 0), 0).toFixed(1);
    const totalPlastic = (this.state.purchases.reduce((acc, x) => acc + (x.plasticAvoidedGrams || 0), 0) / 1000).toFixed(2);
    const totalSaved = 'Rp 1.615.000';

    return `
      <div class="space-y-8">
        <div class="bg-gradient-to-br from-[#18392B] to-[#254F3D] text-white rounded-3xl p-6 sm:p-10 shadow-sm space-y-5">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span class="text-xs uppercase font-mono tracking-wider text-[#A3B899] font-semibold">SUSTAINABLE CONSUMPTION SPACE</span>
              <h2 class="font-serif text-3xl sm:text-4xl font-bold mt-1.5">${isId ? 'Halo, Sobat Lestari! Wujudkan Konsumsi Bijak Hari Ini' : 'Welcome! Mindful & Sustainable Choices Today'}</h2>
            </div>
            <div class="flex items-center gap-2">
              <button onclick="window.ecoApp.setPersonalTab('scan')" class="px-5 py-2.5 rounded-xl bg-white text-[#18392B] text-xs font-semibold hover:bg-[#FAF8F5] transition-colors shadow-sm">
                ${isId ? 'Katalog & Pindai' : 'Browse Catalog'}
              </button>
            </div>
          </div>

          <div class="bg-white/10 rounded-2xl p-4 sm:p-5 border border-white/15 text-xs text-white/90 flex items-start gap-3">
            <svg class="w-5 h-5 text-[#E0A96D] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
            <div>
              <strong class="font-semibold text-white">${isId ? 'Sintesis Wawasan AI Pekan Ini:' : 'AI Synthesis Insight This Week:'}</strong>
              <span> ${isId ? 'Dengan beralih ke tumbler dan sabun batang alami, efisiensi belanja rumah tangga diproyeksikan menghemat Rp 1.765.000 dalam 12 bulan ke depan sambil mencegah timbulan ~8,1 kg sampah plastik.' : 'By switching to reusable tumblers and artisan soap bars, spending efficiency projects ~Rp 1,765,000 yearly savings while diverting ~8.1 kg of household plastic.'}</span>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-3 gap-5">
          <div class="eco-card p-6">
            <div class="text-xs text-[#5C6360] font-medium">${isId ? 'Estimasi Emisi CO₂e Tercegah' : 'Est. CO₂e Diverted'}</div>
            <div class="font-serif text-3xl sm:text-4xl font-bold text-[#18392B] mt-2 font-mono">${totalCo2} <span class="text-xs font-sans text-[#5C6360]">kg</span></div>
            <div class="text-[11px] text-[#5F8569] mt-2 font-medium">✓ ${isId ? 'Setara menanam 1 batang pohon' : 'Equivalent to planting 1 tree'}</div>
          </div>
          <div class="eco-card p-6">
            <div class="text-xs text-[#5C6360] font-medium">${isId ? 'Sampah Plastik Terhindarkan' : 'Plastic Waste Diverted'}</div>
            <div class="font-serif text-3xl sm:text-4xl font-bold text-[#18392B] mt-2 font-mono">${totalPlastic} <span class="text-xs font-sans text-[#5C6360]">kg</span></div>
            <div class="text-[11px] text-[#5F8569] mt-2 font-medium">✓ ${isId ? 'Mencegah ~120 botol plastik PET' : 'Prevents ~120 single-use PET bottles'}</div>
          </div>
          <div class="eco-card p-6">
            <div class="text-xs text-[#5C6360] font-medium">${isId ? 'Potensi Hemat Tahunan' : 'Annual Savings'}</div>
            <div class="font-serif text-3xl sm:text-4xl font-bold text-[#18392B] mt-2 font-mono">${totalSaved}</div>
            <div class="text-[11px] text-[#C08552] mt-2 font-medium">★ ${isId ? 'Efisiensi biaya per pemakaian' : 'High cost-per-use efficiency'}</div>
          </div>
        </div>

        <div class="space-y-4">
          <div class="flex items-center justify-between">
            <h3 class="font-serif text-2xl font-bold text-[#18392B]">${isId ? 'Produk Pilihan Anda' : 'Your Saved Items'}</h3>
            <button onclick="window.ecoApp.setPersonalTab('scan')" class="text-xs font-semibold text-[#5F8569] hover:underline">${isId ? 'Lihat Semua Katalog' : 'View Full Catalog'}</button>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            ${productsData.filter(p => this.state.wishlist.includes(p.id)).slice(0, 4).map(p => `
              <div class="eco-card overflow-hidden flex flex-col justify-between group">
                <div class="product-img-container h-36">
                  <img src="${p.imageUrl}" alt="${p.name}" class="w-full h-full object-cover product-img-zoom">
                  <div class="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#FAF8F5]/90 backdrop-blur text-[#18392B] border border-[#DFD9CE]">
                    ${p.sustainabilityScore}/100
                  </div>
                </div>
                <div class="p-4 flex flex-col justify-between flex-grow">
                  <div>
                    <div class="text-[11px] font-mono uppercase text-[#5F8569] font-bold">${p.brand}</div>
                    <h4 class="font-semibold text-sm text-[#18392B] line-clamp-1 mt-0.5">${p.name}</h4>
                    <div class="text-xs text-[#5C6360] mt-1 font-mono">${this.formatRupiah(p.price)} • ${this.formatRupiah(p.costPerUse)}/use</div>
                  </div>
                  <div class="flex items-center justify-between pt-3 mt-3 border-t border-[#EFECE6]">
                    <button onclick="window.ecoApp.showProductDetail('${p.id}')" class="text-xs font-semibold text-[#18392B] hover:underline">${isId ? 'Detail' : 'Details'}</button>
                    <button onclick="window.ecoApp.toggleCompare('${p.id}')" class="text-xs px-2.5 py-1 rounded-lg bg-[#EFECE6] hover:bg-[#DFD9CE] text-[#18392B] font-medium">
                      ${this.state.compareList.includes(p.id) ? 'Added' : '+ Compare'}
                    </button>
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `;
  }

  renderPersonalScan() {
    const isId = this.state.lang === 'id';
    let list = productsData.filter(p => {
      const matchesCategory = this.state.selectedCategory === 'all' || p.category === this.state.selectedCategory;
      const matchesQuery = p.name.toLowerCase().includes(this.state.searchQuery.toLowerCase()) || 
                           p.brand.toLowerCase().includes(this.state.searchQuery.toLowerCase());
      const matchesTag = this.state.filterTag === 'all' 
        ? true 
        : this.state.filterTag === 'zero_plastic' ? p.plasticGrams === 0
        : this.state.filterTag === 'verified' ? p.provenance === 'verified'
        : p.durabilityRating.includes('Tinggi');
      return matchesCategory && matchesQuery && matchesTag;
    });

    if (this.state.sortBy === 'score') {
      list.sort((a, b) => b.sustainabilityScore - a.sustainabilityScore);
    } else if (this.state.sortBy === 'cost_use') {
      list.sort((a, b) => a.costPerUse - b.costPerUse);
    } else if (this.state.sortBy === 'price_asc') {
      list.sort((a, b) => a.price - b.price);
    }

    return `
      <div class="space-y-6">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 class="font-serif text-3xl sm:text-4xl font-bold text-[#18392B]">${isId ? 'Katalog & Pindai Produk' : 'Product Catalog & Scan'}</h2>
            <p class="text-xs text-[#5C6360] mt-1">${isId ? 'Katalog 12 produk kebutuhan harian dengan foto asli yang akurat, biaya per pemakaian, dan bukti sertifikasi.' : '12 daily products with accurate photos, cost-per-use, and lab certification proofs.'}</p>
          </div>
          <div class="relative w-full sm:w-80">
            <input type="text" value="${this.state.searchQuery}" oninput="window.ecoApp.state.searchQuery = this.value; window.ecoApp.render();" placeholder="${isId ? 'Cari nama produk atau merek...' : 'Search product or brand...'}" class="w-full text-xs pl-9 pr-4 py-3 rounded-2xl border border-[#DFD9CE] bg-white focus:outline-none focus:border-[#18392B] shadow-sm">
            <svg class="w-4 h-4 text-[#5C6360] absolute left-3 top-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
          </div>
        </div>

        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div class="flex items-center gap-2 overflow-x-auto pb-1 custom-scrollbar text-xs">
            ${categoriesData.map(c => `
              <button onclick="window.ecoApp.state.selectedCategory = '${c.id}'; window.ecoApp.render();" class="px-3.5 py-2 rounded-xl font-medium whitespace-nowrap transition-colors ${this.state.selectedCategory === c.id ? 'bg-[#18392B] text-white shadow-sm' : 'bg-white text-[#484F4C] border border-[#DFD9CE] hover:border-[#18392B]'}">
                ${isId ? c.labelId : c.labelEn}
              </button>
            `).join('')}
          </div>

          <div class="flex items-center gap-2 shrink-0 text-xs">
            <span class="text-[#5C6360]">${isId ? 'Urutkan:' : 'Sort:'}</span>
            <select onchange="window.ecoApp.state.sortBy = this.value; window.ecoApp.render();" class="p-2 rounded-xl border border-[#DFD9CE] bg-white text-xs text-[#18392B] focus:outline-none">
              <option value="default" ${this.state.sortBy === 'default' ? 'selected' : ''}>Default</option>
              <option value="score" ${this.state.sortBy === 'score' ? 'selected' : ''}>Skor Keberlanjutan</option>
              <option value="cost_use" ${this.state.sortBy === 'cost_use' ? 'selected' : ''}>Biaya per Pakai Terhemat</option>
              <option value="price_asc" ${this.state.sortBy === 'price_asc' ? 'selected' : ''}>Harga Beli Terendah</option>
            </select>
          </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          ${list.map(p => {
            const isWishlisted = this.state.wishlist.includes(p.id);
            const isCompared = this.state.compareList.includes(p.id);
            const scoreColor = p.sustainabilityScore >= 80 ? 'text-[#18392B] bg-[#E2EDE5]' : p.sustainabilityScore >= 50 ? 'text-[#92400E] bg-[#FEF3C7]' : 'text-[#991B1B] bg-[#FEE2E2]';
            const provBadge = p.provenance === 'verified' ? (isId ? 'Terverifikasi' : 'Verified') : p.provenance === 'estimated' ? (isId ? 'Estimasi' : 'Estimated') : 'Simulasi';

            return `
              <div class="eco-card overflow-hidden flex flex-col justify-between group">
                <div class="product-img-container h-48">
                  <img src="${p.imageUrl}" alt="${p.name}" class="w-full h-full object-cover product-img-zoom">
                  <div class="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-bold bg-[#FAF8F5]/90 backdrop-blur text-[#5C6360] border border-[#DFD9CE]">
                    ${provBadge}
                  </div>
                  <div class="absolute top-3 right-3 px-2.5 py-1 rounded-full text-[11px] font-mono font-bold ${scoreColor} shadow-sm">
                    ${p.sustainabilityScore}/100
                  </div>
                </div>

                <div class="p-5 flex flex-col justify-between flex-grow space-y-4">
                  <div class="space-y-2">
                    <span class="text-[11px] font-mono uppercase tracking-wider text-[#5F8569] font-bold">${p.brand}</span>
                    <h3 class="font-serif text-lg font-bold text-[#18392B] line-clamp-2 leading-snug cursor-pointer hover:underline" onclick="window.ecoApp.showProductDetail('${p.id}')">${p.name}</h3>
                    <p class="text-xs text-[#5C6360] line-clamp-2 leading-relaxed">${p.description}</p>
                    
                    <div class="grid grid-cols-2 gap-2 p-3 bg-[#FAF8F5] rounded-xl border border-[#E8E3D8] text-xs">
                      <div>
                        <div class="text-[10px] text-[#5C6360]">${isId ? 'Harga Beli' : 'Price'}</div>
                        <div class="font-bold text-[#18392B] font-mono">${this.formatRupiah(p.price)}</div>
                      </div>
                      <div>
                        <div class="text-[10px] text-[#5C6360]">${isId ? 'Biaya per Pakai' : 'Cost / Use'}</div>
                        <div class="font-bold text-[#5F8569] font-mono">${this.formatRupiah(p.costPerUse)}</div>
                      </div>
                    </div>

                    <div class="text-[11px] text-[#484F4C] flex items-center gap-1.5">
                      <span class="text-xs">⏱️</span>
                      <span>${isId ? 'Balik modal:' : 'Payback:'} <strong>${p.paybackMonths}</strong></span>
                    </div>
                  </div>

                  <div class="flex items-center justify-between gap-2 pt-3 border-t border-[#EFECE6]">
                    <button onclick="window.ecoApp.showProductDetail('${p.id}')" class="px-3.5 py-2 rounded-xl border border-[#DFD9CE] text-xs font-semibold text-[#18392B] hover:bg-[#FAF8F5] transition-colors">
                      ${isId ? 'Detail & Kalkulator' : 'Details & Calc'}
                    </button>
                    <div class="flex items-center gap-1.5">
                      <button onclick="window.ecoApp.toggleWishlist('${p.id}')" class="p-2.5 rounded-xl border border-[#DFD9CE] hover:border-[#18392B] transition-colors ${isWishlisted ? 'text-red-500 bg-red-50' : 'text-[#5C6360] bg-white'}">
                        <svg class="w-4 h-4 ${isWishlisted ? 'fill-current' : ''}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                      </button>
                      <button onclick="window.ecoApp.toggleCompare('${p.id}')" class="px-3.5 py-2 rounded-xl text-xs font-semibold transition-colors ${isCompared ? 'bg-[#18392B] text-white' : 'bg-[#EFECE6] text-[#18392B] hover:bg-[#DFD9CE]'}">
                        ${isCompared ? 'Added' : '+ Compare'}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `;
  }

  renderPersonalCompare() {
    const isId = this.state.lang === 'id';
    const compared = productsData.filter(p => this.state.compareList.includes(p.id));

    if (compared.length < 2) {
      return `
        <div class="py-20 text-center max-w-xl mx-auto space-y-4 eco-card p-8">
          <h3 class="font-serif text-2xl font-bold text-[#18392B]">${isId ? 'Pilih Minimal 2 Produk untuk Dibandingkan' : 'Select at Least 2 Products'}</h3>
          <p class="text-xs text-[#5C6360]">${isId ? 'Buka katalog produk dan pilih minimal 2 produk untuk melihat perbandingan kriteria lengkap.' : 'Add items to compare matrix.'}</p>
          <button onclick="window.ecoApp.setPersonalTab('scan')" class="px-5 py-3 rounded-2xl bg-[#18392B] text-white text-xs font-semibold">Buka Katalog</button>
        </div>
      `;
    }

    return `
      <div class="space-y-8">
        <div class="flex items-center justify-between">
          <h2 class="font-serif text-3xl font-bold text-[#18392B]">Matriks Perbandingan Berdampingan</h2>
          <button onclick="window.ecoApp.state.compareList = []; window.ecoApp.render();" class="text-xs font-semibold text-red-600 hover:underline">Hapus Semua</button>
        </div>

        <div class="overflow-x-auto eco-card custom-scrollbar">
          <table class="w-full text-xs text-left border-collapse">
            <thead>
              <tr class="bg-[#F4F1EA] border-b border-[#DFD9CE]">
                <th class="p-4 font-semibold text-[#18392B] w-48">Kriteria</th>
                ${compared.map(p => `
                  <th class="p-4 font-serif text-sm font-bold text-[#18392B] border-l border-[#DFD9CE] min-w-[220px]">
                    <div class="h-28 rounded-xl overflow-hidden mb-2">
                      <img src="${p.imageUrl}" alt="${p.name}" class="w-full h-full object-cover">
                    </div>
                    <span>${p.name}</span>
                  </th>
                `).join('')}
              </tr>
            </thead>
            <tbody class="divide-y divide-[#EFECE6]">
              <tr>
                <td class="p-4 text-[#5C6360]">Harga Beli Awal</td>
                ${compared.map(p => `<td class="p-4 font-bold text-[#18392B] border-l border-[#DFD9CE] font-mono">${this.formatRupiah(p.price)}</td>`).join('')}
              </tr>
              <tr class="bg-[#FAF8F5]/60">
                <td class="p-4 text-[#5C6360]">Biaya per Pemakaian</td>
                ${compared.map(p => `<td class="p-4 font-bold text-[#5F8569] border-l border-[#DFD9CE] font-mono">${this.formatRupiah(p.costPerUse)}</td>`).join('')}
              </tr>
              <tr>
                <td class="p-4 text-[#5C6360]">Periode Balik Modal</td>
                ${compared.map(p => `<td class="p-4 text-[#C08552] border-l border-[#DFD9CE] font-semibold">${p.paybackMonths}</td>`).join('')}
              </tr>
              <tr class="bg-[#FAF8F5]/60">
                <td class="p-4 text-[#5C6360]">Skor Keberlanjutan</td>
                ${compared.map(p => `<td class="p-4 font-mono font-bold text-[#18392B] border-l border-[#DFD9CE]">${p.sustainabilityScore}/100</td>`).join('')}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    `;
  }

  renderPersonalRecommendations() {
    return `
      <div class="space-y-6">
        <h2 class="font-serif text-3xl font-bold text-[#18392B]">Rekomendasi Konsumsi Cerdas AI</h2>
        <div class="eco-card p-6 space-y-4">
          <p class="text-xs text-[#5C6360]">Gantikan produk sekali pakai Anda dengan opsi ramah lingkungan berikut berdasarkan preferensi hemat kas dan perlindungan alam.</p>
          <div class="p-4 bg-[#FAF8F5] rounded-2xl border border-[#DFD9CE] space-y-2">
            <h4 class="font-bold text-sm text-[#18392B]">Beralih ke Tumbler Stainless Berinsulasi</h4>
            <p class="text-xs text-[#484F4C]">Menghemat hingga Rp 1.615.000 per tahun dibandingkan membeli botol air minum mineral PET harian di warung/kantor.</p>
            <div class="pt-2">
              <button onclick="window.ecoApp.showProductDetail('prod-bottle-reusable')" class="px-4 py-2 rounded-xl bg-[#18392B] text-white text-xs font-semibold">Lihat Detail Tumbler</button>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  renderPersonalImpact() {
    return `
      <div class="space-y-6">
        <h2 class="font-serif text-3xl font-bold text-[#18392B]">Dampak Saya (My Impact)</h2>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-5">
          <div class="eco-card p-6">
            <div class="text-xs text-[#5C6360]">CO₂e Tercegah</div>
            <div class="font-serif text-3xl font-bold text-[#18392B] mt-2">11.2 kg</div>
          </div>
          <div class="eco-card p-6">
            <div class="text-xs text-[#5C6360]">Plastik Tercegah</div>
            <div class="font-serif text-3xl font-bold text-[#18392B] mt-2">2.53 kg</div>
          </div>
          <div class="eco-card p-6">
            <div class="text-xs text-[#5C6360]">Air Bersih Terhemat</div>
            <div class="font-serif text-3xl font-bold text-[#18392B] mt-2">216 Liter</div>
          </div>
        </div>
      </div>
    `;
  }

  renderPersonalReceipt() {
    const r = this.state.receipts[0];
    return `
      <div class="space-y-6 max-w-xl mx-auto">
        <div class="text-center">
          <h2 class="font-serif text-3xl font-bold text-[#18392B]">Struk Belanja Hijau (Eco Receipt)</h2>
        </div>
        <div class="receipt-container p-8 space-y-4 font-mono text-xs">
          <div class="text-center border-b border-dashed border-[#DFD9CE] pb-4">
            <div class="font-serif text-2xl font-bold text-[#18392B]">ECO-ECO RECEIPT</div>
            <div class="text-[10px] text-[#5C6360]">${r.receiptNumber} • ${r.date}</div>
          </div>
          <div class="flex justify-between font-sans">
            <div>
              <div class="font-bold text-[#18392B]">${r.productName}</div>
              <div class="text-[11px] text-[#5C6360]">${r.brand}</div>
            </div>
            <div class="font-bold text-[#18392B] font-mono">${this.formatRupiah(r.price)}</div>
          </div>
          <div class="pt-4 border-t border-dashed border-[#DFD9CE] text-center">
            <button onclick="window.ecoApp.copyReceiptText()" class="px-5 py-2.5 rounded-xl bg-[#18392B] text-white text-xs font-semibold font-sans">Salin Teks Struk</button>
          </div>
        </div>
      </div>
    `;
  }

  renderPersonalCommunity() {
    return `
      <div class="space-y-6">
        <h2 class="font-serif text-3xl font-bold text-[#18392B]">Komunitas Lestari</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
          ${this.state.challenges.map(c => `
            <div class="eco-card p-6 flex flex-col justify-between">
              <div>
                <span class="text-xs font-mono font-bold text-[#5F8569]">${c.days} Hari</span>
                <h4 class="font-serif text-lg font-bold text-[#18392B] mt-1">${c.title}</h4>
                <p class="text-xs text-[#5C6360] mt-1">${c.desc}</p>
              </div>
              <button onclick="window.ecoApp.toggleChallenge('${c.id}')" class="mt-4 py-2.5 rounded-xl text-xs font-semibold ${c.isJoined ? 'bg-[#E2EDE5] text-[#18392B]' : 'bg-[#18392B] text-white'}">
                ${c.isJoined ? '✓ Diikuti' : 'Ikuti Tantangan'}
              </button>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  renderPersonalFinancial() {
    return `
      <div class="space-y-6">
        <h2 class="font-serif text-3xl font-bold text-[#18392B]">Pelacak Keuangan</h2>
        <div class="eco-card p-6">
          <p class="text-xs text-[#5C6360]">Membantu mengevaluasi porsi belanja barang awet berkelanjutan vs barang sekali pakai tanpa akses rekening bank riil.</p>
        </div>
      </div>
    `;
  }

  renderBusiness() {
    return `
      <div class="space-y-6">
        <h2 class="font-serif text-3xl font-bold text-[#18392B]">Portal Bisnis & Merek</h2>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-5">
          <div class="eco-card p-6">
            <div class="text-xs text-[#5C6360]">SKU Terdaftar</div>
            <div class="font-serif text-3xl font-bold text-[#18392B] mt-2">12 Produk</div>
          </div>
          <div class="eco-card p-6">
            <div class="text-xs text-[#5C6360]">Rata-rata Skor</div>
            <div class="font-serif text-3xl font-bold text-[#18392B] mt-2 font-mono">66.8 / 100</div>
          </div>
          <div class="eco-card p-6">
            <div class="text-xs text-[#5C6360]">Klaim Terverifikasi</div>
            <div class="font-serif text-3xl font-bold text-[#5F8569] mt-2 font-mono">58%</div>
          </div>
        </div>
      </div>
    `;
  }
}

// Instantiate on load
new EcoEcoApp();
