"use client";
import {Check} from "@gravity-ui/icons";
import {Button, Description, FieldError, Form, Input, Label, TextField} from "@heroui/react";
import Link from "next/link";



const page = () => {

  const handelRegistation = ()=>{
    
  }
  return (
    <Form onSubmit={handelRegistation}
          className="flex w-90 flex-col gap-4 "
          render={(props) => <form {...props} data-custom="foo" />}
          
        >

            <TextField
            isRequired
            name="name"
            type="text"
            
          >
            <Label>Name</Label>
            <Input placeholder="Enter your name" />
            <FieldError />
          </TextField>


          <TextField
            isRequired
            name="email"
            type="email"
            validate={(value) => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return "Please enter a valid email address";
              }
              return null;
            }}
          >
            <Label>Email</Label>
            <Input placeholder="john@example.com" />
            <FieldError />
          </TextField>

 <TextField
            isRequired
            name="name"
            type="text"
            
          >
            <Label>Photo-url(link)</Label>
            <Input placeholder="Enter Your Photo" />
            <FieldError />
          </TextField>


          <TextField
            isRequired
            minLength={8}
            name="password"
            type="password"
            validate={(value) => {
              if (value.length < 8) {
                return "Password must be at least 8 characters";
              }
              if (!/[A-Z]/.test(value)) {
                return "Password must contain at least one uppercase letter";
              }
              if (!/[0-9]/.test(value)) {
                return "Password must contain at least one number";
              }
              return null;
            }}
          >
            <Label>Password</Label>
            <Input placeholder="Enter your password" />
            <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
            <FieldError />
          </TextField>
          <div className="flex gap-2 justify-center">
            <Button type="submit" className={'w-full'}>
              Registation
            </Button>
            
          </div>
        </Form>
  )
}

export default page