import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function F1ReactionGame() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <Link href="/">
        <Button variant="outline" className="mb-8">← Back to Home</Button>
      </Link>

      <h1 className="text-4xl font-bold mb-6">Arduino F1 Reaction Time Game</h1>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Project Description</h2>
        <p className="text-gray-600">
          Designed a reaction time game simulating F1 start lights using LEDs and push buttons.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">What I Did</h2>
        <ul className="list-disc pl-6 text-gray-600 space-y-2">
          <li>Programmed LED timing sequences</li>
          <li>Implemented reaction time measurement</li>
          <li>Optimized debounce logic</li>
          <li>Built full hardware setup</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Tools Used</h2>
        <p className="text-gray-600">Arduino, C++, Breadboard, LEDs</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-3">Images</h2>
        <div className="space-y-6 mt-6">
        <img
            src="/images/F1-schem.png"
            className="rounded-xl shadow-md w-full"
        />
        <img
            src="/images/F1one.png"
            className="rounded-xl shadow-md w-full"
        />
        <img
            src="/images/F1two.png"
            className="rounded-xl shadow-md w-full"
        />
        </div>
      </section>
    </main>
  );
}
