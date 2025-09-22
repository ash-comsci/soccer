// Enter opponent logo file names and (later) scores/records here.
const matches = [
  {
    day: "Match Day 1",
    date: "Thursday, September 25",
    home: "All Saints High School",
    away: "West Carleton Secondary School",
    opponentLogo: "west-carleton-logo.png", // add file later
    score: "", // <-- After game: e.g., "3 - 1"
    record: "" // <-- After game: e.g., "Record: 1-0"
  },
  {
    day: "Match Day 2",
    date: "Thursday, October 2",
    home: "All Saints High School",
    away: "A.Y. Jackson Secondary School",
    opponentLogo: "ay-jackson-logo.png",
    score: "",
    record: ""
  },
  {
    day: "Match Day 3",
    date: "Wednesday, October 8",
    home: "Paul-Desmarais E.S.C.",
    away: "All Saints High School",
    opponentLogo: "paul-desmarais-logo.png",
    score: "",
    record: ""
  },
  {
    day: "Match Day 4",
    date: "Friday, October 17",
    home: "Holy Trinity Catholic High School",
    away: "All Saints High School",
    opponentLogo: "holy-trinity-logo.png",
    score: "",
    record: ""
  },
  {
    day: "Match Day 5",
    date: "Tuesday, October 21",
    home: "Earl of March Secondary School",
    away: "All Saints High School",
    opponentLogo: "earl-of-march-logo.png",
    score: "",
    record: ""
  },
  {
    day: "Match Day 6",
    date: "Thursday, October 23",
    home: "All Saints High School",
    away: "Nepean High School",
    opponentLogo: "nepean-logo.png",
    score: "",
    record: ""
  }
];

const scheduleContainer = document.getElementById('schedule');

matches.forEach(match => {
  const card = document.createElement('div');
  card.className = 'match-card';

  card.innerHTML = `
    <div class="match-day">${match.day}</div>
    <div class="match-info"><strong>Date:</strong> ${match.date}</div>
    <div class="match-info"><strong>${match.home}</strong> @ <strong>${match.away}</strong></div>
    <div class="logos">
      <img src="avalanche-logo.png" alt="Avalanche Logo">
      <img src="${match.opponentLogo}" alt="Opponent Logo Placeholder">
    </div>
    <div class="score-record">
      ${match.score ? `Score: ${match.score}` : "Score: TBA"}<br>
      ${match.record ? match.record : "Record: TBA"}
    </div>
  `;

  scheduleContainer.appendChild(card);
});
