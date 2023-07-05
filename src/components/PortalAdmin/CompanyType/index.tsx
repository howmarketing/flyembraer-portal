import { GetCategoryBctResponse } from "api/category/getCategoryBcts"
import Button from "components/Button"
import { Flex } from "components/Flex"

import PincelIcon from "components/Icons/Pincel"
import TrashIcon from "components/Icons/Trash"
import TextArea from "components/TextArea"
import TextField from "components/TextField"

import { useState } from "react"

import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { useMutation } from "react-query"

import { queryClient } from "services/queryClient"

import { PutCategoryBct } from "api/category/putCategoryBct"
import Modal from "components/Modal"
import { ArrowUpDown } from "components/Icons/ArrowUpDown"

type CompanyTypeTableProps = {
	data?: GetCategoryBctResponse
}

type PutAPIprops = {
	cn: string
	displayName?: string
	description?: string
}
// type CreateProps = {
//   moduleName: string
//   moduleCreateApi: (props: PutAPIprops) => Promise<string>
//   onShowCreate: (show: boolean) => void
// }

export const CompanyTypeTable = ({ data }: CompanyTypeTableProps) => {
	const [open, setOpen] = useState(601)
	const [openModal, setOpenModal] = useState(false)
	const { mutate, isLoading } = useMutation((props: PutAPIprops) => PutCategoryBct(props), {
		onSuccess() {
			reset({ displayName: "", description: "" })
			queryClient.invalidateQueries({ queryKey: ["Bct"] })
			alert("Item Atualizado com sucesso")
		},
	})

	function handleEdit(event: any) {
		//do stuff
		console.log(event.target.dataset.index)
		setOpen(event.target.dataset.index)
	}
	function onSubmit(data: CreateFormData) {
		mutate({ ...data })
	}
	function handleCloseOpen() {
		setOpen(600)
	}
	type CreateFormData = yup.InferType<typeof createSchema>
	const createSchema = yup.object({
		cn: yup.string().required(),
		displayName: yup.string().required(),
		description: yup.string().required(),
	})

	const { register, handleSubmit, reset } = useForm<CreateFormData>({ resolver: yupResolver(createSchema) })
	return (
		<>
			<table className="table">
				<thead>
					<th></th>
					<th style={{ textAlign: "left" }}>
						Name &nbsp;
						<ArrowUpDown />
					</th>
					<th style={{ textAlign: "left" }}>
						Description &nbsp;
						<ArrowUpDown />
					</th>
					<th></th>
				</thead>
				<tbody className="tablewb">
					{data ? (
						data?.map(({ displayName, cn, description }, index) => {
							if (open == index) {
								return (
									<>
										<tr key={displayName}>
											<td>
												<input type="checkbox" />
											</td>
											<td>{displayName}</td>
											{/* <td>{description}</td>  this line is correct*/}
											<td>{"description test"}</td>
											<td>
												<Flex css={{ gap: "8px", width: "200px" }}>
													<Button data-index={index} onClick={handleEdit}>
														Edit <PincelIcon />
													</Button>
													<Button>
														Delete <TrashIcon />
													</Button>
												</Flex>
											</td>
										</tr>
										<tr>
											<Flex css={{ width: "600px" }}>
												<Flex
													as="form"
													onSubmit={handleSubmit(onSubmit)}
													css={{ flexDirection: "column", width: "100%" }}
												>
													<Flex css={{ display: "none" }}>
														<input type="text" id="cn" {...register("cn")} value={cn} />
													</Flex>
													<Flex css={{ width: "40%", marginBlock: "24px" }}>
														<TextField id="displayName" {...register("displayName")}>
															Name
														</TextField>
													</Flex>
													<Flex css={{ width: "40%", marginBlock: "24px" }}>
														<TextArea id="description" {...register("description")}>
															Description
														</TextArea>
													</Flex>
													<Flex>
														<Button type="submit">Save</Button>
														<Flex css={{ marginLeft: "24px" }}>
															<Button variant="tertiary" onClick={handleCloseOpen}>
																Cancel
															</Button>
														</Flex>
													</Flex>
												</Flex>
											</Flex>
										</tr>
									</>
								)
							}
							return (
								<tr key={displayName}>
									<td>
										<input type="checkbox" />
									</td>
									<td>{displayName}</td>
									{/* <td>{description}</td>  this line is correct*/}
									<td>{"description test"}</td>
									<td>
										<Flex css={{ gap: "8px", width: "200px" }}>
											<Button data-index={index} onClick={handleEdit}>
												Edit <PincelIcon />
											</Button>
											<Button>
												Delete <TrashIcon />
											</Button>
										</Flex>
									</td>
								</tr>
							)
						})
					) : (
						<h1>no results</h1>
					)}
				</tbody>
			</table>
			{openModal && (
				<Modal showModal={openModal} setShowModal={setOpenModal}>
					<p>Item adicionado com sucesso</p>
				</Modal>
			)}
		</>
	)
}
