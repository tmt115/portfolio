import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Timer555() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <Link href="/">
        <Button variant="outline" className="mb-8">← Back to Home</Button>
      </Link>

      <h1 className="text-4xl font-bold mb-6">Breadboard 555 Timer Circuit</h1>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Project Description</h2>
        <p className="text-gray-600">
          Designed and tested a 555 timer in astable configuration for pulse generation.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">What I Did</h2>
        <ul className="list-disc pl-6 text-gray-600 space-y-2">
          <li>Calculated frequency and duty cycle</li>
          <li>Built circuit on breadboard</li>
          <li>Measured output waveform with oscilloscope</li>
          <li>Analyzed timing stability</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Tools Used</h2>
        <p className="text-gray-600">555 Timer IC, Oscilloscope, Multimeter</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-3">Images</h2>
        <div className="space-y-6 mt-6">
        <img
            src="/images/555-schem.png"
            className="rounded-xl shadow-md w-full"
        />
        <img
            src="/images/555one.png"
            className="rounded-xl shadow-md w-full"
        />
        <img
            src="/images/555two.png"
            className="rounded-xl shadow-md w-full"
        />
        </div>
      </section>
    </main>
  );
}
