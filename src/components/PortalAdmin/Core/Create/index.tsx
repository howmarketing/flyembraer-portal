import { useMutation } from "react-query"

import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

import Button from "components/Button"
import { Flex } from "components/Flex"
import TextArea from "components/TextArea"
import TextField from "components/TextField"

import { useUserProfile } from "hooks/useUserProfile"

import { queryClient } from "services/queryClient"

type CreateApiProps = {
	cn: string
	displayName?: string
	description?: string
}

type CreateProps = {
	moduleName: string
	moduleCreateApi: (props: CreateApiProps) => Promise<string>
	onShowCreate: (show: boolean) => void
}

export const Create = ({ moduleName, moduleCreateApi, onShowCreate }: CreateProps) => {
	const { cn } = useUserProfile()
	const { mutate, isLoading } = useMutation((props: CreateApiProps) => moduleCreateApi(props), {
		onSuccess() {
			reset({ displayName: "", description: "" })
			queryClient.invalidateQueries({ queryKey: [moduleName] })
			alert("Item Adicionado com sucesso")
		},
	})

	type CreateFormData = yup.InferType<typeof createSchema>

	const createSchema = yup.object({
		displayName: yup.string().required(),
		description: yup.string().required(),
	})

	const { register, handleSubmit, reset } = useForm<CreateFormData>({ resolver: yupResolver(createSchema) })

	function onSubmit(data: CreateFormData) {
		mutate({ ...data, cn: cn ?? "" })
	}

	function handleCancel() {
		onShowCreate(false)
	}

	return (
		<div>
			<div>
				<h2>New {moduleName}</h2>
			</div>
			<Flex as="form" onSubmit={handleSubmit(onSubmit)} css={{ flexDirection: "column" }}>
				<Flex css={{ width: "40%", marginBlock: "24px" }}>
					<TextField id="displayName" {...register("displayName")} disabled={isLoading}>
						Name
					</TextField>
				</Flex>
				<Flex css={{ width: "40%", marginBlock: "24px" }}>
					<TextArea id="description" {...register("description")} disabled={isLoading}>
						Description
					</TextArea>
				</Flex>
				<Flex>
					<Flex css={{ marginRight: "24px" }}>
						<Button variant="tertiary" onClick={handleCancel} disabled={isLoading}>
							Cancel
						</Button>
					</Flex>
					<Button type="submit" disabled={isLoading}>
						Save
					</Button>
				</Flex>
			</Flex>
		</div>
	)
}
