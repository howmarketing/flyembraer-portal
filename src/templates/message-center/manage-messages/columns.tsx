/* eslint-disable @typescript-eslint/no-explicit-any */
import { ColumnDef } from "@tanstack/react-table"
import { formatDate } from "utils/format-date"

type Message = {
  id: string
  title: string
  startDate: string
  endDate: string
  groupAircraft: string | null
  groupAll: boolean
  groupApplication: string | null
  groupBct: string | null
  groupCompany: string | null
  groupMarket: string | null
  groupProfile: string | null
  groupService: string | null
  groupUsers: string | null
}

export const columns: ColumnDef<Message, any>[] = [
  {
    accessorKey: "title",
    header: "Title",
    id: "title"
  },
  {
    accessorKey: "startDate",
    header: "Start date",
    id: "startDate",
    cell: ({ row }) => {
      const date = new Date(row.getValue("startDate"))

      return (
        <span>
          {formatDate(date, {
            day: "2-digit",
            month: "short",
            year: "numeric"
          })}
        </span>
      )
    }
  },
  {
    accessorKey: "endDate",
    header: "End date",
    id: "endDate",
    cell: ({ row }) => {
      const date = new Date(row.getValue("endDate"))
      return (
        <span>
          {formatDate(date, {
            day: "2-digit",
            month: "short",
            year: "numeric"
          })}
        </span>
      )
    }
  },
  {
    header: "Selected recipients",
    id: "selectedRecipients",
    accessorKey: "recipients",
    size: 200
  }
]

export const upcomingMessageMock = [
  {
    id: "1",
    title: "Teste",
    startDate: "2023-08-01:18:00:00",
    endDate: "2023-08-01:09:00:00",
    recipients: "Teste"
  }
]
