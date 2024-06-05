import { useId } from "react";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import scss from "./form.module.scss";
import { SvgIcon } from "../../../utils/helpers/SvgIcon";
import { useRef } from "react";

const INITIAL_STATE = {
  name: "",
  email: "",
  date: null,
  comment: "",
};

const ContactForm = () => {
  const [state, setState] = useState(INITIAL_STATE);
  const formRef = useRef(null);
  const datePickerRef = useRef(null);
  const handleInput = ({ target }) => {
    const { value, name } = target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const handleDateChange = (date) => {
    if (date.getTime() < new Date().getTime()) {
      console.log("Невірна дата. Виберіть дату, яка вже настала.");
    } else {
      setState({
        ...state,
        date,
      });
    }
  };
  const handleDateIconClick = () => {
    if (datePickerRef.current.input) {
      const inputElement = datePickerRef.current.input;
      if (inputElement) {
        inputElement.focus(); // Відкриваємо календар вручну
        datePickerRef.current.setOpen(true);
      }
    }
  };

  const handleClick = () => {};
  const handleFieldClick = (event) => {
    event.stopPropagation();
  };

  const nameId = useId();
  const emailId = useId();
  const commentId = useId();
  const { name, email, date, comment } = state;

  return (
    <div className={scss.formWrapper}>
      <h2 className={scss.formTitle}>Book your campervan now</h2>
      <p className={scss.formDescription}>
        Stay connected! We are always ready to help you.
      </p>
      <form className={scss.form} onClick={handleFieldClick}>
        <label htmlFor={nameId} className={scss.label}>
          Name
        </label>
        <input
          className={scss.input}
          type="text"
          name="name"
          id={nameId}
          onChange={handleInput}
          value={name}
          placeholder="Name"
          pattern={
            "^[a-zA-Zа-яА-Я]+(([' \\-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          }
          required
        />
        <label htmlFor={emailId} className={scss.label}>
          Email
        </label>
        <input
          className={scss.input}
          type="email"
          name="email"
          id={emailId}
          onChange={handleInput}
          value={email}
          placeholder="Email"
          required
        />
        <label htmlFor="datePicker" className={scss.label}>
          Booking Date
        </label>
        <div className={scss.datePickerWrapper} onClick={handleDateIconClick}>
          <DatePicker
            selected={date}
            onChange={handleDateChange}
            placeholderText="Booking date"
            className={scss.datePickerInput}
            calendarClassName={scss.datePickerCalendar}
            ref={datePickerRef}
            // disabled
            // readOnly
            required
          />
          <SvgIcon
            iconName="icon-calendar"
            width="20"
            height="20"
            className={scss.calendarIcon}
          />
        </div>
        <label htmlFor={commentId} className={scss.label}>
          Comment
        </label>
        <textarea
          className={scss.textarea}
          name="comment"
          id={commentId}
          onChange={handleInput}
          value={comment}
          placeholder="Comment"
        />
        <button
          type="submit"
          className={scss.btn}
          ref={formRef}
          onClick={handleClick}
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
