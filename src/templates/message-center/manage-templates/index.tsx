/* eslint-disable @typescript-eslint/no-explicit-any */
import Head from "next/head"

import * as S from "./styles"

import { useGetMessagesTemplates } from "api/message-center/getMessageTemplate"
import Button from "components/Button"
import DateTimePicker from "components/DateTimePicker"
import { ArrowRight } from "components/Icons/ArrowRight"
import { MediaMatch } from "components/MediaMatch"
import SectionTitle from "components/SectionTitle"
import Table from "components/Table"
import TextField from "components/TextField"
import { useState } from "react"
import TableActions from "./TableAction"
import { columns } from "./columns"

type Filter = {
  startDate?: string
  endDate?: string
  title?: string
}

const FILTER_INITIAL_VALUES = {
  startDate: undefined,
  endDate: undefined,
  title: undefined
}

const ManageTemplatesTemplate = () => {
  const [page, setPage] = useState(1)
  const [pageSize, setPageSize] = useState(10)
  const [filter, setFilter] = useState<Filter>(FILTER_INITIAL_VALUES)
  const [queryFilter, setQueryFilter] = useState<Filter>(FILTER_INITIAL_VALUES)

  const { data } = useGetMessagesTemplates({
    page: Math.max(page - 1, 0),
    size: pageSize,
    ...filter
  })

  const messages = data?.content || []

  const handlePageChange = (page: number) => {
    setPage(page)
  }

  const handlePerRowsChange = (pageSize: number) => {
    setPageSize(pageSize)
  }

  const handleSearch = () => {
    setFilter(queryFilter)
  }

  const handleClearFilter = () => {
    setFilter(FILTER_INITIAL_VALUES)
    setQueryFilter(FILTER_INITIAL_VALUES)
  }

  return (
    <>
      <Head>
        <title>Fly Embraer - Manage Templates - Message Center</title>
        <meta name="description" content="Fly Embraer 2.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <S.Wrapper>
        <S.Header>
          <S.Title>Message Center &gt; Manage Templates</S.Title>
        </S.Header>

        <S.WrapperSection>
          <SectionTitle title="Search Templates" />

          <S.WrapperInputs>
            <S.WrapperInputSearch>
              <TextField
                id="search"
                placeholder="Search for any column"
                value={queryFilter.title}
                onChange={(e) => setQueryFilter((oldState) => ({ ...oldState, title: e.target.value }))}
              />
            </S.WrapperInputSearch>

            <S.WrapperDates>
              <DateTimePicker
                label="Start Date"
                format="DD/MM/YYYY"
                onChangeValue={(date) => setQueryFilter((oldState) => ({ ...oldState, startDate: date }))}
                initialValue={queryFilter.startDate}
              />
              <DateTimePicker
                label="End Date"
                format="DD/MM/YYYY"
                onChangeValue={(date) => setQueryFilter((oldState) => ({ ...oldState, endDate: date }))}
                initialValue={queryFilter.endDate}
              />

              <S.WrapperButtons>
                <Button onClick={handleSearch}>
                  <span style={{ marginRight: 8 }}>Search</span>
                  <ArrowRight fill="white" />
                </Button>
                <Button variant="tertiary" color="primary" onClick={handleClearFilter}>
                  Clear results
                </Button>
              </S.WrapperButtons>
            </S.WrapperDates>
          </S.WrapperInputs>

          <MediaMatch greaterThan="largeMobile" asChild>
            <Table
              columns={columns}
              data={messages}
              isSelectable
              actionComponent={<TableActions />}
              paginationServer
              pageSize={pageSize}
              totalPages={data?.totalPages || 0}
              currentPage={page}
              onPageChange={handlePageChange}
              onChangeRowsPerPage={handlePerRowsChange}
            />
          </MediaMatch>

          <MediaMatch lessThan="largeMobile" asChild>
            <S.WrapperTableMobile>
              <Table
                columns={columns}
                data={messages}
                actionComponent={<TableActions />}
                paginationServer
                pageSize={pageSize}
                totalPages={data?.totalPages || 0}
                currentPage={page}
                onPageChange={handlePageChange}
                onChangeRowsPerPage={handlePerRowsChange}
              />
            </S.WrapperTableMobile>
          </MediaMatch>
        </S.WrapperSection>
      </S.Wrapper>
    </>
  )
}

export default ManageTemplatesTemplate
