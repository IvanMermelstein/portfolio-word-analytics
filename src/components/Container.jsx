import Textarea from "./Textarea";
import Stats from "./Stats";
import { useState } from "react";
import { INSTAGRAM_CHARS_LIMIT, FACEBOOK_CHARS_LIMIT } from "../lib/constants";
const Container = () => {
  const [text, setText] = useState("");
  const stats = {
    numberOfWords: text.split(/\s/).filter((word) => word !== "").length,
    numberOfCharacters: text.length,
    instagramCharsLeft: INSTAGRAM_CHARS_LIMIT - text.length,
    facebookCharsLeft: FACEBOOK_CHARS_LIMIT - text.length,
  };

  return (
    <main className="container">
      <Textarea text={text} setText={setText} />
      <Stats stats={stats} />
    </main>
  );
};

export default Container;
