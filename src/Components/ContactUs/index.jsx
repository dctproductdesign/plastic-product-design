import { Phone, MessageCircle, Mail, ArrowRight } from "lucide-react";

export default function ContactCTA() {
  return (
    <section
      id="contact"
      className="py-20 px-6 bg-gradient-to-br from-slate-900 to-slate-800 dark:from-slate-950 dark:to-slate-900 text-white"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT CONTENT */}
          <div>
            <span className="text-xs uppercase tracking-widest text-slate-400 mb-4 block">
              Get In Touch
            </span>

            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight font-semibold mb-6">
              Let’s Build Your Career
            </h2>

            <p className="text-slate-300 text-lg mb-8 leading-relaxed max-w-xl">
              Choosing the right path matters. If you are serious about entering
              the automotive design industry, talk to us directly and get clear
              guidance before you enroll.
            </p>

            {/* Trust / Motivation */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-8">
              <p className="text-sm text-slate-300 leading-relaxed">
                💡{" "}
                <span className="font-semibold text-white">
                  One conversation
                </span>{" "}
                can save you years of confusion. Our mentors will guide you
                honestly — whether this course is right for you or not.
              </p>
            </div>
          </div>

          {/* RIGHT CTA CARD */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8">
            <h3 className="font-display text-2xl font-semibold mb-6 text-center">
              Talk to Our Team Now
            </h3>

            <div className="space-y-4">
              {/* CALL */}
              <a
                href="tel:+917977508768"
                className="flex items-center justify-between gap-4 p-5 rounded-2xl bg-white text-slate-900 hover:bg-slate-100 transition-all group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-sky-500 rounded-xl flex items-center justify-center text-white">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Call Us Directly</p>
                    <p className="text-lg font-semibold">+91 79775 08768</p>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-slate-400 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* WHATSAPP */}
              <a
                href="https://wa.me/917977508768"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between gap-4 p-5 rounded-2xl bg-green-500 hover:bg-green-600 transition-all group"
              >
                <div className="flex items-center gap-4 text-white">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm opacity-90">Chat on WhatsApp</p>
                    <p className="text-lg font-semibold">Instant Response</p>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
              </a>

              {/* EMAIL (secondary) */}
              <a
                href="mailto:info@digitalcadtraining.com"
                className="flex items-center gap-4 p-4 rounded-xl border border-white/15 hover:bg-white/5 transition-colors"
              >
                <Mail className="w-5 h-5 text-sky-400" />
                <span className="text-sm text-slate-300">
                  contact@digitalcadtraining.com
                </span>
              </a>
            </div>

            {/* Bottom reassurance */}
            <p className="text-xs text-slate-400 mt-6 text-center">
              📞 Available for working professionals • Honest guidance
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
