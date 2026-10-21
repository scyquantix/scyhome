import { ContactCta } from "@/components/sections/contact-cta";
import { Hero } from "@/components/sections/hero";
import { HowWeWork } from "@/components/sections/how-we-work";
import { Products } from "@/components/sections/products";
import { Solutions } from "@/components/sections/solutions";
import { Team } from "@/components/sections/team";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Solutions />
      <Team />
      <HowWeWork />
      <Products />
      <ContactCta />
    </>
  );
}
