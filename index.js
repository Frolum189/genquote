quotes = [
    "Единственный способ делать великие дела — это любить то, что ты делаешь. – Стив Джобс",
    "В середине каждой трудности кроется возможность. – Альберт Эйнштейн",
    "Поверь, что сможешь, и ты уже на полпути к цели. – Теодор Рузвельт",
    "Успех — это не конечная точка, неудача — не конец света: важно мужество продолжать. – Уинстон Черчилль",
    "Лучшее время посадить дерево было 20 лет назад. Следующее лучшее время — сейчас. – Китайская пословица",
    "Вы никогда не слишком стары, чтобы поставить новую цель или мечтать о новой мечте. – Клайв Стейплз Льюис",
    "Будущее принадлежит тем, кто верит в красоту своей мечты. – Элеонора Рузвельт"
]
let number = 0
let par = document.getElementById('quoteDisplay');
updateQuote()

function updateQuote(){
    par.textContent = quotes[number];
}
function nextQuote(){
    number = Math.floor(Math.random() * quotes.length);
    console.log(number);
    par.textContent = quotes[number];
}

function addQuote(){
    let newQuote = document.getElementById('newQuote').value.trim();
    if (newQuote === "") {
        alert('Поле для ввода пустое!')
        return
    }
    quotes.push(newQuote);
    number = quotes.length - 1
    updateQuote()
    document.getElementById('newQuote').value = ''
    console.log(newQuote, number, quotes);
}

function clearQuotes(){
    quotes.splice(0, quotes.length);
    number = 0;
    updateQuote()
    console.log(quotes, number);
}