import React, { useContext, useEffect } from "react";
import { Helmet } from "react-helmet";
import { ProductsContext } from "../context/ProductsContext";
import { ProductsSchema } from "../schema/ProductsSchema";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
const Form = () => {
  const {
    data,
    setData,
    filter,
    setFilterData,
    sortData,
    setSortData,
    imageInp,
    setImageInp,
    titleInp,
    setTitleInp,
    priceInp,
    setPriceInp,
  } = useContext(ProductsContext);
  // console.log(sortData);
  console.log(setSortData);
  const getAllData = async () => {
    const res = await axios.post("http://localhost:5000/aranoza");
    setData(res?.data);
    setSortData(res?.data);
    console.log(res?.data);
  };
  useEffect(() => {
    getAllData();
  }, []);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(ProductsSchema),
  });

  const createProduct = async () => {
    await axios.post("http://localhost:5000/users", {
      image: imageInp,
      title: titleInp,
      price: priceInp,
    });
    getAllData();
  };
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Form</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>

      <form className="form" action="" onSubmit={handleSubmit(createProduct)}>
        <input
          className="input"
          type="text"
          {...register("image")}
          placeholder="image"
          onChange={(e) => setImageInp(e.target.value)}
        />
        {errors.image?.message && (
          <p style={{ color: "red" }}>{errors.image?.message}</p>
        )}
        <input
          className="input"
          type="text"
          placeholder="Title"
          {...register("title")}
          onChange={(e) => setTitleInp(e.target.value)}
        />
        {errors.title?.message && (
          <p style={{ color: "red" }}>{errors.title?.message}</p>
        )}

        <input
          className="input"
          type="text"
          placeholder="price"
          {...register("price")}
          onChange={(e) =>setPriceInp(e.target.value)}
        />
        {errors.price?.message && (
          <p style={{ color: "red" }}>{errors.price?.message}</p>
        )}
        <button className="addbtn" type="submit">
          Add
        </button>
      </form>

      <TableContainer className="table" component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Image</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.length>0 && data.map((row) => (
              <TableRow
                key={row._id}
                sx={{ "&:last-child td, &:last-child th": { border: 1 } }}
              >
                <TableCell>
                  <img className="imgsrc" src={row.image} alt="" />
                </TableCell>
                <TableCell>{row.title}</TableCell>
                <TableCell>{row.price}</TableCell>
                <TableCell>
                  <button
                    style={{
                      width: "100px",
                      height: "20px",
                      color: "white",
                      backgroundColor: "red",
                      border: "none",
                      borderRadius: "10px",
                    }}
                    onClick={() => {
                      let newArr = data.filter(
                        (item) => item.id != row._id
                      );
                      axios.delete(
                        "http://localhost:5000/users" + "/" + row._id
                      );
                      data(newArr);

                      getAllData();
                    }}
                  >
                    Delete
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Form;
