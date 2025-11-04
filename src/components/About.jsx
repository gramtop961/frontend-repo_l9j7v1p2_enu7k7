import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="relative w-full bg-white py-16">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-semibold text-slate-900 sm:text-3xl"
        >
          Tentang Alyssya
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 max-w-3xl text-slate-700"
        >
          Saya adalah Social Media Strategist, content creator, dan founder dari <span className="font-medium">@mudaberkaryaa.id</span> — sebuah platform digital yang menginspirasi anak muda untuk bertumbuh dan berkarya dengan makna. Saya juga seorang mahasiswa dan santriwati yang berusaha menyeimbangkan belajar, bekerja, dan berkarya dengan tujuan yang jelas.
        </motion.p>
      </div>
    </section>
  );
}
