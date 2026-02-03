"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLanguage } from "@/lib/language-provider";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";


const contactSchema = z.object({
  name: z
    .string()
    .min(3, "Enter your full name")
    .refine((val) => val.trim().split(/\s+/).length >= 2, {
      message: "Please enter first and last name",
    }),

  email: z.email("Enter a valid email address"),

  message: z.string().refine((val) => val.trim().split(/\s+/).length >= 10, {
    message: "Message must be at least 10 words long",
  }),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const { t } = useLanguage();
  const { contact } = t;

  const [loading, setLoading] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

 async function onSubmit(values: ContactFormValues) {
  setLoading(true);

  try {
    const res = await fetch("/api/contact-us", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.error || "Failed to send message");
    }

    toast.success(contact.successTitle, {
      description: contact.successDescription,
    });

    form.reset();
  } catch (err) {
    if (err instanceof Error) {
      toast.error(contact.errorTitle, {
        description: err.message,
      });
    } else {
      toast.error("Something went wrong", {
        description: contact.genericError,
      });
    }
  } finally {
    setLoading(false);
  }
}


  return (
    <main className="bg-white">
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* LEFT */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900"> {contact.heroTitle}</h2>
            <p className="mt-6 text-lg text-gray-600 max-w-xl">
             {contact.heroDescription}
            </p>

            <div className="mt-10 space-y-6">
              <div>
                <p className="text-sm text-gray-500">{contact.emailLabel}</p>
                <p className="text-lg text-gray-900">
                  📩 info@aamjantapartyindia.in
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500">{contact.addressLabel}</p>
                <p className="text-lg text-gray-900 leading-relaxed">
                  📍 Aam Janta Party India <br />
                  Sector 44, Gurugram <br />
                  Haryana – 122003
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT – FORM */}
          <div className="bg-gray-50 rounded-2xl p-8 shadow-sm">
            <h3 className="text-2xl font-semibold text-gray-900">
              {contact.formTitle}
            </h3>
            <p className="text-xs text-gray-400 mt-2">
               {contact.formHint}
            </p>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="mt-8 space-y-6"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{contact.nameLabel}</FormLabel>
                      <FormControl>
                        <Input
                          placeholder={contact.nameLabel}
                          className="border-gray-300 focus:border-orange-400 focus-visible:ring-0 focus-visible:ring-offset-0"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{contact.emailFieldLabel}</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder={contact.emailFieldLabel}
                           className="border-gray-300 focus:border-orange-400 focus-visible:ring-0 focus-visible:ring-offset-0"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{contact.messagePlaceholder}</FormLabel>
                      <FormControl>
                        <Textarea
                          rows={6}
                          placeholder={contact.messagePlaceholder}
                           className=" min-h-40 resize-y border-gray-300 focus:border-orange-400 focus-visible:ring-0 focus-visible:ring-offset-0"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {form.formState.errors.root && (
                  <p className="text-sm font-medium text-red-600">
                    {form.formState.errors.root.message}
                  </p>
                )}
                <Button
                  type="submit"
                  disabled={loading || !form.formState.isValid}
                  className="w-full bg-orange-500 hover:bg-orange-600 disabled:opacity-50 cursor-pointer"
                >
                 {loading ? contact.submitLoading : contact.submitIdle}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </section>
    </main>
  );
}
