import { useFormik } from "formik";

interface People {
  name: string;
  birthData: string;
  email: string;
  phone: string;
  password: string;
  summary: string;
}

export const Register = () => {

  const formik = useFormik<People>({
    initialValues: {
      name: "",
      birthData: "",
      email: "",
      phone: "",
      password: "",
      summary: ""
    },
    onSubmit: values => {
      console.log(values)
    }
  })

  return (
    <>
      <form onSubmit={formik.handleSubmit}>

        <label htmlFor="name">NOME</label>
        <input
          id="name"
          name="name"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
         <label htmlFor="birthData">DATA DE NASCIMENTO</label>
        <input
          id="birthData"
          name="birthData"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.birthData}
        />
         <label htmlFor="email">EMAIL</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
         <label htmlFor="phone">TELEFONE</label>
        <input
          id="phone"
          name="phone"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.phone}
        />
        <button type="submit">ENVIAR</button>

      </form>
    </>
  );

};