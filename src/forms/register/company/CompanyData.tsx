import { useRouter } from "next/router"

import { useContext, useMemo } from "react"

import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

import shallow from "zustand/shallow"

import Button from "components/Button"
import { CountriesSelect } from "components/CountriesSelect"
import { Flex } from "components/Flex"
import { AngleRight } from "components/Icons/AngleRight"
import Text from "components/Text"
import TextField from "components/TextField"
import TextArea from "components/TextArea"

import { RegisterCompanyContext } from "contexts/RegisterCompanyContext"

import { useCurrentStepsStore } from "stores/steps"

export const CompanyData = () => {
  type CompanyDataType = yup.InferType<typeof companyDataSchema>

  const router = useRouter()

  const { data, setData } = useContext(RegisterCompanyContext)

  const { nextStep, previousStep } = useCurrentStepsStore(
    (state) => ({
      previousStep: state.previousStep,
      nextStep: state.nextStep
    }),
    shallow
  )

  const companyDataSchema = useMemo(
    () =>
      yup.object({
        companyName: yup
          .string()
          .min(3, "Field must have at least 3 characters")
          .max(60, "Field must not exceed 60 characters")
          .required("This field is required")
          .matches(/^[a-zA-Z0-9]+$/, "Must contain only characters and numbers"),
        embAddressNickname: yup
          .string()
          .required("This field is required")
          .matches(/^@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(\.[a-zA-Z]{2,})?$/, "Must be a valid domain"),
        country: yup
          .string()
          .required("This field is required")
          .matches(/^[a-zA-Z0-9]+$/, "Must contain only characters and numbers"),
        postalCode: yup
          .string()
          .min(2, "Field must have at least 2 characters")
          .max(14, "Field must not exceed 14 characters")
          .required("This field is required")
          .matches(/^[a-zA-Z0-9]+$/, "Must contain only characters and numbers"),
        state: yup
          .string()
          .max(64, "Field must not exceed 64 characters")
          .matches(/^[a-zA-Z0-9]+$/, "Must contain only characters and numbers")
          .required("This field is required"),
        city: yup
          .string()
          .min(2, "Field must have at least 2 characters")
          .max(64, "Field must not exceed 64 characters")
          .required("This field is required")
          .matches(/^[a-zA-Z0-9]+$/, "Must contain only characters and numbers"),
        address: yup
          .string()
          .min(5, "Field must have at least 5 characters")
          .required("This field is required")
          .matches(/^[a-zA-Z0-9]+$/, "Must contain only characters and numbers"),
        embURL: yup
          .string()
          .matches(
            /^(https:\/\/)?(www\.)?[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)*(\/[a-zA-Z0-9]+)*(\?[a-zA-Z0-9]+=[a-zA-Z0-9]+(&[a-zA-Z0-9]+=[a-zA-Z0-9]+)*)?$/,
            "Field must contain a valid URL"
          )
          .max(50, "Field must not exceed 50 characters"),
        description: yup.string().max(1000, "Field must not exceed 1000 characters"),
        embInterestFlyEmbraer: yup.string().max(75, "Field must not exceed 75 characters")
      }),
    []
  )

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<CompanyDataType>({
    resolver: yupResolver(companyDataSchema)
  })

  function onSubmit(values: CompanyDataType) {
    setData({ ...data, ...values })
    nextStep()
  }

  function handleBack() {
    previousStep()
    router.push("/register")
  }

  return (
    <Flex as="form" onSubmit={handleSubmit(onSubmit)} css={{ flexDirection: "column", gap: "40px" }}>
      <Text as="p">Now we need some more information regarding the new company to be added:</Text>
      <Flex css={{ flexDirection: "column", gap: "24px" }}>
        <Text as="h2" weight="bold" size="md">
          COMPANY DATA
        </Text>

        <TextField
          id="embAddressNickname"
          css={{ width: "50%" }}
          {...register("embAddressNickname")}
          defaultValue={data.embAddressNickname}
          error={errors.embAddressNickname?.message}
          required
          autoFocus
        >
          Company Domain
        </TextField>
        <TextField
          id="companyName"
          css={{ width: "50%" }}
          {...register("companyName")}
          defaultValue={data.companyName}
          error={errors.companyName?.message}
          required
        >
          Company Name
        </TextField>
        <CountriesSelect
          id="country"
          label="Country"
          css={{ width: "50%" }}
          {...register("country")}
          defaultValue={data.country}
          error={errors.country?.message}
          required
        />
        <TextField
          id="postalCode"
          css={{ width: "25%" }}
          {...register("postalCode")}
          defaultValue={data.postalCode}
          error={errors.postalCode?.message}
          required
        >
          Postal Code
        </TextField>

        <TextField
          id="state"
          css={{ width: "50%" }}
          {...register("state")}
          defaultValue={data.state}
          error={errors.state?.message}
          required
        >
          State/Province
        </TextField>

        <TextField
          id="city"
          css={{ width: "50%" }}
          {...register("city")}
          defaultValue={data.city}
          error={errors.city?.message}
          required
        >
          City
        </TextField>

        <TextField
          id="address"
          {...register("address")}
          defaultValue={data.address}
          error={errors.address?.message}
          required
        >
          Address
        </TextField>

        <TextField id="url" {...register("embURL")} defaultValue={data.embURL} error={errors.embURL?.message}>
          Url
        </TextField>

        <TextArea
          id="description"
          {...register("description")}
          defaultValue={data.description}
          error={errors.description?.message}
        >
          Company description
        </TextArea>

        <TextArea
          id="embInterestFlyEmbraer"
          {...register("embInterestFlyEmbraer")}
          defaultValue={data.embInterestFlyEmbraer}
          error={errors.embInterestFlyEmbraer?.message}
        >
          Interests in FlyEmbraer
        </TextArea>
      </Flex>
      <Flex
        css={{
          flexDirection: "row",
          justifyContent: "space-between",
          gap: "8px"
        }}
      >
        <Button variant="secondary" onClick={handleBack}>
          Back
        </Button>

        <Button type="submit">
          Next <AngleRight width="6" height="11" fill="white" />
        </Button>
      </Flex>
    </Flex>
  )
}
