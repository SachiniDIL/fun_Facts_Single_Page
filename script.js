const facts = [
    "The name 'Titan' was inspired by Greek mythology.",
    "Attack on Titan was originally intended to be a 20-page one-shot.",
    "Hajime Isayama planned the ending of the series early on.",
    "The walls in the series are named after divine beings in Norse mythology: Maria, Rose, and Sina.",
    "The character Levi was added into the series due to an editor’s advice.",
    "Attack on Titan has inspired numerous spin-offs and adaptations.",
    "The series uses a lot of Germanic references, including character names and architectural styles.",
    "Isayama revealed that the character of Eren was based on his own experiences in junior high.",
    "The Titans are intentionally designed to resemble humans and evoke uncanny valley feelings.",
    "The series has been both praised and criticized for its complex themes and dark tones."
];

function newFact() {
    const fact = facts[Math.floor(Math.random() * facts.length)];
    document.getElementById('fact').textContent = fact;
}

window.onload = () => {
    newFact(); // Load a fact when the page opens
}
