import { Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import useStockCall from "../hooks/useStockCall";
import { useSelector } from "react-redux";
import ProductModal from "../components/modals/ProductModal.jsx";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { btnStyle } from "../styles/GlobalStyle";

import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridActionsCellItem, GridToolbar } from "@mui/x-data-grid";

const Product = () => {
  const { deleteStockData, getProCatBrand } = useStockCall();
  const { products } = useSelector((state) => state?.stock);
  const [open, setOpen] = useState(false);
  const [info, setInfo] = useState({
    category_id: "",
    brand_id: "",
    name: "",
  });
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const columns = [
    {
      field: "id",
      headerName: "#",
      headerAlign: "center",
      align: "center",
      minWidth: 40,
      maxWidth: 70,
      flex: 1,
    },
    {
      field: "category",
      headerName: "Category",
      headerAlign: "center",
      align: "center",
      minWidth: 150,
      flex: 3,
    },
    {
      field: "brand",
      headerName: "Brand",
      headerAlign: "center",
      align: "center",
      minWidth: 150,
      flex: 2,
    },
    {
      field: "name",
      headerName: "Name",
      headerAlign: "center",
      align: "center",
      // type: "number",
      minWidth: 150,
      flex: 2,
    },
    {
      field: "stock",
      headerName: "Stock",
      headerAlign: "center",
      align: "center",
      minWidth: 100,
      flex: 0.7,
    },
    {
      field: "actions",
      headerName: "Actions",
      headerAlign: "center",
      align: "center",
      // type: "number",
      minWidth: 50,
      flex: 0.7,
      renderCell: ({ id }) => (
        <GridActionsCellItem
          icon={<DeleteForeverIcon />}
          label="Delete"
          sx={btnStyle}
          onClick={() => deleteStockData("products", id)}
        />
      ),
    },
  ];

  useEffect(() => {
    // getStockData("products");
    // getStockData("categories");
    // getStockData("brands");

    //& Promise All
    getProCatBrand();
  }, []);

  return (
    <div>
      <Typography variant="h4" color="error">
        Products
      </Typography>
      <Button onClick={handleOpen} variant="contained" sx={{ mb: 2 }}>
        New Products
      </Button>
      <ProductModal
        open={open}
        handleClose={handleClose}
        info={info}
        setInfo={setInfo}
      />

      <Box sx={{ width: "100%", marginTop: "1rem" }}>
        <DataGrid
          autoHeight
          rows={products}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
          disableRowSelectionOnClick
          slots={{ toolbar: GridToolbar }}
        />
      </Box>
    </div>
  );
};

export default Product;
