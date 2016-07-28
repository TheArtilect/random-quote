
function startPage(){
  


  function randomQuote() {
    var quote = "";
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
      12: ["Don't you ever get tired of being wrong all the time?", "Unknown"],
      13: ["I love my dog. I hate bankers. I have issues with women. In my head, I’m a great guy.", "Bill Burr"],
      14: ["My eyes! The googles do nothing!", "Radioactive Man"],
      15: ["Inflammable means flammable?  What a country.", "Dr. Nick"],
      16: ["OMAHA!", 'Peyton Manning'],
      17: ["Why do I fall in love with every woman I see who shows me the least bit of attention?", "Joel Barish"],
      18: ["The dead know only one thing: it is better to be alive.", "Private Joker"],
      19: ["Time's funny. When you're a kid, it passes slowly, and next thing you're fifty and your childhood fits into a rusty little box", "Bretodeau"],
      20: ["My name is Puggy and I live in a tree. I hope I didn't ruin anything for you.", "Puggy"],
      21: ["They carried all they could bear, and then some, including a silent awe for the power of the things they carried.", "Tim O'Brien"],
      22: ["Bird law in this country is not governed by reason", "charlie Kelly"],
      23: ["Hummingbirds are a legal tender", "Charlie Kelly"],
      24: ["I'm having feelings again, like some kind of 14 year old kid or something.  You remember feelings, right?", "Dennis Reynolds"],
      25: ["Bro, when you tack on mass, you sacrifice flexibility. That's just a straight up fact", "Mac"],
      26: ["What she gon' do?", "Gaps Martin"],
      27: ["Wisdom without knowledge is like a spoon without soup", "Anuj P."],
      28: ["Poo-tee-weet", "Fritz T."],
      29: ["MMMMMMM...sacrilicious", "Homer Simpson"],
      30: ["If you want him to live, you should roll him over to his stomach.  Remember, IF...", "Dr. Hibbert"],
      31: ["I told my dad about a dream I had and asked what it meant, he said 'it means you were sleeping'", "Steven Wright"],
      32: ["Hell is other people", "Jean-Paul Sarte"],
      33: ["Chocolate?  It's doo-doo baby!", "Dave Chapelle"],
      34: ["I EAT STICKERS ALL THE TIME DUDE!", "Charlie Kelly"],
      35: ["Boo hoo, I don't know how to take advantage of government programs", "Dennis Reynolds"],
      36: ["...because of the implication", "Dennis Reynolds"],
      37: ["Demonstrate value, Engage physically, Nurture dependence, Neglect emotionally, Inspire hope, Separate entirely", "Dennis Reynolds"],
      38: ["Do my worst, eh? Smithers, release the robotic Richard Simmons.", "C. Montgomery Burns"],
      39: ["What is this word, spa? I feel like you're starting to a say a word and you're not finishing it. Are you trying to say spaghetti? Are you taking me for a spaghetti day?", "Charlie Kelly"],
      40: ["I'm not fat. I'm cultivating mass.", "Mac"],
      41: ["It Depends on what the meaning of the word 'is' is", "Bill Clinton"],
      42: ["Smoke some cigarettes. The smoke will suffocate the bacteria in your stomach.", "Mac"],
      43: ["I don't know. I'm not gonna sit here and try and get inside the mind of a dog. I mean, that's God's work. Well, not that I believe in God.", "Rickety Cricket"],
      44: ["I love you, but that hasn't helped at all", "Unknown"],
      45: ["There is a theory which states that if ever anybody discovers exactly what the Universe is for and why it is here, it will instantly disappear and be replaced by something even more bizarre and inexplicable. There is another theory which states that this has already happened.", "Douglas Adams"]
      
      // 22: ["lsdhflsdh flsd hflsdhf lsdhfls dfhlsd fhlsdhf lsdhfls dhfls hdflshdfls dhfls hdflshdfl shdfl shdlf hsdlfhsdlfhsldkfh sldkhf sldfhsdf", 'hsdofhlsdfhlsdkhflsdhflsdf']
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

