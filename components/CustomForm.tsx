"use client"
import React from 'react'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import {

    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
import { Input } from './ui/input'
import { Control } from 'react-hook-form'
import { FormFieldType } from './forms/PatientForm'
import Image from 'next/image'

interface  CustomProp{
  control: Control<any>
  fieldType: FormFieldType,
  name: string
  label?: string
  placeholder?: string
  iconSrc?:string
  iconAlt?: string
  disabled?:boolean
  dateFormat?:string
  showTimeSelect?:boolean
  children?: React.ReactNode
  renderSkeleton?:(field: any) => React.ReactNode
}

  const RenderField = ({field, props}: {field: any, props: CustomProp}) => {
    switch(props.fieldType){
      case FormFieldType.INPUT:
        return(
          <div className='flex rounded-md border border-dark-500 bg-dark-600'>
            {props.iconSrc && (
              <Image 
              src={props.iconSrc}
              width={24}
              height={24}
              alt={props.iconAlt || 'icon'}
              className='ml-2'
              />
            )}

            <FormControl>
              <Input
              placeholder={props.placeholder}
              {...field}
              className='shad-input border-0'
              />
            </FormControl>
          </div>
        )
        case FormFieldType.PHONE_INPUT:
          return(
            <div className='flex rounded-md border border-dark-500 bg-dark-600'>
  
              <FormControl>
               <PhoneInput
                defaultCountry='RW'
                placeholder={props.placeholder}
                international
                withCountryCollingCode
                value={field.value}
                className='input-phone border-0 flex-1'
                onChange={field.onChange}
               />
              </FormControl>
            </div>
          )
        default: 
        break;
    }
  }

const CustomForm =(props: CustomProp) => {
  const {control, label, name, fieldType} = props
    return(
        <FormField
        control={control}
        name={name}
        render={({ field }) => (
          <FormItem className='flex-1 flex flex-col'>
            {fieldType !== FormFieldType.CHECKBOX && label &&(
              <FormLabel>{label}</FormLabel>
            )}
            <RenderField
            field={field}
            props ={props}
            />
            <FormMessage className=' shad-error'/>
          </FormItem>

        )}
      />
    )
}

export default CustomForm
