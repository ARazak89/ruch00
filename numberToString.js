let tabEntier=[1,2,3,4,5,6,7,8,9,10];
let tabString= new Array();

function numberToString(tabEntier){
    
    for(i=0;i<10;i++) {
      
        if(tabEntier[i]==1)
          {
            tabString.push("un");
          }
         if (tabEntier[i]==2)
          {
            tabString.push("deux");
          }
         if (tabEntier[i]==3)
          {
            tabString.push("trois");
          }
          if (tabEntier[i]==4)
          {
            tabString[i]="quatre";
          }
          if (tabEntier[i]==5)
          {
            tabString[i]="cinq";
          }
          if (tabEntier[i]==6)
          {
            tabString[i]="six";
          }
          if (tabEntier[i]==7)
          {
            tabString[i]="sept";
          }
          if (tabEntier[i]==8)
          {
            tabString[i]="Huit";
          }
          if (tabEntier[i]==9)
          {
            tabString[i]="neuf";
          }
          if (tabEntier[i]==10)
          {
             tabString[i]="dix";
          }
    }
    return (tabString);
}
console.log("Entrée: " , tabEntier);
      
console.log("Sortie: ",numberToString(tabEntier));

module.exports = numberToString;