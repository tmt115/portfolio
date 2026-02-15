import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function TicTacToeArm() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <Link href="/">
        <Button variant="outline" className="mb-8">← Back to Home</Button>
      </Link>

      <h1 className="text-4xl font-bold mb-6">Tic-Tac-Toe Robotic Arm</h1>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Project Description</h2>
        <p className="text-gray-600">
          Currently working on an autonomous robotic arm that will be capable
          of playing tic-tac-toe. Working on computer vision and algorithms, 
          power distribution, and microcontroller logic. Code is on Git, more
          updates to come!
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">What I Did</h2>
        <ul className="list-disc pl-6 text-gray-600 space-y-2">
          <li>Designed and tested high accuracy X/O detection computer vision model using TensorFlow.</li>
          <li>Currently designing power distribution board for servo motors, and power integration of motors and 
            microcontrollers.
          </li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Tools Used</h2>
        <p className="text-gray-600">Arduino, Servo Motors, C++, TensorFlow, Python, Altium</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-3">Images</h2>
        <div className="bg-gray-200 h-64 rounded-xl flex items-center justify-center">
          Images Coming Soon!
        </div>
      </section>
    </main>
  );
}
