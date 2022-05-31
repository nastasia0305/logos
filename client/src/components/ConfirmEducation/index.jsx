import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { updateUser, validateLawyer } from "../../redux/thunk/asyncUsers";
import axios from "axios";

function ConfirmEducation() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [imageURL, setImageUrl] = useState(null);
  const [imageURL2, setImageUrl2] = useState(null);
  const [imageURL3, setImageUrl3] = useState(null);

  const handleImageUpload = (event, setImg) => {
    console.log(event.target.files[0]);
    const imageData = new FormData();
    imageData.set("key", "ca5482cb4e564b594544191602467167");
    imageData.append("image", event.target.files[0]);

    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        setImg(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const update = (event) => {
    event.preventDefault();

    const { target } = event;

    const cases = [];
    for (const { value, checked } of target.case) {
      if (checked) {
        cases.push(value);
      }
    }
    const services = [];
    for (const { value, checked } of target.service) {
      if (checked) {
        services.push(value);
      }
    }

    console.log(imageURL);
    const data = {
      help: target.help.value,
      cases,
      service: services,
      education: target.education.value,
      experience: target.experience.value,
      diploma: imageURL,
      certificate: imageURL2,
      employeBook: imageURL3,
    };
    dispatch(validateLawyer(data));
    navigate("/profile");
  };

  return (
    <div className="dialog">
      <div className="dialog__bar">Подтверждение образования</div>
      <form onSubmit={update} className="form">
        <div className="row">
          <label htmlFor="help" className="label">
            Тип контракта
          </label>
          <select name="help" defaultValue="one" className="select">
            <option value="onetime">Разовый контракт</option>
            <option value="regular">Регулярный контракт</option>
          </select>
        </div>
        <div className="row">
          <label htmlFor="case" className="label">
            Характер дел
          </label>
          <input type="checkbox" name="case" value="criminal" />
          Уголовное
          <input type="checkbox" name="case" value="arbitration" />
          Арбитражное
          <input type="checkbox" name="case" value="tax" />
          Налоговое
        </div>
        <div className="row">
          <label htmlFor="service" className="label">
            Тип услуг
          </label>
          <input type="checkbox" name="service" value="statement" />
          Подача заявления
          <input type="checkbox" name="service" value="court" />
          Поход в суд
          <input type="checkbox" name="service" value="consultation" />
          Консультация
        </div>
        <div className="row">
          <label htmlFor="education" className="label">
            Образование
          </label>
          <input
            type="text"
            className="input"
            name="education"
            placeholder="Образование"
          />
        </div>
        <div className="row">
          <label htmlFor="experience" className="label">
            Опыт работы (лет)
          </label>
          <input
            type="number"
            className="input"
            name="experience"
            placeholder="Опыт работы"
          />
        </div>
        <div className="row">
          <label htmlFor="diploma" className="label">
            Диплом
          </label>
          <input
            id="img"
            onChange={(e) => handleImageUpload(e, setImageUrl)}
            type="file"
            className="input"
            name="diploma"
          />
        </div>
        <div className="row">
          <label htmlFor="certificate" className="label">
            Сертификат
          </label>
          <input
            id="img2"
            onChange={(e) => handleImageUpload(e, setImageUrl2)}
            type="file"
            className="input"
            name="certificate"
          />
        </div>
        <div className="row">
          <label htmlFor="employeBook" className="label">
            Трудовая книжка
          </label>
          <input
            id="img3"
            onChange={(e) => handleImageUpload(e, setImageUrl3)}
            type="file"
            className="input"
            name="employeBook"
          />
        </div>
        <button type="submit" className="button shadow">
          Отправить на рассмотрение
        </button>
      </form>
      <p>Image Url 1: {imageURL}</p>
      <p>Image Url 2: {imageURL2}</p>
      <p>Image Url 3: {imageURL3}</p>
    </div>
  );
}

export default ConfirmEducation;
