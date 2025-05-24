function showInfo() {
  const name = document.getElementById('name').value.toUpperCase();
  const dob = document.getElementById('dob').value;

  if (!dob) {
    document.getElementById('output').innerText = "Please enter your Date of Birth!";
    return;
  }

  // --- Life Path Number ---
  const digits = dob.replaceAll("-", "").split("").map(Number);
  let lifePath = digits.reduce((sum, digit) => sum + digit, 0);
  while (![11, 22, 33].includes(lifePath) && lifePath > 9) {
    lifePath = lifePath.toString().split("").map(Number).reduce((sum, digit) => sum + digit, 0);
  }

  // --- Destiny Number ---
  const letterMap = {
    A:1, B:2, C:3, D:4, E:5, F:6, G:7, H:8, I:9,
    J:1, K:2, L:3, M:4, N:5, O:6, P:7, Q:8, R:9,
    S:1, T:2, U:3, V:4, W:5, X:6, Y:7, Z:8
  };

  const nameLetters = name.replace(/[^A-Z]/g, '').split('');
  let destiny = nameLetters.reduce((sum, letter) => sum + (letterMap[letter] || 0), 0);
  while (![11, 22, 33].includes(destiny) && destiny > 9) {
    destiny = destiny.toString().split('').map(Number).reduce((sum, digit) => sum + digit, 0);
  }
  // --- Soul Urge Number ---
  const vowels = ['A', 'E', 'I', 'O', 'U'];
  const vowelLetters = nameLetters.filter(letter => vowels.includes(letter));
  let soulUrge = vowelLetters.reduce((sum, letter) => sum + (letterMap[letter] || 0), 0);
  while (![11, 22, 33].includes(soulUrge) && soulUrge > 9) {
    soulUrge = soulUrge.toString().split('').map(Number).reduce((sum, digit) => sum + digit, 0);
  }

  

  // --- Interpretations ---
  const lifePathMeanings = {
    1: "Born to lead, independent and ambitious.",
    2: "Peacemaker, cooperative and sensitive.",
    3: "Creative, social, and optimistic.",
    4: "Hardworking, disciplined, and practical.",
    5: "Adventurous, curious, and freedom-loving.",
    6: "Nurturing, responsible, and caring.",
    7: "Deep thinker, spiritual, and analytical.",
    8: "Ambitious, powerful, and success-driven.",
    9: "Compassionate, wise, and humanitarian.",
    11: "Visionary, intuitive, and inspiring.",
    22: "Master builder, powerful and grounded.",
    33: "Master teacher, loving and selfless."
  };

  const destinyMeanings = {
    1: "You are meant to be a leader and innovator.",
    2: "You excel in harmony and relationships.",
    3: "Your destiny involves creativity and joy.",
    4: "You are destined to build strong foundations.",
    5: "You thrive on change, travel, and excitement.",
    6: "You are a healer, teacher, and caretaker.",
    7: "You are drawn to knowledge and truth.",
    8: "You are meant to achieve success and influence.",
    9: "You are here to serve humanity with love.",
    11: "You inspire others with your vision.",
    22: "You can manifest great things for the world.",
    33: "You uplift others through love and service."
  };
  
  const soulUrgeMeanings = {
    1: "You desire independence and achievement.",
    2: "You seek peace, love, and companionship.",
    3: "You long to express creativity and joy.",
    4: "You want security and strong foundations.",
    5: "You crave freedom and new experiences.",
    6: "You yearn for harmony, family, and care.",
    7: "You desire inner wisdom and spiritual depth.",
    8: "You are driven by success and recognition.",
    9: "You wish to serve and heal humanity.",
    11: "You dream of inspiring others with your vision.",
    22: "You are called to build lasting legacies.",
    33: "You desire to help and uplift all beings."
  };

  // --- Show Output ---
  const outputText = `
🧾 Name: ${name}
📅 Date of Birth: ${dob}

━━━━━━━━━━━━━━━━━━

🌟 Life Path Number: ${lifePath}
✨ Meaning:
${lifePathMeanings[lifePath] || "No interpretation available."}

━━━━━━━━━━━━━━━━━━

🌙 Destiny Number: ${destiny}
✨ Meaning:
${destinyMeanings[destiny] || "No interpretation available."}
  
━━━━━━━━━━━━━━━━━━

💖 Soul Urge Number: ${soulUrge}
✨ Meaning:
${soulUrgeMeanings[soulUrge] || "No interpretation available."}
`;

  document.getElementById('output').innerText = outputText.trim();
}
function copyReport() {
  const output = document.getElementById('output').innerText;
  navigator.clipboard.writeText(output)
    .then(() => {
      alert("🔮 Numerology report copied to clipboard!");
    })
    .catch(err => {
      alert("❌ Failed to copy: " + err);
    });
}