function loadProduct() {
  $(".right-side").load(
    "./page/product.html",
    "data",
    function (response, status, request) {
      addNewProduct();
    }
  );
}

const CATEGORY = [
  {
    id: 1,
    value: "Điện thoại",
  },
  {
    id: 2,
    value: "Laptop",
  },
  {
    id: 3,
    value: "Tablet",
  },
];

const MANUFACTURER = [
  {
    id: 1,
    value: "SamSung",
  },
  {
    id: 2,
    value: "Apple",
  },
  {
    id: 3,
    value: "OPPO",
  },
];

$(document).ready(function () {
  $("#Catagory").append(`<option>Select blank</option>`);
  for (let index = 0; index < CATEGORY.length; index++) {
    const element = CATEGORY[index];
    $("#Catagory").append(
      `<option value=${element.id}>${element.value}</option>`
    );
  }
  $("#Manufacturers").append(`<option>Select blank</option>`);
  for (let index = 0; index < MANUFACTURER.length; index++) {
    const element = MANUFACTURER[index];
    $("#Manufacturers").append(
      `<option value=${element.id}>${element.value}</option>`
    );
  }
});
// function openFormProduct() {
//   $("#exampleModal").modal("toggle");
//   $("#exampleModalLabel").text("Thêm sản phẩm");
// }
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
        // console.log("response", response);
        // call api product để update table
        $("#exampleModal").modal("toggle");
        $("#exampleModalLabel").text("Thêm sản phẩm");
        $("#form-product").trigger("reset");
        addNewProduct();
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

// var arr = [];
function addNewProduct() {
  $.ajax({
    type: "GET",
    url: "http://localhost:8888/product",
    dataType: "json",
    success: function (response, status) {
      if (status === "success") {
        var arr = response.data;
        //Xóa bảng dữ liệu hiện tại
        console.log("product--", arr);
        $("#mybang").empty();
        // Dùng vòng lặp để tạo product
        for (let index = 0; index < arr.length; index++) {
          $("#mybang").append(`
    <tr>
      <td>${arr[index].ProductId}</td>
      <td>${arr[index].ProductName}</td>
      <td>${arr[index].ProductPrice}</td>
      <td>${arr[index].ProductInfo}</td>
      <td>${arr[index].ProductDetail}</td>
      <td>${arr[index].RatingStar}</td>
      <td>${arr[index].ProductImageName}</td>
      <td>${arr[index].ManufacturerId}</td>
      <td>${arr[index].CategoryId}</td>
      <td>
        <button type="button" class="btn btn-warning" onclick="editProduct(${arr[index].ProductId})">Edit</button>
      </td>
      <td>
        <button type="button" class="btn btn-danger" onclick="deleteProduct(${arr[index].ProductId})">Delete</button>
      </td>
  </tr>
    `);
        }
      } else {
        console.log("Error when loading data!!");
        return;
      }
    },
  });
}
function resetForm() {
  $("#form-product").trigger("reset");
}

function getListData() {
  const table = document.getElementById("table_product");
  table.innerHTML = `                <thead>
  <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Price</th>
      <th scope="col">Info</th>
      <th scope="col">Detail</th>
      <th scope="col">Star</th>
      <th scope="col">Image</th>
      <th scope="col">NSX</th>
      <th scope="col">Category</th>
      <th scope="col">Edit</th>
      <th scope="col">Delete</th>
  </tr>
</thead>
<tbody></tbody>`;

  for (let index = 0; index < dataProduct.length; index++) {
    const element = dataProduct[index];

    const row = table.insertRow(index + 1);

    // khoi tao cac cell
    const id = row.insertCell(0);
    const name = row.insertCell(1);
    const price = row.insertCell(2);
    const info = row.insertCell(3);
    const detail = row.insertCell(4);
    const star = row.insertCell(5);
    const image = row.insertCell(6);
    const nsx = row.insertCell(7);
    const category = row.insertCell(8);
    const editBtn = row.insertCell(9);
    const deleteBtn = row.insertCell(10);

    id.innerHTML = element.ProductId;
    name.innerHTML = element.ProductName;
    price.innerHTML = element.ProductPrice;
    info.innerHTML = element.ProductInfo;
    detail.innerHTML = element.ProductDetail;
    star.innerHTML = element.RatingStar;
    image.innerHTML = `<img src="${element.ProductImageName}" class="img-thumbnail" alt="image-${element.ProductId}">`;
    nsx.innerHTML = MANUFACTURER.find(
      (el) => el.id == element.ManufacturerId
    ).value;
    category.innerHTML = CATEGORY.find(
      (el) => el.id == element.CategoryId
    ).value;
    editBtn.innerHTML = `<button class="btn btn-danger" onclick={editProduct(${element.ProductId})}>Edit</button>`;
    deleteBtn.innerHTML = `<button class="btn btn-warning">Delete</button>`;
  }
}

function editProduct(id) {
  $("#exampleModal").modal("toggle");
  $("#exampleModalLabel").text("Cập nhật sản phẩm");
  $.get(`http://localhost:8888/product/${id}`, function (data, status) {
    if (status === "success") {
      if (data.status === "success") {
        const dataEdit = data.data;

        $("#inputID").val(dataEdit.ProductId);
        $("#Name").val(dataEdit.ProductName);
        $("#Price").val(dataEdit.ProductPrice);
        $("#Info").val(dataEdit.ProductInfo);
        $("#Detail").val(dataEdit.ProductDetail);
        $("#Star").val(dataEdit.RatingStar);
        $("#Ima").val(dataEdit.ProductImageName);
        $("#Manufacturer").val(
          MANUFACTURER.find((el) => el.id == element.ManufacturerId)
        );
        $("#Category").val(CATEGORY.find((el) => el.id == element.CategoryId));
      }
    }
  });
}

function deleteProduct(idProduct) {
  if (confirm("Bạn chắc chắn xóa") == true) {
    $.ajax({
      type: "DELETE",
      url: "http://localhost:8888/product/" + idProduct,
      // data: "data",
      // dataType: "dataType",
      success: function (response, status) {
        if (status === "success") {
          addNewProduct();
        } else {
          alert("Sản phẩm không tồn tại!");
        }
      },
    });
  }
}
