// data.js - Database 8 Mata Pelajaran Kuis Drilling AKIFA (Tema Biru Tosca Elegan)
const defaultSubjectsData = [
  {
    "id": "ppkn",
    "name": "Pendidikan Pancasila & PPKn",
    "shortDesc": "Mengenal Lingkungan, Keberagaman Identitas, Aturan Tempat Tinggal & Aku Anak Disiplin.",
    "icon": "🇮🇩",
    "themeColor": "tosca",
    "gradient": "from-teal-600 via-teal-500 to-cyan-600",
    "bgPattern": "bg-teal-50",
    "badge": "Kelas IV / Semester I",
    "kisiKisi": [
      {
        "no": 1,
        "elemen": "Mengenal Lingkungan",
        "tp": "Murid mampu mengidentifikasi dan membedakan identitas Masyarakat sesuai budaya, suku bangsa, bahasa, agama, dan kepercayaan.",
        "materi": "Keberagaman Identitas",
        "indikator": "Disajikan pertanyaan tentang identitas diri, murid dapat menentukan manfaat identitas diri dengan benar.",
        "level": "L1",
        "bentuk": "Pilihan Ganda"
      },
      {
        "no": 2,
        "elemen": "Mengenal Lingkungan",
        "tp": "Murid mampu mengidentifikasi dan membedakan identitas Masyarakat sesuai budaya, suku bangsa, bahasa, agama, dan kepercayaan.",
        "materi": "Keberagaman Identitas",
        "indikator": "Disajikan beberapa contoh data diri, murid dapat menentukan contoh identitas diri yang tepat dalam kehidupan sehari-hari.",
        "level": "L2",
        "bentuk": "Pilihan Ganda"
      },
      {
        "no": 3,
        "elemen": "Mengenal Lingkungan",
        "tp": "Murid mampu mengidentifikasi dan membedakan identitas Masyarakat sesuai budaya, suku bangsa, bahasa, agama, dan kepercayaan.",
        "materi": "Keberagaman identitas masyarakat (Sosial)",
        "indikator": "Disajikan ilustrasi permasalahan tentang perilaku tidak jujur di lingkungan sekolah, murid dapat menganalisis tindakan yang sesuai dengan nilai budaya Siri' masyarakat Bugis, yaitu menjaga harga diri, kehormatan, dan tanggung jawab.",
        "level": "L3",
        "bentuk": "Pilihan Ganda"
      },
      {
        "no": 4,
        "elemen": "Mengenal Lingkungan",
        "tp": "Murid mampu mengidentifikasi dan membedakan identitas Masyarakat sesuai budaya, suku bangsa, bahasa, agama, dan kepercayaan.",
        "materi": "Keberagaman agama dan kepercayaan",
        "indikator": "Disajikan ilustrasi tentang perbedaan agama di lingkungan sekolah, murid dapat menganalisis tindakan yang tepat dalam menghormati kebebasan memeluk agama dan menjalankan ibadah sesuai Pasal 29 ayat (2) UUD NRI Tahun 1945.",
        "level": "L3",
        "bentuk": "Pilihan Ganda"
      },
      {
        "no": 5,
        "elemen": "Mengenal Lingkungan",
        "tp": "Murid mampu mengaplikasikan sikap positif dalam menghargai perbedaan identitas masyarakat sesuai dengan budaya, suku bangsa, bahasa, agama, dan kepercayaan.",
        "materi": "Menghargai perbedaan identitas masyarakat",
        "indikator": "Disajikan ilustrasi tentang perbedaan pendapat antarteman, murid dapat menentukan sikap lapang dada dalam menghadapi perbedaan pendapat dengan tepat.",
        "level": "L2",
        "bentuk": "Pilihan Ganda"
      },
      {
        "no": 6,
        "elemen": "Mengenal Lingkungan",
        "tp": "Murid mampu mengenal lingkungan tempat tinggal (desa, kelurahan, dan kecamatan) sebagai bagian tidak terpisahkan dari wilayah NKRI.",
        "materi": "Perangkat kecamatan, desa, dan kecamatan",
        "indikator": "Murid dapat mengidentifikasi status camat dalam struktur pemerintahan di Indonesia dengan benar.",
        "level": "L1",
        "bentuk": "Pilihan Ganda"
      },
      {
        "no": 7,
        "elemen": "Mengenal Lingkungan",
        "tp": "Murid mampu mengenal lingkungan tempat tinggal (desa, kelurahan, dan kecamatan) sebagai bagian tidak terpisahkan dari wilayah NKRI.",
        "materi": "Mengenal lingkungan desa dan kelurahan",
        "indikator": "Disajikan ilustrasi kegiatan pelayanan masyarakat di kantor desa, murid dapat menentukan tugas Kepala Seksi (Kasi) Pelayanan dalam pemerintahan desa dengan tepat.",
        "level": "L2",
        "bentuk": "Pilihan Ganda"
      },
      {
        "no": 8,
        "elemen": "Aku anak disiplin",
        "tp": "Murid mampu memahami aturan di tempat tinggal.",
        "materi": "Aturan di lingkungan sekitar",
        "indikator": "Disajikan ilustrasi permasalahan tentang pelaksanaan aturan di rumah, murid dapat menganalisis akibat dan menentukan tindakan yang tepat untuk menunjukkan sikap disiplin dalam kehidupan sehari-hari.",
        "level": "L3",
        "bentuk": "Pilihan Ganda"
      },
      {
        "no": 9,
        "elemen": "Aku anak disiplin",
        "tp": "Murid mampu memahami aturan di tempat tinggal.",
        "materi": "Aturan di lingkungan sekitar",
        "indikator": "Murid dapat mengidentifikasi pengertian aturan tertulis dengan benar.",
        "level": "L1",
        "bentuk": "Pilihan Ganda"
      },
      {
        "no": 10,
        "elemen": "Aku anak disiplin",
        "tp": "Murid mampu mengidentifikasi hak dan kewajiban sebagai warga sekolah.",
        "materi": "Aturan di lingkungan sekolah",
        "indikator": "Disajikan ilustrasi tentang pelanggaran aturan tertulis di lingkungan sekolah, murid dapat menganalisis akibat dan menentukan tindakan yang tepat sesuai aturan yang berlaku.",
        "level": "L3",
        "bentuk": "Pilihan Ganda"
      },
      {
        "no": 11,
        "elemen": "Aku anak disiplin",
        "tp": "Murid mampu memahami aturan di tempat tinggal.",
        "materi": "Aturan di lingkungan masyarakat",
        "indikator": "Disajikan ilustrasi perilaku dalam kehidupan sehari-hari, murid dapat menentukan contoh penerapan norma agama dengan tepat.",
        "level": "L3",
        "bentuk": "Pilihan Ganda"
      },
      {
        "no": 12,
        "elemen": "Aku anak disiplin",
        "tp": "Murid mampu memahami aturan di tempat tinggal.",
        "materi": "Membuat dan melaksanakan aturan",
        "indikator": "Disajikan beberapa ilustrasi permasalahan pada kolom A dan pilihan akibat atau tindakan pada kolom B, murid dapat memasangkan permasalahan dengan akibat atau tindakan yang tepat.",
        "level": "L2",
        "bentuk": "Pilihan Ganda"
      },
      {
        "no": 13,
        "elemen": "Aku anak disiplin",
        "tp": "Murid mampu melaksanakan hak dan kewajiban sebagai warga sekolah.",
        "materi": "Aturan di lingkungan masyarakat",
        "indikator": "Disajikan beberapa ilustrasi permasalahan dalam kehidupan sehari-hari, murid dapat mengidentifikasi dan memasangkan perilaku yang ditunjukkan dengan jenis pelanggaran norma yang tepat.",
        "level": "L3",
        "bentuk": "Pilihan Ganda"
      },
      {
        "no": 14,
        "elemen": "Aku anak disiplin",
        "tp": "Murid mampu melaksanakan hak dan kewajiban sebagai warga sekolah.",
        "materi": "Aturan di lingkungan masyarakat",
        "indikator": "Disajikan beberapa pernyataan tentang aturan dalam kehidupan masyarakat, murid mampu menganalisis kebenaran pernyataan mengenai aturan tertulis dan tidak tertulis serta menentukan kombinasi jawaban yang tepat.",
        "level": "L1",
        "bentuk": "Pilihan Ganda"
      },
      {
        "no": 15,
        "elemen": "Aku anak disiplin",
        "tp": "Murid mampu melaksanakan hak dan kewajiban sebagai warga sekolah.",
        "materi": "Aturan di lingkungan masyarakat",
        "indikator": "Disajikan beberapa pernyataan tentang hak dan kewajiban dalam kehidupan bermasyarakat, murid dapat menentukan kebenaran pernyataan mengenai hak dan kewajiban di masyarakat dengan tepat.",
        "level": "L2",
        "bentuk": "Pilihan Ganda"
      },
      {
        "no": 16,
        "elemen": "Aku anak disiplin",
        "tp": "Murid mampu melaksanakan hak dan kewajiban sebagai warga sekolah.",
        "materi": "Aturan di lingkungan masyarakat",
        "indikator": "Disajikan beberapa pernyataan mengenai tata cara menyampaikan pendapat dalam kehidupan sehari-hari, murid dapat mengidentifikasi perilaku yang tepat dalam menyampaikan pendapat secara santun dan demokratis dengan benar.",
        "level": "L2",
        "bentuk": "Pilihan Ganda"
      },
      {
        "no": 17,
        "elemen": "Aku anak disiplin",
        "tp": "Murid mampu melaksanakan hak dan kewajiban sebagai warga sekolah.",
        "materi": "Aturan di lingkungan masyarakat",
        "indikator": "Disajikan pernyataan tentang kebiasaan mematuhi aturan sejak kecil, murid dapat mengidentifikasi manfaat pembiasaan menaati aturan dalam membentuk karakter dan kepribadian yang baik.",
        "level": "L1",
        "bentuk": "Pilihan Ganda"
      },
      {
        "no": 18,
        "elemen": "Aku anak disiplin",
        "tp": "Murid mampu mengidentifikasi hak dan kewajiban sebagai warga sekolah.",
        "materi": "Aturan di lingkungan masyarakat",
        "indikator": "Disajikan beberapa pernyataan mengenai sumber norma-norma yang berlaku di masyarakat, murid dapat mengidentifikasi sumber-sumber norma agama, kesusilaan, kesopanan, hukum, dan kebiasaan dengan tepat.",
        "level": "L2",
        "bentuk": "Pilihan Ganda"
      },
      {
        "no": 19,
        "elemen": "Aku anak disiplin",
        "tp": "Murid mampu mengidentifikasi hak dan kewajiban sebagai warga sekolah.",
        "materi": "Aturan di lingkungan masyarakat",
        "indikator": "Disajikan ilustrasi tentang pelanggaran norma, murid dapat mengidentifikasi sanksi norma agama yang diterima seseorang akibat tidak melaksanakan kewajibannya dengan tepat.",
        "level": "L3",
        "bentuk": "Pilihan Ganda"
      },
      {
        "no": 20,
        "elemen": "Aku anak disiplin",
        "tp": "Murid mampu mengidentifikasi hak dan kewajiban sebagai warga sekolah.",
        "materi": "Aturan di lingkungan masyarakat",
        "indikator": "Disajikan pertanyaan tentang tujuan penerapan norma, murid dapat menentukan tujuan norma dalam kehidupan bermasyarakat dengan tepat.",
        "level": "L1",
        "bentuk": "Pilihan Ganda"
      }
    ],
    "packages": [
      {
        "id": "ppkn-full",
        "title": "Paket Lengkap ASAS 1 (20 Soal Sesuai Kisi-Kisi)",
        "difficulty": "L1, L2 & L3 (Lengkap)",
        "targetKelas": "Kelas 4 SD",
        "durationMinutes": 30,
        "description": "20 Soal Pilihan Ganda lengkap mencakup Bab Mengenal Lingkungan dan Bab Aku Anak Disiplin.",
        "questions": [
          {
            "id": 1,
            "question": "Setiap orang memiliki identitas diri seperti nama lengkap, tanggal lahir, dan alamat tempat tinggal. Salah satu manfaat utama memiliki identitas diri yang jelas adalah ...",
            "options": [
              "Memudahkan orang lain mengenali diri kita dan mempermudah urusan administrasi",
              "Menunjukkan bahwa kita lebih hebat dibandingkan teman lainnya",
              "Agar kita dapat dibedakan dan dijauhi oleh orang lain",
              "Mendapatkan hadiah khusus dari pihak sekolah"
            ],
            "correctIndex": 0,
            "hint": "Identitas diri berfungsi sebagai tanda pengenal resmi dalam pergaulan dan administrasi.",
            "explanation": "Manfaat identitas diri adalah mempermudah orang lain mengenal kita serta mempermudah berbagai pelayanan administrasi kependudukan dan sekolah."
          },
          {
            "id": 2,
            "question": "Perhatikan data berikut:\n(1) Kartu Identitas Anak (KIA)\n(2) Nomor sepatu kesukaan\n(3) Akta Kelahiran\n(4) Warna baju favorit\nContoh dokumen identitas diri resmi yang tepat dalam kehidupan sehari-hari ditunjukkan oleh nomor ...",
            "options": [
              "(1) dan (2)",
              "(1) dan (3)",
              "(2) dan (4)",
              "(3) dan (4)"
            ],
            "correctIndex": 1,
            "hint": "Pilihlah dokumen resmi negara yang memuat identitas sah anak sejak lahir.",
            "explanation": "KIA dan Akta Kelahiran adalah dokumen resmi identitas diri warga negara yang sah sejak anak-anak."
          },
          {
            "id": 3,
            "question": "Di sekolah, Andi melihat temannya menjatuhkan uang saku di lorong kelas. Saat itu tidak ada orang lain yang melihat. Tindakan Andi yang mencerminkan nilai luhur budaya Bugis 'Siri' (menjaga harga diri, kehormatan, dan kejujuran) adalah ...",
            "options": [
              "Mengambil uang tersebut diam-diam untuk membeli jajan di kantin",
              "Memungut uang tersebut lalu menyerahkannya kepada guru agar dikembalikan kepada pemiliknya",
              "Pura-pura tidak melihat dan membiarkan uang tersebut hilang terinjak",
              "Mengambil uang tersebut lalu membagikannya kepada teman sebangku"
            ],
            "correctIndex": 1,
            "hint": "Budaya Siri' mengajarkan kita untuk menjaga kehormatan diri dengan selalu bersikap jujur dan bertanggung jawab.",
            "explanation": "Nilai Siri' mengedepankan harga diri dan kejujuran, sehingga tindakan yang benar adalah memungut dan mengembalikan uang kepada pemiliknya lewat guru."
          },
          {
            "id": 4,
            "question": "Di kelas 4, Wayan yang beragama Hindu ingin bersembahyang pada hari raya keagamaannya, sedangkan Edo yang beragama Kristen sedang bersiap ibadah minggu. Berdasarkan Pasal 29 ayat (2) UUD NRI 1945 tentang kebebasan beragama, sikap yang tepat adalah ...",
            "options": [
              "Mengharuskan semua siswa mengikuti satu agama yang sama",
              "Saling menghormati dan memberi kesempatan kepada teman untuk beribadah sesuai agamanya",
              "Melarang teman melakukan ibadah saat berada di lingkungan sekolah",
              "Meminta teman berpindah agama agar tercipta keseragaman di kelas"
            ],
            "correctIndex": 1,
            "hint": "Pasal 29 ayat (2) menjamin kemerdekaan tiap warga negara untuk memeluk agamanya dan beribadah menurut agama dan kepercayaannya.",
            "explanation": "Wujud pengamalan Pasal 29 ayat (2) adalah saling menghormati serta memberikan kebebasan dan rasa aman bagi setiap pemeluk agama untuk beribadah."
          },
          {
            "id": 5,
            "question": "Saat kerja kelompok, Doni dan Siti memiliki usulan warna yang berbeda untuk menghias mading kelas. Sikap berlapang dada yang sebaiknya ditunjukkan Doni adalah ...",
            "options": [
              "Marah dan meninggalkan kelompok kerja karena usulannya tidak langsung diterima",
              "Mendengarkan usulan Siti dengan baik dan mencari jalan tengah melalui musyawarah",
              "Memaksa semua anggota memilih pendapatnya sendiri",
              "Mengejek usulan warna yang diajukan oleh Siti"
            ],
            "correctIndex": 1,
            "hint": "Sikap lapang dada artinya terbuka, sabar, dan menghargai pendapat orang lain demi kebaikan bersama.",
            "explanation": "Sikap lapang dada ditunjukkan dengan bersedia mendengarkan pendapat orang lain dan mengutamakan kesepakatan mufakat."
          },
          {
            "id": 6,
            "question": "Dalam struktur pemerintahan wilayah di Indonesia, Camat merupakan pimpinan wilayah kecamatan yang berkedudukan sebagai ...",
            "options": [
              "Pegawai Negeri Sipil (PNS) yang diangkat oleh Bupati/Walikota",
              "Pejabat politik yang dipilih langsung oleh seluruh warga masyarakat",
              "Kepala suku yang dipilih berdasarkan keturunan keluarga",
              "Pengurus organisasi kemasyarakatan swasta"
            ],
            "correctIndex": 0,
            "hint": "Camat memimpin kecamatan dan merupakan aparatur sipil negara yang ditugaskan oleh bupati/walikota.",
            "explanation": "Camat adalah seorang Pegawai Negeri Sipil (PNS) yang diangkat oleh bupati/walikota atas usul sekretaris daerah untuk memimpin kecamatan."
          },
          {
            "id": 7,
            "question": "Pak Budi datang ke kantor desa untuk mengurus surat keterangan tidak mampu (SKTM) guna pendaftaran beasiswa anaknya. Petugas pemerintah desa yang bertugas melayani administrasi kebutuhan masyarakat tersebut adalah ...",
            "options": [
              "Kepala Seksi (Kasi) Pelayanan",
              "Kepala Seksi (Kasi) Kesejahteraan",
              "Kepala Urusan (Kaur) Keuangan",
              "Petugas Ronda Malam"
            ],
            "correctIndex": 0,
            "hint": "Seksi yang khusus menangani surat-menyurat dan pelayanan langsung kepada warga desa.",
            "explanation": "Kepala Seksi (Kasi) Pelayanan bertugas membantu kepala desa dalam melaksanakan penyuluhan, pencatatan sipil, dan pelayanan administrasi umum masyarakat."
          },
          {
            "id": 8,
            "question": "Di rumah Rio terdapat aturan: 'Selesai belajar pukul 20.30, rapikan meja dan segera tidur agar tidak bangun terlambat'. Suatu malam, Rio asyik bermain game di ponsel hingga larut malam. Akibat dari tindakan Rio dan solusi disiplin yang tepat adalah ...",
            "options": [
              "Rio bangun pagi dengan segar dan tidak perlu mengubah kebiasaannya",
              "Rio bangun kesiangan dan terlambat ke sekolah; solusinya Rio harus menaati jadwal tidur yang disepakati",
              "Rio mendapat pujian dari orang tua karena bermain game dengan tekun",
              "Rio diperbolehkan tidak masuk sekolah selamanya"
            ],
            "correctIndex": 1,
            "hint": "Melanggar aturan tidur menyebabkan tubuh lelah dan bangun terlambat.",
            "explanation": "Akibat melanggar aturan waktu tidur adalah bangun kesiangan dan terlambat sekolah. Sikap disiplin mengharuskan Rio mematuhi aturan jam tidur."
          },
          {
            "id": 9,
            "question": "Aturan yang dituangkan secara resmi dalam bentuk naskah tertulis, disahkan oleh pihak yang berwenang, dan memuat sanksi yang tegas dinamakan ...",
            "options": [
              "Aturan tidak tertulis",
              "Aturan tertulis",
              "Norma kesopanan lisan",
              "Kebiasaan turun-temurun"
            ],
            "correctIndex": 1,
            "hint": "Aturan ini tercatat secara hitam di atas putih dan memiliki sanksi resmi.",
            "explanation": "Aturan tertulis adalah aturan yang dibuat dalam bentuk tulisan resmi oleh pejabat/lembaga berwenang, contohnya tata tertib sekolah atau undang-undang."
          },
          {
            "id": 10,
            "question": "Tata tertib sekolah menuliskan: 'Setiap siswa wajib mengenakan seragam pramuka lengkap pada hari Jumat'. Fajar lupa mengenakan topi dan kacu pramuka. Tindakan tepat yang harus dilakukan Fajar sesuai aturan adalah ...",
            "options": [
              "Bersembunyi di toilet saat upacara berlangsung agar tidak terlihat guru",
              "Menerima teguran guru dengan ikhlas dan berjanji menyiapkan seragam lengkap sejak malam sebelumnya",
              "Menyalahkan orang tua karena tidak menyiapkan seragamnya",
              "Pulang ke rumah tanpa izin guru"
            ],
            "correctIndex": 1,
            "hint": "Anak disiplin mengakui kesalahan dan bertanggung jawab memperbaiki perilakunya.",
            "explanation": "Sikap ksatria dan disiplin adalah menerima konsekuensi/teguran dengan sopan serta memperbaiki persiapan di waktu berikutnya."
          },
          {
            "id": 11,
            "question": "Perilaku dalam kehidupan sehari-hari di bawah ini yang merupakan contoh penerapan norma agama secara tepat adalah ...",
            "options": [
              "Mengucapkan kata permisi saat berjalan di depan orang yang lebih tua",
              "Menjalankan ibadah salat atau kebaktian secara khusyuk dan tepat waktu",
              "Mematuhi rambu lalu lintas saat mengendarai sepeda motor",
              "Mengantre dengan rapi di loket pembayaran"
            ],
            "correctIndex": 1,
            "hint": "Norma agama bersumber dari wahyu Tuhan Yang Maha Esa dan berhubungan dengan ibadah serta ketakwaan.",
            "explanation": "Beribadah secara khusyuk dan tepat waktu merupakan pengamalan norma agama yang bersumber dari wahyu Tuhan."
          },
          {
            "id": 12,
            "question": "Perhatikan pasangan permasalahan (Kolom A) dan tindakan/akibat (Kolom B):\n(1) Siswa membuang sampah sembarangan di laci meja -> Lingkungan kelas menjadi kotor dan bau\n(2) Anak patuh merapikan tempat tidur -> Orang tua merasa kecewa\n(3) Warga rutin ronda malam -> Lingkungan desa menjadi aman dari pencurian\nPasangan permasalahan dan akibat/tindakan yang paling tepat adalah ...",
            "options": [
              "(1) dan (2)",
              "(1) dan (3)",
              "(2) dan (3)",
              "(1), (2), dan (3)"
            ],
            "correctIndex": 1,
            "hint": "Perhatikan hubungan sebab-akibat yang logis dan benar.",
            "explanation": "Nomor (1) dan (3) merupakan pasangan sebab-akibat yang benar. Nomor (2) salah karena anak yang rapi membuat orang tua bangga, bukan kecewa."
          },
          {
            "id": 13,
            "question": "Seorang pengendara motor menerobos lampu lalu lintas yang sedang menyala merah di jalan raya. Pengendara tersebut telah melakukan pelanggaran terhadap ...",
            "options": [
              "Norma kesopanan",
              "Norma kesusilaan",
              "Norma hukum",
              "Norma adat kebiasaan"
            ],
            "correctIndex": 2,
            "hint": "Aturan lalu lintas dibuat oleh pemerintah dan diawasi oleh kepolisian.",
            "explanation": "Lampu lalu lintas adalah bagian dari peraturan perundang-undangan negara, sehingga melanggarnya merupakan pelanggaran norma hukum."
          },
          {
            "id": 14,
            "question": "Perhatikan pernyataan tentang aturan di masyarakat berikut:\n(A) Aturan tertulis biasanya memiliki sanksi resmi yang tegas dan mengikat.\n(B) Aturan tidak tertulis berupa adat kebiasaan yang disepakati bersama secara lisan.\nAnalisis yang tepat mengenai kedua pernyataan di atas adalah ...",
            "options": [
              "Pernyataan (A) benar dan pernyataan (B) benar",
              "Pernyataan (A) salah dan pernyataan (B) benar",
              "Pernyataan (A) benar dan pernyataan (B) salah",
              "Kedua pernyataan (A) dan (B) salah"
            ],
            "correctIndex": 0,
            "hint": "Keduanya merupakan karakteristik dasar dari aturan tertulis dan aturan tidak tertulis di masyarakat.",
            "explanation": "Kedua pernyataan benar. Aturan tertulis bersanksi resmi tegas, sedangkan aturan tidak tertulis bersumber dari adat dan tradisi lisan warga."
          },
          {
            "id": 15,
            "question": "Dalam kehidupan bermasyarakat, hubungan antara hak dan kewajiban harus dilaksanakan secara seimbang. Pernyataan yang paling benar tentang hal tersebut adalah ...",
            "options": [
              "Kita boleh menuntut hak kita terus-menerus tanpa perlu melaksanakan kewajiban",
              "Kewajiban harus didahulukan dan dilaksanakan dengan penuh tanggung jawab sebelum menuntut hak",
              "Hak setiap warga negara lebih utama dibandingkan ketertiban umum",
              "Kewajiban hanya berlaku untuk orang dewasa, sedangkan anak-anak hanya memiliki hak"
            ],
            "correctIndex": 1,
            "hint": "Agar tercipta kerukunan dan keadilan, laksanakan kewajiban terlebih dahulu baru menerima hak.",
            "explanation": "Pelaksanaan hak dan kewajiban harus seimbang, dengan mengutamakan pemenuhan kewajiban terlebih dahulu secara bertanggung jawab."
          },
          {
            "id": 16,
            "question": "Dalam rapat pemilihan ketua kelas, perilaku yang tepat dan demokratis dalam menyampaikan usulan pendapat adalah ...",
            "options": [
              "Mengacungkan tangan terlebih dahulu dan berbicara dengan kata-kata yang santun saat dipersilakan",
              "Memotong pembicaraan teman yang sedang menyampaikan pendapat",
              "Berteriak keras-keras agar semua teman takut dan setuju dengan usulannya",
              "Menolak pendapat orang lain secara kasar"
            ],
            "correctIndex": 0,
            "hint": "Musyawarah yang santun mengajarkan antre berbicara dan menggunakan bahasa yang baik.",
            "explanation": "Cara menyampaikan pendapat yang santun dan demokratis adalah mengacungkan tangan, menunggu giliran, dan menyampaikan saran dengan bahasa yang sopan."
          },
          {
            "id": 17,
            "question": "Membiasakan diri bangun pagi tepat waktu, merapikan kasur, dan meletakkan sepatu di rak sejak kecil sangat bermanfaat bagi diri sendiri, yaitu ...",
            "options": [
              "Membentuk karakter disiplin, mandiri, dan bertanggung jawab",
              "Membuat kita menjadi cepat lelah dan tertekan",
              "Menyebabkan teman-teman menjauhi kita",
              "Membuat kita tidak memiliki waktu luang untuk bermain"
            ],
            "correctIndex": 0,
            "hint": "Kebiasaan baik yang dilatih sejak kecil akan membentuk kepribadian mulia di masa depan.",
            "explanation": "Manfaat pembiasaan mematuhi aturan sejak dini adalah membentuk kepribadian yang tertib, mandiri, disiplin, dan bertanggung jawab."
          },
          {
            "id": 18,
            "question": "Norma kesusilaan yang berlaku di masyarakat bersumber dari ...",
            "options": [
              "Wahyu Tuhan Yang Maha Esa",
              "Hati nurani dan bisikan kalbu manusia tentang kebaikan dan keburukan",
              "Peraturan tertulis yang dibuat pejabat negara",
              "Tata pergaulan kelompok masyarakat tertentu"
            ],
            "correctIndex": 1,
            "hint": "Kesusilaan lahir dari lubuk batin terdalam yang membedakan mana yang benar dan salah.",
            "explanation": "Norma kesusilaan bersumber dari hati nurani manusia yang mendorong untuk selalu berbuat baik dan jujur."
          },
          {
            "id": 19,
            "question": "Seseorang yang sengaja berbohong kepada orang tua dan enggan beribadah sesungguhnya melanggar norma agama. Sanksi yang diterima akibat melanggar norma agama adalah ...",
            "options": [
              "Denda uang yang diserahkan ke kantor polisi",
              "Mendapat dosa dari Tuhan dan perasaan bersalah serta penyesalan di batin",
              "Dikeluarkan dari wilayah tempat tinggal oleh ketua RT",
              "Dihukum kurungan penjara selama satu bulan"
            ],
            "correctIndex": 1,
            "hint": "Sanksi norma agama bersifat batiniah dan spiritual dari Tuhan.",
            "explanation": "Sanksi pelanggaran norma agama tidak datang secara langsung secara fisik seketika dari pengadilan, melainkan berupa dosa dan rasa bersalah di hadapan Tuhan."
          },
          {
            "id": 20,
            "question": "Penerapan norma dan aturan dalam kehidupan bermasyarakat pada hakikatnya memiliki tujuan utama, yaitu ...",
            "options": [
              "Membatasi ruang gerak manusia agar tidak bisa berkembang",
              "Menciptakan ketertiban, ketenteraman, keadilan, dan kerukunan bersama",
              "Membuat masyarakat merasa takut kepada para pemimpin",
              "Menghukum sebanyak-banyaknya orang yang bersalah"
            ],
            "correctIndex": 1,
            "hint": "Aturan dibuat agar semua warga dapat hidup aman, damai, dan saling menghormati.",
            "explanation": "Tujuan utama norma adalah mengatur tata kehidupan bersama agar tercipta ketertiban, keamanan, keadilan, dan ketenteraman di masyarakat."
          }
        ]
      },
      {
        "id": "ppkn-1",
        "title": "Bagian 1: Mengenal Lingkungan & Identitas Diri (Soal 1-10)",
        "difficulty": "Sedang",
        "targetKelas": "Kelas 4 SD",
        "durationMinutes": 15,
        "description": "Latihan 10 soal pertama fokus pada identitas diri, keberagaman sosial, dan aturan sekolah.",
        "questions": [
          {
            "id": 1,
            "question": "Setiap orang memiliki identitas diri seperti nama lengkap, tanggal lahir, dan alamat tempat tinggal. Salah satu manfaat utama memiliki identitas diri yang jelas adalah ...",
            "options": [
              "Memudahkan orang lain mengenali diri kita dan mempermudah urusan administrasi",
              "Menunjukkan bahwa kita lebih hebat dibandingkan teman lainnya",
              "Agar kita dapat dibedakan dan dijauhi oleh orang lain",
              "Mendapatkan hadiah khusus dari pihak sekolah"
            ],
            "correctIndex": 0,
            "hint": "Identitas diri berfungsi sebagai tanda pengenal resmi dalam pergaulan dan administrasi.",
            "explanation": "Manfaat identitas diri adalah mempermudah orang lain mengenal kita serta mempermudah berbagai pelayanan administrasi kependudukan dan sekolah."
          },
          {
            "id": 2,
            "question": "Perhatikan data berikut:\n(1) Kartu Identitas Anak (KIA)\n(2) Nomor sepatu kesukaan\n(3) Akta Kelahiran\n(4) Warna baju favorit\nContoh dokumen identitas diri resmi yang tepat dalam kehidupan sehari-hari ditunjukkan oleh nomor ...",
            "options": [
              "(1) dan (2)",
              "(1) dan (3)",
              "(2) dan (4)",
              "(3) dan (4)"
            ],
            "correctIndex": 1,
            "hint": "Pilihlah dokumen resmi negara yang memuat identitas sah anak sejak lahir.",
            "explanation": "KIA dan Akta Kelahiran adalah dokumen resmi identitas diri warga negara yang sah sejak anak-anak."
          },
          {
            "id": 3,
            "question": "Di sekolah, Andi melihat temannya menjatuhkan uang saku di lorong kelas. Saat itu tidak ada orang lain yang melihat. Tindakan Andi yang mencerminkan nilai luhur budaya Bugis 'Siri' (menjaga harga diri, kehormatan, dan kejujuran) adalah ...",
            "options": [
              "Mengambil uang tersebut diam-diam untuk membeli jajan di kantin",
              "Memungut uang tersebut lalu menyerahkannya kepada guru agar dikembalikan kepada pemiliknya",
              "Pura-pura tidak melihat dan membiarkan uang tersebut hilang terinjak",
              "Mengambil uang tersebut lalu membagikannya kepada teman sebangku"
            ],
            "correctIndex": 1,
            "hint": "Budaya Siri' mengajarkan kita untuk menjaga kehormatan diri dengan selalu bersikap jujur dan bertanggung jawab.",
            "explanation": "Nilai Siri' mengedepankan harga diri dan kejujuran, sehingga tindakan yang benar adalah memungut dan mengembalikan uang kepada pemiliknya lewat guru."
          },
          {
            "id": 4,
            "question": "Di kelas 4, Wayan yang beragama Hindu ingin bersembahyang pada hari raya keagamaannya, sedangkan Edo yang beragama Kristen sedang bersiap ibadah minggu. Berdasarkan Pasal 29 ayat (2) UUD NRI 1945 tentang kebebasan beragama, sikap yang tepat adalah ...",
            "options": [
              "Mengharuskan semua siswa mengikuti satu agama yang sama",
              "Saling menghormati dan memberi kesempatan kepada teman untuk beribadah sesuai agamanya",
              "Melarang teman melakukan ibadah saat berada di lingkungan sekolah",
              "Meminta teman berpindah agama agar tercipta keseragaman di kelas"
            ],
            "correctIndex": 1,
            "hint": "Pasal 29 ayat (2) menjamin kemerdekaan tiap warga negara untuk memeluk agamanya dan beribadah menurut agama dan kepercayaannya.",
            "explanation": "Wujud pengamalan Pasal 29 ayat (2) adalah saling menghormati serta memberikan kebebasan dan rasa aman bagi setiap pemeluk agama untuk beribadah."
          },
          {
            "id": 5,
            "question": "Saat kerja kelompok, Doni dan Siti memiliki usulan warna yang berbeda untuk menghias mading kelas. Sikap berlapang dada yang sebaiknya ditunjukkan Doni adalah ...",
            "options": [
              "Marah dan meninggalkan kelompok kerja karena usulannya tidak langsung diterima",
              "Mendengarkan usulan Siti dengan baik dan mencari jalan tengah melalui musyawarah",
              "Memaksa semua anggota memilih pendapatnya sendiri",
              "Mengejek usulan warna yang diajukan oleh Siti"
            ],
            "correctIndex": 1,
            "hint": "Sikap lapang dada artinya terbuka, sabar, dan menghargai pendapat orang lain demi kebaikan bersama.",
            "explanation": "Sikap lapang dada ditunjukkan dengan bersedia mendengarkan pendapat orang lain dan mengutamakan kesepakatan mufakat."
          },
          {
            "id": 6,
            "question": "Dalam struktur pemerintahan wilayah di Indonesia, Camat merupakan pimpinan wilayah kecamatan yang berkedudukan sebagai ...",
            "options": [
              "Pegawai Negeri Sipil (PNS) yang diangkat oleh Bupati/Walikota",
              "Pejabat politik yang dipilih langsung oleh seluruh warga masyarakat",
              "Kepala suku yang dipilih berdasarkan keturunan keluarga",
              "Pengurus organisasi kemasyarakatan swasta"
            ],
            "correctIndex": 0,
            "hint": "Camat memimpin kecamatan dan merupakan aparatur sipil negara yang ditugaskan oleh bupati/walikota.",
            "explanation": "Camat adalah seorang Pegawai Negeri Sipil (PNS) yang diangkat oleh bupati/walikota atas usul sekretaris daerah untuk memimpin kecamatan."
          },
          {
            "id": 7,
            "question": "Pak Budi datang ke kantor desa untuk mengurus surat keterangan tidak mampu (SKTM) guna pendaftaran beasiswa anaknya. Petugas pemerintah desa yang bertugas melayani administrasi kebutuhan masyarakat tersebut adalah ...",
            "options": [
              "Kepala Seksi (Kasi) Pelayanan",
              "Kepala Seksi (Kasi) Kesejahteraan",
              "Kepala Urusan (Kaur) Keuangan",
              "Petugas Ronda Malam"
            ],
            "correctIndex": 0,
            "hint": "Seksi yang khusus menangani surat-menyurat dan pelayanan langsung kepada warga desa.",
            "explanation": "Kepala Seksi (Kasi) Pelayanan bertugas membantu kepala desa dalam melaksanakan penyuluhan, pencatatan sipil, dan pelayanan administrasi umum masyarakat."
          },
          {
            "id": 8,
            "question": "Di rumah Rio terdapat aturan: 'Selesai belajar pukul 20.30, rapikan meja dan segera tidur agar tidak bangun terlambat'. Suatu malam, Rio asyik bermain game di ponsel hingga larut malam. Akibat dari tindakan Rio dan solusi disiplin yang tepat adalah ...",
            "options": [
              "Rio bangun pagi dengan segar dan tidak perlu mengubah kebiasaannya",
              "Rio bangun kesiangan dan terlambat ke sekolah; solusinya Rio harus menaati jadwal tidur yang disepakati",
              "Rio mendapat pujian dari orang tua karena bermain game dengan tekun",
              "Rio diperbolehkan tidak masuk sekolah selamanya"
            ],
            "correctIndex": 1,
            "hint": "Melanggar aturan tidur menyebabkan tubuh lelah dan bangun terlambat.",
            "explanation": "Akibat melanggar aturan waktu tidur adalah bangun kesiangan dan terlambat sekolah. Sikap disiplin mengharuskan Rio mematuhi aturan jam tidur."
          },
          {
            "id": 9,
            "question": "Aturan yang dituangkan secara resmi dalam bentuk naskah tertulis, disahkan oleh pihak yang berwenang, dan memuat sanksi yang tegas dinamakan ...",
            "options": [
              "Aturan tidak tertulis",
              "Aturan tertulis",
              "Norma kesopanan lisan",
              "Kebiasaan turun-temurun"
            ],
            "correctIndex": 1,
            "hint": "Aturan ini tercatat secara hitam di atas putih dan memiliki sanksi resmi.",
            "explanation": "Aturan tertulis adalah aturan yang dibuat dalam bentuk tulisan resmi oleh pejabat/lembaga berwenang, contohnya tata tertib sekolah atau undang-undang."
          },
          {
            "id": 10,
            "question": "Tata tertib sekolah menuliskan: 'Setiap siswa wajib mengenakan seragam pramuka lengkap pada hari Jumat'. Fajar lupa mengenakan topi dan kacu pramuka. Tindakan tepat yang harus dilakukan Fajar sesuai aturan adalah ...",
            "options": [
              "Bersembunyi di toilet saat upacara berlangsung agar tidak terlihat guru",
              "Menerima teguran guru dengan ikhlas dan berjanji menyiapkan seragam lengkap sejak malam sebelumnya",
              "Menyalahkan orang tua karena tidak menyiapkan seragamnya",
              "Pulang ke rumah tanpa izin guru"
            ],
            "correctIndex": 1,
            "hint": "Anak disiplin mengakui kesalahan dan bertanggung jawab memperbaiki perilakunya.",
            "explanation": "Sikap ksatria dan disiplin adalah menerima konsekuensi/teguran dengan sopan serta memperbaiki persiapan di waktu berikutnya."
          }
        ]
      },
      {
        "id": "ppkn-2",
        "title": "Bagian 2: Aturan Masyarakat & Penerapan Norma (Soal 11-20)",
        "difficulty": "Tantangan Kognitif",
        "targetKelas": "Kelas 4 SD",
        "durationMinutes": 15,
        "description": "Latihan 10 soal kedua fokus pada norma agama, hukum, kesusilaan, hak & kewajiban.",
        "questions": [
          {
            "id": 11,
            "question": "Perilaku dalam kehidupan sehari-hari di bawah ini yang merupakan contoh penerapan norma agama secara tepat adalah ...",
            "options": [
              "Mengucapkan kata permisi saat berjalan di depan orang yang lebih tua",
              "Menjalankan ibadah salat atau kebaktian secara khusyuk dan tepat waktu",
              "Mematuhi rambu lalu lintas saat mengendarai sepeda motor",
              "Mengantre dengan rapi di loket pembayaran"
            ],
            "correctIndex": 1,
            "hint": "Norma agama bersumber dari wahyu Tuhan Yang Maha Esa dan berhubungan dengan ibadah serta ketakwaan.",
            "explanation": "Beribadah secara khusyuk dan tepat waktu merupakan pengamalan norma agama yang bersumber dari wahyu Tuhan."
          },
          {
            "id": 12,
            "question": "Perhatikan pasangan permasalahan (Kolom A) dan tindakan/akibat (Kolom B):\n(1) Siswa membuang sampah sembarangan di laci meja -> Lingkungan kelas menjadi kotor dan bau\n(2) Anak patuh merapikan tempat tidur -> Orang tua merasa kecewa\n(3) Warga rutin ronda malam -> Lingkungan desa menjadi aman dari pencurian\nPasangan permasalahan dan akibat/tindakan yang paling tepat adalah ...",
            "options": [
              "(1) dan (2)",
              "(1) dan (3)",
              "(2) dan (3)",
              "(1), (2), dan (3)"
            ],
            "correctIndex": 1,
            "hint": "Perhatikan hubungan sebab-akibat yang logis dan benar.",
            "explanation": "Nomor (1) dan (3) merupakan pasangan sebab-akibat yang benar. Nomor (2) salah karena anak yang rapi membuat orang tua bangga, bukan kecewa."
          },
          {
            "id": 13,
            "question": "Seorang pengendara motor menerobos lampu lalu lintas yang sedang menyala merah di jalan raya. Pengendara tersebut telah melakukan pelanggaran terhadap ...",
            "options": [
              "Norma kesopanan",
              "Norma kesusilaan",
              "Norma hukum",
              "Norma adat kebiasaan"
            ],
            "correctIndex": 2,
            "hint": "Aturan lalu lintas dibuat oleh pemerintah dan diawasi oleh kepolisian.",
            "explanation": "Lampu lalu lintas adalah bagian dari peraturan perundang-undangan negara, sehingga melanggarnya merupakan pelanggaran norma hukum."
          },
          {
            "id": 14,
            "question": "Perhatikan pernyataan tentang aturan di masyarakat berikut:\n(A) Aturan tertulis biasanya memiliki sanksi resmi yang tegas dan mengikat.\n(B) Aturan tidak tertulis berupa adat kebiasaan yang disepakati bersama secara lisan.\nAnalisis yang tepat mengenai kedua pernyataan di atas adalah ...",
            "options": [
              "Pernyataan (A) benar dan pernyataan (B) benar",
              "Pernyataan (A) salah dan pernyataan (B) benar",
              "Pernyataan (A) benar dan pernyataan (B) salah",
              "Kedua pernyataan (A) dan (B) salah"
            ],
            "correctIndex": 0,
            "hint": "Keduanya merupakan karakteristik dasar dari aturan tertulis dan aturan tidak tertulis di masyarakat.",
            "explanation": "Kedua pernyataan benar. Aturan tertulis bersanksi resmi tegas, sedangkan aturan tidak tertulis bersumber dari adat dan tradisi lisan warga."
          },
          {
            "id": 15,
            "question": "Dalam kehidupan bermasyarakat, hubungan antara hak dan kewajiban harus dilaksanakan secara seimbang. Pernyataan yang paling benar tentang hal tersebut adalah ...",
            "options": [
              "Kita boleh menuntut hak kita terus-menerus tanpa perlu melaksanakan kewajiban",
              "Kewajiban harus didahulukan dan dilaksanakan dengan penuh tanggung jawab sebelum menuntut hak",
              "Hak setiap warga negara lebih utama dibandingkan ketertiban umum",
              "Kewajiban hanya berlaku untuk orang dewasa, sedangkan anak-anak hanya memiliki hak"
            ],
            "correctIndex": 1,
            "hint": "Agar tercipta kerukunan dan keadilan, laksanakan kewajiban terlebih dahulu baru menerima hak.",
            "explanation": "Pelaksanaan hak dan kewajiban harus seimbang, dengan mengutamakan pemenuhan kewajiban terlebih dahulu secara bertanggung jawab."
          },
          {
            "id": 16,
            "question": "Dalam rapat pemilihan ketua kelas, perilaku yang tepat dan demokratis dalam menyampaikan usulan pendapat adalah ...",
            "options": [
              "Mengacungkan tangan terlebih dahulu dan berbicara dengan kata-kata yang santun saat dipersilakan",
              "Memotong pembicaraan teman yang sedang menyampaikan pendapat",
              "Berteriak keras-keras agar semua teman takut dan setuju dengan usulannya",
              "Menolak pendapat orang lain secara kasar"
            ],
            "correctIndex": 0,
            "hint": "Musyawarah yang santun mengajarkan antre berbicara dan menggunakan bahasa yang baik.",
            "explanation": "Cara menyampaikan pendapat yang santun dan demokratis adalah mengacungkan tangan, menunggu giliran, dan menyampaikan saran dengan bahasa yang sopan."
          },
          {
            "id": 17,
            "question": "Membiasakan diri bangun pagi tepat waktu, merapikan kasur, dan meletakkan sepatu di rak sejak kecil sangat bermanfaat bagi diri sendiri, yaitu ...",
            "options": [
              "Membentuk karakter disiplin, mandiri, dan bertanggung jawab",
              "Membuat kita menjadi cepat lelah dan tertekan",
              "Menyebabkan teman-teman menjauhi kita",
              "Membuat kita tidak memiliki waktu luang untuk bermain"
            ],
            "correctIndex": 0,
            "hint": "Kebiasaan baik yang dilatih sejak kecil akan membentuk kepribadian mulia di masa depan.",
            "explanation": "Manfaat pembiasaan mematuhi aturan sejak dini adalah membentuk kepribadian yang tertib, mandiri, disiplin, dan bertanggung jawab."
          },
          {
            "id": 18,
            "question": "Norma kesusilaan yang berlaku di masyarakat bersumber dari ...",
            "options": [
              "Wahyu Tuhan Yang Maha Esa",
              "Hati nurani dan bisikan kalbu manusia tentang kebaikan dan keburukan",
              "Peraturan tertulis yang dibuat pejabat negara",
              "Tata pergaulan kelompok masyarakat tertentu"
            ],
            "correctIndex": 1,
            "hint": "Kesusilaan lahir dari lubuk batin terdalam yang membedakan mana yang benar dan salah.",
            "explanation": "Norma kesusilaan bersumber dari hati nurani manusia yang mendorong untuk selalu berbuat baik dan jujur."
          },
          {
            "id": 19,
            "question": "Seseorang yang sengaja berbohong kepada orang tua dan enggan beribadah sesungguhnya melanggar norma agama. Sanksi yang diterima akibat melanggar norma agama adalah ...",
            "options": [
              "Denda uang yang diserahkan ke kantor polisi",
              "Mendapat dosa dari Tuhan dan perasaan bersalah serta penyesalan di batin",
              "Dikeluarkan dari wilayah tempat tinggal oleh ketua RT",
              "Dihukum kurungan penjara selama satu bulan"
            ],
            "correctIndex": 1,
            "hint": "Sanksi norma agama bersifat batiniah dan spiritual dari Tuhan.",
            "explanation": "Sanksi pelanggaran norma agama tidak datang secara langsung secara fisik seketika dari pengadilan, melainkan berupa dosa dan rasa bersalah di hadapan Tuhan."
          },
          {
            "id": 20,
            "question": "Penerapan norma dan aturan dalam kehidupan bermasyarakat pada hakikatnya memiliki tujuan utama, yaitu ...",
            "options": [
              "Membatasi ruang gerak manusia agar tidak bisa berkembang",
              "Menciptakan ketertiban, ketenteraman, keadilan, dan kerukunan bersama",
              "Membuat masyarakat merasa takut kepada para pemimpin",
              "Menghukum sebanyak-banyaknya orang yang bersalah"
            ],
            "correctIndex": 1,
            "hint": "Aturan dibuat agar semua warga dapat hidup aman, damai, dan saling menghormati.",
            "explanation": "Tujuan utama norma adalah mengatur tata kehidupan bersama agar tercipta ketertiban, keamanan, keadilan, dan ketenteraman di masyarakat."
          }
        ]
      }
    ]
  },
  {
    "id": "pai",
    "name": "Pendidikan Agama Islam (PAI)",
    "shortDesc": "Q.S. Al-Ḥujurāt:13, Asmaulhusna (Al-Mālik, Al-‘Azīz, Al-Quddūs, As-Salām), Toleransi, Fikih Balig, & Sejarah Hijrah Nabi.",
    "icon": "🕌",
    "themeColor": "tosca",
    "gradient": "from-teal-700 via-teal-600 to-emerald-600",
    "bgPattern": "bg-teal-50",
    "badge": "Kelas IV / Semester I",
    "kisiKisi": [
      {
        "no": 1,
        "elemen": "Al-Qur’an Hadis",
        "tp": "Membaca Q.S. Al-Ḥujurāt/ 49 :13 dengan tartil",
        "materi": "Bacaan Q.S. Al-Ḥujurāt :13",
        "indikator": "Disajikan penggalan ayat Q.S. Al-Ḥujurāt :13, murid dapat menentukan cara membaca lafal yang bertasydid (gunnah) dengan tepat.",
        "level": "L1",
        "bentuk": "PG"
      },
      {
        "no": 2,
        "elemen": "Al-Qur’an Hadis",
        "tp": "Menulis Q.S. Al-Ḥujurāt :13 dengan baik.",
        "materi": "Teks Q.S. Al-Ḥujurāt :13",
        "indikator": "Disajikan kaidah dasar penulisan huruf hijaiyah, murid dapat menganalisis ketentuan penulisan huruf Al-Qur'an yang benar.",
        "level": "L2",
        "bentuk": "PG"
      },
      {
        "no": 3,
        "elemen": "Al-Qur’an Hadis",
        "tp": "Menghafalkan Q.S. Al-Ḥujurāt :13 dengan lancar",
        "materi": "Teks Q.S. Al-Ḥujurāt :13",
        "indikator": "Disajikan potongan ayat Q.S. Al-Ḥujurāt :13 yang rumpang, murid dapat menentukan kelanjutan ayat dengan tepat.",
        "level": "L2",
        "bentuk": "PG"
      },
      {
        "no": 4,
        "elemen": "Al-Qur’an Hadis",
        "tp": "Mengartikan Q.S. Al-Ḥujurāt :13 dengan benar",
        "materi": "Arti Q.S. Al-Ḥujurāt :13",
        "indikator": "Disajikan tabel lafal dan arti kata Q.S. Al-Ḥujurāt :13, murid dapat menganalisis pasangan lafal dan terjemah yang paling tepat.",
        "level": "L3",
        "bentuk": "PG"
      },
      {
        "no": 5,
        "elemen": "Akidah",
        "tp": "Menjelaskan arti asmaul Ḥusna Al-Malik, Al-‘Aziz, Al-Quddus, As-Salam dan Al-Mu’min dengan benar",
        "materi": "Asmaul Ḥusna Al-Malik",
        "indikator": "Disajikan pernyataan tentang kekuasaan mutlak Allah terhadap alam semesta, murid dapat menentukan nama Asmaulhusna yang sesuai.",
        "level": "L1",
        "bentuk": "PG"
      },
      {
        "no": 6,
        "elemen": "Akidah",
        "tp": "Menunjukkan sikap keteladanan dari asmaul Ḥusna Al-Malik, Al-‘Aziz, Al-Quddus, As-Salam dan Al-Mu’min",
        "materi": "Asmaul Ḥusna Al-‘Aziz",
        "indikator": "Disajikan ilustrasi perilaku murid dalam kehidupan sekolah, murid dapat menganalisis perilaku mandiri sebagai cerminan Asmaulhusna Al-‘Azīz.",
        "level": "L3",
        "bentuk": "PG"
      },
      {
        "no": 7,
        "elemen": "Akidah",
        "tp": "Mengidentifikasi ayat yang berkaitan dengan Asmaul Ḥusna Al-Quddus",
        "materi": "Asmaul Ḥusna Al-Quddus",
        "indikator": "Disajikan deskripsi tentang kesucian hati dan jasmani, murid dapat mengevaluasi tindakan yang sesuai dengan peneladanan Al-Quddūs.",
        "level": "L3",
        "bentuk": "PG"
      },
      {
        "no": 8,
        "elemen": "Akidah",
        "tp": "Menampilkan sikap yang mencerminkan pengamalan As-Salām",
        "materi": "Asmaul Ḥusna As-Salām",
        "indikator": "Disajikan studi kasus pertengkaran antarsiswa, murid dapat memecahkan masalah dengan menerapkan nilai As-Salām.",
        "level": "L3",
        "bentuk": "PG"
      },
      {
        "no": 9,
        "elemen": "Akhlak",
        "tp": "Mendeskripsikan keragaman sebagai sunnatullah agar saling mengenal",
        "materi": "Keragaman adalah Sunnatullah",
        "indikator": "Disajikan pernyataan tentang keberagaman suku di Indonesia, murid dapat menganalisis tujuan Allah menciptakan keragaman sesuai Q.S. Al-Ḥujurāt: 13.",
        "level": "L2",
        "bentuk": "PG"
      },
      {
        "no": 10,
        "elemen": "Akhlak",
        "tp": "Menyebutkan ajaran kebaikan dari agama Islam dengan tepat",
        "materi": "Ajaran kebaikan dalam Islam",
        "indikator": "Disajikan hadis Nabi saw. tentang kebaikan (al-birru husnul khuluq), murid dapat menentukan makna kebaikan hakiki dalam Islam.",
        "level": "L2",
        "bentuk": "PG"
      },
      {
        "no": 11,
        "elemen": "Akhlak",
        "tp": "Mengungkapkan perasaaan mengenai pergaulan beda agama",
        "materi": "Pengertian toleransi dan wujudnya",
        "indikator": "Disajikan narasi interaksi antarsesama yang berbeda agama di sekolah, murid dapat menyimpulkan bentuk toleransi yang tepat.",
        "level": "L3",
        "bentuk": "PG"
      },
      {
        "no": 12,
        "elemen": "Akhlak",
        "tp": "Menunjukkan sikap toleransi dan batasannya",
        "materi": "Toleransi dan batasannya",
        "indikator": "Disajikan ayat penutup Q.S. Al-Kāfirūn/109:6, murid dapat menganalisis batasan toleransi dalam ajaran Islam.",
        "level": "L3",
        "bentuk": "PG"
      },
      {
        "no": 13,
        "elemen": "Fikih",
        "tp": "Menjelaskan pengertian balig atau kedewasaan dengan benar",
        "materi": "Pengertian balig menurut ilmu Fikih",
        "indikator": "Disajikan konsep balig, murid dapat menentukan istilah seseorang yang sudah terkena beban syariat.",
        "level": "L1",
        "bentuk": "PG"
      },
      {
        "no": 14,
        "elemen": "Fikih",
        "tp": "Membedakan tanda-tanda balig bagi laki-laki dan perempuan",
        "materi": "Tanda-tanda usia balig menurut ilmu Fikih",
        "indikator": "Disajikan tabel tanda-tanda balig menurut fikih, murid dapat memilih tanda yang khusus dialami perempuan.",
        "level": "L2",
        "bentuk": "PG"
      },
      {
        "no": 15,
        "elemen": "Fikih",
        "tp": "Menjelaskan ketentuan bersuci bagi yang berhadas besar",
        "materi": "Kewajiban mandi wajib",
        "indikator": "Disajikan langkah-langkah bersuci, murid dapat menganalisis urutan rukun/tata cara mandi wajib yang sah.",
        "level": "L2",
        "bentuk": "PG"
      },
      {
        "no": 16,
        "elemen": "Fikih",
        "tp": "Mengidentifikasi hal-hal yang dilarang ketika junub",
        "materi": "Tanda balig & larangan berhadas besar",
        "indikator": "Disajikan daftar amalan ibadah, murid dapat menganalisis amalan yang dilarang bagi orang yang berhadas besar.",
        "level": "L3",
        "bentuk": "PG"
      },
      {
        "no": 17,
        "elemen": "Sejarah Peradaban Islam",
        "tp": "Menjelaskan sebab-sebab Nabi Muhammad Saw. hijrah ke Madinah",
        "materi": "Sebab-sebab hijrah Nabi Muhammad Saw.",
        "indikator": "Disajikan beberapa faktor sejarah dakwah Makkah, murid dapat menganalisis penyebab utama hijrah Nabi ke Yaṡrib.",
        "level": "L3",
        "bentuk": "PG"
      },
      {
        "no": 18,
        "elemen": "Sejarah Peradaban Islam",
        "tp": "Menceritakan kisah peristiwa hijrah Nabi Muhammad Saw.",
        "materi": "Kisah perjalanan hijrah Nabi Muhammad Saw.",
        "indikator": "Disajikan kisah pengepungan rumah Nabi saw. oleh pemuda Quraisy, murid dapat mengidentifikasi sosok sahabat yang berani menggantikan di tempat tidur beliau.",
        "level": "L1",
        "bentuk": "PG"
      },
      {
        "no": 19,
        "elemen": "Sejarah Peradaban Islam",
        "tp": "Menyimpulkan pelajaran di balik hijrah Nabi Muhammad Saw.",
        "materi": "Hikmah Hijrah Nabi Muhammad Saw.",
        "indikator": "Disajikan peristiwa persembunyian Nabi saw. dan Abu Bakar di Gua Ṡūr, murid dapat menyimpulkan perpaduan ikhtiar dan tawakal.",
        "level": "L3",
        "bentuk": "PG"
      },
      {
        "no": 20,
        "elemen": "Sejarah Peradaban Islam",
        "tp": "Menjelaskan sebab-sebab Nabi Muhammad Saw. hijrah ke Madinah",
        "materi": "Sebab-sebab hijrah Nabi Muhammad Saw.",
        "indikator": "Disajikan pernyataan tentang peristiwa Baiat ‘Aqabah, murid dapat menganalisis peran penduduk Madinah dalam peristiwa tersebut.",
        "level": "L2",
        "bentuk": "PG"
      }
    ],
    "packages": [
      {
        "id": "pai-full",
        "title": "Paket Lengkap ASAS 1 (20 Soal Sesuai Kisi-Kisi)",
        "difficulty": "L1, L2 & L3 (Lengkap)",
        "targetKelas": "Kelas 4 SD",
        "durationMinutes": 30,
        "description": "20 Soal Pilihan Ganda lengkap mencakup Elemen Al-Qur'an Hadis, Akidah Asmaulhusna, Akhlak Toleransi, Fikih Balig, dan SPI Hijrah Nabi.",
        "questions": [
          {
            "id": 1,
            "question": "Perhatikan penggalan ayat berikut: 'يَا أَيُّهَا النَّاسُ إِنَّا خَلَقْنَاكُم' (Yā ayyuhan-nāsu innā khalaqnākum).\nPada lafal 'إِنَّا' (innā) dan 'النَّاسُ' (an-nāsu) terdapat huruf bertasydid yaitu nun bertasydid (gunnah). Cara membaca hukum gunnah yang tepat adalah ...",
            "options": [
              "Dibaca memantul dengan jelas",
              "Dibaca mendengung dan ditahan selama 2 harakat",
              "Dibaca cepat dan samar-samar",
              "Dibaca tanpa suara sama sekali"
            ],
            "correctIndex": 1,
            "hint": "Gunnah artinya mendengung, dibaca dengan menahan suara di pangkal hidung selama 2 harakat.",
            "explanation": "Hukum bacaan gunnah (nun atau mim bertasydid) wajib dibaca dengan mendengung dan ditahan sekitar 2 harakat."
          },
          {
            "id": 2,
            "question": "Dalam kaidah penulisan ayat Al-Qur'an dan huruf hijaiyah, pernyataan yang paling tepat mengenai ketentuan penulisan huruf hijaiyah adalah ...",
            "options": [
              "Huruf hijaiyah ditulis dari arah kiri ke kanan",
              "Semua huruf hijaiyah dapat disambung dengan huruf sebelum dan sesudahnya tanpa terkecuali",
              "Huruf hijaiyah ditulis dari arah kanan ke kiri, dan ada huruf yang hanya bisa menyambung tetapi tidak bisa disambung setelahnya (seperti alif, dal, dzal, ra, zai, wau)",
              "Huruf hijaiyah tidak boleh memiliki tanda harakat"
            ],
            "correctIndex": 2,
            "hint": "Tulisan Arab ditulis dari kanan ke kiri, dan ada 6 huruf pemutus sambungan (ا, د, ذ, ر, ز, و).",
            "explanation": "Penulisan huruf hijaiyah dimulai dari kanan ke kiri. Huruf seperti ا, د, ذ, ر, ز, و hanya bisa disambung dengan huruf sebelumnya, tidak bisa menyambung huruf sesudahnya."
          },
          {
            "id": 3,
            "question": "Perhatikan potongan Q.S. Al-Ḥujurāt :13 berikut:\n'يَا أَيُّهَا النَّاسُ إِنَّا خَلَقْنَاكُم مِّن ذَكَرٍ وَأُنثَىٰ وَجَعَلْنَاكُمْ ... لِتَعَارَفُوا'\nLafal yang tepat untuk melengkapi bagian rumpang di atas adalah ...",
            "options": [
              "شُعُوبًا وَقَبَائِلَ (syu'ūbaw wa qabā'ila)",
              "إِنَّ أَكْرَمَكُمْ (inna akramakum)",
              "عِنْدَ اللّٰهِ أَتْقَاكُمْ (indallāhi atqākum)",
              "عَلِيمٌ خَبِيرٌ ('alīmun khabīr)"
            ],
            "correctIndex": 0,
            "hint": "Allah menciptakan manusia berbangsa-bangsa (syu'uba) dan bersuku-suku (qaba'ila) agar saling mengenal.",
            "explanation": "Lafal lanjutan yang benar adalah 'شُعُوبًا وَقَبَائِلَ' (syu'ūbaw wa qabā'ila) yang bermakna berbangsa-bangsa dan bersuku-suku."
          },
          {
            "id": 4,
            "question": "Perhatikan tabel lafal dan arti kata Q.S. Al-Ḥujurāt :13 berikut:\n(1) لِتَعَارَفُوا  -> Agar kamu saling mengenal\n(2) شُعُوبًا -> Bersuku-suku\n(3) أَتْقَاكُمْ -> Yang paling bertakwa di antara kamu\nPasangan lafal dan arti kata yang paling tepat ditunjukkan oleh nomor ...",
            "options": [
              "(1) dan (2)",
              "(1) dan (3)",
              "(2) dan (3)",
              "(1), (2), dan (3)"
            ],
            "correctIndex": 1,
            "hint": "Lita'arafu = agar saling mengenal, atqakum = yang paling bertakwa. Sedangkan syu'uban artinya berbangsa-bangsa.",
            "explanation": "Nomor (1) dan (3) benar. Nomor (2) keliru karena 'syu'uban' artinya berbangsa-bangsa, sedangkan bersuku-suku adalah 'qaba'ila'."
          },
          {
            "id": 5,
            "question": "Allah Swt. adalah Penguasa mutlak seluruh alam semesta, langit, bumi beserta segala isinya tanpa membutuhkan bantuan siapa pun. Hal ini menunjukkan bahwa Allah memiliki Asmaulhusna ...",
            "options": [
              "Al-Quddūs",
              "Al-Mālik",
              "As-Salām",
              "Al-Mu'min"
            ],
            "correctIndex": 1,
            "hint": "Al-Malik artinya Yang Maha Merajai atau Menguasai seluruh alam semesta.",
            "explanation": "Al-Mālik artinya Maha Merajai / Maha Menguasai, yaitu Penguasa mutlak seluruh makhluk dan alam semesta."
          },
          {
            "id": 6,
            "question": "Ahmad adalah siswa kelas 4 yang mandiri, tidak mudah putus asa, dan selalu berusaha menyelesaikan tugas piketnya sendiri dengan gigih tanpa bergantung pada orang lain. Perilaku Ahmad mencerminkan keteladanan Asmaulhusna ...",
            "options": [
              "Al-‘Azīz (Maha Perkasa / Maha Mulia)",
              "Al-Quddūs (Maha Suci)",
              "As-Salām (Maha Sejahtera)",
              "Al-Mu’min (Maha Memberi Keamanan)"
            ],
            "correctIndex": 0,
            "hint": "Al-'Aziz mengajarkan kemandirian, pantang menyerah, dan menjaga kemuliaan diri.",
            "explanation": "Meneladani Asmaulhusna Al-‘Azīz dapat diwujudkan dengan sikap mandiri, teguh pendirian, berjiwa ksatria, dan pantang menyerah."
          },
          {
            "id": 7,
            "question": "Asmaulhusna Al-Quddūs memiliki arti bahwa Allah Swt. Maha Suci dari segala bentuk kekurangan dan cela. Tindakan yang paling tepat dalam meneladani Asmaulhusna Al-Quddūs dalam kehidupan sehari-hari adalah ...",
            "options": [
              "Menyombongkan kepandaian kepada teman di kelas",
              "Menjaga kesucian jasmani dengan berwudhu serta membersihkan hati dari sifat dengki dan iri",
              "Menuntut orang lain untuk selalu melayani kita",
              "Mencari-cari kesalahan teman sebangku"
            ],
            "correctIndex": 1,
            "hint": "Al-Quddus berkaitan dengan kesucian batin (hati) dan kebersihan lahiriah.",
            "explanation": "Meneladani Al-Quddūs dilakukan dengan menjaga kebersihan badan, pakaian, dan tempat, serta menyucikan hati dari penyakit iri, dengki, dan sombong."
          },
          {
            "id": 8,
            "question": "Di halaman sekolah terjadi perselisihan antara Dani dan Rian karena salah paham saat bermain bola. Sebagai teman yang mengamalkan Asmaulhusna As-Salām (Maha Pemberi Kesejahteraan dan Kedamaian), tindakan terbaik yang harus dilakukan adalah ...",
            "options": [
              "Menyoraki dan menyuruh mereka saling membalas pukulan",
              "Membela teman yang lebih akrab dan menyalahkan yang lain",
              "Melerai mereka dengan bijak, mendamaikan perselisihan, dan mengajak mereka saling memaafkan",
              "Merekam kejadian tersebut untuk disebarkan"
            ],
            "correctIndex": 2,
            "hint": "As-Salam mengajarkan kita untuk menjadi penebar kedamaian dan kerukunan bagi sesama.",
            "explanation": "As-Salām bermakna Maha Pemberi Keselamatan dan Kedamaian. Mengamalkannya berarti mendamaikan perselisihan dan menciptakan suasana rukun."
          },
          {
            "id": 9,
            "question": "Indonesia memiliki ratusan suku bangsa dengan bahasa daerah dan adat istiadat yang beraneka ragam. Menurut Q.S. Al-Ḥujurāt: 13, tujuan utama Allah Swt. menciptakan keberagaman tersebut adalah ...",
            "options": [
              "Agar manusia saling bersaing dan membanggakan sukunya sendiri",
              "Agar satu suku menguasai suku lainnya yang lebih kecil",
              "Agar manusia saling mengenal (li ta'ārafū), saling memahami, dan bekerja sama",
              "Agar manusia saling terpecah belah"
            ],
            "correctIndex": 2,
            "hint": "Tujuan 'li ta'arafu' adalah agar saling mengenal dan bertoleransi.",
            "explanation": "Allah menciptakan manusia bersuku-suku dan berbangsa-bangsa agar 'li ta'ārafū' (saling mengenal, saling menghormati, dan tolong-menolong)."
          },
          {
            "id": 10,
            "question": "Rasulullah saw. bersabda dalam sebuah hadis riwayat Muslim: 'Al-birru husnul khuluq' (Kebaikan itu adalah akhlak yang mulia). Berdasarkan hadis tersebut, makna kebaikan hakiki dalam Islam adalah ...",
            "options": [
              "Kekayaan harta yang melimpah ruah",
              "Perilaku budi pekerti yang luhur, santun, dan bermanfaat bagi sesama",
              "Kemenangan dalam mendebat pendapat orang lain",
              "Pangkat jabatan yang tinggi di masyarakat"
            ],
            "correctIndex": 1,
            "hint": "Husnul khuluq berarti budi pekerti atau akhlak yang terpuji.",
            "explanation": "Nabi saw. menegaskan bahwa hakikat kebaikan sejati adalah memiliki akhlak yang mulia (husnul khuluq) dalam perkataan dan perbuatan."
          },
          {
            "id": 11,
            "question": "Di sekolah terdapat teman yang berbeda agama. Saat teman tersebut hendak beribadah, sikap toleransi yang tepat dan sejalan dengan ajaran Islam adalah ...",
            "options": [
              "Ikut melaksanakan tata cara ibadahnya",
              "Menghormati dan memberikan kesempatan serta rasa aman baginya untuk beribadah sesuai keyakinannya",
              "Melarangnya beribadah di lingkungan sekolah",
              "Mengajaknya berdebat tentang ajaran agamanya"
            ],
            "correctIndex": 1,
            "hint": "Toleransi dalam Islam adalah menghargai dan memberi ruang tanpa mencampuri keyakinan ibadah.",
            "explanation": "Bentuk toleransi yang benar adalah saling menghargai dan memberi kebebasan beribadah tanpa mengganggu atau memaksakan kehendak."
          },
          {
            "id": 12,
            "question": "Perhatikan firman Allah dalam Q.S. Al-Kāfirūn: 6: 'لَكُمْ دِينُكُمْ وَلِيَ دِينِ' (Lakum dīnukum wa liya dīn). Ayat ini menegaskan batasan penting toleransi dalam Islam, yaitu ...",
            "options": [
              "Boleh mencampuradukkan tata cara ibadah antardua agama yang berbeda",
              "Boleh bekerja sama dalam urusan sosial kemanusiaan, namun tidak ada kompromi dalam masalah akidah dan ibadah",
              "Umat Islam tidak boleh bergaul dengan orang yang berbeda agama sama sekali",
              "Semua agama memiliki tata cara ibadah yang persis sama"
            ],
            "correctIndex": 1,
            "hint": "'Untukmu agamamu, dan untukku agamaku' menegaskan keteguhan akidah masing-masing.",
            "explanation": "Prinsip 'Lakum dīnukum wa liya dīn' mengajarkan bahwa toleransi berlaku dalam urusan sosial, namun dalam hal akidah dan ibadah tidak boleh dicampuradukkan."
          },
          {
            "id": 13,
            "question": "Dalam ilmu Fikih, seseorang yang telah mencapai usia balig, berakal sehat, dan telah sampai dakwah Islam kepadanya dinamakan 'Mukalaf'. Pengertian mukalaf adalah ...",
            "options": [
              "Orang yang bebas dari segala aturan hukum syariat",
              "Orang yang sudah dibebani kewajiban menjalankan syariat Islam (seperti salat dan puasa)",
              "Anak kecil yang belum memahami halal dan haram",
              "Orang yang sedang bepergian jauh"
            ],
            "correctIndex": 1,
            "hint": "Mukalaf berasal dari kata taklif yang artinya beban tanggung jawab hukum syariat.",
            "explanation": "Mukalaf adalah orang yang sudah balig dan berakal sehingga wajib mempertanggungjawabkan perbuatannya dan melaksanakan syariat Islam."
          },
          {
            "id": 14,
            "question": "Perhatikan beberapa tanda usia balig menurut ilmu Fikih berikut:\n(1) Mengalami mimpi basah (ihtilam)\n(2) Mengalami menstruasi / haid\n(3) Telah mencapai usia 15 tahun penanggalan Hijriyah\nTanda usia balig yang khusus hanya dialami oleh perempuan ditunjukkan oleh nomor ...",
            "options": [
              "(1)",
              "(2)",
              "(3)",
              "(1) dan (3)"
            ],
            "correctIndex": 1,
            "hint": "Haid (menstruasi) adalah tanda biologis yang khusus terjadi pada anak perempuan.",
            "explanation": "Menstruasi (haid) adalah tanda balig yang khusus dialami oleh perempuan, biasanya dimulai sejak usia 9 tahun ke atas."
          },
          {
            "id": 15,
            "question": "Setelah mengalami hadas besar (seperti haid atau ihtilam), seorang muslim wajib bersuci dengan mandi wajib. Urutan rukun mandi wajib yang paling mendasar agar sah adalah ...",
            "options": [
              "Membaca doa makan lalu mengguyur kaki",
              "Niat mandi wajib bersamaan membasuh air pertama, membersihkan najis, dan meratakan air ke seluruh tubuh dari ujung rambut hingga kaki",
              "Cukup berwudhu seperti hendak salat tanpa membasahi rambut",
              "Menyemprotkan minyak wangi ke badan tanpa menggunakan air"
            ],
            "correctIndex": 1,
            "hint": "Rukun mandi wajib meliputi niat dan meratakan air ke seluruh permukaan tubuh.",
            "explanation": "Rukun mandi wajib terdiri dari niat menghilangkan hadas besar dan mengalirkan air ke seluruh anggota tubuh dari ujung kepala sampai ujung kaki."
          },
          {
            "id": 16,
            "question": "Seseorang yang sedang berada dalam keadaan berhadas besar (junub) dilarang melakukan beberapa amalan ibadah tertentu hingga ia bersuci. Amalan ibadah yang dilarang bagi orang yang berhadas besar adalah ...",
            "options": [
              "Melaksanakan salat, tawaf, dan menyentuh mushaf Al-Qur'an",
              "Mendengarkan ceramah dan berbuat baik kepada tetangga",
              "Membayar zakat dan bersedekah uang kepada fakir miskin",
              "Belajar matematika dan membaca buku pengetahuan"
            ],
            "correctIndex": 0,
            "hint": "Orang yang berhadas besar tidak boleh salat, tawaf, maupun memegang mushaf Al-Qur'an.",
            "explanation": "Larangan saat berhadas besar meliputi salat, sujud tilawah/syukur, tawaf di Ka'bah, memegang mushaf Al-Qur'an, dan berdiam diri di masjid."
          },
          {
            "id": 17,
            "question": "Faktor penyebab utama yang mendorong Nabi Muhammad saw. dan para sahabat melakukan hijrah dari kota Makkah ke kota Madinah (Yasrib) adalah ...",
            "options": [
              "Ingin berdagang kurma dalam jumlah yang lebih besar di Madinah",
              "Adanya perintah dari Allah Swt. serta meningkatnya ancaman kekejaman dan rencana pembunuhan oleh kaum kafir Quraisy",
              "Kekurangan bahan makanan di kota Makkah",
              "Keinginan mencari pemandangan alam yang lebih subur"
            ],
            "correctIndex": 1,
            "hint": "Hijrah dilakukan atas wahyu perintah Allah dan demi keselamatan dakwah dari kekejaman kafir Quraisy.",
            "explanation": "Sebab utama hijrah adalah perintah Allah Swt., ancaman boikot dan pembunuhan oleh kafir Quraisy, serta adanya jaminan perlindungan dari warga Yasrib."
          },
          {
            "id": 18,
            "question": "Pada malam ketika rumah Nabi Muhammad saw. dikepung oleh para pemuda kaum Quraisy bersenjata pedang terhunus, ada seorang sahabat yang dengan penuh keberanian dan keikhlasan menggantikan posisi Nabi tidur di ranjang beliau. Sahabat tersebut adalah ...",
            "options": [
              "Abu Bakar As-Siddiq r.a.",
              "Ali bin Abi Thalib r.a.",
              "Utsman bin Affan r.a.",
              "Umar bin Khattab r.a."
            ],
            "correctIndex": 1,
            "hint": "Sepupu Nabi sekaligus sahabat muda yang sangat pemberani.",
            "explanation": "Ali bin Abi Thalib r.a. dengan gagah berani tidur berselimut hijau di ranjang Nabi untuk mengelabui kepungan pemuda Quraisy."
          },
          {
            "id": 19,
            "question": "Ketika dalam perjalanan hijrah, Nabi Muhammad saw. dan Abu Bakar As-Siddiq bersembunyi di dalam Gua Sur selama tiga malam untuk menghindari kejaran kaum Quraisy. Pelajaran dan hikmah terbesar dari peristiwa tersebut adalah ...",
            "options": [
              "Kita harus selalu berputus asa jika menghadapi kesulitan",
              "Perpaduan antara ikhtiar (usaha maksimal dengan strategi rapi) dan tawakal (berserah diri sepenuhnya kepada pertolongan Allah)",
              "Nabi saw. tidak memiliki rasa takut sama sekali sehingga tidak perlu bersembunyi",
              "Gua adalah tempat terbaik untuk tinggal selamanya"
            ],
            "correctIndex": 1,
            "hint": "Nabi menyusun rencana yang matang (ikhtiar) dan yakin Allah bersama mereka (tawakal).",
            "explanation": "Kisah Gua Sur mengajarkan bahwa seorang mukmin wajib berikhtiar semaksimal mungkin, kemudian bertawakal memohon pertolongan Allah Swt."
          },
          {
            "id": 20,
            "question": "Peristiwa perjanjian Baiat ‘Aqabah (Baiat ‘Aqabah I dan II) memiliki peran sangat penting dalam sejarah hijrah Nabi saw., yaitu ...",
            "options": [
              "Penduduk Madinah berjanji setia memeluk Islam serta siap melindungi dan membela Nabi Muhammad saw. layaknya keluarga mereka sendiri",
              "Penduduk Makkah meminta maaf kepada kaum muslimin",
              "Kaum kafir Quraisy menyerahkan kota Makkah kepada Nabi saw.",
              "Penduduk Madinah menolak kedatangan kaum muslimin dari Makkah"
            ],
            "correctIndex": 0,
            "hint": "Baiat 'Aqabah adalah ikrar kesetiaan dan jaminan perlindungan penduduk Madinah bagi dakwah Nabi.",
            "explanation": "Melalui Baiat 'Aqabah, penduduk Madinah berikrar setia memeluk Islam dan berjanji melindungi Nabi saw. sehingga Madinah siap menjadi pusat peradaban Islam."
          }
        ]
      },
      {
        "id": "pai-1",
        "title": "Bagian 1: Al-Qur'an, Tajwid & Asmaulhusna (No. 1-10)",
        "difficulty": "Standar",
        "targetKelas": "Kelas 4 SD",
        "durationMinutes": 15,
        "description": "Latihan 10 soal pertama fokus pada Q.S. Al-Hujurat:13, hukum gunnah, penulisan hijaiyah, dan pengamalan 5 Asmaulhusna.",
        "questions": [
          {
            "id": 1,
            "question": "Perhatikan penggalan ayat berikut: 'يَا أَيُّهَا النَّاسُ إِنَّا خَلَقْنَاكُم' (Yā ayyuhan-nāsu innā khalaqnākum).\nPada lafal 'إِنَّا' (innā) dan 'النَّاسُ' (an-nāsu) terdapat huruf bertasydid yaitu nun bertasydid (gunnah). Cara membaca hukum gunnah yang tepat adalah ...",
            "options": [
              "Dibaca memantul dengan jelas",
              "Dibaca mendengung dan ditahan selama 2 harakat",
              "Dibaca cepat dan samar-samar",
              "Dibaca tanpa suara sama sekali"
            ],
            "correctIndex": 1,
            "hint": "Gunnah artinya mendengung, dibaca dengan menahan suara di pangkal hidung selama 2 harakat.",
            "explanation": "Hukum bacaan gunnah (nun atau mim bertasydid) wajib dibaca dengan mendengung dan ditahan sekitar 2 harakat."
          },
          {
            "id": 2,
            "question": "Dalam kaidah penulisan ayat Al-Qur'an dan huruf hijaiyah, pernyataan yang paling tepat mengenai ketentuan penulisan huruf hijaiyah adalah ...",
            "options": [
              "Huruf hijaiyah ditulis dari arah kiri ke kanan",
              "Semua huruf hijaiyah dapat disambung dengan huruf sebelum dan sesudahnya tanpa terkecuali",
              "Huruf hijaiyah ditulis dari arah kanan ke kiri, dan ada huruf yang hanya bisa menyambung tetapi tidak bisa disambung setelahnya (seperti alif, dal, dzal, ra, zai, wau)",
              "Huruf hijaiyah tidak boleh memiliki tanda harakat"
            ],
            "correctIndex": 2,
            "hint": "Tulisan Arab ditulis dari kanan ke kiri, dan ada 6 huruf pemutus sambungan (ا, د, ذ, ر, ز, و).",
            "explanation": "Penulisan huruf hijaiyah dimulai dari kanan ke kiri. Huruf seperti ا, د, ذ, ر, ز, و hanya bisa disambung dengan huruf sebelumnya, tidak bisa menyambung huruf sesudahnya."
          },
          {
            "id": 3,
            "question": "Perhatikan potongan Q.S. Al-Ḥujurāt :13 berikut:\n'يَا أَيُّهَا النَّاسُ إِنَّا خَلَقْنَاكُم مِّن ذَكَرٍ وَأُنثَىٰ وَجَعَلْنَاكُمْ ... لِتَعَارَفُوا'\nLafal yang tepat untuk melengkapi bagian rumpang di atas adalah ...",
            "options": [
              "شُعُوبًا وَقَبَائِلَ (syu'ūbaw wa qabā'ila)",
              "إِنَّ أَكْرَمَكُمْ (inna akramakum)",
              "عِنْدَ اللّٰهِ أَتْقَاكُمْ (indallāhi atqākum)",
              "عَلِيمٌ خَبِيرٌ ('alīmun khabīr)"
            ],
            "correctIndex": 0,
            "hint": "Allah menciptakan manusia berbangsa-bangsa (syu'uba) dan bersuku-suku (qaba'ila) agar saling mengenal.",
            "explanation": "Lafal lanjutan yang benar adalah 'شُعُوبًا وَقَبَائِلَ' (syu'ūbaw wa qabā'ila) yang bermakna berbangsa-bangsa dan bersuku-suku."
          },
          {
            "id": 4,
            "question": "Perhatikan tabel lafal dan arti kata Q.S. Al-Ḥujurāt :13 berikut:\n(1) لِتَعَارَفُوا  -> Agar kamu saling mengenal\n(2) شُعُوبًا -> Bersuku-suku\n(3) أَتْقَاكُمْ -> Yang paling bertakwa di antara kamu\nPasangan lafal dan arti kata yang paling tepat ditunjukkan oleh nomor ...",
            "options": [
              "(1) dan (2)",
              "(1) dan (3)",
              "(2) dan (3)",
              "(1), (2), dan (3)"
            ],
            "correctIndex": 1,
            "hint": "Lita'arafu = agar saling mengenal, atqakum = yang paling bertakwa. Sedangkan syu'uban artinya berbangsa-bangsa.",
            "explanation": "Nomor (1) dan (3) benar. Nomor (2) keliru karena 'syu'uban' artinya berbangsa-bangsa, sedangkan bersuku-suku adalah 'qaba'ila'."
          },
          {
            "id": 5,
            "question": "Allah Swt. adalah Penguasa mutlak seluruh alam semesta, langit, bumi beserta segala isinya tanpa membutuhkan bantuan siapa pun. Hal ini menunjukkan bahwa Allah memiliki Asmaulhusna ...",
            "options": [
              "Al-Quddūs",
              "Al-Mālik",
              "As-Salām",
              "Al-Mu'min"
            ],
            "correctIndex": 1,
            "hint": "Al-Malik artinya Yang Maha Merajai atau Menguasai seluruh alam semesta.",
            "explanation": "Al-Mālik artinya Maha Merajai / Maha Menguasai, yaitu Penguasa mutlak seluruh makhluk dan alam semesta."
          },
          {
            "id": 6,
            "question": "Ahmad adalah siswa kelas 4 yang mandiri, tidak mudah putus asa, dan selalu berusaha menyelesaikan tugas piketnya sendiri dengan gigih tanpa bergantung pada orang lain. Perilaku Ahmad mencerminkan keteladanan Asmaulhusna ...",
            "options": [
              "Al-‘Azīz (Maha Perkasa / Maha Mulia)",
              "Al-Quddūs (Maha Suci)",
              "As-Salām (Maha Sejahtera)",
              "Al-Mu’min (Maha Memberi Keamanan)"
            ],
            "correctIndex": 0,
            "hint": "Al-'Aziz mengajarkan kemandirian, pantang menyerah, dan menjaga kemuliaan diri.",
            "explanation": "Meneladani Asmaulhusna Al-‘Azīz dapat diwujudkan dengan sikap mandiri, teguh pendirian, berjiwa ksatria, dan pantang menyerah."
          },
          {
            "id": 7,
            "question": "Asmaulhusna Al-Quddūs memiliki arti bahwa Allah Swt. Maha Suci dari segala bentuk kekurangan dan cela. Tindakan yang paling tepat dalam meneladani Asmaulhusna Al-Quddūs dalam kehidupan sehari-hari adalah ...",
            "options": [
              "Menyombongkan kepandaian kepada teman di kelas",
              "Menjaga kesucian jasmani dengan berwudhu serta membersihkan hati dari sifat dengki dan iri",
              "Menuntut orang lain untuk selalu melayani kita",
              "Mencari-cari kesalahan teman sebangku"
            ],
            "correctIndex": 1,
            "hint": "Al-Quddus berkaitan dengan kesucian batin (hati) dan kebersihan lahiriah.",
            "explanation": "Meneladani Al-Quddūs dilakukan dengan menjaga kebersihan badan, pakaian, dan tempat, serta menyucikan hati dari penyakit iri, dengki, dan sombong."
          },
          {
            "id": 8,
            "question": "Di halaman sekolah terjadi perselisihan antara Dani dan Rian karena salah paham saat bermain bola. Sebagai teman yang mengamalkan Asmaulhusna As-Salām (Maha Pemberi Kesejahteraan dan Kedamaian), tindakan terbaik yang harus dilakukan adalah ...",
            "options": [
              "Menyoraki dan menyuruh mereka saling membalas pukulan",
              "Membela teman yang lebih akrab dan menyalahkan yang lain",
              "Melerai mereka dengan bijak, mendamaikan perselisihan, dan mengajak mereka saling memaafkan",
              "Merekam kejadian tersebut untuk disebarkan"
            ],
            "correctIndex": 2,
            "hint": "As-Salam mengajarkan kita untuk menjadi penebar kedamaian dan kerukunan bagi sesama.",
            "explanation": "As-Salām bermakna Maha Pemberi Keselamatan dan Kedamaian. Mengamalkannya berarti mendamaikan perselisihan dan menciptakan suasana rukun."
          },
          {
            "id": 9,
            "question": "Indonesia memiliki ratusan suku bangsa dengan bahasa daerah dan adat istiadat yang beraneka ragam. Menurut Q.S. Al-Ḥujurāt: 13, tujuan utama Allah Swt. menciptakan keberagaman tersebut adalah ...",
            "options": [
              "Agar manusia saling bersaing dan membanggakan sukunya sendiri",
              "Agar satu suku menguasai suku lainnya yang lebih kecil",
              "Agar manusia saling mengenal (li ta'ārafū), saling memahami, dan bekerja sama",
              "Agar manusia saling terpecah belah"
            ],
            "correctIndex": 2,
            "hint": "Tujuan 'li ta'arafu' adalah agar saling mengenal dan bertoleransi.",
            "explanation": "Allah menciptakan manusia bersuku-suku dan berbangsa-bangsa agar 'li ta'ārafū' (saling mengenal, saling menghormati, dan tolong-menolong)."
          },
          {
            "id": 10,
            "question": "Rasulullah saw. bersabda dalam sebuah hadis riwayat Muslim: 'Al-birru husnul khuluq' (Kebaikan itu adalah akhlak yang mulia). Berdasarkan hadis tersebut, makna kebaikan hakiki dalam Islam adalah ...",
            "options": [
              "Kekayaan harta yang melimpah ruah",
              "Perilaku budi pekerti yang luhur, santun, dan bermanfaat bagi sesama",
              "Kemenangan dalam mendebat pendapat orang lain",
              "Pangkat jabatan yang tinggi di masyarakat"
            ],
            "correctIndex": 1,
            "hint": "Husnul khuluq berarti budi pekerti atau akhlak yang terpuji.",
            "explanation": "Nabi saw. menegaskan bahwa hakikat kebaikan sejati adalah memiliki akhlak yang mulia (husnul khuluq) dalam perkataan dan perbuatan."
          }
        ]
      },
      {
        "id": "pai-2",
        "title": "Bagian 2: Toleransi, Fikih Balig & Hijrah Nabi (No. 11-20)",
        "difficulty": "Pemahaman & Analisis",
        "targetKelas": "Kelas 4 SD",
        "durationMinutes": 15,
        "description": "Latihan 10 soal kedua fokus pada batasan toleransi, tanda balig, rukun mandi wajib, larangan junub, dan sejarah hijrah Nabi ke Madinah.",
        "questions": [
          {
            "id": 11,
            "question": "Di sekolah terdapat teman yang berbeda agama. Saat teman tersebut hendak beribadah, sikap toleransi yang tepat dan sejalan dengan ajaran Islam adalah ...",
            "options": [
              "Ikut melaksanakan tata cara ibadahnya",
              "Menghormati dan memberikan kesempatan serta rasa aman baginya untuk beribadah sesuai keyakinannya",
              "Melarangnya beribadah di lingkungan sekolah",
              "Mengajaknya berdebat tentang ajaran agamanya"
            ],
            "correctIndex": 1,
            "hint": "Toleransi dalam Islam adalah menghargai dan memberi ruang tanpa mencampuri keyakinan ibadah.",
            "explanation": "Bentuk toleransi yang benar adalah saling menghargai dan memberi kebebasan beribadah tanpa mengganggu atau memaksakan kehendak."
          },
          {
            "id": 12,
            "question": "Perhatikan firman Allah dalam Q.S. Al-Kāfirūn: 6: 'لَكُمْ دِينُكُمْ وَلِيَ دِينِ' (Lakum dīnukum wa liya dīn). Ayat ini menegaskan batasan penting toleransi dalam Islam, yaitu ...",
            "options": [
              "Boleh mencampuradukkan tata cara ibadah antardua agama yang berbeda",
              "Boleh bekerja sama dalam urusan sosial kemanusiaan, namun tidak ada kompromi dalam masalah akidah dan ibadah",
              "Umat Islam tidak boleh bergaul dengan orang yang berbeda agama sama sekali",
              "Semua agama memiliki tata cara ibadah yang persis sama"
            ],
            "correctIndex": 1,
            "hint": "'Untukmu agamamu, dan untukku agamaku' menegaskan keteguhan akidah masing-masing.",
            "explanation": "Prinsip 'Lakum dīnukum wa liya dīn' mengajarkan bahwa toleransi berlaku dalam urusan sosial, namun dalam hal akidah dan ibadah tidak boleh dicampuradukkan."
          },
          {
            "id": 13,
            "question": "Dalam ilmu Fikih, seseorang yang telah mencapai usia balig, berakal sehat, dan telah sampai dakwah Islam kepadanya dinamakan 'Mukalaf'. Pengertian mukalaf adalah ...",
            "options": [
              "Orang yang bebas dari segala aturan hukum syariat",
              "Orang yang sudah dibebani kewajiban menjalankan syariat Islam (seperti salat dan puasa)",
              "Anak kecil yang belum memahami halal dan haram",
              "Orang yang sedang bepergian jauh"
            ],
            "correctIndex": 1,
            "hint": "Mukalaf berasal dari kata taklif yang artinya beban tanggung jawab hukum syariat.",
            "explanation": "Mukalaf adalah orang yang sudah balig dan berakal sehingga wajib mempertanggungjawabkan perbuatannya dan melaksanakan syariat Islam."
          },
          {
            "id": 14,
            "question": "Perhatikan beberapa tanda usia balig menurut ilmu Fikih berikut:\n(1) Mengalami mimpi basah (ihtilam)\n(2) Mengalami menstruasi / haid\n(3) Telah mencapai usia 15 tahun penanggalan Hijriyah\nTanda usia balig yang khusus hanya dialami oleh perempuan ditunjukkan oleh nomor ...",
            "options": [
              "(1)",
              "(2)",
              "(3)",
              "(1) dan (3)"
            ],
            "correctIndex": 1,
            "hint": "Haid (menstruasi) adalah tanda biologis yang khusus terjadi pada anak perempuan.",
            "explanation": "Menstruasi (haid) adalah tanda balig yang khusus dialami oleh perempuan, biasanya dimulai sejak usia 9 tahun ke atas."
          },
          {
            "id": 15,
            "question": "Setelah mengalami hadas besar (seperti haid atau ihtilam), seorang muslim wajib bersuci dengan mandi wajib. Urutan rukun mandi wajib yang paling mendasar agar sah adalah ...",
            "options": [
              "Membaca doa makan lalu mengguyur kaki",
              "Niat mandi wajib bersamaan membasuh air pertama, membersihkan najis, dan meratakan air ke seluruh tubuh dari ujung rambut hingga kaki",
              "Cukup berwudhu seperti hendak salat tanpa membasahi rambut",
              "Menyemprotkan minyak wangi ke badan tanpa menggunakan air"
            ],
            "correctIndex": 1,
            "hint": "Rukun mandi wajib meliputi niat dan meratakan air ke seluruh permukaan tubuh.",
            "explanation": "Rukun mandi wajib terdiri dari niat menghilangkan hadas besar dan mengalirkan air ke seluruh anggota tubuh dari ujung kepala sampai ujung kaki."
          },
          {
            "id": 16,
            "question": "Seseorang yang sedang berada dalam keadaan berhadas besar (junub) dilarang melakukan beberapa amalan ibadah tertentu hingga ia bersuci. Amalan ibadah yang dilarang bagi orang yang berhadas besar adalah ...",
            "options": [
              "Melaksanakan salat, tawaf, dan menyentuh mushaf Al-Qur'an",
              "Mendengarkan ceramah dan berbuat baik kepada tetangga",
              "Membayar zakat dan bersedekah uang kepada fakir miskin",
              "Belajar matematika dan membaca buku pengetahuan"
            ],
            "correctIndex": 0,
            "hint": "Orang yang berhadas besar tidak boleh salat, tawaf, maupun memegang mushaf Al-Qur'an.",
            "explanation": "Larangan saat berhadas besar meliputi salat, sujud tilawah/syukur, tawaf di Ka'bah, memegang mushaf Al-Qur'an, dan berdiam diri di masjid."
          },
          {
            "id": 17,
            "question": "Faktor penyebab utama yang mendorong Nabi Muhammad saw. dan para sahabat melakukan hijrah dari kota Makkah ke kota Madinah (Yasrib) adalah ...",
            "options": [
              "Ingin berdagang kurma dalam jumlah yang lebih besar di Madinah",
              "Adanya perintah dari Allah Swt. serta meningkatnya ancaman kekejaman dan rencana pembunuhan oleh kaum kafir Quraisy",
              "Kekurangan bahan makanan di kota Makkah",
              "Keinginan mencari pemandangan alam yang lebih subur"
            ],
            "correctIndex": 1,
            "hint": "Hijrah dilakukan atas wahyu perintah Allah dan demi keselamatan dakwah dari kekejaman kafir Quraisy.",
            "explanation": "Sebab utama hijrah adalah perintah Allah Swt., ancaman boikot dan pembunuhan oleh kafir Quraisy, serta adanya jaminan perlindungan dari warga Yasrib."
          },
          {
            "id": 18,
            "question": "Pada malam ketika rumah Nabi Muhammad saw. dikepung oleh para pemuda kaum Quraisy bersenjata pedang terhunus, ada seorang sahabat yang dengan penuh keberanian dan keikhlasan menggantikan posisi Nabi tidur di ranjang beliau. Sahabat tersebut adalah ...",
            "options": [
              "Abu Bakar As-Siddiq r.a.",
              "Ali bin Abi Thalib r.a.",
              "Utsman bin Affan r.a.",
              "Umar bin Khattab r.a."
            ],
            "correctIndex": 1,
            "hint": "Sepupu Nabi sekaligus sahabat muda yang sangat pemberani.",
            "explanation": "Ali bin Abi Thalib r.a. dengan gagah berani tidur berselimut hijau di ranjang Nabi untuk mengelabui kepungan pemuda Quraisy."
          },
          {
            "id": 19,
            "question": "Ketika dalam perjalanan hijrah, Nabi Muhammad saw. dan Abu Bakar As-Siddiq bersembunyi di dalam Gua Sur selama tiga malam untuk menghindari kejaran kaum Quraisy. Pelajaran dan hikmah terbesar dari peristiwa tersebut adalah ...",
            "options": [
              "Kita harus selalu berputus asa jika menghadapi kesulitan",
              "Perpaduan antara ikhtiar (usaha maksimal dengan strategi rapi) dan tawakal (berserah diri sepenuhnya kepada pertolongan Allah)",
              "Nabi saw. tidak memiliki rasa takut sama sekali sehingga tidak perlu bersembunyi",
              "Gua adalah tempat terbaik untuk tinggal selamanya"
            ],
            "correctIndex": 1,
            "hint": "Nabi menyusun rencana yang matang (ikhtiar) dan yakin Allah bersama mereka (tawakal).",
            "explanation": "Kisah Gua Sur mengajarkan bahwa seorang mukmin wajib berikhtiar semaksimal mungkin, kemudian bertawakal memohon pertolongan Allah Swt."
          },
          {
            "id": 20,
            "question": "Peristiwa perjanjian Baiat ‘Aqabah (Baiat ‘Aqabah I dan II) memiliki peran sangat penting dalam sejarah hijrah Nabi saw., yaitu ...",
            "options": [
              "Penduduk Madinah berjanji setia memeluk Islam serta siap melindungi dan membela Nabi Muhammad saw. layaknya keluarga mereka sendiri",
              "Penduduk Makkah meminta maaf kepada kaum muslimin",
              "Kaum kafir Quraisy menyerahkan kota Makkah kepada Nabi saw.",
              "Penduduk Madinah menolak kedatangan kaum muslimin dari Makkah"
            ],
            "correctIndex": 0,
            "hint": "Baiat 'Aqabah adalah ikrar kesetiaan dan jaminan perlindungan penduduk Madinah bagi dakwah Nabi.",
            "explanation": "Melalui Baiat 'Aqabah, penduduk Madinah berikrar setia memeluk Islam dan berjanji melindungi Nabi saw. sehingga Madinah siap menjadi pusat peradaban Islam."
          }
        ]
      }
    ]
  },
  {
    "id": "bahasa_inggris",
    "name": "Bahasa Inggris (English)",
    "shortDesc": "Present participle, Numbers 50-100, Prepositions & Rooms, Simple Present Tense, Things in the Room.",
    "icon": "🇬🇧",
    "themeColor": "tosca",
    "gradient": "from-cyan-600 via-teal-600 to-teal-700",
    "bgPattern": "bg-teal-50",
    "badge": "Kelas 4 / Semester 1",
    "kisiKisi": [
      {
        "no": 1,
        "elemen": "Menulis",
        "tp": "Mengekspresikan aktivitas sehari-hari dan membuat kalimat dengan verb ing.",
        "materi": "Present participle",
        "indikator": "Disajikan gambar/deskripsi, siswa mampu mengidentifikasi aktivitas di dapur dengan benar.",
        "level": "L1",
        "bentuk": "PG"
      },
      {
        "no": 2,
        "elemen": "Menulis",
        "tp": "Mengekspresikan aktivitas sehari-hari dan membuat kalimat dengan verb ing.",
        "materi": "Present participle",
        "indikator": "Disajikan kalimat rumpang, siswa mampu melengkapi berdasarkan aktivitas di perpustakaan sekolah dengan benar.",
        "level": "L2",
        "bentuk": "PG"
      },
      {
        "no": 3,
        "elemen": "Menulis",
        "tp": "Mengekspresikan aktivitas sehari-hari dan membuat kalimat dengan verb ing.",
        "materi": "Present participle",
        "indikator": "Disajikan percakapan, siswa mampu membuat pertanyaan tentang aktivitas yang dilakukan dengan benar.",
        "level": "L2",
        "bentuk": "PG"
      },
      {
        "no": 4,
        "elemen": "Menulis",
        "tp": "Mengekspresikan aktivitas sehari-hari dan membuat kalimat dengan verb ing.",
        "materi": "Present participle",
        "indikator": "Disajikan kata acak, siswa mampu menyusun menjadi sebuah kalimat dengan benar.",
        "level": "L3",
        "bentuk": "PG"
      },
      {
        "no": 5,
        "elemen": "Menulis",
        "tp": "Mengidentifikasi angka 50-100 dalam Bahasa Inggris",
        "materi": "Numbers",
        "indikator": "Disajikan angka, siswa mampu mengidentifikasi angka setelahnya dalam bentuk huruf dengan benar.",
        "level": "L1",
        "bentuk": "PG"
      },
      {
        "no": 6,
        "elemen": "Menulis",
        "tp": "Mengidentifikasi angka 50-100 dalam Bahasa Inggris",
        "materi": "Numbers",
        "indikator": "Disajikan gambar/angka, siswa mampu menentukan angka yang tertulis dengan benar.",
        "level": "L2",
        "bentuk": "PG"
      },
      {
        "no": 7,
        "elemen": "Menulis",
        "tp": "Mengidentifikasi angka 50-100 dalam Bahasa Inggris",
        "materi": "Numbers",
        "indikator": "Disajikan ilustrasi stok barang di toko, siswa mampu menentukan jumlah barang tertentu dengan benar.",
        "level": "L2",
        "bentuk": "PG"
      },
      {
        "no": 8,
        "elemen": "Menulis",
        "tp": "Mengidentifikasi angka 50-100 dalam Bahasa Inggris",
        "materi": "Numbers",
        "indikator": "Disajikan percakapan, siswa mampu menyusun operasi hitung dengan benar.",
        "level": "L3",
        "bentuk": "PG"
      },
      {
        "no": 9,
        "elemen": "Menulis",
        "tp": "Mengidentifikasi preposisi dalam konteks ruangan-ruangan yang ada di dalam rumah.",
        "materi": "Preposition & Rooms",
        "indikator": "Disajikan pernyataan, siswa mampu menyebutkan ruangan dalam rumah sesuai aktivitas dengan benar.",
        "level": "L1",
        "bentuk": "PG"
      },
      {
        "no": 10,
        "elemen": "Menulis",
        "tp": "Mengidentifikasi preposisi dalam konteks ruangan-ruangan yang ada di dalam rumah.",
        "materi": "Preposition",
        "indikator": "Disajikan kalimat, siswa mampu menerjemahkan dalam Bahasa Inggris dengan benar.",
        "level": "L2",
        "bentuk": "PG"
      },
      {
        "no": 11,
        "elemen": "Menulis",
        "tp": "Mengidentifikasi preposisi dalam konteks ruangan-ruangan yang ada di dalam rumah.",
        "materi": "Preposition",
        "indikator": "Disajikan gambar dan tabel posisi, siswa mampu menentukan posisi ruangan dalam rumah dengan benar.",
        "level": "L2",
        "bentuk": "PGK Kategori"
      },
      {
        "no": 12,
        "elemen": "Menulis",
        "tp": "Mengidentifikasi preposisi dalam konteks ruangan-ruangan yang ada di dalam rumah.",
        "materi": "Preposition",
        "indikator": "Disajikan kalimat, siswa mampu menyimpulkan kondisi rumah dalam Bahasa Indonesia dengan benar.",
        "level": "L3",
        "bentuk": "PG"
      },
      {
        "no": 13,
        "elemen": "Menulis",
        "tp": "Merespon pertanyaan tentang kegiatan sehari-hari di rumah beserta waktu pelaksanaannya.",
        "materi": "Simple present tense",
        "indikator": "Disajikan teks bacaan, siswa mampu mengaitkan pertanyaan dengan teks bacaan dengan benar.",
        "level": "L2",
        "bentuk": "PG"
      },
      {
        "no": 14,
        "elemen": "Menulis",
        "tp": "Merespon pertanyaan tentang kegiatan sehari-hari di rumah beserta waktu pelaksanaannya.",
        "materi": "Simple present tense",
        "indikator": "Disajikan teks bacaan lanjutan, siswa mampu mengaitkan waktu kegiatan sehari-hari dengan benar.",
        "level": "L2",
        "bentuk": "PG"
      },
      {
        "no": 15,
        "elemen": "Menulis",
        "tp": "Merespon pertanyaan tentang kegiatan sehari-hari di rumah beserta waktu pelaksanaannya.",
        "materi": "Simple present tense",
        "indikator": "Disajikan percakapan, siswa mampu menentukan penggunaan do/does dengan benar.",
        "level": "L2",
        "bentuk": "PG"
      },
      {
        "no": 16,
        "elemen": "Menulis",
        "tp": "Merespon pertanyaan tentang kegiatan sehari-hari di rumah beserta waktu pelaksanaannya.",
        "materi": "Simple present tense",
        "indikator": "Disajikan pernyataan, siswa mampu menyimpulkan kalimat yang termasuk simple present tense dengan benar.",
        "level": "L3",
        "bentuk": "PGK MCMA"
      },
      {
        "no": 17,
        "elemen": "Menulis",
        "tp": "Menyebutkan benda-benda di dalam ruangan",
        "materi": "Things in the room",
        "indikator": "Disajikan beberapa nama benda, siswa mampu menentukan bagian rumah dengan benar.",
        "level": "L2",
        "bentuk": "PG"
      },
      {
        "no": 18,
        "elemen": "Menulis",
        "tp": "Menyebutkan benda-benda di dalam ruangan",
        "materi": "Things in the room",
        "indikator": "Disajikan beberapa pernyataan, siswa mampu menentukan kegunaan benda di rumah dengan benar.",
        "level": "L2",
        "bentuk": "PGK Kategori"
      },
      {
        "no": 19,
        "elemen": "Menulis",
        "tp": "Menyebutkan benda-benda di dalam ruangan",
        "materi": "Things in the room",
        "indikator": "Disajikan sebuah gambar/deskripsi, siswa mampu menentukan nama benda sesuai gambar dengan benar.",
        "level": "L2",
        "bentuk": "PG"
      },
      {
        "no": 20,
        "elemen": "Menulis",
        "tp": "Menyebutkan benda-benda di dalam ruangan",
        "materi": "Things in the room",
        "indikator": "Disajikan tabel, siswa mampu menyimpulkan fungsi benda di rumah dengan benar.",
        "level": "L3",
        "bentuk": "PGK MCMA"
      }
    ],
    "packages": [
      {
        "id": "eng-full",
        "title": "Paket Lengkap ASAS 1 (20 Soal Sesuai Kisi-Kisi)",
        "difficulty": "L1, L2 & L3 (Lengkap)",
        "targetKelas": "Kelas 4 SD",
        "durationMinutes": 30,
        "description": "20 Soal Pilihan Ganda mencakup Present Participle, Numbers 50-100, Prepositions, Rooms, dan Simple Present.",
        "questions": [
          {
            "id": 1,
            "question": "Look at the situation: 'Mother is in the kitchen with a frying pan and vegetables.' What is mother doing right now?",
            "options": [
              "She is sleeping in the bed",
              "She is cooking delicious soup",
              "She is washing her bicycle",
              "She is reading a comic book"
            ],
            "correctIndex": 1,
            "hint": "Activities in the kitchen using a frying pan usually relate to preparing food.",
            "explanation": "'She is cooking delicious soup' is the right present continuous activity for the kitchen."
          },
          {
            "id": 2,
            "question": "Complete the sentence based on library activity:\n'Joshua and Made are in the school library. They are ... storybooks quietly.'",
            "options": [
              "playing football",
              "eating snacks",
              "reading",
              "swimming"
            ],
            "correctIndex": 2,
            "hint": "The common activity in the library is reading books quietly.",
            "explanation": "In the library, students are reading books ('They are reading storybooks quietly')."
          },
          {
            "id": 3,
            "question": "Deni: '... ?'\nBudi: 'I am watering the Jasmine flowers in the garden.'\nWhat is the correct question Deni should ask?",
            "options": [
              "Where do you live?",
              "What are you doing?",
              "Who is your teacher?",
              "How old are you?"
            ],
            "correctIndex": 1,
            "hint": "Use 'What are you doing?' to ask about an ongoing action.",
            "explanation": "'What are you doing?' asks about the action the person is performing."
          },
          {
            "id": 4,
            "question": "Arrange the jumbled words into a correct sentence:\n'is - Father - the newspaper - in the living room - reading'",
            "options": [
              "Father is reading the newspaper in the living room",
              "Reading is Father the newspaper in the living room",
              "In the living room Father the newspaper reading is",
              "The newspaper Father is in the living room reading"
            ],
            "correctIndex": 0,
            "hint": "Sentence structure: Subject + is/am/are + Verb-ing + Object + Adverb of place.",
            "explanation": "Subject (Father) + is reading (verb) + the newspaper (object) + in the living room (place)."
          },
          {
            "id": 5,
            "question": "Look at the number: '79'. What number comes right after seventy-nine?",
            "options": [
              "Seventy-eight",
              "Eighty",
              "Ninety",
              "Seventy"
            ],
            "correctIndex": 1,
            "hint": "79 + 1 = 80.",
            "explanation": "The number after 79 (seventy-nine) is 80 (eighty)."
          },
          {
            "id": 6,
            "question": "Aisyah has a test score card showing the number '85'. How do you write this number in English words?",
            "options": [
              "Fifty-eight",
              "Eighty-five",
              "Seventy-five",
              "Eighteen"
            ],
            "correctIndex": 1,
            "hint": "80 is eighty, 5 is five.",
            "explanation": "85 is written as 'Eighty-five'."
          },
          {
            "id": 7,
            "question": "A stationary shop has 40 blue pencils and 25 red pencils in stock. How many pencils are there altogether in the shop?",
            "options": [
              "Fifty pencils",
              "Sixty pencils",
              "Sixty-five pencils",
              "Seventy-five pencils"
            ],
            "correctIndex": 2,
            "hint": "Calculate: 40 + 25 = 65.",
            "explanation": "40 + 25 = 65, which is 'sixty-five pencils'."
          },
          {
            "id": 8,
            "question": "Teacher: 'What is fifty plus thirty-two?'\nStudent: 'It is ...'",
            "options": [
              "Eighty-two",
              "Seventy-two",
              "Ninety-two",
              "Sixty-two"
            ],
            "correctIndex": 0,
            "hint": "50 + 32 = 82.",
            "explanation": "Fifty (50) + thirty-two (32) = eighty-two (82)."
          },
          {
            "id": 9,
            "question": "Cici wants to brush her teeth and wash her face before going to bed. Which room in the house should she go to?",
            "options": [
              "Kitchen",
              "Garage",
              "Bathroom",
              "Dining room"
            ],
            "correctIndex": 2,
            "hint": "The room with a sink, mirror, and shower is the bathroom.",
            "explanation": "We brush our teeth and wash our face in the bathroom (kamar mandi)."
          },
          {
            "id": 10,
            "question": "Translate into correct English:\n'Kucing yang lucu itu sedang tidur di bawah meja.'",
            "options": [
              "The cute cat is sleeping on the table",
              "The cute cat is sleeping under the table",
              "The cute cat is sleeping beside the wall",
              "The cute cat is sleeping in front of the box"
            ],
            "correctIndex": 1,
            "hint": "'Di bawah' in English preposition is 'under'.",
            "explanation": "'Di bawah meja' translates to 'under the table'."
          },
          {
            "id": 11,
            "question": "In Mr. Rudi's house, the living room is located right between the bedroom and the kitchen. Which sentence correctly describes the position?",
            "options": [
              "The living room is behind the house",
              "The living room is between the bedroom and the kitchen",
              "The living room is under the garage",
              "The kitchen is in front of the roof"
            ],
            "correctIndex": 1,
            "hint": "'Between' means di antara dua ruangan.",
            "explanation": "The preposition 'between' expresses a position in the middle of two locations."
          },
          {
            "id": 12,
            "question": "Read the description: 'The bedroom is neat. The pillows are arranged nicely, and there is no rubbish on the floor.' What is the condition of the room in Indonesian?",
            "options": [
              "Kamar tersebut sangat kotor dan bau",
              "Kamar tersebut rapi, bersih, dan nyaman",
              "Kamar tersebut gelap dan menyeramkan",
              "Kamar tersebut sempit dan berantakan"
            ],
            "correctIndex": 1,
            "hint": "'Neat' means rapi, 'no rubbish' means tidak ada sampah (bersih).",
            "explanation": "'Neat' and tidy means 'rapi dan bersih'."
          },
          {
            "id": 13,
            "question": "Read the text:\n'Every morning, Sinta wakes up at 05.00 AM. She makes her bed and takes a bath. Then she has breakfast with milk and bread at 06.15 AM before going to school.'\nWhat does Sinta do at 06.15 AM?",
            "options": [
              "She wakes up",
              "She has breakfast",
              "She takes a bath",
              "She sleeps"
            ],
            "correctIndex": 1,
            "hint": "Check the sentence about 06.15 AM.",
            "explanation": "According to the text, at 06.15 AM she has breakfast with milk and bread."
          },
          {
            "id": 14,
            "question": "Based on the text above, what time does Sinta wake up every morning?",
            "options": [
              "At 05.00 AM",
              "At 06.00 AM",
              "At 07.00 AM",
              "At 05.30 AM"
            ],
            "correctIndex": 0,
            "hint": "First sentence: 'Sinta wakes up at 05.00 AM'.",
            "explanation": "She wakes up at 05.00 AM in the morning."
          },
          {
            "id": 15,
            "question": "Beni: '... you go to school by bicycle every day?'\nEdo: 'Yes, I do.'\nChoose the correct auxiliary verb to complete Beni's question:",
            "options": [
              "Do",
              "Does",
              "Is",
              "Are"
            ],
            "correctIndex": 0,
            "hint": "For the subject pronoun 'you', we use 'Do' in simple present tense questions.",
            "explanation": "With subject 'you', the auxiliary question verb is 'Do' (Do you go to school...). Edo replies 'Yes, I do'."
          },
          {
            "id": 16,
            "question": "Which of the following sentences is a correct Simple Present Tense expressing a daily habit?",
            "options": [
              "He brushed his teeth yesterday",
              "He brushes his teeth every morning and evening",
              "He is brushing teeth right now",
              "He will brush his teeth tomorrow"
            ],
            "correctIndex": 1,
            "hint": "Subject 'He' takes verb + s/es for daily routines.",
            "explanation": "'He brushes his teeth every morning and evening' uses simple present tense for a daily habit."
          },
          {
            "id": 17,
            "question": "You can find these things: 'stove, frying pan, refrigerator, knife, and kettle'. Which part of the house are these things usually in?",
            "options": [
              "Bedroom",
              "Kitchen",
              "Living room",
              "Garage"
            ],
            "correctIndex": 1,
            "hint": "Stove is kompor, frying pan is wajan.",
            "explanation": "These items belong in the kitchen (dapur)."
          },
          {
            "id": 18,
            "question": "Which statement correctly describes the function of an item in the house?",
            "options": [
              "We use a wardrobe to store our clothes neatly",
              "We use a refrigerator to boil water",
              "We use a bolster to cut vegetables",
              "We use a sofa to park our motorcycle"
            ],
            "correctIndex": 0,
            "hint": "A wardrobe (lemari pakaian) is used to keep clothes.",
            "explanation": "A wardrobe is used to store and keep clothes tidy."
          },
          {
            "id": 19,
            "question": "Look at the description: 'It is soft and rectangular. We put our head on it when we sleep in the bedroom.' What item is it?",
            "options": [
              "A pillow",
              "A clock",
              "A mirror",
              "A chair"
            ],
            "correctIndex": 0,
            "hint": "A soft item for our head while sleeping is 'bantal' (pillow).",
            "explanation": "A pillow is a soft cushion for the head while sleeping."
          },
          {
            "id": 20,
            "question": "Look at the pairs:\n(1) Dining table - Having meals together\n(2) Sofa - Sitting comfortably in the living room\n(3) Bed - Taking a shower\nWhich pairs are correct?",
            "options": [
              "(1) and (2)",
              "(1) and (3)",
              "(2) and (3)",
              "(1), (2), and (3)"
            ],
            "correctIndex": 0,
            "hint": "A bed is for sleeping, not for taking a shower.",
            "explanation": "(1) and (2) are correct. (3) is false because we sleep on a bed."
          }
        ]
      },
      {
        "id": "eng-1",
        "title": "Part 1: Present Participle & Numbers 50-100 (No. 1-10)",
        "difficulty": "Easy - Medium",
        "targetKelas": "Kelas 4 SD",
        "durationMinutes": 15,
        "description": "Latihan 10 soal pertama fokus pada aktivitas sehari-hari, kata kerja berakhiran -ing, dan berhitung angka 50-100.",
        "questions": [
          {
            "id": 1,
            "question": "Look at the situation: 'Mother is in the kitchen with a frying pan and vegetables.' What is mother doing right now?",
            "options": [
              "She is sleeping in the bed",
              "She is cooking delicious soup",
              "She is washing her bicycle",
              "She is reading a comic book"
            ],
            "correctIndex": 1,
            "hint": "Activities in the kitchen using a frying pan usually relate to preparing food.",
            "explanation": "'She is cooking delicious soup' is the right present continuous activity for the kitchen."
          },
          {
            "id": 2,
            "question": "Complete the sentence based on library activity:\n'Joshua and Made are in the school library. They are ... storybooks quietly.'",
            "options": [
              "playing football",
              "eating snacks",
              "reading",
              "swimming"
            ],
            "correctIndex": 2,
            "hint": "The common activity in the library is reading books quietly.",
            "explanation": "In the library, students are reading books ('They are reading storybooks quietly')."
          },
          {
            "id": 3,
            "question": "Deni: '... ?'\nBudi: 'I am watering the Jasmine flowers in the garden.'\nWhat is the correct question Deni should ask?",
            "options": [
              "Where do you live?",
              "What are you doing?",
              "Who is your teacher?",
              "How old are you?"
            ],
            "correctIndex": 1,
            "hint": "Use 'What are you doing?' to ask about an ongoing action.",
            "explanation": "'What are you doing?' asks about the action the person is performing."
          },
          {
            "id": 4,
            "question": "Arrange the jumbled words into a correct sentence:\n'is - Father - the newspaper - in the living room - reading'",
            "options": [
              "Father is reading the newspaper in the living room",
              "Reading is Father the newspaper in the living room",
              "In the living room Father the newspaper reading is",
              "The newspaper Father is in the living room reading"
            ],
            "correctIndex": 0,
            "hint": "Sentence structure: Subject + is/am/are + Verb-ing + Object + Adverb of place.",
            "explanation": "Subject (Father) + is reading (verb) + the newspaper (object) + in the living room (place)."
          },
          {
            "id": 5,
            "question": "Look at the number: '79'. What number comes right after seventy-nine?",
            "options": [
              "Seventy-eight",
              "Eighty",
              "Ninety",
              "Seventy"
            ],
            "correctIndex": 1,
            "hint": "79 + 1 = 80.",
            "explanation": "The number after 79 (seventy-nine) is 80 (eighty)."
          },
          {
            "id": 6,
            "question": "Aisyah has a test score card showing the number '85'. How do you write this number in English words?",
            "options": [
              "Fifty-eight",
              "Eighty-five",
              "Seventy-five",
              "Eighteen"
            ],
            "correctIndex": 1,
            "hint": "80 is eighty, 5 is five.",
            "explanation": "85 is written as 'Eighty-five'."
          },
          {
            "id": 7,
            "question": "A stationary shop has 40 blue pencils and 25 red pencils in stock. How many pencils are there altogether in the shop?",
            "options": [
              "Fifty pencils",
              "Sixty pencils",
              "Sixty-five pencils",
              "Seventy-five pencils"
            ],
            "correctIndex": 2,
            "hint": "Calculate: 40 + 25 = 65.",
            "explanation": "40 + 25 = 65, which is 'sixty-five pencils'."
          },
          {
            "id": 8,
            "question": "Teacher: 'What is fifty plus thirty-two?'\nStudent: 'It is ...'",
            "options": [
              "Eighty-two",
              "Seventy-two",
              "Ninety-two",
              "Sixty-two"
            ],
            "correctIndex": 0,
            "hint": "50 + 32 = 82.",
            "explanation": "Fifty (50) + thirty-two (32) = eighty-two (82)."
          },
          {
            "id": 9,
            "question": "Cici wants to brush her teeth and wash her face before going to bed. Which room in the house should she go to?",
            "options": [
              "Kitchen",
              "Garage",
              "Bathroom",
              "Dining room"
            ],
            "correctIndex": 2,
            "hint": "The room with a sink, mirror, and shower is the bathroom.",
            "explanation": "We brush our teeth and wash our face in the bathroom (kamar mandi)."
          },
          {
            "id": 10,
            "question": "Translate into correct English:\n'Kucing yang lucu itu sedang tidur di bawah meja.'",
            "options": [
              "The cute cat is sleeping on the table",
              "The cute cat is sleeping under the table",
              "The cute cat is sleeping beside the wall",
              "The cute cat is sleeping in front of the box"
            ],
            "correctIndex": 1,
            "hint": "'Di bawah' in English preposition is 'under'.",
            "explanation": "'Di bawah meja' translates to 'under the table'."
          }
        ]
      },
      {
        "id": "eng-2",
        "title": "Part 2: Prepositions, Rooms & Daily Activities (No. 11-20)",
        "difficulty": "Medium - Challenge",
        "targetKelas": "Kelas 4 SD",
        "durationMinutes": 15,
        "description": "Latihan 10 soal kedua fokus pada tata letak ruangan, preposisi, simple present tense, dan perabot rumah.",
        "questions": [
          {
            "id": 11,
            "question": "In Mr. Rudi's house, the living room is located right between the bedroom and the kitchen. Which sentence correctly describes the position?",
            "options": [
              "The living room is behind the house",
              "The living room is between the bedroom and the kitchen",
              "The living room is under the garage",
              "The kitchen is in front of the roof"
            ],
            "correctIndex": 1,
            "hint": "'Between' means di antara dua ruangan.",
            "explanation": "The preposition 'between' expresses a position in the middle of two locations."
          },
          {
            "id": 12,
            "question": "Read the description: 'The bedroom is neat. The pillows are arranged nicely, and there is no rubbish on the floor.' What is the condition of the room in Indonesian?",
            "options": [
              "Kamar tersebut sangat kotor dan bau",
              "Kamar tersebut rapi, bersih, dan nyaman",
              "Kamar tersebut gelap dan menyeramkan",
              "Kamar tersebut sempit dan berantakan"
            ],
            "correctIndex": 1,
            "hint": "'Neat' means rapi, 'no rubbish' means tidak ada sampah (bersih).",
            "explanation": "'Neat' and tidy means 'rapi dan bersih'."
          },
          {
            "id": 13,
            "question": "Read the text:\n'Every morning, Sinta wakes up at 05.00 AM. She makes her bed and takes a bath. Then she has breakfast with milk and bread at 06.15 AM before going to school.'\nWhat does Sinta do at 06.15 AM?",
            "options": [
              "She wakes up",
              "She has breakfast",
              "She takes a bath",
              "She sleeps"
            ],
            "correctIndex": 1,
            "hint": "Check the sentence about 06.15 AM.",
            "explanation": "According to the text, at 06.15 AM she has breakfast with milk and bread."
          },
          {
            "id": 14,
            "question": "Based on the text above, what time does Sinta wake up every morning?",
            "options": [
              "At 05.00 AM",
              "At 06.00 AM",
              "At 07.00 AM",
              "At 05.30 AM"
            ],
            "correctIndex": 0,
            "hint": "First sentence: 'Sinta wakes up at 05.00 AM'.",
            "explanation": "She wakes up at 05.00 AM in the morning."
          },
          {
            "id": 15,
            "question": "Beni: '... you go to school by bicycle every day?'\nEdo: 'Yes, I do.'\nChoose the correct auxiliary verb to complete Beni's question:",
            "options": [
              "Do",
              "Does",
              "Is",
              "Are"
            ],
            "correctIndex": 0,
            "hint": "For the subject pronoun 'you', we use 'Do' in simple present tense questions.",
            "explanation": "With subject 'you', the auxiliary question verb is 'Do' (Do you go to school...). Edo replies 'Yes, I do'."
          },
          {
            "id": 16,
            "question": "Which of the following sentences is a correct Simple Present Tense expressing a daily habit?",
            "options": [
              "He brushed his teeth yesterday",
              "He brushes his teeth every morning and evening",
              "He is brushing teeth right now",
              "He will brush his teeth tomorrow"
            ],
            "correctIndex": 1,
            "hint": "Subject 'He' takes verb + s/es for daily routines.",
            "explanation": "'He brushes his teeth every morning and evening' uses simple present tense for a daily habit."
          },
          {
            "id": 17,
            "question": "You can find these things: 'stove, frying pan, refrigerator, knife, and kettle'. Which part of the house are these things usually in?",
            "options": [
              "Bedroom",
              "Kitchen",
              "Living room",
              "Garage"
            ],
            "correctIndex": 1,
            "hint": "Stove is kompor, frying pan is wajan.",
            "explanation": "These items belong in the kitchen (dapur)."
          },
          {
            "id": 18,
            "question": "Which statement correctly describes the function of an item in the house?",
            "options": [
              "We use a wardrobe to store our clothes neatly",
              "We use a refrigerator to boil water",
              "We use a bolster to cut vegetables",
              "We use a sofa to park our motorcycle"
            ],
            "correctIndex": 0,
            "hint": "A wardrobe (lemari pakaian) is used to keep clothes.",
            "explanation": "A wardrobe is used to store and keep clothes tidy."
          },
          {
            "id": 19,
            "question": "Look at the description: 'It is soft and rectangular. We put our head on it when we sleep in the bedroom.' What item is it?",
            "options": [
              "A pillow",
              "A clock",
              "A mirror",
              "A chair"
            ],
            "correctIndex": 0,
            "hint": "A soft item for our head while sleeping is 'bantal' (pillow).",
            "explanation": "A pillow is a soft cushion for the head while sleeping."
          },
          {
            "id": 20,
            "question": "Look at the pairs:\n(1) Dining table - Having meals together\n(2) Sofa - Sitting comfortably in the living room\n(3) Bed - Taking a shower\nWhich pairs are correct?",
            "options": [
              "(1) and (2)",
              "(1) and (3)",
              "(2) and (3)",
              "(1), (2), and (3)"
            ],
            "correctIndex": 0,
            "hint": "A bed is for sleeping, not for taking a shower.",
            "explanation": "(1) and (2) are correct. (3) is false because we sleep on a bed."
          }
        ]
      }
    ]
  },
  {
    "id": "bahasa_jawa",
    "name": "Bahasa Jawa (Mulok Daerah)",
    "shortDesc": "Geguritan, Cerita Wayang Yudhistira & Arjuna, Tradisi Adat Jawa, lan Pasangane Aksara Jawa.",
    "icon": "🎭",
    "themeColor": "tosca",
    "gradient": "from-teal-700 via-cyan-700 to-teal-800",
    "bgPattern": "bg-teal-50",
    "badge": "Kelas IV / Semester 1",
    "kisiKisi": [
      {
        "no": 1,
        "elemen": "Geguritan",
        "materi": "Geguritan",
        "indikator": "Disajikan pertanyaan asal etimologis kata 'gurit', siswa dapat menentukan arti tembung lingga 'gurit'.",
        "level": "L1 (C1)",
        "bentuk": "PG"
      },
      {
        "no": 2,
        "elemen": "Geguritan",
        "materi": "Geguritan",
        "indikator": "Disajikan langkah-langkah memahami geguritan secara acak, siswa dapat mengurutkan langkah parafrase geguritan dengan tepat.",
        "level": "L3 (C4)",
        "bentuk": "PG"
      },
      {
        "no": 3,
        "elemen": "Geguritan",
        "materi": "Geguritan",
        "indikator": "Disajikan pilihan ciri-ciri geguritan, siswa dapat menentukan titikan/ciri khas geguritan gagrak anyar (modern).",
        "level": "L2 (C2)",
        "bentuk": "PG"
      },
      {
        "no": 4,
        "elemen": "Geguritan",
        "materi": "Geguritan",
        "indikator": "Disajikan teks geguritan tema sekolah, siswa dapat menentukan tema yang diusung dalam geguritan tersebut.",
        "level": "L2 (C2)",
        "bentuk": "PG"
      },
      {
        "no": 5,
        "elemen": "Geguritan",
        "materi": "Geguritan",
        "indikator": "Disajikan teks geguritan tema sekolah, siswa dapat menganalisis pernyataan yang bukan merupakan piwulang/pesan geguritan.",
        "level": "L3 (C4)",
        "bentuk": "PG"
      },
      {
        "no": 6,
        "elemen": "Geguritan",
        "materi": "Geguritan",
        "indikator": "Disajikan teks geguritan tentang orang tua, siswa dapat menyimpulkan amanat/pitutur luhur dari geguritan.",
        "level": "L3 (C5)",
        "bentuk": "PG"
      },
      {
        "no": 7,
        "elemen": "Cerita Wayang",
        "materi": "Cerita Wayang",
        "indikator": "Disajikan teks bacaan Raden Yudhistira, siswa dapat menjelaskan alasan julukan Satriya Getih Putih pada Yudhistira.",
        "level": "L2 (C2)",
        "bentuk": "PG"
      },
      {
        "no": 8,
        "elemen": "Cerita Wayang",
        "materi": "Cerita Wayang",
        "indikator": "Disajikan deskripsi ksatria Madukara yang mahir memanah, siswa dapat mengidentifikasi nama ksatria tersebut.",
        "level": "L1 (C1)",
        "bentuk": "PG"
      },
      {
        "no": 9,
        "elemen": "Cerita Wayang",
        "materi": "Cerita Wayang",
        "indikator": "Disajikan deskripsi putra tertua Pandhawa yang bijaksana, siswa dapat menentukan nama pembarep Pandhawa.",
        "level": "L1 (C1)",
        "bentuk": "PG"
      },
      {
        "no": 10,
        "elemen": "Pertunjukan Wayang",
        "materi": "Pertunjukan Wayang",
        "indikator": "Disajikan pertanyaan tentang perlengkapan wayang, siswa dapat menentukan nama wadah wayang yang dipukul cempala.",
        "level": "L1 (C1)",
        "bentuk": "PG"
      },
      {
        "no": 11,
        "elemen": "Pertunjukan Wayang",
        "materi": "Pertunjukan Wayang",
        "indikator": "Disajikan pertanyaan tentang profesi seni pewayangan, siswa dapat menentukan sebutan penabuh gamelan.",
        "level": "L1 (C1)",
        "bentuk": "PG"
      },
      {
        "no": 12,
        "elemen": "Ide Pokok Paragraf",
        "materi": "Ide Pokok Paragraf",
        "indikator": "Disajikan langkah-langkah menentukan ide pokok secara acak, siswa dapat mengurutkan trap-trapan menentukan ide pokok paragraf.",
        "level": "L3 (C4)",
        "bentuk": "PG"
      },
      {
        "no": 13,
        "elemen": "Jenis Teks",
        "materi": "Jenis Teks",
        "indikator": "Disajikan ciri-ciri teks berbasis fakta/data, siswa dapat mengidentifikasi jenis teks nonsastra.",
        "level": "L2 (C2)",
        "bentuk": "PG"
      },
      {
        "no": 14,
        "elemen": "Tradisi Adat Jawa",
        "materi": "Tradisi Adat Jawa",
        "indikator": "Disajikan tabel kebenaran tradisi daur hidup (Tedhak Siten, Selapanan, Mitoni), siswa dapat menentukan kombinasi benar/salah yang tepat.",
        "level": "L3 (C4)",
        "bentuk": "PG"
      },
      {
        "no": 15,
        "elemen": "Kosa Kata",
        "materi": "Kosa Kata",
        "indikator": "Disajikan kalimat tentang waktu surup, siswa dapat menentukan makna kata 'surup'.",
        "level": "L2 (C2)",
        "bentuk": "PG"
      },
      {
        "no": 16,
        "elemen": "Aksara Jawa",
        "materi": "Aksara Jawa",
        "indikator": "Disajikan penulisan Aksara Jawa, siswa dapat mengidentifikasi penggunaan sandhangan panyigeg wanda.",
        "level": "L2 (C2)",
        "bentuk": "PG"
      },
      {
        "no": 17,
        "elemen": "Aksara Jawa",
        "materi": "Aksara Jawa",
        "indikator": "Disajikan pertanyaan tentang aksara Jawa dasar, siswa dapat menentukan jumlah aksara legena.",
        "level": "L1 (C1)",
        "bentuk": "PG"
      },
      {
        "no": 18,
        "elemen": "Aksara Jawa",
        "materi": "Aksara Jawa",
        "indikator": "Disajikan fungsi vokal 'u', siswa dapat menyebutkan nama sandhangan swara vokal u.",
        "level": "L1 (C1)",
        "bentuk": "PG"
      },
      {
        "no": 19,
        "elemen": "Aksara Jawa",
        "materi": "Aksara Jawa",
        "indikator": "Disajikan penulisan Aksara Jawa, siswa dapat menentukan sandhangan wyanjana yang digunakan.",
        "level": "L2 (C2)",
        "bentuk": "PG"
      },
      {
        "no": 20,
        "elemen": "Aksara Jawa",
        "materi": "Aksara Jawa",
        "indikator": "Disajikan frasa Aksara Jawa, siswa dapat mengalihaksarakan ke dalam tulisan Latin.",
        "level": "L2 (C2)",
        "bentuk": "PG"
      }
    ],
    "packages": [
      {
        "id": "jawa-full",
        "title": "Paket Lengkap ASAS 1 (20 Soal Sesuai Kisi-Kisi)",
        "difficulty": "L1, L2 & L3 (Lengkap)",
        "targetKelas": "Kelas 4 SD",
        "durationMinutes": 30,
        "description": "20 Soal Pilihan Ganda lengkap nyakup Geguritan, Wayang Pandhawa, Tradisi Adat, lan Aksara Jawa.",
        "questions": [
          {
            "id": 1,
            "question": "Tembung 'geguritan' asale saka tembung lingga (kata dasar) 'gurit'. Tegese tembung 'gurit' yaiku ...",
            "options": [
              "Tulisan, kidung, utawa corekan endah",
              "Lelagon tembang dolanan bocah",
              "Critane para dewa ing kahyangan",
              "Sesorah ing sangarepe wong akeh"
            ],
            "correctIndex": 0,
            "hint": "Gurit tegese corekan, tulisan, utawa tembang kidung.",
            "explanation": "Geguritan asale saka tembung 'gurit' kang tegese tulisan, kidung, utawa reriptan endah."
          },
          {
            "id": 2,
            "question": "Gatekna trap-trapan parafrase geguritan iki:\n(1) Negesi tembung-tembung kang angel\n(2) Maca geguritan kanthi bola-bali nganti paham\n(3) Ngronce dadi ukara gancaran mawa basane dhewe\nUrutan trap-trapan (langkah-langkah) parafrase geguritan kang trep yaiku ...",
            "options": [
              "(1) - (2) - (3)",
              "(2) - (1) - (3)",
              "(3) - (1) - (2)",
              "(2) - (3) - (1)"
            ],
            "correctIndex": 1,
            "hint": "Wiwiti kanthi maca bola-bali, banjur golek teges tembung angel, pungkasan ditulis mawa basa gancaran.",
            "explanation": "Urutane parafrase yaiku maca dhisik (2), negesi tembung angel (1), banjur diowahi dadi gancaran (3)."
          },
          {
            "id": 3,
            "question": "Titikan (ciri-ciri) geguritan gagrak anyar (modern) ing kasusastran Jawa yaiku ...",
            "options": [
              "Kudu diwiwiti nganggo ukara 'Sun gegurit'",
              "Ora kaiket dening guru gatra, guru wilangan, lan guru lagu",
              "Cacahe larik ing saben pada kudu padha",
              "Kudu ditembangake nganggo titi laras pelog"
            ],
            "correctIndex": 1,
            "hint": "Geguritan anyar sifate bebas (puisi bebas Jawa).",
            "explanation": "Geguritan gagrak anyar bebas, yaiku ora kaiket paugeran guru gatra, guru wilangan, lan guru lagu."
          },
          {
            "id": 4,
            "question": "Wacanen pethikan geguritan iki:\n'Saben esuk aku jumangkah\nNggendhong tas kebak buku lan potlot\nMenyang papan nggayuh pepadhang\nSinau bebarengan para kanca'\nTema kang diusung ing geguritan kasebut yaiku ...",
            "options": [
              "Budi pekerti marang wong tuwa",
              "Sekolah lan golek ngelmu",
              "Tetanen ing sawah",
              "Kerja bakti desa"
            ],
            "correctIndex": 1,
            "hint": "Tembung 'tas buku potlot' lan 'sinau' nuduhake swasana sekolah.",
            "explanation": "Geguritan kasebut nyritakake babagan budhal sekolah golek ngelmu bebarengan kanca."
          },
          {
            "id": 5,
            "question": "Adhedhasar pethikan geguritan ing dhuwur, pranyatan ing ngisor iki kang BUKAN piwulang/pesan geguritan yaiku ...",
            "options": [
              "Bocah sekolah kudu sregep sinau",
              "Sekolah minangka papan golek pepadhang lan ngelmu",
              "Bocah sekolah kudu males tangi esuk",
              "Kudu rukun sinau bebarengan kanca"
            ],
            "correctIndex": 2,
            "hint": "Pilihen pranyatan kang ala utawa ora mathuk karo isine geguritan.",
            "explanation": "'Bocah sekolah kudu males tangi esuk' cetha dudu piwulang kang becik saka geguritan."
          },
          {
            "id": 6,
            "question": "Geguritan kang nyritakake rasa tresna lan pangorbanane bapa biyung anggone nggulawentah anak nganti dadi manungsa utama ngemot amanat luhur, yaiku ...",
            "options": [
              "Anak kudu wani mbantah dhawuhe wong tuwa",
              "Anak kudu bekti, manut, lan tansah ngurmati wong tuwane",
              "Wong tuwa kudu ditilar nalika wis tuwa",
              "Anak ora perlu ndongakake bapa biyunge"
            ],
            "correctIndex": 1,
            "hint": "Bapa biyung minangka pepundhen kang kudu dibekteni.",
            "explanation": "Amanat luhure yaiku anak kudu tansah bekti, manut pitutur, lan ngurmati wong tuwa."
          },
          {
            "id": 7,
            "question": "Prabu Puntadewa (Raden Yudhistira) kawentar kanthi sesebutan 'Satriya Getih Putih' amarga ...",
            "options": [
              "Seneng perang numpes mungsuh",
              "Atine suci resik, sabar, lan ora nate goroh (ngapusi) sajroning uripe",
              "Wernane awake pancen putih kabeh",
              "Keturunan jin lan dewa kahyangan"
            ],
            "correctIndex": 1,
            "hint": "Getih putih nglambangake watak kang suci lan ora nate duwe niat ala utawa ngapusi.",
            "explanation": "Puntadewa sinebut getih putih amarga atine resik suci, luhur bebudene, sabar, lan ora nate ngapusi."
          },
          {
            "id": 8,
            "question": "Satriya ing Madukara kang kondhang bagus rupane, alus budine, sarta prigel banget anggone nggunakake panah yaiku ...",
            "options": [
              "Raden Werkudara",
              "Raden Janaka (Arjuna)",
              "Raden Nakula",
              "Raden Sadewa"
            ],
            "correctIndex": 1,
            "hint": "Arjuna utawa Janaka satriya ing Madukara kanthi pusaka Panah Pasopati.",
            "explanation": "Raden Janaka (Arjuna) yaiku satriya Madukara kang prigel manah."
          },
          {
            "id": 9,
            "question": "Putra pembarep (anak nomer siji / anak tertua) saka kulawarga Pandhawa Lima yaiku ...",
            "options": [
              "Raden Werkudara",
              "Raden Puntadewa (Yudhistira)",
              "Raden Janaka",
              "Raden Sadewa"
            ],
            "correctIndex": 1,
            "hint": "Urutane: Puntadewa, Werkudara, Janaka, Nakula, Sadewa.",
            "explanation": "Pembarepe Pandhawa yaiku Raden Puntadewa utawa Yudhistira."
          },
          {
            "id": 10,
            "question": "Ing pagelaran wayang kulit, wadhah kothak kayu papan nyimpen wayang kang asring dithuthuk cempala dening dhalang diarani ...",
            "options": [
              "Kelir",
              "Kothak wayang",
              "Blencong",
              "Debog"
            ],
            "correctIndex": 1,
            "hint": "Kothak iki digawe saka kayu jati kanggo papan simpen wayang.",
            "explanation": "Kothak wayang yaiku wadhah wayang kang uga dithuthuk dhalang nganggo cempala kanggo ngiringi swasana."
          },
          {
            "id": 11,
            "question": "Wong kang duwe jejibahan nuthuk utawa nabuh gamelan ing pagelaran wayang diarani ...",
            "options": [
              "Dhalang",
              "Pesindhen / Swarawati",
              "Niyaga / Pengrawit",
              "Wiraswara"
            ],
            "correctIndex": 2,
            "hint": "Dhalang sing mainake wayang, sindhen sing nembang, penabuh gamelan arane niyaga.",
            "explanation": "Niyaga utawa pengrawit yaiku sebutan kanggo wong kang nabuh gamelan Jawa."
          },
          {
            "id": 12,
            "question": "Trap-trapan (langkah-langkah) nemtokake ide pokok paragraf kang bener yaiku ...",
            "options": [
              "Maca kabeh paragraf kanthi setiti, nemtokake ukara baku (utama), banjur ngrumusake ide pokoke",
              "Mung maca ukara pungkasan thok",
              "Ngetung gunggunge tembung ing saben larik",
              "Milih ukara sing paling dawa ukurane"
            ],
            "correctIndex": 0,
            "hint": "Ide pokok digoleki kanthi maca paragraf sakutuh banjur nemokake ukara utamane.",
            "explanation": "Langkah nemtokake ide pokok: maca setiti, golek ukara utama, banjur nyimpulake ide pokoke."
          },
          {
            "id": 13,
            "question": "Wacan kang isine nampilake informasi adhedhasar fakta, data, kedadeyan nyata, lan ora ngemot unsur fiksi diarani jinis teks ...",
            "options": [
              "Teks crita dongeng",
              "Teks geguritan fiksi",
              "Teks informasi / nonsastra",
              "Teks tembang macapat"
            ],
            "correctIndex": 2,
            "hint": "Nonsastra tegese wacan adhedhasar fakta lan data nyata.",
            "explanation": "Teks informasi/nonsastra yaiku wacan kang adhedhasar kahanan nyata utawa fakta."
          },
          {
            "id": 14,
            "question": "Gatekna tradisi daur hidup ing kabudayan Jawa iki:\n(1) Tedhak Siten - Tradisi upacara mudhun lemah nalika bocah umur 7 selapan\n(2) Mitoni - Tradisi selamatan nalika calon ibu ngandhut umur 7 wulan\nKombinasi pranyatan kasebut yaiku ...",
            "options": [
              "(1) Bener lan (2) Bener",
              "(1) Bener lan (2) Salah",
              "(1) Salah lan (2) Bener",
              "(1) Salah lan (2) Salah"
            ],
            "correctIndex": 0,
            "hint": "Tedhak siten = mudhun lemah, Mitoni = pitung wulanan kandhutan.",
            "explanation": "Kalorone bener. Tedhak siten yaiku mudhun lemah, mitoni yaiku selamatan 7 wulan kandhutan."
          },
          {
            "id": 15,
            "question": "'Aja dolan nganti surup, enggal mulih menyang omah!' Tembung 'surup' ing ukara kasebut nduweni teges ...",
            "options": [
              "Wayah esuk nalika srengenge njedhul",
              "Wayah awan nalika srengenge pas ing dhuwur sirah",
              "Wayah sore nalika srengenge wis meh ambles / maghrib",
              "Wayah tengah wengi sepi"
            ],
            "correctIndex": 2,
            "hint": "Surup iku wayah sandyakala utawa wektu sore meh bengi.",
            "explanation": "Surup tegese wayah sore nalika srengenge wis ambles mlebu wanci maghrib."
          },
          {
            "id": 16,
            "question": "Sandhangan Aksara Jawa kang gunane kanggo panyigeg wanda (mateni swara konsonan ing pungkasan suku kata) kayata wignyan, layar, cecak, lan pangkon diarani ...",
            "options": [
              "Sandhangan swara",
              "Sandhangan panyigeg wanda",
              "Sandhangan wyanjana",
              "Aksara murda"
            ],
            "correctIndex": 1,
            "hint": "Panyigeg tegese panutup / pemati swara konsonan.",
            "explanation": "Sandhangan panyigeg wanda yaiku sandhangan kanggo mateni wanda (cecak /ng/, layar /r/, wignyan /h/, pangkon)."
          },
          {
            "id": 17,
            "question": "Cacahe Aksara Jawa baku (aksara legena / dentawyanjana) kang durung kawuwuhan sandhangan ana ...",
            "options": [
              "15 aksara",
              "20 aksara",
              "25 aksara",
              "30 aksara"
            ],
            "correctIndex": 1,
            "hint": "Wiwit saka Ha Na Ca Ra Ka nganti Nga ana rong puluh aksara.",
            "explanation": "Aksara Jawa legena cacahe ana 20 (Ha, Na, Ca, Ra, Ka, Da, Ta, Sa, Wa, La, Pa, Dha, Ja, Ya, Nya, Ma, Ga, Ba, Tha, Nga)."
          },
          {
            "id": 18,
            "question": "Sandhangan swara kang digunakake kanggo ngowahi swara vokal aksara legena dadi swara vokal 'u' yaiku ...",
            "options": [
              "Wulu",
              "Suku",
              "Taling",
              "Pepet"
            ],
            "correctIndex": 1,
            "hint": "Wulu kanggo i, Suku kanggo u, Taling kanggo e, Pepet kanggo e pepet.",
            "explanation": "Sandhangan 'suku' manggon ing sangisore aksara kanggo swara vokal 'u'."
          },
          {
            "id": 19,
            "question": "Sandhangan wyanjana kang digunakake kanggo nyisipi swara /ra/ (tuladhane nulis tembung 'krasa' utawa 'prabu') diarani ...",
            "options": [
              "Cakra",
              "Keret",
              "Pengkal",
              "Wignyan"
            ],
            "correctIndex": 0,
            "hint": "Cakra sesulih ra, keret sesulih re, pengkal sesulih ya.",
            "explanation": "Sandhangan wyanjana panyisip swara 'ra' yaiku cakra."
          },
          {
            "id": 20,
            "question": "Frasa Aksara Jawa kang kasusun saka aksara 'Ta' kawuwuhan suku (Tu), 'Ka' kawuwuhan suku (Ku), 'Ro' kawuwuhan taling tarung, lan 'Ti' kawuwuhan wulu (Tuku Roti). Yen disalin menyang aksara Latin unine ...",
            "options": [
              "Tuku wedhi",
              "Tuku roti",
              "Susu sapi",
              "Buku tulis"
            ],
            "correctIndex": 1,
            "hint": "Tu-ku Ro-ti.",
            "explanation": "Aksara kasebut diwaca 'Tuku roti'."
          }
        ]
      },
      {
        "id": "jawa-1",
        "title": "Bagean 1: Geguritan & Cerita Wayang (No. 1-10)",
        "difficulty": "Sedang",
        "targetKelas": "Kelas 4 SD",
        "durationMinutes": 15,
        "description": "Latihan 10 soal pertama ngenani tegese gurit, parafrase, pitutur luhur, lan paraga wayang Pandhawa.",
        "questions": [
          {
            "id": 1,
            "question": "Tembung 'geguritan' asale saka tembung lingga (kata dasar) 'gurit'. Tegese tembung 'gurit' yaiku ...",
            "options": [
              "Tulisan, kidung, utawa corekan endah",
              "Lelagon tembang dolanan bocah",
              "Critane para dewa ing kahyangan",
              "Sesorah ing sangarepe wong akeh"
            ],
            "correctIndex": 0,
            "hint": "Gurit tegese corekan, tulisan, utawa tembang kidung.",
            "explanation": "Geguritan asale saka tembung 'gurit' kang tegese tulisan, kidung, utawa reriptan endah."
          },
          {
            "id": 2,
            "question": "Gatekna trap-trapan parafrase geguritan iki:\n(1) Negesi tembung-tembung kang angel\n(2) Maca geguritan kanthi bola-bali nganti paham\n(3) Ngronce dadi ukara gancaran mawa basane dhewe\nUrutan trap-trapan (langkah-langkah) parafrase geguritan kang trep yaiku ...",
            "options": [
              "(1) - (2) - (3)",
              "(2) - (1) - (3)",
              "(3) - (1) - (2)",
              "(2) - (3) - (1)"
            ],
            "correctIndex": 1,
            "hint": "Wiwiti kanthi maca bola-bali, banjur golek teges tembung angel, pungkasan ditulis mawa basa gancaran.",
            "explanation": "Urutane parafrase yaiku maca dhisik (2), negesi tembung angel (1), banjur diowahi dadi gancaran (3)."
          },
          {
            "id": 3,
            "question": "Titikan (ciri-ciri) geguritan gagrak anyar (modern) ing kasusastran Jawa yaiku ...",
            "options": [
              "Kudu diwiwiti nganggo ukara 'Sun gegurit'",
              "Ora kaiket dening guru gatra, guru wilangan, lan guru lagu",
              "Cacahe larik ing saben pada kudu padha",
              "Kudu ditembangake nganggo titi laras pelog"
            ],
            "correctIndex": 1,
            "hint": "Geguritan anyar sifate bebas (puisi bebas Jawa).",
            "explanation": "Geguritan gagrak anyar bebas, yaiku ora kaiket paugeran guru gatra, guru wilangan, lan guru lagu."
          },
          {
            "id": 4,
            "question": "Wacanen pethikan geguritan iki:\n'Saben esuk aku jumangkah\nNggendhong tas kebak buku lan potlot\nMenyang papan nggayuh pepadhang\nSinau bebarengan para kanca'\nTema kang diusung ing geguritan kasebut yaiku ...",
            "options": [
              "Budi pekerti marang wong tuwa",
              "Sekolah lan golek ngelmu",
              "Tetanen ing sawah",
              "Kerja bakti desa"
            ],
            "correctIndex": 1,
            "hint": "Tembung 'tas buku potlot' lan 'sinau' nuduhake swasana sekolah.",
            "explanation": "Geguritan kasebut nyritakake babagan budhal sekolah golek ngelmu bebarengan kanca."
          },
          {
            "id": 5,
            "question": "Adhedhasar pethikan geguritan ing dhuwur, pranyatan ing ngisor iki kang BUKAN piwulang/pesan geguritan yaiku ...",
            "options": [
              "Bocah sekolah kudu sregep sinau",
              "Sekolah minangka papan golek pepadhang lan ngelmu",
              "Bocah sekolah kudu males tangi esuk",
              "Kudu rukun sinau bebarengan kanca"
            ],
            "correctIndex": 2,
            "hint": "Pilihen pranyatan kang ala utawa ora mathuk karo isine geguritan.",
            "explanation": "'Bocah sekolah kudu males tangi esuk' cetha dudu piwulang kang becik saka geguritan."
          },
          {
            "id": 6,
            "question": "Geguritan kang nyritakake rasa tresna lan pangorbanane bapa biyung anggone nggulawentah anak nganti dadi manungsa utama ngemot amanat luhur, yaiku ...",
            "options": [
              "Anak kudu wani mbantah dhawuhe wong tuwa",
              "Anak kudu bekti, manut, lan tansah ngurmati wong tuwane",
              "Wong tuwa kudu ditilar nalika wis tuwa",
              "Anak ora perlu ndongakake bapa biyunge"
            ],
            "correctIndex": 1,
            "hint": "Bapa biyung minangka pepundhen kang kudu dibekteni.",
            "explanation": "Amanat luhure yaiku anak kudu tansah bekti, manut pitutur, lan ngurmati wong tuwa."
          },
          {
            "id": 7,
            "question": "Prabu Puntadewa (Raden Yudhistira) kawentar kanthi sesebutan 'Satriya Getih Putih' amarga ...",
            "options": [
              "Seneng perang numpes mungsuh",
              "Atine suci resik, sabar, lan ora nate goroh (ngapusi) sajroning uripe",
              "Wernane awake pancen putih kabeh",
              "Keturunan jin lan dewa kahyangan"
            ],
            "correctIndex": 1,
            "hint": "Getih putih nglambangake watak kang suci lan ora nate duwe niat ala utawa ngapusi.",
            "explanation": "Puntadewa sinebut getih putih amarga atine resik suci, luhur bebudene, sabar, lan ora nate ngapusi."
          },
          {
            "id": 8,
            "question": "Satriya ing Madukara kang kondhang bagus rupane, alus budine, sarta prigel banget anggone nggunakake panah yaiku ...",
            "options": [
              "Raden Werkudara",
              "Raden Janaka (Arjuna)",
              "Raden Nakula",
              "Raden Sadewa"
            ],
            "correctIndex": 1,
            "hint": "Arjuna utawa Janaka satriya ing Madukara kanthi pusaka Panah Pasopati.",
            "explanation": "Raden Janaka (Arjuna) yaiku satriya Madukara kang prigel manah."
          },
          {
            "id": 9,
            "question": "Putra pembarep (anak nomer siji / anak tertua) saka kulawarga Pandhawa Lima yaiku ...",
            "options": [
              "Raden Werkudara",
              "Raden Puntadewa (Yudhistira)",
              "Raden Janaka",
              "Raden Sadewa"
            ],
            "correctIndex": 1,
            "hint": "Urutane: Puntadewa, Werkudara, Janaka, Nakula, Sadewa.",
            "explanation": "Pembarepe Pandhawa yaiku Raden Puntadewa utawa Yudhistira."
          },
          {
            "id": 10,
            "question": "Ing pagelaran wayang kulit, wadhah kothak kayu papan nyimpen wayang kang asring dithuthuk cempala dening dhalang diarani ...",
            "options": [
              "Kelir",
              "Kothak wayang",
              "Blencong",
              "Debog"
            ],
            "correctIndex": 1,
            "hint": "Kothak iki digawe saka kayu jati kanggo papan simpen wayang.",
            "explanation": "Kothak wayang yaiku wadhah wayang kang uga dithuthuk dhalang nganggo cempala kanggo ngiringi swasana."
          }
        ]
      },
      {
        "id": "jawa-2",
        "title": "Bagean 2: Tradisi Adat & Aksara Jawa (No. 11-20)",
        "difficulty": "Tantangan",
        "targetKelas": "Kelas 4 SD",
        "durationMinutes": 15,
        "description": "Latihan 10 soal kapindho ngenani tradisi daur hidup Jawa, kosa kata surup, lan sandhangan aksara Jawa.",
        "questions": [
          {
            "id": 11,
            "question": "Wong kang duwe jejibahan nuthuk utawa nabuh gamelan ing pagelaran wayang diarani ...",
            "options": [
              "Dhalang",
              "Pesindhen / Swarawati",
              "Niyaga / Pengrawit",
              "Wiraswara"
            ],
            "correctIndex": 2,
            "hint": "Dhalang sing mainake wayang, sindhen sing nembang, penabuh gamelan arane niyaga.",
            "explanation": "Niyaga utawa pengrawit yaiku sebutan kanggo wong kang nabuh gamelan Jawa."
          },
          {
            "id": 12,
            "question": "Trap-trapan (langkah-langkah) nemtokake ide pokok paragraf kang bener yaiku ...",
            "options": [
              "Maca kabeh paragraf kanthi setiti, nemtokake ukara baku (utama), banjur ngrumusake ide pokoke",
              "Mung maca ukara pungkasan thok",
              "Ngetung gunggunge tembung ing saben larik",
              "Milih ukara sing paling dawa ukurane"
            ],
            "correctIndex": 0,
            "hint": "Ide pokok digoleki kanthi maca paragraf sakutuh banjur nemokake ukara utamane.",
            "explanation": "Langkah nemtokake ide pokok: maca setiti, golek ukara utama, banjur nyimpulake ide pokoke."
          },
          {
            "id": 13,
            "question": "Wacan kang isine nampilake informasi adhedhasar fakta, data, kedadeyan nyata, lan ora ngemot unsur fiksi diarani jinis teks ...",
            "options": [
              "Teks crita dongeng",
              "Teks geguritan fiksi",
              "Teks informasi / nonsastra",
              "Teks tembang macapat"
            ],
            "correctIndex": 2,
            "hint": "Nonsastra tegese wacan adhedhasar fakta lan data nyata.",
            "explanation": "Teks informasi/nonsastra yaiku wacan kang adhedhasar kahanan nyata utawa fakta."
          },
          {
            "id": 14,
            "question": "Gatekna tradisi daur hidup ing kabudayan Jawa iki:\n(1) Tedhak Siten - Tradisi upacara mudhun lemah nalika bocah umur 7 selapan\n(2) Mitoni - Tradisi selamatan nalika calon ibu ngandhut umur 7 wulan\nKombinasi pranyatan kasebut yaiku ...",
            "options": [
              "(1) Bener lan (2) Bener",
              "(1) Bener lan (2) Salah",
              "(1) Salah lan (2) Bener",
              "(1) Salah lan (2) Salah"
            ],
            "correctIndex": 0,
            "hint": "Tedhak siten = mudhun lemah, Mitoni = pitung wulanan kandhutan.",
            "explanation": "Kalorone bener. Tedhak siten yaiku mudhun lemah, mitoni yaiku selamatan 7 wulan kandhutan."
          },
          {
            "id": 15,
            "question": "'Aja dolan nganti surup, enggal mulih menyang omah!' Tembung 'surup' ing ukara kasebut nduweni teges ...",
            "options": [
              "Wayah esuk nalika srengenge njedhul",
              "Wayah awan nalika srengenge pas ing dhuwur sirah",
              "Wayah sore nalika srengenge wis meh ambles / maghrib",
              "Wayah tengah wengi sepi"
            ],
            "correctIndex": 2,
            "hint": "Surup iku wayah sandyakala utawa wektu sore meh bengi.",
            "explanation": "Surup tegese wayah sore nalika srengenge wis ambles mlebu wanci maghrib."
          },
          {
            "id": 16,
            "question": "Sandhangan Aksara Jawa kang gunane kanggo panyigeg wanda (mateni swara konsonan ing pungkasan suku kata) kayata wignyan, layar, cecak, lan pangkon diarani ...",
            "options": [
              "Sandhangan swara",
              "Sandhangan panyigeg wanda",
              "Sandhangan wyanjana",
              "Aksara murda"
            ],
            "correctIndex": 1,
            "hint": "Panyigeg tegese panutup / pemati swara konsonan.",
            "explanation": "Sandhangan panyigeg wanda yaiku sandhangan kanggo mateni wanda (cecak /ng/, layar /r/, wignyan /h/, pangkon)."
          },
          {
            "id": 17,
            "question": "Cacahe Aksara Jawa baku (aksara legena / dentawyanjana) kang durung kawuwuhan sandhangan ana ...",
            "options": [
              "15 aksara",
              "20 aksara",
              "25 aksara",
              "30 aksara"
            ],
            "correctIndex": 1,
            "hint": "Wiwit saka Ha Na Ca Ra Ka nganti Nga ana rong puluh aksara.",
            "explanation": "Aksara Jawa legena cacahe ana 20 (Ha, Na, Ca, Ra, Ka, Da, Ta, Sa, Wa, La, Pa, Dha, Ja, Ya, Nya, Ma, Ga, Ba, Tha, Nga)."
          },
          {
            "id": 18,
            "question": "Sandhangan swara kang digunakake kanggo ngowahi swara vokal aksara legena dadi swara vokal 'u' yaiku ...",
            "options": [
              "Wulu",
              "Suku",
              "Taling",
              "Pepet"
            ],
            "correctIndex": 1,
            "hint": "Wulu kanggo i, Suku kanggo u, Taling kanggo e, Pepet kanggo e pepet.",
            "explanation": "Sandhangan 'suku' manggon ing sangisore aksara kanggo swara vokal 'u'."
          },
          {
            "id": 19,
            "question": "Sandhangan wyanjana kang digunakake kanggo nyisipi swara /ra/ (tuladhane nulis tembung 'krasa' utawa 'prabu') diarani ...",
            "options": [
              "Cakra",
              "Keret",
              "Pengkal",
              "Wignyan"
            ],
            "correctIndex": 0,
            "hint": "Cakra sesulih ra, keret sesulih re, pengkal sesulih ya.",
            "explanation": "Sandhangan wyanjana panyisip swara 'ra' yaiku cakra."
          },
          {
            "id": 20,
            "question": "Frasa Aksara Jawa kang kasusun saka aksara 'Ta' kawuwuhan suku (Tu), 'Ka' kawuwuhan suku (Ku), 'Ro' kawuwuhan taling tarung, lan 'Ti' kawuwuhan wulu (Tuku Roti). Yen disalin menyang aksara Latin unine ...",
            "options": [
              "Tuku wedhi",
              "Tuku roti",
              "Susu sapi",
              "Buku tulis"
            ],
            "correctIndex": 1,
            "hint": "Tu-ku Ro-ti.",
            "explanation": "Aksara kasebut diwaca 'Tuku roti'."
          }
        ]
      }
    ]
  },
  {
    "id": "seni_rupa",
    "name": "Seni Rupa",
    "shortDesc": "Menggambar Sketsa, Karakteristik Alat & Bahan, Karya 2D & 3D, Unsur Seni, dan Prosedur Berkarya.",
    "icon": "🎨",
    "themeColor": "tosca",
    "gradient": "from-teal-600 via-cyan-600 to-teal-500",
    "bgPattern": "bg-teal-50",
    "badge": "Kelas IV / Semester I",
    "kisiKisi": [
      {
        "no": 1,
        "bab": "Menggambar Sketsa",
        "materi": "Tahapan Membuat Sketsa Awal",
        "indikator": "Murid dapat menentukan kertas yang cocok untuk membuat sketsa.",
        "level": "L2",
        "bentuk": "PG"
      },
      {
        "no": 2,
        "bab": "Menggambar Sketsa",
        "materi": "Referensi Berbagai Jenis Sketsa",
        "indikator": "Murid dapat memahami pemakaian pakaian formal.",
        "level": "L1",
        "bentuk": "PG"
      },
      {
        "no": 3,
        "bab": "Menggambar Sketsa",
        "materi": "Tahapan Membuat Sketsa Awal",
        "indikator": "Disajikan deskripsi/gambar, murid dapat menentukan nama pakaian penduduk dunia yang dijadikan sumber ide pembuatan sketsa.",
        "level": "L2",
        "bentuk": "PG"
      },
      {
        "no": 4,
        "bab": "Menggambar Sketsa",
        "materi": "Referensi Berbagai Jenis Sketsa",
        "indikator": "Disajikan pernyataan tentang berbagai jenis sketsa, murid dapat menentukan benar atau salah.",
        "level": "L3",
        "bentuk": "PG"
      },
      {
        "no": 5,
        "bab": "Menggambar Sketsa",
        "materi": "Referensi Berbagai Jenis Sketsa",
        "indikator": "Disajikan ilustrasi brosur, murid dapat mengidentifikasi jenis pakaian formal dan kasual.",
        "level": "L3",
        "bentuk": "PG"
      },
      {
        "no": 6,
        "bab": "Menelaah Karakteristik Alat dan Bahan",
        "materi": "Karakteristik Alat dan Bahan",
        "indikator": "Murid dapat memahami pengertian tanah liat.",
        "level": "L1",
        "bentuk": "PG"
      },
      {
        "no": 7,
        "bab": "Menelaah Karakteristik Alat dan Bahan",
        "materi": "Karakteristik Alat dan Bahan",
        "indikator": "Disajikan deskripsi karya seni rupa, murid dapat menganalisis bahan yang digunakan.",
        "level": "L2",
        "bentuk": "PG"
      },
      {
        "no": 8,
        "bab": "Menelaah Karakteristik Alat dan Bahan",
        "materi": "Karakteristik Alat dan Bahan",
        "indikator": "Murid dapat membedakan jenis pewarna kering dan basah.",
        "level": "L2",
        "bentuk": "PG"
      },
      {
        "no": 9,
        "bab": "Menelaah Karakteristik Alat dan Bahan",
        "materi": "Karakteristik Alat dan Bahan",
        "indikator": "Murid dapat menjodohkan jenis alat pahat dengan kegunaannya.",
        "level": "L3",
        "bentuk": "PG"
      },
      {
        "no": 10,
        "bab": "Menelaah Karakteristik Alat dan Bahan",
        "materi": "Karakteristik Karya Berdasarkan Alat dan Bahan",
        "indikator": "Disajikan tabel, murid dapat mengelompokkan karakteristik karya seni yang menggunakan pensil warna.",
        "level": "L3",
        "bentuk": "PG"
      },
      {
        "no": 11,
        "bab": "Mengkreasikan Karya Seni Rupa 2D dan 3D",
        "materi": "Lima Unsur dalam Karya Seni",
        "indikator": "Murid dapat memahami pengertian tekstur.",
        "level": "L1",
        "bentuk": "PG"
      },
      {
        "no": 12,
        "bab": "Mengkreasikan Karya Seni Rupa 2D dan 3D",
        "materi": "Prinsip Penekanan dalam Karya Seni",
        "indikator": "Disajikan pernyataan cara menciptakan penekanan dalam karya seni rupa, murid dapat menentukan benar atau salah.",
        "level": "L3",
        "bentuk": "PG"
      },
      {
        "no": 13,
        "bab": "Mengkreasikan Karya Seni Rupa 2D dan 3D",
        "materi": "Macam-macam Karya Seni Rupa Dua Dimensi",
        "indikator": "Murid dapat menentukan macam karya seni dua dimensi yang nampak pada gambar/deskripsi.",
        "level": "L2",
        "bentuk": "PG"
      },
      {
        "no": 14,
        "bab": "Mengkreasikan Karya Seni Rupa 2D dan 3D",
        "materi": "Macam-macam Karya Seni Rupa Dua Dimensi",
        "indikator": "Berdasar pernyataan, murid dapat mengelompokkan tujuan pembuatan kaligrafi.",
        "level": "L3",
        "bentuk": "PG"
      },
      {
        "no": 15,
        "bab": "Mengkreasikan Karya Seni Rupa 2D dan 3D",
        "materi": "Macam-macam Karya Seni Rupa Tiga Dimensi",
        "indikator": "Murid dapat menentukan macam karya seni tiga dimensi berdasar contoh karyanya.",
        "level": "L2",
        "bentuk": "PG"
      },
      {
        "no": 16,
        "bab": "Mengkreasikan Karya Seni Rupa 2D dan 3D",
        "materi": "Macam-macam Karya Seni Rupa Tiga Dimensi",
        "indikator": "Murid dapat menjodohkan seni tiga dimensi dengan contoh karyanya.",
        "level": "L3",
        "bentuk": "PG"
      },
      {
        "no": 17,
        "bab": "Mengkreasikan Karya Seni Rupa 2D dan 3D",
        "materi": "Prosedur Penggunaan Bahan",
        "indikator": "Berdasarkan pernyataan, murid dapat menentukan jenis perekat yang digunakan.",
        "level": "L2",
        "bentuk": "PG"
      },
      {
        "no": 18,
        "bab": "Mengkreasikan Karya Seni Rupa 2D dan 3D",
        "materi": "Prosedur Penggunaan Bahan",
        "indikator": "Disajikan pernyataan teknik mewarnai menggunakan krayon, murid dapat menentukan benar atau salah.",
        "level": "L3",
        "bentuk": "PG"
      },
      {
        "no": 19,
        "bab": "Mengkreasikan Karya Seni Rupa 2D dan 3D",
        "materi": "Prosedur Penggunaan Bahan",
        "indikator": "Murid dapat menentukan teknik mewarnai menggunakan cat air dengan tepat.",
        "level": "L2",
        "bentuk": "PG"
      },
      {
        "no": 20,
        "bab": "Mengkreasikan Karya Seni Rupa 2D dan 3D",
        "materi": "Prosedur Penggunaan Alat",
        "indikator": "Murid dapat memahami teknik menggunakan cutter secara aman.",
        "level": "L2",
        "bentuk": "PG"
      }
    ],
    "packages": [
      {
        "id": "seni-full",
        "title": "Paket Lengkap ASAS 1 (20 Soal Sesuai Kisi-Kisi)",
        "difficulty": "L1, L2 & L3 (Lengkap)",
        "targetKelas": "Kelas 4 SD",
        "durationMinutes": 30,
        "description": "20 Soal Pilihan Ganda lengkap mencakup Bab Menggambar Sketsa, Karakteristik Alat/Bahan, dan Karya 2D & 3D.",
        "questions": [
          {
            "id": 1,
            "question": "Ketika seorang pelukis atau perancang akan membuat sketsa awal gambar menggunakan pensil, jenis kertas yang paling cocok digunakan adalah ...",
            "options": [
              "Kertas minyak yang sangat licin",
              "Kertas HVS atau buku gambar berserat sedang yang mudah dihapus",
              "Kertas kardus bergelombang tebal",
              "Kertas kado bermotif mengilap"
            ],
            "correctIndex": 1,
            "hint": "Sketsa awal butuh kertas yang nyaman digores pensil dan mudah diperbaiki jika salah.",
            "explanation": "Kertas HVS atau buku gambar (drawing paper) memiliki ketebalan dan serat sedang yang ideal untuk goresan pensil sketsa."
          },
          {
            "id": 2,
            "question": "Pakaian formal merupakan jenis pakaian yang dikenakan untuk menghadiri acara resmi seperti upacara bendera atau resepsi formal. Contoh pakaian formal adalah ...",
            "options": [
              "Kaos oblong dan celana pendek pantai",
              "Baju piyama tidur",
              "Kemeja batik rapi atau setelan jas lengkap",
              "Baju renang"
            ],
            "correctIndex": 2,
            "hint": "Pakaian formal berkerah, sopan, dan rapi.",
            "explanation": "Kemeja batik resmi atau jas lengkap merupakan contoh pakaian formal untuk acara resmi."
          },
          {
            "id": 3,
            "question": "Lani ingin membuat sketsa desain pakaian tradisional penduduk dunia berupa gaun panjang lurus yang diikat dengan kain obi lebar di pinggang. Pakaian khas tradisional dari negara Jepang tersebut dinamakan ...",
            "options": [
              "Hanbok",
              "Kimono",
              "Sari",
              "Kebaya"
            ],
            "correctIndex": 1,
            "hint": "Pakaian tradisional khas negara sakura Jepang dengan obi di pinggang.",
            "explanation": "Kimono adalah pakaian tradisional dari Jepang yang dilengkapi dengan sabuk kain lebar (obi)."
          },
          {
            "id": 4,
            "question": "Perhatikan pernyataan tentang sketsa berikut:\n'Sketsa adalah gambar rancangan kasar yang dibuat secara cepat berupa garis-garis sederhana sebelum disempurnakan menjadi karya jadi.'\nPernyataan tersebut bernilai ...",
            "options": [
              "Benar",
              "Salah",
              "Ragu-ragu",
              "Tidak bermakna"
            ],
            "correctIndex": 0,
            "hint": "Sketsa adalah gambar awal yang belum detail untuk menuangkan ide awal.",
            "explanation": "Pernyataan tersebut BENAR. Sketsa adalah rancangan awal garis sederhana sebagai panduan sebelum karya diselesaikan."
          },
          {
            "id": 5,
            "question": "Di sebuah toko pakaian terdapat brosur katalog: (1) Setelan kaos santai bergambar, (2) Kemeja putih lengan panjang berdasi, (3) Celana jeans robek, (4) Baju blazer formal. Kelompok pakaian formal ditunjukkan oleh nomor ...",
            "options": [
              "(1) dan (3)",
              "(2) dan (4)",
              "(1) dan (2)",
              "(3) dan (4)"
            ],
            "correctIndex": 1,
            "hint": "Kemeja berdasi dan blazer merupakan pakaian resmi/formal.",
            "explanation": "Nomor (2) kemeja berdasi dan (4) blazer formal adalah pakaian resmi. Kaos dan jeans robek tergolong kasual santai."
          },
          {
            "id": 6,
            "question": "Tanah liat merupakan salah satu bahan utama dalam pembuatan karya seni rupa tiga dimensi. Pengertian tanah liat yang tepat adalah ...",
            "options": [
              "Bahan keras dari logam yang dipanaskan",
              "Bahan lunak alami yang bersifat plastis dan mudah dibentuk saat basah",
              "Bahan sintetis dari serat plastik pabrik",
              "Bahan cair yang mengering seperti kaca bening"
            ],
            "correctIndex": 1,
            "hint": "Tanah liat bersifat plastis (liat) sehingga mudah dipijat dan dibentuk menjadi vas atau gerabah.",
            "explanation": "Tanah liat adalah bahan alami lunak bersifat plastis yang mudah dibentuk menjadi aneka gerabah dan patung."
          },
          {
            "id": 7,
            "question": "Perhatikan deskripsi karya: 'Sebuah vas bunga pajangan memiliki permukaan halus mengilap setelah dibakar dalam tungku bersuhu tinggi dan dilapisi glasir.' Bahan utama pembuatan vas tersebut adalah ...",
            "options": [
              "Kayu jati",
              "Tanah liat (keramik)",
              "Batu kali",
              "Plastik bekas"
            ],
            "correctIndex": 1,
            "hint": "Karya yang dibakar dalam tungku dan dilapisi glasir adalah seni keramik berbahan tanah liat.",
            "explanation": "Tanah liat yang dibakar dalam tungku tinggi dan diberi glasir akan menghasilkan keramik yang halus mengilap."
          },
          {
            "id": 8,
            "question": "Pewarna dalam seni rupa dibedakan menjadi pewarna kering dan pewarna basah. Pasangan pewarna kering yang tepat di bawah ini adalah ...",
            "options": [
              "Pensil warna dan krayon",
              "Cat minyak dan cat air",
              "Cat poster dan tinta cina",
              "Cat akrilik dan spidol cair"
            ],
            "correctIndex": 0,
            "hint": "Pewarna kering tidak memerlukan air atau minyak sebagai pengencer.",
            "explanation": "Pensil warna, pastel, dan krayon adalah kelompok media pewarna kering."
          },
          {
            "id": 9,
            "question": "Dalam seni kriya memahat kayu, alat pahat yang memiliki mata melengkung seperti kuku manusia dinamakan pahat penguku (kol). Fungsi utama pahat penguku adalah ...",
            "options": [
              "Meratakan bidang datar",
              "Mengerjakan bidang cekung, cembung, atau lengkungan ukiran",
              "Membuat lubang siku tegak lurus",
              "Memotong kayu gelondongan"
            ],
            "correctIndex": 1,
            "hint": "Bentuk lengkung seperti kuku cocok untuk mengukir bidang cekung dan lengkung.",
            "explanation": "Pahat penguku berbentuk lengkung kuku digunakan untuk memahat bagian-bagian lengkung, cekung, dan cembung."
          },
          {
            "id": 10,
            "question": "Perhatikan karakteristik pewarna:\n(1) Hasil goresan halus dan detail\n(2) Mudah dicampur menghasilkan gradasi tipis\n(3) Tidak memerlukan waktu pengeringan\nAlat pewarna yang memiliki karakteristik tersebut adalah ...",
            "options": [
              "Pensil warna",
              "Cat minyak",
              "Cat air pekat",
              "Tinta bak"
            ],
            "correctIndex": 0,
            "hint": "Pensil warna kering, dapat diarsir halus dan detail tanpa menunggu kering.",
            "explanation": "Pensil warna menghasilkan detail garis presisi, tidak basah, dan praktis digunakan."
          },
          {
            "id": 11,
            "question": "Unsur seni rupa yang menunjukkan nilai raba dari suatu permukaan benda (apakah terasa halus, kasar, licin, atau bergelombang saat disentuh) disebut ...",
            "options": [
              "Titik",
              "Garis",
              "Tekstur",
              "Bidang"
            ],
            "correctIndex": 2,
            "hint": "Nilai raba permukaan suatu benda dinamakan tekstur.",
            "explanation": "Tekstur adalah sifat dan keadaan suatu permukaan bidang yang dapat dirasakan melalui indra peraba atau penglihatan."
          },
          {
            "id": 12,
            "question": "Salah satu cara menciptakan prinsip penekanan (center of interest) pada lukisan agar mata penonton langsung tertuju pada objek utama adalah membuat objek utama tersebut memiliki warna yang paling kontras atau ukuran paling menonjol dibandingkan latar belakangnya. Pernyataan ini ...",
            "options": [
              "Benar",
              "Salah",
              "Tidak ada pengaruhnya",
              "Keliru"
            ],
            "correctIndex": 0,
            "hint": "Penekanan (klimaks gambar) dibuat dengan kontras warna atau ukuran objek yang lebih menonjol.",
            "explanation": "Pernyataan BENAR. Prinsip penekanan diciptakan dengan kontras warna, ukuran, atau letak agar menjadi pusat perhatian."
          },
          {
            "id": 13,
            "question": "Karya seni rupa dua dimensi yang dibuat dengan menempelkan potongan-potongan kertas, kain, atau bahan alam pada bidang gambar hingga membentuk pola indah dinamakan ...",
            "options": [
              "Patung",
              "Kolase",
              "Gerabah",
              "Relief"
            ],
            "correctIndex": 1,
            "hint": "Menempelkan bahan seperti kertas warna, dedaunan, atau biji-bijian di atas kertas.",
            "explanation": "Kolase adalah karya seni dua dimensi yang menggunakan teknik menempel berbagai bahan pada permukaan gambar."
          },
          {
            "id": 14,
            "question": "Seni kaligrafi Arab atau aksara indah banyak dijumpai pada dinding masjid dan hiasan dinding rumah. Tujuan utama pembuatan seni kaligrafi adalah ...",
            "options": [
              "Membuat pembaca merasa bingung",
              "Menampilkan keindahan estetis bentuk tulisan sekaligus menyampaikan pesan kebajikan rohani",
              "Menghabiskan persediaan tinta lukis",
              "Menggantikan fungsi lampu ruangan"
            ],
            "correctIndex": 1,
            "hint": "Kaligrafi memadukan keindahan seni tulis dan makna kata spiritual.",
            "explanation": "Kaligrafi bertujuan memadukan keindahan estetika tulisan indah dan penyampaian pesan keagamaan atau moral."
          },
          {
            "id": 15,
            "question": "Karya seni rupa yang memiliki tiga ukuran yaitu panjang, lebar, dan tinggi (volume) serta dapat dinikmati dari berbagai arah pandang adalah ...",
            "options": [
              "Lukisan cat air di kanvas",
              "Foto pemandangan alam",
              "Patung pahlawan dari perunggu",
              "Gambar poster di kertas"
            ],
            "correctIndex": 2,
            "hint": "Patung memiliki ruang dan volume tiga dimensi nyata.",
            "explanation": "Patung perunggu adalah contoh karya seni tiga dimensi yang memiliki ruang dan volume nyata."
          },
          {
            "id": 16,
            "question": "Pasangan karya seni rupa tiga dimensi dan contoh bentuknya yang paling tepat adalah ...",
            "options": [
              "Seni Kriya Anyaman 3D - Keranjang bambu serbaguna",
              "Seni Grafis - Lemari pakaian",
              "Lukisan - Patung kuda",
              "Seni Mozaik - Meja kayu balok"
            ],
            "correctIndex": 0,
            "hint": "Keranjang bambu adalah karya anyaman 3D yang memiliki ruang penyimpanan.",
            "explanation": "Keranjang bambu adalah contoh nyata seni kriya anyam 3 dimensi."
          },
          {
            "id": 17,
            "question": "Ketika membuat maket rumah miniatur dari bahan stik es krim dan kardus tebal, jenis perekat yang paling kuat dan cocok digunakan adalah ...",
            "options": [
              "Air bersih",
              "Lem kayu (PVAc) atau lem tembak (hot glue)",
              "Minyak goreng",
              "Tepung basah"
            ],
            "correctIndex": 1,
            "hint": "Lem kayu atau lem tembak memiliki daya rekat kuat pada kayu dan kardus.",
            "explanation": "Lem kayu (PVAc) atau lem tembak sangat kuat merekatkan permukaan stik kayu dan kardus tebal."
          },
          {
            "id": 18,
            "question": "Teknik mewarnai gambar dengan krayon yang memadukan warna gelap ke warna terang secara berangsur-angsur (misalnya biru tua, biru muda, lalu putih) disebut teknik gradasi. Pernyataan tersebut bernilai ...",
            "options": [
              "Benar",
              "Salah",
              "Ragu-ragu",
              "Kurang tepat"
            ],
            "correctIndex": 0,
            "hint": "Gradasi adalah percampuran peralihan warna dari gelap ke terang atau sebaliknya.",
            "explanation": "Pernyataan BENAR. Teknik gradasi memadukan warna secara halus bertingkat dari gelap ke terang."
          },
          {
            "id": 19,
            "question": "Teknik mewarnai dengan cat air menggunakan sapuan warna yang encer, tipis, dan tembus pandang (transparan) sehingga warna dasar kertas masih terlihat dinamakan teknik ...",
            "options": [
              "Aquarel",
              "Plakat",
              "Arsir tebal",
              "Pointilis"
            ],
            "correctIndex": 0,
            "hint": "Sapuan cat air tipis dan transparan disebut aquarel.",
            "explanation": "Teknik aquarel adalah teknik melukis cat air dengan sapuan warna transparan dan basah."
          },
          {
            "id": 20,
            "question": "Saat menggunakan pisau cutter untuk memotong kertas karton tebal, prosedur keselamatan kerja yang paling tepat adalah ...",
            "options": [
              "Menggerakkan mata pisau ke arah tubuh sendiri secara cepat",
              "Memotong menjauhi tubuh, menggunakan mistar penggaris besi, dan meletakkan alas potong",
              "Menggunakan mata pisau yang sudah berkarat dan tumpul",
              "Bercanda sambil mengayunkan pisau cutter di dekat teman"
            ],
            "correctIndex": 1,
            "hint": "Selalu potong menjauhi jari dan badan, serta gunakan alas pelindung.",
            "explanation": "Keselamatan memakai cutter: arah potongan menjauhi tubuh, memakai penggaris besi, serta ada alas potong agar meja tidak rusak."
          }
        ]
      },
      {
        "id": "seni-1",
        "title": "Bagian 1: Sketsa & Karakteristik Alat Bahan (No. 1-10)",
        "difficulty": "Mudah - Sedang",
        "targetKelas": "Kelas 4 SD",
        "durationMinutes": 15,
        "description": "Latihan 10 soal pertama mengenai tahapan sketsa, busana formal/kasual, tanah liat, dan pensil warna.",
        "questions": [
          {
            "id": 1,
            "question": "Ketika seorang pelukis atau perancang akan membuat sketsa awal gambar menggunakan pensil, jenis kertas yang paling cocok digunakan adalah ...",
            "options": [
              "Kertas minyak yang sangat licin",
              "Kertas HVS atau buku gambar berserat sedang yang mudah dihapus",
              "Kertas kardus bergelombang tebal",
              "Kertas kado bermotif mengilap"
            ],
            "correctIndex": 1,
            "hint": "Sketsa awal butuh kertas yang nyaman digores pensil dan mudah diperbaiki jika salah.",
            "explanation": "Kertas HVS atau buku gambar (drawing paper) memiliki ketebalan dan serat sedang yang ideal untuk goresan pensil sketsa."
          },
          {
            "id": 2,
            "question": "Pakaian formal merupakan jenis pakaian yang dikenakan untuk menghadiri acara resmi seperti upacara bendera atau resepsi formal. Contoh pakaian formal adalah ...",
            "options": [
              "Kaos oblong dan celana pendek pantai",
              "Baju piyama tidur",
              "Kemeja batik rapi atau setelan jas lengkap",
              "Baju renang"
            ],
            "correctIndex": 2,
            "hint": "Pakaian formal berkerah, sopan, dan rapi.",
            "explanation": "Kemeja batik resmi atau jas lengkap merupakan contoh pakaian formal untuk acara resmi."
          },
          {
            "id": 3,
            "question": "Lani ingin membuat sketsa desain pakaian tradisional penduduk dunia berupa gaun panjang lurus yang diikat dengan kain obi lebar di pinggang. Pakaian khas tradisional dari negara Jepang tersebut dinamakan ...",
            "options": [
              "Hanbok",
              "Kimono",
              "Sari",
              "Kebaya"
            ],
            "correctIndex": 1,
            "hint": "Pakaian tradisional khas negara sakura Jepang dengan obi di pinggang.",
            "explanation": "Kimono adalah pakaian tradisional dari Jepang yang dilengkapi dengan sabuk kain lebar (obi)."
          },
          {
            "id": 4,
            "question": "Perhatikan pernyataan tentang sketsa berikut:\n'Sketsa adalah gambar rancangan kasar yang dibuat secara cepat berupa garis-garis sederhana sebelum disempurnakan menjadi karya jadi.'\nPernyataan tersebut bernilai ...",
            "options": [
              "Benar",
              "Salah",
              "Ragu-ragu",
              "Tidak bermakna"
            ],
            "correctIndex": 0,
            "hint": "Sketsa adalah gambar awal yang belum detail untuk menuangkan ide awal.",
            "explanation": "Pernyataan tersebut BENAR. Sketsa adalah rancangan awal garis sederhana sebagai panduan sebelum karya diselesaikan."
          },
          {
            "id": 5,
            "question": "Di sebuah toko pakaian terdapat brosur katalog: (1) Setelan kaos santai bergambar, (2) Kemeja putih lengan panjang berdasi, (3) Celana jeans robek, (4) Baju blazer formal. Kelompok pakaian formal ditunjukkan oleh nomor ...",
            "options": [
              "(1) dan (3)",
              "(2) dan (4)",
              "(1) dan (2)",
              "(3) dan (4)"
            ],
            "correctIndex": 1,
            "hint": "Kemeja berdasi dan blazer merupakan pakaian resmi/formal.",
            "explanation": "Nomor (2) kemeja berdasi dan (4) blazer formal adalah pakaian resmi. Kaos dan jeans robek tergolong kasual santai."
          },
          {
            "id": 6,
            "question": "Tanah liat merupakan salah satu bahan utama dalam pembuatan karya seni rupa tiga dimensi. Pengertian tanah liat yang tepat adalah ...",
            "options": [
              "Bahan keras dari logam yang dipanaskan",
              "Bahan lunak alami yang bersifat plastis dan mudah dibentuk saat basah",
              "Bahan sintetis dari serat plastik pabrik",
              "Bahan cair yang mengering seperti kaca bening"
            ],
            "correctIndex": 1,
            "hint": "Tanah liat bersifat plastis (liat) sehingga mudah dipijat dan dibentuk menjadi vas atau gerabah.",
            "explanation": "Tanah liat adalah bahan alami lunak bersifat plastis yang mudah dibentuk menjadi aneka gerabah dan patung."
          },
          {
            "id": 7,
            "question": "Perhatikan deskripsi karya: 'Sebuah vas bunga pajangan memiliki permukaan halus mengilap setelah dibakar dalam tungku bersuhu tinggi dan dilapisi glasir.' Bahan utama pembuatan vas tersebut adalah ...",
            "options": [
              "Kayu jati",
              "Tanah liat (keramik)",
              "Batu kali",
              "Plastik bekas"
            ],
            "correctIndex": 1,
            "hint": "Karya yang dibakar dalam tungku dan dilapisi glasir adalah seni keramik berbahan tanah liat.",
            "explanation": "Tanah liat yang dibakar dalam tungku tinggi dan diberi glasir akan menghasilkan keramik yang halus mengilap."
          },
          {
            "id": 8,
            "question": "Pewarna dalam seni rupa dibedakan menjadi pewarna kering dan pewarna basah. Pasangan pewarna kering yang tepat di bawah ini adalah ...",
            "options": [
              "Pensil warna dan krayon",
              "Cat minyak dan cat air",
              "Cat poster dan tinta cina",
              "Cat akrilik dan spidol cair"
            ],
            "correctIndex": 0,
            "hint": "Pewarna kering tidak memerlukan air atau minyak sebagai pengencer.",
            "explanation": "Pensil warna, pastel, dan krayon adalah kelompok media pewarna kering."
          },
          {
            "id": 9,
            "question": "Dalam seni kriya memahat kayu, alat pahat yang memiliki mata melengkung seperti kuku manusia dinamakan pahat penguku (kol). Fungsi utama pahat penguku adalah ...",
            "options": [
              "Meratakan bidang datar",
              "Mengerjakan bidang cekung, cembung, atau lengkungan ukiran",
              "Membuat lubang siku tegak lurus",
              "Memotong kayu gelondongan"
            ],
            "correctIndex": 1,
            "hint": "Bentuk lengkung seperti kuku cocok untuk mengukir bidang cekung dan lengkung.",
            "explanation": "Pahat penguku berbentuk lengkung kuku digunakan untuk memahat bagian-bagian lengkung, cekung, dan cembung."
          },
          {
            "id": 10,
            "question": "Perhatikan karakteristik pewarna:\n(1) Hasil goresan halus dan detail\n(2) Mudah dicampur menghasilkan gradasi tipis\n(3) Tidak memerlukan waktu pengeringan\nAlat pewarna yang memiliki karakteristik tersebut adalah ...",
            "options": [
              "Pensil warna",
              "Cat minyak",
              "Cat air pekat",
              "Tinta bak"
            ],
            "correctIndex": 0,
            "hint": "Pensil warna kering, dapat diarsir halus dan detail tanpa menunggu kering.",
            "explanation": "Pensil warna menghasilkan detail garis presisi, tidak basah, dan praktis digunakan."
          }
        ]
      },
      {
        "id": "seni-2",
        "title": "Bagian 2: Karya 2D, 3D, Pewarnaan & Prosedur (No. 11-20)",
        "difficulty": "Sedang - Menantang",
        "targetKelas": "Kelas 4 SD",
        "durationMinutes": 15,
        "description": "Latihan 10 soal kedua mengenai tekstur, prinsip penekanan, kolase, patung, teknik aquarel, dan keselamatan cutter.",
        "questions": [
          {
            "id": 11,
            "question": "Unsur seni rupa yang menunjukkan nilai raba dari suatu permukaan benda (apakah terasa halus, kasar, licin, atau bergelombang saat disentuh) disebut ...",
            "options": [
              "Titik",
              "Garis",
              "Tekstur",
              "Bidang"
            ],
            "correctIndex": 2,
            "hint": "Nilai raba permukaan suatu benda dinamakan tekstur.",
            "explanation": "Tekstur adalah sifat dan keadaan suatu permukaan bidang yang dapat dirasakan melalui indra peraba atau penglihatan."
          },
          {
            "id": 12,
            "question": "Salah satu cara menciptakan prinsip penekanan (center of interest) pada lukisan agar mata penonton langsung tertuju pada objek utama adalah membuat objek utama tersebut memiliki warna yang paling kontras atau ukuran paling menonjol dibandingkan latar belakangnya. Pernyataan ini ...",
            "options": [
              "Benar",
              "Salah",
              "Tidak ada pengaruhnya",
              "Keliru"
            ],
            "correctIndex": 0,
            "hint": "Penekanan (klimaks gambar) dibuat dengan kontras warna atau ukuran objek yang lebih menonjol.",
            "explanation": "Pernyataan BENAR. Prinsip penekanan diciptakan dengan kontras warna, ukuran, atau letak agar menjadi pusat perhatian."
          },
          {
            "id": 13,
            "question": "Karya seni rupa dua dimensi yang dibuat dengan menempelkan potongan-potongan kertas, kain, atau bahan alam pada bidang gambar hingga membentuk pola indah dinamakan ...",
            "options": [
              "Patung",
              "Kolase",
              "Gerabah",
              "Relief"
            ],
            "correctIndex": 1,
            "hint": "Menempelkan bahan seperti kertas warna, dedaunan, atau biji-bijian di atas kertas.",
            "explanation": "Kolase adalah karya seni dua dimensi yang menggunakan teknik menempel berbagai bahan pada permukaan gambar."
          },
          {
            "id": 14,
            "question": "Seni kaligrafi Arab atau aksara indah banyak dijumpai pada dinding masjid dan hiasan dinding rumah. Tujuan utama pembuatan seni kaligrafi adalah ...",
            "options": [
              "Membuat pembaca merasa bingung",
              "Menampilkan keindahan estetis bentuk tulisan sekaligus menyampaikan pesan kebajikan rohani",
              "Menghabiskan persediaan tinta lukis",
              "Menggantikan fungsi lampu ruangan"
            ],
            "correctIndex": 1,
            "hint": "Kaligrafi memadukan keindahan seni tulis dan makna kata spiritual.",
            "explanation": "Kaligrafi bertujuan memadukan keindahan estetika tulisan indah dan penyampaian pesan keagamaan atau moral."
          },
          {
            "id": 15,
            "question": "Karya seni rupa yang memiliki tiga ukuran yaitu panjang, lebar, dan tinggi (volume) serta dapat dinikmati dari berbagai arah pandang adalah ...",
            "options": [
              "Lukisan cat air di kanvas",
              "Foto pemandangan alam",
              "Patung pahlawan dari perunggu",
              "Gambar poster di kertas"
            ],
            "correctIndex": 2,
            "hint": "Patung memiliki ruang dan volume tiga dimensi nyata.",
            "explanation": "Patung perunggu adalah contoh karya seni tiga dimensi yang memiliki ruang dan volume nyata."
          },
          {
            "id": 16,
            "question": "Pasangan karya seni rupa tiga dimensi dan contoh bentuknya yang paling tepat adalah ...",
            "options": [
              "Seni Kriya Anyaman 3D - Keranjang bambu serbaguna",
              "Seni Grafis - Lemari pakaian",
              "Lukisan - Patung kuda",
              "Seni Mozaik - Meja kayu balok"
            ],
            "correctIndex": 0,
            "hint": "Keranjang bambu adalah karya anyaman 3D yang memiliki ruang penyimpanan.",
            "explanation": "Keranjang bambu adalah contoh nyata seni kriya anyam 3 dimensi."
          },
          {
            "id": 17,
            "question": "Ketika membuat maket rumah miniatur dari bahan stik es krim dan kardus tebal, jenis perekat yang paling kuat dan cocok digunakan adalah ...",
            "options": [
              "Air bersih",
              "Lem kayu (PVAc) atau lem tembak (hot glue)",
              "Minyak goreng",
              "Tepung basah"
            ],
            "correctIndex": 1,
            "hint": "Lem kayu atau lem tembak memiliki daya rekat kuat pada kayu dan kardus.",
            "explanation": "Lem kayu (PVAc) atau lem tembak sangat kuat merekatkan permukaan stik kayu dan kardus tebal."
          },
          {
            "id": 18,
            "question": "Teknik mewarnai gambar dengan krayon yang memadukan warna gelap ke warna terang secara berangsur-angsur (misalnya biru tua, biru muda, lalu putih) disebut teknik gradasi. Pernyataan tersebut bernilai ...",
            "options": [
              "Benar",
              "Salah",
              "Ragu-ragu",
              "Kurang tepat"
            ],
            "correctIndex": 0,
            "hint": "Gradasi adalah percampuran peralihan warna dari gelap ke terang atau sebaliknya.",
            "explanation": "Pernyataan BENAR. Teknik gradasi memadukan warna secara halus bertingkat dari gelap ke terang."
          },
          {
            "id": 19,
            "question": "Teknik mewarnai dengan cat air menggunakan sapuan warna yang encer, tipis, dan tembus pandang (transparan) sehingga warna dasar kertas masih terlihat dinamakan teknik ...",
            "options": [
              "Aquarel",
              "Plakat",
              "Arsir tebal",
              "Pointilis"
            ],
            "correctIndex": 0,
            "hint": "Sapuan cat air tipis dan transparan disebut aquarel.",
            "explanation": "Teknik aquarel adalah teknik melukis cat air dengan sapuan warna transparan dan basah."
          },
          {
            "id": 20,
            "question": "Saat menggunakan pisau cutter untuk memotong kertas karton tebal, prosedur keselamatan kerja yang paling tepat adalah ...",
            "options": [
              "Menggerakkan mata pisau ke arah tubuh sendiri secara cepat",
              "Memotong menjauhi tubuh, menggunakan mistar penggaris besi, dan meletakkan alas potong",
              "Menggunakan mata pisau yang sudah berkarat dan tumpul",
              "Bercanda sambil mengayunkan pisau cutter di dekat teman"
            ],
            "correctIndex": 1,
            "hint": "Selalu potong menjauhi jari dan badan, serta gunakan alas pelindung.",
            "explanation": "Keselamatan memakai cutter: arah potongan menjauhi tubuh, memakai penggaris besi, serta ada alas potong agar meja tidak rusak."
          }
        ]
      }
    ]
  },
  {
    "id": "ipas",
    "name": "IPAS (Sains & Sosial)",
    "shortDesc": "Sumber Daya Alam, Perubahan Energi, Fotosintesis, Gaya & Magnet, Peta, Cuaca & Iklim, Efek Rumah Kaca.",
    "icon": "🔬",
    "themeColor": "tosca",
    "gradient": "from-teal-600 via-emerald-600 to-cyan-700",
    "bgPattern": "bg-teal-50",
    "badge": "Kelas IV / Semester 1",
    "kisiKisi": [
      {
        "no": 1,
        "materi": "Pelestarian sumber daya alam",
        "indikator": "Disajikan beberapa kegiatan pemanfaatan sumber daya alam, peserta didik dapat menentukan tindakan yang menyebabkan kerusakan sumber daya alam.",
        "level": "L2",
        "bentuk": "PG"
      },
      {
        "no": 2,
        "materi": "Perubahan energi",
        "indikator": "Disajikan dua kegiatan, peserta didik dapat menentukan perubahan atau pemanfaatan energi yang terjadi pada masing-masing kegiatan.",
        "level": "L2",
        "bentuk": "PG"
      },
      {
        "no": 3,
        "materi": "Energi potensial gravitasi",
        "indikator": "Disajikan ilustrasi dua pot bunga pada ketinggian berbeda, peserta didik dapat menentukan faktor penyebab perbedaan energi potensial gravitasi.",
        "level": "L2",
        "bentuk": "PG"
      },
      {
        "no": 4,
        "materi": "Fotosintesis dan manfaatnya",
        "indikator": "Disajikan uraian tentang tumbuhan hijau, peserta didik dapat menyimpulkan alasan fotosintesis penting bagi kehidupan manusia.",
        "level": "L2",
        "bentuk": "PG"
      },
      {
        "no": 5,
        "materi": "Energi alternatif dan panel surya",
        "indikator": "Disajikan hasil pengamatan panel surya pada kondisi cuaca berbeda, peserta didik dapat menyimpulkan hubungan cahaya matahari dengan energi listrik yang dihasilkan.",
        "level": "L2",
        "bentuk": "PG"
      },
      {
        "no": 6,
        "materi": "Pengaruh gaya terhadap gerak",
        "indikator": "Disajikan peristiwa mengayuh sepeda dengan gaya berbeda, peserta didik dapat menentukan pengaruh besar gaya terhadap kecepatan gerak benda.",
        "level": "L2",
        "bentuk": "PG"
      },
      {
        "no": 7,
        "materi": "Macam-macam gaya",
        "indikator": "Disajikan peristiwa bola ditendang hingga berhenti, peserta didik dapat menentukan urutan gaya yang menyebabkan bola bergerak dan melambat.",
        "level": "L2",
        "bentuk": "PG"
      },
      {
        "no": 8,
        "materi": "Gaya magnet",
        "indikator": "Disajikan beberapa pernyataan tentang magnet, peserta didik dapat menentukan kombinasi pernyataan benar dan salah mengenai sifat gaya magnet.",
        "level": "L2",
        "bentuk": "PG"
      },
      {
        "no": 9,
        "materi": "Gaya gesek",
        "indikator": "Disajikan percobaan mendorong kotak pada permukaan berbeda, peserta didik dapat memilih dua pernyataan yang tepat tentang besar gaya gesek.",
        "level": "L2",
        "bentuk": "PG"
      },
      {
        "no": 10,
        "materi": "Manfaat gaya gesek",
        "indikator": "Disajikan beberapa kegiatan, peserta didik dapat menentukan benar atau salah keterkaitan kegiatan dengan gaya gesek.",
        "level": "L2",
        "bentuk": "PG"
      },
      {
        "no": 11,
        "materi": "Fungsi peta",
        "indikator": "Disajikan konteks pengamatan peta persebaran gunung dan sungai, peserta didik dapat memilih fungsi peta yang tepat.",
        "level": "L2",
        "bentuk": "PG"
      },
      {
        "no": 12,
        "materi": "Jenis peta",
        "indikator": "Disajikan kebutuhan informasi bentuk permukaan bumi dan garis kontur, peserta didik dapat menentukan jenis peta yang sesuai.",
        "level": "L1",
        "bentuk": "PG"
      },
      {
        "no": 13,
        "materi": "Bentuk peta",
        "indikator": "Disajikan penggunaan aplikasi Google Maps, peserta didik dapat mengidentifikasi jenis peta berdasarkan bentuknya.",
        "level": "L1",
        "bentuk": "PG"
      },
      {
        "no": 14,
        "materi": "Letak geografis dan batas wilayah",
        "indikator": "Disajikan informasi posisi Pulau Jawa, peserta didik dapat menentukan pasangan batas geografis yang tepat.",
        "level": "L2",
        "bentuk": "PG"
      },
      {
        "no": 15,
        "materi": "Kenampakan alam: gunung",
        "indikator": "Disajikan tabel nama gunung dan daerah, peserta didik dapat menentukan pasangan nama gunung dan daerah yang benar.",
        "level": "L2",
        "bentuk": "PG"
      },
      {
        "no": 16,
        "materi": "Cuaca, musim, dan iklim",
        "indikator": "Disajikan tabel pilihan jangka waktu, peserta didik dapat menentukan pasangan jangka waktu terjadinya cuaca, musim, dan iklim yang tepat.",
        "level": "L2",
        "bentuk": "PG"
      },
      {
        "no": 17,
        "materi": "Musim dan ciri-cirinya",
        "indikator": "Disajikan beberapa perubahan alam, peserta didik dapat menentukan urutan musim yang sesuai dengan ciri-ciri tersebut.",
        "level": "L2",
        "bentuk": "PG"
      },
      {
        "no": 18,
        "materi": "Perubahan iklim",
        "indikator": "Disajikan daftar kegiatan dan kondisi lingkungan, peserta didik dapat menentukan faktor yang menyebabkan perubahan iklim.",
        "level": "L2",
        "bentuk": "PG"
      },
      {
        "no": 19,
        "materi": "Efek rumah kaca",
        "indikator": "Disajikan gambar/aktivitas manusia, peserta didik dapat menentukan gas utama yang dihasilkan dan berkontribusi terhadap efek rumah kaca.",
        "level": "L1",
        "bentuk": "PG"
      },
      {
        "no": 20,
        "materi": "Karbon dioksida dan efek rumah kaca",
        "indikator": "Disajikan informasi manfaat dan dampak peningkatan CO2, peserta didik dapat memilih kesimpulan yang tepat tentang pengaruhnya bagi kehidupan.",
        "level": "L3",
        "bentuk": "PG"
      }
    ],
    "packages": [
      {
        "id": "ipas-full",
        "title": "Paket Lengkap ASAS 1 (20 Soal Sesuai Kisi-Kisi)",
        "difficulty": "L1, L2 & L3 (Lengkap)",
        "targetKelas": "Kelas 4 SD",
        "durationMinutes": 30,
        "description": "20 Soal Pilihan Ganda lengkap mencakup sains (fotosintesis, gaya, energi) dan sosial (peta, kenampakan alam, cuaca & iklim).",
        "questions": [
          {
            "id": 1,
            "question": "Perhatikan beberapa kegiatan manusia berikut:\n(1) Menanam pohon bakau di pesisir pantai\n(2) Menangkap ikan menggunakan bahan peledak (bom ikan)\n(3) Menggunakan pukat harimau yang merusak terumbu karang\n(4) Membuat sengkedan terasering di lereng bukit\nTindakan yang dapat menyebabkan kerusakan kelestarian sumber daya alam ditunjukkan oleh nomor ...",
            "options": [
              "(1) dan (2)",
              "(2) dan (3)",
              "(1) dan (4)",
              "(3) dan (4)"
            ],
            "correctIndex": 1,
            "hint": "Bom ikan dan pukat harimau menghancurkan biota laut dan terumbu karang.",
            "explanation": "Nomor (2) bom ikan dan (3) pukat harimau merusak habitat laut secara permanen. Menanam bakau dan terasering justru menjaga kelestarian alam."
          },
          {
            "id": 2,
            "question": "Perhatikan dua kegiatan:\n(1) Ibu merapikan pakaian sekolah menggunakan setrika listrik.\n(2) Ayah mengeringkan gabah padi di bawah terik sinar matahari.\nPerubahan atau pemanfaatan energi yang terjadi pada kedua peristiwa tersebut secara berturut-turut adalah ...",
            "options": [
              "Energi listrik menjadi energi gerak, dan energi angin menjadi energi kimia",
              "Energi listrik menjadi energi panas (kalor), dan energi panas matahari untuk penguapan air",
              "Energi bunyi menjadi energi panas, dan energi cahaya menjadi energi listrik",
              "Energi kimia menjadi energi kinetik, dan energi gerak menjadi energi panas"
            ],
            "correctIndex": 1,
            "hint": "Setrika menghasilkan panas dari listrik, sedangkan sinar matahari menghangatkan dan menguapkan kadar air padi.",
            "explanation": "Setrika listrik mengubah energi listrik menjadi kalor/panas. Menjemur padi memanfaatkan kalor radiasi matahari untuk menguapkan air."
          },
          {
            "id": 3,
            "question": "Di balkon rumah bertingkat, terdapat pot bunga A di lantai 1 (ketinggian 2 meter) dan pot bunga B di lantai 2 (ketinggian 5 meter) dengan berat pot yang sama. Faktor utama yang menyebabkan pot bunga B memiliki energi potensial gravitasi lebih besar adalah ...",
            "options": [
              "Warna pot bunga B lebih cerah",
              "Posisi ketinggian pot bunga B lebih tinggi dari permukaan tanah",
              "Bahan pot bunga B lebih licin",
              "Suhu udara di lantai 2 lebih dingin"
            ],
            "correctIndex": 1,
            "hint": "Energi potensial gravitasi dipengaruhi oleh massa benda dan ketinggian letak benda (Ep = m × g × h).",
            "explanation": "Semakin tinggi letak suatu benda dari permukaan bumi, semakin besar energi potensial gravitasi yang tersimpan pada benda tersebut."
          },
          {
            "id": 4,
            "question": "Tumbuhan hijau memiliki kemampuan melakukan proses fotosintesis dengan bantuan cahaya matahari. Alasan mengapa fotosintesis sangat penting bagi kelangsungan hidup manusia adalah ...",
            "options": [
              "Menghasilkan gas oksigen (O2) untuk bernapas serta bahan makanan berupa karbohidrat",
              "Menghasilkan gas karbon monoksida yang membuat udara hangat",
              "Menyerap seluruh air hujan agar tidak ada genangan air di tanah",
              "Menghasilkan energi listrik langsung ke pemukiman warga"
            ],
            "correctIndex": 0,
            "hint": "Fotosintesis menghasilkan zat yang kita hirup setiap detik dan makanan bagi makhluk hidup.",
            "explanation": "Fotosintesis menghasilkan oksigen (O2) yang dibutuhkan manusia untuk bernapas dan glukosa/amilum sebagai sumber pangan utama."
          },
          {
            "id": 5,
            "question": "Sekelompok siswa mengamati panel surya yang dipasang di atap sekolah. Saat tengah hari yang terik, lampu yang terhubung menyala sangat terang. Saat sore mendung, lampu meredup. Kesimpulan yang tepat dari pengamatan tersebut adalah ...",
            "options": [
              "Panel surya bekerja lebih baik saat terkena air hujan lebat",
              "Semakin besar intensitas cahaya matahari yang diserap, semakin banyak energi listrik yang dihasilkan panel surya",
              "Cahaya matahari tidak berpengaruh terhadap arus listrik panel surya",
              "Panel surya hanya dapat menghasilkan energi panas, bukan energi listrik"
            ],
            "correctIndex": 1,
            "hint": "Panel surya mengubah energi cahaya matahari menjadi energi listrik.",
            "explanation": "Panel surya bekerja mengonversi energi foton cahaya matahari menjadi arus listrik, sehingga sinar terik menghasilkan listrik lebih besar."
          },
          {
            "id": 6,
            "question": "Ketika bersepeda di jalan mendatar, Dodi mengayuh pedal sepedanya dengan dorongan gaya yang kecil, kemudian ia mengayuh kembali dengan dorongan gaya yang sangat kuat. Pengaruh besar gaya kayuhan terhadap gerak sepeda adalah ...",
            "options": [
              "Semakin besar gaya yang diberikan pada pedal, sepeda akan bergerak semakin cepat",
              "Semakin besar gaya kayuhan, sepeda akan langsung berhenti mendadak",
              "Besar gaya kayuh tidak mengubah kecepatan sepeda sama sekali",
              "Gaya kayuh yang besar membuat sepeda berputar balik arah"
            ],
            "correctIndex": 0,
            "hint": "Gaya dorong yang semakin besar menambah percepatan gerak benda.",
            "explanation": "Gaya memengaruhi kecepatan benda: semakin besar gaya dorong yang diberikan, semakin cepat laju gerak benda."
          },
          {
            "id": 7,
            "question": "Edo menendang bola sepak yang diam di lapangan rumput hingga meluncur jauh ke depan, lalu perlahan bola melambat dan akhirnya berhenti sendiri. Urutan gaya yang bekerja pada peristiwa tersebut adalah ...",
            "options": [
              "Gaya magnet menggerakkan bola, lalu gaya pegas menghentikannya",
              "Gaya otot kaki membuat bola bergerak, lalu gaya gesek antara bola dan rumput membuat bola melambat hingga berhenti",
              "Gaya gravitasi membuat bola meluncur, lalu gaya dorong menghentikannya",
              "Gaya listrik membuat bola bergerak tanpa hambatan"
            ],
            "correctIndex": 1,
            "hint": "Kaki menggunakan otot, sedangkan permukaan rumput memberikan gaya gesekan yang menahan laju bola.",
            "explanation": "Bola bergerak karena dorongan gaya otot kaki, lalu gaya gesek antara permukaan bola dan rumput memperlambat lajunya hingga berhenti."
          },
          {
            "id": 8,
            "question": "Perhatikan pernyataan tentang sifat gaya magnet:\n(1) Kutub magnet yang senama (U-U atau S-S) jika didekatkan akan saling tolak-menolak.\n(2) Gaya magnet dapat menembus penghalang tipis seperti kertas dan plastik.\n(3) Magnet dapat menarik semua jenis benda termasuk kayu dan kaca.\nKombinasi pernyataan yang benar mengenai sifat magnet adalah ...",
            "options": [
              "(1) dan (2)",
              "(1) dan (3)",
              "(2) dan (3)",
              "(1), (2), dan (3)"
            ],
            "correctIndex": 0,
            "hint": "Magnet hanya menarik benda logam feromagnetik seperti besi dan baja, bukan kayu atau kaca.",
            "explanation": "Pernyataan (1) dan (2) benar. Pernyataan (3) salah karena kayu dan kaca adalah benda non-magnetis."
          },
          {
            "id": 9,
            "question": "Beni mendorong kotak kardus di atas lantai keramik yang licin terasa sangat ringan. Namun saat mendorong kotak yang sama di atas jalan aspal yang kasar dan berbatu, terasa jauh lebih berat. Hal ini terjadi karena ...",
            "options": [
              "Gaya gesek pada permukaan aspal yang kasar jauh lebih besar dibandingkan pada lantai keramik yang licin",
              "Lantai keramik memiliki gaya gravitasi yang hilang",
              "Gaya gesek pada permukaan aspal sama dengan nol",
              "Kotak bertambah berat sendiri saat berada di atas aspal"
            ],
            "correctIndex": 0,
            "hint": "Permukaan yang kasar menghasilkan hambatan gesek yang lebih besar.",
            "explanation": "Kekasaran permukaan berbanding lurus dengan gaya gesek: semakin kasar permukaan, gaya geseknya semakin besar sehingga mendorong terasa berat."
          },
          {
            "id": 10,
            "question": "Contoh penerapan gaya gesek yang sengaja dibuat menguntungkan dalam kehidupan sehari-hari adalah ...",
            "options": [
              "Permukaan jalan raya dilapisi oli licin",
              "Pembuatan alur bergerigi pada tapak ban kendaraan dan sol sepatu",
              "Rantai sepeda dibiarkan berkarat dan kering",
              "Mesin mobil dibiarkan tanpa pelumas oli"
            ],
            "correctIndex": 1,
            "hint": "Alur ban sengaja dibuat kasar agar kendaraan tidak mudah tergelincir saat mengerem.",
            "explanation": "Alur pada ban dan sol sepatu sengaja dibuat untuk memperbesar gaya gesek sehingga tidak tergelincir atau selip di jalan."
          },
          {
            "id": 11,
            "question": "Ketika mengamati peta kepulauan Indonesia, kita dapat melihat letak jajaran pegunungan, aliran sungai besar, danau, serta batas wilayah provinsi. Fungsi utama peta tersebut adalah ...",
            "options": [
              "Mengetahui luas, letak, dan persebaran kenampakan alam suatu wilayah secara menyeluruh",
              "Mengetahui perkiraan harga tanah di tepi sungai",
              "Menghitung jumlah ikan yang hidup di danau",
              "Melihat orang-orang yang sedang berjalan di jalan raya"
            ],
            "correctIndex": 0,
            "hint": "Peta memberikan gambaran permukaan bumi beserta kenampakan fisik wilayah dalam skala tertentu.",
            "explanation": "Peta berfungsi menunjukkan posisi, lokasi, bentuk muka bumi, dan persebaran potensi alam secara spasial."
          },
          {
            "id": 12,
            "question": "Sebuah instansi membutuhkan peta yang menyajikan informasi detail tentang tinggi rendahnya permukaan bumi, kemiringan lereng bukit, dan garis-garis kontur ketinggian. Jenis peta yang tepat digunakan adalah ...",
            "options": [
              "Peta Tematik Kepadatan Penduduk",
              "Peta Topografi (Peta Kontur Relief Bumi)",
              "Peta Jalur Transportasi Kereta Api",
              "Peta Persebaran Tambang Emas"
            ],
            "correctIndex": 1,
            "hint": "Peta topografi menyajikan relief ketinggian tanah menggunakan garis-garis kontur.",
            "explanation": "Peta topografi adalah jenis peta yang menggambarkan relief tinggi rendahnya permukaan bumi dengan garis kontur."
          },
          {
            "id": 13,
            "question": "Saat bepergian ke luar kota bersama keluarga, Ayah melihat rute perjalanan dan kondisi kemacetan jalan raya secara langsung melalui aplikasi Google Maps pada layar ponsel pintar. Berdasarkan bentuk penyajiannya, peta pada aplikasi tersebut tergolong jenis ...",
            "options": [
              "Peta Timbul (Tiga Dimensi)",
              "Peta Digital (Elektronik)",
              "Peta Cetak Kertas Manual",
              "Peta Lukisan Kain"
            ],
            "correctIndex": 1,
            "hint": "Peta yang ditampilkan dalam perangkat gawai layar elektronik komputer/ponsel adalah peta digital.",
            "explanation": "Google Maps adalah contoh peta digital/elektronik yang tersimpan dan ditampilkan menggunakan teknologi komputasi."
          },
          {
            "id": 14,
            "question": "Secara geografis, Pulau Jawa dikelilingi oleh batas-batas wilayah perairan. Pasangan batas perairan sebelah utara dan selatan Pulau Jawa yang tepat adalah ...",
            "options": [
              "Utara berbatasan dengan Laut Jawa, dan Selatan berbatasan dengan Samudra Hindia",
              "Utara berbatasan dengan Samudra Pasifik, dan Selatan berbatasan dengan Selat Sunda",
              "Utara berbatasan dengan Selat Bali, dan Selatan berbatasan dengan Laut Cina Selatan",
              "Utara berbatasan dengan Samudra Hindia, dan Selatan berbatasan dengan Laut Jawa"
            ],
            "correctIndex": 0,
            "hint": "Di sebelah utara Pulau Jawa terbentang Laut Jawa, dan di sebelah selatan terdapat Samudra Hindia yang luas.",
            "explanation": "Batas geografis Pulau Jawa: sebelah utara berbatasan dengan Laut Jawa, sebelah selatan berbatasan langsung dengan Samudra Hindia."
          },
          {
            "id": 15,
            "question": "Perhatikan pasangan nama gunung berapi dan daerah provinsinya di Indonesia berikut:\n(1) Gunung Merapi - Jawa Tengah dan D.I. Yogyakarta\n(2) Gunung Semeru - Jawa Timur\n(3) Gunung Rinjani - Nusa Tenggara Barat\nPasangan nama gunung dan daerah yang benar adalah ...",
            "options": [
              "(1) dan (2) saja",
              "(2) dan (3) saja",
              "(1) dan (3) saja",
              "(1), (2), dan (3)"
            ],
            "correctIndex": 3,
            "hint": "Ketiga gunung tersebut sangat terkenal dan berada di provinsi masing-masing yang sesuai.",
            "explanation": "Semua pasangan benar: Merapi di Jateng/DIY, Semeru di Jawa Timur, dan Rinjani di Pulau Lombok NTB."
          },
          {
            "id": 16,
            "question": "Perbedaan mendasar antara cuaca, musim, dan iklim terletak pada rentang waktu terjadinya. Pasangan rentang waktu yang paling tepat adalah ...",
            "options": [
              "Cuaca terjadi dalam waktu singkat (harian), musim berlangsung beberapa bulan, dan iklim terjadi dalam rentang waktu sangat lama (puluhan tahun)",
              "Cuaca terjadi selama ratusan tahun, musim terjadi setiap hari, dan iklim terjadi tiap jam",
              "Cuaca dan iklim tidak ada perbedaan waktu sama sekali",
              "Musim berlangsung harian, sedangkan cuaca berlangsung puluhan tahun"
            ],
            "correctIndex": 0,
            "hint": "Cuaca harian, musim berkala (misal hujan/kemarau beberapa bulan), iklim pola rata-rata puluhan tahun.",
            "explanation": "Cuaca mencakup kondisi atmosfer harian singkat; musim berlangsung sekitar 6 bulan (di Indonesia); iklim adalah rata-rata cuaca lebih dari 30 tahun."
          },
          {
            "id": 17,
            "question": "Di wilayah bumi yang memiliki 4 musim, peristiwa gugurnya dedaunan pohon dan udara yang mulai mendingin setelah musim panas merupakan ciri dari musim ...",
            "options": [
              "Musim Semi (Spring)",
              "Musim Gugur (Autumn/Fall)",
              "Musim Dingin (Winter)",
              "Musim Panas (Summer)"
            ],
            "correctIndex": 1,
            "hint": "Dedaunan menguning dan berguguran sebelum datangnya musim dingin.",
            "explanation": "Musim gugur ditandai dengan daun-daun pohon yang rontok dan penurunan suhu menuju musim dingin."
          },
          {
            "id": 18,
            "question": "Faktor utama aktivitas manusia yang memicu terjadinya perubahan iklim global dan pemanasan suhu bumi secara drastis adalah ...",
            "options": [
              "Pembakaran bahan bakar fosil (minyak bumi, batu bara) oleh kendaraan dan pabrik serta penggundulan hutan",
              "Kegiatan penanaman pohon reboisasi di pegunungan",
              "Pembangunan cagar alam suaka margasatwa",
              "Penggunaan sepeda ontel untuk berangkat sekolah"
            ],
            "correctIndex": 0,
            "hint": "Asap pabrik, kendaraan bermotor, dan kebakaran hutan melepaskan gas rumah kaca dalam jumlah raksasa.",
            "explanation": "Emisi gas buang bahan bakar fosil dan berkurangnya hutan penyerap karbon adalah penyebab utama perubahan iklim global."
          },
          {
            "id": 19,
            "question": "Aktivitas pembakaran hutan, pabrik industri, dan asap kendaraan bermotor menghasilkan gas utama yang memerangkap panas matahari di atmosfer bumi sehingga menyebabkan efek rumah kaca, yaitu ...",
            "options": [
              "Oksigen (O2)",
              "Karbon Dioksida (CO2)",
              "Gas Nitrogen Murni (N2)",
              "Uap Air Mineral"
            ],
            "correctIndex": 1,
            "hint": "Gas buang dari pembakaran zat arang (karbon) dinamakan karbon dioksida.",
            "explanation": "Karbon dioksida (CO2) adalah gas rumah kaca utama yang menyerap dan memerangkap radiasi kalor di atmosfer bumi."
          },
          {
            "id": 20,
            "question": "Jika kadar gas karbon dioksida (CO2) di atmosfer terus meningkat tanpa diimbangi oleh penanaman pohon penghijauan, kesimpulan dampak lingkungan yang akan terjadi adalah ...",
            "options": [
              "Bumi akan semakin sejuk dan permukaan es kutub bertambah tebal",
              "Terjadi pemanasan global (global warming) yang menyebabkan mencairnya es kutub dan kenaikan permukaan air laut",
              "Kadar oksigen di udara meningkat sangat tajam",
              "Semua gurun pasir akan berubah menjadi lautan air tawar"
            ],
            "correctIndex": 1,
            "hint": "Kenaikan CO2 menahan panas di bumi dan menaikkan suhu global sehingga es di kutub mencair.",
            "explanation": "Peningkatan CO2 menyebabkan pemanasan global, kenaikan suhu rata-rata bumi, pencairan tudung es kutub, dan naiknya muka air laut."
          }
        ]
      },
      {
        "id": "ipas-1",
        "title": "Bagian 1: Energi, Fotosintesis & Gaya (No. 1-10)",
        "difficulty": "Sedang",
        "targetKelas": "Kelas 4 SD",
        "durationMinutes": 15,
        "description": "Latihan 10 soal pertama fokus pada pelestarian SDA, energi potensial, fotosintesis, gaya gesek, dan sifat magnet.",
        "questions": [
          {
            "id": 1,
            "question": "Perhatikan beberapa kegiatan manusia berikut:\n(1) Menanam pohon bakau di pesisir pantai\n(2) Menangkap ikan menggunakan bahan peledak (bom ikan)\n(3) Menggunakan pukat harimau yang merusak terumbu karang\n(4) Membuat sengkedan terasering di lereng bukit\nTindakan yang dapat menyebabkan kerusakan kelestarian sumber daya alam ditunjukkan oleh nomor ...",
            "options": [
              "(1) dan (2)",
              "(2) dan (3)",
              "(1) dan (4)",
              "(3) dan (4)"
            ],
            "correctIndex": 1,
            "hint": "Bom ikan dan pukat harimau menghancurkan biota laut dan terumbu karang.",
            "explanation": "Nomor (2) bom ikan dan (3) pukat harimau merusak habitat laut secara permanen. Menanam bakau dan terasering justru menjaga kelestarian alam."
          },
          {
            "id": 2,
            "question": "Perhatikan dua kegiatan:\n(1) Ibu merapikan pakaian sekolah menggunakan setrika listrik.\n(2) Ayah mengeringkan gabah padi di bawah terik sinar matahari.\nPerubahan atau pemanfaatan energi yang terjadi pada kedua peristiwa tersebut secara berturut-turut adalah ...",
            "options": [
              "Energi listrik menjadi energi gerak, dan energi angin menjadi energi kimia",
              "Energi listrik menjadi energi panas (kalor), dan energi panas matahari untuk penguapan air",
              "Energi bunyi menjadi energi panas, dan energi cahaya menjadi energi listrik",
              "Energi kimia menjadi energi kinetik, dan energi gerak menjadi energi panas"
            ],
            "correctIndex": 1,
            "hint": "Setrika menghasilkan panas dari listrik, sedangkan sinar matahari menghangatkan dan menguapkan kadar air padi.",
            "explanation": "Setrika listrik mengubah energi listrik menjadi kalor/panas. Menjemur padi memanfaatkan kalor radiasi matahari untuk menguapkan air."
          },
          {
            "id": 3,
            "question": "Di balkon rumah bertingkat, terdapat pot bunga A di lantai 1 (ketinggian 2 meter) dan pot bunga B di lantai 2 (ketinggian 5 meter) dengan berat pot yang sama. Faktor utama yang menyebabkan pot bunga B memiliki energi potensial gravitasi lebih besar adalah ...",
            "options": [
              "Warna pot bunga B lebih cerah",
              "Posisi ketinggian pot bunga B lebih tinggi dari permukaan tanah",
              "Bahan pot bunga B lebih licin",
              "Suhu udara di lantai 2 lebih dingin"
            ],
            "correctIndex": 1,
            "hint": "Energi potensial gravitasi dipengaruhi oleh massa benda dan ketinggian letak benda (Ep = m × g × h).",
            "explanation": "Semakin tinggi letak suatu benda dari permukaan bumi, semakin besar energi potensial gravitasi yang tersimpan pada benda tersebut."
          },
          {
            "id": 4,
            "question": "Tumbuhan hijau memiliki kemampuan melakukan proses fotosintesis dengan bantuan cahaya matahari. Alasan mengapa fotosintesis sangat penting bagi kelangsungan hidup manusia adalah ...",
            "options": [
              "Menghasilkan gas oksigen (O2) untuk bernapas serta bahan makanan berupa karbohidrat",
              "Menghasilkan gas karbon monoksida yang membuat udara hangat",
              "Menyerap seluruh air hujan agar tidak ada genangan air di tanah",
              "Menghasilkan energi listrik langsung ke pemukiman warga"
            ],
            "correctIndex": 0,
            "hint": "Fotosintesis menghasilkan zat yang kita hirup setiap detik dan makanan bagi makhluk hidup.",
            "explanation": "Fotosintesis menghasilkan oksigen (O2) yang dibutuhkan manusia untuk bernapas dan glukosa/amilum sebagai sumber pangan utama."
          },
          {
            "id": 5,
            "question": "Sekelompok siswa mengamati panel surya yang dipasang di atap sekolah. Saat tengah hari yang terik, lampu yang terhubung menyala sangat terang. Saat sore mendung, lampu meredup. Kesimpulan yang tepat dari pengamatan tersebut adalah ...",
            "options": [
              "Panel surya bekerja lebih baik saat terkena air hujan lebat",
              "Semakin besar intensitas cahaya matahari yang diserap, semakin banyak energi listrik yang dihasilkan panel surya",
              "Cahaya matahari tidak berpengaruh terhadap arus listrik panel surya",
              "Panel surya hanya dapat menghasilkan energi panas, bukan energi listrik"
            ],
            "correctIndex": 1,
            "hint": "Panel surya mengubah energi cahaya matahari menjadi energi listrik.",
            "explanation": "Panel surya bekerja mengonversi energi foton cahaya matahari menjadi arus listrik, sehingga sinar terik menghasilkan listrik lebih besar."
          },
          {
            "id": 6,
            "question": "Ketika bersepeda di jalan mendatar, Dodi mengayuh pedal sepedanya dengan dorongan gaya yang kecil, kemudian ia mengayuh kembali dengan dorongan gaya yang sangat kuat. Pengaruh besar gaya kayuhan terhadap gerak sepeda adalah ...",
            "options": [
              "Semakin besar gaya yang diberikan pada pedal, sepeda akan bergerak semakin cepat",
              "Semakin besar gaya kayuhan, sepeda akan langsung berhenti mendadak",
              "Besar gaya kayuh tidak mengubah kecepatan sepeda sama sekali",
              "Gaya kayuh yang besar membuat sepeda berputar balik arah"
            ],
            "correctIndex": 0,
            "hint": "Gaya dorong yang semakin besar menambah percepatan gerak benda.",
            "explanation": "Gaya memengaruhi kecepatan benda: semakin besar gaya dorong yang diberikan, semakin cepat laju gerak benda."
          },
          {
            "id": 7,
            "question": "Edo menendang bola sepak yang diam di lapangan rumput hingga meluncur jauh ke depan, lalu perlahan bola melambat dan akhirnya berhenti sendiri. Urutan gaya yang bekerja pada peristiwa tersebut adalah ...",
            "options": [
              "Gaya magnet menggerakkan bola, lalu gaya pegas menghentikannya",
              "Gaya otot kaki membuat bola bergerak, lalu gaya gesek antara bola dan rumput membuat bola melambat hingga berhenti",
              "Gaya gravitasi membuat bola meluncur, lalu gaya dorong menghentikannya",
              "Gaya listrik membuat bola bergerak tanpa hambatan"
            ],
            "correctIndex": 1,
            "hint": "Kaki menggunakan otot, sedangkan permukaan rumput memberikan gaya gesekan yang menahan laju bola.",
            "explanation": "Bola bergerak karena dorongan gaya otot kaki, lalu gaya gesek antara permukaan bola dan rumput memperlambat lajunya hingga berhenti."
          },
          {
            "id": 8,
            "question": "Perhatikan pernyataan tentang sifat gaya magnet:\n(1) Kutub magnet yang senama (U-U atau S-S) jika didekatkan akan saling tolak-menolak.\n(2) Gaya magnet dapat menembus penghalang tipis seperti kertas dan plastik.\n(3) Magnet dapat menarik semua jenis benda termasuk kayu dan kaca.\nKombinasi pernyataan yang benar mengenai sifat magnet adalah ...",
            "options": [
              "(1) dan (2)",
              "(1) dan (3)",
              "(2) dan (3)",
              "(1), (2), dan (3)"
            ],
            "correctIndex": 0,
            "hint": "Magnet hanya menarik benda logam feromagnetik seperti besi dan baja, bukan kayu atau kaca.",
            "explanation": "Pernyataan (1) dan (2) benar. Pernyataan (3) salah karena kayu dan kaca adalah benda non-magnetis."
          },
          {
            "id": 9,
            "question": "Beni mendorong kotak kardus di atas lantai keramik yang licin terasa sangat ringan. Namun saat mendorong kotak yang sama di atas jalan aspal yang kasar dan berbatu, terasa jauh lebih berat. Hal ini terjadi karena ...",
            "options": [
              "Gaya gesek pada permukaan aspal yang kasar jauh lebih besar dibandingkan pada lantai keramik yang licin",
              "Lantai keramik memiliki gaya gravitasi yang hilang",
              "Gaya gesek pada permukaan aspal sama dengan nol",
              "Kotak bertambah berat sendiri saat berada di atas aspal"
            ],
            "correctIndex": 0,
            "hint": "Permukaan yang kasar menghasilkan hambatan gesek yang lebih besar.",
            "explanation": "Kekasaran permukaan berbanding lurus dengan gaya gesek: semakin kasar permukaan, gaya geseknya semakin besar sehingga mendorong terasa berat."
          },
          {
            "id": 10,
            "question": "Contoh penerapan gaya gesek yang sengaja dibuat menguntungkan dalam kehidupan sehari-hari adalah ...",
            "options": [
              "Permukaan jalan raya dilapisi oli licin",
              "Pembuatan alur bergerigi pada tapak ban kendaraan dan sol sepatu",
              "Rantai sepeda dibiarkan berkarat dan kering",
              "Mesin mobil dibiarkan tanpa pelumas oli"
            ],
            "correctIndex": 1,
            "hint": "Alur ban sengaja dibuat kasar agar kendaraan tidak mudah tergelincir saat mengerem.",
            "explanation": "Alur pada ban dan sol sepatu sengaja dibuat untuk memperbesar gaya gesek sehingga tidak tergelincir atau selip di jalan."
          }
        ]
      },
      {
        "id": "ipas-2",
        "title": "Bagian 2: Peta, Wilayah, Iklim & Rumah Kaca (No. 11-20)",
        "difficulty": "Tantangan Analisis",
        "targetKelas": "Kelas 4 SD",
        "durationMinutes": 15,
        "description": "Latihan 10 soal kedua fokus pada fungsi dan jenis peta, letak Jawa, gunung di Indonesia, cuaca, iklim, dan CO2.",
        "questions": [
          {
            "id": 11,
            "question": "Ketika mengamati peta kepulauan Indonesia, kita dapat melihat letak jajaran pegunungan, aliran sungai besar, danau, serta batas wilayah provinsi. Fungsi utama peta tersebut adalah ...",
            "options": [
              "Mengetahui luas, letak, dan persebaran kenampakan alam suatu wilayah secara menyeluruh",
              "Mengetahui perkiraan harga tanah di tepi sungai",
              "Menghitung jumlah ikan yang hidup di danau",
              "Melihat orang-orang yang sedang berjalan di jalan raya"
            ],
            "correctIndex": 0,
            "hint": "Peta memberikan gambaran permukaan bumi beserta kenampakan fisik wilayah dalam skala tertentu.",
            "explanation": "Peta berfungsi menunjukkan posisi, lokasi, bentuk muka bumi, dan persebaran potensi alam secara spasial."
          },
          {
            "id": 12,
            "question": "Sebuah instansi membutuhkan peta yang menyajikan informasi detail tentang tinggi rendahnya permukaan bumi, kemiringan lereng bukit, dan garis-garis kontur ketinggian. Jenis peta yang tepat digunakan adalah ...",
            "options": [
              "Peta Tematik Kepadatan Penduduk",
              "Peta Topografi (Peta Kontur Relief Bumi)",
              "Peta Jalur Transportasi Kereta Api",
              "Peta Persebaran Tambang Emas"
            ],
            "correctIndex": 1,
            "hint": "Peta topografi menyajikan relief ketinggian tanah menggunakan garis-garis kontur.",
            "explanation": "Peta topografi adalah jenis peta yang menggambarkan relief tinggi rendahnya permukaan bumi dengan garis kontur."
          },
          {
            "id": 13,
            "question": "Saat bepergian ke luar kota bersama keluarga, Ayah melihat rute perjalanan dan kondisi kemacetan jalan raya secara langsung melalui aplikasi Google Maps pada layar ponsel pintar. Berdasarkan bentuk penyajiannya, peta pada aplikasi tersebut tergolong jenis ...",
            "options": [
              "Peta Timbul (Tiga Dimensi)",
              "Peta Digital (Elektronik)",
              "Peta Cetak Kertas Manual",
              "Peta Lukisan Kain"
            ],
            "correctIndex": 1,
            "hint": "Peta yang ditampilkan dalam perangkat gawai layar elektronik komputer/ponsel adalah peta digital.",
            "explanation": "Google Maps adalah contoh peta digital/elektronik yang tersimpan dan ditampilkan menggunakan teknologi komputasi."
          },
          {
            "id": 14,
            "question": "Secara geografis, Pulau Jawa dikelilingi oleh batas-batas wilayah perairan. Pasangan batas perairan sebelah utara dan selatan Pulau Jawa yang tepat adalah ...",
            "options": [
              "Utara berbatasan dengan Laut Jawa, dan Selatan berbatasan dengan Samudra Hindia",
              "Utara berbatasan dengan Samudra Pasifik, dan Selatan berbatasan dengan Selat Sunda",
              "Utara berbatasan dengan Selat Bali, dan Selatan berbatasan dengan Laut Cina Selatan",
              "Utara berbatasan dengan Samudra Hindia, dan Selatan berbatasan dengan Laut Jawa"
            ],
            "correctIndex": 0,
            "hint": "Di sebelah utara Pulau Jawa terbentang Laut Jawa, dan di sebelah selatan terdapat Samudra Hindia yang luas.",
            "explanation": "Batas geografis Pulau Jawa: sebelah utara berbatasan dengan Laut Jawa, sebelah selatan berbatasan langsung dengan Samudra Hindia."
          },
          {
            "id": 15,
            "question": "Perhatikan pasangan nama gunung berapi dan daerah provinsinya di Indonesia berikut:\n(1) Gunung Merapi - Jawa Tengah dan D.I. Yogyakarta\n(2) Gunung Semeru - Jawa Timur\n(3) Gunung Rinjani - Nusa Tenggara Barat\nPasangan nama gunung dan daerah yang benar adalah ...",
            "options": [
              "(1) dan (2) saja",
              "(2) dan (3) saja",
              "(1) dan (3) saja",
              "(1), (2), dan (3)"
            ],
            "correctIndex": 3,
            "hint": "Ketiga gunung tersebut sangat terkenal dan berada di provinsi masing-masing yang sesuai.",
            "explanation": "Semua pasangan benar: Merapi di Jateng/DIY, Semeru di Jawa Timur, dan Rinjani di Pulau Lombok NTB."
          },
          {
            "id": 16,
            "question": "Perbedaan mendasar antara cuaca, musim, dan iklim terletak pada rentang waktu terjadinya. Pasangan rentang waktu yang paling tepat adalah ...",
            "options": [
              "Cuaca terjadi dalam waktu singkat (harian), musim berlangsung beberapa bulan, dan iklim terjadi dalam rentang waktu sangat lama (puluhan tahun)",
              "Cuaca terjadi selama ratusan tahun, musim terjadi setiap hari, dan iklim terjadi tiap jam",
              "Cuaca dan iklim tidak ada perbedaan waktu sama sekali",
              "Musim berlangsung harian, sedangkan cuaca berlangsung puluhan tahun"
            ],
            "correctIndex": 0,
            "hint": "Cuaca harian, musim berkala (misal hujan/kemarau beberapa bulan), iklim pola rata-rata puluhan tahun.",
            "explanation": "Cuaca mencakup kondisi atmosfer harian singkat; musim berlangsung sekitar 6 bulan (di Indonesia); iklim adalah rata-rata cuaca lebih dari 30 tahun."
          },
          {
            "id": 17,
            "question": "Di wilayah bumi yang memiliki 4 musim, peristiwa gugurnya dedaunan pohon dan udara yang mulai mendingin setelah musim panas merupakan ciri dari musim ...",
            "options": [
              "Musim Semi (Spring)",
              "Musim Gugur (Autumn/Fall)",
              "Musim Dingin (Winter)",
              "Musim Panas (Summer)"
            ],
            "correctIndex": 1,
            "hint": "Dedaunan menguning dan berguguran sebelum datangnya musim dingin.",
            "explanation": "Musim gugur ditandai dengan daun-daun pohon yang rontok dan penurunan suhu menuju musim dingin."
          },
          {
            "id": 18,
            "question": "Faktor utama aktivitas manusia yang memicu terjadinya perubahan iklim global dan pemanasan suhu bumi secara drastis adalah ...",
            "options": [
              "Pembakaran bahan bakar fosil (minyak bumi, batu bara) oleh kendaraan dan pabrik serta penggundulan hutan",
              "Kegiatan penanaman pohon reboisasi di pegunungan",
              "Pembangunan cagar alam suaka margasatwa",
              "Penggunaan sepeda ontel untuk berangkat sekolah"
            ],
            "correctIndex": 0,
            "hint": "Asap pabrik, kendaraan bermotor, dan kebakaran hutan melepaskan gas rumah kaca dalam jumlah raksasa.",
            "explanation": "Emisi gas buang bahan bakar fosil dan berkurangnya hutan penyerap karbon adalah penyebab utama perubahan iklim global."
          },
          {
            "id": 19,
            "question": "Aktivitas pembakaran hutan, pabrik industri, dan asap kendaraan bermotor menghasilkan gas utama yang memerangkap panas matahari di atmosfer bumi sehingga menyebabkan efek rumah kaca, yaitu ...",
            "options": [
              "Oksigen (O2)",
              "Karbon Dioksida (CO2)",
              "Gas Nitrogen Murni (N2)",
              "Uap Air Mineral"
            ],
            "correctIndex": 1,
            "hint": "Gas buang dari pembakaran zat arang (karbon) dinamakan karbon dioksida.",
            "explanation": "Karbon dioksida (CO2) adalah gas rumah kaca utama yang menyerap dan memerangkap radiasi kalor di atmosfer bumi."
          },
          {
            "id": 20,
            "question": "Jika kadar gas karbon dioksida (CO2) di atmosfer terus meningkat tanpa diimbangi oleh penanaman pohon penghijauan, kesimpulan dampak lingkungan yang akan terjadi adalah ...",
            "options": [
              "Bumi akan semakin sejuk dan permukaan es kutub bertambah tebal",
              "Terjadi pemanasan global (global warming) yang menyebabkan mencairnya es kutub dan kenaikan permukaan air laut",
              "Kadar oksigen di udara meningkat sangat tajam",
              "Semua gurun pasir akan berubah menjadi lautan air tawar"
            ],
            "correctIndex": 1,
            "hint": "Kenaikan CO2 menahan panas di bumi dan menaikkan suhu global sehingga es di kutub mencair.",
            "explanation": "Peningkatan CO2 menyebabkan pemanasan global, kenaikan suhu rata-rata bumi, pencairan tudung es kutub, dan naiknya muka air laut."
          }
        ]
      }
    ]
  },
  {
    "id": "matematika",
    "name": "Matematika",
    "shortDesc": "Bilangan Cacah sampai 10.000, Nilai Tempat, Operasi Hitung, Faktor & Kelipatan, Pecahan Senilai, Desimal & Persen.",
    "icon": "🧮",
    "themeColor": "tosca",
    "gradient": "from-cyan-600 via-teal-600 to-teal-700",
    "bgPattern": "bg-teal-50",
    "badge": "Kelas 4 / Semester 1",
    "kisiKisi": [
      {
        "no": 1,
        "materi": "Bilangan Cacah Sampai 10.000",
        "indikator": "Peserta didik dapat membaca lambang bilangan cacah.",
        "level": "L1",
        "bentuk": "PG"
      },
      {
        "no": 2,
        "materi": "Bilangan Cacah Sampai 10.000",
        "indikator": "Peserta didik diminta untuk menentukan lambang bilangan yang terbentuk dengan tepat.",
        "level": "L1",
        "bentuk": "PG"
      },
      {
        "no": 3,
        "materi": "Bilangan Cacah Sampai 10.000",
        "indikator": "Peserta didik diminta untuk mengurutkan bilangan tersebut dari yang terkecil ke terbesar dengan benar.",
        "level": "L2",
        "bentuk": "PG"
      },
      {
        "no": 4,
        "materi": "Bilangan Cacah Sampai 10.000",
        "indikator": "Peserta didik dapat menghitung hasil pengurangan bilangan cacah.",
        "level": "L2",
        "bentuk": "PG"
      },
      {
        "no": 5,
        "materi": "Bilangan Cacah Sampai 10.000",
        "indikator": "Peserta didik dapat menghitung hasil perkalian tersebut dengan benar.",
        "level": "L2",
        "bentuk": "PG"
      },
      {
        "no": 6,
        "materi": "Bilangan Cacah Sampai 10.000",
        "indikator": "Peserta didik dapat menghitung hasil pembagian tersebut dengan benar.",
        "level": "L2",
        "bentuk": "PG"
      },
      {
        "no": 7,
        "materi": "Faktor dan Kelipatan",
        "indikator": "Peserta didik diminta untuk menentukan semua faktor bilangan tersebut secara lengkap dan benar.",
        "level": "L1",
        "bentuk": "PG"
      },
      {
        "no": 8,
        "materi": "Faktor dan Kelipatan",
        "indikator": "Peserta didik dapat menganalisis kebenaran masing-masing pernyataan dengan tepat.",
        "level": "L3",
        "bentuk": "PG"
      },
      {
        "no": 9,
        "materi": "Pecahan",
        "indikator": "Peserta didik dapat membandingkan nilai pecahan tersebut untuk menentukan pernyataan pilihan ganda yang benar.",
        "level": "L3",
        "bentuk": "PG"
      },
      {
        "no": 10,
        "materi": "Pecahan",
        "indikator": "Peserta didik dapat menentukan tanda perbandingan yang tepat dengan benar.",
        "level": "L2",
        "bentuk": "PG"
      },
      {
        "no": 11,
        "materi": "Pecahan",
        "indikator": "Peserta didik dapat menentukan pecahan lain yang senilai secara tepat.",
        "level": "L1",
        "bentuk": "PG"
      },
      {
        "no": 12,
        "materi": "Pecahan",
        "indikator": "Peserta didik dapat mengubah pecahan biasa dengan penyebut 100 menjadi bentuk pecahan desimal.",
        "level": "L1",
        "bentuk": "PG"
      },
      {
        "no": 13,
        "materi": "Pecahan",
        "indikator": "Peserta didik dapat mengubah bilangan desimal dua angka di belakang koma ke dalam bentuk persen.",
        "level": "L1",
        "bentuk": "PG"
      },
      {
        "no": 14,
        "materi": "Pecahan",
        "indikator": "Peserta didik dapat menganalisis kebenaran pernyataan tentang bentuk-bentuk pecahan, desimal, dan persen.",
        "level": "L3",
        "bentuk": "PG"
      },
      {
        "no": 15,
        "materi": "Pecahan",
        "indikator": "Peserta didik dapat menganalisis dan menentukan urutan pernyataan yang bernilai benar dan salah secara tepat.",
        "level": "L3",
        "bentuk": "PG"
      }
    ],
    "packages": [
      {
        "id": "mat-full",
        "title": "Paket Lengkap ASAS 1 (15 Soal Sesuai Kisi-Kisi)",
        "difficulty": "L1, L2 & L3 (Lengkap)",
        "targetKelas": "Kelas 4 SD",
        "durationMinutes": 25,
        "description": "15 Soal Pilihan Ganda lengkap sesuai kisi-kisi resmi Matematika Kelas 4 Kurikulum Merdeka.",
        "questions": [
          {
            "id": 1,
            "question": "Lambang bilangan 8.405 dibaca ...",
            "options": [
              "Delapan ribu empat ratus lima puluh",
              "Delapan ribu empat ratus lima",
              "Delapan puluh empat ribu lima",
              "Delapan ribu empat puluh lima"
            ],
            "correctIndex": 1,
            "hint": "8 ribuan, 4 ratusan, 0 puluhan, dan 5 satuan.",
            "explanation": "8.405 dibaca 'Delapan ribu empat ratus lima'."
          },
          {
            "id": 2,
            "question": "Sebuah bilangan tersusun atas: 6 ribuan, 0 ratusan, 7 puluhan, dan 9 satuan. Lambang bilangan yang terbentuk adalah ...",
            "options": [
              "6.709",
              "6.790",
              "6.079",
              "6.970"
            ],
            "correctIndex": 2,
            "hint": "Ribuan = 6, Ratusan = 0, Puluhan = 7, Satuan = 9.",
            "explanation": "6 ribuan + 0 ratusan + 7 puluhan + 9 satuan = 6.079."
          },
          {
            "id": 3,
            "question": "Diberikan empat bilangan cacah berikut:\n4.350 ; 3.890 ; 4.120 ; 3.950\nUrutan bilangan dari yang terkecil ke terbesar adalah ...",
            "options": [
              "3.890 ; 3.950 ; 4.120 ; 4.350",
              "3.950 ; 3.890 ; 4.350 ; 4.120",
              "4.350 ; 4.120 ; 3.950 ; 3.890",
              "3.890 ; 4.120 ; 3.950 ; 4.350"
            ],
            "correctIndex": 0,
            "hint": "Bandingkan angka ribuannya terlebih dahulu, lalu ratusannya.",
            "explanation": "Urutan dari yang terkecil: 3.890 < 3.950 < 4.120 < 4.350."
          },
          {
            "id": 4,
            "question": "Hasil dari operasi pengurangan 7.420 - 3.865 adalah ...",
            "options": [
              "3.455",
              "3.555",
              "3.655",
              "4.555"
            ],
            "correctIndex": 1,
            "hint": "Kurangkan dengan teknik meminjam: 7.420 - 3.865.",
            "explanation": "7.420 - 3.865 = 3.555."
          },
          {
            "id": 5,
            "question": "Hasil dari 125 × 24 adalah ...",
            "options": [
              "2.800",
              "3.000",
              "3.200",
              "3.500"
            ],
            "correctIndex": 1,
            "hint": "125 × 24 = 125 × 4 × 6 = 500 × 6.",
            "explanation": "125 × 24 = 3.000."
          },
          {
            "id": 6,
            "question": "Hasil pembagian dari 1.456 : 7 adalah ...",
            "options": [
              "208",
              "218",
              "28",
              "280"
            ],
            "correctIndex": 0,
            "hint": "14 : 7 = 2, 5 : 7 = 0 sisa 5, 56 : 7 = 8.",
            "explanation": "1.456 : 7 = 208."
          },
          {
            "id": 7,
            "question": "Semua faktor dari bilangan 24 secara lengkap adalah ...",
            "options": [
              "1, 2, 3, 4, 6, 8, 12, 24",
              "1, 2, 4, 6, 12, 24",
              "2, 3, 4, 6, 8, 12",
              "1, 2, 3, 6, 8, 24"
            ],
            "correctIndex": 0,
            "hint": "Faktor adalah semua bilangan bulat yang dapat membagi habis 24.",
            "explanation": "Pasangan perkalian 24: 1×24, 2×12, 3×8, 4×6. Jadi faktornya: 1, 2, 3, 4, 6, 8, 12, 24."
          },
          {
            "id": 8,
            "question": "Perhatikan pernyataan tentang faktor dan kelipatan berikut:\n(1) 48 adalah kelipatan dari 6.\n(2) 7 adalah faktor dari 56.\n(3) Bilangan prima antara 10 dan 20 adalah 11, 13, 17, 19.\nPernyataan yang bernilai BENAR adalah ...",
            "options": [
              "(1) dan (2) saja",
              "(2) dan (3) saja",
              "(1) dan (3) saja",
              "(1), (2), dan (3)"
            ],
            "correctIndex": 3,
            "hint": "48 = 6 × 8, 56 : 7 = 8, dan bilangan prima adalah yang hanya punya 2 faktor.",
            "explanation": "Ketiga pernyataan benar: 48 kelipatan 6, 7 faktor dari 56, dan 11, 13, 17, 19 adalah bilangan prima."
          },
          {
            "id": 9,
            "question": "Perhatikan dua pecahan berikut: 3/5 dan 4/7. Pernyataan yang benar mengenai perbandingan kedua pecahan tersebut adalah ...",
            "options": [
              "3/5 lebih besar dari 4/7",
              "3/5 lebih kecil dari 4/7",
              "3/5 sama besar dengan 4/7",
              "Kedua pecahan tidak dapat dibandingkan"
            ],
            "correctIndex": 0,
            "hint": "Samakan penyebutnya (35): 3/5 = 21/35, sedangkan 4/7 = 20/35.",
            "explanation": "3/5 = 21/35 dan 4/7 = 20/35. Karena 21/35 > 20/35, maka 3/5 > 4/7."
          },
          {
            "id": 10,
            "question": "Tanda perbandingan yang tepat untuk mengisi titik-titik berikut: 2/3 ... 5/6 adalah ...",
            "options": [
              "> (Lebih dari)",
              "< (Kurang dari)",
              "= (Sama dengan)",
              "≥ (Lebih dari sama dengan)"
            ],
            "correctIndex": 1,
            "hint": "Samakan penyebut: 2/3 = 4/6. Bandingkan 4/6 dengan 5/6.",
            "explanation": "2/3 = 4/6. Karena 4/6 < 5/6, tanda yang tepat adalah '<'."
          },
          {
            "id": 11,
            "question": "Pecahan di bawah ini yang senilai dengan 3/4 adalah ...",
            "options": [
              "6/8 dan 9/12",
              "5/8 dan 6/12",
              "4/5 dan 6/8",
              "6/9 dan 9/15"
            ],
            "correctIndex": 0,
            "hint": "Kalikan pembilang dan penyebut dengan angka yang sama (×2 dan ×3).",
            "explanation": "3/4 = (3×2)/(4×2) = 6/8, dan (3×3)/(4×3) = 9/12."
          },
          {
            "id": 12,
            "question": "Bentuk pecahan biasa 45/100 jika diubah ke dalam bentuk pecahan desimal adalah ...",
            "options": [
              "4,5",
              "0,45",
              "0,045",
              "45,0"
            ],
            "correctIndex": 1,
            "hint": "Penyebut 100 berarti ada dua angka di belakang tanda koma.",
            "explanation": "45/100 = 0,45."
          },
          {
            "id": 13,
            "question": "Bilangan desimal 0,65 jika diubah ke dalam bentuk persen adalah ...",
            "options": [
              "6,5%",
              "0,65%",
              "65%",
              "650%"
            ],
            "correctIndex": 2,
            "hint": "Persen artinya perseratus. 0,65 = 65/100.",
            "explanation": "0,65 = 65/100 = 65%."
          },
          {
            "id": 14,
            "question": "Perhatikan hubungan nilai bilangan berikut:\n(A) 1/4 = 0,25 = 25%\n(B) 1/2 = 0,5 = 50%\n(C) 3/4 = 0,75 = 75%\nAnalisis mengenai ketiga bentuk kesetaraan tersebut adalah ...",
            "options": [
              "Ketiganya benar",
              "Hanya (A) yang benar",
              "Hanya (B) yang salah",
              "Ketiganya salah"
            ],
            "correctIndex": 0,
            "hint": "Periksa: 1/4 = 25%, 1/2 = 50%, 3/4 = 75%.",
            "explanation": "Semua kesetaraan di atas benar: 1/4 = 0,25 (25%), 1/2 = 0,50 (50%), dan 3/4 = 0,75 (75%)."
          },
          {
            "id": 15,
            "question": "Diberikan dua pernyataan:\n(1) 0,8 nilainya sama dengan 80%.\n(2) Pecahan 2/5 jika diubah ke desimal bernilai 0,4.\nUrutan kebenaran dari pernyataan (1) dan (2) adalah ...",
            "options": [
              "Benar - Benar",
              "Benar - Salah",
              "Salah - Benar",
              "Salah - Salah"
            ],
            "correctIndex": 0,
            "hint": "0,8 = 80/100 = 80%. Dan 2/5 = 4/10 = 0,4.",
            "explanation": "Pernyataan (1) Benar karena 0,8 = 80%. Pernyataan (2) Benar karena 2/5 = 4/10 = 0,4. Jadi urutannya: Benar - Benar."
          }
        ]
      },
      {
        "id": "mat-1",
        "title": "Bagian 1: Bilangan Cacah & Faktor Kelipatan (No. 1-8)",
        "difficulty": "Sedang",
        "targetKelas": "Kelas 4 SD",
        "durationMinutes": 15,
        "description": "Latihan 8 soal pertama fokus pada membaca lambang bilangan, nilai tempat, urutan bilangan, operasi hitung, dan faktor kelipatan.",
        "questions": [
          {
            "id": 1,
            "question": "Lambang bilangan 8.405 dibaca ...",
            "options": [
              "Delapan ribu empat ratus lima puluh",
              "Delapan ribu empat ratus lima",
              "Delapan puluh empat ribu lima",
              "Delapan ribu empat puluh lima"
            ],
            "correctIndex": 1,
            "hint": "8 ribuan, 4 ratusan, 0 puluhan, dan 5 satuan.",
            "explanation": "8.405 dibaca 'Delapan ribu empat ratus lima'."
          },
          {
            "id": 2,
            "question": "Sebuah bilangan tersusun atas: 6 ribuan, 0 ratusan, 7 puluhan, dan 9 satuan. Lambang bilangan yang terbentuk adalah ...",
            "options": [
              "6.709",
              "6.790",
              "6.079",
              "6.970"
            ],
            "correctIndex": 2,
            "hint": "Ribuan = 6, Ratusan = 0, Puluhan = 7, Satuan = 9.",
            "explanation": "6 ribuan + 0 ratusan + 7 puluhan + 9 satuan = 6.079."
          },
          {
            "id": 3,
            "question": "Diberikan empat bilangan cacah berikut:\n4.350 ; 3.890 ; 4.120 ; 3.950\nUrutan bilangan dari yang terkecil ke terbesar adalah ...",
            "options": [
              "3.890 ; 3.950 ; 4.120 ; 4.350",
              "3.950 ; 3.890 ; 4.350 ; 4.120",
              "4.350 ; 4.120 ; 3.950 ; 3.890",
              "3.890 ; 4.120 ; 3.950 ; 4.350"
            ],
            "correctIndex": 0,
            "hint": "Bandingkan angka ribuannya terlebih dahulu, lalu ratusannya.",
            "explanation": "Urutan dari yang terkecil: 3.890 < 3.950 < 4.120 < 4.350."
          },
          {
            "id": 4,
            "question": "Hasil dari operasi pengurangan 7.420 - 3.865 adalah ...",
            "options": [
              "3.455",
              "3.555",
              "3.655",
              "4.555"
            ],
            "correctIndex": 1,
            "hint": "Kurangkan dengan teknik meminjam: 7.420 - 3.865.",
            "explanation": "7.420 - 3.865 = 3.555."
          },
          {
            "id": 5,
            "question": "Hasil dari 125 × 24 adalah ...",
            "options": [
              "2.800",
              "3.000",
              "3.200",
              "3.500"
            ],
            "correctIndex": 1,
            "hint": "125 × 24 = 125 × 4 × 6 = 500 × 6.",
            "explanation": "125 × 24 = 3.000."
          },
          {
            "id": 6,
            "question": "Hasil pembagian dari 1.456 : 7 adalah ...",
            "options": [
              "208",
              "218",
              "28",
              "280"
            ],
            "correctIndex": 0,
            "hint": "14 : 7 = 2, 5 : 7 = 0 sisa 5, 56 : 7 = 8.",
            "explanation": "1.456 : 7 = 208."
          },
          {
            "id": 7,
            "question": "Semua faktor dari bilangan 24 secara lengkap adalah ...",
            "options": [
              "1, 2, 3, 4, 6, 8, 12, 24",
              "1, 2, 4, 6, 12, 24",
              "2, 3, 4, 6, 8, 12",
              "1, 2, 3, 6, 8, 24"
            ],
            "correctIndex": 0,
            "hint": "Faktor adalah semua bilangan bulat yang dapat membagi habis 24.",
            "explanation": "Pasangan perkalian 24: 1×24, 2×12, 3×8, 4×6. Jadi faktornya: 1, 2, 3, 4, 6, 8, 12, 24."
          },
          {
            "id": 8,
            "question": "Perhatikan pernyataan tentang faktor dan kelipatan berikut:\n(1) 48 adalah kelipatan dari 6.\n(2) 7 adalah faktor dari 56.\n(3) Bilangan prima antara 10 dan 20 adalah 11, 13, 17, 19.\nPernyataan yang bernilai BENAR adalah ...",
            "options": [
              "(1) dan (2) saja",
              "(2) dan (3) saja",
              "(1) dan (3) saja",
              "(1), (2), dan (3)"
            ],
            "correctIndex": 3,
            "hint": "48 = 6 × 8, 56 : 7 = 8, dan bilangan prima adalah yang hanya punya 2 faktor.",
            "explanation": "Ketiga pernyataan benar: 48 kelipatan 6, 7 faktor dari 56, dan 11, 13, 17, 19 adalah bilangan prima."
          }
        ]
      },
      {
        "id": "mat-2",
        "title": "Bagian 2: Pecahan, Desimal & Persen (No. 9-15)",
        "difficulty": "Tantangan Logika",
        "targetKelas": "Kelas 4 SD",
        "durationMinutes": 15,
        "description": "Latihan 7 soal kedua fokus pada perbandingan pecahan, pecahan senilai, konversi pecahan desimal, dan persen.",
        "questions": [
          {
            "id": 9,
            "question": "Perhatikan dua pecahan berikut: 3/5 dan 4/7. Pernyataan yang benar mengenai perbandingan kedua pecahan tersebut adalah ...",
            "options": [
              "3/5 lebih besar dari 4/7",
              "3/5 lebih kecil dari 4/7",
              "3/5 sama besar dengan 4/7",
              "Kedua pecahan tidak dapat dibandingkan"
            ],
            "correctIndex": 0,
            "hint": "Samakan penyebutnya (35): 3/5 = 21/35, sedangkan 4/7 = 20/35.",
            "explanation": "3/5 = 21/35 dan 4/7 = 20/35. Karena 21/35 > 20/35, maka 3/5 > 4/7."
          },
          {
            "id": 10,
            "question": "Tanda perbandingan yang tepat untuk mengisi titik-titik berikut: 2/3 ... 5/6 adalah ...",
            "options": [
              "> (Lebih dari)",
              "< (Kurang dari)",
              "= (Sama dengan)",
              "≥ (Lebih dari sama dengan)"
            ],
            "correctIndex": 1,
            "hint": "Samakan penyebut: 2/3 = 4/6. Bandingkan 4/6 dengan 5/6.",
            "explanation": "2/3 = 4/6. Karena 4/6 < 5/6, tanda yang tepat adalah '<'."
          },
          {
            "id": 11,
            "question": "Pecahan di bawah ini yang senilai dengan 3/4 adalah ...",
            "options": [
              "6/8 dan 9/12",
              "5/8 dan 6/12",
              "4/5 dan 6/8",
              "6/9 dan 9/15"
            ],
            "correctIndex": 0,
            "hint": "Kalikan pembilang dan penyebut dengan angka yang sama (×2 dan ×3).",
            "explanation": "3/4 = (3×2)/(4×2) = 6/8, dan (3×3)/(4×3) = 9/12."
          },
          {
            "id": 12,
            "question": "Bentuk pecahan biasa 45/100 jika diubah ke dalam bentuk pecahan desimal adalah ...",
            "options": [
              "4,5",
              "0,45",
              "0,045",
              "45,0"
            ],
            "correctIndex": 1,
            "hint": "Penyebut 100 berarti ada dua angka di belakang tanda koma.",
            "explanation": "45/100 = 0,45."
          },
          {
            "id": 13,
            "question": "Bilangan desimal 0,65 jika diubah ke dalam bentuk persen adalah ...",
            "options": [
              "6,5%",
              "0,65%",
              "65%",
              "650%"
            ],
            "correctIndex": 2,
            "hint": "Persen artinya perseratus. 0,65 = 65/100.",
            "explanation": "0,65 = 65/100 = 65%."
          },
          {
            "id": 14,
            "question": "Perhatikan hubungan nilai bilangan berikut:\n(A) 1/4 = 0,25 = 25%\n(B) 1/2 = 0,5 = 50%\n(C) 3/4 = 0,75 = 75%\nAnalisis mengenai ketiga bentuk kesetaraan tersebut adalah ...",
            "options": [
              "Ketiganya benar",
              "Hanya (A) yang benar",
              "Hanya (B) yang salah",
              "Ketiganya salah"
            ],
            "correctIndex": 0,
            "hint": "Periksa: 1/4 = 25%, 1/2 = 50%, 3/4 = 75%.",
            "explanation": "Semua kesetaraan di atas benar: 1/4 = 0,25 (25%), 1/2 = 0,50 (50%), dan 3/4 = 0,75 (75%)."
          },
          {
            "id": 15,
            "question": "Diberikan dua pernyataan:\n(1) 0,8 nilainya sama dengan 80%.\n(2) Pecahan 2/5 jika diubah ke desimal bernilai 0,4.\nUrutan kebenaran dari pernyataan (1) dan (2) adalah ...",
            "options": [
              "Benar - Benar",
              "Benar - Salah",
              "Salah - Benar",
              "Salah - Salah"
            ],
            "correctIndex": 0,
            "hint": "0,8 = 80/100 = 80%. Dan 2/5 = 4/10 = 0,4.",
            "explanation": "Pernyataan (1) Benar karena 0,8 = 80%. Pernyataan (2) Benar karena 2/5 = 4/10 = 0,4. Jadi urutannya: Benar - Benar."
          }
        ]
      }
    ]
  },
  {
    "id": "bahasa_indonesia",
    "name": "Bahasa Indonesia",
    "shortDesc": "Teks Narasi, Kalimat Transitif-Intransitif, Penggunaan Kamus, Ide Pokok, Homonim, Imbuhan me- & ber-, Teks Diskusi & Wawancara.",
    "icon": "📚",
    "themeColor": "tosca",
    "gradient": "from-teal-600 via-cyan-600 to-teal-800",
    "bgPattern": "bg-teal-50",
    "badge": "Kelas 4 / Semester 1",
    "kisiKisi": [
      {
        "no": 1,
        "elemen": "Membaca & Memirsa",
        "materi": "Teks Narasi",
        "indikator": "Disajikan teks narasi, siswa dapat mengidentifikasi hubungan sebab-akibat dalam peristiwa cerita.",
        "level": "L2",
        "bentuk": "PG"
      },
      {
        "no": 2,
        "elemen": "Membaca & Memirsa",
        "materi": "Teks Narasi",
        "indikator": "Disajikan teks narasi, siswa dapat menyimpulkan nilai atau pesan yang terkandung dalam tindakan tokoh.",
        "level": "L2",
        "bentuk": "PG"
      },
      {
        "no": 3,
        "elemen": "Membaca & Memirsa",
        "materi": "Kalimat Transitif dan Intransitif",
        "indikator": "Disajikan beberapa kalimat, siswa dapat membedakan kalimat transitif dan intransitif berdasarkan strukturnya.",
        "level": "L2",
        "bentuk": "PG"
      },
      {
        "no": 4,
        "elemen": "Membaca & Memirsa",
        "materi": "Penggunaan Kamus",
        "indikator": "Disajikan petunjuk penggunaan kamus, siswa dapat menentukan tahapan pencarian lema secara alfabetis.",
        "level": "L1",
        "bentuk": "PG"
      },
      {
        "no": 5,
        "elemen": "Membaca & Memirsa",
        "materi": "Kelas Kata",
        "indikator": "Disajikan petikan entri kamus, siswa dapat mengidentifikasi kelas kata suatu lema.",
        "level": "L2",
        "bentuk": "PG"
      },
      {
        "no": 6,
        "elemen": "Membaca & Memirsa",
        "materi": "Ide Pokok Paragraf",
        "indikator": "Disajikan teks informatif, siswa dapat menentukan ide pokok salah satu paragraf.",
        "level": "L2",
        "bentuk": "PG"
      },
      {
        "no": 7,
        "elemen": "Membaca & Memirsa",
        "materi": "Informasi Pendukung",
        "indikator": "Disajikan teks informatif, siswa dapat mengidentifikasi informasi yang mendukung gagasan utama paragraf.",
        "level": "L2",
        "bentuk": "PG"
      },
      {
        "no": 8,
        "elemen": "Membaca & Memirsa",
        "materi": "Isi Teks Informasi",
        "indikator": "Disajikan teks informatif, siswa dapat menentukan informasi yang diperoleh dari bagian tertentu teks.",
        "level": "L2",
        "bentuk": "PG"
      },
      {
        "no": 9,
        "elemen": "Membaca & Memirsa",
        "materi": "Makna Kata (Homonim)",
        "indikator": "Disajikan beberapa kalimat, siswa dapat membedakan makna kata yang sama bentuknya berdasarkan konteks.",
        "level": "L2",
        "bentuk": "PG"
      },
      {
        "no": 10,
        "elemen": "Menulis",
        "materi": "Imbuhan me-",
        "indikator": "Disajikan beberapa kalimat, siswa dapat mengidentifikasi penggunaan imbuhan me- yang mengalami perubahan bentuk.",
        "level": "L2",
        "bentuk": "PG"
      },
      {
        "no": 11,
        "elemen": "Menulis",
        "materi": "Imbuhan ber-",
        "indikator": "Disajikan kalimat, siswa dapat menentukan fungsi penggunaan imbuhan ber- pada kata.",
        "level": "L2",
        "bentuk": "PG"
      },
      {
        "no": 12,
        "elemen": "Membaca & Memirsa",
        "materi": "Teks Diskusi",
        "indikator": "Disajikan teks diskusi, siswa dapat mengidentifikasi bagian yang menunjukkan perbedaan sudut pandang.",
        "level": "L2",
        "bentuk": "PG"
      },
      {
        "no": 13,
        "elemen": "Membaca & Memirsa",
        "materi": "Konjungsi",
        "indikator": "Disajikan beberapa kalimat, siswa dapat mengidentifikasi penggunaan konjungsi pertentangan.",
        "level": "L2",
        "bentuk": "PG"
      },
      {
        "no": 14,
        "elemen": "Membaca & Memirsa",
        "materi": "Argumen dan Alasan",
        "indikator": "Disajikan teks argumentatif, siswa dapat menentukan alasan yang relevan untuk mendukung pendapat.",
        "level": "L3",
        "bentuk": "PG"
      },
      {
        "no": 15,
        "elemen": "Membaca & Memirsa",
        "materi": "Struktur Teks Narasi",
        "indikator": "Disajikan ilustrasi struktur teks, siswa dapat memasangkan bagian struktur dengan fungsinya.",
        "level": "L2",
        "bentuk": "PG"
      },
      {
        "no": 16,
        "elemen": "Membaca & Memirsa",
        "materi": "Makna Kata (Homonim)",
        "indikator": "Disajikan konteks penggunaan kata dan informasi kamus, siswa dapat menentukan makna kata yang sesuai.",
        "level": "L2",
        "bentuk": "PG"
      },
      {
        "no": 17,
        "elemen": "Membaca & Memirsa",
        "materi": "Makna Denotatif dan Konotatif",
        "indikator": "Disajikan beberapa kalimat, siswa dapat mengidentifikasi penggunaan kata bermakna denotatif.",
        "level": "L2",
        "bentuk": "PG"
      },
      {
        "no": 18,
        "elemen": "Membaca & Memirsa",
        "materi": "Teks Deskripsi",
        "indikator": "Disajikan teks deskripsi, siswa dapat menentukan kalimat yang menunjukkan penggambaran objek secara terperinci.",
        "level": "L2",
        "bentuk": "PG"
      },
      {
        "no": 19,
        "elemen": "Berbicara",
        "materi": "Wawancara",
        "indikator": "Disajikan kutipan wawancara, siswa dapat menentukan pertanyaan lanjutan yang relevan untuk memperdalam informasi.",
        "level": "L3",
        "bentuk": "PG"
      },
      {
        "no": 20,
        "elemen": "Menulis",
        "materi": "Laporan Hasil Wawancara",
        "indikator": "Disajikan kutipan wawancara, siswa dapat memilih kalimat laporan yang sesuai dengan informasi narasumber.",
        "level": "L2",
        "bentuk": "PG"
      }
    ],
    "packages": [
      {
        "id": "indo-full",
        "title": "Paket Lengkap ASAS 1 (20 Soal Sesuai Kisi-Kisi)",
        "difficulty": "L1, L2 & L3 (Lengkap)",
        "targetKelas": "Kelas 4 SD",
        "durationMinutes": 30,
        "description": "20 Soal Pilihan Ganda lengkap mencakup Membaca & Memirsa, Menulis, dan Berbicara sesuai kisi-kisi resmi.",
        "questions": [
          {
            "id": 1,
            "question": "Bacalah teks berikut:\n'Karena hujan deras mengguyur desa sepanjang malam dan saluran air tersumbat sampah, halaman sekolah terendam banjir. Akibatnya, para siswa terpaksa belajar daring dari rumah.'\nHubungan sebab-akibat yang tepat dari kutipan di atas adalah ...",
            "options": [
              "Siswa belajar daring karena halaman sekolah terendam banjir akibat hujan deras dan sampah menyumbat saluran air",
              "Hujan deras terjadi karena para siswa belajar daring di rumah",
              "Saluran air tersumbat karena halaman sekolah terendam banjir",
              "Para siswa meliburkan diri karena ingin bermain hujan di halaman"
            ],
            "correctIndex": 0,
            "hint": "Sebab: hujan deras dan sampah menyumbat. Akibat: banjir sekolah sehingga belajar daring.",
            "explanation": "Penyebabnya adalah hujan deras dan saluran tersumbat sampah, yang mengakibatkan sekolah banjir sehingga siswa belajar dari rumah."
          },
          {
            "id": 2,
            "question": "Dalam cerita 'Semut dan Belalang', Semut bekerja keras tanpa lelah mengumpulkan biji-bijian di musim panas untuk persediaan musim dingin. Sementara Belalang hanya bermalas-malasan bernyanyi. Nilai pesan moral yang dapat kita petik dari tindakan tokoh Semut adalah ...",
            "options": [
              "Bekerja keras dan merencanakan masa depan dengan rajin akan mendatangkan ketenangan dan keselamatan",
              "Kita sebaiknya bersenang-senang setiap hari tanpa memikirkan hari esok",
              "Menghindari teman yang meminta bantuan",
              "Bermalas-malasan adalah hak setiap orang"
            ],
            "correctIndex": 0,
            "hint": "Ketekunan semut mengajarkan kita arti kerja keras dan persiapan masa depan.",
            "explanation": "Tindakan Semut mengajarkan pentingnya kerja keras, ketekunan, dan persiapan matang dalam menghadapi masa depan."
          },
          {
            "id": 3,
            "question": "Kalimat transitif adalah kalimat yang memerlukan objek (S-P-O). Di antara kalimat berikut, yang merupakan kalimat transitif adalah ...",
            "options": [
              "Adik menangis tersedu-sedu",
              "Kucing itu tertidur pulas di teras",
              "Ibu memasak nasi goreng di dapur",
              "Burung pipit terbang tinggi"
            ],
            "correctIndex": 2,
            "hint": "Ibu (Subjek) memasak (Predikat) nasi goreng (Objek).",
            "explanation": "'Ibu memasak nasi goreng di dapur' memiliki objek yaitu 'nasi goreng' sehingga merupakan kalimat transitif."
          },
          {
            "id": 4,
            "question": "Ketika mencari makna kata 'Menyapu' di dalam Kamus Besar Bahasa Indonesia (KBBI), tahapan pencarian kata secara alfabetis yang paling tepat adalah ...",
            "options": [
              "Mencari pada huruf M untuk kata 'Menyapu'",
              "Mencari kata dasar 'Sapu' pada kelompok huruf S terlebih dahulu",
              "Mencari pada kelompok huruf Y",
              "Mencari pada bagian lampiran belakang kamus"
            ],
            "correctIndex": 1,
            "hint": "Dalam kamus, kata berimbuhan dicari berdasarkan kata dasarnya.",
            "explanation": "Kata 'menyapu' memiliki kata dasar 'sapu', sehingga dicari di bawah lema huruf 'S' (sapu) dalam kamus."
          },
          {
            "id": 5,
            "question": "Perhatikan entri kamus berikut:\n'cantik /can·tik/ a 1 elok; molek; rupawan (tentang wajah, bentuk tubuh)'\nKode huruf 'a' di belakang kata entri tersebut menunjukkan kelas kata ...",
            "options": [
              "Adjektiva (kata sifat)",
              "Nomina (kata benda)",
              "Verba (kata kerja)",
              "Adverbia (kata keterangan)"
            ],
            "correctIndex": 0,
            "hint": "Dalam KBBI: a = adjektiva (sifat), n = nomina (benda), v = verba (kerja).",
            "explanation": "Kode 'a' dalam kamus menandakan kelas kata adjektiva (kata sifat)."
          },
          {
            "id": 6,
            "question": "Bacalah paragraf berikut:\n'Menjaga kebersihan gigi sangat penting bagi kesehatan tubuh. Sisa makanan yang tertinggal dapat membusuk dan mengundang kuman perusak gigi. Jika gigi berlubang, anak akan merasakan sakit hebat sehingga sulit makan dan konsentrasi belajar terganggu.'\nIde pokok paragraf di atas adalah ...",
            "options": [
              "Pentingnya menjaga kebersihan gigi bagi kesehatan",
              "Bahaya kuman perusak gigi yang kecil",
              "Cara menambal gigi yang berlubang di puskesmas",
              "Makanan manis yang disukai anak-anak"
            ],
            "correctIndex": 0,
            "hint": "Gagasan utama berada di kalimat pertama yang dijelaskan oleh kalimat-kalimat berikutnya.",
            "explanation": "Kalimat utama di awal paragraf menyatakan pentingnya menjaga kebersihan gigi bagi kesehatan."
          },
          {
            "id": 7,
            "question": "Berdasarkan paragraf di atas, kalimat yang berfungsi sebagai informasi pendukung (kalimat penjelas) yang menjelaskan alasan mengapa gigi bisa sakit adalah ...",
            "options": [
              "Menjaga kebersihan gigi sangat penting",
              "Sisa makanan yang tertinggal dapat membusuk dan mengundang kuman perusak gigi",
              "Semua anak suka menggosok gigi",
              "Dokter gigi selalu ramah melayani pasien"
            ],
            "correctIndex": 1,
            "hint": "Kalimat penjelas menjelaskan proses sisa makanan menjadi sarang kuman.",
            "explanation": "Kalimat tersebut menjelaskan secara rinci akibat sisa makanan membusuk yang mendukung gagasan utama."
          },
          {
            "id": 8,
            "question": "Bacalah teks berikut:\n'Taman Nasional Komodo terletak di Kepulauan Nusa Tenggara. Taman ini didirikan untuk melindungi hewan purba langka komodo dan habitat aslinya agar tidak punah.'\nInformasi utama yang diperoleh dari kutipan tersebut adalah ...",
            "options": [
              "Taman Nasional Komodo didirikan untuk melindungi komodo dan habitat aslinya",
              "Komodo adalah hewan yang hidup di kutub utara",
              "Taman Nasional Komodo merupakan pusat perbelanjaan terbesar",
              "Komodo dapat dipelihara bebas di rumah warga"
            ],
            "correctIndex": 0,
            "hint": "Perhatikan tujuan pendirian taman nasional pada teks.",
            "explanation": "Teks dengan jelas menyatakan tujuan pendirian Taman Nasional Komodo adalah melindungi komodo dan habitat alaminya."
          },
          {
            "id": 9,
            "question": "Kata 'BISA' pada kalimat:\n(1) Ular kobra memiliki bisa yang sangat mematikan.\n(2) Dani bisa berenang menyeberangi kolam air.\nKedua kata 'bisa' di atas memiliki ejaan dan lafal sama namun makna berbeda. Kata seperti ini dinamakan ...",
            "options": [
              "Sinonim",
              "Antonim",
              "Homonim",
              "Akronim"
            ],
            "correctIndex": 2,
            "hint": "Homonim: kata yang sama ejaan dan bunyinya, tetapi maknanya berbeda.",
            "explanation": "Homonim adalah kata yang memiliki lafal dan tulisan sama tetapi artinya berbeda (bisa = racun vs bisa = dapat/mampu)."
          },
          {
            "id": 10,
            "question": "Imbuhan me- yang dirangkai dengan kata dasar yang diawali huruf K, T, S, P biasanya mengalami peluluhan fonem. Kata berimbuhan me- di bawah ini yang mengalami perubahan bentuk dan peluluhan yang benar adalah ...",
            "options": [
              "me- + sapu menjadi menyapu",
              "me- + sapu menjadi mensapu",
              "me- + tulis menjadi mentulis",
              "me- + kunci menjadi menkunci"
            ],
            "correctIndex": 0,
            "hint": "Huruf S luluh menjadi 'ny-': me- + sapu -> menyapu.",
            "explanation": "Huruf K, T, S, P pada awal kata dasar luluh saat diberi awalan me-, sehingga me- + sapu menjadi 'menyapu'."
          },
          {
            "id": 11,
            "question": "Perhatikan kalimat: 'Edo bersepeda ke sekolah setiap pagi.' Fungsi imbuhan ber- pada kata 'bersepeda' menyatakan arti ...",
            "options": [
              "Mengendarai atau menggunakan sepeda",
              "Membuat sepeda baru di bengkel",
              "Menjual sepeda kepada teman",
              "Memiliki banyak sepeda antik"
            ],
            "correctIndex": 0,
            "hint": "Bersepeda artinya mengendarai atau menaiki sepeda.",
            "explanation": "Imbuhan ber- pada kata 'bersepeda' bermakna mengendarai atau menggunakan alat berupa sepeda."
          },
          {
            "id": 12,
            "question": "Dalam teks diskusi tentang 'Membawa Ponsel ke Sekolah', terdapat dua kubu: pihak yang setuju beralasan ponsel mempermudah komunikasi darurat, sedangkan pihak yang menolak khawatir siswa kurang fokus belajar. Bagian teks yang menyajikan perbedaan sudut pandang tersebut dinamakan bagian ...",
            "options": [
              "Orientasi pengenalan",
              "Argumen pro dan kontra (isi diskusi)",
              "Simpulan akhir",
              "Daftar pustaka"
            ],
            "correctIndex": 1,
            "hint": "Bagian yang memuat pandangan mendukung (pro) dan menentang (kontra) adalah argumen.",
            "explanation": "Bagian argumen menyajikan sudut pandang berbeda yang disertai alasan logis dari kedua belah pihak."
          },
          {
            "id": 13,
            "question": "Kalimat yang menggunakan konjungsi (kata hubung) pertentangan yang tepat adalah ...",
            "options": [
              "Rian ingin bermain bola di lapangan, tetapi hujan lebat tiba-tiba turun",
              "Siti belajar giat sehingga ia menjadi juara kelas",
              "Ayah membaca koran dan ibu menyiram bunga",
              "Dedi bangun pagi-pagi agar tidak terlambat"
            ],
            "correctIndex": 0,
            "hint": "Konjungsi pertentangan contohnya: tetapi, sedangkan, melainkan, namun.",
            "explanation": "Kata 'tetapi' menyatakan pertentangan antara keinginan bermain bola dan keadaan cuaca hujan lebat."
          },
          {
            "id": 14,
            "question": "Dalam debat kelas, Tono berpendapat: 'Siswa kelas 4 harus mengurangi bermain game online.' Alasan yang paling logis dan relevan untuk mendukung pendapat Tono adalah ...",
            "options": [
              "Bermain game online berlebihan dapat mengganggu waktu belajar dan merusak kesehatan mata",
              "Bermain game online membuat baterai ponsel awet",
              "Semua game online dilarang oleh toko aplikasi",
              "Ponsel akan cepat membesar jika sering digunakan"
            ],
            "correctIndex": 0,
            "hint": "Pilihlah alasan yang ilmiah, masuk akal, dan berorientasi positif bagi siswa.",
            "explanation": "Alasan yang relevan dan logis adalah bahwa bermain game berlebihan menyita waktu belajar dan membebani mata."
          },
          {
            "id": 15,
            "question": "Perhatikan bagian struktur teks narasi:\n(1) Orientasi - Pengenalan tokoh, latar tempat, dan waktu cerita\n(2) Komplikasi - Munculnya masalah atau konflik yang dihadapi tokoh\n(3) Resolusi - Penyelesaian masalah dari peristiwa cerita\nPasangan struktur dan fungsinya di atas bernilai ...",
            "options": [
              "Semuanya tepat dan benar",
              "Hanya (1) yang benar",
              "Hanya (2) yang salah",
              "Semuanya salah"
            ],
            "correctIndex": 0,
            "hint": "Struktur narasi standar: Orientasi -> Komplikasi -> Resolusi.",
            "explanation": "Ketiga pasangan struktur narasi dan fungsinya sudah tepat sesuai kaidah sastra teks naratif."
          },
          {
            "id": 16,
            "question": "Di kamus, kata 'GENTING' memiliki dua arti:\n(1) Tutup atap rumah yang terbuat dari tanah liat yang dibakar.\n(2) Tegang, berbahaya, atau gawat (tentang keadaan suasana).\nMakna kata 'genting' yang bermakna atap rumah digunakan pada kalimat ...",
            "options": [
              "Suasana di perbatasan semakin genting menjelang malam",
              "Ayah naik ke atas tangga untuk memperbaiki genting yang bocor",
              "Keadaan ekonomi negara sedang genting",
              "Wajahnya tampak genting saat menghadapi ujian"
            ],
            "correctIndex": 1,
            "hint": "Genting yang bocor berhubungan dengan atap rumah.",
            "explanation": "Pada kalimat 'Ayah memperbaiki genting yang bocor', kata genting bermakna penutup atap rumah."
          },
          {
            "id": 17,
            "question": "Makna denotatif adalah makna kata yang sebenarnya (lugas), bukan kiasan. Kalimat di bawah ini yang menggunakan kata bermakna denotatif adalah ...",
            "options": [
              "Pencuri itu panjang tangan",
              "Ibu menyapu lantai rumah dengan sapu lidi hingga bersih",
              "Rani adalah bintang kelas di sekolah kami",
              "Pejabat itu duduk di kursi panas"
            ],
            "correctIndex": 1,
            "hint": "'Panjang tangan', 'bintang kelas', dan 'kursi panas' adalah ungkapan kiasan (konotatif).",
            "explanation": "Kalimat 'Ibu menyapu lantai rumah dengan sapu lidi hingga bersih' menggunakan makna sebenarnya (denotatif)."
          },
          {
            "id": 18,
            "question": "Kalimat dalam teks deskripsi yang menggambarkan objek pantai secara terperinci melibatkan panca indra penglihatan dan pendengaran adalah ...",
            "options": [
              "Pantai itu bernama Pantai Baron",
              "Air laut tampak membiru jernih dengan deburan ombak putih yang bergemuruh memecah karang",
              "Pantai adalah tempat wisata",
              "Banyak orang suka berwisata ke pantai"
            ],
            "correctIndex": 1,
            "hint": "Mendeskripsikan warna biru jernih (penglihatan) dan deburan suara ombak (pendengaran).",
            "explanation": "Kalimat tersebut melukiskan detail visual warna air laut dan audio suara ombak secara indrawi."
          },
          {
            "id": 19,
            "question": "Dalam wawancara, narasumber berkata: 'Usaha pembuatan tempe kedelai ini sudah saya rintis sejak sepuluh tahun lalu bersama keluarga.'\nPertanyaan lanjutan yang paling relevan untuk memperdalam informasi proses produksinya adalah ...",
            "options": [
              "Berapa harga sepatu yang Bapak kenakan saat ini?",
              "Bagaimana tahapan memilih kedelai berkualitas dan proses fermentasi ragi yang Bapak lakukan?",
              "Di mana Bapak membeli motor pertama kali?",
              "Mengapa Bapak suka warna baju biru?"
            ],
            "correctIndex": 1,
            "hint": "Pertanyaan lanjutan harus berkaitan erat dengan pembuatan tempe.",
            "explanation": "Pertanyaan mengenai tahapan memilih kedelai dan fermentasi ragi sangat relevan menggali informasi proses produksi tempe."
          },
          {
            "id": 20,
            "question": "Narasumber (Pak Lurah): 'Kami menjadwalkan kerja bakti membersihkan selokan setiap hari Minggu pagi untuk mencegah sarang nyamuk DBD.'\nPenulisan kalimat laporan hasil wawancara yang tepat adalah ...",
            "options": [
              "Menurut Pak Lurah, warga desa menjadwalkan kerja bakti setiap hari Minggu pagi guna mencegah sarang nyamuk DBD",
              "Pak Lurah melarang semua warga keluar rumah pada hari Minggu",
              "Nyamuk DBD disukai oleh Pak Lurah setiap hari Minggu",
              "Kerja bakti dibatalkan karena tidak ada nyamuk"
            ],
            "correctIndex": 0,
            "hint": "Laporan menyajikan kembali informasi narasumber dengan kalimat tidak langsung yang setia pada fakta.",
            "explanation": "Kalimat tersebut merangkum pernyataan narasumber secara akurat dan menggunakan bahasa baku yang objektif."
          }
        ]
      },
      {
        "id": "indo-1",
        "title": "Bagian 1: Teks Narasi, Kamus & Ide Pokok (No. 1-10)",
        "difficulty": "Sedang",
        "targetKelas": "Kelas 4 SD",
        "durationMinutes": 15,
        "description": "Latihan 10 soal pertama fokus pada sebab-akibat cerita, kalimat transitif, lema kamus, ide pokok, dan homonim.",
        "questions": [
          {
            "id": 1,
            "question": "Bacalah teks berikut:\n'Karena hujan deras mengguyur desa sepanjang malam dan saluran air tersumbat sampah, halaman sekolah terendam banjir. Akibatnya, para siswa terpaksa belajar daring dari rumah.'\nHubungan sebab-akibat yang tepat dari kutipan di atas adalah ...",
            "options": [
              "Siswa belajar daring karena halaman sekolah terendam banjir akibat hujan deras dan sampah menyumbat saluran air",
              "Hujan deras terjadi karena para siswa belajar daring di rumah",
              "Saluran air tersumbat karena halaman sekolah terendam banjir",
              "Para siswa meliburkan diri karena ingin bermain hujan di halaman"
            ],
            "correctIndex": 0,
            "hint": "Sebab: hujan deras dan sampah menyumbat. Akibat: banjir sekolah sehingga belajar daring.",
            "explanation": "Penyebabnya adalah hujan deras dan saluran tersumbat sampah, yang mengakibatkan sekolah banjir sehingga siswa belajar dari rumah."
          },
          {
            "id": 2,
            "question": "Dalam cerita 'Semut dan Belalang', Semut bekerja keras tanpa lelah mengumpulkan biji-bijian di musim panas untuk persediaan musim dingin. Sementara Belalang hanya bermalas-malasan bernyanyi. Nilai pesan moral yang dapat kita petik dari tindakan tokoh Semut adalah ...",
            "options": [
              "Bekerja keras dan merencanakan masa depan dengan rajin akan mendatangkan ketenangan dan keselamatan",
              "Kita sebaiknya bersenang-senang setiap hari tanpa memikirkan hari esok",
              "Menghindari teman yang meminta bantuan",
              "Bermalas-malasan adalah hak setiap orang"
            ],
            "correctIndex": 0,
            "hint": "Ketekunan semut mengajarkan kita arti kerja keras dan persiapan masa depan.",
            "explanation": "Tindakan Semut mengajarkan pentingnya kerja keras, ketekunan, dan persiapan matang dalam menghadapi masa depan."
          },
          {
            "id": 3,
            "question": "Kalimat transitif adalah kalimat yang memerlukan objek (S-P-O). Di antara kalimat berikut, yang merupakan kalimat transitif adalah ...",
            "options": [
              "Adik menangis tersedu-sedu",
              "Kucing itu tertidur pulas di teras",
              "Ibu memasak nasi goreng di dapur",
              "Burung pipit terbang tinggi"
            ],
            "correctIndex": 2,
            "hint": "Ibu (Subjek) memasak (Predikat) nasi goreng (Objek).",
            "explanation": "'Ibu memasak nasi goreng di dapur' memiliki objek yaitu 'nasi goreng' sehingga merupakan kalimat transitif."
          },
          {
            "id": 4,
            "question": "Ketika mencari makna kata 'Menyapu' di dalam Kamus Besar Bahasa Indonesia (KBBI), tahapan pencarian kata secara alfabetis yang paling tepat adalah ...",
            "options": [
              "Mencari pada huruf M untuk kata 'Menyapu'",
              "Mencari kata dasar 'Sapu' pada kelompok huruf S terlebih dahulu",
              "Mencari pada kelompok huruf Y",
              "Mencari pada bagian lampiran belakang kamus"
            ],
            "correctIndex": 1,
            "hint": "Dalam kamus, kata berimbuhan dicari berdasarkan kata dasarnya.",
            "explanation": "Kata 'menyapu' memiliki kata dasar 'sapu', sehingga dicari di bawah lema huruf 'S' (sapu) dalam kamus."
          },
          {
            "id": 5,
            "question": "Perhatikan entri kamus berikut:\n'cantik /can·tik/ a 1 elok; molek; rupawan (tentang wajah, bentuk tubuh)'\nKode huruf 'a' di belakang kata entri tersebut menunjukkan kelas kata ...",
            "options": [
              "Adjektiva (kata sifat)",
              "Nomina (kata benda)",
              "Verba (kata kerja)",
              "Adverbia (kata keterangan)"
            ],
            "correctIndex": 0,
            "hint": "Dalam KBBI: a = adjektiva (sifat), n = nomina (benda), v = verba (kerja).",
            "explanation": "Kode 'a' dalam kamus menandakan kelas kata adjektiva (kata sifat)."
          },
          {
            "id": 6,
            "question": "Bacalah paragraf berikut:\n'Menjaga kebersihan gigi sangat penting bagi kesehatan tubuh. Sisa makanan yang tertinggal dapat membusuk dan mengundang kuman perusak gigi. Jika gigi berlubang, anak akan merasakan sakit hebat sehingga sulit makan dan konsentrasi belajar terganggu.'\nIde pokok paragraf di atas adalah ...",
            "options": [
              "Pentingnya menjaga kebersihan gigi bagi kesehatan",
              "Bahaya kuman perusak gigi yang kecil",
              "Cara menambal gigi yang berlubang di puskesmas",
              "Makanan manis yang disukai anak-anak"
            ],
            "correctIndex": 0,
            "hint": "Gagasan utama berada di kalimat pertama yang dijelaskan oleh kalimat-kalimat berikutnya.",
            "explanation": "Kalimat utama di awal paragraf menyatakan pentingnya menjaga kebersihan gigi bagi kesehatan."
          },
          {
            "id": 7,
            "question": "Berdasarkan paragraf di atas, kalimat yang berfungsi sebagai informasi pendukung (kalimat penjelas) yang menjelaskan alasan mengapa gigi bisa sakit adalah ...",
            "options": [
              "Menjaga kebersihan gigi sangat penting",
              "Sisa makanan yang tertinggal dapat membusuk dan mengundang kuman perusak gigi",
              "Semua anak suka menggosok gigi",
              "Dokter gigi selalu ramah melayani pasien"
            ],
            "correctIndex": 1,
            "hint": "Kalimat penjelas menjelaskan proses sisa makanan menjadi sarang kuman.",
            "explanation": "Kalimat tersebut menjelaskan secara rinci akibat sisa makanan membusuk yang mendukung gagasan utama."
          },
          {
            "id": 8,
            "question": "Bacalah teks berikut:\n'Taman Nasional Komodo terletak di Kepulauan Nusa Tenggara. Taman ini didirikan untuk melindungi hewan purba langka komodo dan habitat aslinya agar tidak punah.'\nInformasi utama yang diperoleh dari kutipan tersebut adalah ...",
            "options": [
              "Taman Nasional Komodo didirikan untuk melindungi komodo dan habitat aslinya",
              "Komodo adalah hewan yang hidup di kutub utara",
              "Taman Nasional Komodo merupakan pusat perbelanjaan terbesar",
              "Komodo dapat dipelihara bebas di rumah warga"
            ],
            "correctIndex": 0,
            "hint": "Perhatikan tujuan pendirian taman nasional pada teks.",
            "explanation": "Teks dengan jelas menyatakan tujuan pendirian Taman Nasional Komodo adalah melindungi komodo dan habitat alaminya."
          },
          {
            "id": 9,
            "question": "Kata 'BISA' pada kalimat:\n(1) Ular kobra memiliki bisa yang sangat mematikan.\n(2) Dani bisa berenang menyeberangi kolam air.\nKedua kata 'bisa' di atas memiliki ejaan dan lafal sama namun makna berbeda. Kata seperti ini dinamakan ...",
            "options": [
              "Sinonim",
              "Antonim",
              "Homonim",
              "Akronim"
            ],
            "correctIndex": 2,
            "hint": "Homonim: kata yang sama ejaan dan bunyinya, tetapi maknanya berbeda.",
            "explanation": "Homonim adalah kata yang memiliki lafal dan tulisan sama tetapi artinya berbeda (bisa = racun vs bisa = dapat/mampu)."
          },
          {
            "id": 10,
            "question": "Imbuhan me- yang dirangkai dengan kata dasar yang diawali huruf K, T, S, P biasanya mengalami peluluhan fonem. Kata berimbuhan me- di bawah ini yang mengalami perubahan bentuk dan peluluhan yang benar adalah ...",
            "options": [
              "me- + sapu menjadi menyapu",
              "me- + sapu menjadi mensapu",
              "me- + tulis menjadi mentulis",
              "me- + kunci menjadi menkunci"
            ],
            "correctIndex": 0,
            "hint": "Huruf S luluh menjadi 'ny-': me- + sapu -> menyapu.",
            "explanation": "Huruf K, T, S, P pada awal kata dasar luluh saat diberi awalan me-, sehingga me- + sapu menjadi 'menyapu'."
          }
        ]
      },
      {
        "id": "indo-2",
        "title": "Bagian 2: Imbuhan, Teks Diskusi & Wawancara (No. 11-20)",
        "difficulty": "Tantangan Pemahaman",
        "targetKelas": "Kelas 4 SD",
        "durationMinutes": 15,
        "description": "Latihan 10 soal kedua fokus pada fungsi ber-, teks diskusi pro-kontra, konjungsi pertentangan, denotatif, dan wawancara.",
        "questions": [
          {
            "id": 11,
            "question": "Perhatikan kalimat: 'Edo bersepeda ke sekolah setiap pagi.' Fungsi imbuhan ber- pada kata 'bersepeda' menyatakan arti ...",
            "options": [
              "Mengendarai atau menggunakan sepeda",
              "Membuat sepeda baru di bengkel",
              "Menjual sepeda kepada teman",
              "Memiliki banyak sepeda antik"
            ],
            "correctIndex": 0,
            "hint": "Bersepeda artinya mengendarai atau menaiki sepeda.",
            "explanation": "Imbuhan ber- pada kata 'bersepeda' bermakna mengendarai atau menggunakan alat berupa sepeda."
          },
          {
            "id": 12,
            "question": "Dalam teks diskusi tentang 'Membawa Ponsel ke Sekolah', terdapat dua kubu: pihak yang setuju beralasan ponsel mempermudah komunikasi darurat, sedangkan pihak yang menolak khawatir siswa kurang fokus belajar. Bagian teks yang menyajikan perbedaan sudut pandang tersebut dinamakan bagian ...",
            "options": [
              "Orientasi pengenalan",
              "Argumen pro dan kontra (isi diskusi)",
              "Simpulan akhir",
              "Daftar pustaka"
            ],
            "correctIndex": 1,
            "hint": "Bagian yang memuat pandangan mendukung (pro) dan menentang (kontra) adalah argumen.",
            "explanation": "Bagian argumen menyajikan sudut pandang berbeda yang disertai alasan logis dari kedua belah pihak."
          },
          {
            "id": 13,
            "question": "Kalimat yang menggunakan konjungsi (kata hubung) pertentangan yang tepat adalah ...",
            "options": [
              "Rian ingin bermain bola di lapangan, tetapi hujan lebat tiba-tiba turun",
              "Siti belajar giat sehingga ia menjadi juara kelas",
              "Ayah membaca koran dan ibu menyiram bunga",
              "Dedi bangun pagi-pagi agar tidak terlambat"
            ],
            "correctIndex": 0,
            "hint": "Konjungsi pertentangan contohnya: tetapi, sedangkan, melainkan, namun.",
            "explanation": "Kata 'tetapi' menyatakan pertentangan antara keinginan bermain bola dan keadaan cuaca hujan lebat."
          },
          {
            "id": 14,
            "question": "Dalam debat kelas, Tono berpendapat: 'Siswa kelas 4 harus mengurangi bermain game online.' Alasan yang paling logis dan relevan untuk mendukung pendapat Tono adalah ...",
            "options": [
              "Bermain game online berlebihan dapat mengganggu waktu belajar dan merusak kesehatan mata",
              "Bermain game online membuat baterai ponsel awet",
              "Semua game online dilarang oleh toko aplikasi",
              "Ponsel akan cepat membesar jika sering digunakan"
            ],
            "correctIndex": 0,
            "hint": "Pilihlah alasan yang ilmiah, masuk akal, dan berorientasi positif bagi siswa.",
            "explanation": "Alasan yang relevan dan logis adalah bahwa bermain game berlebihan menyita waktu belajar dan membebani mata."
          },
          {
            "id": 15,
            "question": "Perhatikan bagian struktur teks narasi:\n(1) Orientasi - Pengenalan tokoh, latar tempat, dan waktu cerita\n(2) Komplikasi - Munculnya masalah atau konflik yang dihadapi tokoh\n(3) Resolusi - Penyelesaian masalah dari peristiwa cerita\nPasangan struktur dan fungsinya di atas bernilai ...",
            "options": [
              "Semuanya tepat dan benar",
              "Hanya (1) yang benar",
              "Hanya (2) yang salah",
              "Semuanya salah"
            ],
            "correctIndex": 0,
            "hint": "Struktur narasi standar: Orientasi -> Komplikasi -> Resolusi.",
            "explanation": "Ketiga pasangan struktur narasi dan fungsinya sudah tepat sesuai kaidah sastra teks naratif."
          },
          {
            "id": 16,
            "question": "Di kamus, kata 'GENTING' memiliki dua arti:\n(1) Tutup atap rumah yang terbuat dari tanah liat yang dibakar.\n(2) Tegang, berbahaya, atau gawat (tentang keadaan suasana).\nMakna kata 'genting' yang bermakna atap rumah digunakan pada kalimat ...",
            "options": [
              "Suasana di perbatasan semakin genting menjelang malam",
              "Ayah naik ke atas tangga untuk memperbaiki genting yang bocor",
              "Keadaan ekonomi negara sedang genting",
              "Wajahnya tampak genting saat menghadapi ujian"
            ],
            "correctIndex": 1,
            "hint": "Genting yang bocor berhubungan dengan atap rumah.",
            "explanation": "Pada kalimat 'Ayah memperbaiki genting yang bocor', kata genting bermakna penutup atap rumah."
          },
          {
            "id": 17,
            "question": "Makna denotatif adalah makna kata yang sebenarnya (lugas), bukan kiasan. Kalimat di bawah ini yang menggunakan kata bermakna denotatif adalah ...",
            "options": [
              "Pencuri itu panjang tangan",
              "Ibu menyapu lantai rumah dengan sapu lidi hingga bersih",
              "Rani adalah bintang kelas di sekolah kami",
              "Pejabat itu duduk di kursi panas"
            ],
            "correctIndex": 1,
            "hint": "'Panjang tangan', 'bintang kelas', dan 'kursi panas' adalah ungkapan kiasan (konotatif).",
            "explanation": "Kalimat 'Ibu menyapu lantai rumah dengan sapu lidi hingga bersih' menggunakan makna sebenarnya (denotatif)."
          },
          {
            "id": 18,
            "question": "Kalimat dalam teks deskripsi yang menggambarkan objek pantai secara terperinci melibatkan panca indra penglihatan dan pendengaran adalah ...",
            "options": [
              "Pantai itu bernama Pantai Baron",
              "Air laut tampak membiru jernih dengan deburan ombak putih yang bergemuruh memecah karang",
              "Pantai adalah tempat wisata",
              "Banyak orang suka berwisata ke pantai"
            ],
            "correctIndex": 1,
            "hint": "Mendeskripsikan warna biru jernih (penglihatan) dan deburan suara ombak (pendengaran).",
            "explanation": "Kalimat tersebut melukiskan detail visual warna air laut dan audio suara ombak secara indrawi."
          },
          {
            "id": 19,
            "question": "Dalam wawancara, narasumber berkata: 'Usaha pembuatan tempe kedelai ini sudah saya rintis sejak sepuluh tahun lalu bersama keluarga.'\nPertanyaan lanjutan yang paling relevan untuk memperdalam informasi proses produksinya adalah ...",
            "options": [
              "Berapa harga sepatu yang Bapak kenakan saat ini?",
              "Bagaimana tahapan memilih kedelai berkualitas dan proses fermentasi ragi yang Bapak lakukan?",
              "Di mana Bapak membeli motor pertama kali?",
              "Mengapa Bapak suka warna baju biru?"
            ],
            "correctIndex": 1,
            "hint": "Pertanyaan lanjutan harus berkaitan erat dengan pembuatan tempe.",
            "explanation": "Pertanyaan mengenai tahapan memilih kedelai dan fermentasi ragi sangat relevan menggali informasi proses produksi tempe."
          },
          {
            "id": 20,
            "question": "Narasumber (Pak Lurah): 'Kami menjadwalkan kerja bakti membersihkan selokan setiap hari Minggu pagi untuk mencegah sarang nyamuk DBD.'\nPenulisan kalimat laporan hasil wawancara yang tepat adalah ...",
            "options": [
              "Menurut Pak Lurah, warga desa menjadwalkan kerja bakti setiap hari Minggu pagi guna mencegah sarang nyamuk DBD",
              "Pak Lurah melarang semua warga keluar rumah pada hari Minggu",
              "Nyamuk DBD disukai oleh Pak Lurah setiap hari Minggu",
              "Kerja bakti dibatalkan karena tidak ada nyamuk"
            ],
            "correctIndex": 0,
            "hint": "Laporan menyajikan kembali informasi narasumber dengan kalimat tidak langsung yang setia pada fakta.",
            "explanation": "Kalimat tersebut merangkum pernyataan narasumber secara akurat dan menggunakan bahasa baku yang objektif."
          }
        ]
      }
    ]
  }
];

// Helper untuk membaca dan menyimpan data kuis di LocalStorage
function getStoredSubjects() {
  const localData = localStorage.getItem("kuis_sd_subjects");
  if (!localData) {
    localStorage.setItem("kuis_sd_subjects", JSON.stringify(defaultSubjectsData));
    return defaultSubjectsData;
  }
  try {
    const parsed = JSON.parse(localData);
    // Jika data lama tidak sama dengan 8 mapel resmi, perbarui otomatis ke 8 mapel
    if (!Array.isArray(parsed) || parsed.length !== 8 || parsed[0].themeColor !== "tosca") {
      localStorage.setItem("kuis_sd_subjects", JSON.stringify(defaultSubjectsData));
      return defaultSubjectsData;
    }
    return parsed;
  } catch (e) {
    console.error("Gagal membaca LocalStorage, memulihkan data default", e);
    return defaultSubjectsData;
  }
}

function saveStoredSubjects(subjects) {
  localStorage.setItem("kuis_sd_subjects", JSON.stringify(subjects));
}
