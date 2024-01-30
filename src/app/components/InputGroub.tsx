import { RegisterBodyRequest } from '@/entities/auth.entities';
import AuthUseCase from '@/use-case/auth.usecase';
import { ChangeEvent, useState } from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function FormInputRegister() {
    const [form, setForm] = useState<RegisterBodyRequest>({
        fullname : "",
        email : "",
        password: "",
        phone : ""
    })
    const {register} = AuthUseCase();

    const onChange = (e:ChangeEvent<HTMLInputElement>)=>{
        setForm({
            ...form,
            [e.target.name] : e.target.value
        })
    }


    const handleSubmit = async ()=>{
       await register(form);
    }

  return (
    <>
     
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">Full Name</InputGroup.Text>
        <Form.Control
        name="fullname"
            onChange={onChange}
          placeholder="Masukan FullName"
          aria-label="Email"
          aria-describedby="basic-addon1"
          type="text"
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">Email</InputGroup.Text>
        <Form.Control
        name="email"
            onChange={onChange}
          placeholder="Masukan Email"
          aria-label="Email"
          aria-describedby="basic-addon1"
          type="email"
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">Password</InputGroup.Text>
        <Form.Control
            name="password"
            onChange={onChange}
          placeholder="Masukan Password"
          aria-label="Password"
          aria-describedby="basic-addon1"
          type="password"
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">Phone</InputGroup.Text>
        <Form.Control
            name="phone"
            onChange={onChange}
          placeholder="Masukan Phone"
          aria-label="Password"
          aria-describedby="basic-addon1"
          type="password"
        />
      </InputGroup>
      <div className='mt-5'>
        <Button onClick={handleSubmit}>Submit</Button>
      </div>
    </>
  );
}

export default FormInputRegister;