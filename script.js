const CASE_PRICE = 2.49;

const SPIN_CONFIG = {
  durationMs: 4200,
  totalTiles: 28,
  winnerIndex: 20,
  tileWidth: 170,
  tileGap: 10
};

const RARITY_COLORS = {
  "军规级": "#3b82f6",
  "受限": "#a855f7",
  "保密": "#ec4899",
  "隐秘": "#ef4444",
  "罕见特殊": "#f59e0b"
};

const RARITY_WEIGHTS = [
  { key: "军规级", weight: 79.92 },
  { key: "受限", weight: 15.98 },
  { key: "保密", weight: 3.2 },
  { key: "隐秘", weight: 0.64 },
  { key: "罕见特殊", weight: 0.26 }
];

const WEAR_TIERS = [
  { name: "崭新出厂", weight: 7, multiplier: 1.85 },
  { name: "略有磨损", weight: 23, multiplier: 1.35 },
  { name: "久经沙场", weight: 33, multiplier: 1 },
  { name: "破损不堪", weight: 24, multiplier: 0.72 },
  { name: "战痕累累", weight: 13, multiplier: 0.52 }
];

const ACHIEVEMENTS = [
  { id: "first_open", title: "第一次开箱", desc: "完成首次开箱。" },
  { id: "first_stat", title: "StatTrak™ 初体验", desc: "开到一个 StatTrak™。" },
  { id: "first_pink", title: "粉色降临", desc: "首次开到保密。" },
  { id: "first_red", title: "红色惊喜", desc: "首次开到隐秘。" },
  { id: "first_gold", title: "金色之光", desc: "首次开到罕见特殊。" },
  { id: "purple_streak", title: "三连紫", desc: "连续 3 次开到受限或更高。" },
  { id: "profit_10", title: "小赚一笔", desc: "累计 10 次后净值转正。" }
];

const CASES = [
  {
    id: "fracture",
    name: "裂网武器箱",
    pool: {
      "军规级": [
        { name: "P2000 | 渐层琥珀", base: 1.1 },
        { name: "MP5-SD | 量子跃迁", base: 1.2 },
        { name: "SSG 08 | 霓虹云", base: 1.3 }
      ],
      "受限": [
        { name: "Glock-18 | 清晰涂装", base: 3.8 },
        { name: "M4A4 | 次世代", base: 5.2 },
        { name: "MAC-10 | 霓虹骑士", base: 4.4 }
      ],
      "保密": [
        { name: "AK-47 | 幻影破坏者", base: 16.5 },
        { name: "Desert Eagle | 打印流", base: 20.8 }
      ],
      "隐秘": [
        { name: "M4A1-S | 机匣", base: 118.0 },
        { name: "Glock-18 | 女武神", base: 95.0 }
      ],
      "罕见特殊": [
        { name: "蝴蝶刀 | 渐变之色", base: 1420.0 },
        { name: "爪子刀 | 屠夫", base: 760.0 }
      ]
    }
  },
  {
    id: "recoil",
    name: "后坐力武器箱",
    pool: {
      "军规级": [
        { name: "UMP-45 | 机械蓝图", base: 1.0 },
        { name: "P90 | 沙海风暴", base: 1.3 },
        { name: "R8 Revolver | 烈焰工坊", base: 1.2 }
      ],
      "受限": [
        { name: "FAMAS | 防线", base: 3.4 },
        { name: "USP-S | 异星", base: 4.6 },
        { name: "M249 | 深潜者", base: 4.1 }
      ],
      "保密": [
        { name: "AWP | 染红网格", base: 18.0 },
        { name: "AK-47 | 夜愿", base: 25.0 }
      ],
      "隐秘": [
        { name: "USP-S | 杀意大名", base: 136.0 },
        { name: "P250 | 影刃", base: 98.0 }
      ],
      "罕见特殊": [
        { name: "鲍伊猎刀 | 自动化", base: 410.0 },
        { name: "短剑 | 都市迷彩", base: 298.0 }
      ]
    }
  },
  {
    id: "prism",
    name: "炫彩武器箱",
    pool: {
      "军规级": [
        { name: "PP-Bizon | 零点漂移", base: 1.1 },
        { name: "MP7 | 霓虹雾", base: 1.3 },
        { name: "SCAR-20 | 线框", base: 1.2 }
      ],
      "受限": [
        { name: "Galil AR | 晶格", base: 3.2 },
        { name: "M4A4 | 流光", base: 5.4 },
        { name: "Tec-9 | 脉冲", base: 4.1 }
      ],
      "保密": [
        { name: "AK-47 | 霓虹裂变", base: 19.5 },
        { name: "Desert Eagle | 量子纹", base: 21.8 }
      ],
      "隐秘": [
        { name: "AWP | 深空幻影", base: 120.0 },
        { name: "M4A1-S | 夜航", base: 98.0 }
      ],
      "罕见特殊": [
        { name: "折叠刀 | 极光", base: 680.0 },
        { name: "刺刀 | 深渊", base: 910.0 }
      ]
    }
  },
  {
    id: "arctic",
    name: "极地武器箱",
    pool: {
      "军规级": [
        { name: "CZ75-Auto | 冰霜", base: 1.0 },
        { name: "MAG-7 | 雪线", base: 1.1 },
        { name: "AUG | 极光白", base: 1.4 }
      ],
      "受限": [
        { name: "FAMAS | 霜冻波纹", base: 3.6 },
        { name: "UMP-45 | 寒钢", base: 4.0 },
        { name: "Five-SeveN | 冷芯", base: 4.2 }
      ],
      "保密": [
        { name: "AK-47 | 白霜之牙", base: 17.2 },
        { name: "P250 | 冰裂", base: 15.4 }
      ],
      "隐秘": [
        { name: "AWP | 冰雾", base: 102.0 },
        { name: "M4A4 | 极夜", base: 114.0 }
      ],
      "罕见特殊": [
        { name: "爪子刀 | 北境", base: 780.0 },
        { name: "猎杀者匕首 | 冰川", base: 520.0 }
      ]
    }
  },
  {
    id: "shadow",
    name: "暗影武器箱",
    pool: {
      "军规级": [
        { name: "P90 | 暮影", base: 1.2 },
        { name: "Nova | 黑羽", base: 1.1 },
        { name: "G3SG1 | 潜行", base: 1.3 }
      ],
      "受限": [
        { name: "USP-S | 夜语", base: 4.5 },
        { name: "MAC-10 | 影迹", base: 3.9 },
        { name: "XM1014 | 暗面", base: 4.2 }
      ],
      "保密": [
        { name: "AK-47 | 幽影", base: 22.0 },
        { name: "Desert Eagle | 黑曜", base: 20.2 }
      ],
      "隐秘": [
        { name: "M4A1-S | 影刃", base: 108.0 },
        { name: "Glock-18 | 夜魇", base: 92.0 }
      ],
      "罕见特殊": [
        { name: "蝴蝶刀 | 夜幕", base: 1350.0 },
        { name: "刺刀 | 黑金", base: 820.0 }
      ]
    }
  }
];

const state = {
  totalOpened: 0,
  totalSpent: 0,
  totalValue: 0,
  history: [],
  spinning: false,
  achievements: {}
};

const $ = (id) => document.getElementById(id);
const caseSelect = $("caseSelect");
const openBtn = $("openBtn");
const resultCard = $("resultCard");
const rouletteWrap = $("rouletteWrap");
const rouletteViewport = $("rouletteViewport");
const rouletteTrack = $("rouletteTrack");
const historyEl = $("history");
const statsEl = $("stats");
const clearBtn = $("clearHistory");
const achievementsList = $("achievementsList");

function weightedRandom(items) {
  const total = items.reduce((sum, item) => sum + item.weight, 0);
  let roll = Math.random() * total;
  for (const item of items) {
    roll -= item.weight;
    if (roll <= 0) return item;
  }
  return items[items.length - 1];
}

function randomFrom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function pickRarity() {
  return weightedRandom(RARITY_WEIGHTS).key;
}

function pickWear() {
  return weightedRandom(WEAR_TIERS);
}

function calcValue(base, rarity, wear, statTrak) {
  const rarityBoost = {
    "军规级": 1,
    "受限": 1.2,
    "保密": 1.55,
    "隐秘": 2,
    "罕见特殊": 1
  }[rarity];

  const statTrakBoost = {
    "军规级": 1.25,
    "受限": 1.3,
    "保密": 1.4,
    "隐秘": 1.55,
    "罕见特殊": 1.7
  }[rarity];

  const wearNoise = 0.94 + Math.random() * 0.12;
  let value = base * wear.multiplier * rarityBoost * wearNoise;
  if (statTrak) value *= statTrakBoost;
  return Math.max(0.08, Number(value.toFixed(2)));
}

function currentCase() {
  return CASES.find((c) => c.id === caseSelect.value) || CASES[0];
}

function drawCandidate(c) {
  const rarity = pickRarity();
  const item = randomFrom(c.pool[rarity]);
  return { rarity, name: item.name };
}

function rollOutcome(c) {
  const rarity = pickRarity();
  const item = randomFrom(c.pool[rarity]);
  const wear = pickWear();
  const statTrak = Math.random() < 0.1;
  const value = calcValue(item.base, rarity, wear, statTrak);

  return {
    caseName: c.name,
    rarity,
    name: item.name,
    wear: wear.name,
    statTrak,
    value,
    time: new Date().toLocaleTimeString("zh-CN", { hour12: false })
  };
}

function tileMarkup(entry) {
  const color = RARITY_COLORS[entry.rarity] || "#64748b";
  return `
    <article class="roulette-tile" style="--rarity-color:${color}">
      <p class="tile-rarity">${entry.rarity}</p>
      <p class="tile-name">${entry.name}</p>
    </article>
  `;
}

function renderIdleTrack() {
  const c = currentCase();
  const idleList = Array.from({ length: 7 }, () => drawCandidate(c));
  rouletteTrack.style.transition = "none";
  rouletteTrack.style.transform = "translateX(0px)";
  rouletteTrack.innerHTML = idleList.map(tileMarkup).join("");
}

function buildSpinStrip(c, winner) {
  const strip = Array.from({ length: SPIN_CONFIG.totalTiles }, () => drawCandidate(c));
  strip[SPIN_CONFIG.winnerIndex] = { rarity: winner.rarity, name: winner.name };
  return strip;
}

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function spinDimensions() {
  const rootStyle = getComputedStyle(document.documentElement);
  const tileWidth = parseFloat(rootStyle.getPropertyValue("--tile-w")) || SPIN_CONFIG.tileWidth;
  const tileGap = parseFloat(rootStyle.getPropertyValue("--tile-gap")) || SPIN_CONFIG.tileGap;
  return { tileWidth, tileGap };
}

async function playSpin(c, winner) {
  const strip = buildSpinStrip(c, winner);
  rouletteTrack.style.transition = "none";
  rouletteTrack.style.transform = "translateX(0px)";
  rouletteTrack.innerHTML = strip.map(tileMarkup).join("");

  resultCard.innerHTML = '<p class="hint">开箱中，请稍候...</p>';

  await wait(40);
  const { tileWidth, tileGap } = spinDimensions();
  const centerOffset = rouletteViewport.clientWidth / 2 - tileWidth / 2;
  const step = tileWidth + tileGap;
  const target = -(SPIN_CONFIG.winnerIndex * step) + centerOffset;

  rouletteTrack.style.transition = `transform ${SPIN_CONFIG.durationMs / 1000}s cubic-bezier(0.08, 0.72, 0.16, 1)`;
  rouletteTrack.style.transform = `translateX(${target}px)`;

  await wait(SPIN_CONFIG.durationMs + 60);
  rouletteWrap.classList.add("is-hit");
  await wait(350);
  rouletteWrap.classList.remove("is-hit");
}

function commitRecord(record) {
  state.totalOpened += 1;
  state.totalSpent += CASE_PRICE;
  state.totalValue += record.value;
  state.history.unshift(record);
}

function rarityRank(rarity) {
  return {
    "军规级": 1,
    "受限": 2,
    "保密": 3,
    "隐秘": 4,
    "罕见特殊": 5
  }[rarity] || 0;
}

function triggerImpact(record) {
  resultCard.classList.remove("impact", "impact-rare");
  void resultCard.offsetWidth;
  const rare = rarityRank(record.rarity) >= 4;
  resultCard.classList.add(rare ? "impact-rare" : "impact");
}

function checkAchievements(record) {
  const unlocked = state.achievements;

  unlocked.first_open = true;
  if (record.statTrak) unlocked.first_stat = true;
  if (record.rarity === "保密") unlocked.first_pink = true;
  if (record.rarity === "隐秘") unlocked.first_red = true;
  if (record.rarity === "罕见特殊") unlocked.first_gold = true;

  const streak = state.history
    .slice(0, 3)
    .every((r) => rarityRank(r.rarity) >= 2);
  if (state.history.length >= 3 && streak) unlocked.purple_streak = true;

  const net = state.totalValue - state.totalSpent;
  if (state.totalOpened >= 10 && net > 0) unlocked.profit_10 = true;
}

function renderResult(record) {
  const color = RARITY_COLORS[record.rarity] || "#64748b";
  const tag = record.statTrak ? "StatTrak™" : "普通";
  const displayName = record.statTrak ? `StatTrak™ ${record.name}` : record.name;

  resultCard.classList.toggle("stattrak", record.statTrak);
  resultCard.innerHTML = `
    <h3 class="item-name" style="color:${color}">${displayName}</h3>
    <p class="item-meta">${record.rarity} · ${record.wear} · 估值 $${record.value.toFixed(2)}</p>
    <span class="item-badge ${record.statTrak ? "stattrak" : ""}" style="background:${color}">${tag}</span>
  `;
}

function renderHistory() {
  if (!state.history.length) {
    historyEl.innerHTML = "";
    return;
  }

  historyEl.innerHTML = state.history
    .slice(0, 30)
    .map((r) => {
      const color = RARITY_COLORS[r.rarity] || "#64748b";
      const name = r.statTrak ? `StatTrak™ ${r.name}` : r.name;
      return `
        <li style="border-left-color:${color}">
          <span>${r.time} · ${name}（${r.rarity} · ${r.wear}）</span>
          <strong>$${r.value.toFixed(2)}</strong>
        </li>
      `;
    })
    .join("");
}

function renderAchievements() {
  const unlocked = state.achievements || {};
  achievementsList.innerHTML = ACHIEVEMENTS.map((a) => {
    const isUnlocked = !!unlocked[a.id];
    const label = isUnlocked ? "已解锁" : "未解锁";
    return `
      <li class="${isUnlocked ? "unlocked" : ""}">
        <span>${a.title} · ${a.desc}</span>
        <strong>${label}</strong>
      </li>
    `;
  }).join("");
}

function renderStats() {
  const net = state.totalValue - state.totalSpent;
  const netColor = net >= 0 ? "var(--good)" : "#fca5a5";
  const total = state.totalOpened || 1;
  const countBy = {
    "军规级": 0,
    "受限": 0,
    "保密": 0,
    "隐秘": 0,
    "罕见特殊": 0
  };

  state.history.forEach((r) => {
    countBy[r.rarity] += 1;
  });

  const rate = (count) => `${((count / total) * 100).toFixed(1)}%`;

  statsEl.innerHTML = `
    已开箱 <strong>${state.totalOpened}</strong> 次
    ｜成本 <strong>$${state.totalSpent.toFixed(2)}</strong>
    ｜估值 <strong>$${state.totalValue.toFixed(2)}</strong>
    ｜净值 <strong style="color:${netColor}">$${net.toFixed(2)}</strong>
    <div class="rate-line">
      出货率：蓝 ${rate(countBy["军规级"])} · 紫 ${rate(countBy["受限"])}
      · 粉 ${rate(countBy["保密"])} · 红 ${rate(countBy["隐秘"])} · 金 ${rate(countBy["罕见特殊"])}
    </div>
  `;
}

function initCaseList() {
  caseSelect.innerHTML = CASES
    .map((c) => `<option value="${c.id}">${c.name}</option>`)
    .join("");
}

openBtn.addEventListener("click", async () => {
  if (state.spinning) return;

  state.spinning = true;
  openBtn.disabled = true;

  try {
    const c = currentCase();
    const record = rollOutcome(c);

    await playSpin(c, record);
    commitRecord(record);
    checkAchievements(record);
    renderResult(record);
    triggerImpact(record);
    renderHistory();
    renderStats();
    renderAchievements();
  } finally {
    state.spinning = false;
    openBtn.disabled = false;
  }
});

caseSelect.addEventListener("change", () => {
  if (!state.spinning) renderIdleTrack();
});

clearBtn.addEventListener("click", () => {
  state.totalOpened = 0;
  state.totalSpent = 0;
  state.totalValue = 0;
  state.history = [];
  state.achievements = {};
  resultCard.innerHTML = '<p class="hint">点击按钮开始开箱</p>';
  resultCard.classList.remove("stattrak");
  renderHistory();
  renderStats();
  renderIdleTrack();
  renderAchievements();
});

initCaseList();
renderStats();
renderIdleTrack();
renderAchievements();
