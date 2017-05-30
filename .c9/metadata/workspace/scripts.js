{"changed":true,"filter":false,"title":"scripts.js","tooltip":"/scripts.js","value":"//-------------------------------------------------------------------------\n//intro message\nvar intro = function(){\n    console.log(\"**************************************\");\n    console.log(\"Welcome to SolarIoT\");\n    console.log(\"Solar Investment Simplified\\n\");\n}\n//contents menu\nvar contents = function(){\n    console.log(\"Press 1 to display 'Battery Informatino'\");\n    console.log(\"Press 2 to display 'Current Energy Sell Rate'\");\n    console.log(\"Press 3 to display 'Current Energy Available for Sale'\");\n    console.log(\"Type 'EXIT' to exit SolarIoT\")\n}\n//exit message\nvar exit = function(){\n    console.log(\"\\nThank you for using SolarIoT\");\n    console.log(\"**************************************\");\n}\n//-------------------------------------------------------------------------\n//objects\n//user info\nvar User = function(name, wallet){\n    this.name=name;\n    this.wallet=wallet;\n}\n//battery info\nvar Battery = function(id){\n    this.id=id;\n    this.power=Math.floor(Math.random()*100);\n    this.available=100-this.power;\n}\n//-------------------------------------------------------------------------\n//functions\n\n//-------------------------------------------------------------------------\n//TEST INFO\n//Dummy users -- TEST TEST TEST\nvar user1 = new User(\"John\", 5);\nvar user2 = new User(\"Mary\", 10);\nvar user3 = new User(\"Paul\", 30);\nvar user4 = new User(\"Steve\", 25);\nvar user5 = new User(\"Larry\", 50);\n\n//Create dummy battery grid -- TEST TEST\nvar batteryList = [];\nvar battery1 = new Battery('123456');\nvar battery2 = new Battery('234567');\nvar battery3 = new Battery('345678');\nvar battery4 = new Battery('456789');\nvar battery5 = new Battery('567890');\n\nconsole.log(user1);\nconsole.log(battery1);\n\n\n// var emptyBattery = 0;\n// var fullBattery = 100;\n// var batteryPower = Math.floor(Math.random()*100);\n// var availablePower = fullBattery - batteryPower;\n\n// var  = {\n//     \"name\":\"John Doe\",\n//     \"battery\":batteryPower,\n//     \"energyAvailable\": availablePower,\n// }\n\n\n//dummy user\n// class User {\n//     constructor(name,battery){\n//     this.name=name;\n//     this.battery=battery;\n//     this.energyAvailable = 100-user[battery];\n//     }\n// }","undoManager":{"mark":-3269,"position":100,"stack":[[{"start":{"row":53,"column":15},"end":{"row":53,"column":16},"action":"insert","lines":["t"],"id":8282}],[{"start":{"row":53,"column":16},"end":{"row":53,"column":17},"action":"insert","lines":["e"],"id":8283}],[{"start":{"row":53,"column":17},"end":{"row":53,"column":18},"action":"insert","lines":["r"],"id":8284}],[{"start":{"row":53,"column":18},"end":{"row":53,"column":19},"action":"insert","lines":["y"],"id":8285}],[{"start":{"row":53,"column":19},"end":{"row":53,"column":20},"action":"insert","lines":["1"],"id":8286}],[{"start":{"row":53,"column":21},"end":{"row":53,"column":22},"action":"insert","lines":[";"],"id":8287}],[{"start":{"row":46,"column":27},"end":{"row":46,"column":35},"action":"remove","lines":["\"123qwe\""],"id":8288}],[{"start":{"row":47,"column":15},"end":{"row":47,"column":37},"action":"remove","lines":["new Battery(\"345asd\");"],"id":8289},{"start":{"row":47,"column":15},"end":{"row":47,"column":29},"action":"insert","lines":["new Battery();"]}],[{"start":{"row":48,"column":15},"end":{"row":48,"column":37},"action":"remove","lines":["new Battery(\"678yui\");"],"id":8290},{"start":{"row":48,"column":15},"end":{"row":48,"column":29},"action":"insert","lines":["new Battery();"]}],[{"start":{"row":49,"column":15},"end":{"row":49,"column":37},"action":"remove","lines":["new Battery(\"890fgh\");"],"id":8291},{"start":{"row":49,"column":15},"end":{"row":49,"column":29},"action":"insert","lines":["new Battery();"]}],[{"start":{"row":50,"column":15},"end":{"row":50,"column":37},"action":"remove","lines":["new Battery(\"098poi\");"],"id":8292},{"start":{"row":50,"column":15},"end":{"row":50,"column":29},"action":"insert","lines":["new Battery();"]}],[{"start":{"row":24,"column":23},"end":{"row":25,"column":32},"action":"remove","lines":["","    this.battery= new Battery();"],"id":8293}],[{"start":{"row":28,"column":12},"end":{"row":28,"column":66},"action":"remove","lines":["Math.floor(Math.random() * (999999 - 100000)) + 100000"],"id":8297}],[{"start":{"row":27,"column":23},"end":{"row":27,"column":24},"action":"insert","lines":["i"],"id":8298}],[{"start":{"row":27,"column":24},"end":{"row":27,"column":25},"action":"insert","lines":["d"],"id":8299}],[{"start":{"row":28,"column":12},"end":{"row":28,"column":13},"action":"insert","lines":["i"],"id":8300}],[{"start":{"row":28,"column":13},"end":{"row":28,"column":14},"action":"insert","lines":["d"],"id":8301}],[{"start":{"row":44,"column":9},"end":{"row":44,"column":21},"action":"remove","lines":["battery grid"],"id":8302},{"start":{"row":44,"column":9},"end":{"row":44,"column":10},"action":"insert","lines":["d"]}],[{"start":{"row":44,"column":10},"end":{"row":44,"column":11},"action":"insert","lines":["u"],"id":8303}],[{"start":{"row":44,"column":11},"end":{"row":44,"column":12},"action":"insert","lines":["m"],"id":8304}],[{"start":{"row":44,"column":12},"end":{"row":44,"column":13},"action":"insert","lines":["m"],"id":8305}],[{"start":{"row":44,"column":13},"end":{"row":44,"column":14},"action":"insert","lines":["y"],"id":8306}],[{"start":{"row":44,"column":14},"end":{"row":44,"column":15},"action":"insert","lines":[" "],"id":8307}],[{"start":{"row":44,"column":15},"end":{"row":44,"column":16},"action":"insert","lines":["b"],"id":8308}],[{"start":{"row":44,"column":16},"end":{"row":44,"column":17},"action":"insert","lines":["a"],"id":8309}],[{"start":{"row":44,"column":17},"end":{"row":44,"column":18},"action":"insert","lines":["t"],"id":8310}],[{"start":{"row":44,"column":18},"end":{"row":44,"column":19},"action":"insert","lines":["t"],"id":8311}],[{"start":{"row":44,"column":19},"end":{"row":44,"column":20},"action":"insert","lines":["e"],"id":8312}],[{"start":{"row":44,"column":20},"end":{"row":44,"column":21},"action":"insert","lines":["r"],"id":8313}],[{"start":{"row":44,"column":21},"end":{"row":44,"column":22},"action":"insert","lines":["y"],"id":8314}],[{"start":{"row":44,"column":22},"end":{"row":44,"column":23},"action":"insert","lines":[" "],"id":8315}],[{"start":{"row":44,"column":23},"end":{"row":44,"column":24},"action":"insert","lines":["g"],"id":8316}],[{"start":{"row":44,"column":24},"end":{"row":44,"column":25},"action":"insert","lines":["r"],"id":8317}],[{"start":{"row":44,"column":25},"end":{"row":44,"column":26},"action":"insert","lines":["i"],"id":8318}],[{"start":{"row":44,"column":26},"end":{"row":44,"column":27},"action":"insert","lines":["d"],"id":8319}],[{"start":{"row":45,"column":27},"end":{"row":45,"column":29},"action":"insert","lines":["''"],"id":8320}],[{"start":{"row":45,"column":28},"end":{"row":45,"column":29},"action":"insert","lines":["1"],"id":8321}],[{"start":{"row":45,"column":29},"end":{"row":45,"column":30},"action":"insert","lines":["2"],"id":8322}],[{"start":{"row":45,"column":30},"end":{"row":45,"column":31},"action":"insert","lines":["3"],"id":8323}],[{"start":{"row":45,"column":31},"end":{"row":45,"column":32},"action":"insert","lines":["4"],"id":8324}],[{"start":{"row":45,"column":32},"end":{"row":45,"column":33},"action":"insert","lines":["5"],"id":8325}],[{"start":{"row":45,"column":33},"end":{"row":45,"column":34},"action":"insert","lines":["6"],"id":8326}],[{"start":{"row":46,"column":27},"end":{"row":46,"column":29},"action":"insert","lines":["''"],"id":8327}],[{"start":{"row":46,"column":28},"end":{"row":46,"column":29},"action":"insert","lines":["2"],"id":8328}],[{"start":{"row":46,"column":29},"end":{"row":46,"column":30},"action":"insert","lines":["3"],"id":8329}],[{"start":{"row":46,"column":30},"end":{"row":46,"column":31},"action":"insert","lines":["4"],"id":8330}],[{"start":{"row":46,"column":30},"end":{"row":46,"column":31},"action":"remove","lines":["4"],"id":8331}],[{"start":{"row":46,"column":29},"end":{"row":46,"column":30},"action":"remove","lines":["3"],"id":8332}],[{"start":{"row":46,"column":28},"end":{"row":46,"column":29},"action":"remove","lines":["2"],"id":8333}],[{"start":{"row":46,"column":28},"end":{"row":46,"column":29},"action":"insert","lines":["2"],"id":8334}],[{"start":{"row":46,"column":29},"end":{"row":46,"column":30},"action":"insert","lines":["3"],"id":8335}],[{"start":{"row":46,"column":30},"end":{"row":46,"column":31},"action":"insert","lines":["4"],"id":8336}],[{"start":{"row":46,"column":31},"end":{"row":46,"column":32},"action":"insert","lines":["5"],"id":8337}],[{"start":{"row":46,"column":32},"end":{"row":46,"column":33},"action":"insert","lines":["6"],"id":8338}],[{"start":{"row":46,"column":33},"end":{"row":46,"column":34},"action":"insert","lines":["7"],"id":8339}],[{"start":{"row":47,"column":27},"end":{"row":47,"column":29},"action":"insert","lines":["''"],"id":8340}],[{"start":{"row":47,"column":28},"end":{"row":47,"column":29},"action":"insert","lines":["3"],"id":8341}],[{"start":{"row":47,"column":29},"end":{"row":47,"column":30},"action":"insert","lines":["4"],"id":8342}],[{"start":{"row":47,"column":30},"end":{"row":47,"column":31},"action":"insert","lines":["5"],"id":8343}],[{"start":{"row":47,"column":31},"end":{"row":47,"column":32},"action":"insert","lines":["6"],"id":8344}],[{"start":{"row":47,"column":32},"end":{"row":47,"column":33},"action":"insert","lines":["7"],"id":8345}],[{"start":{"row":47,"column":33},"end":{"row":47,"column":34},"action":"insert","lines":["8"],"id":8346}],[{"start":{"row":48,"column":27},"end":{"row":48,"column":29},"action":"insert","lines":["''"],"id":8347}],[{"start":{"row":48,"column":28},"end":{"row":48,"column":29},"action":"insert","lines":["4"],"id":8348}],[{"start":{"row":48,"column":29},"end":{"row":48,"column":30},"action":"insert","lines":["5"],"id":8349}],[{"start":{"row":48,"column":30},"end":{"row":48,"column":31},"action":"insert","lines":["6"],"id":8350}],[{"start":{"row":48,"column":31},"end":{"row":48,"column":32},"action":"insert","lines":["7"],"id":8351}],[{"start":{"row":48,"column":32},"end":{"row":48,"column":33},"action":"insert","lines":["8"],"id":8352}],[{"start":{"row":48,"column":33},"end":{"row":48,"column":34},"action":"insert","lines":["9"],"id":8353}],[{"start":{"row":49,"column":27},"end":{"row":49,"column":29},"action":"insert","lines":["''"],"id":8354}],[{"start":{"row":49,"column":28},"end":{"row":49,"column":29},"action":"insert","lines":["5"],"id":8355}],[{"start":{"row":49,"column":29},"end":{"row":49,"column":30},"action":"insert","lines":["6"],"id":8356}],[{"start":{"row":49,"column":30},"end":{"row":49,"column":31},"action":"insert","lines":["7"],"id":8357}],[{"start":{"row":49,"column":31},"end":{"row":49,"column":32},"action":"insert","lines":["8"],"id":8358}],[{"start":{"row":49,"column":32},"end":{"row":49,"column":33},"action":"insert","lines":["9"],"id":8359}],[{"start":{"row":49,"column":33},"end":{"row":49,"column":34},"action":"insert","lines":["0"],"id":8360}],[{"start":{"row":44,"column":40},"end":{"row":45,"column":0},"action":"insert","lines":["",""],"id":8361}],[{"start":{"row":45,"column":0},"end":{"row":45,"column":1},"action":"insert","lines":["b"],"id":8362}],[{"start":{"row":45,"column":1},"end":{"row":45,"column":2},"action":"insert","lines":["a"],"id":8363}],[{"start":{"row":45,"column":2},"end":{"row":45,"column":3},"action":"insert","lines":["t"],"id":8364}],[{"start":{"row":45,"column":3},"end":{"row":45,"column":4},"action":"insert","lines":["t"],"id":8365}],[{"start":{"row":45,"column":4},"end":{"row":45,"column":5},"action":"insert","lines":["e"],"id":8366}],[{"start":{"row":45,"column":5},"end":{"row":45,"column":6},"action":"insert","lines":["r"],"id":8367}],[{"start":{"row":45,"column":6},"end":{"row":45,"column":7},"action":"insert","lines":["y"],"id":8368}],[{"start":{"row":45,"column":7},"end":{"row":45,"column":8},"action":"insert","lines":["L"],"id":8369}],[{"start":{"row":45,"column":8},"end":{"row":45,"column":9},"action":"insert","lines":["i"],"id":8370}],[{"start":{"row":45,"column":9},"end":{"row":45,"column":10},"action":"insert","lines":["s"],"id":8371}],[{"start":{"row":45,"column":10},"end":{"row":45,"column":11},"action":"insert","lines":["t"],"id":8372}],[{"start":{"row":45,"column":11},"end":{"row":45,"column":12},"action":"insert","lines":[" "],"id":8373}],[{"start":{"row":45,"column":0},"end":{"row":45,"column":1},"action":"insert","lines":["v"],"id":8374}],[{"start":{"row":45,"column":1},"end":{"row":45,"column":2},"action":"insert","lines":["a"],"id":8375}],[{"start":{"row":45,"column":2},"end":{"row":45,"column":3},"action":"insert","lines":["r"],"id":8376}],[{"start":{"row":45,"column":3},"end":{"row":45,"column":4},"action":"insert","lines":[" "],"id":8377}],[{"start":{"row":45,"column":16},"end":{"row":45,"column":17},"action":"insert","lines":["="],"id":8378}],[{"start":{"row":45,"column":17},"end":{"row":45,"column":18},"action":"insert","lines":[" "],"id":8379}],[{"start":{"row":45,"column":18},"end":{"row":46,"column":0},"action":"insert","lines":["",""],"id":8380}],[{"start":{"row":45,"column":18},"end":{"row":46,"column":0},"action":"remove","lines":["",""],"id":8381}],[{"start":{"row":45,"column":17},"end":{"row":45,"column":18},"action":"remove","lines":[" "],"id":8382}],[{"start":{"row":45,"column":17},"end":{"row":45,"column":18},"action":"insert","lines":[" "],"id":8383}],[{"start":{"row":45,"column":18},"end":{"row":45,"column":20},"action":"insert","lines":["[]"],"id":8384}],[{"start":{"row":45,"column":20},"end":{"row":45,"column":21},"action":"insert","lines":[";"],"id":8385}]]},"ace":{"folds":[],"scrolltop":124,"scrollleft":0,"selection":{"start":{"row":45,"column":21},"end":{"row":45,"column":21},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":6,"state":"no_regex","mode":"ace/mode/javascript"}},"timestamp":1496042328691}