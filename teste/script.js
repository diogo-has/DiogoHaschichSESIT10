var questaoAtual = 0;

/* fetch("json.json")
  .then(result => result.json())
  .then(result => result.content.questions[questaoAtual])
  .then(questao => {
    document.getElementById("num").textContent = questao.id;
    document.getElementById("title").innerHTML = questao.body;
    
    var altern = document.getElementById("altern");
    questao.options.forEach(option => {
      var optdiv = document.createElement('div');
      optdiv.className = 'optdiv'

      var opt = document.createElement('input');
      opt.type = "radio";
      opt.name = questao.id;
      opt.id = option.id;

      var optlbl = document.createElement('label');
      optlbl.htmlFor = option.id;
      optlbl.textContent = option.content;

      altern.appendChild(optdiv);
      optdiv.appendChild(opt);
      optdiv.appendChild(optlbl);
    });
  }) */

fetch('json.json')
  .then(result => result.json())
  .then(result => result.content)
  .then(prova => {
    var provaDiv = document.getElementById('provaDiv');
    var title = document.createElement('h1');
    title.textContent = prova.name;

    provaDiv.appendChild(title);

    var questIndex = 1;
    prova.questions.forEach(question => {
      var questDiv = document.createElement('div');
      questDiv.className = 'questDiv';
      var optsDiv = document.createElement('div');
      optsDiv.className = 'optsDiv';

      var questNum = document.createElement('h2');
      questNum.className = 'questNum';
      questNum.textContent = 'Questão ' + questIndex;

      var questID = document.createElement('p');
      questID.className = 'questID';
      questID.textContent = "#" + question.id;

      var questTitle = document.createElement('span');
      questTitle.className = 'questTitle';
      questTitle.innerHTML = question.body;

      provaDiv.appendChild(questDiv);
      questDiv.appendChild(questNum);
      questNum.appendChild(questID);
      questDiv.appendChild(questTitle);
      questDiv.appendChild(optsDiv);

      questIndex++;

      question.options.forEach(option => {
        var optDiv = document.createElement('div');
        optDiv.className = 'optDiv'

        var optInput = document.createElement('input');
        optInput.className = 'optInput';
        optInput.type = "radio";
        optInput.name = question.id;
        optInput.id = question.id+"_radiogroup_"+option.id;

        var optLbl = document.createElement('label');
        optLbl.className = 'optLbl';
        optLbl.htmlFor = question.id+"_radiogroup_"+option.id;
        optLbl.textContent = option.content;

        optsDiv.appendChild(optDiv);
        optDiv.appendChild(optInput);
        optDiv.appendChild(optLbl);
      })
    });
  });