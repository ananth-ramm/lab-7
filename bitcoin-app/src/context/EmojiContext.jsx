import { createContext, useState, useContext } from "react";

const EmojiContext = createContext();

export function EmojiProvider({ children }) {
  const [emoji, setEmoji] = useState("🙂");

  const changeEmoji = () => {
    const list = ["🙂", "😡"];
    const random = list[Math.floor(Math.random() * list.length)];
    setEmoji(random);
  };

  return (
    <EmojiContext.Provider value={{ emoji, changeEmoji }}>
      {children}
    </EmojiContext.Provider>
  );
}

export function useEmojiContext() {
  return useContext(EmojiContext);
}
