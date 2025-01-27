import { z } from 'zod';

export const passwordSchema = z
.string({message: 'Password tidak valid'})
.min(8, {message: "Password minimal 8 karakter"})
.regex(/[a-z]/, {message: "Password harus mengandung huruf kecil"})
.regex(/[A-Z]/, { message: "Password harus mengandung huruf besar"})
.regex(/[0-9]/ , { message: "Password harus mengandung angka"});

export const emailSchema = z
.string({message:'Email Wajib Di Isi'})
.email({message:'Email Tidak Valid'});