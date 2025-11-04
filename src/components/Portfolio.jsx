import { motion } from 'framer-motion';
import { ExternalLink, Mail, Instagram, Linkedin, Star, Sparkles } from 'lucide-react';

export default function Portfolio() {
  return (
    <section id="portfolio" className="w-full bg-white py-16">
      <div className="mx-auto max-w-6xl px-6">
        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">Keahlian</h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {[
              'Social Media & Content Strategy',
              'Storytelling & Copywriting',
              'Public Speaking & Hosting',
              'Visual Design (soft & minimal)',
              'Productivity & Time Management',
            ].map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-700"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="mt-14 rounded-2xl bg-gradient-to-br from-sky-50 to-amber-50 p-8"
        >
          <div className="flex items-start gap-3">
            <Star className="mt-1 h-5 w-5 text-amber-500" />
            <div>
              <p className="text-lg font-medium text-slate-900">
                “Berkarya bukan tentang seberapa cepat dikenal, tapi seberapa dalam manfaatnya dirasakan.”
              </p>
              <p className="mt-3 max-w-3xl text-slate-700">
                Saya percaya setiap anak muda punya potensi untuk berdampak melalui karya digital yang bermakna — dimulai dari langkah kecil yang konsisten, bernilai, dan bermanfaat.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Projects */}
        <motion.div
          id="projects"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-14"
        >
          <div className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-sky-600" />
            <h3 className="text-xl font-semibold text-slate-900">Proyek & Kolaborasi</h3>
          </div>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: '@mudaberkaryaa.id',
                desc:
                  'Platform digital untuk menginspirasi anak muda agar bertumbuh dan berkarya bermakna.',
                href: 'https://instagram.com/mudaberkaryaa.id',
              },
              {
                title: 'Google Student Ambassador',
                desc:
                  'Konten dan inisiatif seputar literasi digital, inovasi, dan komunitas mahasiswa.',
                href: 'https://www.google.com',
              },
              {
                title: '“Kata Orang” — Storytelling Video',
                desc:
                  'Eksplorasi narasi personal dan sosial melalui video pendek yang reflektif.',
                href: '#',
              },
              {
                title: 'Kolaborasi @latheefah.id',
                desc:
                  'Karya kolaboratif yang menonjolkan estetika visual yang lembut dan minimalis.',
                href: 'https://instagram.com/latheefah.id',
              },
            ].map((p) => (
              <a
                key={p.title}
                href={p.href}
                target="_blank"
                rel="noreferrer"
                className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h4 className="text-base font-semibold text-slate-900">{p.title}</h4>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{p.desc}</p>
                  </div>
                  <ExternalLink className="mt-1 h-4 w-4 text-slate-400 transition group-hover:text-slate-600" />
                </div>
              </a>
            ))}
          </div>
        </motion.div>

        {/* Contact */}
        <motion.div
          id="contact"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-16 grid gap-8 rounded-2xl border border-slate-200 bg-white p-6 sm:grid-cols-2"
        >
          <div>
            <h3 className="text-xl font-semibold text-slate-900">Mari Terhubung</h3>
            <p className="mt-2 max-w-md text-slate-700">
              Untuk kolaborasi, kampanye, atau undangan berbicara, silakan hubungi saya melalui email atau media sosial berikut.
            </p>
            <div className="mt-4 space-y-2">
              <a href="mailto:your@email.here" className="flex items-center gap-2 text-slate-800 hover:underline">
                <Mail size={18} /> your@email.here
              </a>
              <a href="https://instagram.com/mudaberkaryaa.id" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-slate-800 hover:underline">
                <Instagram size={18} /> @mudaberkaryaa.id
              </a>
              <a href="https://linkedin.com/in/alyssyarhamadina" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-slate-800 hover:underline">
                <Linkedin size={18} /> linkedin.com/in/alyssyarhamadina
              </a>
            </div>
          </div>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="rounded-xl bg-slate-50 p-4"
          >
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <label className="mb-1 block text-sm text-slate-600">Nama</label>
                <input className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-sky-300" />
              </div>
              <div className="sm:col-span-1">
                <label className="mb-1 block text-sm text-slate-600">Email</label>
                <input type="email" className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-sky-300" />
              </div>
            </div>
            <div className="mt-3">
              <label className="mb-1 block text-sm text-slate-600">Pesan</label>
              <textarea rows={4} className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-sky-300" />
            </div>
            <button type="submit" className="mt-4 w-full rounded-lg bg-sky-600 px-4 py-2 text-white shadow-sm transition hover:bg-sky-700">
              Kirim Pesan
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
