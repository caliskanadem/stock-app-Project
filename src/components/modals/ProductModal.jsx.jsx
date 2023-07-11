import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

import { modalStyle } from "../../styles/GlobalStyle";
import { Button, TextField } from "@mui/material";
import useStockCall from "../../hooks/useStockCall";
import { useSelector } from "react-redux";

export default function FirmModal({ open, handleClose, info, setInfo }) {
  const { postStockData, putStockData } = useStockCall();
  const { categories } = useSelector((state) => state.stock);
  console.log(categories);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postStockData("products", info);
    handleClose();
    setInfo({ name: "", phone: "", address: "", image: "" });
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={() => {
          handleClose();
          setInfo({ name: "", phone: "", address: "", image: "" });
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle} onSubmit={handleSubmit}>
          <Box
            sx={{ display: "flex", flexDirection: "column", gap: 2 }}
            component="form"
          >
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Categories</InputLabel>
              <Select
                labelId="category"
                id="category"
                // value={age}
                label="Category"
                onChange={handleChange}
              >
                {categories?.map((item) => (
                  <MenuItem key={item.id} value={item.id}>
                    {item.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <TextField
              label="Brand"
              name="brand"
              id="brand"
              type="text"
              variant="outlined"
              required
              value={info?.brand || ""}
              onChange={handleChange}
            />
            <TextField
              label="Category"
              name="category"
              id="category"
              type="text"
              variant="outlined"
              required
              value={info?.category || ""}
              onChange={handleChange}
            />
            <TextField
              label="Name"
              name="name"
              id="name"
              type="text"
              variant="outlined"
              required
              value={info?.address || ""}
              onChange={handleChange}
            />
            {/* <TextField
              label="Stock"
              name="stock"
              id="stock"
              type="number"
              variant="outlined"
              required
              value={info?.image || ""}
              onChange={handleChange}
            /> */}
            <Button type="submit" variant="contained">
              SUBMIT FIRM
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
