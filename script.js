// Данные о фильмах (загружаются из movies.js)
const movies = window.moviesData || [];

// ===== ЖАНРЫ (исключаем дублирующие типы) =====
const EXCLUDE_GENRES = ['мультфильм', 'аниме', 'фильм', 'сериал'];

// Подставляем актёров, жанры, рейтинг и доп. инфу из data.js
if (window.siteData) {
    movies.forEach(m => {
        const idMatch = m.link.match(/\/(\d+)\//);
        const id = idMatch ? idMatch[1] : '';

        // 1. Актёры
        if (window.siteData.actorsById && window.siteData.actorsById[id]) {
            m.actors = window.siteData.actorsById[id].map(a => ({ name: a.name, role: a.role }));
        } else {
            m.actors = [];
        }

        // 2. Жанры
        if (window.siteData.styleById && window.siteData.styleById[id]) {
            const raw = window.siteData.styleById[id];
            m.genres = raw.filter(g => !EXCLUDE_GENRES.includes(g.toLowerCase()));
        } else {
            m.genres = [];
        }

        // 3. Рейтинг Кинопоиска
        if (window.siteData.ratingsById && window.siteData.ratingsById[id]) {
            m.ratingKinopoisk = window.siteData.ratingsById[id];
        } else {
            m.ratingKinopoisk = null;
        }

        // 4. Информация о фильме (для вкладки "Информация")
        if (window.siteData.filmsMetaById && window.siteData.filmsMetaById[id]) {
            const meta = window.siteData.filmsMetaById[id];
            m.info = {
                "Год": meta.year || '—',
                "Длительность": meta.filmLength ? `${meta.filmLength} мин.` : '—',
                "Страна": meta.countries ? meta.countries.join(', ') : '—',
                "Рейтинг IMDb": meta.ratingImdb || '—'
            };
        } else {
            m.info = null;
        }

        // 5. Интересные факты
        if (window.siteData.factsById && window.siteData.factsById[id]) {
            m.facts = window.siteData.factsById[id];
        } else {
            m.facts = [];
        }

        // 6. Сиквелы и приквелы
        if (window.siteData.sequelsById && window.siteData.sequelsById[id]) {
            m.related = window.siteData.sequelsById[id].map(s => ({ 
                title: s.name, 
                year: s.year, 
                link: s.link 
            }));
        } else {
            m.related = [];
        }
    });
} else {
    console.warn("⚠️ data.js не загружен или window.siteData отсутствует!");
}

// ===== ВРЕМЕННЫЙ БЛОК: раздаём случайные оценки =====
// УДАЛИТЕ его, когда расставите реальные оценки вручную!
movies.forEach(m => {
    if (!m.rating || m.rating === '—') {
        m.rating = Math.floor(Math.random() * 4) + 1;
    }
});
// ====================================================

// ===== ПОДСЧЁТ СТАТИСТИКИ =====
function updateStats() {
    const filmsSet = new Set();
    const seriesSet = new Set();
    const animeSet = new Set();
    const multSet = new Set();
    const orderedSet = new Set();

    movies.forEach(movie => {
        if (movie.type === 'фильм') filmsSet.add(movie.link);
        else if (movie.type === 'сериал') seriesSet.add(movie.link);
        else if (movie.type === 'аниме') animeSet.add(movie.link);
        else if (movie.type === 'мультфильм') multSet.add(movie.link);

        if (movie.ordered && movie.ordered.includes('Заказ')) {
            orderedSet.add(movie.link);
        }
    });

    document.getElementById('count-films').innerText = filmsSet.size;
    document.getElementById('count-series').innerText = seriesSet.size;
    document.getElementById('count-anime').innerText = animeSet.size;
    document.getElementById('count-mult').innerText = multSet.size;
    document.getElementById('count-ordered').innerText = orderedSet.size;
    document.getElementById('total-count').innerText = movies.length;
}

// ===== ПОДСЧЁТ ТОПОВ =====
function updateTopUsers() {
    const orderedCounts = {};
    const luckyCounts = {};

    movies.forEach(movie => {
        if (!movie.viewer || movie.viewer === '—') return;

        const rawType = (movie.ordered || '').trim();
        const viewers = movie.viewer
            .split('/')
            .map(v => v.trim())
            .filter(v => v && v !== '—');

        if (viewers.length === 0) return;

        if (rawType === 'Заказ / Рулетка') {
            if (viewers[0]) {
                orderedCounts[viewers[0]] = (orderedCounts[viewers[0]] || 0) + 1;
            }
            if (viewers[1]) {
                luckyCounts[viewers[1]] = (luckyCounts[viewers[1]] || 0) + 1;
            }
        } else if (rawType === 'Рулетка' || rawType === 'СкамРулетка') {
            viewers.forEach(v => {
                luckyCounts[v] = (luckyCounts[v] || 0) + 1;
            });
        } else if (rawType === 'Заказ') {
            viewers.forEach(v => {
                orderedCounts[v] = (orderedCounts[v] || 0) + 1;
            });
        }
    });

    const getTop = (counts) => {
        let topCount = 0;
        for (const c of Object.values(counts)) {
            if (c > topCount) topCount = c;
        }
        if (topCount === 0) return { names: ['—'], count: 0 };

        const names = Object.entries(counts)
            .filter(([_, c]) => c === topCount)
            .map(([n]) => n);

        return { names, count: topCount };
    };

    const topOrdered = getTop(orderedCounts);
    const topLucky = getTop(luckyCounts);

    document.getElementById('top-ordered-name').innerText = topOrdered.names.join(', ');
    document.getElementById('top-ordered-count').innerText = topOrdered.count;
    document.getElementById('top-lucky-name').innerText = topLucky.names.join(', ');
    document.getElementById('top-lucky-count').innerText = topLucky.count;
}

// ===== ЗАПОЛНЕНИЕ ТАБЛИЦЫ =====
const tableBody = document.getElementById('table-body');

function renderTable(list) {
    tableBody.innerHTML = '';

        list.forEach(movie => {
        const match = movie.link.match(/\/(\d+)\//);
        const posterId = match ? match[1] : '';

        const row = document.createElement('tr');
        row.className = "odd:bg-[#141414] even:bg-[#181818] hover:!bg-[#1f1c14] cursor-pointer transition-colors relative z-[1] hover:z-20";

        row.innerHTML = `
    <td class="px-4 py-3 text-center text-gray-500 text-sm border-b border-r border-[#1f1f1f]">${movie.num}</td>
    <td class="px-4 py-3 border-b border-r border-[#1f1f1f]">
        <div class="flex items-center gap-3 text-left">
            <div class="flex flex-col items-center shrink-0 w-[46px]">
                <img src="posters/${posterId}.jpg"
                     alt=""
                     class="w-[30px] h-[45px] object-cover rounded-[3px] bg-[#222] transition-transform duration-[250ms] origin-top-left relative z-[1] cursor-zoom-in hover:scale-[4] hover:z-[9999] hover:shadow-[0_12px_30px_rgba(0,0,0,0.7)] hover:rounded-[2px]"
                     onerror="this.style.display='none'">
                ${movie.type
                    ? `<span class="mt-1 text-[8px] text-gray-500 uppercase tracking-wider font-semibold text-center leading-tight">${movie.type}</span>`
                    : ''}
            </div>
            <div class="flex flex-col min-w-0 flex-1 items-start">
                <a href="${movie.link}" target="_blank" class="text-gray-200 no-underline text-[18px] font-semibold hover:text-[#e5b95c] transition-colors break-words">${movie.title}</a>
                ${movie.genres && movie.genres.length > 0
                    ? `<span class="text-[9px] text-gray-500 uppercase tracking-wider font-semibold opacity-80 mt-0.5">${movie.genres.join(' · ')}</span>`
                    : ''}
            </div>
            <div class="flex items-center gap-2 shrink-0 ml-auto">
                ${movie.ordered && movie.ordered !== '—'
                    ? `<span class="text-xs px-2 py-1 rounded bg-[#1f1a0e] border border-[#e5b95c]/30 text-[#e5b95c] whitespace-nowrap">${movie.ordered}</span>`
                    : ''}
                ${movie.chance
                    ? `<span title="Шанс лота в рулетке" class="text-xs px-2 py-1 rounded bg-red-500/10 border border-red-500/30 text-red-400 font-bold whitespace-nowrap">${movie.chance}</span>`
                    : ''}
            </div>
        </div>
    </td>
    <td class="px-2 py-3 text-center text-gray-400 text-sm border-b border-r border-[#1f1f1f] break-all leading-tight">${movie.viewer}</td>
    <td class="px-1 py-3 text-center text-gray-400 text-sm border-b border-r border-[#1f1f1f] whitespace-nowrap">${movie.date}</td>
    <td class="px-2 md:px-3 py-3 text-center border-b border-r border-[#1f1f1f]">
        <div class="flex items-center justify-center gap-1.5 flex-wrap">
            ${(movie.rating >= 1 && movie.rating <= 4)
                ? `<img src="icons2/${movie.rating}stars.png" alt="${movie.rating}★" class="inline-block h-[18px] w-auto shrink-0 align-middle">`
                : `<span class="text-gray-500 text-sm">${movie.rating}</span>`
            }
            ${movie.ratingKinopoisk
                ? `<span class="flex items-center gap-1 whitespace-nowrap shrink-0">
                       <img src="icons2/kp.png" alt="Кинопоиск" class="h-[18px] w-auto shrink-0">
                       <span class="text-xs text-gray-300 font-semibold">${movie.ratingKinopoisk}</span>
                   </span>`
                : ''
            }
        </div>
    </td>
    <td class="hidden lg:table-cell px-4 py-3 text-center text-gray-500 text-xs border-b border-[#1f1f1f] break-words">${movie.comment}</td>
`;

// Создаём строку с расширенной информацией (скрыта по умолчанию)
const detailRow = document.createElement('tr');
detailRow.className = 'hidden';
detailRow.innerHTML = `
    <td colspan="6" class="px-6 pt-2 pb-5 bg-[#0d0d0d] border-b border-[#222]">

        <!-- Кнопки-вкладки внутри строки -->
        <div class="detail-tabs flex flex-wrap gap-1 mb-4">
            <button type="button" class="detail-tab-btn active" data-dtab="cast">В главных ролях</button>
            <button type="button" class="detail-tab-btn" data-dtab="info">Информация о фильме</button>
            <button type="button" class="detail-tab-btn" data-dtab="facts">Интересные факты</button>
            <button type="button" class="detail-tab-btn" data-dtab="related">Сиквелы и приквелы</button>
        </div>

        <!-- 1. Актёры -->
        <div class="detail-tab-content" data-dcontent="cast">
            ${movie.actors && movie.actors.length > 0
                ? `
                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-x-6 gap-y-3 max-w-[1200px]">
                        ${movie.actors.map(a => `
                            <div class="flex flex-col min-w-0">
                                <span class="text-gray-200 text-sm font-semibold truncate">${a.name}</span>
                                <span class="text-gray-500 text-xs truncate">${a.role}</span>
                            </div>
                        `).join('')}
                    </div>
                `
                : `<p class="text-gray-500 text-sm">Информация об актёрах недоступна</p>`
            }
        </div>

        <!-- 2. Информация о фильме -->
        <div class="detail-tab-content hidden" data-dcontent="info">
            ${movie.info
                ? (typeof movie.info === 'string'
                    ? `<p class="text-gray-300 text-sm leading-relaxed max-w-[900px]">${movie.info}</p>`
                    : `<div class="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 max-w-[800px]">
                        ${Object.entries(movie.info).map(([k, v]) => `
                            <div class="flex gap-2 text-sm">
                                <span class="text-gray-500 shrink-0">${k}:</span>
                                <span class="text-gray-200">${v}</span>
                            </div>
                        `).join('')}
                       </div>`)
                : `<p class="text-gray-500 text-sm">Информация о фильме пока не добавлена</p>`
            }
        </div>

        <!-- 3. Интересные факты -->
        <div class="detail-tab-content hidden" data-dcontent="facts">
            ${movie.facts && movie.facts.length > 0
                ? `<ul class="space-y-2 text-sm text-gray-300 leading-snug max-w-[900px]">
                    ${movie.facts.map(f => `
                        <li class="flex items-start gap-2">
                            <span class="text-[#e5b95c] shrink-0">•</span>
                            <span>${f}</span>
                        </li>
                    `).join('')}
                   </ul>`
                : `<p class="text-gray-500 text-sm">Интересные факты пока не добавлены</p>`
            }
        </div>

        <!-- 4. Сиквелы и приквелы -->
        <div class="detail-tab-content hidden" data-dcontent="related">
            ${movie.related && movie.related.length > 0
                ? `<div class="flex flex-wrap gap-2">
                    ${movie.related.map(r => `
                        <a href="${r.link || '#'}" target="_blank"
                           class="px-3 py-1.5 rounded-lg bg-[#1a1a1a] border border-[#2a2a2a] text-xs text-gray-300 hover:text-[#e5b95c] hover:border-[#e5b95c]/40 transition-colors">
                            ${r.title}${r.year ? ` (${r.year})` : ''}
                        </a>
                    `).join('')}
                   </div>`
                : `<p class="text-gray-500 text-sm">Сиквелы и приквелы не найдены</p>`
            }
        </div>
    </td>
`;

// Логика переключения вкладок внутри раскрытой строки
const detailTabBtns = detailRow.querySelectorAll('.detail-tab-btn');
const detailTabContents = detailRow.querySelectorAll('.detail-tab-content');

detailTabBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const tab = btn.getAttribute('data-dtab');
        detailTabBtns.forEach(b => b.classList.toggle('active', b === btn));
        detailTabContents.forEach(c => {
            c.classList.toggle('hidden', c.getAttribute('data-dcontent') !== tab);
        });
    });
});

// Обработчик клика на строку (кроме ссылки-названия)
row.addEventListener('click', (e) => {
    // Если клик был по ссылке — не раскрываем строку, пусть работает переход
    if (e.target.closest('a')) return;

    // На экранах < 1024 (md и tablet) раскрытие строк не работает
    if (window.innerWidth < 1024) return;

    detailRow.classList.toggle('hidden');
});

tableBody.appendChild(row);
tableBody.appendChild(detailRow);
    });

// ===== МОБИЛЬНЫЕ КАРТОЧКИ (для экранов < 768px) =====
const mobileContainer = document.getElementById('mobile-cards');
if (mobileContainer) {
    mobileContainer.innerHTML = list.map(movie => {
        const match = movie.link.match(/\/(\d+)\//);
        const posterId = match ? match[1] : '';

        const ratingHtml = (movie.rating >= 1 && movie.rating <= 4)
            ? `<img src="icons2/${movie.rating}stars.png" alt="" class="inline-block h-[16px] w-auto align-middle">`
            : `<span class="text-gray-500 text-xs">${movie.rating}</span>`;

        const kpHtml = movie.ratingKinopoisk
            ? `<span class="flex items-center gap-1"><img src="icons2/kp.png" alt="" class="h-[16px] w-auto"><span class="text-xs text-gray-300 font-semibold">${movie.ratingKinopoisk}</span></span>`
            : '';

        return `
            <div class="p-4 cursor-pointer hover:bg-[#141414] transition-colors" data-mnum="${movie.num}">
            <div class="flex gap-3">
                <div class="shrink-0 w-[70px]">
                    <img src="posters/${posterId}.jpg" alt="" class="w-full aspect-[2/3] object-cover rounded bg-[#222]" onerror="this.style.display='none'">
                    ${movie.type ? `<div class="mt-1 text-[9px] text-gray-500 uppercase tracking-wider font-semibold text-center">${movie.type}</div>` : ''}
                </div>
                <div class="flex-1 min-w-0">
                    <a href="${movie.link}" target="_blank" class="block text-gray-200 text-[15px] font-semibold leading-snug hover:text-[#e5b95c] transition-colors">${movie.title}</a>
                    ${movie.genres && movie.genres.length ? `<div class="text-[9px] text-gray-500 uppercase tracking-wider font-semibold mt-1">${movie.genres.join(' · ')}</div>` : ''}
                    <div class="flex items-center gap-2 mt-2 flex-wrap">${ratingHtml}${kpHtml}</div>
                    <div class="flex items-center gap-2 mt-2 flex-wrap">
                        ${movie.ordered && movie.ordered !== '—' ? `<span class="text-[10px] px-2 py-0.5 rounded bg-[#1f1a0e] border border-[#e5b95c]/30 text-[#e5b95c]">${movie.ordered}</span>` : ''}
                        ${movie.chance ? `<span class="text-[10px] px-2 py-0.5 rounded bg-red-500/10 border border-red-500/30 text-red-400 font-bold">${movie.chance}</span>` : ''}
                    </div>
                    <div class="text-[11px] text-gray-500 mt-2 break-words">
                        ${movie.viewer !== '—' ? `<span class="break-all">${movie.viewer}</span> · ` : ''}${movie.date}
                    </div>
                    ${movie.comment ? `<div class="text-[11px] text-gray-500 mt-1 italic">${movie.comment}</div>` : ''}
                </div>
            </div>

            <div class="mt-3 hidden mobile-detail">
                <div class="detail-tabs flex flex-wrap gap-1 mb-3">
    <button type="button" class="detail-tab-btn active" data-dtab="cast">В главных ролях</button>
    <button type="button" class="detail-tab-btn" data-dtab="info">Информация о фильме</button>
    <button type="button" class="detail-tab-btn" data-dtab="facts">Интересные факты</button>
    <button type="button" class="detail-tab-btn" data-dtab="related">Сиквелы и приквелы</button>
                </div>

                <div class="detail-tab-content" data-dcontent="cast">
                    ${movie.actors && movie.actors.length
                        ? `<div class="grid grid-cols-1 gap-y-2">${movie.actors.map(a => `
                            <div><div class="text-gray-200 text-sm font-semibold">${a.name}</div><div class="text-gray-500 text-xs">${a.role}</div></div>
                          `).join('')}</div>`
                        : '<p class="text-gray-500 text-sm">Нет данных</p>'}
                </div>

                <div class="detail-tab-content hidden" data-dcontent="info">
                    ${movie.info
                        ? `<p class="text-gray-300 text-sm leading-relaxed">${typeof movie.info === 'string' ? movie.info : Object.entries(movie.info).map(([k,v])=>`<b class="text-gray-500">${k}:</b> ${v}`).join('<br>')}</p>`
                        : '<p class="text-gray-500 text-sm">Нет данных</p>'}
                </div>

                <div class="detail-tab-content hidden" data-dcontent="facts">
                    ${movie.facts && movie.facts.length
                        ? `<ul class="space-y-2 text-sm text-gray-300">${movie.facts.map(f=>`<li>• ${f}</li>`).join('')}</ul>`
                        : '<p class="text-gray-500 text-sm">Нет данных</p>'}
                </div>

                <div class="detail-tab-content hidden" data-dcontent="related">
                    ${movie.related && movie.related.length
                        ? movie.related.map(r=>`<a href="${r.link||'#'}" target="_blank" class="inline-block mr-2 mb-2 px-3 py-1.5 rounded-lg bg-[#1a1a1a] border border-[#2a2a2a] text-xs text-gray-300">${r.title}${r.year?` (${r.year})`:''}</a>`).join('')
                        : '<p class="text-gray-500 text-sm">Нет данных</p>'}
                </div>
            </div>
        </div>`;
    }).join('');

    // Раскрытие карточки и переключение вкладок
    mobileContainer.querySelectorAll('[data-mnum]').forEach(card => {
        card.addEventListener('click', (e) => {
            if (e.target.closest('a')) return;
            if (e.target.closest('.detail-tab-btn')) return;
            card.querySelector('.mobile-detail').classList.toggle('hidden');
        });

        card.querySelectorAll('.detail-tab-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const tab = btn.getAttribute('data-dtab');
                card.querySelectorAll('.detail-tab-btn').forEach(b => b.classList.toggle('active', b === btn));
                card.querySelectorAll('.detail-tab-content').forEach(c => {
                    c.classList.toggle('hidden', c.getAttribute('data-dcontent') !== tab);
                });
            });
        });
    });
}

}

// ===== ОБНОВЛЕНИЕ БАННЕРОВ ПОСЛЕДНИМИ ФИЛЬМАМИ =====
function updateBannerSlides() {
    const lastMovies = movies.slice(-5).reverse();
    const slides = document.querySelectorAll('.banner-slide');

    slides.forEach((slide, index) => {
        const movie = lastMovies[index];
        if (!movie) {
            slide.style.display = 'none';
            return;
        }
        slide.style.display = '';

        // Картинка: last/{kinopoisk_id}.jpg
        const imgEl = slide.querySelector('.banner-img');
        if (imgEl) {
            const match = movie.link.match(/\/(\d+)\//);
            const posterId = match ? match[1] : '';
            imgEl.style.opacity = 1;
            imgEl.src = posterId ? `last/${posterId}.jpg` : '';
        }

        const titleEl = slide.querySelector('.banner-title');
        const dateEl = slide.querySelector('.banner-date');
        const metaEl = slide.querySelector('.banner-meta');

        if (titleEl) titleEl.textContent = movie.title;
        if (dateEl) dateEl.textContent = movie.date;

        if (metaEl) {
            let metaText = '';
            if (movie.ordered && movie.ordered !== '—') {
                metaText = (movie.viewer && movie.viewer !== '—') ? `${movie.ordered} · ${movie.viewer}` : movie.ordered;
            } else if (movie.viewer && movie.viewer !== '—') {
                metaText = movie.viewer;
            }
            metaEl.textContent = metaText;
        }
    });
}

// ===== ПОИСК ПО НАЗВАНИЮ =====
const searchInput = document.getElementById('search-input');
const totalCountEl = document.getElementById('total-count');
const catalogEl = document.getElementById('catalog');

if (searchInput) {
    searchInput.addEventListener('input', () => {
        const query = searchInput.value.trim().toLowerCase();

        const filtered = query
            ? movies.filter(m => m.title.toLowerCase().includes(query))
            : movies;

        renderTable(filtered);
        if (totalCountEl) totalCountEl.innerText = filtered.length;

        if (catalogEl) {
            const rect = catalogEl.getBoundingClientRect();
            if (rect.top < 0) {
                catalogEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    });
}

// ===== ИНИЦИАЛИЗАЦИЯ ТАЙМЕРА БАННЕРА =====
(function initBanner() {
    const slides = document.querySelectorAll('.banner-slide');
    const dots = document.querySelectorAll('.banner-dot');
    if (slides.length === 0) return;

    let current = 0;

    function showSlide(index) {
        slides.forEach((s, i) => s.classList.toggle('active', i === index));
        dots.forEach((d, i) => d.classList.toggle('active', i === index));
        current = index;
    }

    setInterval(() => {
        showSlide((current + 1) % slides.length);
    }, 3000);

    dots.forEach((dot, i) => {
        dot.addEventListener('click', () => showSlide(i));
    });

    showSlide(0);
})();

// ===== ТОП 3 ЖАНРА =====
function updateTopGenres() {
    const counts = {};

    movies.forEach(m => {
        (m.genres || []).forEach(g => {
            counts[g] = (counts[g] || 0) + 1;
        });
    });

    const sorted = Object.entries(counts)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 3);

    const el = document.getElementById('top-genres-list');
    if (!el) return;

    el.innerHTML = sorted.map(([genre, count], idx) => {
        const capitalized = genre.charAt(0).toUpperCase() + genre.slice(1);
        return `<div class="flex justify-between items-center gap-2">
            <span class="text-gray-200">${idx + 1}. ${capitalized}</span>
            <span class="text-amber-500 font-bold">${count}</span>
        </div>`;
    }).join('');
}

// ===== АВТО-ПЕРЕСЧЁТ НОМЕРОВ ПО ПОРЯДКУ В МАССИВЕ =====
movies.forEach((m, i) => { m.num = i + 1; });
// ======================================================

// ===== ЗАПУСК =====
renderTable(movies);
updateStats();
updateTopUsers();
updateBannerSlides();
updateTopGenres();

document.addEventListener('DOMContentLoaded', () => {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    const navTabLinks = document.querySelectorAll('.nav-tab-link');

    // Функция переключения вкладки
    function switchTab(tabId) {
        tabBtns.forEach(b => {
            if (b.getAttribute('data-tab') === tabId) {
                b.classList.add('bg-[#1a1a1a]', 'border-[#e5b95c]', 'text-[#e5b95c]');
                b.classList.remove('bg-[#141414]', 'border-[#222]', 'text-gray-400');
            } else {
                b.classList.remove('bg-[#1a1a1a]', 'border-[#e5b95c]', 'text-[#e5b95c]');
                b.classList.add('bg-[#141414]', 'border-[#222]', 'text-gray-400');
            }
        });

        tabContents.forEach(content => content.classList.add('hidden'));
        const targetContent = document.getElementById(`tab-${tabId}`);
        if (targetContent) {
            targetContent.classList.remove('hidden');
        }
    }

    // Клик по кнопкам вкладок над блоком
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const tabId = btn.getAttribute('data-tab');
            switchTab(tabId);
        });
    });

    // Клик по ссылкам в верхнем меню навигации
    navTabLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const tabId = link.getAttribute('data-target-tab');
            if (tabId) {
                switchTab(tabId);
            }
        });
    });
});

// ===== СЛУЧАЙНАЯ ЦИТАТА В ПОДВАЛЕ =====
const quotes = [
    { text: "Большинство дней в году не запоминаются ничем. Они начинаются. Они кончаются.", author: "", film: "500 дней лета (2009)" },
    { text: "Жизнь — как коробка шоколадных конфет. Никогда не знаешь, что внутри.", author: "Форрест Гамп", film: "Форрест Гамп (1994)" },
    { text: "То, что ты показываешь характер, вовсе не говорит о том, что этот самый характер у тебя есть.", author: "Бутч Кулидж", film: "Криминальное чтиво (1994)" },
    { text: "Вчера моя жизнь шла в одном направлении. Сегодня — в другом.", author: "Исаак Сакс", film: "Облачный атлас (2012)" },
    { text: "Но что есть любой океан, как не множество капель?", author: "Адам Юинг", film: "Облачный атлас (2012)" },
    { text: "Что есть жизнь, как не погоня за грезами?", author: "Эммануэль", film: "Ванильное небо (2001)" },
    { text: "Людям нравится думать, что жизнь имеет смысл даже в тех моментах, когда она полна бессмысленных страданий.", author: "Иеремия Наринг", film: "Остров проклятых (2009)" },
    { text: "Что по-твоему лучше: жить монстром или умереть человеком?", author: "Эдвард Дэниелс", film: "Остров проклятых (2009)" },
    { text: "Целая жизнь нужна, чтобы по-настоящему себя понять, и даже тогда можешь ошибиться.", author: "Эд Том Белл", film: "Старикам тут не место (2007)" },
    { text: "Жизни едва хватает, чтобы толком освоить хотя бы одно дело.", author: "Раст Коул", film: "Настоящий детектив (2014)" },
    { text: "Быть безумным в безумном мире — это не безумие, это нормальность!", author: "Лесли", film: "Конец ***го мира (сериал 2017 – 2019)" },
    { text: "Когда у тебя есть деньги, никто по-настоящему не становится твоим другом.", author: "Линнет Риджуэй-Дойл", film: "Смерть на Ниле (2020)" },
    { text: "Любовь не самое главное в жизни, мадемуазель. Мы думаем так только по молодости лет.", author: "Эркюль Пуаро", film: "Смерть на Ниле (2020)" },
    { text: "Если хочешь изменить мир, не спрашивай разрешения.", author: "Виктор", film: "Аркейн (сериал 2021 – 2024)" },
    { text: "В конце концов, жизнь – это коллекция упущенных возможностей.", author: "Клаудия Тидеманн", film: "Тьма (сериал 2017 – 2020)" },
    { text: "Этот дом так полон людей, что меня от этого тошнит! Когда я вырасту и женюсь, я буду жить один!", author: "Кевин Маккаллистер", film: "Один дома (1990)" },
    { text: "Ты думаешь, что можешь убежать от прошлого? Прошлое всегда находит тебя.", author: "Агент 47", film: "Хитмэн (2007)" },
    { text: "Иногда нужно стать кем-то другим, чтобы стать самим собой.", author: "Том Рипли", film: "Талантливый мистер Рипли (1999)" },
    { text: "Ложь становится правдой, если в неё достаточно долго верить.", author: "Том Рипли", film: "Талантливый мистер Рипли (1999)" },
    { text: "В этом мире сильные поедают слабых. Это закон природы.", author: "Кен Канеки", film: "Токийский гуль (сериал 2014 – 2018)" },
    { text: "Ошибка — это не провал. Ошибка — это возможность стать сильнее.", author: "Кен Канеки", film: "Токийский гуль (сериал 2014 – 2018)" },
    { text: "Иногда нужно спуститься во тьму, чтобы найти свет.", author: "Ральф Сарчи", film: "Избави нас от лукавого (2014)" },
    { text: "Не бойся имени. Бойся самого человека.", author: "Альбус Дамблдор", film: "Гарри Поттер и философский камень (2001)" },
    { text: "Выбор делает нас теми, кто мы есть на самом деле.", author: "Альбус Дамблдор", film: "Гарри Поттер и философский камень (2001)" },
    { text: "Слова — наш самый неисчерпаемый источник магии.", author: "Альбус Дамблдор", film: "Гарри Поттер и философский камень (2001)" },
    { text: "Счастье можно найти даже в тёмные времена, если не забывать обращаться к свету.", author: "Альбус Дамблдор", film: "Гарри Поттер и узник Азкабана (2004)" },
    { text: "Я верю, что правда и красота существуют и в самых простых вещах.", author: "Сириус Блэк", film: "Гарри Поттер и узник Азкабана (2004)" },
    { text: "Различия в привычках и языке не имеют значения, если наши цели идентичны и сердца открыты.", author: "Альбус Дамблдор", film: "Гарри Поттер и Кубок огня (2005)" },
    { text: "Мы сильны только тогда, когда едины, и слабы, когда разделены.", author: "Альбус Дамблдор", film: "Гарри Поттер и Кубок огня (2005)" },
    { text: "Великие перемены начинаются с маленьких шагов.", author: "Гарри Поттер", film: "Гарри Поттер и Кубок огня (2005)" },
    { text: "Молодость не может знать, как чувствует себя старость... но старики забывают, каково быть молодым.", author: "Альбус Дамблдор", film: "Гарри Поттер и Орден Феникса (2007)" },
    { text: "Любовь — самая мощная магия из всех существующих.", author: "Альбус Дамблдор", film: "Гарри Поттер и Принц-полукровка (2009)" },
    { text: "Где любовь, там и жизнь.", author: "Лили Поттер", film: "Гарри Поттер и Дары Смерти: Часть I (2010)" },
    { text: "После стольких лет? Всегда.", author: "Северус Снейп", film: "Гарри Поттер и Дары Смерти: Часть II (2011)" },
    { text: "Доверие зарабатывается действиями, а не словами.", author: "Агент Джонсон", film: "Семья шпиона (сериал 2022 – ...)" },
    { text: "Мы должны продолжать двигаться вперед, несмотря ни на что.", author: "Финч", film: "Финч (2021)" },
    { text: "Дормамму! Я пришел договориться!", author: "Доктор Стрэндж", film: "Доктор Стрэндж (2016)" },
    { text: "Мы не контролируем время. Время контролирует нас.", author: "Древняя", film: "Доктор Стрэндж (2016)" },
    { text: "Пацан сказал — пацан сделал.", author: "Андрей Пальто", film: "Слово пацана. Кровь на асфальте (2023)" },
    { text: "Кровь смывается, а позор остается навсегда.", author: "Вова Адидас", film: "Слово пацана. Кровь на асфальте (2023)" },
    { text: "Сложное ломается, простое работает.", author: "Михаил Калашников", film: "Калашников (2020)" },
    { text: "Иногда нужно нарушить правила, чтобы победить.", author: "Гас Марч-Филлипс", film: "Министерство неджентльменских дел (2024)" },
    { text: "Война ведется не только на поле боя.", author: "Гас Марч-Филлипс", film: "Министерство неджентльменских дел (2024)" },
    { text: "Любовь — это единственное доступное нам чувство, способное выйти за пределы времени и пространства.", author: "Амелия Бранд", film: "Интерстеллар (2014)" },
    { text: "Мы здесь для того, чтобы стать воспоминанием наших детей.", author: "Джозеф Купер", film: "Интерстеллар (2014)" },
    { text: "Первое правило бойцовского клуба: не говорить о бойцовском клубе.", author: "Тайлер Дёрден", film: "Бойцовский клуб (1999)" },
    { text: "Лишь утратив всё до конца, мы обретаем свободу.", author: "Тайлер Дёрден", film: "Бойцовский клуб (1999)" },
    { text: "Единственное, что стоит между тобой и твоей целью — это bullshit-история, которую ты продолжаешь рассказывать себе о том, почему ты не можешь её достичь.", author: "Джордан Белфорт", film: "Волк с Уолл-стрит (2013)" },
    { text: "Самые страшные монстры — те, что живут в наших головах.", author: "Люсия", film: "Таинственный лес (2004)" },
    { text: "Измени одно маленькое событие в прошлом, и всё будущее изменится.", author: "Эван Трэборн", film: "Эффект бабочки (2003)" },
    { text: "Чем чаще ты вспоминаешь прошлое, тем больше сожалений.", author: "Андреа Треборн", film: "Эффект бабочки (2003)" },
    { text: "Прошлое — это ловушка, из которой нельзя выбраться.", author: "Эван Трэборн", film: "Эффект бабочки (2003)" },
    { text: "Мы не можем контролировать последствия наших действий.", author: "Эван Трэборн", film: "Эффект бабочки (2003)" },
    { text: "Даже самый маленький человек может изменить ход будущего.", author: "Гэндальф", film: "Властелин колец: Братство кольца (2001)" },
    { text: "Не все те, кто блуждают, потеряны.", author: "Бильбо Бэггинс", film: "Властелин колец: Братство кольца (2001)" },
    { text: "Семья — это всё. Без семьи ты никто.", author: "Реджи Крэй", film: "Легенда (2015)" },
    { text: "Страх — лучший инструмент контроля.", author: "Реджи Крэй", film: "Легенда (2015)" },
    { text: "Лучшая любовь — это та, которая пробуждает душу.", author: "Ной Кэлхун", film: "Дневник памяти (2004)" },
    { text: "Жизнь прекрасна, если ты умеешь её ценить.", author: "Уильям Пэрриш", film: "Знакомьтесь Джо Блэк (1998)" },
    { text: "Время — самый драгоценный ресурс.", author: "Джо Блэк", film: "Знакомьтесь Джо Блэк (1998)" },
    { text: "Голливуд изменился, но магия осталась.", author: "Рик Далтон", film: "Однажды в… Голливуде (2019)" }
];

function renderRandomQuote() {
    const block = document.getElementById('quote-block');
    if (!block || quotes.length === 0) return;

    const q = quotes[Math.floor(Math.random() * quotes.length)];

    block.innerHTML = `
    <p class="text-gray-200 text-l md:text-xl italic leading-relaxed mb-4 max-w-[1300px] mx-auto">${q.text}</p>
    <div class="flex items-center justify-center gap-3 text-m flex-wrap">
        ${q.author ? `<span class="text-[#e5b95c] font-bold tracking-wide">${q.author}</span>` : ''}
        ${q.author ? '<span class="text-gray-600">·</span>' : ''}
        <span class="text-gray-500">${q.film}</span>
    </div>
`;
}

renderRandomQuote();
// =====================================

// ===== ДИНАМИЧЕСКАЯ ВЫСОТА STICKY-ЭЛЕМЕНТОВ =====
function updateStickyOffsets() {
    const nav = document.querySelector('nav');
    const searchWrap = document.querySelector('.sticky-search');
    if (!nav) return;

    document.documentElement.style.setProperty('--nav-height', nav.offsetHeight + 'px');

    if (searchWrap) {
        document.documentElement.style.setProperty('--search-height', searchWrap.offsetHeight + 'px');
    }
}

window.addEventListener('load', updateStickyOffsets);       // ← оставить
window.addEventListener('resize', updateStickyOffsets);     // ← оставить

// Реакция на изменение размеров самих sticky-элементов
if (window.ResizeObserver) {
    const ro = new ResizeObserver(updateStickyOffsets);
    const nav = document.querySelector('nav');
    const searchWrap = document.querySelector('.sticky-search');
    if (nav) ro.observe(nav);
    if (searchWrap) ro.observe(searchWrap);
}

// Надёжный пересчёт: ждём, пока высоты перестанут меняться
(function settleStickyOffsets() {
    let lastNav = -1;
    let lastSearch = -1;
    let stableFrames = 0;
    const startTime = Date.now();

    function tick() {
        const nav = document.querySelector('nav');
        const searchWrap = document.querySelector('.sticky-search');
        const navH = nav ? nav.offsetHeight : 0;
        const searchH = searchWrap ? searchWrap.offsetHeight : 0;

        if (navH === lastNav && searchH === lastSearch) {
            stableFrames++;
        } else {
            stableFrames = 0;
            lastNav = navH;
            lastSearch = searchH;
            updateStickyOffsets();
        }

        if (stableFrames < 10 && Date.now() - startTime < 3000) {
            requestAnimationFrame(tick);
        }
    }

    requestAnimationFrame(tick);
})();