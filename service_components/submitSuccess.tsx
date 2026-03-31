import { CheckCircle, X } from "lucide-react"

interface QuoteSuccessDialogProps {
  isOpen: boolean
  onClose: () => void
  gradient?: string
}

export default function QuoteSuccessDialog({
  isOpen,
  onClose,
  gradient = "from-cyan-400 to-blue-500",
}: QuoteSuccessDialogProps) {
  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 transition-opacity"
        onClick={onClose}
      />

      {/* Dialog */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div
          className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 max-w-md w-full relative animate-in fade-in zoom-in duration-200"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-zinc-400 hover:text-zinc-100 transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div
              className={`w-20 h-20 bg-gradient-to-br ${gradient} rounded-full flex items-center justify-center`}
            >
              <CheckCircle className="w-12 h-12 text-white" />
            </div>
          </div>

          {/* Content */}
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4 text-zinc-100">
              Quote Submitted Successfully!
            </h2>
            <p className="text-lg text-zinc-300 mb-6">
              Thank you for your interest. I've received your quote request and
              will review it carefully.
            </p>
            <p className="text-zinc-400 mb-8">
              Expect a response within{" "}
              <span className="font-semibold text-zinc-200">
                1-2 business days
              </span>
              . I'll reach out via email to discuss your project in detail.
            </p>

            {/* Action Button */}
            <button
              onClick={onClose}
              className={`w-full py-4 bg-gradient-to-r ${gradient} text-white font-semibold rounded-xl hover:opacity-90 transition-all transform hover:scale-105`}
            >
              Got it!
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
