/* eslint-disable @typescript-eslint/no-explicit-any */
import { cloneElement, useCallback, useEffect, useState } from "react"

import { useQuery } from "react-query"

import { Create } from "../Create"
import { Search } from "../Search"
import { Flex } from "components/Flex"
import Button from "components/Button"
import PincelIcon from "components/Icons/Pincel"

type Props = {
	moduleName: string
	moduleSearchApi: () => Promise<unknown[]>
	moduleCreateApi: (props: any) => Promise<string>
	moduleTable: JSX.Element
}

export const PortalAdminLayout = ({
	moduleName,
	moduleSearchApi,
	moduleCreateApi,
	moduleTable: ModuleTable,
}: Props) => {
	let { data }: any = useQuery([moduleName], moduleSearchApi)

	const [term, setTerm] = useState("")
	const [showCreate, setShowCreate] = useState(false)

	const [nPages, setNPages] = useState(0)
	const [pageNumbers, setPageNumbers] = useState([1, 2])
	const [currentPage, setCurrentPage] = useState(1)
	const [recordsPerPage, setRecordsPerPage] = useState(10)
	const [dataCopyCopy, setDataCopyCopy] = useState<any>([])
	const [selectPageSize, setSelectPageSize] = useState(10)
	const [finalData, setFinalData] = useState<any>([])
	function onChangeTerm(term: string) {
		setTerm(term)
	}

	function onShowCreate(show: boolean) {
		setShowCreate(show)
	}

	const nextPage = () => {
		if (currentPage !== nPages) setCurrentPage(currentPage + 1)
	}
	const prevPage = () => {
		if (currentPage !== 1) setCurrentPage(currentPage - 1)
	}
	const setCurrentPageFunc = (event: any) => {
		setSelectPageSize(event.target.value)
	}
	useEffect(() => {
		setRecordsPerPage(selectPageSize)
	}, [selectPageSize])
	// const filteredData = useCallback(() => {}, [data, term, recordsPerPage])
	useEffect(() => {
		if (data === undefined) {
			// eslint-disable-next-line react-hooks/exhaustive-deps
			data = []
		}

		const dataCopy = [...data]

		const copyofdatacopy = dataCopy.filter((obj: any) => {
			for (const prop in obj) {
				if (prop.toString() === "dn") {
					return false
				}

				const termTemp = term.toString()
				if (obj[prop]?.toString().toLowerCase().includes(termTemp.toLowerCase())) {
					return true
				}
			}
			return false
		})
		const indexOfLastRecord = currentPage * recordsPerPage
		const indexOfFirstRecord = indexOfLastRecord - recordsPerPage
		const npagestemporary = Math.ceil(dataCopy.length / recordsPerPage)
		setNPages(npagestemporary)
		setPageNumbers([...Array(npagestemporary + 1).keys()].slice(1))
		setDataCopyCopy(copyofdatacopy)
		setFinalData(copyofdatacopy.slice(indexOfFirstRecord, indexOfLastRecord))
	}, [data, nPages, currentPage, recordsPerPage, term])
	const ComponentTableProps = { data: finalData }
	// const ComponentTableProps = { data: filteredData() }
	const css = `
    .table{
      border-collapse: collapse;
      width: 100%;
      max-width: 1500px;

    }
    .table thead{
      border-bottom: 1px solid black;
    }
    .table thead th{
      padding: 8px;
    }
    .table tbody{
      margin-top: 16px;
    }
    .tablewb tr td{
      padding: 8px;
      height:75px;
    }
    .tablewb tr td:nth-child(1) input{
      width: 1.3em;
      height: 1.3em;
      background-color: white;
      border-radius: 50%;
      vertical-align: middle;
      border: 1px solid #ddd;
      appearance: none;
      -webkit-appearance: none;
      outline: none;
      cursor: pointer;
    }
    .tablewb tr td:nth-child(1) input:checked{
      background-color: blue;
    }
    .tablewb tr:nth-child(even){
      background-color: lightgray
    }
    .pageNumber{
      width:100%;
      max-width:1500px
    }
    .pageNumber p{
      height: 40px;
      width: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .pageNumber p.active{
      color: white;
      background-color: blue;
      border-radius: 8px
    }
    .pageNumber p.active a{
      color: white;
    }
    .underText{
      margin: 8px;
      color: gray

    }
    .page-link{
      color:black;
    }
    .hey{
      font-weight:300;
    }
  `
	return (
		<>
			<style>{css}</style>
			<Flex css={{ justifyContent: "space-between", color: "$brand-primary", maxWidth: "1500px" }}>
				<h1 className="hey">
					Portal {">"} {moduleName}
				</h1>
				<Button onClick={() => onShowCreate(true)}>Add New</Button>
			</Flex>

			{showCreate && (
				<Create moduleName={moduleName} moduleCreateApi={moduleCreateApi} onShowCreate={onShowCreate} />
			)}

			<Search moduleName={moduleName} onChangeTerm={onChangeTerm} />

			{ModuleTable && cloneElement(ModuleTable, ComponentTableProps)}

			<p className="underText">
				SHOWING &nbsp;
				<select value={selectPageSize} name="" id="" onChange={setCurrentPageFunc}>
					<option value="10">10</option>
					<option value="20">20</option>
					<option value="30">30</option>
				</select>
				&nbsp; OF {dataCopyCopy.length}
			</p>
			<Flex css={{ gap: "16px", justifyContent: "center" }} className="pageNumber">
				<p onClick={prevPage}>{"<"}</p>
				{pageNumbers.map((pgnumber) => (
					<p key={pgnumber} className={`page-item ${currentPage == pgnumber ? "active" : ""}`}>
						<a className="page-link" href="#" onClick={() => setCurrentPage(pgnumber)}>
							{pgnumber}
						</a>
					</p>
				))}
				<p onClick={nextPage}>{">"}</p>
			</Flex>
		</>
	)
}
