import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldAlert, Ban, AlertTriangle, BookOpen, Crosshair, 
  Flame, Gavel, Lock, Database, Bot, FileTerminal, ExternalLink, Zap 
} from 'lucide-react';
import { FaTelegramPlane } from 'react-icons/fa';
import Background from './components/Background'; 

// --- ANIMATIONS ---
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const fadeUp = {
  hidden: { y: 40, opacity: 0, scale: 0.95 },
  visible: { y: 0, opacity: 1, scale: 1, transition: { duration: 0.5, type: "spring", bounce: 0.5 } },
};

// --- DATA ---
const bannersList = [
  { name: "‌𝐒 𝛂 𝛈 ᴊ 𝛊 𝛕.", link: "http://t.me/wafbo" },
  { name: "Ꮪ 𝛂 𝛕 𝛐 ɾ 𝛖", link: "http://T.me/ll_SATORU_ll" },
  { name: "𓆰𝅃꯭᳚𝆺𝅥⃝ ᷟ𓆩 𝐒 ᴀ ғ ғ ɪ 𝁘ໍ𝀛𓂃", link: "http://T.me/ll_AYMAN_SAFFI_ll" },
  { name: "SHIVANSH", link: "http://T.me/BeDestroyer" },
  { name: "𝜹 𝝉 ֟፝𝛜 𝝂 𝝐 ─𑰮", link: "https://t.me/Zcziiy" },
  { name: "BOSS JI", link: "http://T.me/THE_BOSS_JI" },
  { name: "𝐒 ᴀ ʀ፝֟ ҡ ᴀ ʀ ‹𐩃𓂃ֶꪳ", link: "https://t.me/ll_SARKAR_ERA_ll" },
];

const proofChannels = [
  { name: "NEX Banning HQ", desc: "Main Terminal & Operations", link: "http://T.me/NEX_FUCKER" },
  { name: "Global Ban List I", desc: "Termination Evidence Logs", link: "https://t.me/+fwvdW3Bce-w0MzM8" },
  { name: "Global Ban List II", desc: "Secondary Execution Logs", link: "https://t.me/+wGWamRCfVGU2MGRk" },
];

// --- COMPONENTS ---

// 1. Enforcer/Banner Card
const BannerCard = ({ name, link }) => (
  <motion.a 
    href={link} target="_blank" rel="noopener noreferrer"
    variants={fadeUp} whileHover={{ scale: 1.03, y: -5 }} whileTap={{ scale: 0.95 }}
    className="relative overflow-hidden bg-gradient-to-br from-[#0a0000] to-[#1a0000] border border-red-900/50 hover:border-red-500 p-6 rounded-2xl flex items-center justify-between group transition-all shadow-[0_0_20px_rgba(0,0,0,0.5)]"
  >
    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 mix-blend-overlay"></div>
    <div className="absolute inset-0 bg-red-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    
    <div className="flex items-center gap-5 z-10">
      <div className="bg-red-950/80 p-4 rounded-xl border border-red-900/50 group-hover:bg-red-600 transition-all text-red-500 group-hover:text-black shadow-inner">
        <Gavel className="w-6 h-6" />
      </div>
      <div>
        <h4 className="text-gray-100 font-black tracking-widest text-sm md:text-base group-hover:text-white transition-colors drop-shadow-md">{name}</h4>
        <span className="text-red-700 font-bold text-[10px] uppercase tracking-[0.3em] flex items-center gap-1 mt-1 group-hover:text-red-400">
          <Crosshair size={10} /> Verified Enforcer
        </span>
      </div>
    </div>

    <div className="z-10 bg-black/60 p-3 rounded-xl border border-red-900/30 group-hover:border-red-500 transition-all">
      <FaTelegramPlane className="text-red-600 group-hover:text-red-500 text-xl" />
    </div>
  </motion.a>
);

// 2. Proof Channel Card
const ProofCard = ({ name, desc, link }) => (
  <motion.a 
    href={link} target="_blank" rel="noopener noreferrer"
    variants={fadeUp} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
    className="bg-red-950/20 border-l-4 border-red-600 hover:border-red-400 p-6 rounded-r-2xl flex items-center justify-between group transition-all"
  >
    <div className="flex items-center gap-4">
      <div className="bg-red-900/40 p-3 rounded-full text-red-500 group-hover:bg-red-500 group-hover:text-black transition-all">
        <Database size={24} />
      </div>
      <div>
        <h3 className="text-xl font-bold text-white uppercase tracking-widest">{name}</h3>
        <p className="text-red-500/70 text-xs font-bold uppercase tracking-widest mt-1">{desc}</p>
      </div>
    </div>
    <ExternalLink className="text-red-900 group-hover:text-red-500 transition-colors" />
  </motion.a>
);

// 3. Upcoming Feature Card
const UpcomingCard = ({ name, icon: Icon }) => (
  <motion.div 
    variants={fadeUp}
    className="bg-[#050000]/80 border border-red-900/30 p-8 rounded-3xl relative overflow-hidden flex flex-col items-center text-center opacity-80"
  >
    <div className="absolute top-0 right-0 p-6 opacity-5"><Icon size={100} /></div>
    <div className="bg-red-950/50 p-4 rounded-full text-red-600 mb-4 border border-red-900/50">
      <Icon size={32} />
    </div>
    <h3 className="text-2xl font-black text-white uppercase tracking-widest mb-2">{name}</h3>
    <span className="bg-red-900/30 text-red-500 font-bold text-[10px] uppercase tracking-[0.3em] px-3 py-1 rounded-full border border-red-900/50 flex items-center gap-2">
      <Lock size={10} /> Compiling...
    </span>
  </motion.div>
);


// --- MAIN APP ---
export default function App() {
  return (
    <div className="text-gray-200 min-h-screen font-sans relative selection:bg-red-500/30 bg-[#020000]">
      {/* Dark Red Ambient Overlay */}
      <div className="fixed inset-0 z-0 pointer-events-none mix-blend-multiply bg-red-950/30"></div>
      <Background />
      
      {/* Massive Red Glow in Center */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vw] max-w-[900px] max-h-[900px] bg-red-700/10 rounded-full blur-[180px] pointer-events-none z-0"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-20">
        
        {/* 🔥 HEADER SECTION */}
        <section className="flex flex-col justify-center items-center text-center pt-10 mb-16 relative">
          <motion.div
            className="mb-8 flex items-center gap-2 bg-red-950/40 border border-red-600/50 text-red-400 px-6 py-2 rounded-full text-xs font-black uppercase tracking-[0.4em] backdrop-blur-md shadow-[0_0_20px_rgba(220,38,38,0.2)]"
            initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
          >
             <Ban className="w-4 h-4 text-red-500" /> Enforcement Division
          </motion.div>
          
          <motion.h1 
            className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-red-100 to-red-900 mb-6 tracking-tighter"
            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, type: "spring" }}
          >
            NEX BANNING
          </motion.h1>
          <motion.p
             className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-medium"
             initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          >
            Hunting down and terminating illegal channels that violate Telegram's Terms of Service. We cleanse the network.
          </motion.p>
        </section>

        {/* 🚨 EXAMS/STUDY LOCKDOWN BANNER */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4, type: "spring" }}
          className="mb-24 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(220,38,38,0.1)_10px,rgba(220,38,38,0.1)_20px)] z-0 rounded-3xl"></div>
          
          <div className="bg-red-950/80 border-2 border-red-600 p-8 md:p-12 rounded-3xl text-center relative z-10 shadow-[0_0_50px_rgba(220,38,38,0.3)] backdrop-blur-lg flex flex-col items-center">
            <div className="bg-red-600 text-white p-4 rounded-full mb-6 animate-pulse shadow-[0_0_30px_rgba(220,38,38,0.8)]">
              <Lock size={40} />
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-widest mb-4 flex items-center gap-3">
              <AlertTriangle className="text-red-500 hidden md:block" size={40}/>
              Operations Suspended
              <AlertTriangle className="text-red-500 hidden md:block" size={40}/>
            </h2>
            <div className="w-24 h-1 bg-red-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-red-200 text-lg md:text-xl font-bold uppercase tracking-widest flex items-center justify-center gap-3">
              <BookOpen size={24} className="text-red-400" />
              Currently offline due to academic exams & studies.
              <BookOpen size={24} className="text-red-400" />
            </p>
            <p className="text-red-400/80 text-sm mt-6 font-medium max-w-lg mx-auto uppercase tracking-widest">
              The squad will resume enforcement protocols once examinations are cleared. Until then, the system remains in lockdown.
            </p>
          </div>
        </motion.div>

        {/* ⚔️ THE ENFORCERS (Our Banners) */}
        <motion.section className="mb-24" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}>
          <div className="text-center mb-12 flex flex-col items-center">
            <div className="bg-red-900/30 p-3 rounded-full mb-4 border border-red-900/50">
              <ShieldAlert className="text-red-500 w-8 h-8" />
            </div>
            <h2 className="text-4xl font-black text-white uppercase tracking-widest">The Enforcers</h2>
            <p className="text-red-600 font-bold tracking-[0.4em] uppercase mt-2 text-sm">Our Official Banners</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {bannersList.map((banner, index) => (
              <BannerCard key={index} name={banner.name} link={banner.link} />
            ))}
          </div>
        </motion.section>

        {/* 📜 BANNING PROOFS (Execution Logs) */}
        <motion.section className="mb-24" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}>
          <div className="mb-10 border-l-4 border-red-600 pl-6">
            <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-widest">Execution Logs</h2>
            <p className="text-gray-500 font-bold mt-2 tracking-widest uppercase text-sm">Verify Our Terminations</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {proofChannels.map((channel, index) => (
              <ProofCard key={index} name={channel.name} desc={channel.desc} link={channel.link} />
            ))}
          </div>
        </motion.section>

        {/* 🚀 UPCOMING ARSENAL */}
        <motion.section className="mb-20" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}>
          <div className="text-center mb-10 flex flex-col items-center">
             <h2 className="text-3xl font-black text-white uppercase tracking-widest flex items-center gap-3">
               <Flame className="text-red-500" /> Classified Pipeline
             </h2>
             <p className="text-red-600 font-bold tracking-[0.4em] uppercase mt-2 text-xs">Under Development</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <UpcomingCard name="Auto-Ban Bot" icon={Bot} />
            <UpcomingCard name="Proofs Web Portal" icon={FileTerminal} />
          </div>
        </motion.section>

        {/* 🚬 FOOTER */}
        <footer className="border-t border-red-900/40 pt-12 pb-8 flex flex-col items-center justify-center">
          <div className="flex items-center gap-2 mb-4">
            <Zap className="text-red-600 w-5 h-5" />
            <h3 className="text-2xl font-black text-white tracking-widest">NEX<span className="text-red-600">.</span></h3>
          </div>
          <div className="text-red-900 font-bold text-[10px] tracking-[0.3em] uppercase text-center">
            ENFORCEMENT DIVISION • PURGING THE NETWORK<br/>
            © 2026 NEX BANNING. ALL RIGHTS RESERVED.
          </div>
        </footer>

      </div>
    </div>
  );
}
