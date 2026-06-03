"use client";
import { useState, useEffect } from "react";
import { productsList as rawProductsList } from "@/data/products";
import { Pill, Sparkles, HeartPulse, Shield } from "lucide-react";
import ProductDetailSection from "@/components/product/ProductDetailSection";

const iconMap = { Pill, Sparkles, HeartPulse, Shield } as const;

const productsList = rawProductsList.map(p => ({
  ...p,
  // Convert string icon name to actual component
  icon: (iconMap as any)[p.icon] ?? Pill,
}));

export default function ProductClient() {
  const [selectedId, setSelectedId] = useState(productsList[0].id);

  // Set selected product based on URL hash on initial load
  useEffect(() => {
    const hash = window.location.hash.replace(/^#/, "");
    // If multiple hashes like "#emthik#adipolin", take the last segment
    const parts = hash.split("#");
    const id = parts[parts.length - 1] || hash;
    if (id && productsList.some(p => p.id === id)) {
      setSelectedId(id);
    }
  }, []);

  // Listen for external hash changes (e.g., clicking a link to another product)
  useEffect(() => {
    const onHashChange = () => {
      const newHash = window.location.hash.replace(/^#/, "");
      const parts = newHash.split("#");
      const newId = parts[parts.length - 1] || newHash;
      if (newId && newId !== selectedId && productsList.some(p => p.id === newId)) {
        setSelectedId(newId);
      }
    };
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  // Update URL hash when selection changes
  useEffect(() => {
    if (selectedId) {
      window.history.replaceState(null, "", `#${selectedId}`);
    }
  }, [selectedId]);

  const selectedProduct = productsList.find(p => p.id === selectedId);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      {selectedProduct && <ProductDetailSection product={selectedProduct} />}
    </div>
  );
}
