let oneVars = {};
let twoVars = {};

let changeBindingValue = (it) => {
  let el = it.srcElement.dataset.bindingTwo;
  console.log('change' + el);
  twoVars[el] = it.srcElement.value;
}

let setValue = (name, value) => {
  let v = (oneVars[name]) ? oneVars :
                            (twoVars[name]) ? twoVars : ''; //todo: exception
  v[name] = value;

  let element  = (document.querySelector('[data-binding-one='+name+']'))?
                      document.querySelector('[data-binding-one='+name+']') :
                      document.querySelector('[data-binding-two='+name+']');
                      //todo: exception

  element.innerHTML = value; //set value for elms like input
}

window.addEventListener('DOMContentLoaded', function() {
    let oneBinding = document.querySelectorAll('[data-binding-one]');
    let twoBinding = document.querySelectorAll('[data-binding-two]');

    twoBinding.forEach(it => {
      twoVars[it.dataset.bindingTwo] = it.value;
      it.addEventListener('change', changeBindingValue);
    });

    oneBinding.forEach(it => oneVars[it.dataset.bindingOne] = it.innerHTML);

    setValue('newInput', 88);
    setValue('newSpan', 88);



    console.log(oneVars);
    console.log(twoVars);
});
