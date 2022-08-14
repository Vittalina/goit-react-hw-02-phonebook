import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { nanoid } from 'nanoid';
// import {} from 'components/Phonebook/Phonebook.styled';

const schema = yup.object().shape({
  name: yup.string().required(),
  number: yup.number().min(6).required(),
});

const id = nanoid();

const initialValues = { name: '', number: '' };

const Phonebook = () => {
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <Form>
        <label htmlFor="Name">
          Name
          <Field
            type="text"
            name="name"
            id={id}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <ErrorMessage name="name" component="div" />
        </label>
        <label htmlFor="Number">
          Number
          <Field
            type="tel"
            name="number"
            id={id}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <ErrorMessage name="number" component="div" />
        </label>
        <button type="submit">Add contacts</button>
      </Form>
    </Formik>
  );
};

export default Phonebook;
