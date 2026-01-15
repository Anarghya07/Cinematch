const moods = [
  { name: "chill", emoji: "😎" },
  { name: "thriller", emoji: "🔥" },
  { name: "romantic", emoji: "💖" }
];

export default function MoodSelector({ onSelect }) {
  return (
    <div className="flex gap-4 p-4">
      {moods.map(m => (
        <button
          key={m.name}
          onClick={() => onSelect(m.name)}
          className="bg-black text-neonPink border border-neonBlue px-4 py-2 rounded"
        >
          {m.emoji} {m.name}
        </button>
      ))}
    </div>
  );
}
