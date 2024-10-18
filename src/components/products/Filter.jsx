import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

function Filter() {
  const list_Size = [
    "small",
    "Medium",
    "Large",
    "X-large",
    "XX-Large",
    "XXX-large",
  ];
  return (
    <>
      <div className="mt-5 w-full">
        <Box sx={{ width: "full" }}>
          <p className="text-2xl font-semibold ">Price</p>
          <Slider
            defaultValue={150}
            aria-label="Default"
            valueLabelDisplay="auto"
            sx={{ color: "#000", width: { sx: "90%", lg: "50%" } }}
          />
        </Box>
      </div>

      <p className="text-2xl font-semibold flex flex-col ">Size</p>
      <div className="flex flex-wrap gap-2 ">
        {list_Size.map((size) => (
          <button
            key={size}
            className=" text-sm border-2 border-bg-gray p-2 w-[100px] h-[30px] flex justify-center items-center text-black  rounded-3xl  cursor-pointer"
          >
            {size}
          </button>
        ))}
        <hr className="w-full mt-5 bg-white border-1 "></hr>
      </div>
    </>
  );
}

export default Filter;
