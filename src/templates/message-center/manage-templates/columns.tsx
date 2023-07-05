/* eslint-disable @typescript-eslint/no-explicit-any */
import { ColumnDef } from "@tanstack/react-table"
import { formatDate } from "utils/format-date"

type Message = {
  id: string
  title: string
  startDate: string
  endDate: string
  selectedRecipients: string
}

export const columns: ColumnDef<Message, any>[] = [
  {
    accessorKey: "name",
    header: "Template Name",
    id: "name",
    size: 200
  },
  {
    accessorKey: "incDate",
    header: "Creation date",
    id: "incDate",
    cell: ({ row }) => {
      const date = new Date(row.getValue("incDate"))

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
  }
]
