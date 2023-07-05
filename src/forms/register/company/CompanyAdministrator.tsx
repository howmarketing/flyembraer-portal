import { useContext, useMemo } from "react"

import { useMutation } from "react-query"

import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"

import * as yup from "yup"

import shallow from "zustand/shallow"

import { postCompany } from "api/company/postCompany"

import Button from "components/Button"
import { Flex } from "components/Flex"
import { Administrator } from "components/Icons/Administrator"
import Select from "components/Select"
import { SelectCountryDdi } from "components/SelectCountryDdi"
import Text from "components/Text"
import TextField from "components/TextField"

import { RegisterCompanyContext } from "contexts/RegisterCompanyContext"

import { useCurrentStepsStore } from "stores/steps"

export const CompanyAdministrator = () => {
  type CompanyAdministratorType = yup.InferType<typeof companyAdministratorSchema>

  const { mutate, isLoading } = useMutation(postCompany, {
    onSuccess() {
      setStep(99)
    }
  })

  const { setStep, previousStep } = useCurrentStepsStore(
    (state) => ({
      setStep: state.setStep,
      previousStep: state.previousStep
    }),
    shallow
  )

  const companyAdministratorSchema = useMemo(
    () =>
      yup.object({
        prefix: yup.string().required("This field is required").max(5, "Maximum character limit cannot exceed 5"),
        firstName: yup
          .string()
          .required("This field is required")
          .min(3, "Minimum character limit must be 3")
          .max(60, "Maximum character limit cannot exceed 60")
          .matches(/^[a-zA-Z]+$/, "Must not contain any number or special characters"),
        middleName: yup
          .string()
          .min(3, "Minimum character limit must be 3")
          .max(60, "Maximum character limit cannot exceed 60")
          .matches(/^[a-zA-Z]+$/, "Must not contain any number or special characters"),
        lastName: yup
          .string()
          .required("This field is required")
          .min(3, "Minimum character limit must be 3")
          .max(60, "Maximum character limit cannot exceed 60")
          .matches(/^[a-zA-Z]+$/, "Must not contain any number or special characters"),
        jobTitle: yup
          .string()
          .required("This field is required")
          .max(50, "Maximum character limit cannot exceed 50")
          .matches(/^[a-zA-Z]+$/, "Must not contain any number or special characters"),
        email: yup
          .string()
          .email("This is not a valid email address")
          .required("This field is required")
          .matches(/[a-zA-Z0-9@_-]+/),
        emailConfirmation: yup
          .string()
          .email("This is not a valid email address")
          .oneOf([yup.ref("email"), null], "Emails must match")
          .required("This field is required")
          .matches(/[a-zA-Z0-9@_-]+/),
        email2: yup
          .string()
          .email("This is not a valid email address")
          .matches(/[a-zA-Z0-9@_-]+/),
        email2Confirmation: yup
          .string()
          .email("This is not a valid email address")
          .oneOf([yup.ref("email2"), null], "Emails must match")
          .matches(/[a-zA-Z0-9@_-]+/),
        phoneDdi: yup
          .string()
          .required("This field is required")
          .max(4, "Maximum character limit cannot exceed 4")
          .matches(/^(\+|[0-9]+)$/, "DDI must contain only numbers and the '+' special character"),
        phone: yup
          .string()
          .required("This field is required")
          .min(8, "Minimum character limit must be 8")
          .max(30, "Maximum character limit cannot exceed 30")
          .matches(/^[0-9]+$/, "Must contain only numbers"),
        phoneExtension: yup.string().max(10, "Maximum character limit cannot exceed 10"),
        phoneDdi2: yup
          .string()
          .max(4, "Maximum character limit cannot exceed 4")
          .matches(/^(\+|[0-9]+)$/, "DDI must contain only numbers and the '+' special character"),
        phone2: yup
          .string()
          .min(8, "Minimum character limit must be 8")
          .max(30, "Maximum character limit cannot exceed 30")
          .matches(/^[0-9]+$/, "Must contain only numbers"),
        phoneExtension2: yup.string().max(10, "Maximum character limit cannot exceed 10")
      }),
    []
  )

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<CompanyAdministratorType>({
    resolver: yupResolver(companyAdministratorSchema),
    mode: "onBlur"
  })

  const { data } = useContext(RegisterCompanyContext)

  function onSubmit(values: CompanyAdministratorType) {
    mutate({
      ...data,
      companyAdministrator: {
        prefix: values.prefix,
        fullName: `${values.firstName} ${values.middleName} ${values.lastName}`,
        jobTitle: values.jobTitle,
        email: values.email,
        emailConfirmation: values.emailConfirmation,
        email2: values.email2,
        phone: `${values.phoneDdi}${values.phone}`,
        phone2: `${values.phoneDdi2}${values.phone2}`,
        phoneExtension: values.phoneExtension,
        phoneExtension2: values.phoneExtension2
      }
    })
  }

  return (
    <Flex css={{ flexDirection: "column", gap: "40px" }} as="form" onSubmit={handleSubmit(onSubmit)}>
      <Text as="p">
        The company administrator will be responsible for setting up the account and user role permissions
      </Text>

      <Flex css={{ flexDirection: "column", gap: "24px" }}>
        <Flex css={{ flexDirection: "row", alignItems: "center", gap: "1rem" }}>
          <Administrator width="32" height="29" />
          <Text as="h2" weight="bold" size="md" color="brand-primary">
            COMPANY ADMINISTRATOR
          </Text>
        </Flex>
        <Select
          id="prefix"
          label="Prefix"
          css={{ width: "25%" }}
          options={[
            { value: "mr", displayValue: "Mr." },
            { value: "ms", displayValue: "Ms." }
          ]}
          {...register("prefix")}
          error={errors.prefix?.message}
          defaultValue={data?.companyAdministrator.prefix}
          disabled={isLoading}
          autoFocus
          required
        />
        <TextField id="firstName" css={{ width: "50%" }} {...register("firstName")} disabled={isLoading} required>
          First Name
        </TextField>
        <TextField
          id="middleName"
          css={{ width: "50%" }}
          {...register("middleName")}
          error={errors.middleName?.message}
          disabled={isLoading}
          required
        >
          Middle Name
        </TextField>
        <TextField
          id="lastName"
          css={{ width: "50%" }}
          {...register("lastName")}
          error={errors.lastName?.message}
          disabled={isLoading}
          required
        >
          Last Name
        </TextField>
        <TextField
          id="jobTitle"
          css={{ width: "50%" }}
          {...register("jobTitle")}
          error={errors.jobTitle?.message}
          defaultValue={data?.companyAdministrator.jobTitle}
          disabled={isLoading}
          required
        >
          Job Title
        </TextField>
        <Flex css={{ gap: "1rem" }}>
          <TextField
            id="email"
            type="email"
            css={{ width: "50%" }}
            {...register("email")}
            error={errors.email?.message}
            defaultValue={data?.companyAdministrator.email}
            disabled={isLoading}
            required
          >
            email address
          </TextField>

          <TextField
            id="emailConfirmation"
            type="email"
            css={{ width: "50%" }}
            {...register("emailConfirmation")}
            error={errors.emailConfirmation?.message}
            defaultValue={data?.companyAdministrator.emailConfirmation}
            disabled={isLoading}
            required
          >
            email confirmation
          </TextField>
        </Flex>
        <Flex css={{ gap: "1rem" }}>
          <TextField
            id="email2"
            type="email"
            css={{ width: "50%" }}
            {...register("email2")}
            defaultValue={data?.companyAdministrator.email2}
            error={errors.email2?.message}
            disabled={isLoading}
          >
            Secondary email address
          </TextField>

          <TextField
            id="email2Confirmation"
            type="email"
            css={{ width: "50%" }}
            {...register("email2Confirmation")}
            error={errors.email2Confirmation?.message}
            disabled={isLoading}
          >
            Secondary email confirmation
          </TextField>
        </Flex>
        <Flex css={{ flexDirection: "row", alignItems: "flex-end", gap: "1rem" }}>
          <SelectCountryDdi
            id={"phoneDdi"}
            label={"Phone"}
            {...register("phoneDdi")}
            error={errors.phone?.message ?? errors.phoneDdi?.message}
            css={{ minWidth: "90px", maxWidth: "90px", "& label, p": { width: "max-content" } }}
            disabled={isLoading}
            required
          />

          <TextField
            id="phone"
            type="tel"
            {...register("phone")}
            defaultValue={data?.companyAdministrator.phone}
            css={{ width: "45%" }}
            disabled={isLoading}
            required
          />

          <TextField
            id="phoneExtension"
            {...register("phoneExtension")}
            error={errors.phoneExtension?.message}
            defaultValue={data?.companyAdministrator.phoneExtension}
            disabled={isLoading}
            css={{ width: "45%" }}
          >
            Extension
          </TextField>
        </Flex>
        <Flex css={{ flexDirection: "row", alignItems: "flex-end", gap: "1rem" }}>
          <SelectCountryDdi
            id={"phoneDdi2"}
            label={"Secondary phone"}
            {...register("phoneDdi2")}
            error={errors.phone2?.message ?? errors.phoneDdi2?.message}
            css={{ width: "90px", "& label, p": { width: "max-content" } }}
            disabled={isLoading}
            required
          />

          <TextField
            id="phone2"
            type="tel"
            {...register("phone2")}
            defaultValue={data?.companyAdministrator.phone2}
            css={{ width: "45%" }}
            disabled={isLoading}
            required
          />

          <TextField
            id="phoneExtension2"
            {...register("phoneExtension2")}
            error={errors.phoneExtension2?.message}
            defaultValue={data?.companyAdministrator.phoneExtension2}
            css={{ width: "45%" }}
            disabled={isLoading}
          >
            Extension
          </TextField>
        </Flex>
      </Flex>
      <Flex
        css={{
          flexDirection: "row",
          justifyContent: "space-between",
          gap: "8px"
        }}
      >
        <Button variant="secondary" onClick={previousStep} disabled={isLoading}>
          BACK
        </Button>

        <Button type="submit" disabled={isLoading} isLoading={isLoading}>
          FINISH
        </Button>
      </Flex>
    </Flex>
  )
}
