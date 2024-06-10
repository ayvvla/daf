"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { states } from "@/lib/states";
// import {input} from "@/components/ui/input"
import { registerTeamSchema, registerTeamValues } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import React from "react";
import { useForm } from "react-hook-form";

export default function Register() {
  const form = useForm<registerTeamValues>({
    resolver: zodResolver(registerTeamSchema),
  });

  const {
    handleSubmit,
    control,
    setValue,
    setFocus,
    watch,
    trigger,
    formState: { isSubmitting },
  } = form;

  async function onSubmit(values: registerTeamValues) {
    alert(JSON.stringify(values, null , 1 ));
  }

  return (
    <section className="mx-auto my-10 max-w-3xl space-y-10">
      <div className="space-y-1 text-center">
        <h1 className="text-2xl font-bold">Register your team</h1>
        <p className="text-sm text-muted-foreground">
          <span>Your Adventure Awaits</span> - Sign Up Your Team Today
        </p>
      </div>
      <div className="space-y-12 rounded-lg border p-4">
        <div>
          <h2 className="font-semibold">Club details</h2>
          <p className="text-muted-foreground">Provide club details</p>
        </div>
        <Form {...form}>
          <form
            className="space-y-6"
            noValidate
            onSubmit={handleSubmit(onSubmit)}
          >
            <FormField
              control={control}
              name="logo"
              render={({ field: { value, ...fieldValues } }) => (
                <FormItem>
                  <FormLabel>Logo</FormLabel>
                  <FormControl>
                    <Input
                      {...fieldValues}
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        fieldValues.onChange(file);
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Club Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Ajilete FC" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="example@email.com" type="email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={control}
              name="state"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>State</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a state" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {states.map((state) => (
                        <SelectItem value={state} key={state}>
                          {state}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Club Address</FormLabel>
                  <FormControl>
                    <Input placeholder="Address of club" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" disabled={isSubmitting}>
              <span className="flex items-center justify-center gap-1">
                {isSubmitting && <Loader2 size={16} className="animate-spin" />}
                Submit
              </span>
            </Button>

          </form>
        </Form>
      </div>
    </section>
  );
}
