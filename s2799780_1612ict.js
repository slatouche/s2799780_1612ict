if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);
  
  //Helpers
  
  Template.count.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });
  
  //Event Handlers
  
  Template.increase.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
    }
  });

  Template.decrease.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') - 1);
    }
  });
  
  Template.show.events({
    'click button': function () 
    {
      document.getElementById("display").innerHTML = readTextFile("file:////Lab.txt");
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}

function readTextFile(file)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                alert(allText);
            }
        }
    }
    rawFile.send(null);
}