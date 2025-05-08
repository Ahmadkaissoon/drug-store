import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";
import { ArrowUpDown, ArrowUp, ArrowDown } from "lucide-react";
import Button from "./Button";

const ReusableTable = ({
  data,
  columns,
  actions,
  alternateRowColors = true,
  primaryColor = "#2a4d69",
  secondaryColor = "#00acc1",
  textColor = "#f5f5f5",
  dir = "rtl",
  actionsHeader = "العمليات",
}) => {
  // State for sorting
  const [sortColumn, setSortColumn] = useState(null);
  const [sortDirection, setSortDirection] = useState(null);

  // Handle sort click
  const handleSort = (columnId) => {
    if (sortColumn === columnId) {
      // Cycle through: asc -> desc -> null
      if (sortDirection === "asc") {
        setSortDirection("desc");
      } else if (sortDirection === "desc") {
        setSortDirection(null);
        setSortColumn(null);
      } else {
        setSortDirection("asc");
      }
    } else {
      setSortColumn(columnId);
      setSortDirection("asc");
    }
  };

  // Sort data
  const sortedData = [...data].sort((a, b) => {
    if (!sortColumn || !sortDirection) return 0;

    const column = columns.find((col) => col.id === sortColumn);
    if (!column) return 0;

    // Use custom sort function if provided
    if (column.sortFn) {
      return column.sortFn(a, b, sortDirection);
    }

    // Default sort logic
    if (!column.value) return 0;

    const aValue = a[column.value];
    const bValue = b[column.value];

    if (aValue === bValue) return 0;

    // Handle different data types
    if (typeof aValue === "string" && typeof bValue === "string") {
      return sortDirection === "asc"
        ? aValue.localeCompare(bValue)
        : bValue.localeCompare(aValue);
    }

    // For numbers and other comparable types
    return sortDirection === "asc"
      ? aValue > bValue
        ? 1
        : -1
      : aValue < bValue
      ? 1
      : -1;
  });

  // Render sort icon
  const renderSortIcon = (columnId) => {
    if (sortColumn !== columnId) {
      return <ArrowUpDown className="mr-2 h-4 w-4" />;
    }

    return sortDirection === "asc" ? (
      <ArrowUp className="mr-2 h-4 w-4" />
    ) : (
      <ArrowDown className="mr-2 h-4 w-4" />
    );
  };

  return (
    <div className="w-full overflow-hidden rounded-lg border border-gray-200 shadow-md">
      <Table dir={dir}>
        <TableHeader
          style={{ backgroundColor: primaryColor, color: textColor }}
        >
          <TableRow>
            {columns.map((column) => (
              <TableHead
                key={column.id}
                className={`font-bold h-[64px] pr-4 text-xl ${
                  column.className || ""
                }`}
                style={{ color: textColor }}
              >
                <div className="flex items-center justify-center">
                  {column.header}
                  {column.sortable && (
                    <button
                      onClick={() => handleSort(column.id)}
                      className="mr-1 cursor-pointer focus:outline-none"
                      aria-label={`Sort by ${column.header}`}
                    >
                      {renderSortIcon(column.id)}
                    </button>
                  )}
                </div>
              </TableHead>
            ))}
            {actions && actions.length > 0 && (
              <TableHead
                className="text-center font-bold text-xl"
                style={{ color: textColor }}
              >
                {actionsHeader}
              </TableHead>
            )}
          </TableRow>
        </TableHeader>
        <TableBody>
          {sortedData.map((row, index) => (
            <TableRow
              key={index}
              style={{
                backgroundColor: alternateRowColors
                  ? index % 2 === 0
                    ? secondaryColor
                    : primaryColor
                  : primaryColor,
                color: textColor,
              }}
              className="hover:brightness-90  transition-all cursor-pointer"
            >
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  className={`text-lg ${column.className || ""}`}
                  style={{ color: textColor }}
                >
                  {column.cell
                    ? column.cell(row)
                    : column.value
                    ? row[column.value]
                    : null}
                </TableCell>
              ))}
              {actions && actions.length > 0 && (
                <TableCell className="text-center ">
                  <div className="flex justify-center gap-2">
                    {actions.map((action, actionIndex) => (
                      <Button
                        key={actionIndex}
                        title={action.title}
                        onClick={() => action.onClickFun(row)}
                        color={action?.color}
                        styleType="table"
                      />
                    ))}
                  </div>
                </TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ReusableTable;
