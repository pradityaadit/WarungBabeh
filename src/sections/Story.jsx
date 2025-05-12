import React from "react";
import { motion } from "framer-motion";
import AnimatedSection from "../components/AnimatedSection";

const Rules = () => {
  const rulesList = [
    {
      title: "Sopan Santun Dulu, Bro!",
      emoji: "🗣️",
      description:
        "Hormati semua member, admin, dan tamu warung.\n❌ No toxic, no rasis, no bawa-bawa SARA, dan no drama.\n💬 Selingan becandaan boleh, asal ga kelewatan.",
    },
    {
      title: "Dilarang Bikin Gaduh Warung",
      emoji: "🚫",
      description:
        "Spam chat, flood emoji, atau caps lock marah-marah = OUT.\n🎧 Voice channel? Gunakan dengan tertib. Jangan berisik kaya pasar malam.",
    },
    {
      title: "Jualan Harus Izin BABEH",
      emoji: "💸",
      description:
        "Promosi, jual beli, atau share link (termasuk Discord lain) WAJIB izin ke admin.\n🛒 Kalo ngasal promosi = auto ban, maaf ya.",
    },
    {
      title: "Konten Harus Sehat!",
      emoji: "🔞",
      description:
        "Konten NSFW, kekerasan ekstrem, atau hal-hal aneh = dilarang keras.\n📸 Share foto atau meme? Pastikan masih aman dan lucu buat semua umur.",
    },
    {
      title: "Main ROBLOX, Jangan Jadi Toxic BOCIL",
      emoji: "🎮",
      description:
        "Di dalam game, tetap jaga etika. Jangan curang, nge-cheat, atau nyusahin orang lain.\n👊 Kalo ketahuan, siap-siap masuk daftar hitam WARUNG BABEH.",
    },
    {
      title: "Pake Nickname yang Pantes",
      emoji: "🆔",
      description:
        "Gunakan nama yang gampang dikenal & tidak mengandung hal yang menyinggung.\n📛 Avatar atau profile pic juga jangan yang aneh-aneh.",
    },
    {
      title: "Patuh Sama Admin & Moderator",
      emoji: "👮",
      description:
        "Admin dan mod bukan preman warung, tapi penjaga ketertiban.\n🧹 Kalo diingatkan, terima baik-baik ya. Bandel = di-sweeping dari warung.",
    },
    {
      title: "Laporkan Kalau Ada yang Aneh",
      emoji: "🕵️‍♂️",
      description:
        "Lihat yang mencurigakan? Ada yang toxic? Langsung lapor ke admin.\n🤝 Kita jaga bareng-bareng kenyamanan warung ini.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50" id="rules">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif text-blue-900">
            Warung Babeh <span className="text-amber-500">Rules</span>
          </h2>
          <p className="text-lg text-gray-700">
            Demi kenyamanan bersama, harap patuhi peraturan berikut ini. Baca
            baik-baik ya!
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rulesList.map((rule, index) => (
            <AnimatedSection
              key={index}
              delay={index * 0.15}
              className="bg-white w-[500px]  mx-auto p-6 rounded-xl shadow-md"
            >
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-4xl mb-4">{rule.emoji}</div>
                <h3 className="text-2xl font-semibold mb-2 text-blue-900 font-serif">
                  {rule.title}
                </h3>
                <p className="text-gray-700 whitespace-pre-line">
                  {rule.description}
                </p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="text-center mt-16">
          <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
            Yuk, kita jaga bareng-bareng kenyamanan dan keseruan di Warung
            Babeh. Ingat, warung ini tempat nongkrong, bukan tempat ribut!{" "}
            <br /> -ADMINGANTENG
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Rules;
