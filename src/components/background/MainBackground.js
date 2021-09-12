import React from 'react';

export default function generateBg() {
  const container = document.getElementsByTagName("main")[0];
  for (let i = 0; i < 3; i++) {
    const block = document.createElement("div");
    block.classList.add("blockBG");
    container.appendChild(block);
  }
}