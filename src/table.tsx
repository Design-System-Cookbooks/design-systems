import React from "react";
import { systems } from "./data";
import { createRoot } from "react-dom/client";
import { tw } from "twind";
import "@mantine/core/styles.css";

import { CompanyData } from "./type";
import {
  MantineReactTable,
  useMantineReactTable,
  type MRT_ColumnDef,
  MRT_Cell,
} from "mantine-react-table";
import { MantineProvider } from "@mantine/core";

const domNode = document.getElementById("app") as HTMLElement;
const root = createRoot(domNode);

const Link = ({ cell }: { cell: MRT_Cell<any> }) => {
  const value = cell.getValue();
  if (typeof value !== "string") return null;
  return (
    <a className={tw("underline text-blue-500")} target="_blank" href={value}>
      Link
    </a>
  );
};

const Boolean = ({ cell }: { cell: MRT_Cell<any> }) => {
  const value = cell.getValue();

  return value ? "Yes" : "🤷";
};

const columns: MRT_ColumnDef<CompanyData>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "logo", //access nested data with dot notation
    header: "Logo",
    Cell: ({ cell }) => {
      const value = cell.getValue() as string;

      return (
        <div>
          {value && (
            <img
              alt="logo"
              className={tw(
                "w-8 h-8 rounded-full object-contain shadow border border-gray-50"
              )}
              src={value}
            />
          )}
        </div>
      );
    },
  },
  {
    accessorKey: "systemName",
    header: "Last Name",
  },
  {
    accessorKey: "devices",
    header: "Devices",
  },
  {
    accessorKey: "brandGuidelines",
    header: "Brand Guidelines",
    Cell: Link,
  },
  {
    accessorKey: "designTokens",
    header: "Design Tokens",
    Cell: Boolean,
  },
  {
    accessorKey: "voiceAndTone",
    header: "Voice & Tone",
    Cell: Link,
  },
  {
    accessorKey: "codeRepository",
    header: "Code Repository",
    Cell: Link,
  },
  {
    accessorKey: "codeDocumentation",
    header: "Code Documentation",
    Cell: Link,
  },
  {
    accessorKey: "storybook",
    header: "Storybook",
    size: 220,
    Cell: Link,
  },
  {
    accessorKey: "figmaKit",
    header: "Figma Kit",
    Cell: Link,
  },
  {
    accessorKey: "multiBrand",
    header: "Multi Brand",
    Cell: Boolean,
  },
];

const DemoTable = () => {
  const table = useMantineReactTable({
    columns,
    data: systems,
    initialState: {
      pagination: {
        pageSize: 5,
        pageIndex: 0,
      },
    },
    mantineTableProps: {
      className: "table-fixed",
      styles: {
        table: {
          tableLayout: "fixed",
        },
      },
    },
  });

  return (
    <div className={tw("p-8")}>
      <MantineProvider>
        <MantineReactTable table={table} />
      </MantineProvider>
    </div>
  );
};

root.render(<DemoTable />);
