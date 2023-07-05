import { useRouter } from "next/router"

import { MouseEvent, useContext, useMemo } from "react"

import { useMutation } from "react-query"

import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"

import * as yup from "yup"

import shallow from "zustand/shallow"

import { postUser, PostUserProps } from "api/user/postUser"

import Button from "components/Button"
import { Flex } from "components/Flex"
import { AngleRight } from "components/Icons/AngleRight"
import Select from "components/Select"
import { SelectCountryDdi } from "components/SelectCountryDdi"
import Text from "components/Text"
import TextField from "components/TextField"

import { RegisterUserContext } from "contexts/RegisterUserContext"

import { useCurrentStepsStore } from "stores/steps"
import { MediaMatch } from "components/MediaMatch"

export const PersonalData = () => {
  type PersonalDataType = yup.InferType<typeof personalDataSchema>

  const router = useRouter()
  const { ctx } = router.query

  const { data } = useContext(RegisterUserContext)

  const { mutate, isLoading } = useMutation((postUserProps: PostUserProps) => postUser(postUserProps), {
    onSuccess() {
      setStep(99)
    }
  })

  const personalDataSchema = useMemo(
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
          .oneOf([yup.ref("emailConfirmation"), null], "Emails must match")
          .required("This field is required")
          .max(50, "Maximum character limit cannot exceed 50"),
        emailConfirmation: yup
          .string()
          .email("This is not a valid email address")
          .oneOf([yup.ref("email"), null], "Emails must match")
          .required("This field is required")
          .max(50, "Maximum character limit cannot exceed 50"),
        email2: yup
          .string()
          .email("This is not a valid email address")
          .oneOf([yup.ref("email2Confirmation"), null], "Emails must match")
          .max(50, "Maximum character limit cannot exceed 50")
          .required(),
        email2Confirmation: yup
          .string()
          .email("This is not a valid email address")
          .oneOf([yup.ref("email2"), null], "Emails must match")
          .max(50, "Maximum character limit cannot exceed 50")
          .required(),
        ddi: yup
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
        ddi2: yup
          .string()
          .max(4, "Maximum character limit cannot exceed 4")
          .matches(/^(\+|[0-9]+)$/, "DDI must contain only numbers and the '+' special character"),
        phone2: yup
          .string()
          .min(8, "Minimum character limit must be 8")
          .max(30, "Maximum character limit cannot exceed 30")
          .matches(/^[0-9]+$/, "Must contain only numbers")
      }),
    []
  )

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<PersonalDataType>({ resolver: yupResolver(personalDataSchema) })

  const { setStep, previousStep } = useCurrentStepsStore(
    (state) => ({
      setStep: state.setStep,
      previousStep: state.previousStep
    }),
    shallow
  )

  function handleBack(e: MouseEvent) {
    if (ctx === "executive") {
      router.push("/register")
    }
    previousStep()
    e.preventDefault()
  }

  const onSubmit = (values: PersonalDataType) => {
    mutate({
      ...data,
      prefix: values.prefix,
      fullName: `${values.firstName} ${values.middleName} ${values.lastName}`,
      jobTitle: values.jobTitle,
      email: values.email,
      emailConfirmation: values.emailConfirmation,
      email2: values.email2,
      phone: `${values.ddi}${values.phone}`,
      phone2: `${values.ddi2}${values.phone2}` ?? undefined
    })
  }

  return (
    <Flex as="form" onSubmit={handleSubmit(onSubmit)} css={{ flexDirection: "column", gap: "40px" }}>
      <Text as="p">
        Fill the form with your personal data. Please, carefully check your E-mail address since status notification,
        username and password will be sent by E-mail.
      </Text>

      <Flex css={{ flexDirection: "column", gap: "24px" }}>
        <Text as="h2" weight="bold" size="md" color="brand-primary">
          PERSONAL DATA
        </Text>

        <Select
          id="prefix"
          css={{ width: "25%" }}
          {...register("prefix")}
          defaultValue={data?.prefix}
          error={errors.prefix?.message}
          options={[
            { value: "mr", displayValue: "Mr." },
            { value: "ms", displayValue: "Ms." }
          ]}
          label="Prefix"
          autoFocus
          disabled={isLoading}
          required
        />

        <TextField
          id="firstName"
          css={{ width: "50%" }}
          {...register("firstName")}
          error={errors.firstName?.message}
          disabled={isLoading}
          required
        >
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
          disabled={isLoading}
          required
        >
          Job Title
        </TextField>

        <Flex css={{ gap: "2rem" }}>
          <TextField
            id="email"
            css={{ width: "100%" }}
            {...register("email")}
            error={errors.email?.message}
            type="email"
            disabled={isLoading}
            required
          >
            Email address
          </TextField>

          <TextField
            id="emailConfirmation"
            css={{ width: "100%" }}
            {...register("emailConfirmation")}
            error={errors.emailConfirmation?.message}
            type="email"
            disabled={isLoading}
            required
          >
            Email confirmation
          </TextField>
        </Flex>

        <Flex css={{ gap: "2rem" }}>
          <MediaMatch lessThan="tablet">
            <TextField
              id="email2"
              type="email"
              {...register("email2")}
              error={errors.email2?.message}
              css={{ width: "100%", "& label": { width: "8.5rem" } }}
              disabled={isLoading}
              required
            >
              Secondary email address
            </TextField>
          </MediaMatch>

          <MediaMatch greaterThan="tablet">
            <TextField
              id="email2"
              type="email"
              {...register("email2")}
              error={errors.email2?.message}
              css={{ width: "131%", "& label": { width: "max-content" } }}
              disabled={isLoading}
              required
            >
              Secondary email address
            </TextField>
          </MediaMatch>

          <MediaMatch lessThan="tablet">
            <TextField
              id="email2Confirmation"
              type="email"
              {...register("email2Confirmation")}
              error={errors.email2Confirmation?.message}
              css={{ width: "100%", "& label": { width: "8.5rem" } }}
              disabled={isLoading}
              required
            >
              Secondary email confirmation
            </TextField>
          </MediaMatch>

          <MediaMatch greaterThan="tablet">
            <TextField
              id="email2Confirmation"
              type="email"
              {...register("email2Confirmation")}
              error={errors.email2Confirmation?.message}
              css={{ width: "100%", "& label": { width: "max-content" }, marginLeft: "3.7rem" }}
              disabled={isLoading}
              required
            >
              Secondary email confirmation
            </TextField>
          </MediaMatch>
        </Flex>

        <Flex css={{ flexDirection: "row", alignItems: "flex-end", gap: "1rem" }}>
          <MediaMatch lessThan="desktop">
            <SelectCountryDdi
              id={"ddi"}
              {...register("ddi")}
              label={"Phone"}
              required
              disabled={isLoading}
              css={{ width: "100%" }}
            />
          </MediaMatch>

          <TextField
            id="phone"
            css={{ width: "45%" }}
            {...register("phone")}
            error={errors.phone?.message}
            type="tel"
            disabled={isLoading}
            required
          />
        </Flex>

        <Flex css={{ flexDirection: "row", alignItems: "flex-end", gap: "1rem" }}>
          <MediaMatch lessThan="desktop">
            <SelectCountryDdi
              id={"ddi2"}
              label={"Secondary phone"}
              {...register("ddi2")}
              disabled={isLoading}
              css={{ width: "90%", "& label": { width: "max-content" } }}
            />
          </MediaMatch>

          <TextField
            id="phone2"
            type="tel"
            {...register("phone2")}
            error={errors.phone2?.message}
            disabled={isLoading}
            css={{ width: "45%", alignContent: "flex-end", marginLeft: "-10px" }}
          />
        </Flex>

        <Flex
          css={{
            flexDirection: "row",
            justifyContent: "space-between",
            gap: "8px",
            mt: "20px"
          }}
        >
          <Button variant="secondary" onClick={(e) => handleBack(e)} disabled={isLoading}>
            Back
          </Button>

          <Button type="submit" disabled={isLoading} isLoading={isLoading}>
            Next <AngleRight width="5" height="11" fill="white" />
          </Button>
        </Flex>
      </Flex>
    </Flex>
  )
}
