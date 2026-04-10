import { motion } from "framer-motion";
import { FileText, FileDown } from "lucide-react";

interface FormatSelectorProps {
  onSelect: (format: "pdf" | "docx") => void;
}

const EASE = [0.23, 1, 0.32, 1] as const;

const formats = [
  {
    id: "pdf" as const,
    label: "PDF",
    description: "Universal, print-ready format",
    icon: FileText,
  },
  {
    id: "docx" as const,
    label: "DOCX",
    description: "Editable Word document",
    icon: FileDown,
  },
];

export default function FormatSelector({ onSelect }: FormatSelectorProps) {
  return (
    <div>
      <h3 className="text-lg font-bold text-white mb-1">Choose Format</h3>
      <p className="text-gray-400 text-sm mb-5">
        Select your preferred file format
      </p>
      <div className="grid grid-cols-2 gap-4">
        {formats.map((fmt, i) => {
          const Icon = fmt.icon;
          return (
            <motion.button
              key={fmt.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5, ease: EASE }}
              onClick={() => onSelect(fmt.id)}
              className="group flex flex-col items-center gap-3 p-6 rounded-xl text-center transition-all duration-200"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
              whileHover={{
                scale: 1.04,
                borderColor: "rgba(0,232,157,0.4)",
                boxShadow: "0 0 24px rgba(0,232,157,0.12)",
              }}
              whileTap={{ scale: 0.96 }}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center"
                style={{
                  background: "rgba(0,232,157,0.1)",
                  border: "1px solid rgba(0,232,157,0.2)",
                }}
              >
                <Icon size={24} className="text-[#00e89d]" />
              </div>
              <div>
                <div className="text-base font-bold text-white group-hover:text-[#00e89d] transition-colors duration-200">
                  {fmt.label}
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  {fmt.description}
                </div>
              </div>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
