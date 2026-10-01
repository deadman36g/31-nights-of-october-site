const confirmedMovies = [
  {
    title: "Bone Tomahawk",
    year: 2015,
    runtime: "132 min",
    director: "S. Craig Zahler",
    genre: "Western · Horror",
    rating: "Not Rated",
    origin: "USA",
    language: "English",
    distributor: "RLJ Entertainment",
    release: "October 23, 2015",
    image: "assets/bone-tomahawk.jpg",
    date: 19
  },
  {
    title: "Evil Dead Burn",
    year: 2026,
    runtime: "110 min",
    director: "Sébastien Vaniček",
    genre: "Horror",
    rating: "R",
    origin: "New Zealand · USA",
    language: "English",
    distributor: "Warner Bros. Pictures",
    release: "July 10, 2026",
    image: "assets/evil-dead-burn.jpeg",
    date: 4
  },
  {
    title: "The Witches of Eastwick",
    year: 1987,
    runtime: "118 min",
    director: "George Miller",
    genre: "Dark Comedy · Fantasy · Horror",
    rating: "R",
    origin: "USA · Australia",
    language: "English",
    distributor: "Warner Bros. Pictures",
    release: "June 12, 1987",
    image: "assets/witches-eastwick.jpg",
    date: 23
  },
  {
    title: "Until Dawn",
    year: 2025,
    runtime: "103 min",
    director: "David F. Sandberg",
    genre: "Supernatural · Slasher Horror",
    rating: "R",
    origin: "USA",
    language: "English",
    distributor: "Screen Gems / Sony Pictures Releasing",
    release: "April 25, 2025",
    image: "assets/until-dawn.jpg",
    date: 1
  },
  {
    title: "Ready or Not",
    year: 2019,
    runtime: "95 min",
    director: "Matt Bettinelli-Olpin & Tyler Gillett",
    genre: "Horror · Suspense · Thriller",
    rating: "R",
    origin: "USA",
    language: "English",
    distributor: "Fox Searchlight Pictures",
    release: "August 21, 2019",
    image: "assets/ready-or-not.jpg",
    date: 5
  },
  {
    title: "The Hunt",
    year: 2020,
    runtime: "90 min",
    director: "Craig Zobel",
    genre: "Satirical Action Horror",
    rating: "R",
    origin: "USA",
    language: "English",
    distributor: "Universal Pictures",
    release: "March 13, 2020",
    image: "assets/hunt.png",
    date: 6
  },
  {
    title: "Passenger",
    year: 2026,
    runtime: "94 min",
    director: "André Øvredal",
    genre: "Supernatural Horror · Thriller",
    rating: "R",
    origin: "USA",
    language: "English",
    distributor: "Paramount Pictures",
    release: "May 22, 2026",
    streaming: "Paramount+ · streaming Aug. 20, 2026",
    image: "assets/passenger.jpg",
    date: 21
  },
  {
    title: "Saccharine",
    year: 2026,
    runtime: "113 min",
    director: "Natalie Erika James",
    genre: "Body Horror · Sci-Fi",
    rating: "R",
    origin: "Australia",
    language: "English",
    distributor: "Maslow Entertainment",
    release: "May 22, 2026",
    image: "assets/saccharine.jpg",
    date: 14
  },
  {
    title: "Cure",
    year: 1997,
    runtime: "111 min",
    director: "Kiyoshi Kurosawa",
    genre: "Psychological Horror · Crime",
    rating: "Not Rated",
    origin: "Japan",
    language: "Japanese",
    distributor: "Shochiku-Fuji Company",
    release: "December 27, 1997",
    streaming: "Criterion Channel",
    image: "assets/cure.jpg",
    date: 26
  },
  {
    title: "Sinners",
    year: 2025,
    runtime: "137 min",
    director: "Ryan Coogler",
    genre: "Southern Gothic · Supernatural Horror",
    rating: "R",
    origin: "USA",
    language: "English",
    distributor: "Warner Bros. Pictures",
    release: "April 18, 2025",
    streaming: "Max",
    image: "assets/sinners.jpg",
    date: 20
  },
  {
    title: "The Mortuary Collection",
    year: 2019,
    runtime: "108 min",
    director: "Ryan Spindell",
    genre: "Horror Anthology · Dark Fantasy",
    rating: "Not Rated",
    origin: "USA",
    language: "English",
    distributor: "Shudder",
    release: "September 22, 2019 (Fantastic Fest) · October 15, 2020 (Shudder)",
    streaming: "Shudder",
    image: "assets/mortuary-collection.jpg",
    date: 25
  },
  {
    title: "The Sixth Sense",
    year: 1999,
    runtime: "107 min",
    director: "M. Night Shyamalan",
    genre: "Supernatural Horror · Psychological Thriller",
    rating: "PG-13",
    origin: "USA",
    language: "English",
    distributor: "Buena Vista Pictures",
    release: "August 6, 1999",
    streaming: "Disney+",
    image: "assets/sixth-sense.png",
    date: 22
  },
  {
    title: "The Substance",
    year: 2024,
    runtime: "141 min",
    director: "Coralie Fargeat",
    genre: "Body Horror · Satire",
    rating: "R",
    origin: "France · United Kingdom · USA",
    language: "English",
    distributor: "MUBI",
    release: "September 20, 2024",
    streaming: "MUBI",
    image: "assets/substance.jpg",
    date: 3
  },
  {
    title: "Alien: Romulus",
    year: 2024,
    runtime: "119 min",
    director: "Fede Álvarez",
    genre: "Science Fiction · Horror",
    rating: "R",
    origin: "USA · United Kingdom",
    language: "English",
    distributor: "20th Century Studios",
    release: "August 16, 2024",
    image: "assets/alien-romulus.jpg",
    date: 2
  },
  {
    title: "The Amityville Horror",
    year: 2005,
    runtime: "90 min",
    director: "Andrew Douglas",
    genre: "Supernatural Horror · Haunted House",
    rating: "R",
    origin: "USA",
    language: "English",
    distributor: "Metro-Goldwyn-Mayer / Dimension Films",
    release: "April 15, 2005",
    image: "assets/amityville-horror-2005.jpg",
    date: 31
  }
];

const series = [
  {
    title: "Carrie",
    year: 2026,
    service: "Prime Video",
    episodes: 8,
    premiere: "October 7, 2026",
    creator: "Mike Flanagan",
    genre: "Horror · Coming-of-age",
    cast: "Summer H. Howell · Samantha Sloyan",
    format: "Limited series",
    runtime: "Not announced",
    drop: "All 8 episodes Oct. 7",
    image: "assets/carrie-series.png",
    nights: [7, 8, 9, 10],
    blocks: ["Episodes 1–2", "Episodes 3–4", "Episodes 5–6", "Episodes 7–8"]
  },
  {
    title: "Below",
    year: 2026,
    service: "Netflix",
    episodes: 6,
    premiere: "October 8, 2026",
    creator: "Jesse McKeown",
    genre: "Creature Horror · Thriller",
    cast: "Josh Hartnett · Mackenzie Davis · Charlie Heaton",
    format: "Limited series",
    runtime: "45 min / episode",
    rating: "TV-MA",
    drop: "All 6 episodes Oct. 8",
    image: "assets/below.jpg",
    nights: [11, 12, 13],
    blocks: ["Episodes 1–2", "Episodes 3–4", "Episodes 5–6"]
  },
  {
    title: "Crystal Lake",
    year: 2026,
    service: "Peacock",
    episodes: 8,
    premiere: "October 15, 2026",
    creator: "Brad Caleb Kane",
    genre: "Slasher · Friday the 13th prequel",
    cast: "Linda Cardellini · William Catlett · Gwendolyn Sundstrom",
    format: "Peacock Original",
    runtime: "60 min / episode",
    studio: "A24",
    drop: "All 8 episodes Oct. 15",
    image: "assets/crystal-lake.png",
    nights: [15, 16, 17, 18],
    blocks: ["Episodes 1–2", "Episodes 3–4", "Episodes 5–6", "Episodes 7–8"]
  }
];

const scheduledSeriesNights = series.flatMap(show =>
  show.nights.map((day, index) => ({
    day,
    title: show.title,
    detail: show.blocks[index],
    service: show.service,
    genre: show.genre,
    image: show.image,
    kind: "series"
  }))
);

const specialNights = {
  24: { kind: "blackout", title: "NO WATCHING", detail: "Unavailable · hard blackout night" }
};

const plannedNights = confirmedMovies.length + scheduledSeriesNights.length;
const accountedNights = plannedNights + Object.keys(specialNights).length;
const openNights = 31 - accountedNights;
const totalMovieMinutes = confirmedMovies.reduce((sum, movie) => sum + Number.parseInt(movie.runtime, 10), 0);
const totalEpisodes = series.reduce((sum, show) => sum + show.episodes, 0);

document.querySelector("#confirmedCount").textContent = accountedNights;
document.querySelector("#openCount").textContent = `${openNights} nights open`;
document.querySelector("#openNightCount").textContent = openNights;
document.querySelector("#progressFill").style.width = `${(accountedNights / 31) * 100}%`;
document.querySelector("#progressLabel").textContent = `${confirmedMovies.length} movies + ${scheduledSeriesNights.length} series nights + ${Object.keys(specialNights).length} blackout night accounted for`; 
document.querySelector("#movieCount").textContent = confirmedMovies.length;
document.querySelector("#seriesCount").textContent = series.length;
document.querySelector("#episodeCount").textContent = totalEpisodes;
document.querySelector("#movieRuntime").textContent = `${Math.floor(totalMovieMinutes / 60)}h ${totalMovieMinutes % 60}m`;

const confirmedRoot = document.querySelector("#confirmedMovies");
confirmedMovies.forEach(movie => {
  const card = document.createElement("article");
  card.className = "movie-card";
  const artStyle = movie.image
    ? `background-image: linear-gradient(to top, rgba(9,9,11,.98) 5%, rgba(9,9,11,.72) 46%, rgba(9,9,11,.12) 78%), url('${movie.image}')`
    : "";

  const chips = [movie.year, movie.runtime, movie.rating].filter(Boolean);
  const details = [
    ["Director", movie.director],
    ["Genre", movie.genre],
    ["Origin", movie.origin],
    ["Language", movie.language],
    ["Distributor", movie.distributor],
    ["Release", movie.release],
    ["Streaming", movie.streaming]
  ].filter(([, value]) => value);

  card.innerHTML = `
    <div class="movie-art" aria-hidden="true" ${artStyle ? `style="${artStyle}"` : ""}></div>
    <div class="movie-content">
      <div class="meta-chips">${chips.map(item => `<span>${item}</span>`).join("")}</div>
      <h3>${movie.title}</h3>
      <div class="movie-facts">
        ${details.map(([label, value]) => `<div><span>${label}</span><strong>${value}</strong></div>`).join("")}
      </div>
      <div class="schedule-line"><span>Marathon date</span><strong>${movie.date ? `October ${movie.date}` : "TBD"}</strong></div>
    </div>
  `;
  confirmedRoot.appendChild(card);
});

const seriesRoot = document.querySelector("#seriesSchedule");
series.forEach(show => {
  const card = document.createElement("article");
  card.className = "series-card";
  const dateRange = show.nights.length === 1
    ? `October ${show.nights[0]}`
    : `October ${show.nights[0]}–${show.nights.at(-1)}`;
  card.innerHTML = `
    <div class="series-topline"><span>${show.service}</span><span>${show.format}</span></div>
    <h3>${show.title}</h3>
    <div class="meta-chips series-chips">
      <span>${show.year}</span><span>${show.episodes} episodes</span><span>2 eps/night</span>
    </div>
    <div class="series-meta-grid">
      <div><span>Premiere</span><strong>${show.premiere}</strong></div>
      <div><span>Creator / Showrunner</span><strong>${show.creator}</strong></div>
      <div><span>Genre</span><strong>${show.genre}</strong></div>
      <div><span>Runtime</span><strong>${show.runtime}</strong></div>
      ${show.rating ? `<div><span>Rating</span><strong>${show.rating}</strong></div>` : ""}
      ${show.studio ? `<div><span>Studio</span><strong>${show.studio}</strong></div>` : ""}
      <div><span>Cast</span><strong>${show.cast}</strong></div>
      <div><span>Release</span><strong>${show.drop}</strong></div>
      <div><span>Your schedule</span><strong>${dateRange}</strong></div>
    </div>
    <div class="episode-blocks">
      ${show.nights.map((day, index) => `<div><strong>Oct ${day}</strong><span>${show.blocks[index]}</span></div>`).join("")}
    </div>
  `;
  seriesRoot.appendChild(card);
});

const calendarRoot = document.querySelector("#calendar");
for (let day = 1; day <= 31; day += 1) {
  const movie = confirmedMovies.find(item => item.date === day);
  const seriesNight = scheduledSeriesNights.find(item => item.day === day);
  const specialNight = specialNights[day];
  const entry = movie || seriesNight || specialNight;
  const art = movie?.image || seriesNight?.image;
  const night = document.createElement("article");
  const stateClass = specialNight?.kind || (entry ? "confirmed" : "open");
  night.className = `night ${stateClass} ${seriesNight ? "series-night" : ""} ${art ? "has-art" : ""}`;
  if (art) {
    night.style.backgroundImage = `linear-gradient(to top, rgba(9,9,11,.96) 4%, rgba(9,9,11,.72) 48%, rgba(9,9,11,.22) 100%), url('${art}')`;
  }
  night.innerHTML = `
    <div class="night-number">NIGHT ${String(day).padStart(2, "0")}</div>
    <div class="night-date">October ${day}, 2026</div>
    ${movie
      ? `<div class="night-title">${movie.title}</div><div class="night-detail">${movie.runtime} · ${movie.genre}</div>`
      : seriesNight
        ? `<div class="night-title">${seriesNight.title}</div><div class="night-detail">${seriesNight.detail} · ${seriesNight.service}</div><div class="night-genre">${seriesNight.genre}</div>`
        : specialNight
          ? `<div class="blackout-badge">UNAVAILABLE</div><div class="night-title">${specialNight.title}</div><div class="night-detail">${specialNight.detail}</div>`
          : `<div class="placeholder-mark">TBD</div><div class="night-open">Open / Catch-up</div><div class="night-detail">Movie slot not chosen yet</div>`}
  `;
  calendarRoot.appendChild(night);
}
