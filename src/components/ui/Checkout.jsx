import React from 'react';

export default function Checkout() {
  return (
    <div className="col-md-7 col-lg-8">
      <h4 className="mb-3">Платежный адрес</h4>
      <form className="needs-validation" novalidate>
        <div className="row g-3">
          <div className="col-sm-6">
            <label for="firstName" className="form-label">
              Имя
            </label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              placeholder=""
              //   value=""
              required
            />
            <div className="invalid-feedback">Введите имя.</div>
          </div>

          <div className="col-sm-6">
            <label for="lastName" className="form-label">
              Фамилия
            </label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              placeholder=""
              //   value=""
              required
            />
            <div className="invalid-feedback">Введите фамилию правильно.</div>
          </div>

          <div className="col-12">
            <label for="username" className="form-label">
              Имя пользователя
            </label>
            <div className="input-group has-validation">
              <span className="input-group-text">@</span>
              <input
                type="text"
                className="form-control"
                id="username"
                placeholder="Имя пользователя"
                required
              />
              <div className="invalid-feedback">Введите имя пользователя.</div>
            </div>
          </div>

          <div className="col-12">
            <label for="email" className="form-label">
              Email <span className="text-body-secondary">(Опционально)</span>
            </label>
            <input type="email" className="form-control" id="email" placeholder="вы@ya.ru" />
            <div className="invalid-feedback">Введите верный адрес электронной почты.</div>
          </div>

          <div className="col-12">
            <label for="address" className="form-label">
              Адрес
            </label>
            <input
              type="text"
              className="form-control"
              id="address"
              placeholder="г. Москва, ул. Орджоникидзе 11с10"
              required
            />
            <div className="invalid-feedback">Необходимо ввессти адрес доставки</div>
          </div>

          <div className="col-12">
            <label for="address2" className="form-label">
              Дополнительный адрес <span className="text-body-secondary">(Опционально)</span>
            </label>
            <input type="text" className="form-control" id="address2" placeholder="" />
          </div>

          <div className="col-md-4">
            <label for="state" className="form-label">
              Город
            </label>
            <select className="form-select" id="state" required>
              <option value="">Выбрать...</option>
              <option>Москва</option>
              <option>Санкт-Петербург</option>
            </select>
            <div className="invalid-feedback">Укажите город.</div>
          </div>
        </div>

        <hr className="my-4" />

        <div className="form-check">
          <input type="checkbox" className="form-check-input" id="same-address" />
          <label className="form-check-label" for="same-address">
            Адрес доставки совпадает с адресом проживания
          </label>
        </div>

        <div className="form-check">
          <input type="checkbox" className="form-check-input" id="save-info" />
          <label className="form-check-label" for="save-info">
            Сохоанить данные для следующих заказов
          </label>
        </div>

        <hr className="my-4" />

        <h4 className="mb-3">Оплата</h4>

        <div className="my-3">
          <div className="form-check">
            <input
              id="debit"
              name="paymentMethod"
              type="radio"
              className="form-check-input"
              required
            />
            <label className="form-check-label" for="debit">
              Банкоская карта
            </label>
          </div>
          <div className="form-check">
            <input
              id="paypal"
              name="paymentMethod"
              type="radio"
              className="form-check-input"
              required
            />
            <label className="form-check-label" for="paypal">
              СБП
            </label>
          </div>
        </div>

        <div className="row gy-3">
          <div className="col-md-6">
            <label for="cc-name" className="form-label">
              Имя карты
            </label>
            <input type="text" className="form-control" id="cc-name" placeholder="" required />
            <small className="text-body-secondary">Полное имя указанное на карте</small>
            <div className="invalid-feedback">Укажите имя карты</div>
          </div>

          <div className="col-md-6">
            <label for="cc-number" className="form-label">
              Номер карты
            </label>
            <input type="text" className="form-control" id="cc-number" placeholder="" required />
            <div className="invalid-feedback">Укажите номер карты</div>
          </div>

          <div className="col-md-3">
            <label for="cc-expiration" className="form-label">
              Срок дейсвия
            </label>
            <input
              type="text"
              className="form-control"
              id="cc-expiration"
              placeholder=""
              required
            />
            <div className="invalid-feedback">Укажите срок действия</div>
          </div>

          <div className="col-md-3">
            <label for="cc-cvv" className="form-label">
              CVV
            </label>
            <input type="text" className="form-control" id="cc-cvv" placeholder="" required />
            <div className="invalid-feedback">Укажите CVV код</div>
          </div>
        </div>

        <hr className="my-4" />

        <button className="w-100 btn btn-primary btn-lg" type="submit">
          Оформить заказ
        </button>
      </form>
    </div>
  );
}
