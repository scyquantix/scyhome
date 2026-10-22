import { Closing } from "@/components/sections/closing";
import { Example } from "@/components/sections/example";
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
      <Example />
      <Team />
      <HowWeWork />
      <Products />
      <Closing />
    </>
  );
}
