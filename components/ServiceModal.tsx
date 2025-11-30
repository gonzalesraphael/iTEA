import { X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: {
    whatIs: string;
    howItWorks: string;
    points: string[];
    benefit: string;
  };
}

export function ServiceModal({ isOpen, onClose, title, content }: ServiceModalProps) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto pointer-events-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="sticky top-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white px-6 py-5 rounded-t-2xl flex items-center justify-between">
                <h2 className="text-2xl">{title}</h2>
                <button
                  onClick={onClose}
                  className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/20 transition-colors"
                  aria-label="Fechar modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Content */}
              <div className="p-6 space-y-6">
                {/* O que é */}
                <div>
                  <h3 className="text-blue-600 mb-3">O que é:</h3>
                  <p className="text-gray-700 leading-relaxed">
                    {content.whatIs}
                  </p>
                </div>

                {/* Como funciona */}
                <div>
                  <h3 className="text-purple-600 mb-3">Como funciona:</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    {content.howItWorks}
                  </p>
                  <ul className="space-y-3">
                    {content.points.map((point, index) => (
                      <li key={index} className="flex items-start">
                        <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                        <span className="text-gray-700 leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Benefício */}
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-5">
                  <h3 className="text-pink-600 mb-3">Benefício:</h3>
                  <p className="text-gray-700 leading-relaxed">
                    {content.benefit}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}

