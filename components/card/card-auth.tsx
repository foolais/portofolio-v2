"use client";

import { CodeXml, LockIcon, Mail } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AuthSchema, AuthSchemaType } from "@/lib/schema";
import { Field, FieldError, FieldGroup, FieldLabel } from "../ui/field";
import { Input } from "../ui/input";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "../ui/input-otp";
import { REGEXP_ONLY_DIGITS } from "input-otp";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useState } from "react";

const CardAuth = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<AuthSchemaType>({
    resolver: zodResolver(AuthSchema),
    defaultValues: {
      email: "",
      password: "",
      pin: "",
    },
  });

  const onSubmit = async (values: AuthSchemaType) => {
    try {
      setIsLoading(true);
      const { email, password, pin } = values;
      const res = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password, pin }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message || "Something went wrong");
      }
      setIsLoading(false);
      toast.success("Login successfully");
      router.push("/foolaisx/profile");
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      toast.error(err.message);
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-100">
      <CardHeader>
        <Button size="icon" className="size-12 mx-auto">
          <CodeXml className="size-6" />
        </Button>
        <CardTitle className="text-center text-3xl font-semibold my-4">
          Admin Login
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form id="auth-form" onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup className="space-y-4 gap-2">
            <Controller
              name="email"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid} className="mb-4">
                  <FieldLabel htmlFor={field.name}>Email</FieldLabel>
                  <div className="relative">
                    <Input
                      {...field}
                      placeholder="mail@example.com"
                      aria-invalid={fieldState.invalid}
                      autoComplete="off"
                      className="pl-10"
                      disabled={isLoading}
                    />
                    <Mail className="size-5 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                  </div>
                  {fieldState.error && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name="password"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid} className="mb-4">
                  <FieldLabel htmlFor={field.name}>Password</FieldLabel>
                  <div className="relative">
                    <Input
                      {...field}
                      placeholder="********"
                      aria-invalid={fieldState.invalid}
                      autoComplete="off"
                      type="password"
                      className="pl-10"
                      disabled={isLoading}
                    />
                    <LockIcon className="size-5 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                  </div>
                  {fieldState.error && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name="pin"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid} className="mb-4">
                  <FieldLabel htmlFor={field.name}>PIN</FieldLabel>
                  <InputOTP
                    maxLength={6}
                    {...field}
                    pattern={REGEXP_ONLY_DIGITS}
                    className="w-full"
                    disabled={isLoading}
                  >
                    <InputOTPGroup className="w-full">
                      {[...Array(6)].map((_, i) => (
                        <InputOTPSlot
                          key={i}
                          index={i}
                          className="flex-1 rounded-lg"
                        />
                      ))}
                    </InputOTPGroup>
                  </InputOTP>
                  {fieldState.error && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </FieldGroup>
        </form>
      </CardContent>
      <CardFooter>
        <Field>
          <Button
            type="submit"
            form="auth-form"
            className="w-full"
            disabled={isLoading}
          >
            {isLoading ? "Logging in..." : "Login"}
          </Button>
        </Field>
      </CardFooter>
    </Card>
  );
};

export default CardAuth;
