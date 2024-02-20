var questaoAtual = 0;

fetch("json.json")
  .then(result => result.json())
  .then(result => result.content.questions[questaoAtual])
  .then(questao => {
    document.getElementById("num").textContent = questao.id;
    document.getElementById("title").innerHTML = questao.body;
    
    var altern = document.getElementById("altern");
    questao.options.forEach(option => {
      var opt = document.createElement('input');
      opt.type = "radio";
      opt.name = questao.id;
      opt.id = option.id;

      var optlbl = document.createElement('label');
      optlbl.for = option.id;
      optlbl.textContent = option.content;


      altern.appendChild(opt);
      altern.appendChild(optlbl);
    });
  })
