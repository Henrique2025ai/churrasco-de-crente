const money = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

const qtyFormat = new Intl.NumberFormat("pt-BR", {
  maximumFractionDigits: 2,
  minimumFractionDigits: 0,
});

const supabaseConfig = {
  url: "https://fccaujtsoythogksxgmn.supabase.co",
  publishableKey: "sb_publishable_p3C7_KBdIEWxTylgoVwpXg_CuaAEp9j",
};

const today = "2026-04-16";

const defaultRules = {
  menKg: 0.7,
  womenKg: 0.5,
  kidsKg: 0.3,
  mainMeatShare: 0.6,
  sausageShare: 0.2,
  chickenShare: 0.2,
  safetyMargin: 0.1,
};

const levels = {
  basic: {
    name: "Básico",
    badge: "Nível 1",
    description: "Contra-filé ou alcatra para um churrasco honesto, gostoso e sem ostentação.",
    meatOptions: [
      { label: "Contra-filé", price: 59.9, source: "Preço médio interno + mercado local" },
      { label: "Alcatra", price: 64.9, source: "Preço médio interno + mercado local" },
    ],
  },
  medium: {
    name: "Médio",
    badge: "Nível 2",
    description: "Picanha linha Mais da Swift como carne principal.",
    meatOptions: [{ label: "Picanha Mais Swift", price: 99, source: "Swift + base interna" }],
  },
  premium: {
    name: "Premium",
    badge: "Nível 3",
    description: "Picanha premium da Swift para aquele ajuntamento caprichado.",
    meatOptions: [{ label: "Picanha Premium Swift", price: 120, source: "Swift + base interna" }],
  },
};

const defaultItems = [
  {
    id: "mainMeat",
    name: "Carne principal",
    category: "Carnes",
    unit: "kg",
    rule: "mainMeat",
    price: 59.9,
    source: "Swift / Barbosa / base interna",
    updatedAt: today,
    active: true,
    selected: true,
  },
  {
    id: "sausage",
    name: "Linguiça",
    category: "Carnes",
    unit: "kg",
    rule: "sausage",
    price: 30,
    source: "Barbosa + base interna",
    updatedAt: today,
    active: true,
    selected: true,
  },
  {
    id: "chicken",
    name: "Frango",
    category: "Carnes",
    unit: "kg",
    rule: "chicken",
    price: 21,
    source: "Barbosa + base interna",
    updatedAt: today,
    active: true,
    selected: true,
  },
  {
    id: "porkBelly",
    name: "Panceta",
    category: "Carnes",
    unit: "kg",
    rule: "perPersonKg",
    perPerson: 0.08,
    price: 35,
    source: "Base interna",
    updatedAt: today,
    active: true,
    selected: false,
  },
  {
    id: "cheese",
    name: "Queijo coalho",
    category: "Carnes",
    unit: "pacote",
    rule: "packagePerPeople",
    peoplePerPackage: 8,
    price: 28,
    source: "Barbosa + base interna",
    updatedAt: today,
    active: true,
    selected: false,
  },
  {
    id: "soda",
    name: "Refrigerante",
    category: "Bebidas",
    unit: "litro",
    rule: "litersPerPerson",
    litersPerPerson: 0.8,
    price: 6.5,
    source: "Barbosa + outros supermercados",
    updatedAt: today,
    active: true,
    selected: true,
  },
  {
    id: "water",
    name: "Água",
    category: "Bebidas",
    unit: "litro",
    rule: "litersPerPerson",
    litersPerPerson: 0.5,
    price: 2.2,
    source: "Barbosa + base interna",
    updatedAt: today,
    active: true,
    selected: true,
  },
  {
    id: "juice",
    name: "Suco",
    category: "Bebidas",
    unit: "litro",
    rule: "litersPerPerson",
    litersPerPerson: 0.35,
    price: 8,
    source: "Outros supermercados + base interna",
    updatedAt: today,
    active: true,
    selected: false,
  },
  {
    id: "beer",
    name: "Cerveja",
    category: "Bebidas",
    unit: "lata",
    rule: "packagePerAdult",
    packagesPerAdult: 2,
    price: 4.2,
    source: "Barbosa + outros supermercados",
    updatedAt: today,
    active: true,
    selected: false,
    alcoholic: true,
  },
  {
    id: "garlicBread",
    name: "Pão de alho",
    category: "Acompanhamentos",
    unit: "pacote",
    rule: "packagePerPeople",
    peoplePerPackage: 5,
    price: 14,
    source: "Barbosa + base interna",
    updatedAt: today,
    active: true,
    selected: true,
  },
  {
    id: "farofa",
    name: "Farofa",
    category: "Acompanhamentos",
    unit: "pacote",
    rule: "packagePerPeople",
    peoplePerPackage: 10,
    price: 9,
    source: "Barbosa + base interna",
    updatedAt: today,
    active: true,
    selected: true,
  },
  {
    id: "rice",
    name: "Arroz",
    category: "Acompanhamentos",
    unit: "kg",
    rule: "perPersonKg",
    perPerson: 0.06,
    price: 7,
    source: "Barbosa + base interna",
    updatedAt: today,
    active: true,
    selected: false,
  },
  {
    id: "vinaigrette",
    name: "Vinagrete",
    category: "Acompanhamentos",
    unit: "kg",
    rule: "perPersonKg",
    perPerson: 0.08,
    price: 15,
    source: "Base interna",
    updatedAt: today,
    active: true,
    selected: true,
  },
  {
    id: "mayo",
    name: "Maionese",
    category: "Acompanhamentos",
    unit: "kg",
    rule: "perPersonKg",
    perPerson: 0.07,
    price: 18,
    source: "Base interna",
    updatedAt: today,
    active: true,
    selected: false,
  },
  {
    id: "salad",
    name: "Salada",
    category: "Acompanhamentos",
    unit: "kg",
    rule: "perPersonKg",
    perPerson: 0.08,
    price: 16,
    source: "Base interna",
    updatedAt: today,
    active: true,
    selected: false,
  },
  {
    id: "sauce",
    name: "Molho",
    category: "Acompanhamentos",
    unit: "unidade",
    rule: "packagePerPeople",
    peoplePerPackage: 12,
    price: 11,
    source: "Base interna",
    updatedAt: today,
    active: true,
    selected: false,
  },
  {
    id: "charcoal",
    name: "Carvão",
    category: "Estrutura / Apoio",
    unit: "saco",
    rule: "packagePerPeople",
    peoplePerPackage: 10,
    price: 30,
    source: "Barbosa + base interna",
    updatedAt: today,
    active: true,
    selected: true,
  },
  {
    id: "salt",
    name: "Sal grosso",
    category: "Estrutura / Apoio",
    unit: "pacote",
    rule: "fixedIfAny",
    fixedQty: 1,
    price: 5,
    source: "Barbosa + base interna",
    updatedAt: today,
    active: true,
    selected: true,
  },
  {
    id: "ice",
    name: "Gelo",
    category: "Estrutura / Apoio",
    unit: "saco",
    rule: "packagePerPeople",
    peoplePerPackage: 8,
    price: 12,
    source: "Barbosa + base interna",
    updatedAt: today,
    active: true,
    selected: true,
  },
  {
    id: "disposables",
    name: "Descartáveis",
    category: "Estrutura / Apoio",
    unit: "kit",
    rule: "packagePerPeople",
    peoplePerPackage: 20,
    price: 22,
    source: "Barbosa + base interna",
    updatedAt: today,
    active: true,
    selected: true,
  },
];

const savedState = JSON.parse(localStorage.getItem("churrasco-state") || "null");

const state = {
  level: savedState?.level || "basic",
  basicMeat: savedState?.basicMeat || "Contra-filé",
  people: savedState?.people || { men: 5, women: 6, kids: 3 },
  safety: savedState?.safety ?? false,
  noAlcohol: savedState?.noAlcohol ?? true,
  beerNudge: false,
  items: structuredClone(defaultItems),
  rules: structuredClone(defaultRules),
  dataSource: "Base local",
};

const dom = {
  levelGrid: document.querySelector("#levelGrid"),
  menInput: document.querySelector("#menInput"),
  womenInput: document.querySelector("#womenInput"),
  kidsInput: document.querySelector("#kidsInput"),
  safetyInput: document.querySelector("#safetyInput"),
  noAlcoholInput: document.querySelector("#noAlcoholInput"),
  peopleTotal: document.querySelector("#peopleTotal"),
  categoryList: document.querySelector("#categoryList"),
  resultTable: document.querySelector("#resultTable"),
  summaryGuests: document.querySelector("#summaryGuests"),
  summaryLevel: document.querySelector("#summaryLevel"),
  summaryMeat: document.querySelector("#summaryMeat"),
  summaryTotal: document.querySelector("#summaryTotal"),
  summaryPerPerson: document.querySelector("#summaryPerPerson"),
  shoppingList: document.querySelector("#shoppingList"),
  copyButton: document.querySelector("#copyButton"),
  printButton: document.querySelector("#printButton"),
  whatsappButton: document.querySelector("#whatsappButton"),
  copyStatus: document.querySelector("#copyStatus"),
  economicButton: document.querySelector("#economicButton"),
  completeButton: document.querySelector("#completeButton"),
  rulesForm: document.querySelector("#rulesForm"),
  adminItems: document.querySelector("#adminItems"),
  resetAdminButton: document.querySelector("#resetAdminButton"),
};

async function supabaseSelect(table, query = "select=*") {
  const response = await fetch(`${supabaseConfig.url}/rest/v1/${table}?${query}`, {
    headers: {
      apikey: supabaseConfig.publishableKey,
      Authorization: `Bearer ${supabaseConfig.publishableKey}`,
    },
  });

  if (!response.ok) {
    throw new Error(`Supabase ${table}: ${response.status}`);
  }

  return response.json();
}

async function loadSupabaseData() {
  try {
    const [remoteItems, remoteRules, remoteLevels] = await Promise.all([
      supabaseSelect("items", "select=*&active=eq.true&order=category.asc,name.asc"),
      supabaseSelect("calculation_rules", "select=*&id=eq.default&limit=1"),
      supabaseSelect("levels", "select=*&active=eq.true&order=id.asc"),
    ]);

    applyRemoteRules(remoteRules[0]);
    applyRemoteLevels(remoteLevels);
    applyRemoteItems(remoteItems);
    state.dataSource = "Supabase";
  } catch (error) {
    state.dataSource = "Base local";
    console.warn("Usando base local porque o Supabase não respondeu.", error);
  }
}

function applyRemoteRules(rule) {
  if (!rule) return;

  state.rules = {
    menKg: Number(rule.men_kg) || defaultRules.menKg,
    womenKg: Number(rule.women_kg) || defaultRules.womenKg,
    kidsKg: Number(rule.kids_kg) || defaultRules.kidsKg,
    mainMeatShare: Number(rule.main_meat_share) || defaultRules.mainMeatShare,
    sausageShare: Number(rule.sausage_share) || defaultRules.sausageShare,
    chickenShare: Number(rule.chicken_share) || defaultRules.chickenShare,
    safetyMargin: Number(rule.safety_margin) || defaultRules.safetyMargin,
  };
}

function applyRemoteLevels(remoteLevels) {
  const byId = Object.fromEntries(remoteLevels.map((level) => [level.id, level]));
  const basicOptions = ["basic-contra-file", "basic-alcatra"]
    .map((id) => byId[id])
    .filter(Boolean)
    .map((level) => ({
      label: level.main_meat,
      price: Number(level.main_meat_price) || 0,
      source: level.price_source,
    }));

  if (basicOptions.length) levels.basic.meatOptions = basicOptions;
  if (byId.medium) {
    levels.medium.name = byId.medium.name;
    levels.medium.description = byId.medium.description;
    levels.medium.meatOptions = [
      {
        label: byId.medium.main_meat,
        price: Number(byId.medium.main_meat_price) || 0,
        source: byId.medium.price_source,
      },
    ];
  }
  if (byId.premium) {
    levels.premium.name = byId.premium.name;
    levels.premium.description = byId.premium.description;
    levels.premium.meatOptions = [
      {
        label: byId.premium.main_meat,
        price: Number(byId.premium.main_meat_price) || 0,
        source: byId.premium.price_source,
      },
    ];
  }

  if (!levels.basic.meatOptions.some((option) => option.label === state.basicMeat)) {
    state.basicMeat = levels.basic.meatOptions[0]?.label || "Contra-filé";
  }
}

function applyRemoteItems(remoteItems) {
  if (!remoteItems.length) return;

  const selectedById = Object.fromEntries(state.items.map((item) => [item.id, item.selected]));
  state.items = remoteItems.map((item) => {
    const local = defaultItems.find((entry) => entry.id === item.id) || {};
    return {
      id: item.id,
      name: item.name,
      category: item.category,
      unit: item.unit,
      rule: item.calculation_rule,
      perPerson: item.calculation_rule === "perPersonKg" ? Number(item.consumption_value) || 0 : undefined,
      litersPerPerson: item.calculation_rule === "litersPerPerson" ? Number(item.consumption_value) || 0 : undefined,
      packagesPerAdult: item.calculation_rule === "packagePerAdult" ? Number(item.consumption_value) || 0 : undefined,
      fixedQty: item.calculation_rule === "fixedIfAny" ? Number(item.consumption_value) || 0 : undefined,
      peoplePerPackage: item.calculation_rule === "packagePerPeople" ? Number(item.package_size) || 1 : undefined,
      price: Number(item.price) || 0,
      source: item.price_source,
      updatedAt: item.updated_at ? item.updated_at.slice(0, 10) : today,
      active: item.active,
      selected: selectedById[item.id] ?? item.selected_by_default ?? local.selected ?? false,
      alcoholic: item.alcoholic,
    };
  });
}

function getTotals() {
  const men = numeric(state.people.men);
  const women = numeric(state.people.women);
  const kids = numeric(state.people.kids);
  return {
    men,
    women,
    kids,
    adults: men + women,
    guests: men + women + kids,
  };
}

function getMainMeat() {
  const level = levels[state.level];
  if (state.level === "basic") {
    return level.meatOptions.find((option) => option.label === state.basicMeat) || level.meatOptions[0];
  }
  return level.meatOptions[0];
}

function getMeatBaseKg(totals) {
  const base =
    totals.men * numeric(state.rules.menKg) +
    totals.women * numeric(state.rules.womenKg) +
    totals.kids * numeric(state.rules.kidsKg);
  return state.safety ? base * (1 + numeric(state.rules.safetyMargin)) : base;
}

function calculateItem(item, totals, meatBaseKg) {
  let qty = 0;
  let price = numeric(item.price);
  let source = item.source;
  let name = item.name;

  if (item.id === "mainMeat") {
    const meat = getMainMeat();
    name = meat.label;
    price = numeric(meat.price);
    source = meat.source;
  }

  if (item.rule === "mainMeat") qty = meatBaseKg * numeric(state.rules.mainMeatShare);
  if (item.rule === "sausage") qty = meatBaseKg * numeric(state.rules.sausageShare);
  if (item.rule === "chicken") qty = meatBaseKg * numeric(state.rules.chickenShare);
  if (item.rule === "litersPerPerson") qty = totals.guests * numeric(item.litersPerPerson);
  if (item.rule === "perPersonKg") qty = totals.guests * numeric(item.perPerson);
  if (item.rule === "packagePerPeople") qty = Math.ceil(totals.guests / numeric(item.peoplePerPackage));
  if (item.rule === "packagePerAdult") qty = Math.ceil(totals.adults * numeric(item.packagesPerAdult));
  if (item.rule === "fixedIfAny") qty = totals.guests > 0 ? numeric(item.fixedQty) : 0;

  if (["pacote", "saco", "kit", "lata", "unidade"].includes(item.unit)) qty = Math.ceil(qty);
  if (["kg", "litro"].includes(item.unit)) qty = Math.ceil(qty * 10) / 10;

  return {
    ...item,
    displayName: name,
    displayPrice: price,
    displaySource: source,
    qty,
    perPerson: totals.guests > 0 ? qty / totals.guests : 0,
    subtotal: qty * price,
  };
}

function calculate() {
  const totals = getTotals();
  const meatBaseKg = getMeatBaseKg(totals);
  const selected = state.items
    .filter((item) => item.active && item.selected)
    .filter((item) => !(state.noAlcohol && item.alcoholic))
    .map((item) => calculateItem(item, totals, meatBaseKg))
    .filter((item) => item.qty > 0);
  const total = selected.reduce((sum, item) => sum + item.subtotal, 0);
  return {
    totals,
    selected,
    total,
    perPerson: totals.adults > 0 ? total / totals.adults : 0,
    mainMeat: getMainMeat(),
  };
}

function renderLevels() {
  dom.levelGrid.innerHTML = "";
  Object.entries(levels).forEach(([id, level]) => {
    const meat = id === "basic" ? state.basicMeat : level.meatOptions[0].label;
    const button = document.createElement("button");
    button.className = "level-card";
    button.type = "button";
    button.setAttribute("aria-pressed", String(state.level === id));
    button.innerHTML = `
      <span>${level.badge}</span>
      <h3>${level.name}</h3>
      <p>${level.description}</p>
      ${
        id === "basic"
          ? `<label onclick="event.stopPropagation()"><span>Carne principal</span><select aria-label="Carne do nível básico">${level.meatOptions
              .map(
                (option) =>
                  `<option ${option.label === state.basicMeat ? "selected" : ""}>${option.label}</option>`,
              )
              .join("")}</select></label>`
          : `<p><strong>${meat}</strong></p>`
      }
    `;
    button.addEventListener("click", () => {
      state.level = id;
      persist();
      render();
    });
    const select = button.querySelector("select");
    if (select) {
      select.addEventListener("change", (event) => {
        state.basicMeat = event.target.value;
        persist();
        render();
      });
    }
    dom.levelGrid.append(button);
  });
}

function renderPeople() {
  dom.menInput.value = state.people.men;
  dom.womenInput.value = state.people.women;
  dom.kidsInput.value = state.people.kids;
  dom.safetyInput.checked = state.safety;
  dom.noAlcoholInput.checked = state.noAlcohol;
}

function renderItems() {
  const grouped = state.items.reduce((acc, item) => {
    if (!acc[item.category]) acc[item.category] = [];
    acc[item.category].push(item);
    return acc;
  }, {});

  dom.categoryList.innerHTML = Object.entries(grouped)
    .map(
      ([category, items]) => `
        <div class="category">
          <h3>${category}</h3>
          <div class="item-grid">
            ${items
              .map(
                (item) => `
                  <label class="item-toggle">
                    <span>
                      <strong>${item.name}</strong>
                      <small>${item.unit} · ${item.source}</small>
                      ${
                        item.id === "beer" && state.beerNudge
                          ? `<small class="beer-nudge">Vai se converter! 😄</small>`
                          : ""
                      }
                    </span>
                    <input type="checkbox" data-item="${item.id}" ${item.selected ? "checked" : ""} ${
                      item.active ? "" : "disabled"
                    } />
                  </label>
                `,
              )
              .join("")}
          </div>
        </div>
      `,
    )
    .join("");

  dom.categoryList.querySelectorAll("[data-item]").forEach((input) => {
    input.addEventListener("change", (event) => {
      const item = state.items.find((entry) => entry.id === event.target.dataset.item);
      item.selected = event.target.checked;
      if (item.id === "beer" && event.target.checked) {
        state.noAlcohol = false;
        state.beerNudge = true;
        window.setTimeout(() => {
          state.beerNudge = false;
          render();
        }, 3200);
      }
      persist();
      render();
    });
  });
}

function renderResults(result) {
  dom.resultTable.innerHTML = result.selected
    .map(
      (item) => `
        <tr>
          <td>${item.category}</td>
          <td><strong>${item.displayName}</strong><small>Atualizado em ${formatDate(item.updatedAt)}</small></td>
          <td>${formatQty(item.qty)} ${item.unit}</td>
          <td>${formatQty(item.perPerson)} ${item.unit}</td>
          <td>${money.format(item.displayPrice)}</td>
          <td>${item.displaySource}</td>
          <td><strong>${money.format(item.subtotal)}</strong></td>
        </tr>
      `,
    )
    .join("");
}

function renderSummary(result) {
  dom.peopleTotal.textContent = `${result.totals.guests} pessoas`;
  dom.summaryGuests.textContent = result.totals.guests;
  dom.summaryLevel.textContent = levels[state.level].name;
  dom.summaryMeat.textContent = result.mainMeat.label;
  dom.summaryTotal.textContent = money.format(result.total);
  dom.summaryPerPerson.textContent = money.format(result.perPerson);
}

function renderShoppingList(result) {
  const lines = [
    "CHURRASCO DE CRENTE",
    "",
    `Convidados: ${result.totals.guests} (${result.totals.men} homens, ${result.totals.women} mulheres, ${result.totals.kids} crianças)`,
    `Nível: ${levels[state.level].name}`,
    `Carne principal: ${result.mainMeat.label}`,
    `Total estimado: ${money.format(result.total)}`,
    `Valor por adulto: ${money.format(result.perPerson)}`,
    "Criança ajuda a comer... mas não entra na divisão 😄",
    "",
    "LISTA DE COMPRAS",
    ...result.selected.map(
      (item) =>
        `- ${item.displayName}: ${formatQty(item.qty)} ${item.unit} · ${money.format(item.subtotal)}`,
    ),
    "",
    "Aviso: os valores são estimativas e podem variar conforme região, loja, promoção e disponibilidade.",
  ];
  const text = lines.join("\n");
  dom.shoppingList.value = text;
  dom.whatsappButton.href = `https://wa.me/?text=${encodeURIComponent(text)}`;
}

function renderAdmin() {
  if (!dom.rulesForm || !dom.adminItems) return;

  const ruleFields = [
    ["menKg", "Homem em kg"],
    ["womenKg", "Mulher em kg"],
    ["kidsKg", "Criança em kg"],
    ["mainMeatShare", "% carne principal"],
    ["sausageShare", "% linguiça"],
    ["chickenShare", "% frango"],
    ["safetyMargin", "Margem de segurança"],
  ];

  dom.rulesForm.innerHTML = ruleFields
    .map(
      ([key, label]) => `
        <label class="admin-field">
          <span>${label}</span>
          <input type="number" step="0.01" min="0" data-rule="${key}" value="${state.rules[key]}" />
        </label>
      `,
    )
    .join("");

  dom.rulesForm.querySelectorAll("[data-rule]").forEach((input) => {
    input.addEventListener("input", (event) => {
      state.rules[event.target.dataset.rule] = Number(event.target.value);
      persist();
      render();
    });
  });

  dom.adminItems.innerHTML = state.items
    .map(
      (item) => `
        <div class="admin-item">
          <label class="admin-field">
            <span>Item</span>
            <input data-admin="${item.id}" data-field="name" value="${item.name}" />
          </label>
          <label class="admin-field">
            <span>Preço</span>
            <input type="number" min="0" step="0.01" data-admin="${item.id}" data-field="price" value="${item.price}" />
          </label>
          <label class="admin-field">
            <span>Fonte</span>
            <input data-admin="${item.id}" data-field="source" value="${item.source}" />
          </label>
          <label class="check-row">
            <input type="checkbox" data-admin="${item.id}" data-field="active" ${item.active ? "checked" : ""} />
            <span>Ativo</span>
          </label>
        </div>
      `,
    )
    .join("");

  dom.adminItems.querySelectorAll("[data-admin]").forEach((input) => {
    input.addEventListener("input", handleAdminInput);
    input.addEventListener("change", handleAdminInput);
  });
}

function handleAdminInput(event) {
  const item = state.items.find((entry) => entry.id === event.target.dataset.admin);
  const field = event.target.dataset.field;
  if (field === "active") item[field] = event.target.checked;
  else if (field === "price") item[field] = Number(event.target.value);
  else item[field] = event.target.value;
  item.updatedAt = today;
  persist();
  render();
}

function render() {
  const result = calculate();
  renderLevels();
  renderPeople();
  renderItems();
  renderResults(result);
  renderSummary(result);
  renderShoppingList(result);
  renderAdmin();
}

function persist() {
  localStorage.setItem(
    "churrasco-state",
    JSON.stringify({
      level: state.level,
      basicMeat: state.basicMeat,
      people: state.people,
      safety: state.safety,
      noAlcohol: state.noAlcohol,
    }),
  );
}

function numeric(value) {
  return Number(value) || 0;
}

function formatQty(value) {
  return qtyFormat.format(value);
}

function formatDate(value) {
  const [year, month, day] = value.split("-");
  return `${day}/${month}/${year}`;
}

function setPreset(type) {
  const economic = ["mainMeat", "sausage", "chicken", "soda", "water", "garlicBread", "farofa", "charcoal", "salt", "ice"];
  const complete = state.items.map((item) => item.id).filter((id) => id !== "beer" || !state.noAlcohol);
  const selected = type === "economic" ? economic : complete;
  state.items.forEach((item) => {
    item.selected = selected.includes(item.id);
  });
  persist();
  render();
}

dom.menInput.addEventListener("input", (event) => {
  state.people.men = Number(event.target.value);
  persist();
  render();
});

dom.womenInput.addEventListener("input", (event) => {
  state.people.women = Number(event.target.value);
  persist();
  render();
});

dom.kidsInput.addEventListener("input", (event) => {
  state.people.kids = Number(event.target.value);
  persist();
  render();
});

dom.safetyInput.addEventListener("change", (event) => {
  state.safety = event.target.checked;
  persist();
  render();
});

dom.noAlcoholInput.addEventListener("change", (event) => {
  state.noAlcohol = event.target.checked;
  if (state.noAlcohol) {
    const beer = state.items.find((item) => item.id === "beer");
    if (beer) beer.selected = false;
  }
  persist();
  render();
});

dom.copyButton.addEventListener("click", async () => {
  await navigator.clipboard.writeText(dom.shoppingList.value);
  dom.copyStatus.textContent = "Lista copiada. Agora é só mandar no grupo.";
  setTimeout(() => {
    dom.copyStatus.textContent = "";
  }, 2600);
});

dom.printButton.addEventListener("click", () => window.print());
dom.economicButton.addEventListener("click", () => setPreset("economic"));
dom.completeButton.addEventListener("click", () => setPreset("complete"));

dom.resetAdminButton?.addEventListener("click", () => {
  state.items = structuredClone(defaultItems);
  state.rules = structuredClone(defaultRules);
  persist();
  render();
});

async function init() {
  render();
  await loadSupabaseData();
  render();
}

init();
