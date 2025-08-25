const DetailsTable = ({
  data,
  columns,
  className = "",
  headerClassName = "",
  rowClassName = "",
  cellClassName = "",
  scroll = false, // new scroll prop
}) => {
  return (
    <div
      dir="rtl"
      className={`w-full md:min-w-[560px] ${className}`}
      style={scroll ? { overflowX: "auto", maxWidth: "100%" } : {}}
    >
      {/* Header */}
      <div className="w-full">
        <div
          className={`grid items-center bg-hover-color text-white-color rounded-md px-4 py-3 ${headerClassName}`}
          style={{ gridTemplateColumns: `repeat(${columns.length}, 1fr)` }}
        >
          {columns.map((column, index) => (
            <div key={index} className="text-center">
              {column.header}
            </div>
          ))}
        </div>
      </div>

      {/* Rows */}
      <div
        className={`grid items-center gap-2 mt-6 ${rowClassName}`}
        style={{ gridTemplateColumns: `repeat(${columns.length}, 1fr)` }}
      >
        {data.map((row, rowIndex) => (
          <div key={rowIndex} className="contents">
            {columns.map((column, colIndex) => (
              <div key={colIndex} className="flex justify-center">
                <div
                  className={`md:w-[220px] w-[160px] bg-white-color text-main-color rounded px-2 py-1 flex items-center justify-center ${cellClassName}`}
                  style={{ minHeight: "36px" }}
                >
                  {column.render
                    ? column.render(row, rowIndex)
                    : row[column.key] || ""}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DetailsTable;
