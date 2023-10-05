const image: HTMLFormElement | null = document.querySelector("#image");
const imageElement: HTMLImageElement | null = document.querySelector("img");
let file: File | undefined;
let preview: string | ArrayBuffer | null;
// const formData = new FormData();

image?.addEventListener("change", (e) => {
  console.log(e);
  const target = e.target as HTMLInputElement & {
    files: FileList;
  }

  file = target.files[0];
  console.log(file);
  // formData.append('file', file);

  const readFile = new FileReader();
  readFile.onload = function() {
    console.log('file', readFile.result);
    preview = readFile.result;

    if (imageElement) {
      imageElement.src = `${preview}`;
      imageElement.alt = `${file?.name}`;
    }
  }
  readFile.readAsDataURL(file);
});
