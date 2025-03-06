import { AgGridReact } from "ag-grid-react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";
import { ISku } from "../../types/index";
import {
  ColDef,
  CellValueChangedEvent,
  ICellRendererParams,
} from "ag-grid-community";
import { TbTrash } from "react-icons/tb";
import { addSku, updateSku, removeSku } from "../../features/sku/skuSlice";

function Store() {
  const { sku, col } = useSelector((state: RootState) => state.sku);
  const mutableStores = sku.map((sk) => ({ ...sk }));
  const dataColumns: ColDef<ISku>[] = col;

  const colDefs: ColDef<ISku>[] = [
    ...dataColumns,
    {
      headerName: "actions",
      pinned: "right",
      cellRenderer: (params: ICellRendererParams<ISku>) => {
        return (
          <button
            className="p-3 cursor-pointer bg-red-500 text-white rounded-md"
            onClick={() => {
              if (params.data && params.data.id !== undefined) {
                handleDeleteStore(params.data.id);
              }
            }}
          >
            <TbTrash />
          </button>
        );
      },
    },
  ];
  const dispatch = useDispatch();
  const onCellValueChanged = (params: CellValueChangedEvent<ISku>) => {
    console.log(params);
    const updatedStore = { ...params.data };
    dispatch(updateSku(updatedStore));
  };
  const handleDeleteStore = (id: string) => {
    dispatch(removeSku(id));
  };

  return (
    <div
      style={{
        height: "600px",
      }}
    >
      <AgGridReact<ISku>
        onCellValueChanged={onCellValueChanged}
        rowData={mutableStores}
        columnDefs={colDefs}
      />
      <div className="flex my-2">
        <button
          aria-label="add new store"
          className="py-2 px-6 bg-pink-300 rounded-md"
          onClick={() =>
            dispatch(
              // adding static data will add later
              addSku({
                id: "SK05194",
                label: "Breathable Mesh Shorts",
                class: "Accessories",
                department: "Footwear",
                price: 194.99,
                cost: 28.08,
              })
            )
          }
        >
          New SKU
        </button>
      </div>
    </div>
  );
}

export default Store;
