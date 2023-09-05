let product = [];
let dataProduct = [];
function loadProduct() {
  $(".right-side").load(
    "./page/product.html",
    "data",
    function (response, status, request) {
      fetchDataProduct();
    }
  );
}
function fetchDataProduct() {
  $.get("http://localhost:8888/product", function (data, status) {
    if (status === "success") {
      if (data.status === "success") {
        console.log("data:", data);
        dataProduct = data.data;
        getListData(data.data);
      }
    }
    if (status === "error") {
    }
  });
}
function getListData(data) {
  $("#mybang").empty();
  for (let index = 0; index < data.length; index++) {
    $("#mybang").append(
      `<tr>
        // <td>${data[index].ProductId}</td>
        <td>${data[index].ProductName}</td>
        <td>${data[index].ProductPrice}</td>
        <td>${data[index].ProductInfo}</td>
        <td>${data[index].ProductDetail}</td>
        <td>${data[index].RatingStar}</td>
        <td>${`<img src="${data[index].ProductImageName}" class="img-thumbnail">`}</td>
        <td>${data[index].ManufacturerId}</td>
        <td>${data[index].CategoryId}</td>
        <td><button type="button" class="btn btn-warning">edit</button></td>
        <td><button type="button" class="btn btn-danger">delete</button></td>
    </tr>`
    );
  }
}
function addPro() {
  const idPR = document.getElementById("inputID").value;
  const namePR = document.getElementById("Name").value;
  const pricePR = document.getElementById("Price").value;
  const infoPR = document.getElementById("Info").value;
  const detailPR = document.getElementById("Detail").value;
  const starPR = document.getElementById("Star").value;
  const imaPR = getImageName(document.getElementById("Image").value);
  const manuPR = document.getElementById("Manufacturers").value;
  const cataPR = document.getElementById("Catagory").value;
  // const editBtn = `<button class="btn btn-danger" onclick=editProduct()>Edit</button>`;
  // const deleteBtn = `<button class="btn btn-warning">Delete</button>`;
  const objPR = {
    ProductId: idPR,
    ProductName: namePR,
    ProductPrice: pricePR,
    ProductInfo: infoPR,
    ProductDetail: detailPR,
    RatingStar: starPR,
    ProductImageName: imaPR,
    ManufacturerId: manuPR,
    CategoryId: cataPR,
  };

  $.ajax({
    type: "POST",
    url: "http://localhost:8888/product",
    //   data: objPR,
    data: JSON.stringify(objPR),
    contentType: "application/json; charset=UTF-8",
    success: function (response, status) {
      if (status === "success") {
        // data success
        console.log("response", response);
        // call api product để update table
        // copy code từ bên admin sang.
        fetchDataProduct();
        $("#exampleModal").modal("toggle");
        $("#form-product").trigger("reset");
      } else {
        console.log("Error when loading data!!");
        return;
      }
    },
  });
}
function getImageName(pathImage) {
  var itemArray = pathImage.split("\\");
  // Lấy phần tử cuối cùng
  var imageName = itemArray[itemArray.length - 1];
  return imageName;
}
// $(document).ready(function () {
//   $("#form-product").submit(function (e) {
//     e.preventDefault();

//   });
// });
