import ReactCountryFlag from "react-country-flag";

const registerPage = {
  id: {
    heroTitle: "Atur berbagai tugasmu disini!",
    heroText: "Praktis, cepat dan gratis!",
    labelName: "Nama",
    namePlaceholder: "Masukan nama anda",
    emailPlaceholder: "Masukan email anda",
    passwordPlaceholder: "Masukan password anda",
    confirmPassword: "Konfirmasi Password",
    passwordConfPlaceholder: "Masukan konfirmasi password anda",
    registerBtn: "Daftar",
    accountAsk: "Sudah memiliki akun? ",
    loginAsk: "Masuk disini",
    passwordAlert: "Password tidak sama",
    registerLabel: "Daftar Sekarang!",
    registerText: "Untuk pengalaman yang baru",
  },
  en: {
    heroTitle: "Organize your various tasks!",
    heroText: "Practical, fast and free!",
    labelName: "Name",
    namePlaceholder: "Enter your name",
    emailPlaceholder: "Enter your email",
    passwordPlaceholder: "Enter your password",
    confirmPassword: "Confirm Password",
    passwordConfPlaceholder: "Enter your password confirmation",
    registerBtn: "Register",
    accountAsk: "Already have an account? ",
    loginAsk: "Login here",
    passwordAlert: "Password do not match",
    registerLabel: "Register Now!",
    registerText: "To get a new experience",
  },
};

const loginPage = {
  id: {
    heroTitle: "Atur berbagai tugasmu disini!",
    heroText: "Praktis, cepat dan gratis!",
    emailPlaceholder: "Masukan email anda",
    passwordPlaceholder: "Masukan password anda",
    loginBtn: "Masuk",
    accountAsk: "Belum memiliki akun? ",
    registerAsk: "Daftar disini",
    loginLabel: "Selamat Datang Kembali",
    loginText: "Aktivitasmu sudah menunggu!",
  },
  en: {
    heroTitle: "Organize your various tasks!",
    heroText: "Practical, fast and free!",
    emailPlaceholder: "Enter your email",
    passwordPlaceholder: "Enter your password",
    loginBtn: "Login",
    accountAsk: "Don't have an account yet? ",
    registerAsk: "Register here",
    loginLabel: "Welcome back",
    loginText: "Your activity is waiting!",
  },
};

const navFront = {
  id: {
    flag: (
      <ReactCountryFlag
        countryCode="ID"
        svg
        style={{
          width: "1.2em",
          height: "1.2em",
        }}
        title="Ganti Bahasa"
      />
    ),
    archive: "Arsip",
    home: "Beranda",
    changeClr: "Ganti Skema Warna",
    logout: "Keluar",
  },
  en: {
    flag: (
      <ReactCountryFlag
        countryCode="GB"
        svg
        style={{
          width: "1.2em",
          height: "1.2em",
        }}
        title="Change Language"
      />
    ),
    archive: "Archive",
    home: "Home",
    changeClr: "Change Color Scheme",
    logout: "Logout",
  },
};

const noteSearch = {
  id: {
    placeholder: "Cari catatanmu disini...",
  },
  en: {
    placeholder: "Search your notes here...",
  },
};

const noteCard = {
  id: {
    arch: "Arsip",
    unarch: "Batalkan Arsip",
  },
  en: {
    arch: "Archive",
    unarch: "Cancel Arsip",
  },
};

const noteDelete = {
  id: {
    delete: "Hapus",
  },
  en: {
    delete: "Delete",
  },
};

const noteEmpty = {
  id: {
    none: "Tidak ada catatan di sini...",
    p: "Tambahkan catatan dan dapatkan mengatur diri",
    ptwo: "Anda dengan cara terbaik!",
  },
  en: {
    none: "No notes here...",
    p: "Add notes and get organized",
    ptwo: "in the best possible way!",
  },
};

const pageEmpty = {
  id: {
    opps: "Opps, kami tidak dapat menemukan halaman ini.",
    massage:
      "Tapi jangan khawatir, Anda dapat menemukan banyak hal lain diberanda kami.",
    back: "Kembali",
  },
  en: {
    opps: "Opps, we couldn' find this page.",
    massage: "But don't worry, you can find many other things on our homepage.",
    back: "Return",
  },
};

const landingPage = {
  id: {
    header: "Daftar Catatan",
  },
  en: {
    header: "Notes List",
  },
};

const addNotePage = {
  id: {
    header: "Tambah Catatan Baru",
    inputTitlePlaceholder: "Judul...",
    inputTextPlaceholder: "Isi...",
    save: "Simpan",
  },
  en: {
    header: "Add New Note",
    inputTitlePlaceholder: "Title...",
    inputTextPlaceholder: "Contents...",
    save: "Save",
  },
};

const archivePage = {
  id: {
    header: "Daftar Catatan Arsip",
  },
  en: {
    header: "Archive Notes List",
  },
};

const addNote = {
  id: {
    add: "Tambah Note",
  },
  en: {
    add: "Add Note",
  },
};

export const datas = {
  registerPage,
  loginPage,
  navFront,
  noteSearch,
  noteCard,
  noteDelete,
  noteEmpty,
  pageEmpty,
  landingPage,
  addNotePage,
  archivePage,
  addNote,
};
