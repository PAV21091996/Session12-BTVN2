let a = Number(prompt("Nhập số: "));

let check = Number.isInteger(a);

if (check) {
    if (a >= 120) {
        alert ("Số được nhập không phải tuổi của một người, vui lòng nhập lại.");
    }
    else if (a <= 0 ){
        alert ("Số được nhập không phải tuổi của một người, vui lòng nhập lại.");
    }
    else {
        alert ("Số được nhập là tuổi của một người.");
    }
}
else {
    alert ("Không hợp lệ, vui lòng nhập lại.");
}