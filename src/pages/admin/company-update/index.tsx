import type { NextPageWithLayout } from "pages/_app"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "components/Tabs"
import GeneralInformation from "./general-information"
import LegalRepresentative from "./legal-representative"
import CompanyAdmin from "./company-admin"
import MoreInformation from "./more-information"
import CompanyManagementSearch from "./company-management-search"
import { ReactElement } from "react"
import { LoggedLayout } from "components/Layouts/LoggedLayout"

const CompanyManagement: NextPageWithLayout = () => {
	return (
		<Tabs defaultValue="SEARCH COMPANY">
			<TabsList>
				<TabsTrigger value="SEARCH COMPANY">SEARCH COMPANY</TabsTrigger>
				<TabsTrigger value="GENERAL INFORMATION">GENERAL INFORMATION</TabsTrigger>
				<TabsTrigger value="COMPANY ADMIN">COMPANY ADMIN</TabsTrigger>
				<TabsTrigger value="LEGAL REPRESENTATIVE">LEGAL REPRESENTATIVE</TabsTrigger>
				<TabsTrigger value="CATEGORY">CATEGORY</TabsTrigger>
				<TabsTrigger value="SERVICES">SERVICES</TabsTrigger>
				<TabsTrigger value="MORE INFORMATION">MORE INFORMATION</TabsTrigger>
				<TabsTrigger value="CONTRACTS">CONTRACTS</TabsTrigger>
				<TabsTrigger value="DOMAIN">DOMAIN</TabsTrigger>
			</TabsList>
			<TabsContent value="SEARCH COMPANY">
				<CompanyManagementSearch />
			</TabsContent>
			<TabsContent value="GENERAL INFORMATION">
				<GeneralInformation />
			</TabsContent>
			<TabsContent value="COMPANY ADMIN">
				<CompanyAdmin />
			</TabsContent>
			<TabsContent value="LEGAL REPRESENTATIVE">
				<LegalRepresentative />
			</TabsContent>
			<TabsContent value="CATEGORY">WORK IN PROGRESS</TabsContent>
			<TabsContent value="SERVICES">WORK IN PROGRESS</TabsContent>
			<TabsContent value="MORE INFORMATION">
				<MoreInformation />
			</TabsContent>
			<TabsContent value="CONTRACTS">WORK IN PROGRESS</TabsContent>
			<TabsContent value="DOMAIN">WORK IN PROGRESS</TabsContent>
		</Tabs>
	)
}

export default CompanyManagement

CompanyManagement.getLayout = function getLayout(page: ReactElement) {
	return <LoggedLayout>{page}</LoggedLayout>
}
