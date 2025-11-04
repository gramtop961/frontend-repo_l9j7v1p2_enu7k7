import { motion } from 'framer-motion';
import { Mic, Users, Rocket, BookOpen } from 'lucide-react';

const items = [
  {
    icon: Rocket,
    title: 'Google Student Ambassador',
    desc:
      'Mewakili mahasiswa di seluruh Indonesia, berbagi pengetahuan digital dan inovasi.',
  },
  {
    icon: Users,
    title: 'Founder & Strategist, Muda Berkarya',
    desc:
      'Mengelola strategi konten, community engagement, dan storytelling untuk pemberdayaan anak muda.',
  },
  {
    icon: Mic,
    title: 'Public Speaking & MC',
    desc:
      'Aktif di acara kampus dan komunitas seperti Google Talks, FKA Talks UGM, dan Malaka Project.',
  },
  {
    icon: BookOpen,
    title: 'Educator & Volunteer',
    desc:
      'Pernah mengajar Tahfiz dan Bahasa Arab di Betuah Islamic School serta terlibat dalam literasi keislaman.',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="w-full bg-gradient-to-b from-white to-slate-50 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-semibold text-slate-900 sm:text-3xl"
        >
          Pengalaman
        </motion.h2>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, desc }) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-50 text-sky-700">
                  <Icon size={20} />
                </div>
                <h3 className="text-base font-semibold text-slate-900">{title}</h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
