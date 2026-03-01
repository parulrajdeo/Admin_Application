import React, { useRef } from 'react';
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Resize,
  Sort,
  ContextMenu,
  Filter,
  Page,
  ExcelExport,
  PdfExport,
  Edit,
  Inject,
} from '@syncfusion/ej2-react-grids';

import { ordersData, ordersGrid, contextMenuItems } from '../data/dummy';
import { Header } from '../components';

const Orders = () => {
  const gridRef = useRef(null);

  const editing = {
    allowDeleting: true,
    allowEditing: true,
    allowAdding: true,
    mode: 'Dialog',
  };

  const toolbarClick = (args) => {
    if (!gridRef.current) return;

    if (args.item.id.includes('gridcomp_excelexport')) {
      gridRef.current.excelExport();
    }

    if (args.item.id.includes('gridcomp_pdfexport')) {
      gridRef.current.pdfExport();
    }
  };

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Orders" />

      <GridComponent
        id="gridcomp"
        ref={gridRef}
        dataSource={ordersData}
        allowPaging
        allowSorting
        allowFiltering
        allowExcelExport
        allowPdfExport
        contextMenuItems={contextMenuItems}
        editSettings={editing}
        toolbar={['Search', 'ExcelExport', 'PdfExport']}
        toolbarClick={toolbarClick}
      >
        <ColumnsDirective>
          {ordersGrid.map((col, index) => (
            <ColumnDirective
              key={col.field || index}
              field={col.field}
              headerText={col.headerText}
              width={col.width}
              textAlign={col.textAlign}
              format={col.format}
              template={col.template}
              editType={col.editType}
              allowSorting={col.allowSorting}
              allowFiltering={col.allowFiltering}
            />
          ))}
        </ColumnsDirective>

        <Inject
          services={[
            Resize,
            Sort,
            ContextMenu,
            Filter,
            Page,
            ExcelExport,
            Edit,
            PdfExport,
          ]}
        />
      </GridComponent>
    </div>
  );
};

export default Orders;

