import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative h-[80vh] min-h-[560px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/70 to-white pointer-events-none" />

      <div className="relative z-10 mx-auto flex h-full max-w-6xl items-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <p className="mb-3 inline-block rounded-full bg-white/80 px-4 py-1 text-sm text-slate-700 shadow-sm backdrop-blur">
            Yogyakarta, Indonesia · Social Media Strategist
          </p>
          <h1 className="text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl">
            Yang Muda yang Berkarya.
          </h1>
          <p className="mt-4 text-base leading-relaxed text-slate-700 sm:text-lg">
            Saya Alyssya Rhamadina — Social Media Strategist dan Google Student Ambassador yang percaya bahwa karya kecil pun bisa berdampak besar bila dilakukan dengan niat yang benar.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <a
              href="#contact"
              className="rounded-full bg-sky-600 px-6 py-3 text-white shadow-lg shadow-sky-600/20 transition hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-400"
            >
              Connect with Me
            </a>
            <a
              href="#projects"
              className="rounded-full border border-slate-300 bg-white px-6 py-3 text-slate-800 transition hover:bg-slate-50"
            >
              Lihat Karya
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
