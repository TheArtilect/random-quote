
function startPage(){
  


  function randomQuote() {
    var quote = "";
    console.log(quote);
    var quotesHash = {
      0: ['Crush your enemies, see them driven before you and hear the lamentation of their women', 'Conan, The Barbarian'],
      1: ['Curiosity killed the cat, but for awhile, I was a suspect.', 'Steven Wright'],
      2: ['Looks like I just picked a bouquet of oopsie daisies.', "Stan Smith"],
      3: ["All that we see or seem is, but a dream within a dream.", "Edgar Allan Poe"],
      4: ["They call'em fingers, but I've never seen them fing.....oh there they go!", "Otto the Bus Driver"],
      5: ["Well buddy, you're in love with Melissa.  What a mess...", "Peter Griffin"],
      6: ["I use Instagram to compensate for my low self esteem is a bunch of words my therapist said.", "Dom Mazzetti"],
      7: ["Of all the things in me to admire, she picked my apathy. That’s disheartening.", "Shane"],
      8: ["It's on the island I wind my endless ways.  The island, that's all the earth I know.", "Samuel Beckett"],
      9: ["Me fail english?  That's unpossible.", "Ralph Wiggum"],
      10: ["When she sees you'll do anything she says, she's bound to respect you.", "Milhouse von Houten"],
      11: ["Just because I don't care doesn't mean I don't understand.", "Homer Simpson"],
      12: ["Venture and I have been engaged in a deadly game of cat and also-cat for years!", "The Monarch"],
      13: ["I love my dog. I hate bankers. I have issues with women. In my head, I’m a great guy.", "Bill Burr"],
      14: ["My eyes! The googles do nothing!", "Radioactive Man"],
      15: ["Inflammable means flammable?  What a country.", "Dr. Nick"],
      16: ["OMAHA!", 'Peyton Manning'],
      17: ["Why do I fall in love with every woman I see who shows me the least bit of attention?", "Joel Barish"],
      18: ["The dead know only one thing: it is better to be alive.", "Private Joker"],
      19: ["Time's funny. When you're a kid, it passes slowly, and next thing you're fifty and your childhood fits into a rusty little box", "Bretodeau"],
      20: ["My name is Puggy and I live in a tree. I hope I didn't ruin anything for you.", "Puggy"],
      21: ["They carried all they could bear, and then some, including a silent awe for the power of the things they carried.", "Tim O'Brien"],
      22: ["lsdhflsdh flsd hflsdhf lsdhfls dfhlsd fhlsdhf lsdhfls dhfls hdflshdfls dhfls hdflshdfl shdfl shdlf hsdlfhsdlfhsldkfh sldkhf sldfhsdf", 'hsdofhlsdfhlsdkhflsdhflsdf']
    };
    
    var randomNum = Math.floor((Math.random() * (Object.keys(quotesHash).length)));

    var quoteQuote = quotesHash[randomNum][0];
    var quoteAuthor = quotesHash[randomNum][1];
    quote = '"' + quoteQuote + '"' + ' - ' + quoteAuthor;
  
    $(".quote").text(quoteQuote);
    $(".author").text(quoteAuthor);
    
    
    if (quote.length <= 150){
       $("#twitter").show();
       $('.tweet').attr('href', 'https://twitter.com/intent/tweet/?text=' + quote);
    } else {
      $("#twitter").css("display", "none");
    }
   
  };
    
    $("#newquote").on("click", function(){
      randomQuote();
    });


}

$(document).ready(startPage);
$(document).on('page:load', startPage);

