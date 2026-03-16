function getElementWidth(content, padding, border) {
    const contentV = parseFloat(content);
    const paddingV = parseFloat(padding);
    const borderV = parseFloat(border);
    return contentV + paddingV * 2 + borderV * 2
}

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200
