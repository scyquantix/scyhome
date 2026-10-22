import { DataFlowSection } from "@/components/home/data-flow-section";
import { FoundersSection } from "@/components/home/founders-section";
import { HeroSection } from "@/components/home/hero-section";
import { ProcessSection } from "@/components/home/process-section";
import { ProductsSection } from "@/components/home/products-section";
import { PurposeSection } from "@/components/home/purpose-section";
import { SolutionsSection } from "@/components/home/solutions-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <SolutionsSection />
      <DataFlowSection />
      <FoundersSection />
      <ProcessSection />
      <ProductsSection />
      <PurposeSection />
    </>
  );
}
