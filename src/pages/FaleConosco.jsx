import Header from "../components/Index/Header";
import Footer from "../components/Index/Footer";

import React, { useState } from 'react';
import styled from 'styled-components';

export default function FaleConosco() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    age: '',
    phone: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Use esses dados conforme necessário

    // Mensagem de sucesso
    alert(`Dados enviado com sucesso! Obrigado, ${formData.fullName}!`);
  };

  return (
    <>
      <Header/>
      <FormContainer>
        <h2>Fale Conosco</h2>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <label htmlFor="fullName">Nome Completo</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <label htmlFor="email">E-mail</label>
            <input
              type="text" // Alterado para tipo "text"
              id="email"
              name="email"
              pattern="[a-zA-Z]+" // Aceita apenas letras
              title="Digite apenas letras" // Mensagem de erro exibida quando o formato não é válido
              value={formData.email}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <label htmlFor="age">Idade</label>
            <input
              type="number"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <label htmlFor="phone">Telefone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              pattern="[0-9]{10,11}" // Restrição de formato de telefone (10 ou 11 dígitos numéricos)
              title="Digite um número de telefone válido" // Mensagem de erro exibida quando o formato não é válido
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <SubmitButton type="submit">Enviar</SubmitButton>
        </Form>
      </FormContainer>
      <Footer/>
    </>
  );
}

const FormContainer = styled.div`
  width: 400px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-top:5%;

  h2 {
    text-align: center;
    margin-bottom: 20px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  label {
    font-weight: bold;
    margin-bottom: 5px;
  }

  input {
    padding: 10px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    outline: none;
    transition: border-color 0.3s ease;

    &:focus {
      border-color: #888;
    }
  }
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;
