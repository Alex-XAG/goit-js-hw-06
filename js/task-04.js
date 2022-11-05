// Счетчик состоит из спана и кнопок, которые, при клике, должны увеличивать и уменьшать его
//  значение на единицу.

// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>

// Создай переменную counterValue в которой будет храниться текущее значение счетчика
// и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай
// значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.
// const buttons = document.querySelectorAll("#counter button");
// const btnDecrement = buttons[0].dataset;
// const btnIncrement = buttons[1].dataset.action;

class Counter {
  constructor(selector, initialValue) {
    this.wrapper = document.querySelector(selector);
    this.initialValue = initialValue;
    this.addListeners();
  }

  addListeners = () => {
    this.wrapper
      .querySelector('[data-action="decrement"]')
      .addEventListener("click", this.handleDecrement);
    this.wrapper
      .querySelector('[data-action="increment"]')
      .addEventListener("click", this.handleIncrement);
  };
  handleDecrement = () => {
    this.initialValue -= 1;
    this.wrapper.querySelector("#value").textContent = this.initialValue;
  };
  handleIncrement = () => {
    this.initialValue += 1;
    this.wrapper.querySelector("#value").textContent = this.initialValue;
  };
}

new Counter("#counter", 0);
