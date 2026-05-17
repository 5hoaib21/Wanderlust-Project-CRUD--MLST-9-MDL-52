"use client";
import { Icon } from "@iconify/react";
import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  Separator,
  TextField,
} from "@heroui/react";
import { Card } from "@heroui/react";
import { redirect } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";

const SignUpPage = () => {
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());

    const { data, error } = await authClient.signUp.email({
      email: user.email,
      name: user.name,
      password: user.password,
      image: user.image,
    });
    // console.log({data, error});
    if (data) {
      toast.success("welcome Home");
      redirect("/");
    } else {
      toast.error(error.message);
    }
  };


  const handleGoogleSignIn = async () => {
 await authClient.signIn.social({
      provider: "google",
    })
  }




  return (
    <div className="flex justify-center my-30">
      <Card>
        <h1 className="text-2xl font-bold text-center my-2">Create Account</h1>
        <Form onSubmit={onSubmit} className="flex w-96 flex-col gap-4">
          <TextField isRequired name="name" type="text">
            <Label>Name</Label>
            <Input placeholder="Name" />
            <FieldError />
          </TextField>
          <TextField name="image" type="url">
            <Label>Image Url</Label>
            <Input placeholder="Image Url" />
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
            <Description>
              Must be at least 8 characters with 1 uppercase and 1 number
            </Description>
            <FieldError />
          </TextField>
          <div className="flex justify-center gap-2">
            <Button className={"w-full"} type="submit">
              Create Account
            </Button>
          </div>
        </Form>
        <div className="flex justify-center items-center gap-3">
          <Separator />
          <div className="whitespace-nowrap"> Or sign up with</div>
          <Separator />
        </div>
        <div>
          <Button onClick={handleGoogleSignIn} className="w-full" variant="tertiary">
            <Icon icon="devicon:google" />
            Sign in with Google
          </Button>
        </div>
      </Card>
      <Toaster />
    </div>
  );
};

export default SignUpPage;
