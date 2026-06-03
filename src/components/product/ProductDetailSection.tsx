import React from "react";
import { Pill, Sparkles, HeartPulse, Shield, Activity, Award, CheckCircle2, FlaskConical, AlertCircle } from "lucide-react";

type Product = {
  id: string;
  name: string;
  category: string;
  icon: any; // Lucide icon component
  ingredients: string;
  indications: string[];
  mechanism: string;
  dosage: string;
  badge: string;
  themeColor: string;
  borderTheme: string;
  gradient: string;
};

interface ProductDetailSectionProps {
  product: Product;
}

// Custom taglines mapping based on nishetherapeutics.org product profiles
const productTaglines: Record<string, { tagline: string; theme: string }> = {
  nitomin: {
    tagline: "World's Best Adjuvant",
    theme: "text-teal-600 bg-teal-50 border-teal-100"
  },
  emthik: {
    tagline: "Endometrial Receptivity Support",
    theme: "text-rose-600 bg-rose-50 border-rose-100"
  },
  endorelief: {
    tagline: "Estrogen Regulator & Comfort",
    theme: "text-emerald-600 bg-emerald-50 border-emerald-100"
  },
  adipolin: {
    tagline: "Metabolic & Insulin Regulator",
    theme: "text-amber-600 bg-amber-50 border-amber-100"
  }
};

export default function ProductDetailSection({ product }: ProductDetailSectionProps) {
  const Icon = product.icon as any;
  const branding = productTaglines[product.id] || {
    tagline: "Specialty Pharmaceutical Support",
    theme: "text-teal-600 bg-teal-50 border-teal-100"
  };

  return (
    <div id={product.id} className="w-full bg-slate-50 py-16 scroll-mt-20">
      <section className="max-w-6xl mx-auto bg-white border border-slate-100 rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300">
        
        {/* Top Header Highlight Bar */}
        <div className={`h-2.5 bg-gradient-to-r ${product.id === 'nitomin' ? 'from-teal-500 to-emerald-500' : product.id === 'emthik' ? 'from-rose-500 to-pink-500' : product.id === 'endorelief' ? 'from-emerald-500 to-teal-500' : 'from-amber-500 to-orange-500'}`} />

        <div className="p-8 sm:p-12">
          {/* Tagline / Subheading */}
          <div className="mb-4">
            <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border ${branding.theme}`}>
              {branding.tagline}
            </span>
          </div>

          {/* Product Main Title */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div className="flex items-center space-x-4">
              <div className={`w-14 h-14 rounded-2xl ${product.themeColor} flex items-center justify-center shadow-inner`}>
                <Icon className="w-7 h-7" />
              </div>
              <div>
                <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight uppercase">
                  {product.name}
                </h2>
                <p className="text-slate-500 text-xs sm:text-sm font-semibold uppercase tracking-wider mt-0.5">
                  {product.category}
                </p>
              </div>
            </div>
            
            {/* Quick Badge */}
            <div className="self-start sm:self-center">
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#1a3c6e] bg-slate-100 px-3.5 py-1.5 rounded-lg border border-slate-200">
                {product.badge}
              </span>
            </div>
          </div>

          {/* Core Info Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pt-6 border-t border-slate-100">
            
            {/* Left Column: Composition & Dosage */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Composition */}
              <div className="bg-slate-50 border border-slate-100 p-6 rounded-2xl shadow-sm">
                <h4 className="font-bold text-xs uppercase tracking-wider text-slate-800 flex items-center gap-2 mb-3">
                  <FlaskConical className="w-4 h-4 text-teal-600" />
                  <span>Key Composition</span>
                </h4>
                <p className="text-slate-700 text-sm font-medium leading-relaxed">
                  {product.ingredients}
                </p>
              </div>

              {/* Dosage */}
              <div className="bg-slate-50 border border-slate-100 p-6 rounded-2xl shadow-sm">
                <h4 className="font-bold text-xs uppercase tracking-wider text-slate-800 flex items-center gap-2 mb-3">
                  <Activity className="w-4 h-4 text-rose-500" />
                  <span>Suggested Dosage</span>
                </h4>
                <p className="text-slate-700 text-sm font-medium leading-relaxed">
                  {product.dosage}
                </p>
                <div className="mt-4 pt-4 border-t border-slate-200/60 flex items-start gap-2 text-[10px] text-slate-500 leading-normal">
                  <AlertCircle className="w-4 h-4 text-rose-500 flex-shrink-0 mt-0.5" />
                  <p className="italic">
                    *Note: Formulated for therapeutic support. Not a replacement for key prescription drugs. Consult your physician before use.
                  </p>
                </div>
              </div>

            </div>

            {/* Right Column: Indications & Mechanism */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Indications */}
              <div className="space-y-4">
                <h4 className="font-bold text-xs uppercase tracking-wider text-slate-800 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Therapeutic Indications</span>
                </h4>
                {product.indications && product.indications.length > 0 && (
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {product.indications.map((ind, i) => (
                      <li key={i} className="flex items-start gap-2.5 bg-slate-50 border border-slate-100/80 p-3 rounded-xl hover:bg-slate-100/50 transition-colors">
                        <div className="w-1.5 h-1.5 bg-teal-500 rounded-full flex-shrink-0 mt-2" />
                        <span className="text-slate-600 text-xs sm:text-sm leading-relaxed">{ind}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Mechanism of Action */}
              <div className="pt-6 border-t border-slate-100">
                <h4 className="font-bold text-xs uppercase tracking-wider text-slate-800 flex items-center gap-2 mb-3">
                  <Award className="w-4 h-4 text-indigo-600" />
                  <span>Mechanism of Action</span>
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed bg-indigo-50/20 border border-indigo-100/20 p-5 rounded-2xl">
                  {product.mechanism}
                </p>
              </div>

            </div>

          </div>
        </div>

      </section>
    </div>
  );
}
