function solveEquations() {
  // Get input values
  let a1 = parseFloat(document.getElementById("a1").value);
  let b1 = parseFloat(document.getElementById("b1").value);
  let c1 = parseFloat(document.getElementById("c1").value);
  let d1 = parseFloat(document.getElementById("d1").value);

  let a2 = parseFloat(document.getElementById("a2").value);
  let b2 = parseFloat(document.getElementById("b2").value);
  let c2 = parseFloat(document.getElementById("c2").value);
  let d2 = parseFloat(document.getElementById("d2").value);

  let a3 = parseFloat(document.getElementById("a3").value);
  let b3 = parseFloat(document.getElementById("b3").value);
  let c3 = parseFloat(document.getElementById("c3").value);
  let d3 = parseFloat(document.getElementById("d3").value);

  // Determinant of coefficient matrix
  let D = a1 * (b2 * c3 - b3 * c2) - 
          b1 * (a2 * c3 - a3 * c2) + 
          c1 * (a2 * b3 - a3 * b2);

  if (D === 0) {
      document.getElementById("result").innerHTML = "No unique solution (determinant is zero).";
      return;
  }

  // Determinant for Dx, Dy, Dz
  let Dx = d1 * (b2 * c3 - b3 * c2) - 
           b1 * (d2 * c3 - d3 * c2) + 
           c1 * (d2 * b3 - d3 * b2);

  let Dy = a1 * (d2 * c3 - d3 * c2) - 
           d1 * (a2 * c3 - a3 * c2) + 
           c1 * (a2 * d3 - a3 * d2);

  let Dz = a1 * (b2 * d3 - b3 * d2) - 
           b1 * (a2 * d3 - a3 * d2) + 
           d1 * (a2 * b3 - a3 * b2);

  // Solving for x, y, z
  let x = Dx / D;
  let y = Dy / D;
  let z = Dz / D;

  // Display results
  document.getElementById("result").innerHTML = 
      `<b>Solution:</b> x = ${x.toFixed(2)}, y = ${y.toFixed(2)}, z = ${z.toFixed(2)}`;
}

function resetFields() {
    // Reset all input fields to initial state
    document.getElementById("a1").value = '';
    document.getElementById("b1").value = '';
    document.getElementById("c1").value = '';
    document.getElementById("d1").value = '';
    document.getElementById("a2").value = '';
    document.getElementById("b2").value = '';
    document.getElementById("c2").value = '';
    document.getElementById("d2").value = '';
    document.getElementById("a3").value = '';
    document.getElementById("b3").value = '';
    document.getElementById("c3").value = '';
    document.getElementById("d3").value = '';

   
    document.getElementById("result").innerHTML = '';
}