"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import {
  Form
} from "@/components/ui/form"

import CustomForm from "../CustomForm"
import SubmitButton from "../submitButton"
import { useState } from "react"
import { UserFormValidation } from "@/lib/validate"


export enum FormFieldType {
  INPUT = "input",
  TEXTAREA = 'textarea',
  PHONE_INPUT = 'phoneInput',
  CHECKBOX = "checkbox",
  DATE_PICKER = "datepicker",
  SELECT = 'select',
  SKELETON = 'skeleton'
}


function PatientForm() {
  const [isLoading, setIsLoading] = useState(false)

  const form = useForm<z.infer<typeof UserFormValidation>>({
    resolver: zodResolver(UserFormValidation),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  })

  const onSubmit = async ({ email, name, phone }: z.infer<typeof UserFormValidation>) => {

  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex-1">
        <section className="mb-8 space-y-4">
          <h1 className="header">Hi there 👋</h1>
          <p className="text-dark-">Schedule your first appointment</p>
        </section>
        <CustomForm
          fieldType={FormFieldType.INPUT}
          control={form.control}
          name="name"
          label="Full name"
          placeholder="john Doe"
          iconSrc="/assets/icons/user.svg"
          iconAlt="user"
        />
        <CustomForm
          fieldType={FormFieldType.INPUT}
          control={form.control}
          name="email"
          label="Email"
          placeholder="bahati@gmail.com"
          iconSrc="/assets/icons/email.svg"
          iconAlt="email"
        />
        <CustomForm
          fieldType={FormFieldType.PHONE_INPUT}
          control={form.control}
          name="phone"
          label="Phone Number"
          placeholder="(250) 795-9242"
          iconAlt="Phone Number"
        />
        <SubmitButton isLoading={isLoading}> Create User</SubmitButton>
      </form>
    </Form>
  )
}

export default PatientForm
