"use client";

import LoveApp from "../love-app";

export default function Page() {
  return (
    <div>
      <LoveApp />

      <footer className="text-center text-gray-500 mt-10"  >
        <p>A love letter written in stars & moonlight by {"  "}
          <a
            href="https://github.com/Anjalisinggh/soulscript"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-500 hover:underline"
          >
            Anjali🤍
          </a>
        </p>
      </footer>
    </div>
  );
}
