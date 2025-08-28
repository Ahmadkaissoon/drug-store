// ReusableTable.jsx
import { useState } from "react";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";
import Button from "./Button";
import { ArrowDown, ArrowUp, ArrowUpDown } from "lucide-react";

const ReusableTable = ({
  data,
  columns,
  actions,
  alternateRowColors = true,
  primaryColor = "#2a4d69",
  secondaryColor = "#00acc1",
  textColor = "#f5f5f5",
  dir = "rtl",
  showRowNumbers = true,
  isLoading = false, // Add loading prop
}) => {
  const [sortColumn, setSortColumn] = useState(null);
  const [sortDirection, setSortDirection] = useState(null);

  // Safe data handling
  const safeData = Array.isArray(data) ? data : [];
  const safeColumns = Array.isArray(columns) ? columns : [];
  const safeActions = Array.isArray(actions) ? actions : [];

  const handleSort = (columnId) => {
    if (sortColumn === columnId) {
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

  const sortedData = [...safeData].sort((a, b) => {
    if (!sortColumn || !sortDirection) return 0;
    if (sortColumn === "rowNumber") return 0;

    const column = safeColumns.find((col) => col.id === sortColumn);
    if (!column) return 0;

    if (column.sortFn) {
      return column.sortFn(a, b, sortDirection);
    }

    if (!column.value) return 0;

    const aValue = a[column.value];
    const bValue = b[column.value];

    if (aValue === bValue) return 0;

    if (typeof aValue === "string" && typeof bValue === "string") {
      return sortDirection === "asc"
        ? aValue.localeCompare(bValue)
        : bValue.localeCompare(aValue);
    }

    return sortDirection === "asc"
      ? aValue > bValue
        ? 1
        : -1
      : aValue < bValue
      ? 1
      : -1;
  });

  const renderSortIcon = (columnId) => {
    if (sortColumn !== columnId) {
      return <ArrowUpDown className="inline-block h-4 w-4" />;
    }
    return sortDirection === "asc" ? (
      <ArrowUp className="inline-block h-4 w-4" />
    ) : (
      <ArrowDown className="inline-block h-4 w-4" />
    );
  };

  // Loading state
  if (isLoading) {
    return (
      <div className="w-full p-8 text-center text-gray-500">
        <div>Loading data...</div>
      </div>
    );
  }

  // Empty state
  if (safeData.length === 0) {
    return (
      <div className="w-full h-full flex p-8 text-center text-gray-500">
        <div className="flex w-full h-full justify-center items-center">
          لا يوجد بيانات للعرض
        </div>
      </div>
    );
  }

  return (
    <div className="w-full overflow-x-auto rounded-lg border border-gray-200 shadow-md">
      <Table dir={dir} className="min-w-full text-center">
        <TableHeader
          style={{ backgroundColor: primaryColor, color: textColor }}
        >
          <TableRow>
            {showRowNumbers && (
              <TableHead
                className="font-bold h-[64px] text-xl text-center"
                style={{ color: textColor }}
              >
                #
              </TableHead>
            )}
            {safeColumns.map((column) => (
              <TableHead
                key={column.id}
                className={`font-bold h-[64px] text-xl text-center ${
                  column.className || ""
                }`}
                style={{ color: textColor }}
              >
                {column.header}
                {column.sortable && (
                  <button
                    onClick={() => handleSort(column.id)}
                    className="ml-2 align-middle"
                    aria-label={`Sort by ${column.header}`}
                  >
                    {renderSortIcon(column.id)}
                  </button>
                )}
              </TableHead>
            ))}
            {safeActions.length > 0 && (
              <TableHead
                className="text-center font-bold text-xl"
                style={{ color: textColor }}
              >
                العمليات
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
              className="hover:brightness-90 transition-all cursor-pointer"
            >
              {showRowNumbers && (
                <TableCell
                  className="text-lg text-center"
                  style={{ color: textColor }}
                >
                  {index + 1}
                </TableCell>
              )}

              {safeColumns.map((column) => (
                <TableCell
                  key={column.id}
                  className={`text-lg text-center ${column.className || ""}`}
                  style={{ color: textColor }}
                >
                  {column.cell
                    ? column.cell(row)
                    : column.value
                    ? row[column.value]
                    : null}
                </TableCell>
              ))}
              {safeActions.length > 0 && (
                <TableCell className="text-center">
                  <div className="flex justify-center gap-2">
                    {safeActions.map((action, actionIndex) => (
                      <Button
                        key={actionIndex}
                        title={action.title}
                        onClickFun={() => action.onClickFun?.(row)}
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
