function removeVietnameseTones(str) {
    return str
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/đ/g, "d")
        .replace(/Đ/g, "D");
}

function removeWhitespaceAndHyphen(str) {
    return str.replace(/[,\s-]+/g, ""); // Loại bỏ tất cả khoảng trắng và ký tự '-'
}


async function checkPaid(price, description) {
    try {
        const response = await fetch("https://script.google.com/macros/s/AKfycby8Y_ayPbY4R_-_9fmkkG7Vmt1stdSRIw25UV4_Opsu2FNywmuSvZphcsZ3EqiFf3CJ/exec");
        const data = await response.json();
        const lastPaid = data.data[data.data.length - 1];
        const lastPrice = parseInt(lastPaid["Giá trị"], 10);
        const lastContent = removeVietnameseTones(lastPaid["Mô tả"]);
        //const mainContent=removeWhitespace(lastContent);
        const  normalizedDescription = removeWhitespaceAndHyphen(description);
        console.log("lastConten:", lastContent);
        console.log(normalizedDescription);

        if (lastPrice >= price && lastContent.includes(normalizedDescription)) {
            return { success: true };
        } else {
            return { success: false, reason: "Payment details do not match" };
        }
    } catch (error) {
        console.error("Error checking payment:", error);
        return { success: false, reason: "API error" };
    }
}

module.exports = {
   
    checkPaid,
};
