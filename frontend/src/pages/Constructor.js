import React, { useState } from 'react';

function Constructor() {
  const [selectedFlowers, setSelectedFlowers] = useState([]);
  const [availableFlowers] = useState([
    { id: 1, name: 'Роза', price: 100 },
    { id: 2, name: 'Тюльпан', price: 50 },
    { id: 3, name: 'Орхидея', price: 150 },
    { id: 4, name: 'Лилия', price: 120 },
  ]);

  const addFlower = (flower) => {
    setSelectedFlowers([...selectedFlowers, flower]);
  };

  const removeFlower = (index) => {
    const newFlowers = selectedFlowers.slice();
    newFlowers.splice(index, 1);
    setSelectedFlowers(newFlowers);
  };

  const totalPrice = selectedFlowers.reduce((total, flower) => total + flower.price, 0);

  return (
    <div>
      <h2>Конструктор букета</h2>
      <div className="available-flowers">
        <h3>Доступные цветы</h3>
        <ul>
          {availableFlowers.map(flower => (
            <li key={flower.id}>
              {flower.name} - {flower.price} руб.
              <button onClick={() => addFlower(flower)}>Добавить</button>
            </li>
          ))}
        </ul>
      </div>

      <div className="selected-flowers">
        <h3>Ваш букет</h3>
        {selectedFlowers.length > 0 ? (
          <ul>
            {selectedFlowers.map((flower, index) => (
              <li key={index}>
                {flower.name} - {flower.price} руб.
                <button onClick={() => removeFlower(index)}>Удалить</button>
              </li>
            ))}
          </ul>
        ) : (
          <p>Ваш букет пока пуст.</p>
        )}
        <p>Общая стоимость: {totalPrice} руб.</p>
      </div>
    </div>
  );
}

export default Constructor;
