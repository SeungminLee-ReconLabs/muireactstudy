export async function readFile(file) {
    return new Promise((resolve) => {
      let reader = new FileReader();
      reader.addEventListener("load", () => { resolve(reader.result); })
      reader.readAsArrayBuffer(file);
    })
  }
  
export default { readFile };
  