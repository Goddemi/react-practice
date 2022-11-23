import React, { useState } from "react";

export default function AppForm() {
  const [form, setForm] = useState({ id: "", pw: "" });

  const handleSumbit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  const handleForm = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <form onSubmit={handleSumbit}>
      <input name="id" value={form.id} onChange={handleForm}></input>
      <input name="pw" value={form.pw} onChange={handleForm}></input>
      <button>버튼</button>
    </form>
  );
}

// const [form, setFrom] = useState({ name: '', email: '' });
// const handleSubmit = (e) => {
//   e.preventDefault();
//   console.log(form);
// };
// const handleChange = (e) => {
//   const { name, value } = e.target;
//   setFrom({ ...form, [name]: value });
// };
// return (
//   <form onSubmit={handleSubmit}>
//     <label htmlFor='name'>이름:</label>
//     <input
//       type='text'
//       id='name'
//       name='name'
//       value={form.name}
//       onChange={handleChange}
//     />
//     <label htmlFor='email'>이메일:</label>
//     <input
//       type='email'
//       id='email'
//       name='email'
//       value={form.email}
//       onChange={handleChange}
//     />
//     <button>Submit</button>
//   </form>
// );
