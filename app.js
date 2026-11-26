// app.js - Logika Interaktif Kuis Drilling AKIFA (Nuansa Biru Tosca Elegan & Tombol Kontras Tinggi)

// State Utama Aplikasi
const state = {
  subjects: [],
  currentSubject: null,
  currentPackage: null,
  currentQuestionIndex: 0,
  userAnswers: [], // { questionIndex, questionText, options, selectedIndex, correctIndex, isCorrect, explanation }
  score: 0,
  fiftyFiftyUsed: false,
  eliminatedOptions: [],
  hintShown: false,
  timerSeconds: 0,
  timerInterval: null,
  isAnswerSubmitted: false,
  playerName: localStorage.getItem("akifa_student_name") || "Siswa Berprestasi"
};

// Inisialisasi Aplikasi
document.addEventListener("DOMContentLoaded", () => {
  initApp();
});

function initApp() {
  state.subjects = getStoredSubjects();
  renderSoundButtonState();
  renderTTSButtonState();
  showHomeView();
  setupEventListeners();
}

function setupEventListeners() {
  // Tombol navigasi home
  document.getElementById("btnHomeNav")?.addEventListener("click", () => {
    sounds.playClick();
    if (state.timerInterval) clearInterval(state.timerInterval);
    sounds.stopSpeech();
    showHomeView();
  });

  // Toggle Suara SFX
  document.getElementById("btnSoundToggle")?.addEventListener("click", () => {
    const isEnabled = sounds.toggleSound();
    renderSoundButtonState();
    if (isEnabled) sounds.playClick();
  });

  // Toggle TTS Pembaca Soal
  document.getElementById("btnTtsToggle")?.addEventListener("click", () => {
    sounds.ttsEnabled = !sounds.ttsEnabled;
    localStorage.setItem("akifa_tts_enabled", sounds.ttsEnabled.toString());
    renderTTSButtonState();
    sounds.playClick();
    if (!sounds.ttsEnabled) sounds.stopSpeech();
  });

  // Tombol Kelola Soal
  document.getElementById("btnManageQuiz")?.addEventListener("click", () => {
    sounds.playClick();
    showEditorModal();
  });
}

function renderSoundButtonState() {
  const btn = document.getElementById("btnSoundToggle");
  if (!btn) return;
  if (sounds.enabled) {
    btn.innerHTML = `<span class="text-base">🔊</span> <span class="hidden sm:inline font-bold text-xs sm:text-sm">Suara: ON</span>`;
    btn.className = "flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-teal-50 text-teal-800 border-2 border-teal-300 hover:bg-teal-100 transition";
  } else {
    btn.innerHTML = `<span class="text-base">🔇</span> <span class="hidden sm:inline font-bold text-xs sm:text-sm">Suara: OFF</span>`;
    btn.className = "flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 text-slate-600 border-2 border-slate-300 hover:bg-slate-200 transition";
  }
}

function renderTTSButtonState() {
  const btn = document.getElementById("btnTtsToggle");
  if (!btn) return;
  if (sounds.ttsEnabled) {
    btn.innerHTML = `<span class="text-base">🗣️</span> <span class="hidden md:inline font-bold text-xs sm:text-sm">Bacakan: ON</span>`;
    btn.className = "flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-cyan-50 text-cyan-800 border-2 border-cyan-300 hover:bg-cyan-100 transition";
  } else {
    btn.innerHTML = `<span class="text-base">🤫</span> <span class="hidden md:inline font-bold text-xs sm:text-sm">Bacakan: OFF</span>`;
    btn.className = "flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 text-slate-600 border-2 border-slate-300 hover:bg-slate-200 transition";
  }
}

// ========================================================
// VIEW 1: HOME (Nuansa Biru Tosca Cerah & Elegan)
// ========================================================
function showHomeView() {
  state.currentSubject = null;
  state.currentPackage = null;
  sounds.stopSpeech();

  const main = document.getElementById("mainContent");
  main.innerHTML = `
    <!-- Hero Banner Elegan Biru Tosca -->
    <div class="relative overflow-hidden rounded-3xl bg-gradient-to-r from-teal-700 via-teal-600 to-cyan-600 p-6 sm:p-10 text-white shadow-xl shadow-teal-900/10 mb-10 card-kid">
      <!-- Background subtle floating circles -->
      <div class="absolute -right-8 -bottom-10 w-48 h-48 rounded-full bg-cyan-300/15 blur-2xl pointer-events-none"></div>
      <div class="absolute left-1/4 -top-12 w-40 h-40 rounded-full bg-teal-300/20 blur-xl pointer-events-none"></div>

      <div class="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div class="text-center md:text-left space-y-3">
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md text-teal-100 text-xs sm:text-sm font-bold border border-white/20">
            <span>🎯 Drilling Asesmen Kurikulum Merdeka</span>
          </div>
          <h1 class="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight drop-shadow-sm">
            Kuis Drilling <span class="text-teal-200 underline decoration-amber-400 underline-offset-4">AKIFA</span>
          </h1>
          <p class="text-sm sm:text-base text-teal-50 max-w-xl font-medium leading-relaxed">
            Platform latihan soal interaktif dengan materi kisi-kisi resmi. Tingkatkan pemahaman materi, asah konsentrasi, dan raih nilai terbaik bersama pendamping belajar cerdas!
          </p>

          <!-- Badges Fitur -->
          <div class="pt-2 flex flex-wrap items-center justify-center md:justify-start gap-3 text-xs sm:text-sm">
            <div class="bg-white/15 backdrop-blur px-3.5 py-2 rounded-2xl flex items-center gap-2 border border-white/20">
              <span class="text-xl">📋</span>
              <div class="text-left">
                <div class="font-extrabold text-white">Kisi-Kisi Resmi</div>
                <div class="text-teal-100 text-[11px]">8 Mata Pelajaran</div>
              </div>
            </div>
            <div class="bg-white/15 backdrop-blur px-3.5 py-2 rounded-2xl flex items-center gap-2 border border-white/20">
              <span class="text-xl">🧠</span>
              <div class="text-left">
                <div class="font-extrabold text-white">155 Soal PG</div>
                <div class="text-teal-100 text-[11px]">L1, L2, dan L3</div>
              </div>
            </div>
            <div class="bg-white/15 backdrop-blur px-3.5 py-2 rounded-2xl flex items-center gap-2 border border-white/20">
              <span class="text-xl">🎓</span>
              <div class="text-left">
                <div class="font-extrabold text-white">Sertifikat Juara</div>
                <div class="text-teal-100 text-[11px]">Bisa Cetak / PDF</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Maskot Edukatif Kiki si Kancil -->
        <div class="flex-shrink-0 text-center animate-float">
          <div class="w-32 h-32 sm:w-40 sm:h-40 bg-white/20 backdrop-blur-md rounded-3xl p-3 flex items-center justify-center border-2 border-white/30 shadow-lg shadow-teal-950/15">
            <span class="text-6xl sm:text-7xl select-none" role="img" aria-label="Mascot">🦊</span>
          </div>
          <div class="mt-2.5 bg-white text-teal-900 text-xs sm:text-sm font-black px-4 py-1 rounded-full shadow-md inline-block border-2 border-teal-200">
            Kiki Sahabat Belajar 💡
          </div>
        </div>
      </div>
    </div>

    <!-- Pilihan Mata Pelajaran Section -->
    <div class="mb-10">
      <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 mb-6 pb-2 border-b-2 border-teal-100">
        <div>
          <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-800 flex items-center gap-2">
            <span class="text-teal-600">📚</span> Pilih Mata Pelajaran
          </h2>
          <p class="text-slate-500 text-xs sm:text-sm mt-0.5">
            Pilih mata pelajaran di bawah untuk membuka paket soal dengan tombol warna kontras atau mempelajari kisi-kisi materinya.
          </p>
        </div>
        <div>
          <span class="px-3.5 py-1.5 rounded-full bg-teal-100/80 text-teal-900 font-extrabold text-xs border border-teal-200">
            ${state.subjects.length} Mata Pelajaran Tersedia
          </span>
        </div>
      </div>

      <!-- Grid Cards Mata Pelajaran -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        ${state.subjects.map(subj => renderSubjectCard(subj)).join("")}
      </div>
    </div>
  `;
}

function renderSubjectCard(subj) {
  const totalQuestions = subj.packages.reduce((acc, p) => acc + (p.questions ? p.questions.length : 0), 0);
  return `
    <div class="bg-white rounded-3xl p-5 border-2 border-teal-100 hover:border-teal-400 card-kid flex flex-col justify-between relative overflow-hidden group">
      <!-- Top Accent Bar Tosca -->
      <div class="absolute top-0 left-0 right-0 h-2.5 bg-gradient-to-r from-teal-500 to-cyan-500"></div>

      <div>
        <div class="flex items-start justify-between gap-2 mb-3 pt-1">
          <div class="w-14 h-14 rounded-2xl bg-teal-50 border-2 border-teal-200 flex items-center justify-center text-3xl shadow-sm group-hover:scale-105 transition-transform">
            ${subj.icon}
          </div>
          <span class="px-2.5 py-1 rounded-full text-[11px] font-extrabold bg-teal-50 text-teal-800 border border-teal-200">
            ${subj.badge || 'Kelas 4'}
          </span>
        </div>

        <h3 class="text-lg font-black text-slate-800 mb-1.5 group-hover:text-teal-700 transition-colors line-clamp-1">
          ${subj.name}
        </h3>
        <p class="text-slate-500 text-xs mb-4 leading-relaxed line-clamp-2">
          ${subj.shortDesc}
        </p>

        <!-- Stats Kisi-Kisi & Soal -->
        <div class="bg-teal-50/50 rounded-2xl p-2.5 mb-4 flex items-center justify-between text-[11px] text-teal-900 font-bold border border-teal-100">
          <span class="flex items-center gap-1">
            <span class="text-teal-600">📋</span> ${subj.kisiKisi.length} Kisi-Kisi
          </span>
          <span class="flex items-center gap-1">
            <span class="text-cyan-600">❓</span> ${subj.packages[0].questions.length} Soal PG
          </span>
        </div>
      </div>

      <!-- Action Buttons: Tombol Buka Paket Berwarna Kontras Tinggi -->
      <div class="space-y-2 pt-1">
        <button 
          onclick="openSubjectPackages('${subj.id}')" 
          class="w-full py-2.5 rounded-2xl font-black text-xs sm:text-sm btn-cta-contrast flex items-center justify-center gap-1.5 shadow-md">
          <span>🚀 Buka Paket Soal</span>
        </button>
        <button 
          onclick="openKisiKisiModal('${subj.id}')" 
          class="w-full py-2 rounded-2xl btn-tosca-outline font-bold text-xs flex items-center justify-center gap-1 transition">
          <span>📖 Pelajari Kisi-Kisi</span>
        </button>
      </div>
    </div>
  `;
}

// ========================================================
// VIEW 2: DAFTAR MENU BUKA PAKET SOAL (DENGAN WARNA KONTRAS TINGGI)
// ========================================================
function openSubjectPackages(subjectId) {
  sounds.playClick();
  const subj = state.subjects.find(s => s.id === subjectId);
  if (!subj) return;
  state.currentSubject = subj;

  const main = document.getElementById("mainContent");
  main.innerHTML = `
    <!-- Navigation Back & Kisi-Kisi Shortcut -->
    <div class="mb-6 flex flex-wrap items-center justify-between gap-3">
      <button 
        onclick="sounds.playClick(); showHomeView()" 
        class="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-white hover:bg-teal-50 text-teal-800 font-extrabold text-xs sm:text-sm border-2 border-teal-200 shadow-sm transition">
        <span>⬅️ Kembali ke Menu Utama</span>
      </button>
      <button 
        onclick="openKisiKisiModal('${subj.id}')" 
        class="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-teal-100 hover:bg-teal-200 text-teal-900 font-black text-xs sm:text-sm border-2 border-teal-300 transition">
        <span>📖 Buka Kisi-Kisi ${subj.name}</span>
      </button>
    </div>

    <!-- Header Banner Mata Pelajaran Tosca Elegan -->
    <div class="rounded-3xl bg-gradient-to-r from-teal-700 via-teal-600 to-cyan-600 p-6 sm:p-8 text-white shadow-lg shadow-teal-950/10 mb-8 card-kid relative overflow-hidden">
      <div class="flex flex-col sm:flex-row items-center sm:items-start gap-5">
        <div class="w-18 h-18 sm:w-20 sm:h-20 rounded-3xl bg-white/20 backdrop-blur-md flex items-center justify-center text-4xl border-2 border-white/30 shadow-inner">
          ${subj.icon}
        </div>
        <div class="text-center sm:text-left">
          <div class="inline-block px-3 py-0.5 rounded-full bg-white/20 text-teal-100 text-[11px] font-black uppercase tracking-wider mb-1.5">
            ${subj.badge}
          </div>
          <h1 class="text-2xl sm:text-3xl font-black mb-1.5 tracking-tight">${subj.name}</h1>
          <p class="text-teal-50 text-xs sm:text-sm max-w-2xl font-medium leading-relaxed">${subj.shortDesc}</p>
        </div>
      </div>
    </div>

    <!-- Heading Menu Buka Paket Soal -->
    <div class="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
      <div>
        <h2 class="text-xl sm:text-2xl font-black text-slate-800 flex items-center gap-2">
          <span class="text-amber-500">🎯</span> Menu Pilihan Paket Soal
        </h2>
        <p class="text-slate-500 text-xs sm:text-sm">
          Tekan tombol <strong class="text-amber-600 font-black">kuning cerah kontras</strong> di bawah pada paket yang ingin kamu kerjakan!
        </p>
      </div>
      <div class="bg-amber-100 border border-amber-300 text-amber-900 px-3 py-1.5 rounded-2xl text-xs font-bold flex items-center gap-1.5">
        <span>💡</span> Tombol pengerjaan berwana kontras agar mudah ditemukan anak
      </div>
    </div>

    <!-- Grid Menu Buka Paket Soal dengan Warna Kontras Tinggi -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
      ${subj.packages.map((pkg, idx) => {
        const isMain = idx === 0;
        return `
          <div class="rounded-3xl p-6 ${isMain ? 'card-highlight-amber' : 'bg-white border-2 border-teal-100'} card-kid flex flex-col justify-between relative">
            
            ${isMain ? `
              <div class="absolute -top-3 right-6">
                <span class="px-3 py-1 rounded-full bg-amber-400 text-amber-950 font-black text-[11px] shadow-md border border-amber-500 flex items-center gap-1">
                  ⭐ Paket Lengkap Resmi
                </span>
              </div>
            ` : ''}

            <div>
              <div class="flex items-center justify-between mb-3 ${isMain ? 'pt-1' : ''}">
                <span class="px-2.5 py-1 rounded-full ${isMain ? 'bg-amber-200 text-amber-950' : 'bg-teal-100 text-teal-900'} font-black text-xs">
                  Paket #${idx + 1}
                </span>
                <span class="px-2.5 py-1 rounded-full bg-cyan-100 text-cyan-900 font-bold text-xs">
                  ${pkg.difficulty || 'Standar'}
                </span>
              </div>

              <h3 class="text-base sm:text-lg font-black text-slate-800 mb-2 leading-snug">
                ${pkg.title}
              </h3>
              <p class="text-slate-500 text-xs mb-4 leading-relaxed">
                ${pkg.description || 'Kumpulan soal pilihan ganda pilihan sesuai kisi-kisi pembelajaran.'}
              </p>

              <div class="grid grid-cols-2 gap-2 ${isMain ? 'bg-amber-100/50 border-amber-200' : 'bg-teal-50/50 border-teal-100'} rounded-2xl p-3 mb-5 text-[11px] text-slate-800 font-bold border">
                <div>❓ Jumlah: <strong class="text-teal-900 font-black">${pkg.questions.length} Soal PG</strong></div>
                <div>⏱️ Waktu: <strong class="text-teal-900 font-black">${pkg.durationMinutes || 15} Menit</strong></div>
                <div>🎒 Target: <strong class="text-teal-900 font-black">${pkg.targetKelas || 'Kelas 4'}</strong></div>
                <div>⭐ Tipe: <strong class="text-teal-900 font-black">Pilihan Ganda</strong></div>
              </div>
            </div>

            <!-- Tombol Aksi Kontras Tinggi (Amber Gold yang mencolok dan mudah diakses anak) -->
            <div>
              <button 
                onclick="startQuiz('${subj.id}', '${pkg.id}')" 
                class="w-full py-3.5 rounded-2xl font-black text-sm sm:text-base btn-cta-contrast flex items-center justify-center gap-2 shadow-lg">
                <span class="text-lg">🚀</span>
                <span>Mulai Kerjakan Soal Ini!</span>
              </button>
            </div>
          </div>
        `;
      }).join("")}
    </div>
  `;
}

// ========================================================
// VIEW 3: KISI-KISI MODAL (Nuansa Tosca Elegan)
// ========================================================
function openKisiKisiModal(subjectId) {
  sounds.playClick();
  const subj = state.subjects.find(s => s.id === subjectId) || state.currentSubject;
  if (!subj) return;

  const modalContainer = document.getElementById("modalContainer");
  modalContainer.innerHTML = `
    <div class="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
      <div class="bg-white rounded-3xl max-w-4xl w-full max-h-[92vh] flex flex-col shadow-2xl border-4 border-teal-500 overflow-hidden">
        
        <!-- Header Modal Tosca -->
        <div class="bg-gradient-to-r from-teal-700 via-teal-600 to-cyan-600 p-4 sm:p-6 text-white flex items-center justify-between">
          <div class="flex items-center gap-3">
            <span class="text-3xl sm:text-4xl">${subj.icon}</span>
            <div>
              <div class="inline-block px-2.5 py-0.5 rounded-full bg-white/20 text-[11px] font-black uppercase tracking-wider mb-1">
                ${subj.badge}
              </div>
              <h3 class="text-lg sm:text-2xl font-black">Kisi-Kisi Asesmen: ${subj.name}</h3>
              <p class="text-teal-100 text-xs sm:text-sm">Rincian Tujuan Pembelajaran, Materi Pokok & Indikator Soal Resmi Kurikulum Merdeka</p>
            </div>
          </div>
          <button 
            onclick="closeModal()" 
            class="w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 text-white font-black flex items-center justify-center text-lg transition">
            ✕
          </button>
        </div>

        <!-- Content Body (Scrollable) -->
        <div class="p-4 sm:p-6 overflow-y-auto space-y-4 text-slate-800 bg-slate-50/50">
          <div class="bg-teal-50 border-2 border-teal-200 rounded-2xl p-4 text-xs sm:text-sm text-teal-900 flex items-start gap-3 shadow-sm">
            <span class="text-2xl flex-shrink-0">💡</span>
            <div>
              <strong>Panduan Belajar Asesmen Sumatif Akhir Semester:</strong>
              Seluruh butir soal pilihan ganda disusun selaras dengan kisi-kisi resmi. Pelajari capaian pembelajaran dan indikator soal berikut sebelum memulai drilling!
            </div>
          </div>

          <!-- List Kisi-Kisi Cards -->
          <div class="space-y-3">
            ${subj.kisiKisi.map((k, idx) => {
              const noSoal = k.no || idx + 1;
              const materi = k.materi || k.topik || 'Materi Pokok';
              const tujuan = k.tp || k.capaian || '';
              const indikator = typeof k.indikator === 'string' ? k.indikator : (Array.isArray(k.indikator) ? k.indikator.join('; ') : '');
              const level = k.level || 'L2';
              const bentuk = k.bentuk || 'Pilihan Ganda';
              const elemen = k.elemen || k.bab || '';

              return `
                <div class="border-2 border-teal-100 rounded-2xl p-4 bg-white hover:border-teal-400 transition shadow-sm">
                  <div class="flex flex-wrap items-center justify-between gap-2 mb-2 pb-2 border-b border-slate-100">
                    <div class="flex items-center gap-2">
                      <span class="px-2.5 py-1 rounded-xl bg-teal-600 text-white font-black text-xs">
                        Nomor Soal #${noSoal}
                      </span>
                      <span class="text-sm sm:text-base font-extrabold text-slate-900">
                        ${materi}
                      </span>
                    </div>

                    <div class="flex items-center gap-1.5 text-xs font-bold">
                      ${elemen ? `<span class="px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200 text-[11px]">${elemen}</span>` : ''}
                      <span class="px-2 py-0.5 rounded-full bg-cyan-100 text-cyan-800 border border-cyan-200 text-[11px]">${level}</span>
                      <span class="px-2 py-0.5 rounded-full bg-teal-100 text-teal-800 border border-teal-200 text-[11px]">${bentuk}</span>
                    </div>
                  </div>

                  <div class="space-y-2 text-xs sm:text-sm">
                    ${tujuan ? `
                      <div>
                        <span class="text-[11px] font-bold uppercase tracking-wide text-teal-800/70 block mb-0.5">🎯 Tujuan Pembelajaran:</span>
                        <p class="text-slate-700 bg-teal-50/40 p-2.5 rounded-xl border border-teal-100 font-medium">${tujuan}</p>
                      </div>
                    ` : ''}

                    <div class="bg-teal-50 border-l-4 border-teal-500 p-2.5 rounded-r-xl">
                      <span class="text-[11px] font-extrabold uppercase tracking-wide text-teal-900 block mb-0.5">📋 Indikator Soal:</span>
                      <p class="text-slate-800 font-semibold">${indikator}</p>
                    </div>
                  </div>
                </div>
              `;
            }).join("")}
          </div>
        </div>

        <!-- Footer Modal dengan Tombol Kontras -->
        <div class="bg-white p-4 border-t-2 border-teal-100 flex items-center justify-between shadow-inner">
          <span class="text-xs text-teal-800 font-bold hidden sm:inline">
            Total: ${subj.kisiKisi.length} Butir Kisi-Kisi Resmi
          </span>
          <div class="flex gap-2 w-full sm:w-auto">
            <button 
              onclick="closeModal()" 
              class="flex-1 sm:flex-none px-5 py-2.5 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs sm:text-sm transition">
              Tutup
            </button>
            <button 
              onclick="closeModal(); openSubjectPackages('${subj.id}')" 
              class="flex-1 sm:flex-none px-6 py-2.5 rounded-2xl font-black text-xs sm:text-sm btn-cta-contrast shadow-md">
              🚀 Langsung Buka Paket Soal!
            </button>
          </div>
        </div>

      </div>
    </div>
  `;
}

function closeModal() {
  sounds.playClick();
  const modalContainer = document.getElementById("modalContainer");
  if (modalContainer) modalContainer.innerHTML = "";
}

// ========================================================
// VIEW 4: RUANG KUIS DRILLING
// ========================================================
function startQuiz(subjectId, packageId) {
  sounds.playClick();
  const subj = state.subjects.find(s => s.id === subjectId);
  if (!subj) return;
  const pkg = subj.packages.find(p => p.id === packageId);
  if (!pkg || !pkg.questions || pkg.questions.length === 0) {
    alert("Paket soal ini belum memiliki pertanyaan.");
    return;
  }

  state.currentSubject = subj;
  state.currentPackage = pkg;
  state.currentQuestionIndex = 0;
  state.userAnswers = [];
  state.score = 0;
  state.fiftyFiftyUsed = false;
  state.eliminatedOptions = [];
  state.hintShown = false;
  state.isAnswerSubmitted = false;
  state.timerSeconds = 0;

  if (state.timerInterval) clearInterval(state.timerInterval);
  state.timerInterval = setInterval(() => {
    state.timerSeconds++;
    const timerEl = document.getElementById("quizTimerDisplay");
    if (timerEl) {
      const mins = Math.floor(state.timerSeconds / 60);
      const secs = state.timerSeconds % 60;
      timerEl.textContent = `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
    }
  }, 1000);

  renderQuizQuestion();
}

function renderQuizQuestion() {
  const subj = state.currentSubject;
  const pkg = state.currentPackage;
  const qIndex = state.currentQuestionIndex;
  const q = pkg.questions[qIndex];
  const totalQ = pkg.questions.length;
  const progressPercent = (qIndex / totalQ) * 100;

  state.isAnswerSubmitted = false;
  state.eliminatedOptions = [];
  state.hintShown = false;
  sounds.stopSpeech();

  // Bacakan soal otomatis jika opsi TTS diaktifkan
  if (sounds.ttsEnabled) {
    setTimeout(() => {
      readCurrentQuestionAloud();
    }, 400);
  }

  const main = document.getElementById("mainContent");
  main.innerHTML = `
    <!-- Top Quiz Navigation Bar Tosca -->
    <div class="bg-white rounded-3xl p-4 sm:p-5 shadow-sm border-2 border-teal-100 mb-6 flex flex-wrap items-center justify-between gap-3">
      <div class="flex items-center gap-3">
        <button 
          onclick="confirmQuitQuiz()" 
          class="px-3.5 py-1.5 rounded-xl bg-slate-100 hover:bg-rose-100 text-slate-700 hover:text-rose-700 font-bold text-xs sm:text-sm border border-slate-200 transition">
          ✕ Keluar
        </button>
        <div>
          <span class="text-xs font-bold text-teal-700 uppercase tracking-wider block">${subj.name}</span>
          <h2 class="text-sm sm:text-base font-black text-slate-800 line-clamp-1">${pkg.title}</h2>
        </div>
      </div>

      <!-- Right status: Timer & Progress Badge -->
      <div class="flex items-center gap-3">
        <div class="bg-teal-50 text-teal-900 border border-teal-200 px-3 py-1.5 rounded-2xl flex items-center gap-1.5 text-xs sm:text-sm font-black">
          <span>⏱️</span>
          <span id="quizTimerDisplay">00:00</span>
        </div>
        <div class="bg-cyan-50 text-cyan-900 border border-cyan-200 px-3 py-1.5 rounded-2xl text-xs sm:text-sm font-black">
          Soal ${qIndex + 1} / ${totalQ}
        </div>
      </div>
    </div>

    <!-- Progress Tracker Bar Tosca -->
    <div class="relative w-full bg-slate-200 h-3.5 rounded-full mb-8 overflow-visible">
      <div 
        class="bg-gradient-to-r from-teal-500 to-cyan-500 h-3.5 rounded-full transition-all duration-500 ease-out" 
        style="width: ${progressPercent}%;">
      </div>
      <!-- Rocket Indicator -->
      <div 
        class="absolute -top-3.5 transform -translate-x-1/2 transition-all duration-500 text-xl pointer-events-none"
        style="left: ${progressPercent}%;">
        🚀
      </div>
    </div>

    <!-- Main Question Box -->
    <div class="bg-white rounded-3xl p-6 sm:p-8 shadow-md border-2 border-teal-100 mb-6 card-kid">
      <!-- Question Header & Audio Button -->
      <div class="flex items-start justify-between gap-4 mb-4">
        <span class="px-3 py-1 rounded-2xl bg-teal-600 text-white font-black text-xs sm:text-sm">
          Pertanyaan #${qIndex + 1}
        </span>
        
        <div class="flex items-center gap-2">
          <button 
            onclick="readCurrentQuestionAloud()" 
            title="Dengarkan soal dibacakan"
            class="px-3 py-1.5 rounded-2xl bg-cyan-50 hover:bg-cyan-100 text-cyan-900 font-bold text-xs sm:text-sm border border-cyan-300 flex items-center gap-1.5 transition">
            <span>🔊 Bacakan Soal</span>
          </button>
        </div>
      </div>

      <!-- Question Text -->
      <div class="mb-6">
        <p class="text-lg sm:text-xl font-bold text-slate-800 leading-relaxed whitespace-pre-line">
          ${q.question}
        </p>
      </div>

      <!-- Lifelines / Tombol Bantuan Cerdik Tosca -->
      <div class="flex flex-wrap items-center gap-2 mb-6 pt-3 border-t border-slate-100">
        <span class="text-xs font-bold text-teal-800/70 uppercase tracking-wider mr-2">Bantuan:</span>
        <button 
          id="btnFiftyFifty"
          onclick="useFiftyFifty()" 
          class="px-3 py-1.5 rounded-xl bg-teal-50 text-teal-900 hover:bg-teal-100 font-bold text-xs border border-teal-300 transition flex items-center gap-1 ${state.fiftyFiftyUsed ? 'opacity-40 cursor-not-allowed' : ''}">
          <span>✂️ 50:50 (Hapus 2 Opsi)</span>
        </button>
        <button 
          id="btnHint"
          onclick="toggleHint()" 
          class="px-3 py-1.5 rounded-xl bg-cyan-50 text-cyan-900 hover:bg-cyan-100 font-bold text-xs border border-cyan-300 transition flex items-center gap-1">
          <span>💡 Petunjuk / Clue</span>
        </button>
      </div>

      <!-- Hint Box Container -->
      <div id="hintBoxContainer" class="hidden mb-6 bg-teal-50 border-2 border-teal-300 rounded-2xl p-4 text-teal-950 text-sm animate-fade-in">
        <div class="flex items-start gap-2">
          <span class="text-2xl">💡</span>
          <div>
            <div class="font-extrabold mb-0.5 text-teal-900">Petunjuk Kiki:</div>
            <p>${q.hint || "Ingat kembali materi yang sudah dipelajari pada kisi-kisi!"}</p>
          </div>
        </div>
      </div>

      <!-- Options Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5" id="optionsContainer">
        ${q.options.map((opt, oIdx) => {
          const letter = String.fromCharCode(65 + oIdx);
          return `
            <button 
              id="optBtn_${oIdx}"
              onclick="handleSelectAnswer(${oIdx})"
              class="option-btn text-left p-4 rounded-2xl border-2 border-slate-200 bg-white hover:bg-teal-50/60 hover:border-teal-400 flex items-start gap-3 transition group shadow-sm">
              <span class="w-8 h-8 rounded-xl bg-teal-50 text-teal-800 font-black text-sm flex items-center justify-center border-2 border-teal-200 group-hover:border-teal-500 group-hover:bg-teal-600 group-hover:text-white flex-shrink-0 transition">
                ${letter}
              </span>
              <span class="text-sm sm:text-base font-bold text-slate-800 pt-1 leading-snug">
                ${opt}
              </span>
            </button>
          `;
        }).join("")}
      </div>

      <!-- Feedback & Next Button (Dengan Tombol Kontras Tinggi) -->
      <div id="feedbackContainer" class="hidden mt-6 pt-5 border-t-2 border-slate-100 animate-fade-in">
        <!-- Will be filled by handleSelectAnswer -->
      </div>
    </div>
  `;
}

function readCurrentQuestionAloud() {
  const q = state.currentPackage.questions[state.currentQuestionIndex];
  if (!q) return;
  sounds.init();
  const textToRead = `${q.question}. Pilihan jawaban: A, ${q.options[0]}. B, ${q.options[1]}. C, ${q.options[2]}. D, ${q.options[3]}.`;
  const lang = state.currentSubject.id === "bahasa_inggris" ? "en-US" : "id-ID";
  sounds.speak(textToRead, lang);
}

function useFiftyFifty() {
  if (state.fiftyFiftyUsed || state.isAnswerSubmitted) return;
  state.fiftyFiftyUsed = true;
  sounds.playFiftyFifty();

  const q = state.currentPackage.questions[state.currentQuestionIndex];
  const correctIdx = q.correctIndex;
  
  const wrongIndices = [0, 1, 2, 3].filter(idx => idx !== correctIdx);
  const shuffledWrong = wrongIndices.sort(() => 0.5 - Math.random());
  state.eliminatedOptions = shuffledWrong.slice(0, 2);

  state.eliminatedOptions.forEach(idx => {
    const btn = document.getElementById(`optBtn_${idx}`);
    if (btn) {
      btn.classList.add("opacity-25", "line-through", "pointer-events-none", "bg-slate-100");
    }
  });

  const btnFifty = document.getElementById("btnFiftyFifty");
  if (btnFifty) {
    btnFifty.classList.add("opacity-40", "cursor-not-allowed");
    btnFifty.innerHTML = "<span>✂️ 50:50 (Sudah Dipakai)</span>";
  }
}

function toggleHint() {
  if (state.isAnswerSubmitted) return;
  sounds.playClick();
  const hintBox = document.getElementById("hintBoxContainer");
  if (!hintBox) return;
  hintBox.classList.toggle("hidden");
}

function handleSelectAnswer(selectedIndex) {
  if (state.isAnswerSubmitted) return;
  state.isAnswerSubmitted = true;
  sounds.stopSpeech();

  const q = state.currentPackage.questions[state.currentQuestionIndex];
  const isCorrect = selectedIndex === q.correctIndex;

  state.userAnswers.push({
    questionIndex: state.currentQuestionIndex,
    questionText: q.question,
    options: q.options,
    selectedIndex: selectedIndex,
    correctIndex: q.correctIndex,
    isCorrect: isCorrect,
    explanation: q.explanation
  });

  if (isCorrect) {
    state.score += 100 / state.currentPackage.questions.length;
    sounds.playCorrect();
    triggerMiniConfetti();
  } else {
    sounds.playWrong();
  }

  q.options.forEach((_, idx) => {
    const btn = document.getElementById(`optBtn_${idx}`);
    if (!btn) return;
    btn.disabled = true;

    if (idx === q.correctIndex) {
      // Benar (Tosca-Emerald Elegan)
      btn.className = "text-left p-4 rounded-2xl border-2 border-teal-500 bg-teal-50 text-teal-950 flex items-start gap-3 shadow-sm";
      btn.querySelector("span:first-child").className = "w-8 h-8 rounded-xl bg-teal-600 text-white font-black text-sm flex items-center justify-center";
    } else if (idx === selectedIndex) {
      // Salah yang dipilih (Rose lembut)
      btn.className = "text-left p-4 rounded-2xl border-2 border-rose-400 bg-rose-50 text-rose-950 flex items-start gap-3";
      btn.querySelector("span:first-child").className = "w-8 h-8 rounded-xl bg-rose-500 text-white font-black text-sm flex items-center justify-center";
    } else {
      btn.classList.add("opacity-35");
    }
  });

  const feedbackContainer = document.getElementById("feedbackContainer");
  if (feedbackContainer) {
    feedbackContainer.classList.remove("hidden");
    const isLastQuestion = state.currentQuestionIndex === state.currentPackage.questions.length - 1;

    feedbackContainer.innerHTML = `
      <div class="rounded-2xl p-4 sm:p-5 mb-5 ${isCorrect ? 'bg-teal-50 border-2 border-teal-300' : 'bg-rose-50 border-2 border-rose-200'}">
        <div class="flex items-center gap-2 mb-1.5">
          <span class="text-2xl">${isCorrect ? '🎉' : '💡'}</span>
          <h4 class="font-black text-base sm:text-lg ${isCorrect ? 'text-teal-900' : 'text-rose-900'}">
            ${isCorrect ? 'Hebat Sekali! Jawabanmu Benar!' : 'Belum Tepat, Pelajari Pembahasannya Ya!'}
          </h4>
        </div>
        <p class="text-xs sm:text-sm font-medium ${isCorrect ? 'text-teal-950' : 'text-slate-800'}">
          <strong>Pembahasan:</strong> ${q.explanation}
        </p>
      </div>

      <div class="flex justify-end">
        <button 
          onclick="${isLastQuestion ? 'finishQuiz()' : 'goToNextQuestion()'}"
          class="px-7 py-3 rounded-2xl font-black text-sm btn-cta-contrast flex items-center gap-2 shadow-lg">
          <span>${isLastQuestion ? '🎉 Lihat Hasil Akhir Kuis!' : 'Soal Berikutnya ➡️'}</span>
        </button>
      </div>
    `;
  }
}

function goToNextQuestion() {
  sounds.playClick();
  state.currentQuestionIndex++;
  renderQuizQuestion();
}

function confirmQuitQuiz() {
  sounds.playClick();
  if (confirm("Apakah kamu yakin ingin keluar dari kuis? Kemajuan soal saat ini akan dibatalkan.")) {
    if (state.timerInterval) clearInterval(state.timerInterval);
    sounds.stopSpeech();
    openSubjectPackages(state.currentSubject.id);
  }
}

function triggerMiniConfetti() {
  if (typeof confetti === "function") {
    confetti({
      particleCount: 30,
      spread: 60,
      origin: { y: 0.7 }
    });
  }
}

// ========================================================
// VIEW 5: HASIL KUIS, BINTANG, DAN SERTIFIKAT AKIFA
// ========================================================
function finishQuiz() {
  if (state.timerInterval) clearInterval(state.timerInterval);
  sounds.stopSpeech();
  sounds.playCelebration();

  if (typeof confetti === "function") {
    confetti({
      particleCount: 90,
      spread: 80,
      origin: { y: 0.6 }
    });
  }

  const roundedScore = Math.round(state.score);
  const totalQ = state.currentPackage.questions.length;
  const correctCount = state.userAnswers.filter(a => a.isCorrect).length;
  const wrongCount = totalQ - correctCount;

  let stars = "⭐⭐⭐";
  let titleBadge = "🏆 JUARA BINTANG AKIFA!";
  let message = "Luar biasa hebat! Kamu menguasai materi drilling ini dengan sangat sempurna!";

  if (roundedScore >= 80) {
    stars = "⭐⭐⭐";
    titleBadge = "🏆 PROFESOR CILIK AKIFA!";
    message = "Fantastis! Pemahamanmu sangat tajam dan siap menghadapi asesmen sekolah!";
  } else if (roundedScore >= 60) {
    stars = "⭐⭐";
    titleBadge = "🌟 PENJELAJAH CERDAS AKIFA!";
    message = "Bagus sekali! Sedikit lagi latihan drilling kamu pasti meraih nilai sempurna 100!";
  } else {
    stars = "⭐";
    titleBadge = "💪 PETUALANG GIGIH AKIFA!";
    message = "Usaha yang bagus! Pelajari kembali kisi-kisi materinya dan coba lagi ya!";
  }

  const mins = Math.floor(state.timerSeconds / 60);
  const secs = state.timerSeconds % 60;
  const formattedTime = `${mins} menit ${secs} detik`;

  const main = document.getElementById("mainContent");
  main.innerHTML = `
    <div class="max-w-3xl mx-auto">
      <!-- Hasil Card Utama Tosca -->
      <div class="bg-white rounded-3xl p-6 sm:p-10 text-center shadow-lg border-4 border-teal-500 card-kid mb-8 relative overflow-hidden">
        
        <!-- Stars Rating -->
        <div class="text-4xl sm:text-5xl mb-3 tracking-widest animate-bounce">
          ${stars}
        </div>

        <div class="inline-block px-4 py-1 rounded-full bg-teal-100 text-teal-900 font-black text-xs sm:text-sm uppercase tracking-wider mb-3">
          ${titleBadge}
        </div>

        <h1 class="text-3xl sm:text-4xl font-black text-slate-800 mb-2">
          Nilai Kamu: <span class="text-teal-600">${roundedScore}</span> / 100
        </h1>
        <p class="text-slate-600 text-xs sm:text-sm max-w-lg mx-auto mb-6">
          ${message}
        </p>

        <!-- Stats Grid Tosca -->
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-xl mx-auto mb-8">
          <div class="bg-teal-50 border-2 border-teal-200 rounded-2xl p-3">
            <span class="text-2xl block mb-1">✅</span>
            <div class="text-[11px] text-teal-800 font-bold uppercase">Benar</div>
            <div class="text-lg sm:text-xl font-black text-teal-700">${correctCount} Soal</div>
          </div>
          <div class="bg-rose-50 border-2 border-rose-200 rounded-2xl p-3">
            <span class="text-2xl block mb-1">❌</span>
            <div class="text-[11px] text-rose-800 font-bold uppercase">Salah</div>
            <div class="text-lg sm:text-xl font-black text-rose-700">${wrongCount} Soal</div>
          </div>
          <div class="bg-cyan-50 border-2 border-cyan-200 rounded-2xl p-3">
            <span class="text-2xl block mb-1">⏱️</span>
            <div class="text-[11px] text-cyan-800 font-bold uppercase">Waktu</div>
            <div class="text-sm sm:text-base font-black text-cyan-800">${formattedTime}</div>
          </div>
          <div class="bg-slate-50 border-2 border-slate-200 rounded-2xl p-3">
            <span class="text-2xl block mb-1">📚</span>
            <div class="text-[11px] text-slate-600 font-bold uppercase">Mata Pelajaran</div>
            <div class="text-xs font-black text-slate-800 line-clamp-1">${state.currentSubject.name}</div>
          </div>
        </div>

        <!-- Tombol Aksi Kontras -->
        <div class="flex flex-wrap items-center justify-center gap-3">
          <button 
            onclick="openCertificateView('${titleBadge}', ${roundedScore})" 
            class="px-6 py-3 rounded-2xl font-black text-xs sm:text-sm btn-cta-contrast flex items-center gap-2 shadow-md">
            <span>🎓 Cetak Sertifikat AKIFA</span>
          </button>
          <button 
            onclick="startQuiz('${state.currentSubject.id}', '${state.currentPackage.id}')" 
            class="px-5 py-3 rounded-2xl bg-white hover:bg-teal-50 text-teal-800 font-extrabold text-xs sm:text-sm border-2 border-teal-300 transition flex items-center gap-2">
            <span>🔄 Ulangi Paket Ini</span>
          </button>
          <button 
            onclick="sounds.playClick(); showHomeView()" 
            class="px-5 py-3 rounded-2xl bg-teal-800 hover:bg-teal-900 text-white font-extrabold text-xs sm:text-sm transition flex items-center gap-2">
            <span>🏠 Menu Utama</span>
          </button>
        </div>
      </div>

      <!-- Pembahasan Lengkap Semua Soal -->
      <div class="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border-2 border-teal-100 mb-8">
        <h3 class="text-lg sm:text-xl font-black text-slate-800 mb-4 flex items-center gap-2">
          <span class="text-teal-600">📝</span> Pembahasan Jawaban Lengkap
        </h3>
        
        <div class="space-y-3.5">
          ${state.userAnswers.map((ans, idx) => `
            <div class="p-4 rounded-2xl border-2 ${ans.isCorrect ? 'border-teal-200 bg-teal-50/40' : 'border-rose-200 bg-rose-50/40'}">
              <div class="flex items-start justify-between gap-2 mb-1.5">
                <span class="font-black text-xs sm:text-sm ${ans.isCorrect ? 'text-teal-800' : 'text-rose-800'}">
                  #${idx + 1}. ${ans.isCorrect ? '✅ Jawaban Benar' : '❌ Kurang Tepat'}
                </span>
              </div>
              <p class="font-bold text-slate-800 text-xs sm:text-sm mb-2.5">${ans.questionText}</p>
              
              <div class="text-xs space-y-1 mb-2">
                <div>Jawaban kamu: <strong class="${ans.isCorrect ? 'text-teal-800' : 'text-rose-700'}">${ans.options[ans.selectedIndex]}</strong></div>
                ${!ans.isCorrect ? `<div>Kunci yang tepat: <strong class="text-teal-800">${ans.options[ans.correctIndex]}</strong></div>` : ''}
              </div>

              <div class="text-xs text-slate-600 bg-white p-2.5 rounded-xl border border-slate-200">
                <strong>Pembahasan:</strong> ${ans.explanation}
              </div>
            </div>
          `).join("")}
        </div>
      </div>
    </div>
  `;
}

// ========================================================
// VIEW 6: SERTIFIKAT PRESTASI BELAJAR AKIFA
// ========================================================
function openCertificateView(titleBadge, score) {
  sounds.playClick();
  const currentDate = new Date().toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric"
  });

  const main = document.getElementById("mainContent");
  main.innerHTML = `
    <!-- Top Action in Certificate -->
    <div class="max-w-4xl mx-auto mb-6 flex flex-wrap items-center justify-between gap-3 no-print">
      <button 
        onclick="finishQuiz()" 
        class="px-4 py-2 rounded-2xl bg-white border-2 border-teal-200 text-teal-800 font-bold text-xs sm:text-sm hover:bg-teal-50 transition">
        ⬅️ Kembali ke Hasil Kuis
      </button>

      <div class="flex items-center gap-2">
        <button 
          onclick="window.print()" 
          class="px-6 py-2.5 rounded-2xl font-black text-xs sm:text-sm btn-cta-contrast shadow-md flex items-center gap-2">
          <span>🖨️ Cetak / Simpan PDF</span>
        </button>
      </div>
    </div>

    <!-- Certificate Card Container Tosca Elegan -->
    <div id="certificateArea" class="max-w-4xl mx-auto bg-white rounded-3xl p-8 sm:p-14 shadow-2xl certificate-border text-center text-slate-800">
      
      <!-- Top Logo / Emblem -->
      <div class="flex items-center justify-center gap-3 mb-2">
        <span class="text-5xl">🎯</span>
      </div>
      <h2 class="text-2xl sm:text-3xl font-black tracking-widest text-teal-700 uppercase mb-1">
        Sertifikat Prestasi Belajar AKIFA
      </h2>
      <p class="text-slate-500 font-semibold text-xs sm:text-sm tracking-wider uppercase mb-7">
        Kuis Drilling Asesmen Sumatif Akhir Semester Kurikulum Merdeka
      </p>

      <p class="text-slate-600 text-xs sm:text-sm italic mb-3">Sertifikat ini dengan bangga diberikan kepada:</p>

      <!-- Editable Student Name -->
      <div class="max-w-md mx-auto mb-6">
        <input 
          id="studentNameInput"
          type="text" 
          value="${state.playerName}"
          placeholder="Ketik Nama Lengkap Siswa"
          onchange="updateStudentName(this.value)"
          class="w-full text-center text-2xl sm:text-3xl font-black text-slate-900 border-b-4 border-teal-500 bg-transparent focus:outline-none focus:border-teal-700 pb-1"
        />
        <span class="text-[11px] text-slate-400 no-print block mt-1">(Klik nama di atas untuk mengubah nama siswa)</span>
      </div>

      <p class="text-slate-700 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed mb-8">
        Atas dedikasi, konsentrasi, dan keberhasilannya menyelesaikan paket drilling asesmen 
        <strong class="text-slate-900">${state.currentSubject.name}</strong> (${state.currentPackage.title}) dengan perolehan nilai:
      </p>

      <!-- Score Medallion Tosca -->
      <div class="inline-flex items-center justify-center gap-3 bg-teal-50 border-4 border-teal-500 px-8 py-3 rounded-3xl shadow-sm mb-9">
        <span class="text-3xl">🏅</span>
        <div class="text-left">
          <div class="text-[11px] font-bold text-teal-800 uppercase">Skor Pencapaian</div>
          <div class="text-2xl sm:text-3xl font-black text-teal-700">${score} / 100</div>
        </div>
      </div>

      <!-- Signatures Footer -->
      <div class="grid grid-cols-2 gap-8 max-w-lg mx-auto pt-6 border-t-2 border-slate-200 text-xs">
        <div>
          <div class="text-slate-500 mb-8">Tanggal Pelaksanaan</div>
          <div class="font-bold text-slate-800 border-b border-slate-300 pb-1">${currentDate}</div>
          <div class="text-slate-400 text-[10px] mt-1">Diterbitkan Otomatis</div>
        </div>
        <div>
          <div class="text-slate-500 mb-8">Pendamping Drilling</div>
          <div class="font-black text-teal-700 border-b border-slate-300 pb-1 flex items-center justify-center gap-1">
            <span>🦊 Kiki si Kancil Cerdik</span>
          </div>
          <div class="text-slate-400 text-[10px] mt-1">Kuis Drilling AKIFA</div>
        </div>
      </div>

    </div>
  `;
}

function updateStudentName(name) {
  state.playerName = name || "Siswa Berprestasi";
  localStorage.setItem("akifa_student_name", state.playerName);
}

// ========================================================
// VIEW 7: EDITOR / KELOLA KUIS (GURU & ORTU)
// ========================================================
function showEditorModal() {
  const modalContainer = document.getElementById("modalContainer");
  modalContainer.innerHTML = `
    <div class="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
      <div class="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] flex flex-col shadow-2xl border-4 border-teal-600 overflow-hidden">
        
        <div class="bg-gradient-to-r from-teal-700 to-cyan-600 p-4 sm:p-5 text-white flex items-center justify-between">
          <div class="flex items-center gap-2">
            <span class="text-2xl">✍️</span>
            <div>
              <h3 class="text-lg sm:text-xl font-black">Kelola & Buat Soal Drilling Baru</h3>
              <p class="text-teal-100 text-xs">Untuk guru atau pendamping belajar yang ingin menambahkan paket soal mandiri</p>
            </div>
          </div>
          <button 
            onclick="closeModal()" 
            class="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 text-white font-bold flex items-center justify-center transition">
            ✕
          </button>
        </div>

        <div class="p-5 sm:p-6 overflow-y-auto space-y-4 text-slate-800 bg-slate-50/50">
          <form id="formAddPackage" onsubmit="handleCreateCustomPackage(event)" class="space-y-4">
            
            <div>
              <label class="block text-xs font-black uppercase tracking-wider text-teal-900 mb-1">Pilih Mata Pelajaran:</label>
              <select id="newPkgSubject" class="w-full p-2.5 rounded-xl border-2 border-teal-200 bg-white font-bold text-xs sm:text-sm focus:border-teal-500">
                ${state.subjects.map(s => `<option value="${s.id}">${s.icon} ${s.name}</option>`).join("")}
              </select>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label class="block text-xs font-black uppercase tracking-wider text-teal-900 mb-1">Nama Paket Soal:</label>
                <input type="text" id="newPkgTitle" required placeholder="Contoh: Paket Pengayaan Mandiri" class="w-full p-2.5 rounded-xl border-2 border-teal-200 font-bold text-xs sm:text-sm focus:border-teal-500" />
              </div>
              <div>
                <label class="block text-xs font-black uppercase tracking-wider text-teal-900 mb-1">Sasaran Kelas:</label>
                <input type="text" id="newPkgKelas" required placeholder="Contoh: Kelas 4 SD" class="w-full p-2.5 rounded-xl border-2 border-teal-200 font-bold text-xs sm:text-sm focus:border-teal-500" />
              </div>
            </div>

            <!-- Pertanyaan 1 -->
            <div class="border-2 border-teal-100 rounded-2xl p-4 bg-white space-y-3 shadow-sm">
              <span class="text-xs font-black uppercase text-teal-700">Contoh Butir Soal Pertama:</span>
              <textarea id="newQText" required rows="2" placeholder="Tuliskan teks pertanyaan soal..." class="w-full p-2.5 rounded-xl border-2 border-slate-200 text-xs sm:text-sm focus:border-teal-500"></textarea>

              <div class="grid grid-cols-2 gap-2 text-xs">
                <input type="text" id="newOptA" required placeholder="Pilihan A" class="p-2.5 rounded-lg border border-slate-300" />
                <input type="text" id="newOptB" required placeholder="Pilihan B" class="p-2.5 rounded-lg border border-slate-300" />
                <input type="text" id="newOptC" required placeholder="Pilihan C" class="p-2.5 rounded-lg border border-slate-300" />
                <input type="text" id="newOptD" required placeholder="Pilihan D" class="p-2.5 rounded-lg border border-slate-300" />
              </div>

              <div class="grid grid-cols-2 gap-3 text-xs">
                <div>
                  <label class="block font-bold text-slate-600 mb-1">Kunci Jawaban Benar:</label>
                  <select id="newCorrectOpt" class="w-full p-2 rounded-lg border border-slate-300 font-bold">
                    <option value="0">A</option>
                    <option value="1">B</option>
                    <option value="2">C</option>
                    <option value="3">D</option>
                  </select>
                </div>
                <div>
                  <label class="block font-bold text-slate-600 mb-1">Petunjuk Singkat (Clue):</label>
                  <input type="text" id="newHint" placeholder="Petunjuk pengingat konsep" class="w-full p-2 rounded-lg border border-slate-300" />
                </div>
              </div>

              <div>
                <label class="block text-xs font-bold text-slate-600 mb-1">Penjelasan / Pembahasan:</label>
                <input type="text" id="newExpl" required placeholder="Alasan mengapa jawaban tersebut benar" class="w-full p-2 rounded-lg border border-slate-300 text-xs" />
              </div>
            </div>

            <div class="pt-2 flex justify-between items-center">
              <button 
                type="button" 
                onclick="handleResetToDefault()" 
                class="text-xs text-rose-600 hover:underline font-bold">
                ⚠️ Pulihkan Data Default Bawaan
              </button>
              <button 
                type="submit" 
                class="px-5 py-2.5 rounded-2xl font-black text-xs sm:text-sm btn-cta-contrast shadow-md">
                💾 Simpan Paket Baru
              </button>
            </div>
          </form>
        </div>

      </div>
    </div>
  `;
}

function handleCreateCustomPackage(e) {
  e.preventDefault();
  sounds.playClick();

  const subjId = document.getElementById("newPkgSubject").value;
  const title = document.getElementById("newPkgTitle").value;
  const kelas = document.getElementById("newPkgKelas").value;
  const qText = document.getElementById("newQText").value;
  const optA = document.getElementById("newOptA").value;
  const optB = document.getElementById("newOptB").value;
  const optC = document.getElementById("newOptC").value;
  const optD = document.getElementById("newOptD").value;
  const correct = parseInt(document.getElementById("newCorrectOpt").value, 10);
  const hint = document.getElementById("newHint").value;
  const expl = document.getElementById("newExpl").value;

  const subj = state.subjects.find(s => s.id === subjId);
  if (!subj) return;

  const newPackage = {
    id: `custom-${Date.now()}`,
    title: title,
    difficulty: "Kustom",
    targetKelas: kelas,
    durationMinutes: 10,
    description: `Paket soal kustom buatan guru/pendamping untuk latihan ${title}.`,
    questions: [
      {
        id: 1,
        question: qText,
        options: [optA, optB, optC, optD],
        correctIndex: correct,
        hint: hint || "Ingat kembali materi yang dipelajari!",
        explanation: expl
      }
    ]
  };

  subj.packages.push(newPackage);
  saveStoredSubjects(state.subjects);
  closeModal();
  sounds.playCelebration();
  alert(`Berhasil menambahkan "${title}" ke mata pelajaran ${subj.name}! Paket kini sudah siap dimainkan.`);
  showHomeView();
}

function handleResetToDefault() {
  if (confirm("Apakah kamu yakin ingin mereset semua data kuis ke kondisi awal bawaan?")) {
    localStorage.removeItem("kuis_sd_subjects");
    state.subjects = getStoredSubjects();
    closeModal();
    sounds.playClick();
    alert("Data kuis berhasil dipulihkan ke setelan awal bawaan.");
    showHomeView();
  }
}
