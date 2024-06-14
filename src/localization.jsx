import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'en',
        debug: true,
        resources: {
            en: {
                translation: {
                    overall_sentiment: 'Overall sentiments',
                    setting: 'Setting',
                    logout: 'Logout',
                    create_account: 'Create account',
                    full_name: 'Full name',
                    full_name_placeholder: 'John Doe',
                    email: 'Email',
                    email_placeholder: 'example@email.com',
                    password: 'Password',
                    password_placeholder: 'Enter your password',
                    confirm_password: 'Confirm Password',
                    confirm_password_placeholder: 'Re-enter your password',
                    register: 'Register',
                },
            },
            id: {
                translation: {
                    overall_sentiment: 'Keseluruhan sentimen',
                    setting: 'Pengaturan',
                    logout: 'Keluar',
                    create_account: 'Buat akun',
                    full_name: 'Nama lengkap',
                    full_name_placeholder: 'John Doe',
                    email: 'Email',
                    email_placeholder: 'contoh@email.com',
                    password: 'Kata sandi',
                    password_placeholder: 'Masukan kata sandi Anda',
                    confirm_password: 'Konfirmasi kata sandi',
                    confirm_password_placeholder: 'Masukan ulang kata sandi Anda',
                    register: 'Daftar',
                },
            },
        },
        interpolation: {
            escapeValue: false,
        }
    });

export default i18n;
