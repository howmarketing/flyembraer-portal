import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

import { styled } from "../../../stitches.config"
import Button from "components/Button"
import TextField from "components/TextField"
import Select from "components/Select"

export const WorkflowSearch = ({ submitFilters }: any) => {
  const searchWorkflowSchema = yup.object({
    companyName: yup.string(),
    username: yup.string(),
    statusWorkflow: yup.string(),
    applicationName: yup.string(),
    startDate: yup.string(),
    endDate: yup.string()
  })

  type SearchWorkflowProps = yup.InferType<typeof searchWorkflowSchema>

  const { register, handleSubmit, reset } = useForm<SearchWorkflowProps>({
    resolver: yupResolver(searchWorkflowSchema)
  })

  const onSubmit = ({
    companyName,
    username,
    statusWorkflow,
    applicationName,
    startDate,
    endDate
  }: SearchWorkflowProps) => {
    const startWorkflow = startDate?.replace("T", " ")
    const endWorkflow = endDate?.replace("T", " ")
    submitFilters({ companyName, username, statusWorkflow, applicationName, startWorkflow, endWorkflow })
  }

  return (
    <SytledForm as="form" onSubmit={handleSubmit(onSubmit)}>
      <TextField id="companyName" {...register("companyName")}>
        Company
      </TextField>
      <TextField id="username" {...register("username")}>
        User
      </TextField>
      <Select
        id="statusWorkflow"
        label="Status Workflow"
        options={[
          { value: "P", displayValue: "Pending" },
          { value: "F", displayValue: "Finished" }
        ]}
        {...register("statusWorkflow")}
      />
      <TextField id="applicationName" {...register("applicationName")}>
        Application
      </TextField>
      <TextField id="startWorkflow" type="datetime-local" {...register("startDate")}>
        Start
      </TextField>
      <TextField id="endWorkflow" type="datetime-local" {...register("endDate")}>
        End
      </TextField>
      <SytledAction>
        <Button type="submit">Search</Button>
        <StyledClearBtn type="submit" onClick={() => reset()}>
          Clear Search
        </StyledClearBtn>
      </SytledAction>
    </SytledForm>
  )
}

const SytledForm = styled("form", {
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: "20px",

  "@web": {
    gridTemplateColumns: "1fr 1fr 1fr"
  }
})

const SytledAction = styled("div", {
  marginTop: "16px",
  display: "grid",
  gridTemplateColumns: "auto 1fr",
  gap: "1rem",
  alignItems: "center"
})

const StyledClearBtn = styled("button", {
  justifySelf: "flex-start",
  border: "none",
  backgroundColor: "transparent",
  color: "$brand-primary"
})
