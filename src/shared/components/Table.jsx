import React from "react";

import "./../../styles/global.css";

const Table = ({
  columns = [],
  data = []
}) => {

  return (

    <div className="custom-table-wrapper">

      <table className="custom-table">

        <thead>

          <tr>

            {
              columns.map((column,index)=>(
                <th key={index}>
                  {column.header}
                </th>
              ))
            }

          </tr>

        </thead>

        <tbody>

          {
            data.length > 0
            ?
            data.map((row,rowIndex)=>(

              <tr key={rowIndex}>

                {
                  columns.map((column,colIndex)=>(
                    <td key={colIndex}>

                      {
                        column.render
                        ?
                        column.render(row)
                        :
                        row[column.accessor]
                      }

                    </td>
                  ))
                }

              </tr>

            ))
            :
            <tr>

              <td
                colSpan={columns.length}
                className="no-data-found"
              >
                No Data Found
              </td>

            </tr>
          }

        </tbody>

      </table>

    </div>

  );
};

export default Table;