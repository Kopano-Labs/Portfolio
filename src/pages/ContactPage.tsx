import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Mail,
  Github,
  Linkedin,
  Code2,
  Globe,
  Heart,
  MapPin,
  Send,
  CheckCircle,
  DollarSign,
  Coffee,
  ExternalLink,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.23, 1, 0.32, 1] },
  }),
};

const contactMethods = [
  {
    label: "Email",
    value: "rkholofelo@gmail.com",
    href: "mailto:rkholofelo@gmail.com",
    icon: Mail,
    color: "#00e89d",
    bgGradient: "from-[#00e89d]/20 to-[#00e89d]/5",
  },
  {
    label: "LinkedIn",
    value: "Kholofelo Robyn",
    href: "https://www.linkedin.com/in/kholofelo-robyn-rababalela-7a26273b6/",
    icon: Linkedin,
    color: "#0ea5e9",
    bgGradient: "from-[#0ea5e9]/20 to-[#0ea5e9]/5",
  },
  {
    label: "GitHub",
    value: "RobynAwesome",
    href: "https://github.com/RobynAwesome",
    icon: Github,
    color: "#ffffff",
    bgGradient: "from-white/10 to-white/5",
  },
  {
    label: "HackerRank",
    value: "rkholofelo",
    href: "https://www.hackerrank.com/profile/rkholofelo",
    icon: Code2,
    color: "#00e89d",
    bgGradient: "from-[#00e89d]/20 to-[#00e89d]/5",
  },
  {
    label: "ORCID",
    value: "0009-0000-3995-6147",
    href: "https://orcid.org/0009-0000-3995-6147",
    icon: Globe,
    color: "#a3e635",
    bgGradient: "from-[#a3e635]/20 to-[#a3e635]/5",
  },
];

const supportLinks = [
  {
    label: "PayPal",
    description: "Send a tip via PayPal",
    href: "https://paypal.me/osheenviews",
    icon: DollarSign,
    color: "#0ea5e9",
    bgGradient: "from-[#0ea5e9]/20 to-[#0ea5e9]/5",
  },
  {
    label: "Ko-fi",
    description: "Buy me a coffee",
    href: "https://ko-fi.com/robynawesome",
    icon: Coffee,
    color: "#f97316",
    bgGradient: "from-[#f97316]/20 to-[#f97316]/5",
  },
];

function SectionBlock({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.23, 1, 0.32, 1] }}
    >
      {children}
    </motion.div>
  );
}

export default function ContactPage() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:rkholofelo@gmail.com?subject=${encodeURIComponent(
      formData.subject || `Message from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
  };

  return (
    <main className="pt-28 pb-20 min-h-screen">
      {/* Hero Header */}
      <section className="relative overflow-hidden" ref={heroRef}>
        <div className="absolute inset-0 bg-gradient-to-br from-[#00e89d]/8 via-[#0ea5e9]/6 to-[#6366f1]/8" />
        <div className="relative max-w-7xl mx-auto px-6 py-20 sm:py-28">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            className="text-center"
          >
            <p className="text-xs font-semibold tracking-widest uppercase text-[#00e89d] mb-4">
              Get in Touch
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black mb-6">
              Let's{" "}
              <span className="bg-gradient-to-r from-[#00e89d] via-[#0ea5e9] to-[#6366f1] bg-clip-text text-transparent">
                Talk
              </span>
            </h1>
            <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto mb-6">
              I'm available for freelance projects, collaborations, and new
              opportunities. Let's build something great together.
            </p>

            {/* Availability badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00e89d]/30 bg-[#00e89d]/5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#00e89d] animate-pulse" />
              <span className="text-sm font-semibold text-[#00e89d]">
                Available for Work
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 space-y-20">
        {/* Location */}
        <SectionBlock>
          <div className="flex items-center justify-center gap-3 text-gray-400">
            <MapPin size={18} className="text-[#00e89d]" />
            <span className="text-lg">Cape Town, South Africa</span>
          </div>
        </SectionBlock>

        {/* Contact Bento Grid */}
        <SectionBlock delay={0.1}>
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#00e89d]/10 flex items-center justify-center">
              <Mail size={20} className="text-[#00e89d]" />
            </div>
            Contact Me
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {contactMethods.map((method, i) => (
              <motion.a
                key={method.label}
                href={method.href}
                target={method.href.startsWith("mailto") ? undefined : "_blank"}
                rel={
                  method.href.startsWith("mailto")
                    ? undefined
                    : "noopener noreferrer"
                }
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                className={`group relative overflow-hidden p-6 rounded-2xl border border-[#1a2744] bg-gradient-to-br ${method.bgGradient} hover:border-opacity-50 transition-all duration-500 hover:shadow-lg hover:scale-[1.02]`}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.borderColor = `${method.color}40`)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.borderColor = "#1a2744")
                }
              >
                {/* Background icon */}
                <div className="absolute top-4 right-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  <method.icon size={64} />
                </div>

                <div className="relative">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: `${method.color}15` }}
                  >
                    <method.icon size={22} style={{ color: method.color }} />
                  </div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider font-medium mb-1">
                    {method.label}
                  </p>
                  <p className="text-white font-semibold group-hover:text-[#00e89d] transition-colors">
                    {method.value}
                  </p>
                </div>
                <ExternalLink
                  size={14}
                  className="absolute bottom-6 right-6 text-gray-600 group-hover:text-[#00e89d] transition-colors"
                />
              </motion.a>
            ))}
          </div>
        </SectionBlock>

        {/* Support Section */}
        <SectionBlock delay={0.1}>
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#f97316]/10 flex items-center justify-center">
              <Heart size={20} className="text-[#f97316]" />
            </div>
            Support My Work
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {supportLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                className={`group relative overflow-hidden p-8 rounded-2xl border border-[#1a2744] bg-gradient-to-br ${link.bgGradient} hover:border-opacity-50 transition-all duration-500 hover:shadow-lg hover:scale-[1.02]`}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.borderColor = `${link.color}40`)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.borderColor = "#1a2744")
                }
              >
                <div className="absolute top-6 right-6 opacity-5 group-hover:opacity-10 transition-opacity">
                  <link.icon size={80} />
                </div>

                <div className="relative">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: `${link.color}15` }}
                  >
                    <link.icon size={26} style={{ color: link.color }} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#00e89d] transition-colors">
                    {link.label}
                  </h3>
                  <p className="text-gray-400 text-sm">{link.description}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </SectionBlock>

        {/* Contact Form */}
        <SectionBlock delay={0.1}>
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#0ea5e9]/10 flex items-center justify-center">
              <Send size={20} className="text-[#0ea5e9]" />
            </div>
            Send a Message
          </h2>
          <form
            onSubmit={handleSubmit}
            className="max-w-2xl mx-auto space-y-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl border border-[#1a2744] bg-[#0f1a30]/50 text-white placeholder-gray-600 focus:outline-none focus:border-[#00e89d]/50 focus:ring-1 focus:ring-[#00e89d]/20 transition-all"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl border border-[#1a2744] bg-[#0f1a30]/50 text-white placeholder-gray-600 focus:outline-none focus:border-[#00e89d]/50 focus:ring-1 focus:ring-[#00e89d]/20 transition-all"
                  placeholder="your@email.com"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">
                Subject
              </label>
              <input
                type="text"
                value={formData.subject}
                onChange={(e) =>
                  setFormData({ ...formData, subject: e.target.value })
                }
                className="w-full px-4 py-3 rounded-xl border border-[#1a2744] bg-[#0f1a30]/50 text-white placeholder-gray-600 focus:outline-none focus:border-[#00e89d]/50 focus:ring-1 focus:ring-[#00e89d]/20 transition-all"
                placeholder="What's this about?"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">
                Message
              </label>
              <textarea
                required
                rows={6}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full px-4 py-3 rounded-xl border border-[#1a2744] bg-[#0f1a30]/50 text-white placeholder-gray-600 focus:outline-none focus:border-[#00e89d]/50 focus:ring-1 focus:ring-[#00e89d]/20 transition-all resize-none"
                placeholder="Tell me about your project or opportunity..."
              />
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold bg-[#00e89d] text-[#060d18] hover:bg-[#34d399] transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#00e89d]/20"
              >
                <Send size={16} />
                Send Message
              </button>
            </div>
          </form>
        </SectionBlock>

        {/* Hire Me CTA */}
        <SectionBlock delay={0.1}>
          <div className="relative p-8 sm:p-12 rounded-2xl border border-[#1a2744] bg-gradient-to-br from-[#00e89d]/10 via-[#0ea5e9]/10 to-[#6366f1]/10 overflow-hidden text-center">
            <div className="absolute inset-0 bg-[#060d18]/60" />
            <div className="relative">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#00e89d]/30 bg-[#00e89d]/5 mb-6">
                <CheckCircle size={14} className="text-[#00e89d]" />
                <span className="text-xs font-semibold text-[#00e89d]">
                  Available for hire
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
                Ready to{" "}
                <span className="bg-gradient-to-r from-[#00e89d] to-[#0ea5e9] bg-clip-text text-transparent">
                  hire me?
                </span>
              </h2>
              <p className="text-gray-400 max-w-lg mx-auto mb-8">
                I specialize in full-stack MERN development, building scalable
                web applications, and delivering polished user experiences.
              </p>
              <a
                href="mailto:rkholofelo@gmail.com"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold bg-[#00e89d] text-[#060d18] hover:bg-[#34d399] transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#00e89d]/20"
              >
                <Mail size={16} />
                Get in Touch
              </a>
            </div>
          </div>
        </SectionBlock>
      </div>
    </main>
  );
}
