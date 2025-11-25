import { useEmojiContext } from "../context/EmojiContext";

export default function Emoji() {
  const { emoji, changeEmoji } = useEmojiContext();

  return (
    <div className="Emoji componentBox">
      <h3>Current Mood: {emoji}</h3>
      <button onClick={changeEmoji}>Change Mood</button>
    </div>
  );
}
