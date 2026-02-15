import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function PCBDesign() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <Link href="/">
        <Button variant="outline" className="mb-8">← Back to Home</Button>
      </Link>

      <h1 className="text-4xl font-bold mb-6">Custom PCB Design</h1>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Project Description</h2>
        <p className="text-gray-600">
          Designed an ALU Add/Sub unit PCB in KiCad using adders and gates. 
          Laid out schematic, laid out elements in board outlined, and tried
          different wirings of the PCB. 
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">What I Did</h2>
        <ul className="list-disc pl-6 text-gray-600 space-y-2">
          <li>Created full schematic of ALU.</li>
          <li>Routed PCB traces and power planes.</li>
          <li>Iterated on designs to improve wiring, find better techniques.</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Tools Used</h2>
        <p className="text-gray-600">KiCad / Altium</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-3">Images</h2>
        <div className="space-y-6 mt-6">
        <img
            src="/images/ALU-schem.png"
            className="rounded-xl shadow-md w-full"
        />
        <img
            src="/images/ALU-wir.png"
            className="rounded-xl shadow-md w-full"
        />
        <img
            src="/images/ALU-plat.png"
            className="rounded-xl shadow-md w-full"
        />
        </div>
      </section>
    </main>
  );
}
