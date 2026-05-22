const sel = document.getElementById('poke-select');
const content = document.getElementById('poke-content');
let frontSprite = true;
let currentSprites = {};

const STAT_COLORS = {
  hp:               '#e63946',
  attack:           '#f4a261',
  defense:          '#457b9d',
  'special-attack': '#7b2d8b',
  'special-defense':'#2a9d8f',
  speed:            '#f4d03f'
};

async function loadList() {
  try {
    const res  = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
    const data = await res.json();

    data.results.forEach((p, i) => {
      const opt = document.createElement('option');
      opt.value       = p.name;
      opt.textContent = `#${i + 1}  ${p.name.charAt(0).toUpperCase() + p.name.slice(1)}`;
      sel.appendChild(opt);
    });

    content.innerHTML = `<div class="placeholder">Select a Pokemon from the list above</div>`;
  } catch (e) {
    content.innerHTML = `<div class="placeholder">⚠ Failed to load Pokemon list</div>`;
  }
}

async function loadPokemon(name) {
  content.innerHTML = `<div class="placeholder"><span class="loading-dot"></span> Loading ${name}...</div>`;

  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const p   = await res.json();

    currentSprites = {
      front: p.sprites.front_default,
      back:  p.sprites.back_default
    };
    frontSprite = true;

    const types = p.types.map(t =>
      `<span class="type-badge type-${t.type.name}">${t.type.name}</span>`
    ).join('');

    const bars = p.stats.map(s => {
      const pct   = Math.round(s.base_stat / 255 * 100);
      const color = STAT_COLORS[s.stat.name] || '#8a9bb5';
      return `
        <div class="bar-row">
          <span class="bar-name">${s.stat.name}</span>
          <div class="bar-track">
            <div class="bar-fill" style="width:${pct}%; background:${color}"></div>
          </div>
          <span class="bar-num">${s.base_stat}</span>
        </div>`;
    }).join('');

    const abilities = p.abilities
      .map(a => `<span class="ability-tag">${a.ability.name}</span>`)
      .join('');

    content.innerHTML = `
      <div class="poke-main-card">

        <div class="poke-top">
          <div class="sprite-wrap">
            <img id="sprite-img" src="${currentSprites.front}" alt="${p.name}" />
            <span class="sprite-hint">click to flip</span>
          </div>
          <div class="poke-name-block">
            <p class="poke-id">#${String(p.id).padStart(3, '0')}</p>
            <p class="poke-name">${p.name}</p>
            <div class="types-row">${types}</div>
          </div>
        </div>

        <div class="poke-stats">
          <div class="stat-cell">
            <p class="label">Height</p>
            <p class="value">${(p.height / 10).toFixed(1)} m</p>
          </div>
          <div class="stat-cell">
            <p class="label">Weight</p>
            <p class="value">${(p.weight / 10).toFixed(1)} kg</p>
          </div>
          <div class="stat-cell">
            <p class="label">Base Experience</p>
            <p class="value">${p.base_experience ?? '—'}</p>
          </div>
          <div class="stat-cell">
            <p class="label">Pokemon in API</p>
            <p class="value">151</p>
          </div>
        </div>

        <div class="poke-bars">
          <p class="bars-title">Base Stats</p>
          ${bars}
        </div>

        <div class="poke-abilities">
          <p class="abilities-title">Abilities</p>
          <div class="abilities-list">${abilities}</div>
        </div>

      </div>`;

    document.getElementById('sprite-img').addEventListener('click', () => {
      frontSprite = !frontSprite;
      document.getElementById('sprite-img').src = frontSprite
        ? currentSprites.front
        : currentSprites.back;
    });

  } catch (e) {
    content.innerHTML = `<div class="placeholder">⚠ Failed to load Pokemon data</div>`;
  }
}

sel.addEventListener('change', () => {
  if (sel.value) loadPokemon(sel.value);
});

loadList();