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
                    login: 'Login',
                    already_have_an_account: 'Already have an account?',
                    dont_have_an_account: 'Dont have an account?',
                    ask_ai: 'Ask AI',
                    ask_ai_placeholder: 'Ask AI here...',
                    summary: 'Summary',
                    insert_content_to_summarize: 'Insert content to summarize...',
                    summarizing_content: 'Summarizing content...',
                    analyze: 'Analyze',
                    you: 'You',
                    enter_your_message: 'Enter your message...',
                    generating_answer: 'Generating answer...',
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
                    login: 'Masuk',
                    already_have_an_account: 'Sudah punya akun?',
                    dont_have_an_account: 'Belum punya akun?',
                    ask_ai: 'Tanya AI',
                    ask_ai_placeholder: 'Tanya AI disini...',
                    summary: 'Rekap',
                    insert_content_to_summarize: 'Masukan konten untuk direkap...',
                    summarizing_content: 'Merekap konten...',
                    analyze: 'Analisis',
                    you: 'Anda',
                    enter_your_message: 'Ketik pesan Anda...',
                    generating_answer: 'Memuat jawaban...',
                },
            },
        },
        interpolation: {
            escapeValue: false,
        }
    });

export default i18n;
