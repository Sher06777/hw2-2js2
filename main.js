const func1 = (delay) =>{
  return new Promise((resolve) => {
    setTimeout(() => {
      const block = document.createElement(`div`);
      block.className = "block";
      document.getElementById(`box`).appendChild(block);
      resolve();
    }, delay);
  });
}

async function func2() {
  const input = document.getElementById("input");
  if (input.value < 1 || input.value > 33) {
    alert("Пожалуйста, выберите число от 1 до 33");
    return;
  }

  const box = document.getElementById("box");
  box.innerHTML = "";

  for (let i = 0; i < input.value; i++) {
    await func1(1000);
  }
}

let btn = document.getElementById(`btn`);
btn.onclick = () =>{
    func2()
}
