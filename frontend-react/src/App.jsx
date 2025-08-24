import { motion } from "framer-motion";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-950 text-gray-900 dark:text-gray-100 p-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-center">Dhanyantra Dashboard</h1>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((card) => (
          <motion.div
            key={card}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: card * 0.1 }}
            className="rounded-2xl shadow-lg bg-white/70 dark:bg-gray-900/70 backdrop-blur p-6 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
          >
            <h2 className="text-xl font-semibold mb-2">Card {card}</h2>
            <p className="text-sm">This is a professional animated dashboard card.</p>
            <button className="mt-4 px-5 py-2 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300">
              Action
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
