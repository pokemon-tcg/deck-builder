Polymer({computed:{name:"pokemon.set + '_'+ pad(pokemon.number, 3)",src:"'http://www.lackeyccg.com/pokemon/high/cards/' + name + '.jpg'"},pad:function(e,n,o){var e=parseInt(this.pokemon.number),t="undefined"!=typeof o?o:"0",r=new Array(1+n).join(t);return(r+e).slice(-r.length)},showBig:function(){this.$.overlay.toggle()}});