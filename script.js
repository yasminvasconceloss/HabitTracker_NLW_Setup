const form = document.querySelector("form")
const nlwSetup = new NLWSetup(form)

const data = {
  up: ["01-01", "01-02", "01-03", "01-04", "01-05", "01-06"],
  care: ["01-01", "01-02", "01-03", "01-04"],
  food: ["01-01", "01-02", "01-03", "01-04"],
  code: ["01-01", "01-02", "01-03", "01-04"],
  read: ["01-01", "01-02", "01-03", "01-04"],
  sleep: ["01-01", "01-02", "01-03", "01-04"],
}

nlwSetup.setData(data)
nlwSetup.load()