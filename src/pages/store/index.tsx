import { AgGridReact } from "ag-grid-react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";
import { add, removeStore, updateStore } from "../../features/store/storeSlice";
import { IStore } from "../../types/index";
import {
  ColDef,
  CellValueChangedEvent,
  ICellRendererParams,
} from "ag-grid-community";
import { TbTrash } from "react-icons/tb";

function Store() {
  const { stores, col } = useSelector((state: RootState) => state.store);
  const mutableStores = stores.map((store) => ({ ...store }));
  const dataColumns: ColDef<IStore>[] = col;

  const colDefs: ColDef<IStore>[] = [
    ...dataColumns,
    {
      headerName: "actions",
      pinned: "right",
      cellRenderer: (params: ICellRendererParams<IStore>) => {
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
  const onCellValueChanged = (params: CellValueChangedEvent<IStore>) => {
    console.log(params);
    const updatedStore = { ...params.data };
    dispatch(updateStore(updatedStore));
  };
  const handleDeleteStore = (id: number) => {
    dispatch(removeStore(id));
  };

  return (
    <div
      style={{
        height: "600px",
      }}
    >
      <AgGridReact<IStore>
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
              add({
                id: 1,
                storeCode: "ST035",
                storeName: "San Francisco Bay Trends",
                city: "San Francisco",
                state: "CA",
              })
            )
          }
        >
          New Store
        </button>
      </div>
    </div>
  );
}

export default Store;
