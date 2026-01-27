"use client"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { useForm } from "@tanstack/react-form";
import * as Z from "zod";
import { authClient } from "@/lib/auth-client"
import { toast } from "sonner"
const formSchema = Z.object({

  email: Z.string().min(4, "This is field is required"),
  password: Z.string().min(8, "This is field is required")
})
export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  const form = useForm({
    defaultValues: {
      email: "",
      password: ""
    },
    validators: {
      onSubmit: formSchema
    },
    onSubmit: async ({ value }) => {
      const taostId = await toast.loading("Signin  User..")
      try {
        const { data, error } = await authClient.signIn.email(value);
       
        if (error) {
          toast.error(error.message, { id: taostId })
          return;
        }
        else {
          toast.success("Successfully user Sign in", { id: taostId })

        }
      }

      catch (error) {
        toast.error("Something error", { id: taostId })
      }
      console.log(value)
    },
  })
  const handleGoogleLogin: () => Promise<void> = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
      callbackURL: "http://localhost:3000"
    })
    console.log(data);
  }
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      form.handleSubmit();
    }} className={cn("flex flex-col gap-6", className)} {...props}>
      <div className="flex flex-col items-center gap-1 text-center">
        <h1 className="text-2xl font-bold">Create your account</h1>
        <p className="text-muted-foreground text-sm text-balance">
          Fill in the form below to create your account
        </p>
      </div>
      <FieldGroup>

        <form.Field name="email" children={(field) => {
          const isInvalid =
            field.state.meta.isTouched && !field.state.meta.isValid
          return (

            <Field>
              <FieldLabel htmlFor={field.name}>Your Email</FieldLabel>
              <Input id={field.name} name={field.name} type="text" placeholder="Enter Your email" value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
              />
              {isInvalid && <FieldError className="text-red-500" errors={field.state.meta.errors} />}
            </Field>


          )
        }} />
        <form.Field name="password" children={(field) => {
          const isInvalid =
            field.state.meta.isTouched && !field.state.meta.isValid
          return (

            <Field>
              <FieldLabel htmlFor={field.name}>Password</FieldLabel>
              <Input id={field.name} name={field.name} type="password" placeholder="password" value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
              />
              {isInvalid && <FieldError className="text-red-500" errors={field.state.meta.errors} />}
            </Field>

          )
        }} />




        <Field>
          <Button type="submit">Login</Button>
        </Field>
        <FieldSeparator>Or continue with</FieldSeparator>
        <Field>
          <Button onClick={() => handleGoogleLogin()} variant="outline" type="button">

            Sign up with Google
          </Button>
          <FieldDescription className="px-6 text-center">
            Already have an account? <Link href="/register">Sign in</Link>
          </FieldDescription>
        </Field>
      </FieldGroup>
    </form>
  )
}
