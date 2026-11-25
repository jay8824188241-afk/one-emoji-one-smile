// One Emoji, One Smile — writes exactly one emoji to /output/entry.txt.
// Choice, re-weighed before committing: 🤗 (Hugging Face, U+1F917).
// Against the judge's brief — 🙂/😊 are the default smileys criterion 4
// penalises; ❤️/💛 is a heart, not a smile; 🫶 is already in play from
// another entrant and is a gesture, not a face; 🌻 is cheerful but an
// object. 🤗 is a face plus open arms: a hug offered to a stranger,
// warm at first glance, universal, chosen, and stranger-appropriate.
// Pure Node.js standard library, no dependencies, no network.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const text = readFileSync(join(here, "entry.txt"), "utf8");
const chars = [...text];
if (chars.length < 1 || chars.length > 8 || text.trim().length === 0) {
  throw new Error(`entry.txt must hold 1-8 non-whitespace characters, got ${chars.length}`);
}
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
